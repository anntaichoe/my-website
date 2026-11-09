import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CONTENT, INFO } from './content.js';

/* ============ palette (pulled from the handoff art) ============ */
const C = {
  grass: 0xb5dd7a, grassDark: 0x9fcf68, cliff: 0xb7a9e6, cliffDark: 0x9d8fd6,
  cream: 0xfff5e6, wall: 0xfdf3e6, roof: 0x7d86c9, dome: 0xa99be0, path: 0xf9ead7,
  water: 0x8fd0f2, pink: 0xf3a9c9, pine: 0x8cc152, leaf: 0xa5d36a, trunk: 0xa07651,
  wood: 0xd9a46a, court: 0x5c8fe0, courtEdge: 0x8dc27a, glass: 0xd9f1f4, door: 0xb9a5e6,
};
const NIGHT = { sky: 0x1b2c5e, hemiSky: 0x9aa8f0, hemiGround: 0x4a5a96, sun: 0xaebcff, sunI: 0.7, hemiI: 1.15, water: 0x23386e, grass: 0x6f9b62 };
const DAY = { sky: 0x9ad6f2, hemiSky: 0xffffff, hemiGround: 0xd9e8c9, sun: 0xfff1d6, sunI: 1.45, hemiI: 1.45, water: 0x8fd0f2, grass: 0xb5dd7a };

const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
const matCache = new Map();
const mat = (color, o = {}) => { const k = color + JSON.stringify(o); let m = matCache.get(k); if (!m) { m = new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, metalness: 0, ...o }); matCache.set(k, m); } return m; };
function mergeStatic(root, rel) {
  root.updateMatrixWorld(true); const inv = new THREE.Matrix4().copy(rel.matrixWorld).invert(), buckets = new Map(), rm = [];
  (function walk(o) { for (const ch of o.children) { if (ch.userData.noMerge) continue; if (ch.isMesh) {
    const key = ch.material.uuid + (ch.castShadow ? 1 : 0) + (ch.receiveShadow ? 1 : 0);
    const g = ch.geometry.index ? ch.geometry.toNonIndexed() : ch.geometry.clone(); g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, ch.matrixWorld));
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
    let b = buckets.get(key); if (!b) buckets.set(key, b = { m: ch.material, c: ch.castShadow, r: ch.receiveShadow, gs: [] }); b.gs.push(g); rm.push(ch);
  } else walk(ch); } })(root);
  rm.forEach(m => m.parent.remove(m));
  buckets.forEach(b => { const me = new THREE.Mesh(mergeGeometries(b.gs), b.m); me.castShadow = b.c; me.receiveShadow = b.r; rel.add(me); });
}
const glowMats = [];           // window materials that light up at night
const glowMat = (color = 0xffe7b0) => { const m = mat(color, { emissive: 0xffc46b, emissiveIntensity: 0 }); if (!glowMats.includes(m)) glowMats.push(m); return m; };

const PHOTO_URI = 'data:image/jpeg;base64,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';
/* ============ renderer / scene / iso camera ============ */
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;

const scene = new THREE.Scene();
const skyScene = new THREE.Scene(); skyScene.background = new THREE.Color(DAY.sky);
const cam = new THREE.OrthographicCamera(-10, 10, 10, -10, -100, 200);
const camTarget = new THREE.Vector3(0, 0, 0), camGoal = new THREE.Vector3(0, 0, 0);
let zoom = 1, zoomGoal = 1, baseView = 13.2, BASE_YAW = 0.32, yaw = 0.32, yawGoal = 0.32;
const BASE_ELEV = Math.atan(1 / Math.SQRT2) + 0.08;
let elev = BASE_ELEV, elevGoal = BASE_ELEV;
const camRight = new THREE.Vector3(), camUp = new THREE.Vector3(), camFwd = new THREE.Vector3();
let curV = 13.2;
function placeCam() {
  const d = 40;
  cam.position.set(camTarget.x + Math.sin(yaw) * Math.cos(elev) * d, camTarget.y + Math.sin(elev) * d, camTarget.z + Math.cos(yaw) * Math.cos(elev) * d);
  cam.lookAt(camTarget);
  cam.updateMatrixWorld(); cam.matrixWorld.extractBasis(camRight, camUp, camFwd);
}
function resize() {
  const w = innerWidth, h = innerHeight, a = w / h;
  renderer.setSize(w, h, false);
  const v = (a < 1 ? baseView * (view === 'island' ? 1.2 : 0.8) / a : baseView) / zoom;
  curV = v;
  cam.left = -v * a; cam.right = v * a; cam.top = v; cam.bottom = -v; cam.updateProjectionMatrix();
}
addEventListener('resize', resize);

const hemi = new THREE.HemisphereLight(DAY.hemiSky, DAY.hemiGround, DAY.hemiI); scene.add(hemi);
const sun = new THREE.DirectionalLight(DAY.sun, DAY.sunI); sun.position.set(-12, 22, 10); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 1, far: 80 });
sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.04; scene.add(sun);

/* ============ helpers ============ */
const world = new THREE.Group(); scene.add(world);
function add(parent, geo, m, x = 0, y = 0, z = 0, o = {}) {
  const me = new THREE.Mesh(geo, m); me.position.set(x, y, z);
  if (o.rx) me.rotation.x = o.rx; if (o.ry) me.rotation.y = o.ry; if (o.rz) me.rotation.z = o.rz;
  me.castShadow = o.cast !== false; me.receiveShadow = o.recv !== false; parent.add(me); return me;
}
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, s = 8) => new THREE.CylinderGeometry(rt, rb, h, s);
const ico = (r, d = 0) => new THREE.IcosahedronGeometry(r, d);

/* ============ island ============ */
function blobShape(rx, rz, n, jitter, seed = 0) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const k = 1 + Math.sin(a * 3 + seed) * 0.06 + Math.sin(a * 5 + seed * 2) * 0.05 + (rnd() - 0.5) * jitter;
    pts.push(new THREE.Vector2(Math.cos(a) * rx * k, Math.sin(a) * rz * k));
  }
  return new THREE.Shape(pts);
}
const grassMat = mat(C.grass);
{
  const top = new THREE.ExtrudeGeometry(blobShape(15.5, 10.5, 28, 0.06, 1), { depth: 0.6, bevelEnabled: false });
  top.rotateX(-Math.PI / 2);
  add(world, top, grassMat, 0, -0.6, 0);
  // faceted lavender cliffs, two tiers that reach below the waterline
  [[15.4, 10.4, 2.4, 0.18], [14.6, 9.7, 2.6, 0.2]].forEach(([rx, rz, dep, jit], t) => {
    const g = new THREE.ExtrudeGeometry(blobShape(rx, rz, 24, jit, 3 + t), { depth: dep, bevelEnabled: false }); g.rotateX(-Math.PI / 2);
    const p = g.attributes.position; for (let i = 0; i < p.count; i++) { p.setX(i, p.getX(i) + (rnd() - 0.5) * 0.25); p.setZ(i, p.getZ(i) + (rnd() - 0.5) * 0.25); }
    g.computeVertexNormals(); add(world, g, mat(t ? C.cliffDark : C.cliff), 0, -0.6 - dep * (t + 1) + 0.02 * t, 0);
  });
}
// water
function fadeTex() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256;
  const g2 = cv.getContext('2d'), grd = g2.createRadialGradient(128, 128, 40, 128, 128, 126);
  grd.addColorStop(0, '#fff'); grd.addColorStop(0.62, '#fff'); grd.addColorStop(1, '#000');
  g2.fillStyle = grd; g2.fillRect(0, 0, 256, 256); return new THREE.CanvasTexture(cv);
}
const waterMat = new THREE.MeshStandardMaterial({ color: 0x74c4ea, flatShading: true, roughness: 0.35, transparent: true, alphaMap: fadeTex(), emissive: 0x5fb8ea, emissiveIntensity: 0.22 });
const waterGeo = new THREE.PlaneGeometry(80, 34, 64, 34); waterGeo.rotateX(-Math.PI / 2);
const water = add(world, waterGeo, waterMat, 0, -3.4, 0.4, { cast: false, recv: false }); water.userData.noMerge = true;
{ // soft contact shadow so the island reads as floating, without a shadow-map edge
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const g2 = cv.getContext('2d'), grd = g2.createRadialGradient(64, 64, 6, 64, 64, 64);
  grd.addColorStop(0, 'rgba(40,70,90,.42)'); grd.addColorStop(0.55, 'rgba(40,70,90,.2)'); grd.addColorStop(1, 'rgba(40,70,90,0)');
  g2.fillStyle = grd; g2.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(cv);
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
  sh.rotation.x = -Math.PI / 2; sh.position.set(1.5, -3.33, 2.0); sh.scale.set(32, 23, 1);
  sh.castShadow = sh.receiveShadow = false; sh.userData.noMerge = true; world.add(sh);
}
const waterBase = Float32Array.from(waterGeo.attributes.position.array);

/* ============ layout (world units; island ~ 31 x 21) ============ */
const P = {
  home: new THREE.Vector3(-9, 0, 1.5),          // cottage (About)
  library: new THREE.Vector3(-8.5, 0, -5.5),    // research
  school: new THREE.Vector3(1, 0, -6.5),        // teaching
  museum: new THREE.Vector3(10.5, 0, -3.5),     // projects
  dome: new THREE.Vector3(1.5, 0, 2.5),         // qualifications
  court: new THREE.Vector3(10.5, 0, 5.2),       // pickleball
  phone: new THREE.Vector3(5.9, 0, -4.7),       // decorative phone booth
};
const doors = {
  home: new THREE.Vector3(-7.4, 0, 3.6), library: new THREE.Vector3(-6.2, 0, -3.4), school: new THREE.Vector3(1, 0, -4.1),
  museum: new THREE.Vector3(8.2, 0, -1.6), dome: new THREE.Vector3(1.5, 0, 5.2), court: new THREE.Vector3(8.2, 0, 4.4),
  bench: new THREE.Vector3(-4.0, 0, 6.2),
};
// path graph (nodes) -> avatar walks along these
const N = {
  home: doors.home, library: doors.library, school: doors.school, museum: doors.museum, dome: doors.dome, court: doors.court, bench: doors.bench,
  a: new THREE.Vector3(-4.5, 0, 1.5), b: new THREE.Vector3(-4.2, 0, -3.2), c: new THREE.Vector3(1, 0, -2), d: new THREE.Vector3(6, 0, -1.5), e: new THREE.Vector3(5.5, 0, 4.6), f: new THREE.Vector3(-3, 0, 5.5), start: new THREE.Vector3(-1.6, 0, 4.4),
};
const edges = [['home', 'a'], ['a', 'b'], ['b', 'library'], ['b', 'c'], ['c', 'school'], ['c', 'd'], ['d', 'museum'], ['d', 'e'], ['e', 'court'], ['e', 'dome'], ['a', 'f'], ['f', 'bench'], ['f', 'start'], ['start', 'dome'], ['a', 'dome']];

// path ribbons
const pathMat = mat(C.path, { roughness: 0.95 });
function ribbon(a, b, w = 1.1) {
  const len = a.distanceTo(b), ang = Math.atan2(b.x - a.x, b.z - a.z);
  const m = add(world, box(w, 0.07, len + w * 0.9), pathMat, (a.x + b.x) / 2, 0.02, (a.z + b.z) / 2, { ry: ang, cast: false });
  m.position.y = 0.035;
}
edges.forEach(([a, b]) => ribbon(N[a], N[b]));
Object.values(N).forEach(n => add(world, cyl(0.62, 0.62, 0.07, 9), pathMat, n.x, 0.035, n.z, { cast: false }));

const hitMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false });
function addHitProxy(g, r, y) { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), hitMat); m.position.y = y; m.castShadow = m.receiveShadow = false; m.renderOrder = 999; g.add(m); return m; }
const obstacles = [];   // {x, z, r, h} - solid below height h
const platforms = [];   // {x, z, hx, hz, top, ry} - flat roofs Ann can land on
const nightLights = [];  // outdoor lamps that come up after sunset
/* ---------- building kit ---------- */
const wallMat = mat(C.wall), roofMat = mat(C.roof), cremeMat = mat(C.cream), doorMat = mat(C.door);
const interactive = [];   // {key, group, label}
function windowPane(parent, w, h, x, y, z, ry = 0) { const m = add(parent, box(w, h, 0.08), glowMat(0xfff3d4), x, y, z, { ry, cast: false }); return m; }

