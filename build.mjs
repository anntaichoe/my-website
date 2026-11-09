import { build } from 'esbuild';
import fs from 'fs';
import crypto from 'crypto';
import zlib from 'zlib';
import path from 'path';
import { CONTENT, INFO } from './src/content.js';

const SITE = 'https://anndtai.com';
const SECTIONS = [
  { id: 'about', h: 'About', keys: ['home_board', 'home_desk', 'home_dogs'],
    desc: 'Ann T. Choe, PhD - applied linguist with a technology focus, working on conversation design, generative AI and product design.' },
  { id: 'qualifications', h: 'Qualifications', keys: ['dome_desk', 'dome_diplomas', 'dome_certs', 'dome_awards'],
    desc: 'Work experience at NVIDIA, JumpstartAI and Duolingo English Test, three degrees, certifications, grants and awards.' },
  { id: 'projects', h: 'Projects', keys: ['mus_one', 'mus_two', 'mus_three'],
    desc: 'GOALL, a Chinese reading app; UX and conversation design work; and Tangle with Ann, a Zendala course.' },
  { id: 'research', h: 'Research', keys: ['lib_papers', 'lib_shelves'],
    desc: 'Conversation analysis, second language learning and human-AI interaction: peer-reviewed articles, chapters and working papers.' },
  { id: 'teaching', h: 'Teaching', keys: ['sch_board', 'sch_desks', 'sch_testimonials'],
    desc: 'Teaching philosophy, seventeen courses at UH Manoa and Hawaii Pacific University, and student testimonials.' }
];
const TAGLINE = 'Generative AI Analyst &middot; Conversation Designer &middot; Product Designer &middot; Applied Linguistics Researcher';

const shell = fs.readFileSync('src/shell.html', 'utf8');
const STYLE = shell.slice(shell.indexOf('/*STYLE-START*/') + 15, shell.indexOf('/*STYLE-END*/'));
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">';

const block = (key, lvl = 3) => {
  const c = INFO[key]; if (!c) throw new Error('missing INFO.' + key);
  const list = c.list && c.list.length ? '<ul>' + c.list.map(l => '<li>' + l + '</li>').join('') + '</ul>' : '';
  return `<article><h${lvl}>${c.title}</h${lvl}>` + (c.body || '') + list + `</article>`;
};
const PERSON_LD = JSON.stringify({
  '@context': 'https://schema.org', '@type': 'Person', name: 'Ann T. Choe', honorificSuffix: 'PhD',
  jobTitle: 'Lead Generative AI Analyst', url: SITE,
  description: 'Applied linguist with a technology focus, working on conversation design, generative AI and product design.',
  worksFor: { '@type': 'Organization', name: 'NVIDIA' },
  alumniOf: ['University of Hawaii at Manoa', 'Teachers College, Columbia University', 'Hawaii Pacific University'],
  sameAs: ['https://www.linkedin.com/in/ann-t-choe/', 'https://scholar.google.com/citations?user=m7vYqyEAAAAJ&hl=en',
           'https://github.com/anntaichoe', 'https://dribbble.com/diane2837', 'https://www.researchgate.net/profile/Ann-Choe/research']
});
// href() differs per target: the artifact can only use #fragments, the real site uses paths
const navHtml = (href, current) => SECTIONS.map(s =>
  '<a href="' + href(s) + '"' + (s.id === current ? ' aria-current="page"' : '') + '>' + s.h + '</a>').join('');

function classicInner(href, current, backHref) {
  const back = backHref
    ? '<a class="ib" href="' + backHref + '">&#8592; Back to the world</a>'
    : '<button class="ib" id="plain-back">&#8592; Back to the world</button>';
  // on a section page the section name is the h1; on the full page the site name is
  const head = current
    ? `<header class="plain-head"><p class="sitename"><a href="/">Ann T. Choe, PhD</a></p><h1>${SECTIONS.find(s => s.id === current).h}</h1><p class="lede">${TAGLINE}</p></header>`
    : `<header class="plain-head"><h1>Ann T. Choe, PhD</h1><p class="lede">${TAGLINE}</p></header>`;
  const body = current
    ? '<section id="' + current + '">' + SECTIONS.find(s => s.id === current).keys.map(k => block(k, 2)).join('') + '</section>'
    : SECTIONS.map(s => '<section id="' + s.id + '"><h2>' + s.h + '</h2>' + s.keys.map(k => block(k, 3)).join('') + '</section>').join('');
  return `<div id="plain"><div class="plain-wrap">
<div class="plain-bar">${back}<nav class="plain-nav" aria-label="Sections">${navHtml(href, current)}</nav><button class="ib tod2" id="tod2" aria-pressed="false" aria-label="Toggle dark mode" hidden></button></div>
${head}
${body}
<footer class="plain-foot"><p>This is the plain-text version of the same site. Everything here matches the interactive world exactly.</p></footer>
</div></div>`;
}

/* ---------- 1. the single-file build (artifact preview): #fragment nav ---------- */
const r = await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', write: false, target: 'es2020' });
const js = r.outputFiles[0].text.replace(/<\/script/g, '<\\/script');
// any failure to start the 3D world degrades to the readable page, never a stuck spinner
const guarded = 'if(!window.__NO3D){try{' + js + '}catch(e){document.body.classList.add("plain","no3d");' +
  'var l=document.getElementById("loading");if(l)l.className="loading gone";' +
  'if(window.console)console.warn("3D unavailable, showing plain view:",e);}}';