function cottage() {
  const g = new THREE.Group(); g.position.copy(P.home); g.rotation.y = 0.25; world.add(g);
  add(g, box(3.6, 1.9, 2.8), wallMat, 0, 0.95, 0);
  const roof = add(g, new THREE.CylinderGeometry(0, 1, 1, 4), roofMat, 0, 2.55, 0, { ry: Math.PI / 4 }); roof.scale.set(2.9, 1.5, 2.2);
  add(g, box(0.5, 1.1, 0.5), cremeMat, 1.0, 2.9, -0.3);
  add(g, box(0.62, 0.15, 0.62), mat(0xd7c9bd), 1.0, 3.5, -0.3);
  add(g, box(0.7, 1.15, 0.1), mat(0xf29a9a), 0.0, 0.58, 1.42);
  add(g, box(1.1, 0.12, 0.5), cremeMat, 0, 0.06, 1.62);
  windowPane(g, 0.7, 0.75, -1.1, 1.1, 1.42); windowPane(g, 0.7, 0.75, 1.1, 1.1, 1.42);
  windowPane(g, 0.1, 0.75, 1.82, 1.1, 0, 0).rotation.y = 0;
  // fence
  for (let i = 0; i < 9; i++) { const a = i / 8; add(g, box(0.1, 0.55, 0.1), cremeMat, -3.4 + a * 3.2, 0.28, 3.2 + Math.sin(a * 3) * 0.1); }
  add(g, box(3.3, 0.08, 0.06), cremeMat, -1.8, 0.45, 3.2); add(g, box(3.3, 0.08, 0.06), cremeMat, -1.8, 0.2, 3.2);
  obstacles.push({ x: P.home.x, z: P.home.z, r: 2.25, h: 3.6 });
  interactive.push({ key: 'home', group: g, label: 'HOME', hit: new THREE.Vector3(0, 1.5, 0), r: 2.4 });
}
function library() {
  const g = new THREE.Group(); g.position.copy(P.library); world.add(g);
  add(g, box(1.4, 2.6, 3.4), wallMat, -2.2, 1.3, 0);
  add(g, box(5.6, 0.25, 4.0), cremeMat, 0.2, 2.7, 0);
  add(g, box(4.0, 2.4, 0.12), mat(0xdbe9c3), 0.9, 1.2, -1.7);        // back wall (sage)
  add(g, box(4.0, 0.12, 3.4), cremeMat, 0.9, 0.06, 0);
  add(g, box(3.4, 0.09, 0.45), wood(), 0.9, 1.35, -1.45);             // shelf
  for (let i = 0; i < 9; i++) add(g, box(0.16, 0.42 + rnd() * 0.12, 0.3), mat([0x9ccf8f, 0xf2c3d2, 0xc8c0ee, 0xf3d9a4][i % 4]), -0.5 + i * 0.36, 1.62, -1.45);
  add(g, box(1.2, 0.5, 0.9), mat(0x92c690), 0.2, 0.3, -0.3); add(g, box(1.2, 0.5, 0.9), mat(0x92c690), 2.1, 0.3, -0.3);
  add(g, cyl(0.45, 0.45, 0.08, 8), wood(), 1.15, 0.38, -0.3); add(g, cyl(0.07, 0.07, 0.35, 6), wood(), 1.15, 0.2, -0.3);
  for (const x of [0.5, 1.8]) { const l = add(g, ico(0.2, 0), glowMat(), x, 2.35, 0.1); l.castShadow = false; add(g, cyl(0.015, 0.015, 0.5, 4), wood(), x, 2.6, 0.1); }
  add(g, box(0.9, 1.8, 0.1), glowMat(0xfff0cf), -2.2, 0.95, 1.72);
  obstacles.push({ x: P.library.x, z: P.library.z, r: 2.7, h: 2.83 });
  platforms.push({ x: P.library.x + 0.2, z: P.library.z, hx: 2.7, hz: 1.9, top: 2.83 });
  interactive.push({ key: 'library', group: g, label: 'RESEARCH', hit: new THREE.Vector3(0, 1.4, 0), r: 2.8 });
}
function wood() { return mat(C.wood); }
function school() {
  const g = new THREE.Group(); g.position.copy(P.school); world.add(g);
  add(g, box(6.2, 2.4, 3.2), wallMat, 0, 1.2, 0);
  add(g, box(2.6, 2.7, 1.4), wallMat, 0, 1.35, 1.9);
  const pedi = add(g, new THREE.CylinderGeometry(1.6, 1.6, 1.6, 3), roofMat, 0, 3.0, 1.9, { rz: 0, ry: 0 }); pedi.rotation.set(Math.PI / 2, 0, Math.PI / 2); pedi.scale.set(0.35, 1, 1);
  for (const x of [-0.85, 0.85]) add(g, cyl(0.12, 0.12, 2.3, 8), cremeMat, x, 1.15, 2.7);
  add(g, box(1.0, 1.5, 0.1), doorMat, 0, 0.78, 2.62);
  for (const x of [-2.3, -1.2, 1.2, 2.3]) add(g, box(0.62, 0.95, 0.08), glowMat(0xf3e9ff), x, 1.4, 1.62);
  add(g, cyl(1.9, 2.4, 0.55, 12), mat(C.dome), 0, 2.9, -0.2);
  const dome = add(g, new THREE.SphereGeometry(1.9, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(C.dome), 0, 3.15, -0.2);
  add(g, ico(0.18, 0), cremeMat, 0, 5.2, -0.2);
  for (const x of [-2.6, 2.6]) { add(g, cyl(0.2, 0.2, 1.1, 6), mat(0x8cc152), x, 0.55, 3.3); add(g, ico(0.4, 0), mat(0x8cc152), x, 1.4, 3.3); }
  add(g, box(2.2, 0.15, 1.2), cremeMat, 0, 0.07, 3.3);
  obstacles.push({ x: P.school.x, z: P.school.z, r: 3.0, h: 2.4 });
  platforms.push({ x: P.school.x, z: P.school.z, hx: 3.0, hz: 1.5, top: 2.4 });
  interactive.push({ key: 'school', group: g, label: 'TEACHING', hit: new THREE.Vector3(0, 2, 1), r: 3.4 });
}
function museum() {
  const g = new THREE.Group(); g.position.copy(P.museum); world.add(g);
  add(g, box(1.6, 2.5, 3.4), wallMat, -1.9, 1.25, 0);
  add(g, box(5.2, 0.25, 4.0), cremeMat, 0.3, 2.6, 0);
  add(g, box(3.6, 2.3, 0.12), mat(0xffecc9), 0.8, 1.15, -1.6, {});
  add(g, box(3.6, 0.12, 3.2), cremeMat, 0.8, 0.06, 0);
  // framed art
  add(g, box(0.9, 0.7, 0.08), mat(0xa9d4ee), 0.4, 1.45, -1.5); add(g, box(0.9, 0.7, 0.08), mat(0xf4c0cf), 1.6, 1.45, -1.5);
  for (const x of [0.4, 1.6]) add(g, ico(0.2, 0), glowMat(0xfff3d4), x, 2.2, -1.2);
  for (const x of [0.2, 1.3, 2.3]) { add(g, box(0.4, 0.55, 0.4), cremeMat, x, 0.3, 0.2); add(g, ico(0.17, 0), mat([0xf3a9c9, 0xa9d4ee, 0xf3d9a4][Math.round((x * 3)) % 3]), x, 0.8, 0.2); }
  add(g, box(1.0, 1.9, 0.1), glowMat(0xfff0cf), -1.9, 1.0, 1.72);
  add(g, box(2.4, 0.2, 0.9), cremeMat, -0.4, 0.1, 2.2);
  obstacles.push({ x: P.museum.x, z: P.museum.z, r: 2.7, h: 2.73 });
  platforms.push({ x: P.museum.x + 0.3, z: P.museum.z, hx: 2.5, hz: 1.9, top: 2.73 });
  interactive.push({ key: 'museum', group: g, label: 'PROJECTS', hit: new THREE.Vector3(0, 1.4, 0), r: 2.9 });
}
function dome() {
  const g = new THREE.Group(); g.position.copy(P.dome); world.add(g);
  add(g, cyl(3.0, 3.2, 0.4, 14), cremeMat, 0, 0.2, 0);
  const glass = new THREE.Mesh(new THREE.IcosahedronGeometry(2.9, 1), new THREE.MeshStandardMaterial({ color: C.glass, flatShading: true, transparent: true, opacity: 0.28, roughness: 0.1, side: THREE.DoubleSide }));
  glass.position.y = 0.4; glass.scale.y = 0.95; glass.castShadow = false; g.add(glass);
  const wire = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2.92, 1)), new THREE.LineBasicMaterial({ color: 0xe6c9a0 })); wire.position.y = 0.4; wire.scale.y = 0.95; g.add(wire);
  // clip lower half visually with a floor disc
  add(g, cyl(2.9, 2.9, 0.05, 14), mat(0xe5d9c2), 0, 0.42, 0);
  for (const [x, z, s] of [[-1.0, 0.2, 1.1], [1.1, -0.3, 1.0], [0, -1.1, 0.9]]) { add(g, box(1.0 * s, 0.35, 0.8 * s), wood(), x, 0.65, z); for (let i = 0; i < 6; i++) { const l = add(g, new THREE.ConeGeometry(0.16, 1.1 * s, 4), mat(0x6cb04a), x + (rnd() - 0.5) * 0.7 * s, 1.3, z + (rnd() - 0.5) * 0.5 * s); l.rotation.set((rnd() - 0.5) * 0.7, rnd() * 3, (rnd() - 0.5) * 0.7); } }
  const lamp = add(g, ico(0.25, 0), glowMat(0xfff1c4), 0, 2.2, 0); lamp.castShadow = false;
  add(g, box(1.0, 0.1, 0.6), cremeMat, 0, 0.1, 3.5, { recv: true });
  obstacles.push({ x: P.dome.x, z: P.dome.z, r: 2.55, h: 3.6 });
  interactive.push({ key: 'dome', group: g, label: 'QUALIFICATIONS', hit: new THREE.Vector3(0, 1.6, 0), r: 3.2 });
}
function court() {
  const g = new THREE.Group(); g.position.copy(P.court); g.rotation.y = -0.18; world.add(g);
  add(g, box(7.0, 0.1, 4.6), mat(C.courtEdge), 0, 0.05, 0, { cast: false });
  add(g, box(6.2, 0.12, 3.9), mat(C.court), 0, 0.07, 0, { cast: false });
  add(g, box(0.06, 0.13, 3.9), mat(0xffffff), 0, 0.09, 0, { cast: false });
  for (const x of [-1.9, 1.9]) add(g, box(0.05, 0.13, 3.9), mat(0xffffff), x, 0.09, 0, { cast: false });
  add(g, box(6.2, 0.05, 0.05), mat(0xffffff), 0, 0.09, 0, { cast: false });
  for (const z of [-2.05, 2.05]) add(g, cyl(0.05, 0.05, 0.85, 6), mat(0xffffff), 0, 0.48, z);
  const net = add(g, box(0.04, 0.45, 4.1), mat(0x2a3550, { transparent: true, opacity: 0.8 }), 0, 0.7, 0); net.castShadow = false;
  const pad = (c, x) => { const p = new THREE.Group(); add(p, cyl(0.2, 0.2, 0.04, 8), mat(c), 0, 0, 0, { rx: Math.PI / 2 }); add(p, box(0.05, 0.3, 0.05), wood(), 0, -0.25, 0); p.position.set(x, 0.2, 2.9); p.rotation.set(0.1, 0, 0.5); g.add(p); };
  pad(0x7ec3ec, 2.6); pad(0xf6d98f, -2.5);
  for (const [lx, lz] of [[-2.8, -2.7], [2.8, -2.7]]) {
    add(g, cyl(0.2, 0.26, 0.22, 8), mat(0xd9cfc2), lx, 0.11, lz);
    add(g, cyl(0.08, 0.11, 3.8, 6), mat(0xbcc6cc), lx, 2.0, lz);
    add(g, box(0.96, 0.3, 0.5), mat(0x8e979f), lx, 3.95, lz + 0.1);
    add(g, box(0.86, 0.16, 0.42), glowMat(0xfff6d2), lx, 3.78, lz + 0.02, { cast: false });
    const pl = new THREE.PointLight(0xfff0c4, 0, 17, 1.4); pl.position.set(lx, 3.6, lz + 0.3); g.add(pl);
    nightLights.push({ l: pl, power: 20 });
  }
  interactive.push({ key: 'court', group: g, label: 'PICKLEBALL', hit: new THREE.Vector3(0, 0.6, 0), r: 3.4 });
  court.group = g;
}

function phoneBooth() {
  const g = new THREE.Group(); g.position.copy(P.phone); g.rotation.y = -0.5; world.add(g);
  const red = mat(0xd4514a), redD = mat(0xb63f3a), cream = mat(0xf6efe0);
  const glass = new THREE.MeshStandardMaterial({ color: 0xdff2fb, flatShading: true, transparent: true, opacity: 0.5, roughness: 0.12 });
  add(g, box(1.5, 0.16, 1.5), mat(0xd9cfc2), 0, 0.08, 0);
  for (const [px, pz] of [[-0.62, -0.62], [0.62, -0.62], [-0.62, 0.62], [0.62, 0.62]]) add(g, box(0.18, 2.6, 0.18), red, px, 1.42, pz);
  for (const [px, pz, ry] of [[0, -0.62, 0], [0, 0.62, 0], [-0.62, 0, Math.PI / 2], [0.62, 0, Math.PI / 2]]) {
    add(g, box(1.06, 2.1, 0.07), glass, px, 1.6, pz, { ry, cast: false });
    for (const by of [0.92, 1.45, 1.98, 2.5]) add(g, box(1.08, 0.07, 0.1), red, px, by, pz, { ry });
    add(g, box(0.08, 2.1, 0.1), red, px, 1.6, pz, { ry });
  }
  add(g, box(1.62, 0.32, 1.62), red, 0, 2.86, 0);
  add(g, box(1.34, 0.24, 1.34), redD, 0, 3.14, 0);
  add(g, ico(0.14, 0), mat(0xf3d9a4), 0, 3.34, 0);
  for (const [px, pz, ry] of [[0, -0.82, 0], [0.82, 0, Math.PI / 2]]) add(g, box(0.92, 0.22, 0.05), cream, px, 2.6, pz, { ry, cast: false });
  add(g, box(0.9, 0.5, 0.06), glowMat(0xfff0cf), 0, 1.05, -0.56, { cast: false });
  obstacles.push({ x: P.phone.x, z: P.phone.z, r: 1.15, h: 3.4 });
  phoneBooth.group = g;
}
const BENCH = { x: -4.6, z: 7.4, seatY: 0.5, face: BASE_YAW };
function parkBench() {
  const g = new THREE.Group(); g.position.set(BENCH.x, 0, BENCH.z); g.rotation.y = BENCH.face; world.add(g);
  const slat = mat(0xd9a46a), slatD = mat(0xc08f5e), iron = mat(0x79838d);
  for (const sx of [-0.92, 0.92]) {
    add(g, box(0.12, 0.5, 0.12), iron, sx, 0.25, 0.22);
    add(g, box(0.12, 0.5, 0.12), iron, sx, 0.25, -0.22);
    add(g, box(0.11, 0.62, 0.11), iron, sx, 0.78, -0.3);          // back post
    add(g, box(0.13, 0.08, 0.66), slat, sx, 0.76, -0.02);         // armrest
  }
  for (let i = 0; i < 4; i++) add(g, box(2.2, 0.08, 0.15), i % 2 ? slatD : slat, 0, 0.5, -0.26 + i * 0.18);
  for (let i = 0; i < 3; i++) add(g, box(2.2, 0.13, 0.08), i % 2 ? slatD : slat, 0, 0.74 + i * 0.2, -0.33);
  add(g, box(2.3, 0.07, 0.1), slatD, 0, 1.19, -0.33);
  g.userData.noMerge = true;            // stays raycastable after the world merge
  addHitProxy(g, 1.1, 0.6);
  obstacles.push({ x: BENCH.x, z: BENCH.z, r: 1.0, h: 1.3 });
  parkBench.group = g;
}
/* ---------- nature ---------- */
function pine(x, z, s = 1) { obstacles.push({ x, z, r: 0.5 * s, h: 4.5 }); const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s); world.add(g); add(g, cyl(0.12, 0.16, 0.5, 5), mat(C.trunk), 0, 0.25, 0); for (let i = 0; i < 4; i++) add(g, new THREE.ConeGeometry(0.95 - i * 0.18, 1.0, 6), mat(i % 2 ? 0x95c95a : C.pine), 0, 0.95 + i * 0.62, 0, { ry: i });
  for (let i = 0; i < 5; i++) { const a = rnd() * 6.3, r = 0.45 + rnd() * 0.3; add(g, ico(0.075, 0), glowMat(0xfff3c8), Math.cos(a) * r, 1.1 + rnd() * 1.9, Math.sin(a) * r, { cast: false }); }
  return g; }
const swayers = [];
function blossom(x, z, s = 1, color = C.pink) { obstacles.push({ x, z, r: 0.5 * s, h: 3.6 }); const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s); world.add(g); add(g, cyl(0.12, 0.2, 1.5, 5), mat(C.trunk), 0, 0.75, 0, { rz: 0.08 }); const cm = mat(color); [[0, 2.1, 0, 0.95], [0.6, 1.8, 0.2, 0.7], [-0.6, 1.9, -0.2, 0.7], [0.1, 2.7, 0.1, 0.6], [-0.1, 1.7, 0.6, 0.6]].forEach(([a, b, c, r]) => { const m = add(g, ico(r, 0), cm, a, b, c); m.rotation.set(rnd() * 3, rnd() * 3, 0); });
  for (let i = 0; i < 7; i++) { const a = rnd() * 6.3, r = 0.55 + rnd() * 0.55; add(g, ico(0.08, 0), glowMat(0xfff3c8), Math.cos(a) * r, 1.6 + rnd() * 1.3, Math.sin(a) * r, { cast: false }); }
  swayers.push(g); return g; }
function roundTree(x, z, s = 1) { obstacles.push({ x, z, r: 0.5 * s, h: 2.6 }); const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s); world.add(g); add(g, cyl(0.1, 0.15, 1.0, 5), mat(C.trunk), 0, 0.5, 0); add(g, ico(0.85, 0), mat(C.leaf), 0, 1.5, 0); add(g, ico(0.55, 0), mat(0xb8de7c), 0.4, 1.2, 0.3);
  for (let i = 0; i < 4; i++) { const a = rnd() * 6.3; add(g, ico(0.075, 0), glowMat(0xfff3c8), Math.cos(a) * 0.7, 1.2 + rnd() * 0.9, Math.sin(a) * 0.7, { cast: false }); }
  swayers.push(g); }
function bush(x, z, s = 1) { const g = new THREE.Group(); g.position.set(x, 0.12 * s, z); world.add(g); for (let i = 0; i < 3; i++) { const m = add(g, ico(0.3 * s, 0), mat(i % 2 ? 0x8cc65a : 0x9ed36a), (rnd() - 0.5) * 0.5 * s, 0.1 * i, (rnd() - 0.5) * 0.5 * s); m.rotation.set(rnd(), rnd(), 0); } }
function rock(x, y, z, s = 1, c = C.cliff) { const m = add(world, ico(0.6 * s, 0), mat(c), x, y, z); m.rotation.set(rnd() * 3, rnd() * 3, 0); m.scale.y = 0.75; }

/* ---------- stream, waterfall, bridge, dock ---------- */
const streamPts = [new THREE.Vector3(-5.6, 0, -4.4), new THREE.Vector3(-5.4, 0, -1.2), new THREE.Vector3(-5.8, 0, 2.2), new THREE.Vector3(-6.4, 0, 5.2), new THREE.Vector3(-7.5, 0, 8.8)];
const streamCurve = new THREE.CatmullRomCurve3(streamPts);
const streamMat = mat(C.water, { roughness: 0.2, emissive: 0x5ab6e8, emissiveIntensity: 0.12, transparent: true, opacity: 0.95 });
{
  const seg = 28; for (let i = 0; i < seg; i++) { const a = streamCurve.getPoint(i / seg), b = streamCurve.getPoint((i + 1) / seg); const len = a.distanceTo(b); const m = add(world, box(1.0, 0.05, len + 0.15), streamMat, (a.x + b.x) / 2, -0.01, (a.z + b.z) / 2, { ry: Math.atan2(b.x - a.x, b.z - a.z), cast: false }); }
  // rocky cascade
  add(world, box(2.2, 1.6, 1.2), mat(C.cliff), -5.5, 0.6, -5.2);
  add(world, box(1.3, 1.5, 0.15), mat(0xa6defa, { emissive: 0x6cc4f0, emissiveIntensity: 0.18, transparent: true, opacity: 0.95 }), -5.5, 0.65, -4.55);
  const fall = add(world, box(1.0, 1.3, 0.06), mat(0xe7f8ff, { transparent: true, opacity: 0.85, emissive: 0xbfeaff, emissiveIntensity: 0.25 }), -5.5, 0.62, -4.45, { cast: false }); fall.userData.noMerge = true;
  rock(-6.6, 0.3, -5, 1.1); rock(-4.4, 0.3, -5.4, 1.2); rock(-6.9, 0.2, -3.6, 0.8);
  // bridge
  const br = new THREE.Group(); br.position.set(-5.7, 0, 1.1); world.add(br);
  add(br, box(1.9, 0.18, 2.0), cremeMat, 0, 0.45, 0);
  add(br, box(1.4, 0.2, 1.6), cremeMat, 0, 0.62, 0).scale.set(1, 0.6, 1);
  for (const x of [-0.95, 0.95]) { add(br, box(0.12, 0.34, 2.0), cremeMat, x, 0.74, 0); add(br, ico(0.13, 0), glowMat(0xfff0cf), x, 1.0, 0.95); add(br, ico(0.13, 0), glowMat(0xfff0cf), x, 1.0, -0.95); }
  add(br, box(1.0, 0.5, 0.6), cremeMat, 0, 0.2, -0.8, { cast: false });
  // dock
  const dk = new THREE.Group(); dk.position.set(-7.7, 0, 8.4); dk.rotation.y = -0.3; world.add(dk);
  add(dk, box(2.4, 0.14, 1.6), wood(), 0, -0.25, 0); for (const [x, z] of [[-1.1, -0.7], [1.1, -0.7], [-1.1, 0.7], [1.1, 0.7]]) add(dk, box(0.12, 1.0, 0.12), wood(), x, -0.7, z);
}

/* ---------- build everything ---------- */
cottage(); library(); school(); museum(); dome(); court(); phoneBooth(); parkBench();
[[-13, -1.5, 1.3], [-12.2, 4, 1.0], [-10.2, 5.5, 0.9]].forEach(([x, z, s]) => roundTree(x, z, s));
blossom(-13.2, 0.4, 1.35); blossom(-11, -2.2, 1.0); blossom(-4.6, 0.2, 1.1); blossom(3.6, -4.8, 1.0); blossom(13.2, -1.5, 1.1); blossom(13, 4.6, 1.15); blossom(5.2, 6.4, 1.0); blossom(-6.5, -7.8, 1.1);
[[-12.5, -6, 1.3], [-10.8, -8, 1], [-13.5, -4.3, 1], [-3.5, -8, 1.2], [6.5, -8, 1.2], [13.6, -6.2, 1.4], [14.2, 1.5, 1.2], [0.4, 7.6, 1.3], [-5, 5.4, 1]].forEach(([x, z, s]) => pine(x, z, s));
for (let i = 0; i < 46; i++) { const a = rnd() * Math.PI * 2, r = 3 + rnd() * 11; const x = Math.cos(a) * r * 1.2, z = Math.sin(a) * r * 0.75; if (Math.abs(x) < 14.5 && Math.abs(z) < 9.3) bush(x, z, 0.7 + rnd() * 0.6); }
for (let i = 0; i < 16; i++) { const a = rnd() * Math.PI * 2; rock(Math.cos(a) * 16, -3.4 + rnd() * 0.6, Math.sin(a) * 11.5, 0.8 + rnd() * 1.2, i % 2 ? C.cliff : C.cliffDark); }
interactive.forEach(it => { mergeStatic(it.group, it.group); it.group.userData.noMerge = true; it.base = it.group.position.y; });
mergeStatic(world, world);
// clouds
const clouds = [];
for (let i = 0; i < 6; i++) { const g = new THREE.Group(); const cm = mat(0xffffff, { roughness: 1, emissive: 0xffffff, emissiveIntensity: 0.18, transparent: true, opacity: 0.92 }); for (let j = 0; j < 4; j++) add(g, ico(1 + rnd() * 0.7, 0), cm, j * 1.3 - 2, rnd() * 0.4, rnd() * 0.8, { cast: false }); g.scale.setScalar(0.55 + rnd() * 0.3); g.position.set(-36 + i * 14, 10 + rnd() * 3, -26 + rnd() * 5); g.userData.noMerge = true; g.userData.speed = 0.15 + rnd() * 0.12; world.add(g); clouds.push(g); }
// petals + fireflies
const petalCount = 70, petalGeo = new THREE.BufferGeometry(), petalPos = new Float32Array(petalCount * 3);
for (let i = 0; i < petalCount; i++) { petalPos[i * 3] = -14 + rnd() * 28; petalPos[i * 3 + 1] = rnd() * 7; petalPos[i * 3 + 2] = -9 + rnd() * 18; }
petalGeo.setAttribute('position', new THREE.BufferAttribute(petalPos, 3));
const petals = new THREE.Points(petalGeo, new THREE.PointsMaterial({ color: 0xffc2da, size: 0.16, transparent: true, opacity: 0.9 })); scene.add(petals);
const flyGeo = new THREE.BufferGeometry(), flyPos = new Float32Array(40 * 3);
for (let i = 0; i < 40; i++) { flyPos[i * 3] = -13 + rnd() * 26; flyPos[i * 3 + 1] = 0.5 + rnd() * 2.5; flyPos[i * 3 + 2] = -8 + rnd() * 16; }
flyGeo.setAttribute('position', new THREE.BufferAttribute(flyPos, 3));
const flyMat = new THREE.PointsMaterial({ color: 0xfff1a8, size: 0.2, transparent: true, opacity: 0 }); const flies = new THREE.Points(flyGeo, flyMat); scene.add(flies);

/* ============ characters ============ */
function makeAnn() {
  const g = new THREE.Group();
  const skin = mat(0xf7d3bd), hair = mat(0x332e32), tee = mat(0xf7efda), denim = mat(0x5a7fb0),
        denimDark = mat(0x4b6c98), shoes = mat(0xf4ece0), blush = mat(0xf0a3a6), ink = mat(0x4a4046);
  const legs = {};
  for (const side of ['L', 'R']) {
    const hip = new THREE.Group(); hip.position.set(side === 'L' ? -0.13 : 0.13, 0.52, 0);
    add(hip, box(0.21, 0.28, 0.23), denim, 0, -0.14, 0);
    const knee = new THREE.Group(); knee.position.y = -0.28; hip.add(knee);
    add(knee, box(0.2, 0.22, 0.21), denimDark, 0, -0.11, 0);
    add(knee, box(0.23, 0.1, 0.31), shoes, 0, -0.245, 0.05);
    g.add(hip); legs['leg' + side] = hip; legs['knee' + side] = knee;
  }
  add(g, box(0.62, 0.62, 0.38), tee, 0, 0.84, 0);
  add(g, box(0.64, 0.12, 0.4), denim, 0, 0.55, 0);
  add(g, box(0.66, 0.14, 0.42), tee, 0, 1.1, 0);
  const armL = new THREE.Group(), armR = new THREE.Group(); armL.position.set(-0.35, 1.04, 0); armR.position.set(0.35, 1.04, 0);
  for (const A of [armL, armR]) {
    add(A, box(0.15, 0.2, 0.17), tee, 0, -0.09, 0);
    add(A, box(0.12, 0.28, 0.14), skin, 0, -0.33, 0);
    add(A, box(0.13, 0.12, 0.15), skin, 0, -0.52, 0);
  }
  g.add(armL, armR);
  add(g, box(0.17, 0.1, 0.17), skin, 0, 1.15, 0);
  const head = new THREE.Group(); head.position.y = 1.52; g.add(head); head.scale.setScalar(1.35);
  add(head, ico(0.33, 2), skin, 0, 0, 0);
  const back = add(head, ico(0.35, 1), hair, 0, 0.05, -0.13); back.scale.set(0.99, 0.96, 0.88);
  add(head, ico(0.21, 1), hair, -0.02, 0.4, -0.12);
  const fringe = add(head, box(0.56, 0.17, 0.3), hair, 0, 0.235, 0.07); fringe.rotation.x = -0.16;
  add(head, box(0.12, 0.32, 0.15), hair, -0.3, 0.0, -0.02); add(head, box(0.12, 0.32, 0.15), hair, 0.3, 0.0, -0.02);
  for (const x of [-0.12, 0.12]) add(head, ico(0.038, 1), ink, x, -0.01, 0.3, { cast: false });
  for (const x of [-0.21, 0.21]) { const m = add(head, ico(0.055, 1), blush, x, -0.1, 0.26, { cast: false }); m.scale.set(1.3, 0.75, 0.6); }
  const smile = add(head, new THREE.TorusGeometry(0.075, 0.016, 4, 10, Math.PI), ink, 0, -0.04, 0.3, { cast: false });
  smile.rotation.z = Math.PI;
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.36, 14), new THREE.MeshBasicMaterial({ color: 0x3c5a4c, transparent: true, opacity: 0.2 }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.05; g.add(shadow);
  g.userData = Object.assign({ armL, armR, head, shadow, wave: 0, sit: 0, swing: 0 }, legs);
  return g;
}
// one pose routine for walking, idling and sitting, shared by the island and every room
function poseWalker(o, moving, dt, t, phase) {
  const u = o.userData; if (u.wave > 0) u.wave = Math.max(0, u.wave - dt);
  const waving = u.wave > 0;
  if (u.sit > 0.01) {
    const k = Math.min(1, u.sit);
    u.legL.rotation.x = -1.45 * k; u.legR.rotation.x = -1.45 * k;
    u.kneeL.rotation.x = 1.5 * k; u.kneeR.rotation.x = 1.5 * k;
    u.armL.rotation.x = -0.3 * k; if (!waving) u.armR.rotation.x = -0.3 * k;
    u.head.rotation.y = Math.sin(t * 0.6) * 0.1;
  } else if (moving) {
    const sn = Math.sin(phase);
    u.legL.rotation.x = sn * 0.72; u.legR.rotation.x = -sn * 0.72;
    u.kneeL.rotation.x = Math.max(0, -sn) * 0.75; u.kneeR.rotation.x = Math.max(0, sn) * 0.75;
    u.armL.rotation.x = -sn * 0.5; if (!waving) u.armR.rotation.x = sn * 0.5;
  } else {
    u.legL.rotation.x *= 0.8; u.legR.rotation.x *= 0.8;
    u.kneeL.rotation.x *= 0.8; u.kneeR.rotation.x *= 0.8;
    u.armL.rotation.x *= 0.8; if (!waving) u.armR.rotation.x *= 0.8;
  }
  if (waving) { u.armR.rotation.x = -2.5; u.armR.rotation.z = -0.5 + Math.sin(t * 16) * 0.5; u.head.rotation.z = Math.sin(t * 8) * 0.06; }
  else { u.armR.rotation.z *= 0.8; u.head.rotation.z *= 0.85; }
  if (u.swing > 0) {                                   // a paddle swing overrides the arm
    u.swing = Math.max(0, u.swing - dt);
    const k = Math.sin((1 - u.swing / 0.45) * Math.PI);
    u.armR.rotation.x = -0.2 - k * 2.3; u.armR.rotation.z = -k * 0.7;
  }
}
function makeDog(body, ear, tail, floppy) {
  const g = new THREE.Group(); const b = mat(body), e = mat(ear);
  add(g, box(0.5, 0.3, 0.28), b, 0, 0.32, 0); add(g, box(0.28, 0.28, 0.26), b, 0.3, 0.46, 0);
  add(g, box(0.12, 0.1, 0.1), mat(0x3b3434), 0.46, 0.44, 0);
  for (const z of [-0.1, 0.1]) { add(g, box(0.05, 0.05, 0.04), mat(0x2b2626), 0.43, 0.52, z * 1.1, { cast: false }); add(g, floppy ? box(0.08, 0.2, 0.08) : new THREE.ConeGeometry(0.07, 0.2, 4), e, 0.28, floppy ? 0.46 : 0.68, z * 2.2); }
  const legs = []; for (const [x, z] of [[-0.18, -0.1], [-0.18, 0.1], [0.18, -0.1], [0.18, 0.1]]) { const l = add(g, box(0.07, 0.2, 0.07), b, x, 0.1, z); legs.push(l); }
  const t = add(g, box(0.1, 0.1, 0.22), mat(tail), -0.3, 0.45, 0); t.rotation.y = 0; t.geometry.translate(0, 0, 0);
  g.userData = { tail: t, legs };
  return g;
}
const clickables = [];   // {obj, label, fn}
const ANN_SCALE = 1.7, ANN_HIP = 0.52 * ANN_SCALE;
let annSeat = null;
function sitAnnAt(s) {
  annSeat = s; walk = null; jumpY = 0; jumpV = 0; jumpN = 0; airborne = false;
  ann.position.set(s.x, s.seatY - ANN_HIP, s.z); ann.rotation.y = s.face;
  toastMsg('A good spot to watch the water \u2661');
}
function standAnn() {
  if (!annSeat) return;
  const f = annSeat.face;
  ann.position.set(annSeat.x + Math.sin(f) * 1.35, 0, annSeat.z + Math.cos(f) * 1.35);
  annSeat = null;
}
const ann = makeAnn(); ann.scale.setScalar(1.7); ann.position.copy(N.start); ann.rotation.y = 0.32; world.add(ann);
addHitProxy(ann, 0.75, 0.95);
function waveAnn() { ann.userData.wave = 1.6; toastMsg('Hi, I\u2019m Ann! \u2661'); }
clickables.push({ obj: ann, label: 'SAY HI', fn: waveAnn });
clickables.push({ obj: parkBench.group, label: 'SIT ON THE BENCH',
  fn: () => annSeat ? standAnn() : walkTo('bench', () => sitAnnAt(BENCH)) });

const junbi = makeDog(0xfaf8f0, 0xf1e4e4, 0xffffff, false);     // Junbi - white
const jjanggu = makeDog(0xdfb183, 0xbe8e65, 0xe6bd90, true);    // Jjanggu - brown
junbi.scale.setScalar(1.35); jjanggu.scale.setScalar(1.35);
[junbi, jjanggu].forEach(d => addHitProxy(d, 0.62, 0.38));
junbi.position.set(-9.9, 0, 5.2); jjanggu.position.set(-8.5, 0, 5.5); world.add(junbi, jjanggu);
const dogs = [
  { g: junbi, home: new THREE.Vector3(-9.9, 0, 5.2), bowl: new THREE.Vector3(-10.7, 0, 6.4), t: 0, goal: null, name: 'Junbi', hop: 0 },
  { g: jjanggu, home: new THREE.Vector3(-8.5, 0, 5.5), bowl: new THREE.Vector3(-7.6, 0, 6.4), t: 1.4, goal: null, name: 'Jjanggu', hop: 0 }
];
dogs.forEach(d => clickables.push({ obj: d.g, label: 'PET ' + d.name.toUpperCase(), fn: () => petDog(d) }));
// bowls + kibble
dogs.forEach((d, i) => {
  const bowl = new THREE.Group(); bowl.position.copy(d.bowl); world.add(bowl); addHitProxy(bowl, 0.42, 0.14);
  add(bowl, cyl(0.26, 0.18, 0.16, 10), mat(i ? 0xe7b7c6 : 0xb7d7e8), 0, 0.08, 0);
  add(bowl, cyl(0.2, 0.2, 0.03, 10), mat(0xf6f1e2), 0, 0.17, 0, { cast: false });
  const food = new THREE.Group(); food.visible = false; bowl.add(food);
  for (let k = 0; k < 7; k++) add(food, ico(0.055, 0), mat(0xb58c61), (rnd() - 0.5) * 0.26, 0.19 + rnd() * 0.04, (rnd() - 0.5) * 0.26, { cast: false });
  d.bowlEl = bowl; d.food = food;
  clickables.push({ obj: bowl, label: 'FEED ' + d.name.toUpperCase(), fn: () => feedDog(d) });
});
function hearts(pos, n = 3) {
  for (let i = 0; i < n; i++) {
    const h = new THREE.Mesh(ico(0.09, 0), mat(0xf27d9d, { emissive: 0xf27d9d, emissiveIntensity: 0.4 }));
    h.position.copy(pos).add(new THREE.Vector3((rnd() - 0.5) * 0.4, 0.7 + rnd() * 0.2, (rnd() - 0.5) * 0.4));
    h.castShadow = false; world.add(h); fx.push({ m: h, t: 0, life: 1.1 });
  }
}
const fx = [];
function petDog(d) { d.hop = 0.9; hearts(d.g.position); toastMsg(d.name + ' loves the pets! \u2661'); }
function feedDog(d) { d.food.visible = true; d.fedUntil = T + 6; d.goal = d.bowl.clone(); d.t = T + 5; toastMsg('Dinner for ' + d.name + '!'); }
let toastT = 0;
function toastMsg(m) { const el = document.getElementById('toast'); el.textContent = m; el.classList.add('on'); toastT = T + 2.2; }