const hash = crypto.createHash('sha256').update(guarded).digest('hex').slice(0, 8);
const WORLD_JS = 'world.' + hash + '.js';

function shellWith(classic, scriptTag) {
  const A = shell.indexOf('<div id="plain">'), B = shell.indexOf('<script>/*BUNDLE*/</script>');
  if (A < 0 || B < 0) throw new Error('shell markers missing');
  return (shell.slice(0, A) + classic + '\n' + shell.slice(B))
    .replace('<script>/*BUNDLE*/</script>', () => scriptTag);
}
// the artifact preview stays a single self-contained file
const inlineTag = '<script>' + guarded + '</script>';
// the deployed site loads the world from a cacheable file, and only where it can run
const loaderTag = '<script>(function(){if(window.__NO3D)return;var s=document.createElement("script");' +
  's.src="/' + WORLD_JS + '";s.defer=true;document.head.appendChild(s);})();</script>';

fs.mkdirSync('out', { recursive: true });
fs.writeFileSync('out/index.html', shellWith(classicInner(s => '#' + s.id, null, null), inlineTag));

/* ---------- 2. the deployable site: real /research/ style URLs ---------- */
const SITEDIR = 'site';
fs.rmSync(SITEDIR, { recursive: true, force: true });
fs.mkdirSync(SITEDIR, { recursive: true });
fs.writeFileSync(path.join(SITEDIR, 'index.html'), shellWith(classicInner(s => '/' + s.id + '/', null, null), loaderTag));
fs.writeFileSync(path.join(SITEDIR, WORLD_JS), guarded);
if (process.env.BENCH) {   // a single-file copy, only for benchmarking the two approaches
  fs.mkdirSync(path.join(SITEDIR, 'single'), { recursive: true });
  fs.writeFileSync(path.join(SITEDIR, 'single', 'index.html'), shellWith(classicInner(s => '/' + s.id + '/', null, null), inlineTag));
}

const page = (s) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${s.h} | Ann T. Choe, PhD</title>
<meta name="description" content="${s.desc}">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="canonical" href="${SITE}/${s.id}/">
<meta property="og:type" content="website"><meta property="og:url" content="${SITE}/${s.id}/">
<meta property="og:title" content="${s.h} | Ann T. Choe, PhD"><meta property="og:description" content="${s.desc}">
<meta name="twitter:card" content="summary">
<script type="application/ld+json">${PERSON_LD}</script>
${FONTS}
<style>${STYLE}</style></head>
<body class="plain">
${classicInner(x => '/' + x.id + '/', s.id, '/')}
<script>(function(){try{var t=localStorage.getItem('theme');var d=t==='night';if(d)document.body.classList.add('night');var b=document.getElementById('tod2');if(!b)return;b.hidden=false;var p=function(){b.textContent=document.body.classList.contains('night')?'\u2600':'\u263e';b.setAttribute('aria-pressed',document.body.classList.contains('night'));};p();b.addEventListener('click',function(){var n=document.body.classList.toggle('night');try{localStorage.setItem('theme',n?'night':'day');}catch(e){}p();});}catch(e){}})();</script>
</body></html>`;

for (const s of SECTIONS) {
  fs.mkdirSync(path.join(SITEDIR, s.id), { recursive: true });
  fs.writeFileSync(path.join(SITEDIR, s.id, 'index.html'), page(s));
}
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(SITEDIR, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  ['', ...SECTIONS.map(s => s.id + '/')].map(u =>
    `  <url><loc>${SITE}/${u}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${u ? '0.8' : '1.0'}</priority></url>`).join('\n') +
  '\n</urlset>\n');
fs.writeFileSync(path.join(SITEDIR, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(path.join(SITEDIR, 'CNAME'), 'anndtai.com\n');
// carry static assets (favicon, images) into the published output
if (fs.existsSync('static')) {
  for (const f of fs.readdirSync('static')) {
    fs.copyFileSync(path.join('static', f), path.join(SITEDIR, f));
    console.log('  static ->', f);
  }
}
fs.writeFileSync(path.join(SITEDIR, '.nojekyll'), '');
fs.writeFileSync(path.join(SITEDIR, '404.html'), page({ id: 'about', h: 'About', keys: SECTIONS[0].keys, desc: SECTIONS[0].desc })
  .replace('<title>About |', '<title>Page not found |'));

const sizes = fs.readdirSync(SITEDIR, { withFileTypes: true }).map(d =>
  d.isDirectory() ? d.name + '/index.html ' + (fs.statSync(path.join(SITEDIR, d.name, 'index.html')).size / 1024).toFixed(0) + 'KB'
                  : d.name + ' ' + (fs.statSync(path.join(SITEDIR, d.name)).size / 1024).toFixed(0) + 'KB');
const gz = f => (zlib.gzipSync(fs.readFileSync(f)).length / 1024).toFixed(0) + 'KB';
console.log('artifact (single file):', (fs.statSync('out/index.html').size / 1024).toFixed(0) + 'KB');
console.log('site/index.html       :', (fs.statSync(path.join(SITEDIR, 'index.html')).size / 1024).toFixed(0) + 'KB');
console.log('site/' + WORLD_JS + ':', (fs.statSync(path.join(SITEDIR, WORLD_JS)).size / 1024).toFixed(0) + 'KB');
console.log('gzipped  -> html:', gz(path.join(SITEDIR, 'index.html')), '| world js:', gz(path.join(SITEDIR, WORLD_JS)));
console.log('site/   :', sizes.join(' | '));