/* ---------- sky layer: Diamond Head, rainbow, moon, stars ---------- */
const rainbowMats = [];
const skyLayer = new THREE.Group(); skyScene.add(skyLayer);
const horizonG = new THREE.Group(); skyLayer.add(horizonG);
const skyMat = (color, opacity = 1) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide });
const ridgeMats = [];
const HORIZON = 7.5;
{ // ocean band of the backdrop, hazing out at the horizon line
  const cv = document.createElement('canvas'); cv.width = 4; cv.height = 256;
  const g2 = cv.getContext('2d'), grd = g2.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, 'rgba(255,255,255,0)'); grd.addColorStop(0.1, 'rgba(255,255,255,.75)'); grd.addColorStop(0.3, '#fff'); grd.addColorStop(1, '#fff');
  g2.fillStyle = grd; g2.fillRect(0, 0, 4, 256);
  const m = new THREE.MeshBasicMaterial({ color: 0x74c4ea, transparent: true, alphaMap: new THREE.CanvasTexture(cv), depthWrite: false });
  ridgeMats.push({ m, day: 0x74c4ea, night: 0x1d3463 });
  const q = new THREE.Mesh(new THREE.PlaneGeometry(130, 40), m);
  q.position.set(0, HORIZON - 20, 0); q.renderOrder = -15; horizonG.add(q);
}
function ridge(profile, lift, day, night, order) {
  const pts = profile.map(([x, y]) => [x, y + lift]);
  const sh = new THREE.Shape(); sh.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) sh.lineTo(pts[i][0], pts[i][1]);
  sh.lineTo(pts[pts.length - 1][0], lift); sh.lineTo(pts[0][0], lift); sh.closePath();
  const m = skyMat(day, 1); ridgeMats.push({ m, day, night });
  const me = new THREE.Mesh(new THREE.ShapeGeometry(sh), m); me.renderOrder = order; horizonG.add(me); return me;
}
// far headland, then Diamond Head's crater profile in front of it
ridge([[-40, 0], [-30, 2.3], [-21, 1.3], [-14, 2.9], [-6, 1.6], [1, 2.4], [9, 1.0], [17, 0]], HORIZON - 0.25, 0xa8cadb, 0x263861, -14);
ridge([[1, 0], [4.4, 1.8], [7.6, 2.7], [10.0, 2.0], [12.2, 3.1], [15.4, 1.8], [18.6, 2.5], [22.2, 0.8], [26, 0]], HORIZON - 0.3, 0x9cbdac, 0x223a5e, -13);
// rainbow
const rainbow = new THREE.Group(); rainbow.position.set(1.0, -1.2, 0); skyLayer.add(rainbow);
[0xff9d9d, 0xffc98a, 0xfff2a1, 0xa9e8a4, 0x9fd0f5, 0xc6b1f0].forEach((col, i) => {
  const m = skyMat(col, 0.24); rainbowMats.push(m);
  const t = new THREE.Mesh(new THREE.TorusGeometry(12.6 - i * 0.4, 0.19, 3, 56, Math.PI), m);
  t.renderOrder = -16; t.castShadow = t.receiveShadow = false; rainbow.add(t);
});
// the rainbow's arc comes back at night as a line of stars
const arcGeo = new THREE.BufferGeometry(), arcN = 110, apos = new Float32Array(arcN * 3);
for (let i = 0; i < arcN; i++) {
  const a = (i / (arcN - 1)) * Math.PI, r = 10.6 + rnd() * 2.9;
  apos[i * 3] = 1.0 + Math.cos(a) * r; apos[i * 3 + 1] = -1.2 + Math.sin(a) * r; apos[i * 3 + 2] = 0;
}
arcGeo.setAttribute('position', new THREE.BufferAttribute(apos, 3));
const arcMat = new THREE.PointsMaterial({ color: 0xfff6dc, size: 0.26, transparent: true, opacity: 0, depthWrite: false });
const arcStars = new THREE.Points(arcGeo, arcMat); arcStars.renderOrder = -11; skyLayer.add(arcStars);
// moon + stars
const moonMat = skyMat(0xfff6d8, 0), haloMat = skyMat(0xfff3c8, 0);
const moon = new THREE.Mesh(ico(1.0, 2), moonMat); moon.renderOrder = -11; moon.castShadow = false; moon.position.set(-11.5, 10.4, 0); skyLayer.add(moon);
const halo = new THREE.Mesh(ico(2.1, 2), haloMat); halo.renderOrder = -11; halo.castShadow = false; halo.position.copy(moon.position); skyLayer.add(halo);
const starGeo = new THREE.BufferGeometry(), starN = 150, spos = new Float32Array(starN * 3);
for (let i = 0; i < starN; i++) { spos[i * 3] = (rnd() - 0.5) * 62; spos[i * 3 + 1] = HORIZON + 0.8 + rnd() * 5.6; spos[i * 3 + 2] = 0; }
starGeo.setAttribute('position', new THREE.BufferAttribute(spos, 3));
const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.17, transparent: true, opacity: 0, depthTest: false, depthWrite: false });
const stars = new THREE.Points(starGeo, starMat); stars.renderOrder = -11; skyLayer.add(stars);
const seaProbe = new THREE.Vector3();
function placeSky() {
  skyLayer.quaternion.copy(cam.quaternion);
  skyLayer.position.copy(camTarget).addScaledVector(camFwd, -70);
  const sc = curV / 13.2; skyLayer.scale.setScalar(sc);
  // the water disc fades out around z = -12.5; put the painted horizon exactly there
  seaProbe.set(0, -3.4, -12.5).sub(camTarget);
  const localY = seaProbe.dot(camUp) / sc;
  horizonG.position.y = THREE.MathUtils.clamp(localY, -1, 11) - HORIZON;
}

/* ---------- easter eggs: a koala and a capybara, side by side ---------- */
function makeKoala() {
  const g = new THREE.Group(); const f = mat(0xb9bec6), e = mat(0xd9dde2), n = mat(0x4a444a);
  add(g, ico(0.3, 1), f, 0, 0.32, 0); add(g, ico(0.24, 1), f, 0, 0.66, 0.03);
  for (const x of [-0.22, 0.22]) { add(g, ico(0.15, 0), e, x, 0.76, -0.02); add(g, ico(0.1, 0), mat(0xefe3e6), x * 1.05, 0.76, 0.05); }
  add(g, ico(0.09, 1), n, 0, 0.62, 0.22);
  for (const x of [-0.09, 0.09]) add(g, ico(0.03, 0), n, x, 0.72, 0.21, { cast: false });
  for (const x of [-0.16, 0.16]) add(g, box(0.11, 0.18, 0.12), f, x, 0.1, 0.02);
  return g;
}
function makeCapy() {
  const g = new THREE.Group(); const f = mat(0xb08154), d = mat(0x8e6540), n = mat(0x4a3a30);
  const b = add(g, ico(0.34, 1), f, 0, 0.34, 0); b.scale.set(1.5, 0.95, 1);
  const h = add(g, ico(0.24, 1), f, 0.46, 0.46, 0); h.scale.set(1.25, 0.95, 0.95);
  add(g, ico(0.09, 1), n, 0.74, 0.44, 0);
  for (const z of [-0.12, 0.12]) { add(g, ico(0.05, 0), d, 0.42, 0.66, z); add(g, ico(0.028, 0), n, 0.64, 0.54, z, { cast: false }); }
  for (const [x, z] of [[-0.3, -0.14], [-0.3, 0.14], [0.26, -0.14], [0.26, 0.14]]) add(g, box(0.1, 0.2, 0.1), d, x, 0.1, z);
  return g;
}
{
  const koala = makeKoala(); koala.position.set(-11.6, 0, 2.6); koala.rotation.y = 1.0; koala.scale.setScalar(1.15); addHitProxy(koala, 0.62, 0.45); world.add(koala);
  const capy = makeCapy(); capy.position.set(-10.6, 0, 3.5); capy.rotation.y = 2.3; capy.scale.setScalar(1.15); addHitProxy(capy, 0.66, 0.4); world.add(capy);
  clickables.push({ obj: koala, label: 'A KOALA?', fn: () => { hearts(koala.position, 2); toastMsg('A koala in Hawaii? Don\u2019t ask. \u2661'); } });
  clickables.push({ obj: capy, label: 'A CAPYBARA?', fn: () => { hearts(capy.position, 2); toastMsg('The capybara is unbothered, as always.'); } });
}
/* ---------- loose pickleballs you can bounce ---------- */
const looseBalls = [];
[[9.2, 7.3], [11.6, 7.1], [12.8, 3.1]].forEach(([x, z]) => {
  const m = new THREE.Mesh(ico(0.17, 1), mat(0xfff06b, { emissive: 0xffe34f, emissiveIntensity: 0.2 }));
  m.position.set(x, 0.17, z); m.castShadow = true; world.add(m); addHitProxy(m, 0.46, 0);
  const o = { m, vy: 0, vx: 0, vz: 0 }; looseBalls.push(o);
  clickables.push({ obj: m, label: 'BOUNCE!', fn: () => { o.vy = 5.2 + rnd() * 1.6; o.vx = (rnd() - 0.5) * 2.4; o.vz = (rnd() - 0.5) * 2.4; toastMsg('Boing!'); } });
});
function stepBalls(dt) {
  for (const o of looseBalls) {
    if (o.vy === 0 && Math.abs(o.m.position.y - 0.17) < 0.001 && !o.vx && !o.vz) continue;
    o.vy -= 14 * dt; o.m.position.x += o.vx * dt; o.m.position.z += o.vz * dt; o.m.position.y += o.vy * dt;
    o.m.rotation.x += o.vz * dt * 2; o.m.rotation.z -= o.vx * dt * 2;
    if (o.m.position.y <= 0.17) { o.m.position.y = 0.17; o.vy = -o.vy * 0.55; o.vx *= 0.7; o.vz *= 0.7;
      if (Math.abs(o.vy) < 0.5) { o.vy = 0; o.vx = 0; o.vz = 0; } }
    const r = Math.hypot(o.m.position.x / 14, o.m.position.z / 9); if (r > 1) { o.vx *= -0.6; o.vz *= -0.6; o.m.position.multiplyScalar(0.985); }
  }
}

/* ============ pathfinding + walking ============ */
const adj = {}; edges.forEach(([a, b]) => { (adj[a] ||= []).push(b); (adj[b] ||= []).push(a); });
function route(from, to) {
  if (from === to) return [to]; const q = [[from]], seen = new Set([from]);
  while (q.length) { const p = q.shift(), n = p[p.length - 1]; for (const m of adj[n]) { if (seen.has(m)) continue; const np = [...p, m]; if (m === to) return np; seen.add(m); q.push(np); } }
  return [to];
}
let here = 'start', walk = null, walkTime = 0;
const GRAV = 14, DOUBLE_TOP = 3.45;   // the second hop always tops out above the roofs
let jumpY = 0, jumpV = 0, jumpN = 0, airborne = false, settle = 0;
function tryJump() {                                   // tap once to hop, twice to reach a roof
  if (jumpN >= 2) return;
  if (jumpN === 0) jumpV = 6.6;
  else jumpV = Math.sqrt(2 * GRAV * Math.max(0.7, DOUBLE_TOP - jumpY));   // same apex however you time it
  jumpN++; airborne = true;
}
function stepJump(dt, gy) {
  if (airborne || jumpY > gy + 0.002) {
    airborne = true; jumpV -= GRAV * dt; jumpY += jumpV * dt;
    if (jumpY <= gy && jumpV <= 0) { jumpY = gy; jumpV = 0; jumpN = 0; airborne = false; }
  } else { jumpY = gy; jumpN = 0; }
}
function airPose(u) {
  if (!airborne) return;
  u.legL.rotation.x = -0.6; u.legR.rotation.x = -0.25; u.kneeL.rotation.x = 1.1; u.kneeR.rotation.x = 0.5;
  u.armL.rotation.x = -1.4; if (u.wave <= 0 && u.swing <= 0) u.armR.rotation.x = -1.4;
}
function nearestNode(v) { let best = 'start', d = 1e9; for (const k in N) { const dd = N[k].distanceToSquared(v); if (dd < d) { d = dd; best = k; } } return best; }
function walkTo(node, done) {
  const keys = route(nearestNode(ann.position), node);
  walk = { pts: [ann.position.clone(), ...keys.map(k => N[k].clone())], i: 1, done };
  document.getElementById('hint')?.classList.add('gone');
}
const moveKeys = new Set();
const ISLAND = { rx: 13.6, rz: 8.6 };
function avoidObstacles(p, selfR, y, maxStep) {
  for (const o of obstacles) {
    if (y >= (o.h === undefined ? 99 : o.h) - 0.08) continue;   // she is above it, so walk right over
    const dx = p.x - o.x, dz = p.z - o.z, need = o.r + selfR;
    const d2 = dx * dx + dz * dz;
    if (d2 < need * need) {
      const d = Math.sqrt(d2) || 0.0001, tx = o.x + (dx / d) * need, tz = o.z + (dz / d) * need;
      if (maxStep) { const ox = tx - p.x, oz = tz - p.z, ol = Math.hypot(ox, oz);
        const k = Math.min(1, maxStep / (ol || 1)); p.x += ox * k; p.z += oz * k; }
      else { p.x = tx; p.z = tz; }
    }
  }
  return p;
}
function groundHeight(x, z, y) {
  let g = 0;
  for (const p of platforms) {
    let dx = x - p.x, dz = z - p.z;
    if (p.ry) { const c = Math.cos(-p.ry), si = Math.sin(-p.ry); const nx = dx * c - dz * si; dz = dx * si + dz * c; dx = nx; }
    if (Math.abs(dx) <= p.hx && Math.abs(dz) <= p.hz && p.top <= y + 0.4 && p.top > g) g = p.top;
  }
  return g;
}
function clampIsland(p) { const r = Math.hypot(p.x / ISLAND.rx, p.z / ISLAND.rz); if (r > 1) { p.x /= r; p.z /= r; } return p; }
function faceDir(dir, dt) { const ty = Math.atan2(dir.x, dir.z); let dy = ty - ann.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); ann.rotation.y += dy * Math.min(1, dt * 12); }
function stepWalk(dt) {
  let moved = false;
  const u0 = ann.userData;
  u0.sit += ((annSeat ? 1 : 0) - u0.sit) * Math.min(1, dt * 8);
  // free movement wins over a queued path walk
  const v = new THREE.Vector3();
  if (moveKeys.size) {
    // arrows move relative to the screen, which is what people expect on an iso map
    if (moveKeys.has('up')) v.z -= 1; if (moveKeys.has('down')) v.z += 1;
    if (moveKeys.has('left')) v.x -= 1; if (moveKeys.has('right')) v.x += 1;
    if (v.lengthSq()) { v.normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw); walk = null; if (annSeat) standAnn(); }
  }
  if (annSeat && airborne) standAnn();
  let freeMoved = false;
  if (annSeat) { v.set(0, 0, 0); }
  if (v.lengthSq()) {
    ann.position.addScaledVector(v, 5.0 * dt); clampIsland(ann.position); faceDir(v, dt); moved = freeMoved = true;
  } else if (walk) {
    const tgt = walk.pts[walk.i], dir = tgt.clone().sub(ann.position); dir.y = 0;
    const dist = dir.length(), sp = 5.2 * dt;
    if (dist <= sp) { ann.position.copy(tgt); walk.i++; if (walk.i >= walk.pts.length) { const d = walk.done; walk = null; d && d(); } }
    else { dir.normalize(); ann.position.addScaledVector(dir, sp); faceDir(dir, dt); }
    moved = true;
  }
  // collision applies to free walking and to settling after a landing - never while
  // following a path, because the door nodes sit deliberately close to the buildings
  const wasAir = airborne;
  stepJump(dt, groundHeight(ann.position.x, ann.position.z, jumpY));
  if (wasAir && !airborne) settle = 0.6;
  if (settle > 0) settle = Math.max(0, settle - dt);
  if (!walk && (freeMoved || settle > 0)) avoidObstacles(ann.position, 0.45, jumpY, 7 * dt);
  if (moved) walkTime += dt * 11;
  poseWalker(ann, moved, dt, T, walkTime);
  airPose(ann.userData);
  if (annSeat) { ann.position.y = annSeat.seatY - ANN_HIP; u0.shadow.visible = false; }
  else { u0.shadow.visible = true; ann.position.y = (moved && !airborne ? Math.abs(Math.sin(walkTime)) * 0.06 : 0) + jumpY; }
}
/* ============ dogs wander ============ */
function stepDogs(t, dt) {
  for (const d of dogs) {
    const g = d.g;
    const eating = d.food.visible && g.position.distanceTo(d.bowl) < 0.55;
    if (eating) { if (!d.ateAt) d.ateAt = t; if (t - d.ateAt > 3) { d.food.visible = false; d.ateAt = 0; hearts(g.position, 2); d.goal = null; d.t = t; } }
    if (!d.goal || g.position.distanceTo(d.goal) < 0.15) {
      if (t > d.t) { d.goal = d.home.clone().add(new THREE.Vector3((rnd() - 0.5) * 3.4, 0, (rnd() - 0.5) * 1.8)); d.t = t + 1.5 + rnd() * 3; }
    }
    let moving = false;
    if (d.goal) { const dir = d.goal.clone().sub(g.position); dir.y = 0; const l = dir.length();
      if (l > 0.15) { dir.normalize(); g.position.addScaledVector(dir, Math.min(l, (d.food.visible ? 1.5 : 0.9) * dt));
        const ty = Math.atan2(-dir.z, dir.x); let dy = ty - g.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); g.rotation.y += dy * Math.min(1, dt * 8); moving = true; } }
    if (d.hop > 0) { d.hop = Math.max(0, d.hop - dt * 2.2); g.position.y = Math.abs(Math.sin(d.hop * 7)) * 0.22; } else g.position.y = eating ? Math.sin(t * 9) * 0.02 : 0;
    const u = g.userData; u.tail.rotation.y = Math.sin(t * (moving || d.hop > 0 ? 15 : 9)) * (d.hop > 0 ? 1 : 0.7);
    u.legs.forEach((l, i) => l.rotation.z = moving ? Math.sin(t * 14 + i * 1.6) * 0.5 : 0);
  }
  for (let i = fx.length - 1; i >= 0; i--) { const f = fx[i]; f.t += dt; f.m.position.y += dt * 0.9; f.m.scale.setScalar(1 - f.t / f.life * 0.6); if (f.t > f.life) { world.remove(f.m); fx.splice(i, 1); } }
  if (toastT && T > toastT) { document.getElementById('toast').classList.remove('on'); toastT = 0; }
}
/* ============ interaction: hover, click, camera focus ============ */
const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
const tip = document.getElementById('tip');
const GROUND = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
let hovered = null;
function castFrom(ev) { const r = canvas.getBoundingClientRect(); mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(mouse, cam); }
function groundAt(ev) { castFrom(ev); const p = new THREE.Vector3(); ray.ray.intersectPlane(GROUND, p); return p; }
function pick(ev) {
  castFrom(ev);
  let best = null, bd = 1e9;
  if (view === 'room') {
    for (const c of roomClickables) { const h = ray.intersectObject(c.obj, true); if (h.length && h[0].distance < bd) { bd = h[0].distance; best = { kind: 'act', c, label: c.label }; } }
    return best;
  }
  for (const c of clickables) { const h = ray.intersectObject(c.obj, true); if (h.length && h[0].distance < bd) { bd = h[0].distance; best = { kind: 'act', c, label: c.label }; } }
  if (best) return best;
  for (const it of interactive) { const h = ray.intersectObject(it.group, true); if (h.length && h[0].distance < bd) { bd = h[0].distance; best = { kind: 'zone', it, label: it.label }; } }
  if (!best) {
    for (const it of interactive) { const c = it.group.position.clone().add(it.hit); const d = ray.ray.distanceToPoint(c); if (d < it.r * 0.55 && d < bd) { bd = d; best = { kind: 'zone', it, label: it.label }; } }
  }
  return best;
}
function setHover(h) {
  const same = (hovered && h && hovered.label === h.label);
  hovered = h; canvas.style.cursor = h ? 'pointer' : 'default';
  tip.classList.toggle('on', !!h); if (h && !same) tip.textContent = h.label + (h.kind === 'zone' ? ' \u2197' : '');
}
canvas.addEventListener('pointermove', ev => {
  if (panelOpen || (view !== 'island' && view !== 'room')) return;
  const h = pick(ev); setHover(h); if (h) { tip.style.left = ev.clientX + 'px'; tip.style.top = ev.clientY + 'px'; }
});
canvas.addEventListener('click', ev => {
  if (panelOpen) return;
  const h = pick(ev);
  if (!h) return;
  if (h.kind === 'act') h.c.fn(); else go(h.it.key);
});
document.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => go(b.dataset.go)));
// D-pad + arrow keys
function bindPad(btn) {
  const dir = btn.dataset.move;
  const down = e => { e.preventDefault(); moveKeys.add(dir); document.getElementById('hint')?.classList.add('gone'); };
  const up = () => moveKeys.delete(dir);
  btn.addEventListener('pointerdown', down); btn.addEventListener('pointerup', up);
  btn.addEventListener('pointerleave', up); btn.addEventListener('pointercancel', up);
}
document.querySelectorAll('[data-move]').forEach(bindPad);
addEventListener('blur', () => moveKeys.clear());
const KEYMAP = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', a: 'left', s: 'down', d: 'right' };
addEventListener('keydown', e => { const k = KEYMAP[e.key]; if (k && !panelOpen) { e.preventDefault(); moveKeys.add(k); document.getElementById('hint')?.classList.add('gone'); } });
addEventListener('keyup', e => { const k = KEYMAP[e.key]; if (k) moveKeys.delete(k); });
/* ============ content (from the live site; edit freely) ============ */
const panel = document.getElementById('panel'); let panelOpen = false, view = 'island', current = null;
function openPanel(key) {
  const c = CONTENT[key]; current = key;
  document.getElementById('p-eye').textContent = c.eye;
  document.getElementById('p-title').textContent = c.title;
  document.getElementById('p-body').innerHTML = c.body
    + (c.tags ? '<div class="tags">' + c.tags.map(t => '<span>' + t + '</span>').join('') + '</div>' : '')
    + (c.list && c.list.length ? '<ul>' + c.list.map(l => '<li>' + l + '</li>').join('') + '</ul>' : '')
    + (c.room ? '<button id="enter" class="btn">' + c.cta + ' \u2192</button>' : '');
  panel.classList.add('open'); panelOpen = true; panel.setAttribute('aria-hidden', 'false');
  document.getElementById('scrim').classList.add('on');
  document.getElementById('enter')?.addEventListener('click', () => enterRoom(current));
  document.getElementById('p-close').focus();
  camGoal.copy(P[key] || new THREE.Vector3()).setY(0.5); zoomGoal = 1.9; camGoal.x += 3.0; camGoal.z += 0.8;
}
function closePanel() { panel.classList.remove('open'); panelOpen = false; panel.setAttribute('aria-hidden', 'true');
  document.getElementById('scrim').classList.remove('on');
  if (view === 'island') { camGoal.set(0, 0, 0); zoomGoal = 1; } current = null; }
document.getElementById('p-close').addEventListener('click', closePanel);
document.getElementById('scrim').addEventListener('pointerdown', closePanel);
function go(key) { closePanel(); const target = key; const node = key; setHover(null); tip.classList.remove('on'); walkTo(node, () => openPanel(target)); document.querySelectorAll('[data-go]').forEach(b => b.classList.toggle('on', b.dataset.go === key)); }

/* ---------- the court's paddle rack (decoration) ---------- */
function paddleMesh(faceC) {
  const g = new THREE.Group();
  add(g, cyl(0.23, 0.23, 0.04, 18), mat(faceC), 0, 0.27, 0, { rx: Math.PI / 2 });
  add(g, cyl(0.115, 0.115, 0.012, 16), mat(0xfde6f0), 0, 0.27, 0.027, { rx: Math.PI / 2, cast: false });
  add(g, cyl(0.115, 0.115, 0.012, 16), mat(0xfde6f0), 0, 0.27, -0.027, { rx: Math.PI / 2, cast: false });
  add(g, box(0.085, 0.26, 0.06), mat(0xc28e5e), 0, 0.05, 0);
  add(g, box(0.1, 0.09, 0.07), mat(0x8e6a46), 0, -0.06, 0);
  return g;
}
const paddleStand = new THREE.Group();
paddleStand.position.set(6.3, 0, 7.5); paddleStand.rotation.y = 0.5; world.add(paddleStand);
add(paddleStand, box(1.5, 0.14, 0.75), mat(0xc79a68), 0, 0.07, 0);
for (const sx of [-0.62, 0.62]) add(paddleStand, box(0.16, 1.05, 0.16), mat(0xb3844f), sx, 0.6, -0.22);
add(paddleStand, box(1.5, 0.14, 0.16), mat(0xb3844f), 0, 1.08, -0.22);
add(paddleStand, cyl(0.17, 0.17, 0.17, 12), mat(0xfff06b, { emissive: 0xffe34f, emissiveIntensity: 0.2 }), 0.5, 0.22, 0.14);
const rackPaddle = paddleMesh(0xee5f9b);
rackPaddle.scale.setScalar(1.7); rackPaddle.position.set(-0.3, 0.14, -0.1); rackPaddle.rotation.set(-0.22, 0, 0.1);
paddleStand.add(rackPaddle);
obstacles.push({ x: 6.3, z: 7.5, r: 0.7, h: 1.3 });
addEventListener('keydown', e => {
  if (e.code === 'Space' && !panelOpen) { e.preventDefault(); tryJump(); return; }
  if (e.key === 'Escape') { if (panelOpen) closePanel(); else if (view === 'room') exitRoom(); }
});

/* ============ room card collapse ============ */
function setRoomToggleLabel() {
  const card = document.getElementById('room-card'), b = document.getElementById('room-toggle');
  const min = card.classList.contains('min');
  b.setAttribute('aria-expanded', String(!min));
  b.setAttribute('aria-label', min ? 'Show details' : 'Hide details');
}
document.getElementById('room-toggle').addEventListener('click', e => {
  e.stopPropagation();
  document.getElementById('room-card').classList.toggle('min');
  setRoomToggleLabel();
});

/* ============ day / night ============ */
let night = !!window.__theme, nightK = night ? 1 : 0;
const cSky = new THREE.Color(), cA = new THREE.Color(), cB = new THREE.Color();
function applyTime(k) {
  if (view === 'room') { skyScene.background.set(activeRoom && rooms[activeRoom] ? rooms[activeRoom].bg : 0xfadfd0).lerp(cA.set(0x2b2444), k); hemi.color.set(0xfff6ee).lerp(cA.set(0xc3bdf3), k); hemi.groundColor.set(0xf3d2b4).lerp(cA.set(0x6a5c9e), k); hemi.intensity = 1.95 - k * 0.5; sun.intensity = 1.3 - k * 0.6;
    roomLights.forEach(o => o.l.intensity = o.power * (o.day + (1 - o.day) * k)); glowMats.forEach(m => m.emissiveIntensity = k * 1.25); document.body.classList.toggle('night', k > 0.5); return; }
  cSky.set(DAY.sky).lerp(cA.set(NIGHT.sky), k); skyScene.background.copy(cSky);
  ridgeMats.forEach((rm, i) => rm.m.color.set(rm.day).lerp(cA.set(rm.night), k));
  hemi.color.set(DAY.hemiSky).lerp(cA.set(NIGHT.hemiSky), k); hemi.groundColor.set(DAY.hemiGround).lerp(cA.set(NIGHT.hemiGround), k); hemi.intensity = THREE.MathUtils.lerp(DAY.hemiI, NIGHT.hemiI, k);
  sun.color.set(DAY.sun).lerp(cA.set(NIGHT.sun), k); sun.intensity = THREE.MathUtils.lerp(DAY.sunI, NIGHT.sunI, k);
  waterMat.color.set(0x74c4ea).lerp(cA.set(0x1d3463), k); waterMat.emissiveIntensity = 0.22 * (1 - k); grassMat.color.set(DAY.grass).lerp(cA.set(NIGHT.grass), k);
  nightLights.forEach(o => o.l.intensity = o.power * k);
  glowMats.forEach(m => m.emissiveIntensity = k * 1.6); flyMat.opacity = k * 0.95; petals.material.opacity = 0.9 - k * 0.45;
  rainbowMats.forEach(m => m.opacity = Math.max(0, 1 - k * 2.2) * 0.24);
  moonMat.opacity = k; haloMat.opacity = k * 0.16; starMat.opacity = k * 0.9; arcMat.opacity = Math.max(0, k * 1.8 - 0.8);
  document.body.classList.toggle('night', k > 0.5);
}
(function(){ const tod = document.getElementById('tod');
  const paint = () => { tod.textContent = night ? '☀' : '☾'; tod.setAttribute('aria-pressed', night); };
  paint();
  const set = v => { night = v; paint();
    try { localStorage.setItem('theme', night ? 'night' : 'day'); } catch (e) {} };
  tod.addEventListener('click', () => set(!night));
  const tod2 = document.getElementById('tod2');
  if (tod2) { tod2.hidden = false;
    const paint2 = () => { tod2.textContent = night ? '☀' : '☾'; tod2.setAttribute('aria-pressed', night); };
    paint2(); tod2.addEventListener('click', () => { set(!night); paint2(); });
    tod.addEventListener('click', paint2); }
})();

/* ============ interiors: one walkable cutaway room per building ============ */
const ROOM_Y = -60, ROOM_LIM = 4.05, HIP = 0.52;
const roomsRoot = new THREE.Group(); roomsRoot.position.set(0, ROOM_Y, 0); roomsRoot.visible = false; scene.add(roomsRoot);
const rooms = {}; let activeRoom = null, roomClickables = [], seated = null;
const beacons = [], sleepers = [], zzz = [], roomLights = [];
function roomLamp(key, x, y, z, color, power, dayShare) {
  const l = new THREE.PointLight(color, 0, 11, 1.5);
  l.position.set(x, y, z); l.userData.noMerge = true; rooms[key].g.add(l);
  roomLights.push({ l, power, day: dayShare === undefined ? 0.3 : dayShare });
  return l;
}
function standLamp(R, x, z, poleC, shadeC) {   // a floor lamp you can see as well as feel
  add(R, cyl(0.34, 0.38, 0.09, 10), mat(poleC), x, 0.05, z);
  add(R, cyl(0.05, 0.05, 2.5, 6), mat(poleC), x, 1.3, z);
  add(R, new THREE.CylinderGeometry(0.34, 0.5, 0.52, 10, 1, true), glowMat(shadeC), x, 2.75, z, { cast: false });
  add(R, ico(0.2, 0), glowMat(0xfff3d6), x, 2.6, z, { cast: false });
}
function pendant(R, x, z, y, shadeC) {
  add(R, cyl(0.02, 0.02, 1.2, 4), mat(0xcbb98f), x, y + 0.6, z, { cast: false });
  add(R, new THREE.CylinderGeometry(0.1, 0.42, 0.42, 10, 1, true), glowMat(shadeC), x, y, z, { cast: false });
  add(R, ico(0.16, 0), glowMat(0xfff3d6), x, y - 0.08, z, { cast: false });
}
const beaconMat = mat(0xffd27a, { emissive: 0xffa93d, emissiveIntensity: 0.75 });
const beaconCore = mat(0xfff3cf, { emissive: 0xffd98a, emissiveIntensity: 0.9 });
const wd = () => mat(C.wood);

const roomAnn = makeAnn(); roomAnn.scale.setScalar(1.08);
addHitProxy(roomAnn, 0.8, 0.95);
const SEAT_DROP = HIP * 1.08;

const photoTex = new THREE.TextureLoader().load(PHOTO_URI); photoTex.colorSpace = THREE.SRGBColorSpace;
function zTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const c = cv.getContext('2d'); c.fillStyle = '#ffffff'; c.font = 'bold 50px Georgia, serif';
  c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('z', 32, 34);
  return new THREE.CanvasTexture(cv);
}
const Z_TEX = zTexture();

function newRoom(key, o) {
  const R = new THREE.Group(); R.visible = false; roomsRoot.add(R);
  rooms[key] = { g: R, bg: o.bg, clicks: [], start: o.start || new THREE.Vector3(1.0, 0, 1.8), title: o.title, sub: o.sub, tags: o.tags || [] };
  add(R, box(10, 0.4, 10), mat(o.floor), 0, -0.2, 0);
  add(R, box(10, 5.6, 0.3), mat(o.wallA), 0, 2.8, -4.85);
  add(R, box(0.3, 5.6, 10), mat(o.wallB), -4.85, 2.8, 0);
  add(R, box(10.3, 0.26, 0.12), mat(o.trim), 0, 0.13, -4.64);
  add(R, box(0.12, 0.26, 10.3), mat(o.trim), -4.64, 0.13, 0);
  add(R, box(10.4, 0.34, 0.44), mat(o.beam), 0, 5.6, -4.85);
  add(R, box(0.44, 0.34, 10.4), mat(o.beam), -4.85, 5.6, 0);
  if (o.windowAt !== undefined) {
    add(R, box(0.12, 2.3, 2.3), mat(o.trim), -4.74, 3.0, o.windowAt);
    add(R, box(0.08, 2.0, 2.0), glowMat(0xcfeeff), -4.68, 3.0, o.windowAt, { cast: false });
    add(R, box(0.1, 0.12, 2.1), mat(o.trim), -4.66, 3.0, o.windowAt, { cast: false });
    add(R, box(0.1, 2.1, 0.12), mat(o.trim), -4.66, 3.0, o.windowAt, { cast: false });
  }
  return R;
}
// a layered rug with a border, an inner field and a diamond medallion
function rug(R, x, z, w, d, base, border, accent) {
  add(R, box(w, 0.035, d), mat(border), x, 0.022, z, { cast: false });
  add(R, box(w - 0.42, 0.045, d - 0.42), mat(base), x, 0.03, z, { cast: false });
  add(R, box(w - 0.95, 0.055, d - 0.95), mat(border), x, 0.036, z, { cast: false });
  add(R, box(w - 1.15, 0.065, d - 1.15), mat(base), x, 0.042, z, { cast: false });
  const m = add(R, box((w - 1.2) * 0.42, 0.075, (d - 1.2) * 0.42), mat(accent), x, 0.048, z, { cast: false }); m.rotation.y = Math.PI / 4;
  for (let i = 0; i < 11; i++) {                               // fringe at both ends
    add(R, box(0.06, 0.03, 0.22), mat(border), x - w / 2 + 0.2 + i * (w - 0.4) / 10, 0.02, z - d / 2 - 0.11, { cast: false });
    add(R, box(0.06, 0.03, 0.22), mat(border), x - w / 2 + 0.2 + i * (w - 0.4) / 10, 0.02, z + d / 2 + 0.11, { cast: false });
  }
}
function spot(key, x, y, z, label, info) {
  const R = rooms[key].g, g = new THREE.Group(); g.position.set(x, y, z); g.userData.noMerge = true; R.add(g);
  const ring = add(g, new THREE.TorusGeometry(0.3, 0.05, 6, 18), beaconMat, 0, 0, 0, { cast: false });
  add(g, ico(0.13, 1), beaconCore, 0, 0, 0, { cast: false });
  addHitProxy(g, 0.6, 0);
  beacons.push({ g, ring, base: y, p: beacons.length * 1.1 });
  rooms[key].clicks.push({ obj: g, label, fn: () => openInfo(info) });
}
// any chair can be sat on: click once to sit, again to stand
function sittable(key, x, seatY, z, face) {
  const g = new THREE.Group(); g.position.set(x, seatY, z); g.userData.noMerge = true; rooms[key].g.add(g);
  addHitProxy(g, 0.46, 0.2);
  const here = { x, y: seatY, z, face };
  rooms[key].clicks.push({ obj: g, label: 'SIT HERE', fn: () => (seated && seated.x === x && seated.z === z) ? standUp() : sitAt(here) });
}
function sitAt(s) { seated = s; roomAnn.position.set(s.x, s.y - SEAT_DROP, s.z); roomAnn.rotation.y = s.face; toastMsg('Taking a seat'); }
function standUp() { if (!seated) return; const f = seated.face; roomAnn.position.set(seated.x + Math.sin(f) * 0.8, 0, seated.z + Math.cos(f) * 0.8); seated = null; }
function sleepingDog(R, bodyC, earC, x, z, rot) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot; g.userData.noMerge = true; R.add(g);
  const b = mat(bodyC), e = mat(earC), n = mat(0x453c3a);
  add(R, cyl(0.95, 0.95, 0.22, 12), mat(0xd9c9b6), x, 0.11, z, { cast: false });
  add(R, new THREE.TorusGeometry(0.88, 0.17, 6, 14), mat(0xc2ae98), x, 0.2, z, { rx: Math.PI / 2 });
  const body = add(g, ico(0.46, 1), b, 0, 0.36, 0); body.scale.set(1.45, 0.78, 1.0);
  add(g, ico(0.3, 1), b, 0.52, 0.36, 0.1).scale.set(1.1, 0.95, 1.0);
  add(g, ico(0.12, 1), n, 0.78, 0.31, 0.12);
  for (const zz of [-0.12, 0.12]) { const ear = add(g, box(0.1, 0.22, 0.11), e, 0.42, 0.42, zz * 1.6); ear.rotation.x = zz * 1.2; }
  for (const zz of [-0.1, 0.1]) add(g, box(0.1, 0.022, 0.03), n, 0.68, 0.4, zz * 1.4, { cast: false });
  const tail = add(g, new THREE.TorusGeometry(0.26, 0.08, 5, 12, Math.PI * 1.3), b, -0.5, 0.3, 0); tail.rotation.x = Math.PI / 2;
  sleepers.push({ g, body, p: sleepers.length * 1.7 });
  // drifting z z z
  const zg = new THREE.Group(); zg.position.set(x + 0.4, 0.9, z); zg.userData.noMerge = true; R.add(zg);
  for (let i = 0; i < 3; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: Z_TEX, color: 0x7f93b5, transparent: true, opacity: 0, depthWrite: false, depthTest: false }));
    sp.renderOrder = 50; sp.scale.setScalar(0.4); zg.add(sp); zzz.push({ sp, p: i / 3 + zzz.length * 0.07 });
  }
  return g;
}
function laptop(R, x, y, z, ry) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry || 0; R.add(g);
  add(g, box(0.62, 0.04, 0.44), mat(0xd3d8de), 0, 0.02, 0);
  add(g, box(0.5, 0.02, 0.3), mat(0xe9edf1), 0, 0.045, 0.03, { cast: false });
  const lid = add(g, box(0.62, 0.42, 0.04), mat(0xc9cfd6), 0, 0.22, -0.2); lid.rotation.x = 0.28;
  const scr = add(g, box(0.54, 0.34, 0.02), glowMat(0xa9d4ee), 0, 0.22, -0.17, { cast: false }); scr.rotation.x = 0.28;
  return g;
}
const students = [];
function seatedStudent(R, x, z, face, skinC, hairC, shirtC, style) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = face; g.userData.noMerge = true; R.add(g);
  const skin = mat(skinC), hair = mat(hairC), shirt = mat(shirtC), pants = mat(0x6b7f99), shoes = mat(0xe6ded0), ink = mat(0x4a4046);
  add(g, box(0.48, 0.5, 0.3), shirt, 0, 0.93, 0);
  add(g, box(0.52, 0.12, 0.34), shirt, 0, 1.15, 0);
  for (const sx of [-0.12, 0.12]) {
    add(g, box(0.18, 0.18, 0.46), pants, sx, 0.68, 0.22);
    add(g, box(0.17, 0.4, 0.17), pants, sx, 0.46, 0.42);
    add(g, box(0.19, 0.09, 0.28), shoes, sx, 0.25, 0.5);
  }
  const hands = [];
  for (const sx of [-0.3, 0.3]) {
    add(g, box(0.13, 0.17, 0.15), shirt, sx, 1.0, 0);
    const fore = new THREE.Group(); fore.position.set(sx, 0.93, 0.06); g.add(fore);
    add(fore, box(0.11, 0.11, 0.36), skin, 0, 0, 0.18);
    add(fore, box(0.12, 0.09, 0.13), skin, 0, -0.02, 0.4);
    hands.push(fore);
  }
  add(g, box(0.15, 0.09, 0.15), skin, 0, 1.24, 0);
  const head = new THREE.Group(); head.position.y = 1.46; head.scale.setScalar(1.12); g.add(head);
  add(head, ico(0.3, 2), skin, 0, 0, 0);
  const cap = add(head, ico(0.32, 1), hair, 0, 0.05, -0.1); cap.scale.set(1.0, 0.95, 0.92);
  if (style === 0) add(head, ico(0.17, 1), hair, 0, 0.32, -0.12);
  else if (style === 1) { add(head, box(0.5, 0.3, 0.16), hair, 0, 0.0, -0.22); add(head, box(0.14, 0.26, 0.14), hair, -0.27, -0.06, -0.04); add(head, box(0.14, 0.26, 0.14), hair, 0.27, -0.06, -0.04); }
  else add(head, box(0.5, 0.15, 0.28), hair, 0, 0.21, 0.06);
  for (const ex of [-0.11, 0.11]) add(head, ico(0.034, 1), ink, ex, -0.01, 0.28, { cast: false });
  for (const bx of [-0.19, 0.19]) { const m = add(head, ico(0.05, 1), mat(0xf0a3a6), bx, -0.09, 0.24, { cast: false }); m.scale.set(1.3, 0.75, 0.6); }
  const sm = add(head, new THREE.TorusGeometry(0.065, 0.014, 4, 10, Math.PI), ink, 0, -0.03, 0.28, { cast: false }); sm.rotation.z = Math.PI;
  students.push({ g, head, hands, p: students.length * 1.9 });
  return g;
}
function computer(R, x, y, z, ry) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry || 0; R.add(g);
  add(g, box(1.5, 0.95, 0.1), mat(0x37404f), 0, 0.72, 0); add(g, box(1.36, 0.82, 0.05), glowMat(0xa9d4ee), 0, 0.72, 0.06);
  add(g, box(0.4, 0.07, 0.3), mat(0x8a909a), 0, 0.26, 0); add(g, cyl(0.07, 0.1, 0.42, 6), mat(0x8a909a), 0, 0.45, 0);
  add(g, box(0.95, 0.06, 0.34), mat(0xf2f1ec), 0, 0.03, 0.62); add(g, box(0.2, 0.05, 0.28), mat(0xf2f1ec), 0.72, 0.03, 0.6);
  return g;
}

/* ---- 01 HOME: the workspace ---- */
{
  const R = newRoom('home', { bg: 0xfadfd0, title: 'About me', sub: 'The cottage · workspace', tags: ['Applied Linguistics', 'UX Design', 'Generative AI'],
    floor: 0xe3ac74, wallA: 0xf8e4d6, wallB: 0xf2d6c6, trim: 0xe9a86a, beam: 0x7d86c9, windowAt: 1.6, start: new THREE.Vector3(1.2, 0, 2.0) });
  rug(R, 0.3, 0.5, 5.4, 4.2, 0xf3e3d0, 0xc9845f, 0xe8b98c);
  add(R, box(6.0, 2.8, 0.14), mat(0xc98a4f), 0.3, 3.3, -4.6); add(R, box(5.7, 2.5, 0.1), mat(0xdd9b5b), 0.3, 3.3, -4.52);
  for (const [dx, dz, c] of [[-1.9, 0, 0xfdfbf2], [-0.5, 0.08, 0xdfeedd], [0.9, -0.05, 0xfae0e4], [2.2, 0.04, 0xfdf3d8]]) {
    const n = add(R, box(1.15, 0.85, 0.04), mat(c), 0.3 + dx, 3.5 + dz, -4.46); n.rotation.z = (rnd() - 0.5) * 0.12;
  }
  add(R, box(4.8, 0.2, 2.1), mat(0xe0a566), 0.6, 2.25, -3.0); for (const x of [-1.5, 2.6]) add(R, box(0.26, 2.15, 1.7), mat(0xfbfbf7), x, 1.12, -3.0);
  computer(R, 0.3, 2.35, -3.4, 0.08);
  add(R, cyl(0.1, 0.14, 0.5, 6), wd(), 2.25, 2.55, -3.4); add(R, ico(0.4, 0), glowMat(0xfff1c4), 2.25, 2.95, -3.4, { cast: false });
  add(R, cyl(0.3, 0.22, 0.42, 7), mat(0xf3a9c9), -0.9, 2.5, -2.6);
  // framed photo on the desk
  { const f = new THREE.Group(); f.position.set(1.75, 2.35, -2.6); f.rotation.y = -0.5; f.rotation.x = -0.1; R.add(f);
    add(f, box(0.72, 0.72, 0.05), mat(0xe8c79a), 0, 0.36, 0);
    const pic = new THREE.Mesh(new THREE.PlaneGeometry(0.56, 0.56), new THREE.MeshBasicMaterial({ map: photoTex }));
    pic.position.set(0, 0.36, 0.031); pic.castShadow = pic.receiveShadow = false; pic.userData.noMerge = true; f.add(pic);
    add(f, box(0.78, 0.06, 0.14), mat(0xd7b88f), 0, 0.02, -0.05); }
  const ch = new THREE.Group(); ch.position.set(0.4, 0, -1.3); ch.rotation.y = 0.45; R.add(ch);
  add(ch, box(1.15, 0.22, 1.15), mat(0x9fb3cc), 0, 1.32, 0); add(ch, box(1.15, 1.25, 0.22), mat(0x9fb3cc), 0, 2.05, -0.56);
  add(ch, cyl(0.09, 0.09, 1.15, 6), mat(0x8b9099), 0, 0.68, 0);
  for (let i = 0; i < 5; i++) { const l = add(ch, box(0.85, 0.08, 0.13), mat(0xf1f1ee), 0, 0.12, 0); l.rotation.y = i * 1.256; }
  sittable('home', 0.4, 1.44, -1.3, 0.45);
  add(R, cyl(0.75, 0.6, 1.25, 7), mat(0xf1dcc6), -3.2, 0.62, -2.6); add(R, cyl(0.12, 0.18, 2.3, 5), mat(C.trunk), -3.2, 2.3, -2.6);
  [[0, 3.7, 0, 0.95], [0.65, 3.35, 0.3, 0.7], [-0.65, 3.45, -0.2, 0.72], [0, 4.35, 0, 0.58]].forEach(([a, b, c, r]) => add(R, ico(r, 0), mat(C.leaf), -3.2 + a, b, -2.6 + c));
  add(R, box(1.4, 1.6, 1.25), mat(0xf7e9d4), 3.5, 0.8, -2.7);
  for (const y of [0.55, 1.2]) add(R, box(1.0, 0.08, 0.06), wd(), 3.5, y, -2.06);
  add(R, cyl(0.32, 0.24, 0.42, 6), mat(0xf1dcc6), 3.5, 1.8, -2.7);
  for (let i = 0; i < 7; i++) { const c = add(R, new THREE.ConeGeometry(0.1, 0.85, 4), mat(0x6cb04a), 3.5 + (rnd() - 0.5) * 0.5, 2.3, -2.7 + (rnd() - 0.5) * 0.4); c.rotation.set((rnd() - 0.5), 0, (rnd() - 0.5)); }
  pendant(R, 0.3, 0.6, 4.4, 0xf7ddc4);
  roomLamp('home', 2.25, 2.8, -3.4, 0xffd296, 7, 0.2);
  roomLamp('home', 0.3, 4.2, 0.6, 0xffe0bc, 18, 0.3);
  const jb = sleepingDog(R, 0xfaf8f0, 0xf1e4e4, 2.3, 2.1, 2.2);
  const jg = sleepingDog(R, 0xdfb183, 0xbe8e65, 3.4, 0.6, 3.6);
  // water and food bowls
  for (const [bx, bz, c] of [[1.5, 3.1, 0xb7d7e8], [2.5, 3.5, 0xe7b7c6]]) {
    add(R, cyl(0.3, 0.22, 0.2, 10), mat(c), bx, 0.1, bz);
    add(R, cyl(0.23, 0.23, 0.03, 10), mat(0x8fd0f2, { emissive: 0x5fb8ea, emissiveIntensity: 0.2 }), bx, 0.2, bz, { cast: false });
  }
  rooms.home.clicks.push({ obj: jb, label: 'JUNBI (ASLEEP)', fn: () => toastMsg('Junbi is dreaming. Shhh') });
  rooms.home.clicks.push({ obj: jg, label: 'JJANGGU (ASLEEP)', fn: () => toastMsg('Jjanggu twitches a paw.') });
  spot('home', -1.4, 3.6, -4.2, 'THE CORK BOARD', INFO.home_board);
  spot('home', 0.3, 3.15, -3.0, 'THE DESK', INFO.home_desk);
  spot('home', 2.9, 1.2, 2.6, 'THE DOG BEDS', INFO.home_dogs);
}

/* ---- 02 RESEARCH: the library ---- */
{
  const R = newRoom('library', { bg: 0xe3eedb, title: 'Research', sub: 'The library · publications & questions', tags: ['Conversation Analysis', 'Human-AI interaction', 'L2 learning'],
    floor: 0xdcb98a, wallA: 0xeef5e6, wallB: 0xe5efdc, trim: 0xc39862, beam: 0x97b085, windowAt: 2.4, start: new THREE.Vector3(1.4, 0, 2.2) });
  rug(R, 0.2, 0.9, 5.2, 4.0, 0xeee6d2, 0x8aa47c, 0xc9b98f);
  const bookCols = [0x9ccf8f, 0xf2c3d2, 0xc8c0ee, 0xf3d9a4, 0xa9d4ee, 0xe8b9a0];
  for (const [bx, bz, ry, n] of [[-1.4, -4.3, 0, 5], [1.9, -4.3, 0, 5], [-4.3, -1.6, Math.PI / 2, 5], [-4.3, 1.6, Math.PI / 2, 5]]) {
    const g = new THREE.Group(); g.position.set(bx, 0, bz); g.rotation.y = ry; R.add(g);
    add(g, box(2.9, 3.4, 0.5), mat(0xe6d2b4), 0, 1.7, 0);
    for (let r = 0; r < n; r++) { const y = 0.45 + r * 0.62;
      add(g, box(2.7, 0.08, 0.46), wd(), 0, y - 0.04, 0.03);
      for (let i = 0; i < 9; i++) { const h = 0.34 + rnd() * 0.16; const bk = add(g, box(0.19 + rnd() * 0.07, h, 0.34), mat(bookCols[(i + r) % 6]), -1.15 + i * 0.28, y + h / 2, 0.05); bk.rotation.z = rnd() < 0.12 ? 0.22 : 0; }
    }
  }
  add(R, box(2.6, 0.18, 1.5), wd(), 1.3, 2.0, -1.0); for (const [x, z] of [[0.3, -0.55], [2.3, -0.55], [0.3, -1.45], [2.3, -1.45]]) add(R, box(0.14, 2.0, 0.14), wd(), x, 1.0, z);
  add(R, box(0.9, 0.04, 0.65), mat(0xfdfaf0), 0.95, 2.11, -1.0); add(R, box(0.75, 0.05, 0.55), mat(0xfdfaf0), 1.85, 2.12, -0.85);
  add(R, cyl(0.12, 0.16, 0.45, 6), mat(0x4a6b64), 2.2, 2.22, -1.35); add(R, ico(0.3, 0), glowMat(0xfff1c4), 2.2, 2.6, -1.35, { cast: false });
  const arm = new THREE.Group(); arm.position.set(-1.7, 0, 1.7); arm.rotation.y = -0.5; R.add(arm);
  add(arm, box(1.5, 0.45, 1.4), mat(0x92c690), 0, 0.6, 0); add(arm, box(1.5, 1.3, 0.35), mat(0x92c690), 0, 1.3, -0.65);
  for (const x of [-0.72, 0.72]) add(arm, box(0.28, 0.5, 1.4), mat(0x85bb83), x, 1.0, 0);
  add(arm, box(0.9, 0.18, 0.9), mat(0xfae9d8), 0, 0.92, 0.1);
  for (const [x, z] of [[-0.6, -0.5], [0.6, -0.5], [-0.6, 0.5], [0.6, 0.5]]) add(arm, box(0.14, 0.4, 0.14), wd(), x, 0.2, z);
  sittable('library', -1.7, 1.0, 1.7, -0.5);
  add(R, cyl(0.45, 0.4, 0.1, 10), wd(), 0.6, 0.6, 2.6); add(R, cyl(0.08, 0.08, 0.55, 6), wd(), 0.6, 0.3, 2.6);
  for (let i = 0; i < 4; i++) add(R, box(0.8, 0.12, 0.6), mat(bookCols[i]), 0.6 + (rnd() - 0.5) * 0.12, 0.71 + i * 0.13, 2.6);
  add(R, cyl(0.42, 0.34, 0.26, 8), wd(), 3.5, 0.13, 1.6); add(R, cyl(0.06, 0.06, 1.0, 6), wd(), 3.5, 0.6, 1.6);
  add(R, ico(0.62, 1), mat(0x8fc3e0), 3.5, 1.65, 1.6); add(R, ico(0.3, 0), mat(0x9ed36a), 3.25, 1.9, 1.95);
  standLamp(R, 0.9, 2.9, 0x8a7a5e, 0xf7e2b4);
  pendant(R, 0.4, -0.4, 4.3, 0xf7e2b4);
  roomLamp('library', 2.2, 2.5, -1.35, 0xffd79a, 7, 0.2);
  roomLamp('library', 0.9, 2.6, 2.9, 0xffd49a, 16, 0.25);
  roomLamp('library', 0.4, 4.1, -0.4, 0xffe3b8, 18, 0.3);
  roomLamp('library', -2.6, 2.4, -2.6, 0xffdcae, 9, 0.2);
  spot('library', 0.4, 2.6, -4.0, 'THE SHELVES', INFO.lib_shelves);
  spot('library', 1.3, 2.75, -1.0, 'THE PAPERS', INFO.lib_papers);
}

/* ---- 03 TEACHING: the little school ---- */
{
  const R = newRoom('school', { bg: 0xeae4f6, title: 'Teaching', sub: 'The University · courses & philosophy', tags: ['SLS 480E', 'SLS 675', 'SLS 680R'],
    floor: 0xe2bd92, wallA: 0xf3eefb, wallB: 0xeae3f6, trim: 0xb9a5e6, beam: 0x7d86c9, windowAt: 2.6, start: new THREE.Vector3(1.2, 0, 2.6) });
  rug(R, -0.4, 1.0, 5.0, 3.8, 0xf6efe0, 0x8e7b5e, 0xc7ab82);
  // whiteboard
  add(R, box(6.2, 2.9, 0.16), mat(0xf6f6f2), 0.2, 3.3, -4.6); add(R, box(6.5, 0.18, 0.34), mat(0xcfd4dc), 0.2, 1.8, -4.52);
  for (const [x, w, c] of [[-1.9, 1.5, 0x3f6fb5], [0.4, 1.1, 0x4a4a52], [2.1, 1.7, 0xc0566b]]) add(R, box(w, 0.07, 0.02), mat(c), x, 3.62, -4.5, { cast: false });
  for (const [x, w, c] of [[-1.6, 1.0, 0x4a4a52], [0.9, 1.8, 0x3f8f63]]) add(R, box(w, 0.07, 0.02), mat(c), x, 3.2, -4.5, { cast: false });
  for (const [x, c] of [[-0.6, 0xc0566b], [-0.35, 0x3f6fb5], [-0.1, 0x3f8f63]]) add(R, box(0.18, 0.07, 0.07), mat(c), x, 1.9, -4.44, { cast: false });
  // a lectern at the front, with the screen turned towards the whiteboard
  const pod = new THREE.Group(); pod.position.set(1.9, 0, -3.3); pod.rotation.y = Math.PI - 0.75; R.add(pod);
  add(pod, box(1.05, 1.3, 0.78), wd(), 0, 0.65, 0);
  add(pod, box(1.15, 0.1, 0.88), mat(0xe8cfa6), 0, 1.35, 0);
  const slope = add(pod, box(1.1, 0.08, 0.5), mat(0xe8cfa6), 0, 1.44, 0.16); slope.rotation.x = -0.22;
  add(pod, box(0.9, 0.42, 0.06), mat(0xd9bd92), 0, 0.95, 0.42);
  const pc = computer(pod, 0, 1.4, -0.08, 0); pc.scale.setScalar(0.72);
  add(pod, cyl(0.15, 0.12, 0.26, 7), mat(0xf3a9c9), 0.42, 1.53, 0.2);
  const chairs = [];
  for (const [dx, dz] of [[-2.3, -0.2], [0.3, -0.2], [-2.3, 1.5], [0.3, 1.5]]) {
    const d = new THREE.Group(); d.position.set(dx, 0, dz); R.add(d);
    add(d, box(1.5, 0.14, 0.95), mat(0xf0d8b4), 0, 1.12, 0);
    for (const [x, z] of [[-0.6, -0.35], [0.6, -0.35], [-0.6, 0.35], [0.6, 0.35]]) add(d, box(0.1, 1.1, 0.1), mat(0xc9ccd4), x, 0.55, z);
    add(d, box(0.6, 0.12, 0.6), mat(0xa9bcd8), 0, 0.62, 0.85); add(d, box(0.6, 0.62, 0.12), mat(0xa9bcd8), 0, 0.95, 1.1);
    for (const [x, z] of [[-0.22, 0.65], [0.22, 0.65], [-0.22, 1.05], [0.22, 1.05]]) add(d, box(0.08, 0.6, 0.08), mat(0xc9ccd4), x, 0.32, z);
    add(d, box(0.55, 0.04, 0.4), mat(0xfdfaf0), 0, 1.21, 0.05);
    chairs.push([dx, dz + 0.85]);
  }
  // three students at their laptops, facing the board; one seat left for Ann
  const roster = [[0xf0c6a0, 0x332e32, 0xcfe0f0, 0], [0xe4b58c, 0x45342b, 0xf2d4da, 1], [0xf7d9c0, 0x6b4a33, 0xdcecd8, 2]];
  chairs.forEach(([x, z], i) => {
    if (i < 3) seatedStudent(R, x, z - 0.08, Math.PI, ...roster[i]);
    else sittable('school', x, 0.68, z, Math.PI);
  });
  [[-2.3, -0.2], [0.3, -0.2], [-2.3, 1.5], [0.3, 1.5]].forEach(([dx, dz]) => laptop(R, dx, 1.19, dz + 0.12, 0));
  add(R, box(1.3, 2.2, 1.0), mat(0xf4ead8), 3.6, 1.1, -2.4);
  for (const y of [0.6, 1.25, 1.9]) { add(R, box(1.1, 0.07, 0.9), wd(), 3.6, y, -2.4); for (let i = 0; i < 5; i++) add(R, box(0.16, 0.36, 0.3), mat([0x9ccf8f, 0xf2c3d2, 0xc8c0ee, 0xf3d9a4, 0xa9d4ee][i]), 3.2 + i * 0.21, y + 0.21, -2.1); }
  // testimonial quote cards on the wall
  for (let i = 0; i < 3; i++) { const y = 2.6 + (i % 2) * 1.0, x = 3.0 + i * 0.95;
    const f = add(R, box(0.85, 0.72, 0.07), mat(0xfdfaf0), x, y, -4.66); f.rotation.z = (rnd() - 0.5) * 0.1;
    for (let l = 0; l < 3; l++) add(R, box(0.52 - l * 0.08, 0.05, 0.02), mat(0xc3c9d4), x - 0.05, y + 0.14 - l * 0.14, -4.61, { cast: false });
    add(R, ico(0.07, 0), mat(0xf0b45c), x + 0.26, y - 0.24, -4.6, { cast: false });
  }
  pendant(R, -1.2, 0.4, 4.4, 0xf3eafc); pendant(R, 2.2, -1.6, 4.4, 0xf3eafc);
  roomLamp('school', -1.2, 4.2, 0.4, 0xffeccd, 14, 0.3);
  roomLamp('school', 2.2, 4.2, -1.6, 0xffeccd, 14, 0.3);
  roomLamp('school', 0.2, 3.3, -2.6, 0xfff2dd, 3, 0.2);
  spot('school', 0.2, 4.0, -4.2, 'THE WHITEBOARD', INFO.sch_board);
  spot('school', -1.0, 1.9, 0.6, 'THE DESKS', INFO.sch_desks);
  spot('school', 3.9, 1.9, -4.0, 'TESTIMONIALS', INFO.sch_testimonials);
}

/* ---- 04 PROJECTS: the museum ---- */
{
  const R = newRoom('museum', { bg: 0xf7f0e2, title: 'Projects', sub: 'The museum · one gallery per project', tags: ['GOALL', 'UX & CxD', 'Tangle with Ann'],
    floor: 0xdcd3c4, wallA: 0xfbf4e6, wallB: 0xf4ece0, trim: 0xd8c9ae, beam: 0xa99be0, windowAt: 3.2, start: new THREE.Vector3(1.4, 0, 2.8) });
  add(R, box(9.6, 0.05, 9.6), mat(0xe8e1d4), 0, 0.03, 0, { cast: false });
  // flat, framed artwork - no shapes poking out of the canvas
  const art = [[-2.6, 0xa9d4ee, 0x6fa8d4, 0xf3d9a4], [0.2, 0xf4c0cf, 0xd98fab, 0xa9d4ee], [2.9, 0xf3d9a4, 0xd4b06a, 0xf4c0cf]];
  art.forEach(([x, c1, c2, c3]) => {
    add(R, box(1.75, 1.3, 0.1), mat(0xf6efe0), x, 3.1, -4.68);
    add(R, box(1.52, 1.07, 0.05), mat(c1), x, 3.1, -4.6);
    add(R, cyl(0.3, 0.3, 0.02, 24), mat(c2), x - 0.3, 3.18, -4.56, { rx: Math.PI / 2, cast: false });
    const sq = add(R, box(0.36, 0.36, 0.02), mat(c3), x + 0.3, 2.93, -4.56, { cast: false }); sq.rotation.z = 0.18;
    add(R, cyl(0.14, 0.14, 0.02, 18), mat(c3), x + 0.26, 3.33, -4.56, { rx: Math.PI / 2, cast: false });
    add(R, box(0.2, 0.2, 0.02), mat(c2), x - 0.46, 2.82, -4.56, { cast: false });
    add(R, cyl(0.1, 0.16, 0.2, 6), glowMat(0xfff3d4), x, 4.5, -4.2, { cast: false });
    add(R, box(0.06, 0.5, 0.06), mat(0xbdb3a2), x, 4.8, -4.2, { cast: false });
  });
  const plinth = (x, z, c, shape) => {
    add(R, box(0.95, 1.2, 0.95), mat(0xf4eee2), x, 0.6, z); add(R, box(1.05, 0.08, 1.05), mat(0xe6dccb), x, 1.24, z);
    if (shape === 0) add(R, ico(0.33, 1), mat(c), x, 1.6, z);
    else if (shape === 1) add(R, new THREE.TorusKnotGeometry(0.22, 0.08, 48, 6), mat(c), x, 1.65, z);
    else add(R, box(0.5, 0.5, 0.5), mat(c), x, 1.55, z, { ry: 0.6 });
    add(R, box(0.4, 0.02, 0.26), mat(0xfdfaf0), x, 1.29, z + 0.3, { cast: false });
  };
  plinth(-2.4, -1.4, 0xf3a9c9, 0); plinth(0.3, -1.0, 0x8fc3e0, 1); plinth(2.9, -1.4, 0xf3d9a4, 2);
  add(R, box(2.8, 0.22, 0.8), mat(0xe8dcc6), 0.3, 0.62, 2.3); for (const x of [-0.75, 1.35]) add(R, box(0.18, 0.55, 0.68), wd(), x, 0.3, 2.3);
  sittable('museum', 0.3, 0.73, 2.3, Math.PI);
  add(R, cyl(0.42, 0.32, 0.5, 7), mat(0xe7ded0), -3.7, 0.25, 2.6);
  for (let i = 0; i < 7; i++) { const c = add(R, new THREE.ConeGeometry(0.11, 1.0, 4), mat(0x6cb04a), -3.7 + (rnd() - 0.5) * 0.5, 0.85, 2.6 + (rnd() - 0.5) * 0.4); c.rotation.set((rnd() - 0.5), 0, (rnd() - 0.5)); }
  add(R, box(0.9, 1.3, 0.08), mat(0xfdfaf0), -4.7, 2.4, -1.2);
  [-2.6, 0.2, 2.9].forEach(x => roomLamp('museum', x, 3.9, -3.6, 0xfff0d2, 5, 0.22));
  roomLamp('museum', 0.3, 4.3, 1.4, 0xfff4e2, 11, 0.3);
  spot('museum', -2.4, 2.2, -1.4, 'GOALL', INFO.mus_one);
  spot('museum', 0.3, 2.25, -1.0, 'UX & CxD', INFO.mus_two);
  spot('museum', 2.9, 2.2, -1.4, 'TANGLE WITH ANN', INFO.mus_three);
}

/* ---- 05 QUALIFICATIONS: the conservatory office ---- */
{
  const R = newRoom('dome', { bg: 0xdff0e7, title: 'Qualifications', sub: 'The conservatory · a desk among the plants', tags: ['PhD', 'NVIDIA', 'Certifications'],
    floor: 0xd9c9a8, wallA: 0xe7f2ec, wallB: 0xdcebe2, trim: 0xe0d2b4, beam: 0x9fc4ae, windowAt: 1.2, start: new THREE.Vector3(1.6, 0, 3.0) });
  rug(R, 0.4, 0.8, 5.2, 4.0, 0xf2ebdc, 0x9bb79f, 0xcfbf96);
  // certificates stay on the wall
  for (let i = 0; i < 3; i++) { const x = -3.2 + i * 1.4;
    add(R, box(1.2, 0.95, 0.08), mat(0xe8d9b4), x, 3.5, -4.68); add(R, box(1.02, 0.78, 0.05), mat(0xfdfaf0), x, 3.5, -4.6);
    add(R, box(0.6, 0.05, 0.02), mat(0xcbb98f), x, 3.66, -4.56, { cast: false }); add(R, box(0.42, 0.04, 0.02), mat(0xd9cbae), x, 3.5, -4.56, { cast: false });
    add(R, ico(0.1, 0), mat(0xe7b7c6), x + 0.3, 3.25, -4.55, { cast: false });
  }
  // the office: desk, screen, chair, drawers
  add(R, box(3.4, 0.2, 1.6), wd(), 0.9, 1.5, -3.1); for (const [x, z] of [[-0.5, -2.5], [2.3, -2.5], [-0.5, -3.7], [2.3, -3.7]]) add(R, box(0.16, 1.45, 0.16), wd(), x, 0.72, z);
  computer(R, 0.7, 1.6, -3.4, 0.06);
  add(R, box(0.3, 0.26, 0.26), mat(0xcbb98f), 2.1, 1.73, -3.3); add(R, cyl(0.07, 0.07, 0.4, 6), mat(0x6cb04a), 2.1, 1.95, -3.3);
  add(R, cyl(0.1, 0.13, 0.42, 6), mat(0x9fc4ae), -0.1, 1.78, -3.4); add(R, ico(0.3, 0), glowMat(0xfff1c4), -0.1, 2.12, -3.4, { cast: false });
  const oc = new THREE.Group(); oc.position.set(0.9, 0, -1.7); oc.rotation.y = Math.PI; R.add(oc);
  add(oc, box(1.0, 0.2, 1.0), mat(0x7d93a8), 0, 0.92, 0); add(oc, box(1.0, 1.15, 0.2), mat(0x7d93a8), 0, 1.58, -0.48);
  add(oc, cyl(0.09, 0.09, 0.78, 6), mat(0x8b9099), 0, 0.48, 0);
  for (let i = 0; i < 5; i++) { const l = add(oc, box(0.74, 0.08, 0.12), mat(0xf1f1ee), 0, 0.1, 0); l.rotation.y = i * 1.256; }
  sittable('dome', 0.9, 1.04, -1.7, Math.PI);
  // the cabinet beside the desk now holds the diplomas
  add(R, box(1.5, 1.45, 1.15), mat(0xf4ead8), 3.4, 0.72, -3.0);
  for (const y of [0.45, 1.0]) add(R, box(1.2, 0.08, 0.06), mat(0xcbb98f), 3.4, y, -2.42);
  add(R, box(1.62, 0.1, 1.26), mat(0xe8d6b6), 3.4, 1.49, -3.0);
  for (let i = 0; i < 3; i++) {
    const d = new THREE.Group(); d.position.set(3.0 + i * 0.42, 1.54, -3.0 + i * 0.12); d.rotation.y = -0.5 + i * 0.16; d.rotation.z = (rnd() - 0.5) * 0.08; R.add(d);
    add(d, box(0.56, 0.72, 0.06), mat([0xcbb089, 0xd8c29c, 0xc2a578][i]), 0, 0.36, 0);
    add(d, box(0.44, 0.58, 0.03), mat(0xfdfaf0), 0, 0.36, 0.04, { cast: false });
    add(d, box(0.26, 0.04, 0.02), mat(0xb9a07c), 0, 0.46, 0.06, { cast: false });
    add(d, ico(0.05, 0), mat(0xe7b7c6), 0.1, 0.2, 0.06, { cast: false });
  }
  // the left cabinet keeps its plant
  add(R, box(2.0, 1.5, 0.9), mat(0xefe3cd), -3.4, 0.75, -2.6);
  for (const y of [0.55, 1.15]) add(R, box(1.8, 0.08, 0.8), wd(), -3.4, y, -2.6);
  add(R, cyl(0.26, 0.2, 0.3, 7), mat(0xf1dcc6), -3.4, 1.65, -2.6); add(R, ico(0.3, 0), mat(0x9ed36a), -3.4, 1.95, -2.6);
  standLamp(R, -2.0, 2.4, 0x9a8a6c, 0xf7e0ae);
  pendant(R, 1.0, 1.4, 4.2, 0xf7e0ae);
  roomLamp('dome', -0.1, 2.0, -3.4, 0xffd296, 6, 0.18);
  roomLamp('dome', -2.0, 2.6, 2.4, 0xffcf92, 12, 0.22);
  roomLamp('dome', 1.0, 4.0, 1.4, 0xffe2b4, 13, 0.3);
  roomLamp('dome', 3.2, 2.2, -2.8, 0xffdcae, 5, 0.18);
  // plants, generously, all around the office
  const planter = (x, z, n, c, s) => {
    add(R, cyl(0.46 * s, 0.36 * s, 0.6 * s, 8), mat(0xe7ded0), x, 0.3 * s, z);
    add(R, cyl(0.48 * s, 0.48 * s, 0.08 * s, 8), mat(0xd9cbb4), x, 0.6 * s, z, { cast: false });
    for (let i = 0; i < n; i++) { const l = add(R, new THREE.ConeGeometry(0.14 * s, (1.0 + rnd() * 0.6) * s, 4), mat(c), x + (rnd() - 0.5) * 0.7 * s, (1.0 + rnd() * 0.3) * s, z + (rnd() - 0.5) * 0.7 * s); l.rotation.set((rnd() - 0.5) * 0.7, rnd() * 3, (rnd() - 0.5) * 0.7); }
  };
  planter(-1.6, -4.0, 7, 0x6cb04a, 1.1); planter(2.9, -4.1, 7, 0x7ec25a, 1.0); planter(-4.1, -0.4, 8, 0x5fa848, 1.2);
  planter(-4.0, 2.6, 7, 0x74b652, 1.0); planter(3.9, 1.2, 8, 0x6cb04a, 1.15); planter(2.6, 3.6, 7, 0x8cc65a, 1.0);
  planter(-1.4, 3.8, 6, 0x7ec25a, 0.9);
  // hanging trailing plants from the beams
  for (const [x, z] of [[-2.6, -4.4], [1.6, -4.4], [-4.45, 1.8]]) {
    add(R, cyl(0.02, 0.02, 1.1, 4), mat(0xcbb98f), x, 4.9, z, { cast: false });
    add(R, cyl(0.26, 0.2, 0.3, 7), mat(0xe7ded0), x, 4.2, z);
    for (let i = 0; i < 4; i++) { const v = add(R, box(0.07, 0.8 + rnd() * 0.6, 0.07), mat(0x74b652), x + (rnd() - 0.5) * 0.4, 3.6 - rnd() * 0.3, z + (rnd() - 0.5) * 0.4); v.rotation.z = (rnd() - 0.5) * 0.3; }
  }
  add(R, box(1.9, 0.12, 0.5), mat(0xcbb98f), 1.5, 2.45, -4.58);
  for (let i = 0; i < 4; i++) { const tx = 0.85 + i * 0.44;
    add(R, cyl(0.1, 0.14, 0.1, 8), mat(0xd8bd7e), tx, 2.57, -4.56);
    add(R, cyl(0.05, 0.05, 0.16, 6), mat(0xd8bd7e), tx, 2.7, -4.56);
    add(R, ico(0.11, 0), mat([0xf0c86a, 0xe0e4ea, 0xe6a86a, 0xf0c86a][i]), tx, 2.86, -4.56); }
  spot('dome', 1.5, 3.3, -4.4, 'GRANTS & AWARDS', INFO.dome_awards);
  spot('dome', -2.5, 4.3, -4.2, 'THE CERTIFICATES', INFO.dome_certs);
  spot('dome', 0.9, 2.5, -3.1, 'THE DESK', INFO.dome_desk);
  spot('dome', 3.4, 2.6, -3.0, 'THE DIPLOMAS', INFO.dome_diplomas);
}

Object.values(rooms).forEach(r => mergeStatic(r.g, r.g));

const annRoomEntry = { obj: roomAnn, label: 'SAY HI', fn: () => { roomAnn.userData.wave = 1.6; toastMsg('Hi, I’m Ann!'); } };
function openInfo(c) {
  document.getElementById('p-eye').textContent = c.eye;
  document.getElementById('p-title').textContent = c.title;
  document.getElementById('p-body').innerHTML = c.body + (c.list && c.list.length ? '<ul>' + c.list.map(l => '<li>' + l + '</li>').join('') + '</ul>' : '');
  panel.classList.add('open'); panelOpen = true; panel.setAttribute('aria-hidden', 'false');
  document.getElementById('scrim').classList.add('on');
  document.getElementById('p-close').focus();
}
function enterRoom(key) {
  key = rooms[key] ? key : 'home';
  closePanel(); current = null; activeRoom = key; seated = null; roomAnn.userData.sit = 0;
  Object.values(rooms).forEach(r => r.g.visible = false);
  rooms[key].g.visible = true; roomsRoot.visible = true;
  rooms[key].g.add(roomAnn); roomAnn.position.copy(rooms[key].start); roomAnn.rotation.y = 0.4;
  roomClickables = [annRoomEntry].concat(rooms[key].clicks);
  document.body.classList.add('inroom'); view = 'room'; setHover(null);
  world.visible = false; petals.visible = flies.visible = skyLayer.visible = false;
  camTarget.set(0, ROOM_Y + 1.7, 0); camGoal.copy(camTarget); zoom = zoomGoal = 1; baseView = 8.4;
  yawGoal = 0.32; elevGoal = BASE_ELEV;
  sun.position.set(-9, ROOM_Y + 26, 11); sun.target.position.set(0, ROOM_Y, 0); scene.add(sun.target);
  sun.shadow.camera.left = -10; sun.shadow.camera.right = 10; sun.shadow.camera.top = 10; sun.shadow.camera.bottom = -10; sun.shadow.camera.updateProjectionMatrix();
  resize();
  document.getElementById('room-title').textContent = rooms[key].title;
  document.getElementById('room-sub').textContent = rooms[key].sub;
  document.getElementById('room-tags').innerHTML = rooms[key].tags.map(t => '<span>' + t + '</span>').join('');
  const card = document.getElementById('room-card');
  card.classList.toggle('min', innerWidth <= 700);
  setRoomToggleLabel();
  card.classList.add('open');
}
function exitRoom() {
  closePanel(); seated = null; roomAnn.userData.sit = 0;
  document.body.classList.remove('inroom'); view = 'island'; setHover(null); roomClickables = [];
  world.visible = true; petals.visible = flies.visible = skyLayer.visible = true; roomsRoot.visible = false;
  camTarget.set(0, 0, 0); camGoal.set(0, 0, 0); zoom = zoomGoal = 1; baseView = 13.2;
  yawGoal = BASE_YAW; elevGoal = BASE_ELEV;
  sun.position.set(-12, 22, 10); sun.target.position.set(0, 0, 0);
  sun.shadow.camera.left = -22; sun.shadow.camera.right = 22; sun.shadow.camera.top = 22; sun.shadow.camera.bottom = -22; sun.shadow.camera.updateProjectionMatrix();
  resize(); document.getElementById('room-card').classList.remove('open');
}
document.getElementById('room-back').addEventListener('click', exitRoom);
let roomWalkT = 0;
function stepRoom(dt) {
  const u = roomAnn.userData, v = new THREE.Vector3();
  if (moveKeys.has('up')) v.z -= 1; if (moveKeys.has('down')) v.z += 1;
  if (moveKeys.has('left')) v.x -= 1; if (moveKeys.has('right')) v.x += 1;
  if (seated && (v.lengthSq() || airborne)) standUp();
  let moved = false;
  if (!seated && v.lengthSq()) {
    v.normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    roomAnn.position.addScaledVector(v, 3.4 * dt);
    roomAnn.position.x = THREE.MathUtils.clamp(roomAnn.position.x, -ROOM_LIM, ROOM_LIM);
    roomAnn.position.z = THREE.MathUtils.clamp(roomAnn.position.z, -ROOM_LIM, ROOM_LIM);
    const ty = Math.atan2(v.x, v.z); let dy = ty - roomAnn.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    roomAnn.rotation.y += dy * Math.min(1, dt * 12); moved = true; roomWalkT += dt * 11;
  }
  stepJump(dt, 0);
  u.sit += ((seated ? 1 : 0) - u.sit) * Math.min(1, dt * 8);
  poseWalker(roomAnn, moved, dt, T, roomWalkT);
  u.shadow.visible = !seated;
  const floorY = moved ? Math.abs(Math.sin(roomWalkT)) * 0.05 : Math.sin(T * 1.8) * 0.004;
  airPose(u);
  roomAnn.position.y = seated ? seated.y - SEAT_DROP : floorY + jumpY;
  beacons.forEach(b => {
    b.g.quaternion.copy(cam.quaternion);
    b.g.position.y = b.base + Math.sin(T * 1.6 + b.p) * 0.09;
    b.ring.rotation.z += dt * 1.3;
    b.ring.scale.setScalar(1 + Math.sin(T * 2.4 + b.p) * 0.12);
  });
  sleepers.forEach(s => { const k = 1 + Math.sin(T * 1.5 + s.p) * 0.045; s.body.scale.set(1.45, 0.78 * k, 1.0 * k); });
  students.forEach(st => {
    st.g.position.y = Math.sin(T * 2.0 + st.p) * 0.012;
    st.head.rotation.z = Math.sin(T * 0.8 + st.p) * 0.05;
    st.hands.forEach((h, i) => h.rotation.x = Math.sin(T * 7 + st.p + i * 2.1) * 0.08);
  });
  zzz.forEach(z => { const t = (T * 0.42 + z.p) % 1;
    z.sp.position.set(t * 0.5, t * 1.15, 0); z.sp.scale.setScalar(0.3 + t * 0.4);
    z.sp.material.opacity = Math.sin(t * Math.PI) * 1.0; });
}

/* ============ classic view toggle, drag-to-turn ============ */
const classicBtn = document.getElementById('classic'), plainEl = document.getElementById('plain');
function setClassic(on) {
  document.body.classList.toggle('plain', on);
  classicBtn.setAttribute('aria-pressed', String(on));
  if (on) plainEl.scrollTop = 0; else if (location.hash) history.replaceState(null, '', location.pathname + location.search);
}
classicBtn.addEventListener('click', () => setClassic(!document.body.classList.contains('plain')));
document.getElementById('plain-back').addEventListener('click', () => setClassic(false));
const SECTIONS = ['about', 'qualifications', 'projects', 'research', 'teaching'];
function applyHash() {
  const id = location.hash.replace('#', '');
  if (!SECTIONS.includes(id)) return;
  setClassic(true);
  const el = document.getElementById(id); if (el) el.scrollIntoView({ block: 'start' });
}
addEventListener('hashchange', applyHash); applyHash();
let drag = null;
// the room keeps its two walls behind the camera, so orbiting stays inside that quadrant
const YAW_RANGE = () => view === 'room' ? [0.08, 1.46] : [BASE_YAW - 0.85, BASE_YAW + 0.85];
const ELEV_RANGE = [0.42, 1.18];
canvas.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, yaw: yawGoal, elev: elevGoal, moved: false }; });
addEventListener('pointermove', e => {
  if (!drag) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (Math.abs(dx) > 5 || Math.abs(dy) > 5) drag.moved = true;
  if (!drag.moved) return;
  const [lo, hi] = YAW_RANGE();
  yawGoal = THREE.MathUtils.clamp(drag.yaw - dx * 0.005, lo, hi);
  elevGoal = THREE.MathUtils.clamp(drag.elev + dy * 0.004, ELEV_RANGE[0], ELEV_RANGE[1]);
  document.getElementById('hint')?.classList.add('gone');
});
addEventListener('pointerup', () => { if (drag?.moved) { const st = ev => ev.stopPropagation(); addEventListener('click', st, { capture: true, once: true }); } drag = null; });
addEventListener('wheel', e => {
  if (panelOpen || document.body.classList.contains('plain')) return;      // reading, not navigating
  if (e.target && e.target.closest && e.target.closest('.panel, #plain, .nav')) return;
  zoomGoal = THREE.MathUtils.clamp(zoomGoal * (e.deltaY < 0 ? 1.1 : 0.9), view === 'room' ? 0.7 : 0.8, 2.4);
}, { passive: true });
document.getElementById('resetview').addEventListener('click', () => {
  yawGoal = view === 'room' ? 0.32 : BASE_YAW; elevGoal = BASE_ELEV; zoomGoal = 1;
});

/* ============ main loop ============ */
let T = 0, last = performance.now();
const waterPos = waterGeo.attributes.position;
function frame() {
  const now = performance.now(), dt = Math.min((now - last) / 1000, 0.05); last = now; T += dt;
  nightK += ((night ? 1 : 0) - nightK) * Math.min(1, dt * 2.2); applyTime(nightK);
  if (view === 'island') { stepWalk(dt); stepBalls(dt); } else stepRoom(dt);
  stepDogs(T, dt);
  zoom += (zoomGoal - zoom) * Math.min(1, dt * 3); camTarget.lerp(camGoal, Math.min(1, dt * 3)); yaw += (yawGoal - yaw) * Math.min(1, dt * 5); elev += (elevGoal - elev) * Math.min(1, dt * 5);
  if (Math.abs(zoom - zoomGoal) > 1e-3) resize();
  placeCam(); placeSky();
  if (view === 'island') {
    for (let i = 0; i < waterPos.count; i++) { const x = waterBase[i * 3], z = waterBase[i * 3 + 2]; waterPos.setY(i, Math.sin(x * 0.17 + T * 0.9) * 0.1 + Math.cos(z * 0.2 + T * 0.7) * 0.1); }
    waterPos.needsUpdate = true; water.geometry.computeVertexNormals();
    clouds.forEach(c => { c.position.x += c.userData.speed * dt; if (c.position.x > 40) c.position.x = -40; });
    interactive.forEach(it => { const tY = (hovered && hovered.it === it) || current === it.key ? 0.16 : 0; it.group.position.y += (tY - it.group.position.y) * Math.min(1, dt * 10); });
    const pp = petalGeo.attributes.position; for (let i = 0; i < petalCount; i++) { let y = pp.getY(i) - dt * 0.5, x = pp.getX(i) + Math.sin(T + i) * dt * 0.4; if (y < 0) { y = 7; x = -14 + rnd() * 28; } pp.setXYZ(i, x, y, pp.getZ(i) + dt * 0.1); } pp.needsUpdate = true;
    const fp = flyGeo.attributes.position; for (let i = 0; i < 40; i++) fp.setY(i, fp.getY(i) + Math.sin(T * 1.3 + i) * dt * 0.3); fp.needsUpdate = true;
  }
  renderer.autoClear = true; renderer.render(skyScene, cam);
  renderer.autoClear = false; renderer.clearDepth(); renderer.render(scene, cam);
  requestAnimationFrame(frame);
}
// loading + start
resize(); placeCam(); placeSky(); applyTime(0);
window.__world = {
  annPos: () => ann.position.toArray(), walking: () => !!walk, panelOpen: () => panelOpen,
  jump: () => tryJump(), airborne: () => airborne, zoom: () => zoom,
  focusBench: () => { camGoal.set(BENCH.x + 1.2, 0.6, BENCH.z + 0.4); zoomGoal = 2.3; },
  seatedOutside: () => !!annSeat, annYaw: () => ann.rotation.y, camYaw: () => yaw,
  waving: () => ann.userData.wave > 0, sitAmount: () => +ann.userData.sit.toFixed(2),
  teleport: (x, z) => { ann.position.set(x, ann.position.y, z); },
  ground: (x, z, y) => groundHeight(x, z, y), jumpY: () => jumpY,
  labels: () => (view === 'room' ? roomClickables : clickables).map(c => c.label),
  enterRoom: k => enterRoom(k), exitRoom: () => exitRoom(), view: () => view,
  roomAnnPos: () => roomAnn.position.toArray(), seated: () => !!seated,
  cam2: () => ({ yaw: +yaw.toFixed(3), elev: +elev.toFixed(3) }),
  insideObstacle: () => obstacles.some(o => Math.hypot(ann.position.x - o.x, ann.position.z - o.z) < o.r - 0.05),
  probe: (x, y) => { const r = canvas.getBoundingClientRect();
    mouse.set(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1); ray.setFromCamera(mouse, cam);
    return roomClickables.map(c => { let n = 0; c.obj.traverse(o => { if (o.isMesh) n++; });
      return [c.label, n, ray.intersectObject(c.obj, true).length]; }); },
  screenOf: label => { const c = (view === 'room' ? roomClickables : clickables).find(x => x.label === label); if (!c) return null;
    const v = new THREE.Box3().setFromObject(c.obj).getCenter(new THREE.Vector3()); v.project(cam);
    return { x: (v.x * 0.5 + 0.5) * innerWidth, y: (-v.y * 0.5 + 0.5) * innerHeight }; },
  walking2: () => !!walk, wave: waveAnn, pet: () => petDog(dogs[0]), feed: () => feedDog(dogs[1]), bounce: () => looseBalls.forEach(o => { o.vy = 5.5; o.vx = (rnd() - .5) * 2; }), press: d => moveKeys.add(d), release: d => moveKeys.delete(d), scene, renderer, go, setNight: v => { night = v; }, info: () => renderer.info };
document.getElementById('loading').classList.add('gone');
frame();
