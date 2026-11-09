if(!window.__NO3D){try{(()=>{var Jd=0,Th=1,Zd=2;var vs=1,Kd=2,vr=3,$i=0,fn=1,wn=2,Ss=0,Sr=1,wh=2,Ah=3,Rh=4,Qd=5;var Ms=100,jd=101,$d=102,ef=103,tf=104,nf=200,sf=201,rf=202,af=203,Ch=204,Ih=205,of=206,lf=207,cf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,Fo=0,Oo=1,Bo=2,$s=3,zo=4,Ho=5,ko=6,Go=7,Ph=0,gf=1,xf=2,Dn=0,Lh=1,Dh=2,Nh=3,Uh=4,Fh=5,Oh=6,Bh=7;var zh=300,bs=301,Mr=302,Sl=303,Ml=304,Vo=1e3,Qn=1001,Wo=1002,Jt=1003,_f=1004;var Aa=1005;var dn=1006,bl=1007;var Ii=1008;var xn=1009,Hh=1010,kh=1011,br=1012,El=1013,Vn=1014,Wn=1015,Xn=1016,Tl=1017,wl=1018,Es=1020,Gh=35902,Vh=35899,Wh=1021,Xh=1022,qn=1023,wi=1026,Pi=1027,qh=1028,Al=1029,es=1030,Rl=1031;var Cl=1033,Ra=33776,Ca=33777,Ia=33778,Pa=33779,Il=35840,Pl=35841,Ll=35842,Dl=35843,Nl=36196,Ul=37492,Fl=37496,Ol=37488,Bl=37489,La=37490,zl=37491,Hl=37808,kl=37809,Gl=37810,Vl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Jl=37816,Zl=37817,Kl=37818,Ql=37819,jl=37820,$l=37821,ec=36492,tc=36494,nc=36495,ic=36283,sc=36284,Da=36285,rc=36286;var Zr=2300,Xo=2301,Do=2302,uh=2303,dh=2400,fh=2401,ph=2402;var yf=3200;var ac=0,vf=1,Li="",nn="srgb",Kr="srgb-linear",Qr="linear",gt="srgb";var No=7680;var Sf=519,Mf=512,bf=513,Ef=514,Yh=515,Tf=516,wf=517,Jh=518,Zh=519,Kh=35044;var Qh="300 es",Ln=2e3,er=2001;function Um(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){let n=tr("canvas");return n.style.display="block",n}var rd={},nr=null;function jr(...n){let e="THREE."+n.shift();nr?nr("log",e,...n):console.log(e,...n)}function Rf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=Rf(n);let e="THREE."+n.shift();if(nr)nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Rf(n);let e="THREE."+n.shift();if(nr)nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Wr(...n){let e=n.join(" ");e in rd||(rd[e]=!0,Ge(...n))}function Cf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var If={[Fo]:Fo,[Bo]:ko,[zo]:zo,[$s]:Ho,[Oo]:Oo,[ko]:Bo,[Go]:Go,[Ho]:$s},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,Xr=Math.PI/180,ir=180/Math.PI;function Di(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function jh(n,e){return(n%e+e)%e}function Om(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Bm(n,e,t){return n!==e?(t-n)/(e-n):0}function qr(n,e,t){return(1-t)*n+t*e}function zm(n,e,t,i){return qr(n,e,1-Math.exp(-t*i))}function Hm(n,e=1){return e-Math.abs(jh(n,e*2)-e)}function km(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Gm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wm(n,e){return n+Math.random()*(e-n)}function Xm(n){return n*(.5-Math.random())}function qm(n){n!==void 0&&(ad=n);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ym(n){return n*Xr}function Jm(n){return n*ir}function Zm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Km(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $h(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qm(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*f,o*h,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function eu(n,e){if(e.constructor===Float32Array)return n;let t=oc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function tu(n,e){if(e.constructor===Float32Array)return n;let t=oc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Yn={DEG2RAD:Xr,RAD2DEG:ir,generateUUID:Di,clamp:st,euclideanModulo:jh,mapLinear:Om,inverseLerp:Bm,lerp:qr,damp:zm,pingpong:Hm,smoothstep:km,smootherstep:Gm,randInt:Vm,randFloat:Wm,randFloatSpread:Xm,seededRandom:qm,degToRad:Ym,radToDeg:Jm,isPowerOfTwo:Zm,ceilPowerOfTwo:Km,floorPowerOfTwo:$h,setQuaternionFromProperEuler:Qm,normalize:tu,denormalize:eu},ou=class ou{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ou.prototype.isVector2=!0;var ae=ou,ei=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],m=r[a+2],S=r[a+3];if(d!==S||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*S;p<0&&(u=-u,f=-f,m=-m,S=-S,p=-p);let g=1-o;if(p<.9995){let y=Math.acos(p),T=Math.sin(y);g=Math.sin(g*y)/T,o=Math.sin(o*y)/T,l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+S*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+S*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-o*f,e[t+2]=c*m+h*f+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lu=class lu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lu.prototype.isVector3=!0;var C=lu,Hc=new C,od=new ei,cu=class cu{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],S=s[0],p=s[3],g=s[6],y=s[1],T=s[4],v=s[7],R=s[2],w=s[5],x=s[8];return r[0]=a*S+o*y+l*R,r[3]=a*p+o*T+l*w,r[6]=a*g+o*v+l*x,r[1]=c*S+h*y+d*R,r[4]=c*p+h*T+d*w,r[7]=c*g+h*v+d*x,r[2]=u*S+f*y+m*R,r[5]=u*p+f*T+m*w,r[8]=u*g+f*v+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=t*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/m;return e[0]=d*S,e[1]=(s*c-h*i)*S,e[2]=(o*i-s*a)*S,e[3]=u*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(e,t)),this}rotate(e){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cu.prototype.isMatrix3=!0;var Ye=cu,kc=new Ye,ld=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jm(){let n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:e,whitePoint:i,transfer:Qr,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}var ht=jm();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ns,qo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ns===void 0&&(Ns=tr("canvas")),Ns.width=e.width,Ns.height=e.height;let s=Ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$m=0,sr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gc(s[a].image)):r.push(Gc(s[a]))}else r=Gc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var e0=0,Vc=new C,sn=class n extends $n{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=dn,a=Ii,o=qn,l=xn,c=n.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Di(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vo:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vo:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=zh;sn.DEFAULT_ANISOTROPY=1;var hu=class hu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],S=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,v=(f+1)/2,R=(g+1)/2,w=(h+u)/4,x=(d+S)/4,E=(m+p)/4;return T>v&&T>R?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=x/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=E/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=x/r,s=E/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(d-S)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hu.prototype.isVector4=!0;var Ct=hu,Yo=class extends $n{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new sr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Yo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},$r=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var vl=class vl{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,m,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,m,S,p)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,m,S,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=S,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,m=o*h,S=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,S=c*d;t[0]=u+S*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,S=c*d;t[0]=u-S*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,m=o*h,S=o*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+S,t[1]=l*d,t[5]=S*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,m=o*l,S=o*c;t[0]=l*h,t[4]=S-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-S*d}else if(e.order==="XZY"){let u=a*l,f=a*c,m=o*l,S=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+S,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,i){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Bi.crossVectors(i,vn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Bi.crossVectors(i,vn)),Bi.normalize(),io.crossVectors(vn,Bi),s[0]=Bi.x,s[4]=io.x,s[8]=vn.x,s[1]=Bi.y,s[5]=io.y,s[9]=vn.y,s[2]=Bi.z,s[6]=io.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],S=i[6],p=i[10],g=i[14],y=i[3],T=i[7],v=i[11],R=i[15],w=s[0],x=s[4],E=s[8],B=s[12],I=s[1],F=s[5],z=s[9],q=s[13],N=s[2],V=s[6],J=s[10],W=s[14],se=s[3],Y=s[7],te=s[11],ie=s[15];return r[0]=a*w+o*I+l*N+c*se,r[4]=a*x+o*F+l*V+c*Y,r[8]=a*E+o*z+l*J+c*te,r[12]=a*B+o*q+l*W+c*ie,r[1]=h*w+d*I+u*N+f*se,r[5]=h*x+d*F+u*V+f*Y,r[9]=h*E+d*z+u*J+f*te,r[13]=h*B+d*q+u*W+f*ie,r[2]=m*w+S*I+p*N+g*se,r[6]=m*x+S*F+p*V+g*Y,r[10]=m*E+S*z+p*J+g*te,r[14]=m*B+S*q+p*W+g*ie,r[3]=y*w+T*I+v*N+R*se,r[7]=y*x+T*F+v*V+R*Y,r[11]=y*E+T*z+v*J+R*te,r[15]=y*B+T*q+v*W+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],S=e[7],p=e[11],g=e[15],y=l*f-c*u,T=o*f-c*d,v=o*u-l*d,R=a*f-c*h,w=a*u-l*h,x=a*d-o*h;return t*(S*y-p*T+g*v)-i*(m*y-p*R+g*w)+s*(m*T-S*R+g*x)-r*(m*v-S*w+p*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],S=e[13],p=e[14],g=e[15],y=t*o-i*a,T=t*l-s*a,v=t*c-r*a,R=i*l-s*o,w=i*c-r*o,x=s*c-r*l,E=h*S-d*m,B=h*p-u*m,I=h*g-f*m,F=d*p-u*S,z=d*g-f*S,q=u*g-f*p,N=y*q-T*z+v*F+R*I-w*B+x*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/N;return e[0]=(o*q-l*z+c*F)*V,e[1]=(s*z-i*q-r*F)*V,e[2]=(S*x-p*w+g*R)*V,e[3]=(u*w-d*x-f*R)*V,e[4]=(l*I-a*q-c*B)*V,e[5]=(t*q-s*I+r*B)*V,e[6]=(p*v-m*x-g*T)*V,e[7]=(h*x-u*v+f*T)*V,e[8]=(a*z-o*I+c*E)*V,e[9]=(i*I-t*z-r*E)*V,e[10]=(m*w-S*v+g*y)*V,e[11]=(d*v-h*w-f*y)*V,e[12]=(o*B-a*F-l*E)*V,e[13]=(t*F-i*B+s*E)*V,e[14]=(S*T-m*R-p*y)*V,e[15]=(h*R-d*T+u*y)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,S=a*h,p=a*d,g=o*d,y=l*c,T=l*h,v=l*d,R=i.x,w=i.y,x=i.z;return s[0]=(1-(S+g))*R,s[1]=(f+v)*R,s[2]=(m-T)*R,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+g))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(m+T)*x,s[9]=(p-y)*x,s[10]=(1-(u+S))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);let c=1/a,h=1/o,d=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ln,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),m,S;if(l)m=r/(a-r),S=a*r/(a-r);else if(o===Ln)m=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===er)m=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),m,S;if(l)m=1/(a-r),S=a/(a-r);else if(o===Ln)m=-2/(a-r),S=-(a+r)/(a-r);else if(o===er)m=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};vl.prototype.isMatrix4=!0;var pt=vl,Us=new C,Bn=new pt,t0=new C(0,0,0),n0=new C(1,1,1),Bi=new C,io=new C,vn=new C,hd=new pt,ud=new ei,Ai=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},i0=0,dd=new C,Fs=new ei,yi=new pt,so=new C,Ur=new C,s0=new C,r0=new ei,fd=new C(1,0,0),pd=new C(0,1,0),md=new C(0,0,1),gd={type:"added"},a0={type:"removed"},Os={type:"childadded",child:null},Wc={type:"childremoved",child:null},kt=class n extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new Ai,i=new ei,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ye}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?so.copy(e):so.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ur,so,this.up):yi.lookAt(so,Ur,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(yi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gd),Os.child=e,this.dispatchEvent(Os),Os.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a0),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gd),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new C(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},o0={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let p=t.getJointPose(S,i),g=this._getHandJoint(c,S);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Xc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=jh(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xc(a,r,e+1/3),this.g=Xc(a,r,e),this.b=Xc(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let i=Pf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return ht.workingToColorSpace(tn.copy(this),e),Math.round(st(tn.r*255,0,255))*65536+Math.round(st(tn.g*255,0,255))*256+Math.round(st(tn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(tn.copy(this),t);let i=tn.r,s=tn.g,r=tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=nn){ht.workingToColorSpace(tn.copy(this),e);let t=tn.r,i=tn.g,s=tn.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ro);let i=qr(zi.h,ro.h,t),s=qr(zi.s,ro.s,t),r=qr(zi.l,ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Je;Je.NAMES=Pf;var or=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new C,vi=new C,qc=new C,Si=new C,Bs=new C,zs=new C,xd=new C,Yc=new C,Jc=new C,Zc=new C,Kc=new Ct,Qc=new Ct,jc=new Ct,Ei=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),vi.subVectors(i,t),qc.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(vi),l=zn.dot(qc),c=vi.dot(vi),h=vi.dot(qc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Kc.setScalar(0),Qc.setScalar(0),jc.setScalar(0),Kc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,i),jc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kc,r.x),a.addScaledVector(Qc,r.y),a.addScaledVector(jc,r.z),a}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),vi.subVectors(e,t),zn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),zn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Bs.subVectors(s,i),zs.subVectors(r,i),Yc.subVectors(e,i);let l=Bs.dot(Yc),c=zs.dot(Yc);if(l<=0&&c<=0)return t.copy(i);Jc.subVectors(e,s);let h=Bs.dot(Jc),d=zs.dot(Jc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Bs,a);Zc.subVectors(e,r);let f=Bs.dot(Zc),m=zs.dot(Zc);if(m>=0&&f<=m)return t.copy(r);let S=f*c-l*m;if(S<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(zs,o);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return xd.subVectors(r,s),o=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(xd,o);let g=1/(p+S+u);return a=S*g,o=u*g,t.copy(i).addScaledVector(Bs,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ti=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),oo.subVectors(this.max,Fr),Hs.subVectors(e.a,Fr),ks.subVectors(e.b,Fr),Gs.subVectors(e.c,Fr),Hi.subVectors(ks,Hs),ki.subVectors(Gs,ks),ds.subVectors(Hs,Gs);let t=[0,-Hi.z,Hi.y,0,-ki.z,ki.y,0,-ds.z,ds.y,Hi.z,0,-Hi.x,ki.z,0,-ki.x,ds.z,0,-ds.x,-Hi.y,Hi.x,0,-ki.y,ki.x,0,-ds.y,ds.x,0];return!$c(t,Hs,ks,Gs,oo)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,Hs,ks,Gs,oo))?!1:(lo.crossVectors(Hi,ki),t=[lo.x,lo.y,lo.z],$c(t,Hs,ks,Gs,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new C,new C,new C,new C,new C,new C,new C,new C],Hn=new C,ao=new ti,Hs=new C,ks=new C,Gs=new C,Hi=new C,ki=new C,ds=new C,Fr=new C,oo=new C,lo=new C,fs=new C;function $c(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){fs.fromArray(n,r);let o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=i.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ft=new C,co=new ae,l0=0,Yt=class extends $n{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?oc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):eu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tu(e,this.array)}};var ea=class extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ta=class extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}},c0=new ti,Or=new C,eh=new C,Vi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):c0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(eh)),this.expandByPoint(Or.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},h0=0,Pn=new pt,th=new kt,Vs=new C,Sn=new ti,Br=new ti,qt=new C,St=class n extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Sn.min,Br.min),Sn.expandByPoint(qt),qt.addVectors(Sn.max,Br.max),Sn.expandByPoint(qt)):(Sn.expandByPoint(Br.min),Sn.expandByPoint(Br.max))}Sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),qt.add(Vs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Yt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let B=0;B<i.count;B++)o[B]=new C,l[B]=new C;let h=new C,d=new C,u=new C,f=new ae,m=new ae,S=new ae,p=new C,g=new C;function y(B,I,F){c[B]=c[I]=c[F]=1,h.fromBufferAttribute(i,B),d.fromBufferAttribute(i,I),u.fromBufferAttribute(i,F),f.fromBufferAttribute(r,B),m.fromBufferAttribute(r,I),S.fromBufferAttribute(r,F),d.sub(h),u.sub(h),m.sub(f),S.sub(f);let z=1/(m.x*S.y-S.x*m.y);isFinite(z)&&(p.copy(d).multiplyScalar(S.y).addScaledVector(u,-m.y).multiplyScalar(z),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-S.x).multiplyScalar(z),o[B].add(p),o[I].add(p),o[F].add(p),l[B].add(g),l[I].add(g),l[F].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,I=T.length;B<I;++B){let F=T[B],z=F.start,q=F.count;for(let N=z,V=z+q;N<V;N+=3)y(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let v=new C,R=new C,w=new C,x=new C;function E(B){w.fromBufferAttribute(s,B),x.copy(w);let I=o[B];v.copy(I),v.sub(w.multiplyScalar(w.dot(I))).normalize(),R.crossVectors(x,I);let z=R.dot(l[B])<0?-1:1;a.setXYZW(B,v.x,v.y,v.z,z)}for(let B=0,I=i.count;B<I;++B)c[B]&&E(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),S=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Yt(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},na=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=_d(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=_d(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function _d(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Di()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var un=new C,lr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?oc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):eu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tu(e,this.data.array)}},nh=new C,u0=new C,d0=new Ye,Mn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=nh.subVectors(i,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||d0.getNormalMatrix(e),s=this.coplanarPoint(nh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},f0=0,kn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Sr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ih,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Mn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cr=class extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ws,zr=new C,Xs=new C,qs=new C,Ys=new ae,Hr=new ae,Lf=new pt,ho=new C,kr=new C,uo=new C,yd=new ae,ih=new ae,vd=new ae,ia=class extends kt{constructor(e=new cr){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new St;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new na(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new lr(i,3,0,!1)),Ws.setAttribute("uv",new lr(i,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;fo(ho.set(-.5,-.5,0),qs,a,Xs,s,r),fo(kr.set(.5,-.5,0),qs,a,Xs,s,r),fo(uo.set(.5,.5,0),qs,a,Xs,s,r),yd.set(0,0),ih.set(1,0),vd.set(1,1);let o=e.ray.intersectTriangle(ho,kr,uo,!1,zr);if(o===null&&(fo(kr.set(-.5,.5,0),qs,a,Xs,s,r),ih.set(0,1),o=e.ray.intersectTriangle(ho,uo,kr,!1,zr),o===null))return;let l=e.ray.origin.distanceTo(zr);l<e.near||l>e.far||t.push({distance:l,point:zr.clone(),uv:Ei.getInterpolation(zr,ho,kr,uo,yd,ih,vd,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function fo(n,e,t,i,s,r){Ys.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Hr.x=r*Ys.x-s*Ys.y,Hr.y=s*Ys.x+r*Ys.y):Hr.copy(Ys),n.copy(e),n.x+=Hr.x,n.y+=Hr.y,n.applyMatrix4(Lf)}var bi=new C,sh=new C,po=new C,mo=new C,gs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){sh.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(sh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(po),o=mo.dot(this.direction),l=-mo.dot(po),c=mo.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sh).addScaledVector(po,u),f}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);let i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,m=t.x-a.x,S=t.y-a.y,p=t.z-a.z,g=i.x-a.x,y=i.y-a.y,T=i.z-a.z,v=Math.abs(l),R=Math.abs(c),w=Math.abs(h),x,E,B,I,F,z,q,N,V,J,W,se;if(v>=R&&v>=w?(B=l,z=d,V=m,se=g,l>=0?(x=c,E=h,I=u,F=f,q=S,N=p,J=y,W=T):(x=h,E=c,I=f,F=u,q=p,N=S,J=T,W=y)):R>=w?(B=c,z=u,V=S,se=y,c>=0?(x=h,E=l,I=f,F=d,q=p,N=m,J=T,W=g):(x=l,E=h,I=d,F=f,q=m,N=p,J=g,W=T)):(B=h,z=f,V=p,se=T,h>=0?(x=l,E=c,I=d,F=u,q=m,N=S,J=g,W=y):(x=c,E=l,I=u,F=d,q=S,N=m,J=y,W=g)),B===0)return null;let Y=x/B,te=E/B,ie=1/B,Ae=I-Y*z,Ve=F-te*z,K=q-Y*V,Se=N-te*V,Re=J-Y*se,ze=W-te*se,Me=Re*Se-ze*K,He=Ae*ze-Ve*Re,Et=K*Ve-Se*Ae;if(s){if(Me<0||He<0||Et<0)return null}else if((Me<0||He<0||Et<0)&&(Me>0||He>0||Et>0))return null;let We=Me+He+Et;if(We===0)return null;let tt=ie*(Me*z+He*V+Et*se);return(We>0?tt<0:tt>0)?null:this.at(tt/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sd=new pt,ps=new gs,go=new Vi,Md=new C,xo=new C,_o=new C,yo=new C,rh=new C,vo=new C,bd=new C,So=new C,wt=class extends kt{constructor(e=new St,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(rh.fromBufferAttribute(d,e),a?vo.addScaledVector(rh,h):vo.addScaledVector(rh.sub(t),h))}t.add(vo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(go.containsPoint(ps.origin)===!1&&(ps.intersectSphere(go,Md)===null||ps.origin.distanceToSquared(Md)>(e.far-e.near)**2))&&(Sd.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Sd),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,S=u.length;m<S;m++){let p=u[m],g=a[p.materialIndex],y=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,R=T;v<R;v+=3){let w=o.getX(v),x=o.getX(v+1),E=o.getX(v+2);s=Mo(this,g,e,i,c,h,d,w,x,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let p=m,g=S;p<g;p+=3){let y=o.getX(p),T=o.getX(p+1),v=o.getX(p+2);s=Mo(this,a,e,i,c,h,d,y,T,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,S=u.length;m<S;m++){let p=u[m],g=a[p.materialIndex],y=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,R=T;v<R;v+=3){let w=v,x=v+1,E=v+2;s=Mo(this,g,e,i,c,h,d,w,x,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let p=m,g=S;p<g;p+=3){let y=p,T=p+1,v=p+2;s=Mo(this,a,e,i,c,h,d,y,T,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function p0(n,e,t,i,s,r,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===$i,o),l===null)return null;So.copy(o),So.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:n}}function Mo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,xo),n.getVertexPosition(l,_o),n.getVertexPosition(c,yo);let h=p0(n,e,t,i,xo,_o,yo,bd);if(h){let d=new C;Ei.getBarycoord(bd,xo,_o,yo,d),s&&(h.uv=Ei.getInterpolatedAttribute(s,o,l,c,d,new ae)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,l,c,d,new ae)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Ei.getNormal(xo,_o,yo,u.normal),h.face=u,h.barycoord=d}return h}var Zo=class extends sn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Jt,h=Jt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ms=new Vi,m0=new ae(.5,.5),bo=new C,Wi=class{constructor(e=new Mn,t=new Mn,i=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],S=r[9],p=r[10],g=r[11],y=r[12],T=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,g-m,R-y).normalize(),s[1].setComponents(c+a,f+h,g+m,R+y).normalize(),s[2].setComponents(c+o,f+d,g+S,R+T).normalize(),s[3].setComponents(c-o,f-d,g-S,R-T).normalize(),i)s[4].setComponents(l,u,p,v).normalize(),s[5].setComponents(c-l,f-u,g-p,R-v).normalize();else if(s[4].setComponents(c-l,f-u,g-p,R-v).normalize(),t===Ln)s[5].setComponents(c+l,f+u,g+p,R+v).normalize();else if(t===er)s[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=m0.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ed=new pt,Ko=class n{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ed.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Wi),i[s].setFromProjectionMatrix(Ed,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Wi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var hr=class extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qo=new C,jo=new C,Td=new pt,Gr=new gs,Eo=new Vi,ah=new C,wd=new C,$o=class extends kt{constructor(e=new St,t=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),jo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Qo.distanceTo(jo);e.setAttribute("lineDistance",new nt(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Td.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(Td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let S=f,p=m-1;S<p;S+=c){let g=h.getX(S),y=h.getX(S+1),T=To(this,e,Gr,l,g,y,S);T&&t.push(T)}if(this.isLineLoop){let S=h.getX(m-1),p=h.getX(f),g=To(this,e,Gr,l,S,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let S=f,p=m-1;S<p;S+=c){let g=To(this,e,Gr,l,S,S+1,S);g&&t.push(g)}if(this.isLineLoop){let S=To(this,e,Gr,l,m-1,f,m-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function To(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Qo.fromBufferAttribute(o,s),jo.fromBufferAttribute(o,r),t.distanceSqToSegment(Qo,jo,ah,wd)>i)return;ah.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ah);if(!(c<e.near||c>e.far))return{distance:c,point:wd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ad=new C,Rd=new C,sa=class extends $o{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Ad.fromBufferAttribute(t,s),Rd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ad.distanceTo(Rd);e.setAttribute("lineDistance",new nt(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ri=class extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cd=new pt,mh=new gs,wo=new Vi,Ao=new C,Xi=class extends kt{constructor(e=new St,t=new Ri){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Cd.copy(s).invert(),mh.copy(e.ray).applyMatrix4(Cd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,S=f;m<S;m++){let p=c.getX(m);Ao.fromBufferAttribute(d,p),Id(Ao,p,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,S=f;m<S;m++)Ao.fromBufferAttribute(d,m),Id(Ao,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Id(n,e,t,i,s,r,a){let o=mh.distanceSqToPoint(n);if(o<t){let l=new C;mh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ra=class extends sn{constructor(e=[],t=bs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qi=class extends sn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends sn{constructor(e,t,i=Vn,s,r,a,o=Jt,l=Jt,c,h=wi,d=1){if(h!==wi&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},aa=class extends Ci{constructor(e,t=Vn,i=bs,s,r,a=Jt,o=Jt,l,c=wi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oa=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yi=class n extends St{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function m(S,p,g,y,T,v,R,w,x,E,B){let I=v/x,F=R/E,z=v/2,q=R/2,N=w/2,V=x+1,J=E+1,W=0,se=0,Y=new C;for(let te=0;te<J;te++){let ie=te*F-q;for(let Ae=0;Ae<V;Ae++){let Ve=Ae*I-z;Y[S]=Ve*y,Y[p]=ie*T,Y[g]=N,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[p]=0,Y[g]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ae/x),d.push(1-te/E),W+=1}}for(let te=0;te<E;te++)for(let ie=0;ie<x;ie++){let Ae=u+ie+V*te,Ve=u+ie+V*(te+1),K=u+(ie+1)+V*(te+1),Se=u+(ie+1)+V*te;l.push(Ae,Ve,Se),l.push(Ve,K,Se),se+=6}o.addGroup(f,se,B),f+=se,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var la=class n extends St{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ni=class n extends St{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,S=[],p=i/2,g=0;y(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function y(){let v=new C,R=new C,w=0,x=(t-e)/i;for(let E=0;E<=r;E++){let B=[],I=E/r,F=I*(t-e)+e;for(let z=0;z<=s;z++){let q=z/s,N=q*l+o,V=Math.sin(N),J=Math.cos(N);R.x=F*V,R.y=-I*i+p,R.z=F*J,d.push(R.x,R.y,R.z),v.set(V,x,J).normalize(),u.push(v.x,v.y,v.z),f.push(q,1-I),B.push(m++)}S.push(B)}for(let E=0;E<s;E++)for(let B=0;B<r;B++){let I=S[B][E],F=S[B+1][E],z=S[B+1][E+1],q=S[B][E+1];(e>0||B!==0)&&(h.push(I,F,q),w+=3),(t>0||B!==r-1)&&(h.push(F,z,q),w+=3)}c.addGroup(g,w,0),g+=w}function T(v){let R=m,w=new ae,x=new C,E=0,B=v===!0?e:t,I=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,p*I,0),u.push(0,I,0),f.push(.5,.5),m++;let F=m;for(let z=0;z<=s;z++){let N=z/s*l+o,V=Math.cos(N),J=Math.sin(N);x.x=B*J,x.y=p*I,x.z=B*V,d.push(x.x,x.y,x.z),u.push(0,I,0),w.x=V*.5+.5,w.y=J*.5*I+.5,f.push(w.x,w.y),m++}for(let z=0;z<s;z++){let q=R+z,N=F+z;v===!0?h.push(N,N+1,q):h.push(N+1,N,q),E+=3}c.addGroup(g,E,v===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ii=class n extends ni{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},el=class n extends St{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new C,v=new C,R=new C;for(let w=0;w<t.length;w+=3)f(t[w+0],T),f(t[w+1],v),f(t[w+2],R),l(T,v,R,y)}function l(y,T,v,R){let w=R+1,x=[];for(let E=0;E<=w;E++){x[E]=[];let B=y.clone().lerp(v,E/w),I=T.clone().lerp(v,E/w),F=w-E;for(let z=0;z<=F;z++)z===0&&E===w?x[E][z]=B:x[E][z]=B.clone().lerp(I,z/F)}for(let E=0;E<w;E++)for(let B=0;B<2*(w-E)-1;B++){let I=Math.floor(B/2);B%2===0?(u(x[E][I+1]),u(x[E+1][I]),u(x[E][I])):(u(x[E][I+1]),u(x[E+1][I+1]),u(x[E+1][I]))}}function c(y){let T=new C;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(y),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let y=new C;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let v=p(y)/2/Math.PI+.5,R=g(y)/Math.PI+.5;a.push(v,1-R)}m(),d()}function d(){for(let y=0;y<a.length;y+=6){let T=a[y+0],v=a[y+2],R=a[y+4],w=Math.max(T,v,R),x=Math.min(T,v,R);w>.9&&x<.1&&(T<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,T){let v=y*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function m(){let y=new C,T=new C,v=new C,R=new C,w=new ae,x=new ae,E=new ae;for(let B=0,I=0;B<r.length;B+=9,I+=6){y.set(r[B+0],r[B+1],r[B+2]),T.set(r[B+3],r[B+4],r[B+5]),v.set(r[B+6],r[B+7],r[B+8]),w.set(a[I+0],a[I+1]),x.set(a[I+2],a[I+3]),E.set(a[I+4],a[I+5]),R.copy(y).add(T).add(v).divideScalar(3);let F=p(R);S(w,I+0,y,F),S(x,I+2,T,F),S(E,I+4,v,F)}}function S(y,T,v,R){R<0&&y.x===1&&(a[T]=y.x-1),v.x===0&&v.z===0&&(a[T]=R/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new pt;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ur=class extends En{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tl=class extends ur{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Pd=new C,Ld=new C,oh=new nu,lh=new nu,ch=new nu,dr=class extends En{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ld.subVectors(s[0],s[1]).add(s[0]),c=Ld);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),m<1e-4&&(m=S),p<1e-4&&(p=S),oh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,S,p),lh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,S,p),ch.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,S,p)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),lh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ch.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(oh.calc(l),lh.calc(l),ch.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function g0(n,e){let t=1-n;return t*t*e}function x0(n,e){return 2*(1-n)*n*e}function _0(n,e){return n*n*e}function Yr(n,e,t,i){return g0(n,e)+x0(n,t)+_0(n,i)}function y0(n,e){let t=1-n;return t*t*t*e}function v0(n,e){let t=1-n;return 3*t*t*n*e}function S0(n,e){return 3*(1-n)*n*n*e}function M0(n,e){return n*n*n*e}function Jr(n,e,t,i,s){return y0(n,e)+v0(n,t)+S0(n,i)+M0(n,s)}var ca=class extends En{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Jr(e,s.x,r.x,a.x,o.x),Jr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends En{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Jr(e,s.x,r.x,a.x,o.x),Jr(e,s.y,r.y,a.y,o.y),Jr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends En{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends En{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends En{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Yr(e,s.x,r.x,a.x),Yr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends En{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Yr(e,s.x,r.x,a.x),Yr(e,s.y,r.y,a.y),Yr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Dd(o,l.x,c.x,h.x,d.x),Dd(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},gh=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:dr,CubicBezierCurve:ca,CubicBezierCurve3:nl,EllipseCurve:ur,LineCurve:ha,LineCurve3:il,QuadraticBezierCurve:ua,QuadraticBezierCurve3:sl,SplineCurve:da}),rl=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new gh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},fa=class extends rl{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ha(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ua(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ca(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new da(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new ur(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ji=class extends fa{constructor(e){super(e),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new fa().fromJSON(s))}return this}};function b0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Df(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=R0(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=n[u],m=n[u+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return pa(r,a,t,o,l,c,0),a}function Df(n,e,t,i,s){let r;if(s===z0(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Nd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Nd(a/i|0,n[a],n[a+1],r);return r&&fr(r,r.next)&&(ga(r),r=r.next),r}function xs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(ga(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function pa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&D0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?T0(n,i,s,r):E0(n)){e.push(l.i,n.i,c.i),ga(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=w0(xs(n),e),pa(n,e,t,i,s,r,2)):a===2&&A0(n,e,t,i,s,r):pa(xs(n),e,t,i,s,r,1);break}}}function E0(n){let e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Vr(s,o,r,l,a,c,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function T0(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Pt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),m=Math.min(h,d,u),S=Math.max(o,l,c),p=Math.max(h,d,u),g=xh(f,m,e,t,i),y=xh(S,p,e,t,i),T=n.prevZ,v=n.nextZ;for(;T&&T.z>=g&&v&&v.z<=y;){if(T.x>=f&&T.x<=S&&T.y>=m&&T.y<=p&&T!==s&&T!==a&&Vr(o,h,l,d,c,u,T.x,T.y)&&Pt(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=S&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Vr(o,h,l,d,c,u,v.x,v.y)&&Pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=g;){if(T.x>=f&&T.x<=S&&T.y>=m&&T.y<=p&&T!==s&&T!==a&&Vr(o,h,l,d,c,u,T.x,T.y)&&Pt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=S&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Vr(o,h,l,d,c,u,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function w0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!fr(i,s)&&Uf(i,t,t.next,s)&&ma(i,s)&&ma(s,i)&&(e.push(i.i,t.i,s.i),ga(t),ga(t.next),t=n=s),t=t.next}while(t!==n);return xs(t)}function A0(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&F0(a,o)){let l=Ff(a,o);a=xs(a,a.next),l=xs(l,l.next),pa(a,e,t,i,s,r,0),pa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function R0(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Df(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(U0(c))}s.sort(C0);for(let r=0;r<s.length;r++)t=I0(s[r],t);return t}function C0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function I0(n,e){let t=P0(n,e);if(!t)return e;let i=Ff(t,n);return xs(i,i.next),xs(t,t.next)}function P0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(fr(n,t))return t;do{if(fr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Nf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ma(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&L0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function L0(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function D0(n,e,t,i){let s=n;do s.z===0&&(s.z=xh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,N0(s)}function N0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function xh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function U0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Nf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Vr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Nf(n,e,t,i,s,r,a,o)}function F0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!O0(n,e)&&(ma(n,e)&&ma(e,n)&&B0(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||fr(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fr(n,e){return n.x===e.x&&n.y===e.y}function Uf(n,e,t,i){let s=Co(Pt(n,e,t)),r=Co(Pt(n,e,i)),a=Co(Pt(t,i,n)),o=Co(Pt(t,i,e));return!!(s!==r&&a!==o||s===0&&Ro(n,t,e)||r===0&&Ro(n,i,e)||a===0&&Ro(t,n,i)||o===0&&Ro(t,e,i))}function Ro(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Co(n){return n>0?1:n<0?-1:0}function O0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Uf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ma(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function B0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ff(n,e){let t=_h(n.i,n.x,n.y),i=_h(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Nd(n,e,t,i){let s=_h(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ga(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _h(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z0(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var yh=class{static triangulate(e,t,i=2){return b0(e,t,i)}},jn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ud(e),Fd(i,e);let a=e.length;t.forEach(Ud);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Fd(i,t[l]);let o=yh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ud(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var pr=class n extends St{constructor(e=new Ji([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:H0,T,v=!1,R,w,x,E;if(g){T=g.getSpacedPoints(h),v=!0,u=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;R=g.computeFrenetFrames(h,ne),w=new C,x=new C,E=new C}u||(p=0,f=0,m=0,S=0);let B=o.extractPoints(c),I=B.shape,F=B.holes;if(!jn.isClockWise(I)){I=I.reverse();for(let ne=0,fe=F.length;ne<fe;ne++){let he=F[ne];jn.isClockWise(he)&&(F[ne]=he.reverse())}}function q(ne){let he=10000000000000001e-36,we=ne[0];for(let ve=1;ve<=ne.length;ve++){let Ke=ve%ne.length,Ue=ne[Ke],at=Ue.x-we.x,ot=Ue.y-we.y,ft=at*at+ot*ot,O=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(we.x),Math.abs(we.y)),Nt=he*O*O;if(ft<=Nt){ne.splice(Ke,1),ve--;continue}we=Ue}}q(I),F.forEach(q);let N=F.length,V=I;for(let ne=0;ne<N;ne++){let fe=F[ne];I=I.concat(fe)}function J(ne,fe,he){return fe||Xe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(fe,he)}let W=I.length;function se(ne,fe,he){let we,ve,Ke,Ue=ne.x-fe.x,at=ne.y-fe.y,ot=he.x-ne.x,ft=he.y-ne.y,O=Ue*Ue+at*at,Nt=Ue*ft-at*ot;if(Math.abs(Nt)>Number.EPSILON){let it=Math.sqrt(O),yt=Math.sqrt(ot*ot+ft*ft),xe=fe.x-at/it,Dt=fe.y+Ue/it,ke=he.x-ft/yt,qe=he.y+ot/yt,A=((ke-xe)*ft-(qe-Dt)*ot)/(Ue*ft-at*ot);we=xe+Ue*A-ne.x,ve=Dt+at*A-ne.y;let _=we*we+ve*ve;if(_<=2)return new ae(we,ve);Ke=Math.sqrt(_/2)}else{let it=!1;Ue>Number.EPSILON?ot>Number.EPSILON&&(it=!0):Ue<-Number.EPSILON?ot<-Number.EPSILON&&(it=!0):Math.sign(at)===Math.sign(ft)&&(it=!0),it?(we=-at,ve=Ue,Ke=Math.sqrt(O)):(we=Ue,ve=at,Ke=Math.sqrt(O/2))}return new ae(we/Ke,ve/Ke)}let Y=[];for(let ne=0,fe=V.length,he=fe-1,we=ne+1;ne<fe;ne++,he++,we++)he===fe&&(he=0),we===fe&&(we=0),Y[ne]=se(V[ne],V[he],V[we]);let te=[],ie,Ae=Y.concat();for(let ne=0,fe=N;ne<fe;ne++){let he=F[ne];ie=[];for(let we=0,ve=he.length,Ke=ve-1,Ue=we+1;we<ve;we++,Ke++,Ue++)Ke===ve&&(Ke=0),Ue===ve&&(Ue=0),ie[we]=se(he[we],he[Ke],he[Ue]);te.push(ie),Ae=Ae.concat(ie)}let Ve;if(p===0)Ve=jn.triangulateShape(V,F);else{let ne=[],fe=[];for(let he=0;he<p;he++){let we=he/p,ve=f*Math.cos(we*Math.PI/2),Ke=m*Math.sin(we*Math.PI/2)+S;for(let Ue=0,at=V.length;Ue<at;Ue++){let ot=J(V[Ue],Y[Ue],Ke);He(ot.x,ot.y,-ve),we===0&&ne.push(ot)}for(let Ue=0,at=N;Ue<at;Ue++){let ot=F[Ue];ie=te[Ue];let ft=[];for(let O=0,Nt=ot.length;O<Nt;O++){let it=J(ot[O],ie[O],Ke);He(it.x,it.y,-ve),we===0&&ft.push(it)}we===0&&fe.push(ft)}}Ve=jn.triangulateShape(ne,fe)}let K=Ve.length,Se=m+S;for(let ne=0;ne<W;ne++){let fe=u?J(I[ne],Ae[ne],Se):I[ne];v?(x.copy(R.normals[0]).multiplyScalar(fe.x),w.copy(R.binormals[0]).multiplyScalar(fe.y),E.copy(T[0]).add(x).add(w),He(E.x,E.y,E.z)):He(fe.x,fe.y,0)}for(let ne=1;ne<=h;ne++)for(let fe=0;fe<W;fe++){let he=u?J(I[fe],Ae[fe],Se):I[fe];v?(x.copy(R.normals[ne]).multiplyScalar(he.x),w.copy(R.binormals[ne]).multiplyScalar(he.y),E.copy(T[ne]).add(x).add(w),He(E.x,E.y,E.z)):He(he.x,he.y,d/h*ne)}for(let ne=p-1;ne>=0;ne--){let fe=ne/p,he=f*Math.cos(fe*Math.PI/2),we=m*Math.sin(fe*Math.PI/2)+S;for(let ve=0,Ke=V.length;ve<Ke;ve++){let Ue=J(V[ve],Y[ve],we);He(Ue.x,Ue.y,d+he)}for(let ve=0,Ke=F.length;ve<Ke;ve++){let Ue=F[ve];ie=te[ve];for(let at=0,ot=Ue.length;at<ot;at++){let ft=J(Ue[at],ie[at],we);v?He(ft.x,ft.y+T[h-1].y,T[h-1].x+he):He(ft.x,ft.y,d+he)}}}Re(),ze();function Re(){let ne=s.length/3;if(u){let fe=0,he=W*fe;for(let we=0;we<K;we++){let ve=Ve[we];Et(ve[2]+he,ve[1]+he,ve[0]+he)}fe=h+p*2,he=W*fe;for(let we=0;we<K;we++){let ve=Ve[we];Et(ve[0]+he,ve[1]+he,ve[2]+he)}}else{for(let fe=0;fe<K;fe++){let he=Ve[fe];Et(he[2],he[1],he[0])}for(let fe=0;fe<K;fe++){let he=Ve[fe];Et(he[0]+W*h,he[1]+W*h,he[2]+W*h)}}i.addGroup(ne,s.length/3-ne,0)}function ze(){let ne=s.length/3,fe=0;Me(V,fe),fe+=V.length;for(let he=0,we=F.length;he<we;he++){let ve=F[he];Me(ve,fe),fe+=ve.length}i.addGroup(ne,s.length/3-ne,1)}function Me(ne,fe){let he=ne.length;for(;--he>=0;){let we=he,ve=he-1;ve<0&&(ve=ne.length-1);for(let Ke=0,Ue=h+p*2;Ke<Ue;Ke++){let at=W*Ke,ot=W*(Ke+1),ft=fe+we+at,O=fe+ve+at,Nt=fe+ve+ot,it=fe+we+ot;We(ft,O,Nt,it)}}}function He(ne,fe,he){l.push(ne),l.push(fe),l.push(he)}function Et(ne,fe,he){tt(ne),tt(fe),tt(he);let we=s.length/3,ve=y.generateTopUV(i,s,we-3,we-2,we-1);rt(ve[0]),rt(ve[1]),rt(ve[2])}function We(ne,fe,he,we){tt(ne),tt(fe),tt(we),tt(fe),tt(he),tt(we);let ve=s.length/3,Ke=y.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);rt(Ke[0]),rt(Ke[1]),rt(Ke[3]),rt(Ke[1]),rt(Ke[2]),rt(Ke[3])}function tt(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function rt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return k0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gh[s.type]().fromJSON(s)),new n(i,e.options)}},H0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],S=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-d),new ae(u,1-m),new ae(S,1-g)]:[new ae(o,1-l),new ae(h,1-d),new ae(f,1-m),new ae(p,1-g)]}};function k0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var _s=class n extends el{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var si=class n extends St{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],m=[],S=[],p=[];for(let g=0;g<h;g++){let y=g*u-a;for(let T=0;T<c;T++){let v=T*d-r;m.push(v,-y,0),S.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let T=y+c*g,v=y+c*(g+1),R=y+1+c*(g+1),w=y+1+c*g;f.push(T,v,w),f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(S,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var xa=class n extends St{constructor(e=new Ji([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,m=u.holes;jn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let y=m[p];jn.isClockWise(y)===!0&&(m[p]=y.reverse())}let S=jn.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let y=m[p];f=f.concat(y)}for(let p=0,g=f.length;p<g;p++){let y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,g=S.length;p<g;p++){let y=S[p],T=y[0]+d,v=y[1]+d,R=y[2]+d;i.push(T,v,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return G0(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function G0(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var mr=class n extends St{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,u=new C,f=[],m=[],S=[],p=[];for(let g=0;g<=i;g++){let y=[],T=g/i,v=a+T*o,R=e*Math.cos(v),w=Math.sqrt(e*e-R*R),x=0;g===0&&a===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let B=E/t,I=s+B*r;d.x=-w*Math.cos(I),d.y=R,d.z=w*Math.sin(I),m.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),p.push(B+x,1-T),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let T=h[g][y+1],v=h[g][y],R=h[g+1][y],w=h[g+1][y+1];(g!==0||a>0)&&f.push(T,v,w),(g!==i-1||l<Math.PI)&&f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(S,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ri=class n extends St{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,m=new C;for(let S=0;S<=i;S++){let p=a+S/i*o;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(g/s),d.push(S/i)}}for(let S=1;S<=i;S++)for(let p=1;p<=s;p++){let g=(s+1)*S+p-1,y=(s+1)*(S-1)+p-1,T=(s+1)*(S-1)+p,v=(s+1)*S+p;l.push(g,y,v),l.push(y,T,v)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},_a=class n extends St{constructor(e=1,t=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],h=[],d=new C,u=new C,f=new C,m=new C,S=new C,p=new C,g=new C;for(let T=0;T<=i;++T){let v=T/i*r*Math.PI*2;y(v,r,a,e,f),y(v+.01,r,a,e,m),p.subVectors(m,f),g.addVectors(m,f),S.crossVectors(p,g),g.crossVectors(S,p),S.normalize(),g.normalize();for(let R=0;R<=s;++R){let w=R/s*Math.PI*2,x=-t*Math.cos(w),E=t*Math.sin(w);d.x=f.x+(x*g.x+E*S.x),d.y=f.y+(x*g.y+E*S.y),d.z=f.z+(x*g.z+E*S.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(T/i),h.push(R/s)}}for(let T=1;T<=i;T++)for(let v=1;v<=s;v++){let R=(s+1)*(T-1)+(v-1),w=(s+1)*T+(v-1),x=(s+1)*T+v,E=(s+1)*(T-1)+v;o.push(R,w,E),o.push(w,x,E)}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2));function y(T,v,R,w,x){let E=Math.cos(T),B=Math.sin(T),I=R/v*T,F=Math.cos(I);x.x=w*(2+F)*.5*E,x.y=w*(2+F)*B*.5,x.z=w*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};var ya=class extends St{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new C,r=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let m=u,S=u+f;m<S;m+=3)for(let p=0;p<3;p++){let g=o.getX(m+p),y=o.getX(m+(p+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,y),Od(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Od(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new nt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Od(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}function Ts(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Bd(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Bd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function rn(n){let e={};for(let t=0;t<n.length;t++){let i=Ts(n[t]);for(let s in i)e[s]=i[s]}return e}function Bd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function V0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Of={clone:Ts,merge:rn},W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=V0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},al=class extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zi=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ol=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Js(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Io(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fh:r=e,o=2*t-i;break;case ph:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:a=e,l=2*i-t;break;case ph:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),S=m*m,p=S*m,g=-u*p+2*u*S-u*m,y=(1+u)*p+(-1.5-2*u)*S+(-.5+u)*m+1,T=(-1-f)*p+(1.5+f)*S+.5*m,v=f*p-f*S;for(let R=0;R!==o;++R)r[R]=g*a[h+R]+y*a[c+R]+T*a[l+R]+v*a[d+R];return r}},hl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ul=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dl=class extends Ki{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-t)/(s-t),S=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*S+a[l+p]*m;return r}let u=o*2,f=e-1;for(let m=0;m!==o;++m){let S=a[c+m],p=a[l+m],g=f*u+m*2,y=d[g],T=d[g+1],v=e*u+m*2,R=h[v],w=h[v+1],x=Y0(i,t,y,R,s);r[m]=Bf(x,S,T,w,p)}return r}};function Bf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function q0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Y0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Bf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=q0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Io(e.settings)&&(i.settings={inTangents:Js(e.settings.inTangents,Array),outTangents:Js(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Xo:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break;case uh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Io(this.settings)&&(zd(this.settings.inTangents,e),zd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Io(this.settings)&&(Hd(this.settings.inTangents,e),Hd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Fm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Do,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let S=t[d+m];if(S!==t[u+m]||S!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Io(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Hd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Xo;var Qi=class extends Tn{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Zr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Tn{constructor(e,t,i,s){super(e,t,i,s)}};fl.prototype.ValueTypeName="color";var pl=class extends Tn{constructor(e,t,i,s){super(e,t,i,s)}};pl.prototype.ValueTypeName="number";var ml=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ei.slerpFlat(r,0,a,c-o,a,c,l);return r}},va=class extends Tn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Tn{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Zr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Tn{constructor(e,t,i,s){super(e,t,i,s)}};gl.prototype.ValueTypeName="vector";var Uo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(kd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!kd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function kd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var xl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zf=new xl,gr=class{constructor(e){this.manager=e!==void 0?e:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=new WeakMap,_l=class extends gr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Uo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Zs.get(a);d===void 0&&(d=[],Zs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=tr("img");function l(){h(),t&&t(this);let d=Zs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Zs.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Uo.remove(`image:${e}`);let u=Zs.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}Zs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Uo.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Sa=class extends gr{constructor(e){super(e)}load(e,t,i,s){let r=new sn,a=new _l(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},xr=class extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ma=class extends xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hh=new pt,Gd=new C,Vd=new C,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gd),Vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===er||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Po=new C,Lo=new ei,Kn=new C,Ea=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Po,Lo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Lo,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Po,Lo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Lo,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new C,Wd=new ae,Xd=new ae,gn=class extends Ea{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,Xd),t.subVectors(Xd,Wd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var vh=class extends ba{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},_r=class extends xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ys=class extends Ea{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sh=class extends ba{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ks=-90,Qs=1,yr=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Ks,Qs,e,t);s.layers=this.layers,this.add(s);let r=new gn(Ks,Qs,e,t);r.layers=this.layers,this.add(r);let a=new gn(Ks,Qs,e,t);a.layers=this.layers,this.add(a);let o=new gn(Ks,Qs,e,t);o.layers=this.layers,this.add(o);let l=new gn(Ks,Qs,e,t);l.layers=this.layers,this.add(l);let c=new gn(Ks,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},yl=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var su="\\[\\]\\.:\\/",J0=new RegExp("["+su+"]","g"),ru="[^"+su+"]",Z0="[^"+su.replace("\\.","")+"]",K0=/((?:WC+[\/:])*)/.source.replace("WC",ru),Q0=/(WCOD+)?/.source.replace("WCOD",Z0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),$0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),eg=new RegExp("^"+K0+Q0+j0+$0+"$"),tg=["material","materials","bones","map"],Mh=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(e){let t=eg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);tg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Mh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kS=new Float32Array(1);var qd=new pt,wa=class{constructor(e,t,i=0,s=1/0){this.ray=new gs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qd),this}intersectObject(e,t=!0,i=[]){return bh(e,this,i,t),i.sort(Yd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)bh(e[s],this,i,t);return i.sort(Yd),i}};function Yd(n,e){return n.distance-e.distance}function bh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)bh(r[a],e,t,!0)}}var uu=class uu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};uu.prototype.isMatrix2=!0;var Eh=uu;function au(n,e,t,i){let s=ng(i);switch(t){case Wh:return n*e;case qh:return n*e/s.components*s.byteLength;case Al:return n*e/s.components*s.byteLength;case es:return n*e*2/s.components*s.byteLength;case Rl:return n*e*2/s.components*s.byteLength;case Xh:return n*e*3/s.components*s.byteLength;case qn:return n*e*4/s.components*s.byteLength;case Cl:return n*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Dl:return Math.max(n,16)*Math.max(e,8)/4;case Il:case Ll:return Math.max(n,8)*Math.max(e,8)/2;case Nl:case Ul:case Ol:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:case La:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ic:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Da:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(n){switch(n){case xn:case Hh:return{byteLength:1,components:1};case br:case kh:case Xn:return{byteLength:2,components:1};case Tl:case wl:return{byteLength:2,components:4};case Vn:case El:case Wn:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function op(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lg(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],S=d[f];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let S=d[f];n.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ax=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_x=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Px=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:cg,alphahash_pars_fragment:hg,alphamap_fragment:ug,alphamap_pars_fragment:dg,alphatest_fragment:fg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:gg,batching_pars_vertex:xg,batching_vertex:_g,begin_vertex:yg,beginnormal_vertex:vg,bsdfs:Sg,iridescence_fragment:Mg,bumpmap_pars_fragment:bg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Ag,color_fragment:Rg,color_pars_fragment:Cg,color_pars_vertex:Ig,color_vertex:Pg,common:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Ng,displacementmap_vertex:Ug,emissivemap_fragment:Fg,emissivemap_pars_fragment:Og,colorspace_fragment:Bg,colorspace_pars_fragment:zg,envmap_fragment:Hg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Gg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:ex,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:qg,fog_fragment:Yg,fog_pars_fragment:Jg,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:jg,lights_pars_begin:$g,lights_toon_fragment:tx,lights_toon_pars_fragment:nx,lights_phong_fragment:ix,lights_phong_pars_fragment:sx,lights_physical_fragment:rx,lights_physical_pars_fragment:ax,lights_fragment_begin:ox,lights_fragment_maps:lx,lights_fragment_end:cx,lightprobes_pars_fragment:hx,logdepthbuf_fragment:ux,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:fx,logdepthbuf_vertex:px,map_fragment:mx,map_pars_fragment:gx,map_particle_fragment:xx,map_particle_pars_fragment:_x,metalnessmap_fragment:yx,metalnessmap_pars_fragment:vx,morphinstance_vertex:Sx,morphcolor_vertex:Mx,morphnormal_vertex:bx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Tx,normal_fragment_begin:wx,normal_fragment_maps:Ax,normal_pars_fragment:Rx,normal_pars_vertex:Cx,normal_vertex:Ix,normalmap_pars_fragment:Px,clearcoat_normal_fragment_begin:Lx,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Ux,opaque_fragment:Fx,packing:Ox,premultiplied_alpha_fragment:Bx,project_vertex:zx,dithering_fragment:Hx,dithering_pars_fragment:kx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Vx,shadowmap_pars_fragment:Wx,shadowmap_pars_vertex:Xx,shadowmap_vertex:qx,shadowmask_pars_fragment:Yx,skinbase_vertex:Jx,skinning_pars_vertex:Zx,skinning_vertex:Kx,skinnormal_vertex:Qx,specularmap_fragment:jx,specularmap_pars_fragment:$x,tonemapping_fragment:e_,tonemapping_pars_fragment:t_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:s_,uv_pars_vertex:r_,uv_vertex:a_,worldpos_vertex:o_,background_vert:l_,background_frag:c_,backgroundCube_vert:h_,backgroundCube_frag:u_,cube_vert:d_,cube_frag:f_,depth_vert:p_,depth_frag:m_,distance_vert:g_,distance_frag:x_,equirect_vert:__,equirect_frag:y_,linedashed_vert:v_,linedashed_frag:S_,meshbasic_vert:M_,meshbasic_frag:b_,meshlambert_vert:E_,meshlambert_frag:T_,meshmatcap_vert:w_,meshmatcap_frag:A_,meshnormal_vert:R_,meshnormal_frag:C_,meshphong_vert:I_,meshphong_frag:P_,meshphysical_vert:L_,meshphysical_frag:D_,meshtoon_vert:N_,meshtoon_frag:U_,points_vert:F_,points_frag:O_,shadow_vert:B_,shadow_frag:z_,sprite_vert:H_,sprite_frag:k_},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},li={basic:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:rn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:rn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:rn([Ee.points,Ee.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:rn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:rn([Ee.common,Ee.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:rn([Ee.sprite,Ee.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:rn([Ee.common,Ee.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:rn([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};li.physical={uniforms:rn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var lc={r:0,b:0,g:0},G_=new pt,lp=new Ye;lp.set(-1,0,0,0,1,0,0,0,1);function V_(n,e,t,i,s,r){let a=new Je(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=e.get(T,v)}return T}function m(y){let T=!1,v=f(y);v===null?p(a,o):v&&v.isColor&&(p(v,1),T=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(y,T){let v=f(T);v&&v.isCubeTexture?(c===void 0&&(c=new wt(new Yi(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Ts(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lp),c.material.toneMapped=ht.getTransfer(v.colorSpace)!==gt,(h!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new wt(new si(2,2),new ai({name:"BackgroundMaterial",uniforms:Ts(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,T){y.getRGB(lc,iu(n)),t.buffers.color.setClear(lc.r,lc.g,lc.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:m,addToRenderList:S,dispose:g}}function W_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(F,z,q,N,V){let J=!1,W=d(F,N,q,z);r!==W&&(r=W,c(r.object)),J=f(F,N,q,V),J&&m(F,N,q,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(F,z,q,N),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function d(F,z,q,N){let V=N.wireframe===!0,J=i[z.id];J===void 0&&(J={},i[z.id]=J);let W=F.isInstancedMesh===!0?F.id:0,se=J[W];se===void 0&&(se={},J[W]=se);let Y=se[q.id];Y===void 0&&(Y={},se[q.id]=Y);let te=Y[V];return te===void 0&&(te=u(l()),Y[V]=te),te}function u(F){let z=[],q=[],N=[];for(let V=0;V<t;V++)z[V]=0,q[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:N,object:F,attributes:{},index:null}}function f(F,z,q,N){let V=r.attributes,J=z.attributes,W=0,se=q.getAttributes();for(let Y in se)if(se[Y].location>=0){let ie=V[Y],Ae=J[Y];if(Ae===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Ae=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Ae=F.instanceColor)),ie===void 0||ie.attribute!==Ae||Ae&&ie.data!==Ae.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function m(F,z,q,N){let V={},J=z.attributes,W=0,se=q.getAttributes();for(let Y in se)if(se[Y].location>=0){let ie=J[Y];ie===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor));let Ae={};Ae.attribute=ie,ie&&ie.data&&(Ae.data=ie.data),V[Y]=Ae,W++}r.attributes=V,r.attributesNum=W,r.index=N}function S(){let F=r.newAttributes;for(let z=0,q=F.length;z<q;z++)F[z]=0}function p(F){g(F,0)}function g(F,z){let q=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;q[F]=1,N[F]===0&&(n.enableVertexAttribArray(F),N[F]=1),V[F]!==z&&(n.vertexAttribDivisor(F,z),V[F]=z)}function y(){let F=r.newAttributes,z=r.enabledAttributes;for(let q=0,N=z.length;q<N;q++)z[q]!==F[q]&&(n.disableVertexAttribArray(q),z[q]=0)}function T(F,z,q,N,V,J,W){W===!0?n.vertexAttribIPointer(F,z,q,V,J):n.vertexAttribPointer(F,z,q,N,V,J)}function v(F,z,q,N){S();let V=N.attributes,J=q.getAttributes(),W=z.defaultAttributeValues;for(let se in J){let Y=J[se];if(Y.location>=0){let te=V[se];if(te===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),te!==void 0){let ie=te.normalized,Ae=te.itemSize,Ve=e.get(te);if(Ve===void 0)continue;let K=Ve.buffer,Se=Ve.type,Re=Ve.bytesPerElement,ze=Se===n.INT||Se===n.UNSIGNED_INT||te.gpuType===El;if(te.isInterleavedBufferAttribute){let Me=te.data,He=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,Et=te.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let We=0;We<Y.locationSize;We++)g(Y.location+We,Me.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let We=0;We<Y.locationSize;We++)p(Y.location+We);n.bindBuffer(n.ARRAY_BUFFER,K);for(let We=0;We<Y.locationSize;We++)T(Y.location+We,Ae/Y.locationSize,Se,ie,He*Re,(Et+Ae/Y.locationSize*We)*Re,ze)}else{if(te.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)g(Y.location+Me,te.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Me=0;Me<Y.locationSize;Me++)T(Y.location+Me,Ae/Y.locationSize,Se,ie,Ae*Re,Ae/Y.locationSize*Me*Re,ze)}}else if(W!==void 0){let ie=W[se];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Y.location,ie);break;case 3:n.vertexAttrib3fv(Y.location,ie);break;case 4:n.vertexAttrib4fv(Y.location,ie);break;default:n.vertexAttrib1fv(Y.location,ie)}}}}y()}function R(){B();for(let F in i){let z=i[F];for(let q in z){let N=z[q];for(let V in N){let J=N[V];for(let W in J)h(J[W].object),delete J[W];delete N[V]}}delete i[F]}}function w(F){if(i[F.id]===void 0)return;let z=i[F.id];for(let q in z){let N=z[q];for(let V in N){let J=N[V];for(let W in J)h(J[W].object),delete J[W];delete N[V]}}delete i[F.id]}function x(F){for(let z in i){let q=i[z];for(let N in q){let V=q[N];if(V[F.id]===void 0)continue;let J=V[F.id];for(let W in J)h(J[W].object),delete J[W];delete V[F.id]}}}function E(F){for(let z in i){let q=i[z],N=F.isInstancedMesh===!0?F.id:0,V=q[N];if(V!==void 0){for(let J in V){let W=V[J];for(let se in W)h(W[se].object),delete W[se];delete V[J]}delete q[N],Object.keys(q).length===0&&delete i[z]}}}function B(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:p,disableUnusedAttributes:y}}function X_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function q_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==qn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let E=x===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==xn&&x!==Wn&&!E&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:R,samples:w}}function Y_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Mn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,T=y*4,v=g.clippingState||null;l.value=v,v=h(m,u,T,f);for(let R=0;R!==T;++R)v[R]=t[R];g.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,m){let S=d!==null?d.length:0,p=null;if(S!==0){if(p=l.value,m!==!0||p===null){let g=f+S*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,v=f;T!==S;++T,v+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}var Fa=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yi(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Ss});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=dn),new yr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Hf=256,J_=3,Z_=20,cp=256,hp=16,K_=3,Q_=new C,j_=new Je,hc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yr(1,10,null),this._boxMesh=new wt(new Yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Q_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(j_));let p=new yr(i,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hf,$h(e))}_fromTexture(e,t){e.mapping===bs||e.mapping===Mr?this._setSize(e.image.length===0?Hf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=kf(e,!1,!1),i=Math.log2(e)-J_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=kf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===bs||e.mapping===Mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=$_(),this._integrationMaterial=ey());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/hp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-K_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(cp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ty());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function kf(n,e,t){return new Fa(n,{minFilter:Ii,generateMipmaps:e,type:Xn,colorSpace:Kr,depthBuffer:t})}function Oa(n,e,t){return new ai({name:n,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:fn,blending:Ss,depthTest:!1,depthWrite:!1})}function $_(){return Oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ey(){return Oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ty(){return Oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Z_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Gf(){return Oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vf(){return Oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ny(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Sl||f===Ml)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let S=new Fa(m.height);return S.fromEquirectangularTexture(n,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Sl||f===Ml,S=f===bs||f===Mr;if(m||S){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new hc(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new hc(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Sl?u.mapping=bs:f===Ml&&(u.mapping=Mr),u}function l(u){let f=0,m=6;for(let S=0;S<m;S++)u[S]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function iy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Wr("WebGLRenderer: "+i+" extension not supported."),s}}}function sy(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let S=r.get(m);S&&(e.remove(S),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(m){let S=m.attributes;for(let p in S)e.update(S[p],n.ARRAY_BUFFER)}function d(m){let S=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=S!==null?S.array.length:p.array.length/3-1,T=p.count>=65535?ta:ea,v=new T(Math.ceil(y/3)*6,1),R=v.array;if(S!==null){let x=S.array;g=S.version;for(let E=0,B=0;E<y;E+=3){let I=x[E+0],F=x[E+1],z=x[E+2];R[B++]=I,R[B++]=F,R[B++]=F,R[B++]=z,R[B++]=z,R[B++]=I}}else{g=p.version;for(let x=0,E=0;x<y;x+=3){let B=x+0,I=x+1,F=x+2;R[E++]=B,R[E++]=I,R[E++]=I,R[E++]=F,R[E++]=F,R[E++]=B}}v.version=g;let w=r.get(m);w&&e.remove(w),r.set(m,v)}function u(m){let S=r.get(m);if(S){let p=m.index;p!==null&&S.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let S=s[m].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function ry(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let S=0;for(let p=0;p<f;p++)S+=u[p];t.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ay(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function oy(n,e,t){let i=new WeakMap,s=new Ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let B=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),S===!0&&(T=3);let v=o.attributes.position.count*T,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*R*4*d),x=new $r(w,v,R,d);x.type=Wn,x.needsUpdate=!0;let E=T*4;for(let I=0;I<d;I++){let F=p[I],z=g[I],q=y[I],N=v*R*4*I;for(let V=0;V<F.count;V++){let J=V*E;f===!0&&(s.fromBufferAttribute(F,V),w[N+J+0]=s.x,w[N+J+1]=s.y,w[N+J+2]=s.z,w[N+J+3]=0),m===!0&&(s.fromBufferAttribute(z,V),w[N+J+4]=s.x,w[N+J+5]=s.y,w[N+J+6]=s.z,w[N+J+7]=0),S===!0&&(s.fromBufferAttribute(q,V),w[N+J+8]=s.x,w[N+J+9]=s.y,w[N+J+10]=s.z,w[N+J+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ae(v,R)},i.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function ly(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var cy={[Lh]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};function hy(n,e,t,i,s,r){let a=new bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new St;h.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new nt([0,2,0,0,2,0],2));let d=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new wt(h,d),f=new ys(-1,1,1,-1,0,1),m=null,S=null,p=!1,g,y=null,T=[],v=!1;this.setSize=function(R,w){a.setSize(R,w),o!==null&&o.setSize(R,w),l!==null&&l.setSize(R,w);for(let x=0;x<T.length;x++){let E=T[x];E.setSize&&E.setSize(R,w)}},this.setEffects=function(R){T=R,v=T.length>0&&T[0].isRenderPass===!0;let w=a.width,x=a.height;T.length>0&&o===null&&(o=new bn(w,x,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(w,x,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&T.some(B=>B.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Ci(w,x),r===!0&&(c.format=Pi,c.type=Es)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let B=0;B<T.length;B++){let I=T[B];I.setSize&&I.setSize(w,x),E&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,w){if(p||R.toneMapping===Dn&&T.length===0)return!1;if(y=w,w!==null){let x=w.width,E=w.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return v===!1&&R.setRenderTarget(a),g=R.toneMapping,R.toneMapping=Dn,!0},this.hasRenderPass=function(){return v},this.end=function(R,w){R.toneMapping=g,p=!0;let x=a,E=o;for(let B=0;B<T.length;B++){let I=T[B];I.enabled!==!1&&(I.render(R,E,x,w),I.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(m!==R.outputColorSpace||S!==R.toneMapping){m=R.outputColorSpace,S=R.toneMapping,d.defines={},ht.getTransfer(m)===gt&&(d.defines.SRGB_TRANSFER="");let B=cy[S];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(y),R.render(u,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var up=new sn,dp=new Ci(1,1),fp=new aa(1),pp=new $r,mp=new Jo,gp=new ra,Wf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),Jf=new Float32Array(4);function Tr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Wf[s];if(r===void 0&&(r=new Float32Array(s),Wf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dc(n,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function fy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function my(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Jf.set(i),n.uniformMatrix2fv(this.addr,!1,Jf),Vt(t,i)}}function gy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Yf.set(i),n.uniformMatrix3fv(this.addr,!1,Yf),Vt(t,i)}}function xy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;qf.set(i),n.uniformMatrix4fv(this.addr,!1,qf),Vt(t,i)}}function _y(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function My(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function by(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function Ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function fc(n){return n.version===0&&(n.compareFunction=Zh,n.needsUpdate=!0),n}function wy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=fc(dp):r=up,t.setTexture2D(e||r,s)}function Ay(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||mp,s)}function Ry(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=fc(fp):r=gp,t.setTextureCube(e||r,s)}function Cy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pp,s)}function Iy(n){switch(n){case 5126:return uy;case 35664:return dy;case 35665:return fy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return xy;case 5124:case 35670:return _y;case 35667:case 35671:return yy;case 35668:case 35672:return vy;case 35669:case 35673:return Sy;case 5125:return My;case 36294:return by;case 36295:return Ey;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}function Py(n,e){n.uniform1fv(this.addr,e)}function Ly(n,e){let t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dy(n,e){let t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ny(n,e){let t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Uy(n,e){let t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fy(n,e){let t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Oy(n,e){let t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function By(n,e){n.uniform1iv(this.addr,e)}function zy(n,e){n.uniform2iv(this.addr,e)}function Hy(n,e){n.uniform3iv(this.addr,e)}function ky(n,e){n.uniform4iv(this.addr,e)}function Gy(n,e){n.uniform1uiv(this.addr,e)}function Vy(n,e){n.uniform2uiv(this.addr,e)}function Wy(n,e){n.uniform3uiv(this.addr,e)}function Xy(n,e){n.uniform4uiv(this.addr,e)}function qy(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=fc(dp):a=up;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Yy(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||mp,r[a])}function Jy(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=fc(fp):a=gp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Zy(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pp,r[a])}function Ky(n){switch(n){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Ny;case 35674:return Uy;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return ky;case 5125:return Gy;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Zy}}var pu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}},mu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ky(t.type)}},gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},du=/(\w+)(\])?(\[|\.)?/g;function Zf(n,e){n.seq.push(e),n.map[e.id]=e}function Qy(n,e,t){let i=n.name,s=i.length;for(du.lastIndex=0;;){let r=du.exec(i),a=du.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zf(t,c===void 0?new pu(o,n,e):new mu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new gu(o),Zf(t,d)),t=d}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Qy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Kf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var jy=37297,$y=0;function ev(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Qf=new Ye;function tv(n){ht._getMatrix(Qf,ht.workingColorSpace,n);let e=`mat3( ${Qf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Qr:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ev(n.getShaderSource(e),o)}else return r}function nv(n,e){let t=tv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var iv={[Lh]:"Linear",[Dh]:"Reinhard",[Nh]:"Cineon",[Uh]:"ACESFilmic",[Oh]:"AgX",[Bh]:"Neutral",[Fh]:"Custom"};function sv(n,e){let t=iv[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cc=new C;function rv(){ht.getLuminanceCoefficients(cc);let n=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function ov(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ua(n){return n!==""}function $f(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ep(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(n){return n.replace(cv,hv)}function hv(n,e){let t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xu(t)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(n){return n.replace(uv,dv)}function dv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function np(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var fv={[vs]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function pv(n){return fv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mv={[Mr]:"ENVMAP_MODE_REFRACTION"};function gv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xv={[Ph]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[xf]:"ENVMAP_BLENDING_ADD"};function _v(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xv[n.combine]||"ENVMAP_BLENDING_NONE"}function yv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=pv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gv(t),d=_v(t),u=av(t),f=ov(r),m=s.createProgram(),S,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ua).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(S=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Dn?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,nv("linearToOutputTexel",t.outputColorSpace),rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),a=xu(a),a=$f(a,t),a=ep(a,t),o=xu(o),o=$f(o,t),o=ep(o,t),a=tp(a),o=tp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+S+a,T=g+p+o,v=Kf(s,s.VERTEX_SHADER,y),R=Kf(s,s.FRAGMENT_SHADER,T);s.attachShader(m,v),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(I){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(m)||"",z=s.getShaderInfoLog(v)||"",q=s.getShaderInfoLog(R)||"",N=F.trim(),V=z.trim(),J=q.trim(),W=!0,se=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,v,R);else{let Y=jf(s,v,"vertex"),te=jf(s,R,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Y+`
`+te)}else N!==""?Ge("WebGLProgram: Program Info Log:",N):(V===""||J==="")&&(se=!1);se&&(I.diagnostics={runnable:W,programLog:N,vertexShader:{log:V,prefix:S},fragmentShader:{log:J,prefix:p}})}s.deleteShader(v),s.deleteShader(R),x=new Er(s,m),E=lv(s,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,jy)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=R,this}var vv=0,_u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new yu(e),t.set(e,i)),i}},yu=class{constructor(e){this.id=vv++,this.code=e,this.usedTimes=0}};function Sv(n){return n===es||n===La||n===Da}function Mv(n,e,t,i,s,r){let a=new rr,o=new _u,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,E,B,I,F,z){let q=I.fog,N=F.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||V,J),se=u[x.type],Y=i.precision;x.precision!==null&&(Y=i.getMaxPrecision(x.precision),Y!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));let te=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=te!==void 0?te.length:0,Ae=0;N.morphAttributes.position!==void 0&&(Ae=1),N.morphAttributes.normal!==void 0&&(Ae=2),N.morphAttributes.color!==void 0&&(Ae=3);let Ve,K,Se,Re;if(se){let be=li[se];Ve=be.vertexShader,K=be.fragmentShader}else{Ve=x.vertexShader,K=x.fragmentShader;let be=o.getVertexShaderStage(x),xt=o.getFragmentShaderStage(x);o.update(x,be,xt),Se=be.id,Re=xt.id}let ze=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),He=F.isInstancedMesh===!0,Et=F.isBatchedMesh===!0,We=!!x.map,tt=!!x.matcap,rt=!!W,ne=rt&&W.isPMREMTexture===!0,fe=!!x.aoMap,he=!!x.lightMap,we=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,Ke=!!x.displacementMap,Ue=!!x.emissiveMap,at=!!x.metalnessMap,ot=!!x.roughnessMap,ft=x.anisotropy>0,O=x.clearcoat>0,Nt=x.diffuseRoughness>0,it=x.dispersion>0,yt=x.retroreflectivity>0,xe=x.iridescence>0,Dt=x.sheen>0,ke=x.transmission>0,qe=ft&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,_=O&&!!x.clearcoatNormalMap,k=O&&!!x.clearcoatRoughnessMap,re=Nt&&!!x.diffuseRoughnessMap,ee=xe&&!!x.iridescenceMap,ue=xe&&!!x.iridescenceThicknessMap,_e=Dt&&!!x.sheenColorMap,Q=Dt&&!!x.sheenRoughnessMap,j=!!x.specularMap,pe=!!x.specularColorMap,L=!!x.specularIntensityMap,$=ke&&!!x.transmissionMap,Z=ke&&!!x.thicknessMap,me=!!x.gradientMap,le=!!x.alphaMap,de=x.alphaTest>0,Fe=!!x.alphaHash,je=!!x.extensions,oe=Dn;x.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(oe=n.toneMapping);let Be=ne?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Qe={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:K,defines:x.defines,customVertexShaderID:Se,customFragmentShaderID:Re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:Et,batchingColor:Et&&F._colorsTexture!==null,instancing:He,instancingColor:He&&F.instanceColor!==null,instancingMorph:He&&F.morphTexture!==null,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:tt,envMap:rt,envMapMode:rt&&W.mapping,envMapPMREM:ne,envMapMaxLod:ne?Be.length-1:null,envMapSize:ne?Be[0].width:null,aoMap:fe,lightMap:he,bumpMap:we,normalMap:ve,displacementMap:Ke,emissiveMap:Ue,normalMapObjectSpace:ve&&x.normalMapType===vf,normalMapTangentSpace:ve&&x.normalMapType===ac,packedNormalMap:ve&&x.normalMapType===ac&&Sv(x.normalMap.format),metalnessMap:at,roughnessMap:ot,anisotropy:ft,anisotropyMap:qe,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:k,diffuseRoughness:Nt,diffuseRoughnessMap:re,dispersion:it,retroreflection:yt,iridescence:xe,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:Dt,sheenColorMap:_e,sheenRoughnessMap:Q,specularMap:j,specularColorMap:pe,specularIntensityMap:L,transmission:ke,transmissionMap:$,thicknessMap:Z,gradientMap:me,opaque:x.transparent===!1&&x.blending===Sr&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Fe,combine:x.combine,mapUv:We&&f(x.map.channel),aoMapUv:fe&&f(x.aoMap.channel),lightMapUv:he&&f(x.lightMap.channel),bumpMapUv:we&&f(x.bumpMap.channel),normalMapUv:ve&&f(x.normalMap.channel),displacementMapUv:Ke&&f(x.displacementMap.channel),emissiveMapUv:Ue&&f(x.emissiveMap.channel),metalnessMapUv:at&&f(x.metalnessMap.channel),roughnessMapUv:ot&&f(x.roughnessMap.channel),anisotropyMapUv:qe&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(x.sheenRoughnessMap.channel),specularMapUv:j&&f(x.specularMap.channel),specularColorMapUv:pe&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:$&&f(x.transmissionMap.channel),thicknessMapUv:Z&&f(x.thicknessMap.channel),alphaMapUv:le&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ve||ft),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(We||le),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:je&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&x.extensions.multiDraw===!0||Et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function S(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)E.push(B),E.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(p(E,x),g(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function g(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let E=u[x.type],B;if(E){let I=li[E];B=Of.clone(I.uniforms)}else B=x.uniforms;return B}function T(x,E){let B=h.get(E);return B!==void 0?++B.usedTimes:(B=new yv(n,E,x,s),c.push(B),h.set(E,B)),B}function v(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:y,acquireProgram:T,releaseProgram:v,releaseShaderCache:R,programs:c,dispose:w}}function bv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ip(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,S,p,g){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:g},n[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=a(u),y.groupOrder=S,y.renderOrder=u.renderOrder,y.z=p,y.group=g),e++,y}function l(u,f,m,S,p,g,y){y.reversedDepth===!0&&(p=-p);let T=o(u,f,m,S,p,g);m.transmission>0?i.push(T):m.transparent===!0?s.push(T):t.push(T)}function c(u,f,m,S,p,g){let y=o(u,f,m,S,p,g);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||Ev),i.length>1&&i.sort(f||ip),s.length>1&&s.sort(f||ip)}function d(){for(let u=e,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Tv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new sp,n.set(i,[a])):s>=r.length?(a=new sp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function wv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Je};break;case"SpotLight":t={position:new C,direction:new C,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Av(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Rv=0;function Cv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Iv(n){let e=new wv,t=Av(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new pt,a=new pt;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,m=0,S=0,p=0,g=0,y=0,T=0,v=0,R=0,w=0,x=0,E=0,B=0,I=0;c.sort(Cv);for(let z=0,q=c.length;z<q;z++){let N=c[z],V=N.color,J=N.intensity,W=N.distance,se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===es?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=V.r*J,d+=V.g*J,u+=V.b*J;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],J);I++}else if(N.isSunLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let te=N.shadow,ie=t.get(N);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[m]=ie,i.sunShadowMap[m]=se;let Ae=te.getViewportCount();for(let Ve=0;Ve<Ae;Ve++)i.sunShadowMatrix[S+Ve]=te.getMatrix(Ve),i.sunShadowCascade[S+Ve]=te._cascadeData[Ve];S+=Ae,m++}i.sun[f]=Y,f++}else if(N.isDirectionalLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let te=N.shadow,ie=t.get(N);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=N.shadow.matrix,R++}i.directional[p]=Y,p++}else if(N.isSpotLight){let Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(V).multiplyScalar(J),Y.distance=W,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[y]=Y;let te=N.shadow;if(N.map&&(i.spotLightMap[E]=N.map,E++,te.updateMatrices(N),N.castShadow&&B++),i.spotLightMatrix[y]=te.matrix,N.castShadow){let ie=t.get(N);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[y]=ie,i.spotShadowMap[y]=se,x++}y++}else if(N.isRectAreaLight){let Y=e.get(N);Y.color.copy(V).multiplyScalar(J),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[T]=Y,T++}else if(N.isPointLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let te=N.shadow,ie=t.get(N);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=se,i.pointShadowMatrix[g]=N.shadow.matrix,w++}i.point[g]=Y,g++}else if(N.isHemisphereLight){let Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(J),Y.groundColor.copy(N.groundColor).multiplyScalar(J),i.hemi[v]=Y,v++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.sunLength!==f||F.directionalLength!==p||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==T||F.hemiLength!==v||F.numSunShadows!==m||F.numDirectionalShadows!==R||F.numPointShadows!==w||F.numSpotShadows!==x||F.numSpotMaps!==E||F.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=p,i.spot.length=y,i.rectArea.length=T,i.point.length=g,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-B,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=I,F.sunLength=f,F.directionalLength=p,F.pointLength=g,F.spotLength=y,F.rectAreaLength=T,F.hemiLength=v,F.numSunShadows=m,F.numDirectionalShadows=R,F.numPointShadows=w,F.numSpotShadows=x,F.numSpotMaps=E,F.numLightProbes=I,i.version=Rv++)}function l(c,h){let d=0,u=0,f=0,m=0,S=0,p=0,g=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let v=c[y];if(v.isSunLight){let R=i.sun[d];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let R=i.directional[u];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),u++}else if(v.isSpotLight){let R=i.spot[m];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let R=i.rectArea[S];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let R=i.hemi[p];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function rp(n){let e=new Iv(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Pv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new rp(n),e.set(s,[o])):r>=a.length?(o=new rp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Uv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],ap=new pt,Na=new C,fu=new C;function Fv(n,e,t){let i=new Wi,s=new ae,r=new ae,a=new Ct,o=new ol,l=new ll,c={},h=t.maxTextureSize,d={[$i]:fn,[fn]:$i,[wn]:wn},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Lv,fragmentShader:Dv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new St;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new wt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let g=this.type;this.render=function(w,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Kd&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);let B=n.getRenderTarget(),I=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ss),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=g!==this.type;q&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=w.length;N<V;N++){let J=w[N],W=J.shadow;if(W===void 0){Ge("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let se=W.getFrameExtents();s.multiply(se),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,W.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===vr){if(J.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new bn(s.x,s.y,{format:es,type:Xn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new Ci(s.x,s.y,Wn),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=wi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt}else J.isPointLight?(W.map=new Fa(s.x),W.map.depthTexture=new aa(s.x,Vn)):(W.map=new bn(s.x,s.y),W.map.depthTexture=new Ci(s.x,s.y,Vn)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=wi,this.type===vs?(W.map.depthTexture.compareFunction=Y?Jh:Yh,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let te=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,E);let ie=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:E.layers;for(let Ae=0;Ae<te;Ae++){let Ve=W.getCamera(Ae);if(J.isPointLight){let K=W.camera,Se=W.matrix,Re=J.distance||K.far;Re!==K.far&&(K.far=Re,K.updateProjectionMatrix()),Na.setFromMatrixPosition(J.matrixWorld),K.position.copy(Na),fu.copy(K.position),fu.add(Nv[Ae]),K.up.copy(Uv[Ae]),K.lookAt(fu),K.updateMatrixWorld(),Se.makeTranslation(-Na.x,-Na.y,-Na.z),ap.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ap,K.coordinateSystem,K.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(W.map),n.clear());let K=W.getViewport(Ae);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(a)}i=W.getFrustum(Ae),v(x,E,Ve,J,ie,this.type)}W.isPointLightShadow!==!0&&this.type===vr&&y(W,E),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(B,I,F)};function y(w,x){let E=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new bn(s.x,s.y,{format:es,type:Xn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,E,u,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,E,f,S,null)}function T(w,x,E,B){let I=null,F=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)I=F;else if(I=E.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=I.uuid,q=x.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let V=N[q];V===void 0&&(V=I.clone(),N[q]=V,x.addEventListener("dispose",R)),I=V}if(I.visible=x.visible,I.wireframe=x.wireframe,B===vr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:d[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=n.properties.get(I);z.light=E}return I}function v(w,x,E,B,I,F){if(w.visible===!1)return;if(w.layers.test(I)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===vr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let N=e.update(w),V=w.material;if(Array.isArray(V)){let J=N.groups;for(let W=0,se=J.length;W<se;W++){let Y=J[W],te=V[Y.materialIndex];if(te&&te.visible){let ie=T(w,te,B,F);w.onBeforeShadow(n,w,x,E,N,ie,Y),n.renderBufferDirect(E,null,N,ie,w,Y),w.onAfterShadow(n,w,x,E,N,ie,Y)}}}else if(V.visible){let J=T(w,V,B,F);w.onBeforeShadow(n,w,x,E,N,J,null),n.renderBufferDirect(E,null,N,J,w,null),w.onAfterShadow(n,w,x,E,N,J,null)}}let q=w.children;for(let N=0,V=q.length;N<V;N++)v(q[N],x,E,B,I,F)}function R(w){w.target.removeEventListener("dispose",R);for(let E in c){let B=c[E],I=w.target.uuid;I in B&&(B[I].dispose(),delete B[I])}}}function Ov(n,e){function t(){let L=!1,$=new Ct,Z=null,me=new Ct(0,0,0,0);return{setMask:function(le){Z!==le&&!L&&(n.colorMask(le,le,le,le),Z=le)},setLocked:function(le){L=le},setClear:function(le,de,Fe,je,oe){oe===!0&&(le*=je,de*=je,Fe*=je),$.set(le,de,Fe,je),me.equals($)===!1&&(n.clearColor(le,de,Fe,je),me.copy($))},reset:function(){L=!1,Z=null,me.set(-1,0,0,0)}}}function i(){let L=!1,$=!1,Z=null,me=null,le=null;return{setReversed:function(de){if($!==de){let Fe=e.get("EXT_clip_control");de?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),$=de;let je=le;le=null,this.setClear(je)}},getReversed:function(){return $},setTest:function(de){de?Me(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(de){Z!==de&&!L&&(n.depthMask(de),Z=de)},setFunc:function(de){if($&&(de=If[de]),me!==de){switch(de){case Fo:n.depthFunc(n.NEVER);break;case Oo:n.depthFunc(n.ALWAYS);break;case Bo:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case zo:n.depthFunc(n.EQUAL);break;case Ho:n.depthFunc(n.GEQUAL);break;case ko:n.depthFunc(n.GREATER);break;case Go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=de}},setLocked:function(de){L=de},setClear:function(de){le!==de&&(le=de,$&&(de=1-de),n.clearDepth(de))},reset:function(){L=!1,Z=null,me=null,le=null,$=!1}}}function s(){let L=!1,$=null,Z=null,me=null,le=null,de=null,Fe=null,je=null,oe=null;return{setTest:function(Be){L||(Be?Me(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(Be){$!==Be&&!L&&(n.stencilMask(Be),$=Be)},setFunc:function(Be,Qe,be){(Z!==Be||me!==Qe||le!==be)&&(n.stencilFunc(Be,Qe,be),Z=Be,me=Qe,le=be)},setOp:function(Be,Qe,be){(de!==Be||Fe!==Qe||je!==be)&&(n.stencilOp(Be,Qe,be),de=Be,Fe=Qe,je=be)},setLocked:function(Be){L=Be},setClear:function(Be){oe!==Be&&(n.clearStencil(Be),oe=Be)},reset:function(){L=!1,$=null,Z=null,me=null,le=null,de=null,Fe=null,je=null,oe=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],S=null,p=!1,g=null,y=null,T=null,v=null,R=null,w=null,x=null,E=new Je(0,0,0),B=0,I=!1,F=null,z=null,q=null,N=null,V=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=se>=2);let te=null,ie={},Ae=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),K=new Ct().fromArray(Ae),Se=new Ct().fromArray(Ve);function Re(L,$,Z,me){let le=new Uint8Array(4),de=n.createTexture();n.bindTexture(L,de),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Z;Fe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D($,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D($+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return de}let ze={};ze[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),a.setFunc($s),we(!1),ve(Th),Me(n.CULL_FACE),fe(Ss);function Me(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function He(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Et(L,$){return u[L]!==$?(n.bindFramebuffer(L,$),u[L]=$,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=$),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=$),!0):!1}function We(L,$){let Z=m,me=!1;if(L){Z=f.get($),Z===void 0&&(Z=[],f.set($,Z));let le=L.textures;if(Z.length!==le.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Fe=le.length;de<Fe;de++)Z[de]=n.COLOR_ATTACHMENT0+de;Z.length=le.length,me=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,me=!0);me&&n.drawBuffers(Z)}function tt(L){return S!==L?(n.useProgram(L),S=L,!0):!1}let rt={[Ms]:n.FUNC_ADD,[jd]:n.FUNC_SUBTRACT,[$d]:n.FUNC_REVERSE_SUBTRACT};rt[ef]=n.MIN,rt[tf]=n.MAX;let ne={[nf]:n.ZERO,[sf]:n.ONE,[rf]:n.SRC_COLOR,[Ch]:n.SRC_ALPHA,[uf]:n.SRC_ALPHA_SATURATE,[cf]:n.DST_COLOR,[of]:n.DST_ALPHA,[af]:n.ONE_MINUS_SRC_COLOR,[Ih]:n.ONE_MINUS_SRC_ALPHA,[hf]:n.ONE_MINUS_DST_COLOR,[lf]:n.ONE_MINUS_DST_ALPHA,[df]:n.CONSTANT_COLOR,[ff]:n.ONE_MINUS_CONSTANT_COLOR,[pf]:n.CONSTANT_ALPHA,[mf]:n.ONE_MINUS_CONSTANT_ALPHA};function fe(L,$,Z,me,le,de,Fe,je,oe,Be){if(L===Ss){p===!0&&(He(n.BLEND),p=!1);return}if(p===!1&&(Me(n.BLEND),p=!0),L!==Qd){if(L!==g||Be!==I){if((y!==Ms||R!==Ms)&&(n.blendEquation(n.FUNC_ADD),y=Ms,R=Ms),Be)switch(L){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wh:n.blendFunc(n.ONE,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ah:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}T=null,v=null,w=null,x=null,E.set(0,0,0),B=0,g=L,I=Be}return}le=le||$,de=de||Z,Fe=Fe||me,($!==y||le!==R)&&(n.blendEquationSeparate(rt[$],rt[le]),y=$,R=le),(Z!==T||me!==v||de!==w||Fe!==x)&&(n.blendFuncSeparate(ne[Z],ne[me],ne[de],ne[Fe]),T=Z,v=me,w=de,x=Fe),(je.equals(E)===!1||oe!==B)&&(n.blendColor(je.r,je.g,je.b,oe),E.copy(je),B=oe),g=L,I=!1}function he(L,$){L.side===wn?He(n.CULL_FACE):Me(n.CULL_FACE);let Z=L.side===fn;$&&(Z=!Z),we(Z),L.blending===Sr&&L.transparent===!1?fe(Ss):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){F!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),F=L)}function ve(L){L!==Jd?(Me(n.CULL_FACE),L!==z&&(L===Th?n.cullFace(n.BACK):L===Zd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),z=L}function Ke(L){L!==q&&(W&&n.lineWidth(L),q=L)}function Ue(L,$,Z){L?(Me(n.POLYGON_OFFSET_FILL),(N!==$||V!==Z)&&(N=$,V=Z,a.getReversed()&&($=-$,Z=-Z),n.polygonOffset($,Z))):He(n.POLYGON_OFFSET_FILL)}function at(L){L?Me(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function ot(L){L===void 0&&(L=n.TEXTURE0+J-1),te!==L&&(n.activeTexture(L),te=L)}function ft(L,$,Z){Z===void 0&&(te===null?Z=n.TEXTURE0+J-1:Z=te);let me=ie[Z];me===void 0&&(me={type:void 0,texture:void 0},ie[Z]=me),(me.type!==L||me.texture!==$)&&(te!==Z&&(n.activeTexture(Z),te=Z),n.bindTexture(L,$||ze[L]),me.type=L,me.texture=$)}function O(){let L=ie[te];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Nt(){try{n.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function it(){try{n.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function yt(){try{n.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function xe(){try{n.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Dt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function qe(){try{n.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function A(){try{n.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function _(){try{n.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function k(){try{n.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function re(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function ee(L,$){d[L]!==$&&(n.pixelStorei(L,$),d[L]=$)}function ue(L){K.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function _e(L){Se.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Se.copy(L))}function Q(L,$){let Z=c.get($);Z===void 0&&(Z=new WeakMap,c.set($,Z));let me=Z.get(L);me===void 0&&(me=n.getUniformBlockIndex($,L.name),n.uniformBlockBinding($,me,me),Z.set(L,me))}function j(L,$,Z){let le=c.get($).get(L);l[le]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,Z),l[le]=Z)}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,ie={},u={},l={},f=new WeakMap,m=[],S=null,p=!1,g=null,y=null,T=null,v=null,R=null,w=null,x=null,E=new Je(0,0,0),B=0,I=!1,F=null,z=null,q=null,N=null,V=null,K.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Me,disable:He,bindFramebuffer:Et,drawBuffers:We,useProgram:tt,setBlending:fe,setMaterial:he,setFlipSided:we,setCullFace:ve,setLineWidth:Ke,setPolygonOffset:Ue,setScissorTest:at,activeTexture:ot,bindTexture:ft,unbindTexture:O,compressedTexImage2D:Nt,compressedTexImage3D:it,texImage2D:_,texImage3D:k,pixelStorei:ee,getParameter:re,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:qe,texStorage3D:A,texSubImage2D:yt,texSubImage3D:xe,compressedTexSubImage2D:Dt,compressedTexSubImage3D:ke,scissor:ue,viewport:_e,reset:pe}}function Bv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,S=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):tr("canvas")}function y(A,_,k){let re=1,ee=qe(A);if((ee.width>k||ee.height>k)&&(re=k/Math.max(ee.width,ee.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ue=Math.floor(re*ee.width),_e=Math.floor(re*ee.height);u===void 0&&(u=g(ue,_e));let Q=_?g(ue,_e):u;return Q.width=ue,Q.height=_e,Q.getContext("2d").drawImage(A,0,0,ue,_e),Ge("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ue+"x"+_e+")."),Q}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function T(A){return A.generateMipmaps}function v(A){n.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,_,k,re,ee,ue=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e;re&&(_e=e.get("EXT_texture_norm16"),_e||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===n.RED&&(k===n.FLOAT&&(Q=n.R32F),k===n.HALF_FLOAT&&(Q=n.R16F),k===n.UNSIGNED_BYTE&&(Q=n.R8),k===n.UNSIGNED_SHORT&&_e&&(Q=_e.R16_EXT),k===n.SHORT&&_e&&(Q=_e.R16_SNORM_EXT)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.R8UI),k===n.UNSIGNED_SHORT&&(Q=n.R16UI),k===n.UNSIGNED_INT&&(Q=n.R32UI),k===n.BYTE&&(Q=n.R8I),k===n.SHORT&&(Q=n.R16I),k===n.INT&&(Q=n.R32I)),_===n.RG&&(k===n.FLOAT&&(Q=n.RG32F),k===n.HALF_FLOAT&&(Q=n.RG16F),k===n.UNSIGNED_BYTE&&(Q=n.RG8),k===n.UNSIGNED_SHORT&&_e&&(Q=_e.RG16_EXT),k===n.SHORT&&_e&&(Q=_e.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RG8UI),k===n.UNSIGNED_SHORT&&(Q=n.RG16UI),k===n.UNSIGNED_INT&&(Q=n.RG32UI),k===n.BYTE&&(Q=n.RG8I),k===n.SHORT&&(Q=n.RG16I),k===n.INT&&(Q=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),k===n.UNSIGNED_INT&&(Q=n.RGB32UI),k===n.BYTE&&(Q=n.RGB8I),k===n.SHORT&&(Q=n.RGB16I),k===n.INT&&(Q=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),k===n.UNSIGNED_INT&&(Q=n.RGBA32UI),k===n.BYTE&&(Q=n.RGBA8I),k===n.SHORT&&(Q=n.RGBA16I),k===n.INT&&(Q=n.RGBA32I)),_===n.RGB&&(k===n.UNSIGNED_SHORT&&_e&&(Q=_e.RGB16_EXT),k===n.SHORT&&_e&&(Q=_e.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),_===n.RGBA){let j=ue?Qr:ht.getTransfer(ee);k===n.FLOAT&&(Q=n.RGBA32F),k===n.HALF_FLOAT&&(Q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Q=j===gt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&_e&&(Q=_e.RGBA16_EXT),k===n.SHORT&&_e&&(Q=_e.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(A,_){let k;return A?_===null||_===Vn||_===Es?k=n.DEPTH24_STENCIL8:_===Wn?k=n.DEPTH32F_STENCIL8:_===br&&(k=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===Es?k=n.DEPTH_COMPONENT24:_===Wn?k=n.DEPTH_COMPONENT32F:_===br&&(k=n.DEPTH_COMPONENT16),k}function E(A,_){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function B(A){let _=new WeakRef(A);i.get(A).__ref=_,m.add(_),S.register(A,_,_)}function I(A){let _=i.get(A).__ref;_!==void 0&&(m.delete(_),S.unregister(_))}function F(A){q(A.target)}function z(A){N(A.target)}function q(A){A.removeEventListener("dispose",F),I(A),J(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function N(A){A.removeEventListener("dispose",z),I(A),se(A)}function V(){for(let A of m){let _=A.deref();_!==void 0&&(_.isRenderTarget===!0?N(_):q(_))}m.clear(),d.clear()}function J(A){let _=i.get(A);if(_.__webglInit===void 0)return;let k=A.source,re=f.get(k);if(re){let ee=re[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&W(A),Object.keys(re).length===0&&f.delete(k)}i.remove(A)}function W(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let k=A.source,re=f.get(k);delete re[_.__cacheKey],a.memory.textures--}function se(A){let _=i.get(A);_.__depthDisposeCallback&&_.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&q(k),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let ue=0;ue<_.__webglFramebuffer[ee].length;ue++)n.deleteFramebuffer(_.__webglFramebuffer[ee][ue]);else n.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[ee]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let re=A.textures;for(let ee=0,ue=re.length;ee<ue;ee++){let _e=i.get(re[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(re[ee])}i.remove(A)}let Y=0;function te(){Y=0}function ie(){return Y}function Ae(A){Y=A}function Ve(){let A=Y;return A>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,A}function K(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Se(A,_){let k=i.get(A);if(A.isVideoTexture&&Dt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let re=A.image;if(re===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{he(k,A,_);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function Re(A,_){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){he(k,A,_);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function ze(A,_){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){he(k,A,_);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function Me(A,_){let k=i.get(A);if(A.version>0&&k.__version!==A.version){we(k,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}let He={[Vo]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},Et={[Jt]:n.NEAREST,[_f]:n.NEAREST_MIPMAP_NEAREST,[Aa]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[bl]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},We={[Mf]:n.NEVER,[Zh]:n.ALWAYS,[bf]:n.LESS,[Yh]:n.LEQUAL,[Ef]:n.EQUAL,[Jh]:n.GEQUAL,[Tf]:n.GREATER,[wf]:n.NOTEQUAL};function tt(A,_){if(_.type===Wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===bl||_.magFilter===Aa||_.magFilter===Ii||_.minFilter===dn||_.minFilter===bl||_.minFilter===Aa||_.minFilter===Ii)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,He[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,He[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,He[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Et[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,We[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jt||_.minFilter!==Aa&&_.minFilter!==Ii||_.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function rt(A,_){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",F),B(_));let re=_.source,ee=f.get(re);ee===void 0&&(ee={},f.set(re,ee));let ue=K(_);if(ue!==A.__cacheKey){ee[ue]===void 0&&(ee[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[ue].usedTimes++;let _e=ee[A.__cacheKey];_e!==void 0&&(ee[A.__cacheKey].usedTimes--,_e.usedTimes===0&&W(_)),A.__cacheKey=ue,A.__webglTexture=ee[ue].texture}return k}function ne(A,_,k){return Math.floor(Math.floor(A/k)/_)}function fe(A,_,k,re){let ue=A.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,re,_.data);else{ue.sort((L,$)=>L.start-$.start);let _e=0;for(let L=1;L<ue.length;L++){let $=ue[_e],Z=ue[L],me=$.start+$.count,le=ne(Z.start,_.width,4),de=ne($.start,_.width,4);Z.start<=me+1&&le===de&&ne(Z.start+Z.count-1,_.width,4)===le?$.count=Math.max($.count,Z.start+Z.count-$.start):(++_e,ue[_e]=Z)}ue.length=_e+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let L=0,$=ue.length;L<$;L++){let Z=ue[L],me=Math.floor(Z.start/4),le=Math.ceil(Z.count/4),de=me%_.width,Fe=Math.floor(me/_.width),je=le,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,de,Fe,je,oe,k,re,_.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function he(A,_,k){let re=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(re=n.TEXTURE_3D);let ee=rt(A,_),ue=_.source;t.bindTexture(re,A.__webglTexture,n.TEXTURE0+k);let _e=i.get(ue);if(ue.version!==_e.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let oe=ht.getPrimaries(ht.workingColorSpace),Be=_.colorSpace===Li?null:ht.getPrimaries(_.colorSpace),Qe=_.colorSpace===Li||oe===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let j=y(_.image,!1,s.maxTextureSize);j=ke(_,j);let pe=r.convert(_.format,_.colorSpace),L=r.convert(_.type),$=w(_.internalFormat,pe,L,_.normalized,_.colorSpace,_.isVideoTexture);tt(re,_);let Z,me=_.mipmaps,le=_.isVideoTexture!==!0,de=_e.__version===void 0||ee===!0,Fe=ue.dataReady,je=E(_,j);if(_.isDepthTexture)$=x(_.format===Pi,_.type),de&&(le?t.texStorage2D(n.TEXTURE_2D,1,$,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,$,j.width,j.height,0,pe,L,null));else if(_.isDataTexture)if(me.length>0){le&&de&&t.texStorage2D(n.TEXTURE_2D,je,$,me[0].width,me[0].height);for(let oe=0,Be=me.length;oe<Be;oe++)Z=me[oe],le?Fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Z.width,Z.height,pe,L,Z.data):t.texImage2D(n.TEXTURE_2D,oe,$,Z.width,Z.height,0,pe,L,Z.data);_.generateMipmaps=!1}else le?(de&&t.texStorage2D(n.TEXTURE_2D,je,$,j.width,j.height),Fe&&fe(_,j,pe,L)):t.texImage2D(n.TEXTURE_2D,0,$,j.width,j.height,0,pe,L,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){le&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,$,me[0].width,me[0].height,j.depth);for(let oe=0,Be=me.length;oe<Be;oe++)if(Z=me[oe],_.format!==qn)if(pe!==null)if(le){if(Fe)if(_.layerUpdates.size>0){let Qe=au(Z.width,Z.height,_.format,_.type);for(let be of _.layerUpdates){let xt=Z.data.subarray(be*Qe/Z.data.BYTES_PER_ELEMENT,(be+1)*Qe/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,be,Z.width,Z.height,1,pe,xt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,j.depth,pe,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,$,Z.width,Z.height,j.depth,0,Z.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,j.depth,pe,L,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,$,Z.width,Z.height,j.depth,0,pe,L,Z.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{le&&de&&t.texStorage2D(n.TEXTURE_2D,je,$,me[0].width,me[0].height);for(let oe=0,Be=me.length;oe<Be;oe++)Z=me[oe],_.format!==qn?pe!==null?le?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Z.width,Z.height,pe,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,$,Z.width,Z.height,0,Z.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Z.width,Z.height,pe,L,Z.data):t.texImage2D(n.TEXTURE_2D,oe,$,Z.width,Z.height,0,pe,L,Z.data)}else if(_.isDataArrayTexture)if(le){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,$,j.width,j.height,j.depth),Fe)if(_.layerUpdates.size>0){let oe=au(j.width,j.height,_.format,_.type);for(let Be of _.layerUpdates){let Qe=j.data.subarray(Be*oe/j.data.BYTES_PER_ELEMENT,(Be+1)*oe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Be,j.width,j.height,1,pe,L,Qe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,L,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$,j.width,j.height,j.depth,0,pe,L,j.data);else if(_.isData3DTexture)le?(de&&t.texStorage3D(n.TEXTURE_3D,je,$,j.width,j.height,j.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,L,j.data)):t.texImage3D(n.TEXTURE_3D,0,$,j.width,j.height,j.depth,0,pe,L,j.data);else if(_.isFramebufferTexture){if(de)if(le)t.texStorage2D(n.TEXTURE_2D,je,$,j.width,j.height);else{let oe=j.width,Be=j.height;for(let Qe=0;Qe<je;Qe++)t.texImage2D(n.TEXTURE_2D,Qe,$,oe,Be,0,pe,L,null),oe>>=1,Be>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),j.parentNode!==oe){oe.appendChild(j),d.add(_),oe.onpaint=Be=>{let Qe=Be.changedElements;for(let be of d)Qe.includes(be.image)&&(be.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let Qe=n.RGBA,be=n.RGBA,xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Qe,be,xt,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(me.length>0){if(le&&de){let oe=qe(me[0]);t.texStorage2D(n.TEXTURE_2D,je,$,oe.width,oe.height)}for(let oe=0,Be=me.length;oe<Be;oe++)Z=me[oe],le?Fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,pe,L,Z):t.texImage2D(n.TEXTURE_2D,oe,$,pe,L,Z);_.generateMipmaps=!1}else if(le){if(de){let oe=qe(j);t.texStorage2D(n.TEXTURE_2D,je,$,oe.width,oe.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,L,j)}else t.texImage2D(n.TEXTURE_2D,0,$,pe,L,j);T(_)&&_.mipmapsAutoUpdate===!0&&v(re),_e.__version=ue.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function we(A,_,k){if(_.image.length!==6)return;let re=rt(A,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);let ue=i.get(ee);if(ee.version!==ue.__version||re===!0){t.activeTexture(n.TEXTURE0+k);let _e=ht.getPrimaries(ht.workingColorSpace),Q=_.colorSpace===Li?null:ht.getPrimaries(_.colorSpace),j=_.colorSpace===Li||_e===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let pe=_.isCompressedTexture||_.image[0].isCompressedTexture,L=_.image[0]&&_.image[0].isDataTexture,$=[];for(let be=0;be<6;be++)!pe&&!L?$[be]=y(_.image[be],!0,s.maxCubemapSize):$[be]=L?_.image[be].image:_.image[be],$[be]=ke(_,$[be]);let Z=$[0],me=r.convert(_.format,_.colorSpace),le=r.convert(_.type),de=w(_.internalFormat,me,le,_.normalized,_.colorSpace),Fe=_.isVideoTexture!==!0,je=ue.__version===void 0||re===!0,oe=ee.dataReady,Be=E(_,Z);tt(n.TEXTURE_CUBE_MAP,_);let Qe;if(_.isDepthTexture){if(de=x(_.format===Pi,_.type),je)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,de,Z.width,Z.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,Z.width,Z.height,0,me,le,null)}else if(pe){Fe&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,de,Z.width,Z.height);for(let be=0;be<6;be++){Qe=$[be].mipmaps;for(let xt=0;xt<Qe.length;xt++){let Wt=Qe[xt];_.format!==qn?me!==null?Fe?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt,0,0,Wt.width,Wt.height,me,Wt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt,de,Wt.width,Wt.height,0,Wt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt,0,0,Wt.width,Wt.height,me,le,Wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt,de,Wt.width,Wt.height,0,me,le,Wt.data)}}}else{if(Qe=_.mipmaps,Fe&&je){Qe.length>0&&Be++;let be=qe($[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,de,be.width,be.height)}for(let be=0;be<6;be++)if(L){Fe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$[be].width,$[be].height,me,le,$[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,$[be].width,$[be].height,0,me,le,$[be].data);for(let xt=0;xt<Qe.length;xt++){let Fi=Qe[xt].image[be].image;Fe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt+1,0,0,Fi.width,Fi.height,me,le,Fi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt+1,de,Fi.width,Fi.height,0,me,le,Fi.data)}}else{Fe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,me,le,$[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,me,le,$[be]);for(let xt=0;xt<Qe.length;xt++){let Wt=Qe[xt];Fe?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt+1,0,0,me,le,Wt.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,xt+1,de,me,le,Wt.image[be])}}}T(_)&&_.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),ue.__version=ee.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ve(A,_,k,re,ee,ue){let _e=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),j=w(k.internalFormat,_e,Q,k.normalized,k.colorSpace),pe=i.get(_),L=i.get(k);if(L.__renderTarget=_,!pe.__hasExternalTextures){let $=Math.max(1,_.width>>ue),Z=Math.max(1,_.height>>ue);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ue,j,$,Z,_.depth,0,_e,Q,null):t.texImage2D(ee,ue,j,$,Z,0,_e,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),xe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ee,L.__webglTexture,0,yt(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ee,L.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(A,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){let re=_.depthTexture,ee=re&&re.isDepthTexture?re.type:null,ue=x(_.stencilBuffer,ee),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(_),ue,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(_),ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,A)}else{let re=_.textures;for(let ee=0;ee<re.length;ee++){let ue=re[ee],_e=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),j=w(ue.internalFormat,_e,Q,ue.normalized,ue.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(_),j,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(_),j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(A,_,k){let re=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(_.depthTexture);ee.__renderTarget=_;let ue=re?_.depthTexture.image[0]:_.depthTexture.image;(!ee.__webglTexture||ue.width!==_.width||ue.height!==_.height)&&(ue.width=_.width,ue.height=_.height,_.depthTexture.needsUpdate=!0),re?Me(_.depthTexture,0):Se(_.depthTexture,0);let _e=ee.__webglTexture,Q=yt(_),j=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,pe=_.depthTexture.format===Pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===wi)xe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,j,_e,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,pe,j,_e,0);else if(_.depthTexture.format===Pi)xe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,j,_e,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,pe,j,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(A){let _=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let re=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),re){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,re.removeEventListener("dispose",ee)};re.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=re}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let re=0;re<6;re++)Ue(_.__webglFramebuffer[re],A,re);else A.texture.mipmaps.length>0?Ue(_.__webglFramebuffer[0],A,0):Ue(_.__webglFramebuffer,A,0);else if(k){_.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[re]),_.__webglDepthbuffer[re]===void 0)_.__webglDepthbuffer[re]=n.createRenderbuffer(),Ke(_.__webglDepthbuffer[re],A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ue)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ke(_.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(A,_,k){let re=i.get(A);_!==void 0&&ve(re.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&at(A)}function ft(A){let _=A.texture,k=i.get(A),re=i.get(_);A.addEventListener("dispose",z),B(A);let ee=A.textures,ue=A.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=_.version,a.memory.textures++),ue){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let j=0;j<_.mipmaps.length;j++)k.__webglFramebuffer[Q][j]=n.createFramebuffer()}else k.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(_.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)k.__webglFramebuffer[Q]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(_e)for(let Q=0,j=ee.length;Q<j;Q++){let pe=i.get(ee[Q]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&xe(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<ee.length;Q++){let j=ee[Q];k.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);let pe=r.convert(j.format,j.colorSpace),L=r.convert(j.type),$=w(j.internalFormat,pe,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),Z=yt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,$,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),tt(n.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)ve(k.__webglFramebuffer[Q][j],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else ve(k.__webglFramebuffer[Q],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);T(_)?v(n.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let Q=0,j=ee.length;Q<j;Q++){let pe=ee[Q],L=i.get(pe),$=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,L.__webglTexture),tt($,pe),ve(k.__webglFramebuffer,A,pe,n.COLOR_ATTACHMENT0+Q,$,0),T(pe)&&v($)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,re.__webglTexture),tt(Q,_),_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)ve(k.__webglFramebuffer[j],A,_,n.COLOR_ATTACHMENT0,Q,j);else ve(k.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,Q,0);T(_)?v(Q):_.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&at(A)}function O(A){let _=A.textures;for(let k=0,re=_.length;k<re;k++){let ee=_[k];if(T(ee)&&ee.mipmapsAutoUpdate===!0){let ue=R(A),_e=i.get(ee).__webglTexture;t.bindTexture(ue,_e),v(ue),t.unbindTexture()}}}let Nt=[];function it(A){if(A.samples>0){if(xe(A)===!1){let _=A.textures,k=A.width,re=A.height,ee=n.COLOR_BUFFER_BIT,ue=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(A),Q=_.length>1;if(Q)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let L=i.get(_[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,k,re,0,0,k,re,ee,n.NEAREST),l===!0&&(Nt.length=0,Nt.push(n.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Nt.push(ue),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let L=i.get(_[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function yt(A){return Math.min(s.maxSamples,A.samples)}function xe(A){let _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Dt(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function ke(A,_){let k=A.colorSpace,re=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Kr&&k!==Li&&(ht.getTransfer(k)===gt?(re!==qn||ee!==xn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",k)),_}function qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ve,this.resetTextureUnits=te,this.getTextureUnits=ie,this.setTextureUnits=Ae,this.setTexture2D=Se,this.setTexture2DArray=Re,this.setTexture3D=ze,this.setTextureCube=Me,this.rebindTextures=ot,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe,this.dispose=V}function zv(n,e){function t(i,s=Li){let r,a=ht.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===Tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return n.BYTE;if(i===kh)return n.SHORT;if(i===br)return n.UNSIGNED_SHORT;if(i===El)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===qn)return n.RGBA;if(i===wi)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===es)return n.RG;if(i===Rl)return n.RG_INTEGER;if(i===Cl)return n.RGBA_INTEGER;if(i===Ra||i===Ca||i===Ia||i===Pa)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Pl||i===Ll||i===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===La||i===zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nl||i===Ul)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ol)return r.COMPRESSED_R11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===La)return r.COMPRESSED_RG11_EAC;if(i===zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hl||i===kl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===Jl||i===Zl||i===Kl||i===Ql||i===jl||i===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===tc||i===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ec)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ic||i===sc||i===Da||i===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ai({vertexShader:Hv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Su=class extends $n{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,S=typeof XRWebGLBinding<"u",p=new vu,g={},y=t.getContextAttributes(),T=null,v=null,R=[],w=[],x=new ae,E=null,B=null,I=new gn;I.viewport=new Ct;let F=new gn;F.viewport=new Ct;let z=[I,F],q=new yl,N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Se=R[K];return Se===void 0&&(Se=new ar,R[K]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(K){let Se=R[K];return Se===void 0&&(Se=new ar,R[K]=Se),Se.getGripSpace()},this.getHand=function(K){let Se=R[K];return Se===void 0&&(Se=new ar,R[K]=Se),Se.getHandSpace()};function J(K){let Se=w.indexOf(K.inputSource);if(Se===-1)return;let Re=R[Se];Re!==void 0&&(Re.update(K.inputSource,K.frame,c||a),Re.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",se);for(let K=0;K<R.length;K++){let Se=w[K];Se!==null&&(w[K]=null,R[K].disconnect(Se))}N=null,V=null,p.reset();for(let K in g)delete g[K];if(e.setRenderTarget(T),f=null,u=null,d=null,s=null,v=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),B!==null){let K=B.camera;K.fov=B.fov,K.zoom=B.zoom,K.updateProjectionMatrix(),B=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",W),s.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ze=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=y.stencil?Pi:wi,ze=y.stencil?Es:Vn);let He={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new bn(u.textureWidth,u.textureHeight,{format:qn,type:xn,depthTexture:new Ci(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new bn(f.framebufferWidth,f.framebufferHeight,{format:qn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(K){for(let Se=0;Se<K.removed.length;Se++){let Re=K.removed[Se],ze=w.indexOf(Re);ze>=0&&(w[ze]=null,R[ze].disconnect(Re))}for(let Se=0;Se<K.added.length;Se++){let Re=K.added[Se],ze=w.indexOf(Re);if(ze===-1){for(let He=0;He<R.length;He++)if(He>=w.length){w.push(Re),ze=He;break}else if(w[He]===null){w[He]=Re,ze=He;break}if(ze===-1)break}let Me=R[ze];Me&&Me.connect(Re)}}function Y(K,Se){Se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Se=K.near,Re=K.far;p.texture!==null&&(p.depthNear>0&&(Se=p.depthNear),p.depthFar>0&&(Re=p.depthFar)),q.near=F.near=I.near=Se,q.far=F.far=I.far=Re,(N!==q.near||V!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),N=q.near,V=q.far),q.layers.mask=K.layers.mask|6,I.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;let ze=K.parent,Me=q.cameras;Y(q,ze);for(let He=0;He<Me.length;He++)Y(Me[He],ze);q.projectionMatrix.copy(I.projectionMatrix),q.projectionMatrixInverse.copy(I.projectionMatrixInverse),B===null&&K.isPerspectiveCamera&&(B={camera:K,fov:K.fov,zoom:K.zoom}),te(K,q,ze)};function te(K,Se,Re){Re===null?K.matrix.copy(Se.matrixWorld):(K.matrix.copy(Re.matrixWorld),K.matrix.invert(),K.matrix.multiply(Se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Se.projectionMatrix),K.projectionMatrixInverse.copy(Se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ir*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(K){return g[K]};let ie=null;function Ae(K,Se){if(h=Se.getViewerPose(c||a),m=Se,h!==null){let Re=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ze=!1;Re.length!==q.cameras.length&&(q.cameras.length=0,ze=!0);for(let We=0;We<Re.length;We++){let tt=Re[We],rt=null;if(f!==null)rt=f.getViewport(tt);else{let fe=d.getViewSubImage(u,tt);rt=fe.viewport,We===0&&(e.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(v))}let ne=z[We];ne===void 0&&(ne=new gn,ne.layers.enable(We),ne.viewport=new Ct,z[We]=ne),ne.matrix.fromArray(tt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(tt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(rt.x,rt.y,rt.width,rt.height),We===0&&(q.matrix.copy(ne.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ze===!0&&q.cameras.push(ne)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let We=d.getDepthInformation(Re[0]);We&&We.isValid&&We.texture&&p.init(We,s.renderState)}if(Me&&Me.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<Re.length;We++){let tt=Re[We].camera;if(tt){let rt=g[tt];rt||(rt=new oa,g[tt]=rt);let ne=d.getCameraImage(tt);rt.sourceTexture=ne}}}}for(let Re=0;Re<R.length;Re++){let ze=w[Re],Me=R[Re];ze!==null&&Me!==void 0&&Me.update(ze,Se,c||a)}ie&&ie(K,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),m=null}let Ve=new op;Ve.setAnimationLoop(Ae),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}},Gv=new pt,xp=new Ye;xp.set(-1,0,0,0,1,0,0,0,1);function Vv(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,iu(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,T,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),S(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,y,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===fn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===fn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),T=y.envMap,v=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(xp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function S(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wv(n,e,t,i){let s={},r={};function a(y,T){let v=T.program;i.uniformBlockBinding(y,v,s[y.id])}function o(y,T){let v=s[y.id];v===void 0&&(m(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",p));let R=T.program;i.updateUBOMapping(y,R);let w=e.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let T=n.createBuffer(),v=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,v,R),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(y){let T=s[y.id],v=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,x=v.length;w<x;w++){let E=v[w];if(Array.isArray(E))for(let B=0,I=E.length;B<I;B++)h(E[B],w,B,R);else h(E,w,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,T,v,R){if(u(y,T,v,R)===!0){let w=y.__offset,x=y.value;if(Array.isArray(x)){let E=0;for(let B=0;B<x.length;B++){let I=x[B],F=S(I,!0);d(I,y.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,y.__data)}}function d(y,T,v){typeof y=="number"||typeof y=="boolean"?T[v]=y:y.isMatrix3?(T[v]=y.elements[0],T[v+1]=y.elements[1],T[v+2]=y.elements[2],T[v+3]=0,T[v+4]=y.elements[3],T[v+5]=y.elements[4],T[v+6]=y.elements[5],T[v+7]=0,T[v+8]=y.elements[6],T[v+9]=y.elements[7],T[v+10]=y.elements[8],T[v+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-v),v):y.toArray(T,v)}function u(y,T,v,R){let w=y.value,x=T+"_"+v;if(Array.isArray(w)){R[x]===void 0&&(R[x]=[]);let E=R[x],B=!1;for(let I=0;I<w.length;I++)f(w[I],E,I)===!0&&(B=!0);return B}return f(w,R,x)}function f(y,T,v){if(T[v]===void 0)return typeof y=="number"||typeof y=="boolean"?T[v]=y:ArrayBuffer.isView(y)?T[v]=y.slice():T[v]=y.clone(),!0;{let R=T[v];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return T[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(y){let T=y.uniforms,v=0,R=16;for(let x=0,E=T.length;x<E;x++){let B=Array.isArray(T[x])?T[x]:[T[x]];for(let I=0,F=B.length;I<F;I++){let z=B[I],q=Array.isArray(z.value)?z.value:[z.value],N=Array.isArray(T[x])||Array.isArray(z.value),V=v;for(let W=0,se=q.length;W<se;W++){let Y=q[W],te=S(Y,N),ie=v%R,Ae=ie%te.boundary,Ve=ie+Ae;v+=Ae,Ve!==0&&R-Ve<te.storage&&(v+=R-Ve),W===0&&(V=v),v+=te.storage}let J=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new J((v-V)/Float32Array.BYTES_PER_ELEMENT),z.__offset=V}}let w=v%R;return w>0&&(v+=R-w),y.__size=v,y.__cache={},this}function S(y,T){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let T=y.target;T.removeEventListener("dispose",p),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}var Xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function qv(){return oi===null&&(oi=new Zo(Xv,16,16,es,Xn),oi.name="DFG_LUT",oi.minFilter=dn,oi.magFilter=dn,oi.wrapS=Qn,oi.wrapT=Qn,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var uc=class{constructor(e={}){let{canvas:t=Af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let S=f,p=new Set([Cl,Rl,Al]),g=new Set([xn,Vn,br,Es,Tl,wl]),y=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},R=null,w=null,x=[],E=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,z=null,q=null,N=null,V=null;this._outputColorSpace=nn;let J=0,W=0,se=null,Y=-1,te=null,ie=new Ct,Ae=new Ct,Ve=null,K=new Je(0),Se=0,Re=t.width,ze=t.height,Me=1,He=null,Et=null,We=new Ct(0,0,Re,ze),tt=new Ct(0,0,Re,ze),rt=!1,ne=new Wi,fe=new Ko,he=!1,we=!1,ve=new pt,Ke=new C,Ue=new Ct,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function ft(){return se===null?Me:1}let O=i;function Nt(M,U){return t.getContext(M,U)}let it,yt,xe,Dt,ke,qe,A,_,k,re,ee,ue,_e,Q,j,pe,L,$,Z,me,le,de,Fe;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){let U="webgl2";if(O=Nt(U,M),O===null)throw Nt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(M){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Xe("WebGLRenderer: "+M.message),M}function je(){it=new iy(O),it.init(),le=new zv(O,it),yt=new q_(O,it,e,le),xe=new Ov(O,it),yt.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),q=O.createFramebuffer(),N=O.createFramebuffer(),V=O.createFramebuffer(),Dt=new ay(O),ke=new bv,qe=new Bv(O,it,xe,ke,yt,le,Dt),A=new ny(I),_=new lg(O),de=new W_(O,_),k=new sy(O,_,Dt,de),re=new ly(O,k,_,de,Dt),$=new oy(O,yt,qe),j=new Y_(ke),ee=new Mv(I,A,it,yt,de,j),ue=new Vv(I,ke),_e=new Tv,Q=new Pv(it),L=new V_(I,A,xe,re,m,l),pe=new Fv(I,re,yt),Fe=new Wv(O,Dt,yt,xe),Z=new X_(O,it,Dt),me=new ry(O,it,Dt),Dt.programs=ee.programs,I.capabilities=yt,I.extensions=it,I.properties=ke,I.renderLists=_e,I.shadowMap=pe,I.state=xe,I.info=Dt}S!==xn&&(B=new hy(S,t.width,t.height,o,s,r));let oe=new Su(I,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(M){M!==void 0&&(Me=M,this.setSize(Re,ze,!1))},this.getSize=function(M){return M.set(Re,ze)},this.setSize=function(M,U,X=!0){if(oe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=M,ze=U,t.width=Math.floor(M*Me),t.height=Math.floor(U*Me),X===!0&&(t.style.width=M+"px",t.style.height=U+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Re*Me,ze*Me).floor()},this.setDrawingBufferSize=function(M,U,X){Re=M,ze=U,Me=X,t.width=Math.floor(M*X),t.height=Math.floor(U*X),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(S===xn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ie)},this.getViewport=function(M){return M.copy(We)},this.setViewport=function(M,U,X,H){M.isVector4?We.set(M.x,M.y,M.z,M.w):We.set(M,U,X,H),xe.viewport(ie.copy(We).multiplyScalar(ft()).round())},this.getScissor=function(M){return M.copy(tt)},this.setScissor=function(M,U,X,H){M.isVector4?tt.set(M.x,M.y,M.z,M.w):tt.set(M,U,X,H),xe.scissor(Ae.copy(tt).multiplyScalar(ft()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){xe.setScissorTest(rt=M)},this.setOpaqueSort=function(M){He=M},this.setTransparentSort=function(M){Et=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,X=!0){let H=0;if(M){let G=!1;if(se!==null){let ye=se.texture.format;G=p.has(ye)}if(G){let ye=se.texture.type,Ce=g.has(ye),ge=L.getClearColor(),Te=L.getClearAlpha(),De=ge.r,Ze=ge.g,lt=ge.b;Ce?(y[0]=De,y[1]=Ze,y[2]=lt,y[3]=Te,O.clearBufferuiv(O.COLOR,0,y)):(T[0]=De,T[1]=Ze,T[2]=lt,T[3]=Te,O.clearBufferiv(O.COLOR,0,T))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),L.dispose(),_e.dispose(),Q.dispose(),qe.dispose(),ke.dispose(),A.dispose(),re.dispose(),k.dispose(),de.dispose(),Fe.dispose(),ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Zu),oe.removeEventListener("sessionend",Ku),cs.stop()};function Be(M){M.preventDefault(),jr("WebGLRenderer: Context Lost."),F=!0}function Qe(){jr("WebGLRenderer: Context Restored."),F=!1;let M=Dt.autoReset,U=pe.enabled,X=pe.autoUpdate,H=pe.needsUpdate,G=pe.type;je(),Dt.autoReset=M,pe.enabled=U,pe.autoUpdate=X,pe.needsUpdate=H,pe.type=G}function be(M){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xt(M){let U=M.target;U.removeEventListener("dispose",xt),Wt(U)}function Wt(M){Fi(M),ke.remove(M)}function Fi(M){let U=ke.get(M).programs;U!==void 0&&(U.forEach(function(X){ee.releaseProgram(X)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,X,H,G,ye){U===null&&(U=at);let Ce=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=Lm(M,U,X,H,G);xe.setMaterial(H,Ce);let Te=X.index,De=1;if(H.wireframe===!0){if(Te=k.getWireframeAttribute(X),Te===void 0)return;De=2}let Ze=X.drawRange,lt=X.attributes.position,Ie=Ze.start*De,ct=(Ze.start+Ze.count)*De;ye!==null&&(Ie=Math.max(Ie,ye.start*De),ct=Math.min(ct,(ye.start+ye.count)*De)),Te!==null?(Ie=Math.max(Ie,0),ct=Math.min(ct,Te.count)):lt!=null&&(Ie=Math.max(Ie,0),ct=Math.min(ct,lt.count));let Ut=ct-Ie;if(Ut<0||Ut===1/0)return;de.setup(G,H,ge,X,Te);let Mt,vt=Z;if(Te!==null&&(Mt=_.get(Te),vt=me,vt.setIndex(Mt)),G.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*ft()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(G.isLine){let jt=H.linewidth;jt===void 0&&(jt=1),xe.setLineWidth(jt*ft()),G.isLineSegments?vt.setMode(O.LINES):G.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else G.isPoints?vt.setMode(O.POINTS):G.isSprite&&vt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(it.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let jt=G._multiDrawStarts,Pe=G._multiDrawCounts,hn=G._multiDrawCount,mt=Te?_.get(Te).bytesPerElement:1,hs=ke.get(H).currentProgram.getUniforms();for(let $t=0;$t<hn;$t++)hs.setValue(O,"_gl_DrawID",$t),vt.render(jt[$t]/mt,Pe[$t])}else if(G.isInstancedMesh)vt.renderInstances(Ie,Ut,G.count);else if(X.isInstancedBufferGeometry){let jt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pe=Math.min(X.instanceCount,jt);vt.renderInstances(Ie,Ut,Pe)}else vt.render(Ie,Ut)};function Ju(M,U,X,H){z!==null&&M.isNodeMaterial&&z.setObject(H,M),he===!0&&j.setState(M,X,!1),M.transparent===!0&&M.side===wn&&M.forceSinglePass===!1?(M.side=fn,M.needsUpdate=!0,Nr(M,U,H),M.side=$i,M.needsUpdate=!0,Nr(M,U,H),M.side=wn):Nr(M,U,H)}this.compile=function(M,U,X=null){X===null&&(X=M),z!==null&&z.renderStart(M,U,X),w=Q.get(X),w.init(U),E.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),M!==X&&M.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),we=this.localClippingEnabled,he=j.init(this.clippingPlanes,we),he===!0&&j.setGlobalState(this.clippingPlanes,U),z!==null&&pe.render(w.state.shadowsArray,X,U);let H=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ye=G.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){let ge=ye[Ce];Ju(ge,X,U,G),H.add(ge)}else Ju(ye,X,U,G),H.add(ye)}),w=E.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(M,U,X=null){let H=this.compile(M,U,X);return new Promise(G=>{function ye(){if(H.forEach(function(Ce){let Te=ke.get(Ce).currentProgram;(Te===void 0||Te.isReady())&&H.delete(Ce)}),H.size===0){G(M);return}setTimeout(ye,10)}it.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Bc=null;function Im(M){Bc&&Bc(M)}function Zu(){cs.stop()}function Ku(){cs.start()}let cs=new op;cs.setAnimationLoop(Im),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(M){Bc=M,oe.setAnimationLoop(M),M===null?cs.stop():cs.start()},oe.addEventListener("sessionstart",Zu),oe.addEventListener("sessionend",Ku),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(M,U);let X=oe.enabled===!0&&oe.isPresenting===!0,H=B!==null&&(se===null||X)&&B.begin(I,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,se),w=Q.get(M,E.length),w.init(U),w.state.textureUnits=qe.getTextureUnits(),E.push(w),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?fe.setFromArrayCamera(U):ne.setFromProjectionMatrix(ve,Ln,U.reversedDepth),we=this.localClippingEnabled,he=j.init(this.clippingPlanes,we),R=_e.get(M,x.length),R.init(),x.push(R),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Ce=I.xr.getDepthSensingMesh();Ce!==null&&zc(Ce,U,-1/0,I.sortObjects)}zc(M,U,0,I.sortObjects),R.finish(),z!==null&&z.updateLights(w.state.lightsArray),I.sortObjects===!0&&R.sort(He,Et),ot=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ot&&L.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),he===!0&&j.beginShadows();let G=w.state.shadowsArray;if(pe.render(G,M,U),he===!0&&j.endShadows(),(H&&B.hasRenderPass())===!1){let Ce=R.opaque,ge=R.transmissive;if(w.setupLights(),U.isArrayCamera){let Te=U.cameras;if(ge.length>0)for(let De=0,Ze=Te.length;De<Ze;De++){let lt=Te[De];ju(Ce,ge,M,lt)}ot&&L.render(M);for(let De=0,Ze=Te.length;De<Ze;De++){let lt=Te[De];Qu(R,M,lt,lt.viewport)}}else ge.length>0&&ju(Ce,ge,M,U),ot&&L.render(M),Qu(R,M,U)}se!==null&&W===0&&(qe.updateMultisampleRenderTarget(se),qe.updateRenderTargetMipmap(se)),H&&B.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),de.resetDefaultState(),Y=-1,te=null,E.pop(),E.length>0?(w=E[E.length-1],qe.setTextureUnits(w.state.textureUnits),he===!0&&j.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,z!==null&&z.renderEnd()};function zc(M,U,X,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){let Ce=U.isArrayCamera?fe:ne;if(!M.frustumCulled||M.intersectsFrustum(Ce)){H&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ve);let ge=re.update(M),Te=M.material;Te.visible&&R.push(M,ge,Te,X,Ue.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let Ce=U.isArrayCamera?fe:ne;if(!M.frustumCulled||M.intersectsFrustum(Ce)){let ge=re.update(M),Te=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(ve)),Array.isArray(Te)){let De=ge.groups;for(let Ze=0,lt=De.length;Ze<lt;Ze++){let Ie=De[Ze],ct=Te[Ie.materialIndex];ct&&ct.visible&&R.push(M,ge,ct,X,Ue.z,Ie,U)}}else Te.visible&&R.push(M,ge,Te,X,Ue.z,null,U)}}}let ye=M.children;for(let Ce=0,ge=ye.length;Ce<ge;Ce++)zc(ye[Ce],U,X,H)}function Qu(M,U,X,H){let{opaque:G,transmissive:ye,transparent:Ce}=M;w.setupLightsView(X),he===!0&&j.setGlobalState(I.clippingPlanes,X),H&&xe.viewport(ie.copy(H)),G.length>0&&to(G,U,X),ye.length>0&&to(ye,U,X),Ce.length>0&&to(Ce,U,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ju(M,U,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Ie=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:Ie?Xn:xn,minFilter:Ii,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let ye=w.state.transmissionRenderTarget[H.id],Ce=H.viewport||ie;ye.setSize(Ce.z*I.transmissionResolutionScale,Ce.w*I.transmissionResolutionScale);let ge=I.getRenderTarget(),Te=I.getActiveCubeFace(),De=I.getActiveMipmapLevel();I.setRenderTarget(ye),I.getClearColor(K),Se=I.getClearAlpha(),Se<1&&I.setClearColor(16777215,.5),I.clear(),ot&&L.render(X);let Ze=I.toneMapping;I.toneMapping=Dn;let lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),he===!0&&j.setGlobalState(I.clippingPlanes,H),to(M,X,H),qe.updateMultisampleRenderTarget(ye),qe.updateRenderTargetMipmap(ye),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ct=0,Ut=U.length;ct<Ut;ct++){let Mt=U[ct],{object:vt,geometry:jt,material:Pe,group:hn}=Mt;if(Pe.side===wn&&vt.layers.test(H.layers)){let mt=Pe.side;Pe.side=fn,Pe.needsUpdate=!0,$u(vt,X,H,jt,Pe,hn),Pe.side=mt,Pe.needsUpdate=!0,Ie=!0}}Ie===!0&&(qe.updateMultisampleRenderTarget(ye),qe.updateRenderTargetMipmap(ye))}I.setRenderTarget(ge,Te,De),I.setClearColor(K,Se),lt!==void 0&&(H.viewport=lt),I.toneMapping=Ze}function to(M,U,X){let H=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ye=M.length;G<ye;G++){let Ce=M[G],{object:ge,geometry:Te,group:De}=Ce,Ze=Ce.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),ge.layers.test(X.layers)&&$u(ge,U,X,Te,Ze,De)}}function $u(M,U,X,H,G,ye){z!==null&&G.isNodeMaterial&&z.setObject(M,G),M.onBeforeRender(I,U,X,H,G,ye),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(I,U,X,H,M,ye),G.transparent===!0&&G.side===wn&&G.forceSinglePass===!1?(G.side=fn,G.needsUpdate=!0,I.renderBufferDirect(X,U,H,G,M,ye),G.side=$i,G.needsUpdate=!0,I.renderBufferDirect(X,U,H,G,M,ye),G.side=wn):I.renderBufferDirect(X,U,H,G,M,ye),M.onAfterRender(I,U,X,H,G,ye)}function ed(M){let U=0;for(let X of M)X.texture!==null&&U++;return U}function Nr(M,U,X){U.isScene!==!0&&(U=at);let H=ke.get(M),G=w.state.lights,ye=w.state.shadowsArray,Ce=G.state.version,ge=ee.getParameters(M,G.state,ye,U,X,w.state.lightProbeGridArray),Te=ee.getProgramCacheKey(ge),De=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Ze=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=A.get(M.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",xt),De=new Map,H.programs=De,H.programVariants=new Map);let lt=De.get(Te);if(lt!==void 0){if(H.currentProgram===lt&&H.lightsStateVersion===Ce)return nd(M,ge),lt}else ge.uniforms=ee.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,X,ge),M.onBeforeCompile(ge,I),lt=ee.acquireProgram(ge,Te),De.set(Te,lt),H.uniforms=ge.uniforms;let Ie=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=j.uniform),nd(M,ge),H.needsLights=Nm(M),H.lightsStateVersion=Ce,H.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.sunLights.value=G.state.sun,Ie.sunLightShadows.value=G.state.sunShadow,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.sunShadowMatrix.value=G.state.sunShadowMatrix,Ie.sunShadowCascade.value=G.state.sunShadowCascade,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),H.numLightProbeGrids=ed(w.state.lightProbeGridArray),H.currentProgram=lt,H.uniformsList=null,lt}function Pm(M,U,X,H,G){let ye=ke.get(M),Ce=ye.currentProgram.id+","+H+","+G,ge=ye.programVariants.get(Ce);return ge===void 0?(ge=Nr(M,U,X),ye.programVariants.set(Ce,ge)):(ye.currentProgram=ge,ye.uniformsList=null,ye.outputColorSpace=H,ye.toneMapping=G),ge}function td(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Er.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function nd(M,U){let X=ke.get(M);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Lm(M,U,X,H,G){U.isScene!==!0&&(U=at),qe.resetTextureUnits();let ye=U.fog,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,ge=se===null?I.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ht.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,De=A.get(H.envMap||Ce,Te),Ze=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,lt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!X.morphAttributes.position,ct=!!X.morphAttributes.normal,Ut=!!X.morphAttributes.color,Mt=Dn;H.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Mt=I.toneMapping);let vt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,jt=vt!==void 0?vt.length:0,Pe=ke.get(H),hn=w.state.lights;if(he===!0&&(we===!0||M!==te)){let It=M===te&&H.id===Y;j.setState(H,M,It)}let mt=!1,hs=!1;H.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==hn.state.version||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==De||H.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==j.numPlanes||Pe.numIntersection!==j.numIntersection)||Pe.vertexAlphas!==Ze||Pe.vertexTangents!==lt||Pe.morphTargets!==Ie||Pe.morphNormals!==ct||Pe.morphColors!==Ut||Pe.morphTargetsCount!==jt||Pe.numLightProbeGrids!==ed(w.state.lightProbeGridArray)?mt=!0:(Pe.outputColorSpace!==ge||Pe.toneMapping!==Mt)&&(hs=!0):(mt=!0,Pe.__version=H.version);let $t=Pe.currentProgram;(mt===!0||hs===!0)&&($t=hs===!0?Pm(H,U,G,ge,Mt):Nr(H,U,G),z&&H.isNodeMaterial&&z.onUpdateProgram(H,$t,Pe));let no=!1,Oi=!1,us=!1,dt=$t.getUniforms(),Kt=Pe.uniforms;if(xe.useProgram($t.program)&&(no=!0,Oi=!0,us=!0),H.id!==Y&&(Y=H.id,Oi=!0),no||te!==M){xe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(O,"projectionMatrix",M.projectionMatrix),dt.setValue(O,"viewMatrix",M.matrixWorldInverse);let Xt=dt.map.cameraPosition;Xt!==void 0&&Xt.setValue(O,Ke.setFromMatrixPosition(M.matrixWorld)),yt.logarithmicDepthBuffer&&dt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),te!==M&&(te=M,Oi=!0,us=!0)}if(Pe.needsLights&&(hn.state.sunShadowMap.length>0&&dt.setValue(O,"sunShadowMap",hn.state.sunShadowMap,qe),hn.state.directionalShadowMap.length>0&&dt.setValue(O,"directionalShadowMap",hn.state.directionalShadowMap,qe),hn.state.spotShadowMap.length>0&&dt.setValue(O,"spotShadowMap",hn.state.spotShadowMap,qe),hn.state.pointShadowMap.length>0&&dt.setValue(O,"pointShadowMap",hn.state.pointShadowMap,qe)),G.isSkinnedMesh){dt.setOptional(O,G,"bindMatrix"),dt.setOptional(O,G,"bindMatrixInverse");let It=G.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(O,"boneTexture",It.boneTexture,qe))}G.isBatchedMesh&&(dt.setOptional(O,G,"batchingTexture"),dt.setValue(O,"batchingTexture",G._matricesTexture,qe),dt.setOptional(O,G,"batchingIdTexture"),dt.setValue(O,"batchingIdTexture",G._indirectTexture,qe),dt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(O,"batchingColorTexture",G._colorsTexture,qe));let On=X.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&$.update(G,X,$t),(Oi||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,dt.setValue(O,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Kt.envMapIntensity.value=U.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=qv()),Oi){if(dt.setValue(O,"toneMappingExposure",I.toneMappingExposure),Pe.needsLights&&Dm(Kt,us),ye&&H.fog===!0&&ue.refreshFogUniforms(Kt,ye),ue.refreshMaterialUniforms(Kt,H,Me,ze,w.state.transmissionRenderTarget[M.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let It=v,Xt=0;for(let _i of w.state.lightProbeGridArray)_i.texture!==null&&(It.textures[Xt]=_i.texture,It.min[Xt]=_i.boundingBox.min,It.max[Xt]=_i.boundingBox.max,It.resolution[Xt]=_i.resolution,Xt++);for(let _i in It)It[_i].length=Xt;Kt.probesSH.value=It.textures,Kt.probesMin.value=It.min,Kt.probesMax.value=It.max,Kt.probesResolution.value=It.resolution}Er.upload(O,td(Pe),Kt,qe)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Er.upload(O,td(Pe),Kt,qe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(O,"center",G.center),dt.setValue(O,"modelViewMatrix",G.modelViewMatrix),dt.setValue(O,"normalMatrix",G.normalMatrix),dt.setValue(O,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let It=H.uniformsGroups;for(let Xt=0,_i=It.length;Xt<_i;Xt++){let sd=It[Xt];Fe.update(sd,$t),Fe.bind(sd,$t)}}return $t}function Dm(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Nm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,U,X){let H=ke.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ke.get(M.texture).__webglTexture=U,ke.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let X=ke.get(M);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,X=0){se=M,J=U,W=X;let H=null,G=!1,ye=!1;if(M){let ge=ke.get(M);if(ge.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(O.FRAMEBUFFER,ge.__webglFramebuffer),ie.copy(M.viewport),Ae.copy(M.scissor),Ve=M.scissorTest,xe.viewport(ie),xe.scissor(Ae),xe.setScissorTest(Ve),Y=-1;return}else if(ge.__webglFramebuffer===void 0)qe.setupRenderTarget(M);else if(ge.__hasExternalTextures)qe.rebindTextures(M,ke.get(M.texture).__webglTexture,ke.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ze=M.depthTexture;if(ge.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(M.width!==Ze.image.width||M.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(M)}}let Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ye=!0);let De=ke.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[U])?H=De[U][X]:H=De[U],G=!0):M.samples>0&&qe.useMultisampledRTT(M)===!1?H=ke.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[X]:H=De,ie.copy(M.viewport),Ae.copy(M.scissor),Ve=M.scissorTest}else ie.copy(We).multiplyScalar(Me).floor(),Ae.copy(tt).multiplyScalar(Me).floor(),Ve=rt;if(X!==0&&(H=q),xe.bindFramebuffer(O.FRAMEBUFFER,H)&&xe.drawBuffers(M,H),xe.viewport(ie),xe.scissor(Ae),xe.setScissorTest(Ve),G){let ge=ke.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,X)}else if(ye){let ge=U;for(let Te=0;Te<M.textures.length;Te++){let De=ke.get(M.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,De.__webglTexture,X,ge)}}else if(M!==null&&X!==0){let ge=ke.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,X)}Y=-1};function id(M){let U=ke.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=yt.textureFormatReadable(M.format),U.__typeReadable=yt.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,X,H,G,ye,Ce,ge=0){if(!(M&&M.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te){xe.bindFramebuffer(O.FRAMEBUFFER,Te);try{let De=M.textures[ge],Ze=De.format,lt=De.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Ie=id(De);if(Ie.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&X>=0&&X<=M.height-G&&O.readPixels(U,X,H,G,le.convert(Ze),le.convert(lt),ye)}finally{let De=se!==null?ke.get(se).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,U,X,H,G,ye,Ce,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te)if(U>=0&&U<=M.width-H&&X>=0&&X<=M.height-G){xe.bindFramebuffer(O.FRAMEBUFFER,Te);let De=M.textures[ge],Ze=De.format,lt=De.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Ie=id(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,ye.byteLength,O.STREAM_READ),O.readPixels(U,X,H,G,le.convert(Ze),le.convert(lt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ut=se!==null?ke.get(se).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Ut);let Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Cf(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ye),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ct),O.deleteSync(Mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,X=0){let H=Math.pow(2,-X),G=Math.floor(M.image.width*H),ye=Math.floor(M.image.height*H),Ce=U!==null?U.x:0,ge=U!==null?U.y:0;qe.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Ce,ge,G,ye),xe.unbindTexture()},this.copyTextureToTexture=function(M,U,X=null,H=null,G=0,ye=0){let Ce,ge,Te,De,Ze,lt,Ie,ct,Ut,Mt=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(X!==null)Ce=X.max.x-X.min.x,ge=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,De=X.min.x,Ze=X.min.y,lt=X.isBox3?X.min.z:0;else{let dt=Math.pow(2,-G);Ce=Math.floor(Mt.width*dt),ge=Math.floor(Mt.height*dt),M.isDataArrayTexture?Te=Mt.depth:M.isData3DTexture?Te=Math.floor(Mt.depth*dt):Te=1,De=0,Ze=0,lt=0}H!==null?(Ie=H.x,ct=H.y,Ut=H.z):(Ie=0,ct=0,Ut=0);let vt=le.convert(U.format),jt=le.convert(U.type),Pe;U.isData3DTexture?(qe.setTexture3D(U,0),Pe=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(qe.setTexture2DArray(U,0),Pe=O.TEXTURE_2D_ARRAY):(qe.setTexture2D(U,0),Pe=O.TEXTURE_2D),xe.activeTexture(O.TEXTURE0),xe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),xe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),xe.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let hn=xe.getParameter(O.UNPACK_ROW_LENGTH),mt=xe.getParameter(O.UNPACK_IMAGE_HEIGHT),hs=xe.getParameter(O.UNPACK_SKIP_PIXELS),$t=xe.getParameter(O.UNPACK_SKIP_ROWS),no=xe.getParameter(O.UNPACK_SKIP_IMAGES);xe.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,De),xe.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,lt);let Oi=M.isDataArrayTexture||M.isData3DTexture,us=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let dt=ke.get(M),Kt=ke.get(U),On=ke.get(dt.__renderTarget),It=ke.get(Kt.__renderTarget);xe.bindFramebuffer(O.READ_FRAMEBUFFER,On.__webglFramebuffer),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Xt=0;Xt<Te;Xt++)Oi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(M).__webglTexture,G,lt+Xt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,ye,Ut+Xt)),O.blitFramebuffer(De,Ze,De+Ce,Ze+ge,Ie,ct,Ie+Ce,ct+ge,O.DEPTH_BUFFER_BIT,O.NEAREST);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||ke.has(M)){let dt=ke.get(M),Kt=ke.get(U);xe.bindFramebuffer(O.READ_FRAMEBUFFER,N),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let On=0;On<Te;On++)Oi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dt.__webglTexture,G,lt+On):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dt.__webglTexture,G),us?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,ye,Ut+On):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,ye),G!==0?O.blitFramebuffer(De,Ze,De+Ce,Ze+ge,Ie,ct,Ie+Ce,ct+ge,O.COLOR_BUFFER_BIT,O.NEAREST):us?O.copyTexSubImage3D(Pe,ye,Ie,ct,Ut+On,De,Ze,Ce,ge):O.copyTexSubImage2D(Pe,ye,Ie,ct,De,Ze,Ce,ge);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else us?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Pe,ye,Ie,ct,Ut,Ce,ge,Te,vt,jt,Mt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Pe,ye,Ie,ct,Ut,Ce,ge,Te,vt,Mt.data):O.texSubImage3D(Pe,ye,Ie,ct,Ut,Ce,ge,Te,vt,jt,Mt):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ye,Ie,ct,Ce,ge,vt,jt,Mt.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ye,Ie,ct,Mt.width,Mt.height,vt,Mt.data):O.texSubImage2D(O.TEXTURE_2D,ye,Ie,ct,Ce,ge,vt,jt,Mt);xe.pixelStorei(O.UNPACK_ROW_LENGTH,hn),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,hs),xe.pixelStorei(O.UNPACK_SKIP_ROWS,$t),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,no),ye===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Pe),xe.unbindTexture()},this.initRenderTarget=function(M){ke.get(M).__webglFramebuffer===void 0&&qe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?qe.setTextureCube(M,0):M.isData3DTexture?qe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?qe.setTexture2DArray(M,0):qe.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){J=0,W=0,se=null,xe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function yp(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new St;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=_p(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let S=0;S<a[h].length;++S)f.push(a[h][S][u]);let m=_p(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function _p(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Yt(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let S=h.getComponent(u,m);o.setComponent(u+d,m,S)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var vp={home:{eye:"01 / HOME",title:"About me",body:"<p>Applied linguist with a technology focus. I design and build things that improve how people and machines talk to each other.</p>",tags:["Conversation Design","Generative AI","Product Design","Applied Linguistics","UX Design","Conversation Analysis","Mandarin Chinese","Korean"],list:["Generative AI Analyst","Conversation Designer","Product Designer","Applied Linguistics Researcher"],cta:"Step inside the cottage",room:!0},dome:{eye:"02 / QUALIFICATIONS",title:"The Glass Conservatory",body:"<p>Experience, education, credentials, grants and awards.</p>",list:["NVIDIA \xB7 JumpstartAI \xB7 Duolingo English Test","PhD, EdM, MA","3 certifications","4 grants, 12 awards"],cta:"Step inside the conservatory",room:!0},museum:{eye:"03 / PROJECTS",title:"The Project Museum",body:"<p>One gallery per project. Walk in and pick an exhibit.</p>",list:["GOALL - Chinese reading app","UX &amp; conversation design","Tangle with Ann - Zendala course"],cta:"Step inside the museum",room:!0},library:{eye:"04 / RESEARCH",title:"The Research Library",body:"<p>Conversation analysis, second language learning, and human\u2013AI interaction.</p>",list:["10 peer-reviewed articles","4 chapters &amp; proceedings","7 working papers","1 book review"],cta:"Step inside the library",room:!0},school:{eye:"05 / TEACHING",title:"The University",body:"<p>Teaching philosophy and seventeen courses across two universities.</p>",list:["UH M\u0101noa \xB7 6 courses","Hawai\u02BBi Pacific University \xB7 11 courses"],cta:"Step inside the university",room:!0}},ts={linkedin:"https://www.linkedin.com/in/ann-t-choe/",dribbble:"https://dribbble.com/diane2837",github:"https://github.com/anntaichoe",scholar:"https://scholar.google.com/citations?user=m7vYqyEAAAAJ&hl=en",rgate:"https://www.researchgate.net/profile/Ann-Choe/research",goall:"https://www.goall.app/",zendala:"https://www.annadenning.com/zendala-drawing-course"},Ot=(n,e)=>'<a href="'+n+'" target="_blank" rel="noopener">'+e+"</a>",ci=(n,e)=>"<ul"+(e?' class="'+e+'"':"")+">"+n.map(t=>"<li>"+t+"</li>").join("")+"</ul>",hi=n=>'<p class="sub">'+n+"</p>",An=(n,e)=>'<figure class="quote"><p>\u201C'+n+"\u201D</p><cite>"+e+"</cite></figure>",an={home_board:{eye:"HOME \xB7 CORK BOARD",title:"Who I am",body:"<p>An applied linguist with a technology focus, designing and building things that improve how people and machines talk to each other.</p>"+hi("Find me")+'<p class="links">'+Ot(ts.linkedin,"LinkedIn")+Ot(ts.scholar,"Google Scholar")+Ot(ts.github,"GitHub")+Ot(ts.dribbble,"Dribbble")+Ot(ts.rgate,"ResearchGate")+"</p>",list:[]},home_desk:{eye:"HOME \xB7 THE DESK",title:"What I do",body:"",list:["Lead Generative AI Analyst at NVIDIA","Lecturer at the University of Hawai\u02BBi at M\u0101noa","Others: researcher, designer &amp; builder"]},home_dogs:{eye:"HOME \xB7 THE DOG BEDS",title:"Junbi & Jjanggu",body:"<p>The two most important members of the household.</p>",list:["<b>Junbi</b> (F) \xB7 adopted 2025 at 10 months old. Her name means \u201Cget ready\u201D in Korean.","<b>Jjanggu</b> (M) \xB7 adopted 2026 at 9.5 weeks old. His name means \u201Ca big forehead\u201D in Korean."]},lib_shelves:{eye:"RESEARCH \xB7 SHELVES",title:"Publications",body:hi("Peer-reviewed journal articles")+ci(["Choe &amp; Kang (2026). Scales for assessing personal appearance in Korean variety shows. <i>Journal of Pragmatics</i>, 261, 93\u2013131. "+Ot("https://doi.org/10.1016/j.pragma.2026.04.012","DOI"),"Jin &amp; Choe (2026). Learners\u2019 attitudes and AI-supported argumentative writing. <i>Journal of Computer Assisted Learning</i>, 42(2). "+Ot("https://doi.org/10.1002/jcal.70232","DOI"),"Choe &amp; Huang (2026). Pedagogical saliency with <i>honh</i> in Taiwan Mandarin. <i>Interactional Linguistics</i>, 6(1), 66\u201394. "+Ot("https://doi.org/10.1075/il.24023.cho","DOI"),"Chang, Choe, Holden, &amp; Isbell (2023). Revising an ESL composition profile rubric. <i>Language Testing</i>, 41(2). "+Ot("https://doi.org/10.1177/02655322231217979","DOI"),"Choe &amp; Yagi (2023). Embodied remembering in coordinated performances. <i>Multimodal Communication</i>, 12(2), 99\u2013122. "+Ot("https://doi.org/10.1515/mc-2022-0029","DOI"),"Choe, Nguyen, &amp; Vicentini (2022). Managing epistemic stances in online searches. <i>TESOL in Context</i>, 30(2), 9\u201333. "+Ot("https://doi.org/10.21153/tesol2022vol30no2art1517","DOI"),"Nguyen, Choe, &amp; Vicentini (2022). L2 learning opportunities in online search sequences. <i>Classroom Discourse</i>, 13(2), 145\u2013163. "+Ot("https://doi.org/10.1080/19463014.2021.2023597","DOI"),"Kyle, Eguchi, Choe, &amp; LaFlair (2022). Register variation across technology-mediated learning. <i>Language Testing</i>. "+Ot("https://doi.org/10.1177/02655322211057868","DOI"),"Kyle, Choe, Eguchi, LaFlair, &amp; Ziegler (2021). Spoken and written language use in traditional and technology-mediated learning. <i>ETS Research Report Series</i>. "+Ot("https://doi.org/10.1002/ets2.12329","DOI"),"Choe (2018). Managing student embarrassment in the adult ESL classroom. <i>Hacettepe University Journal of Education</i>, 33, 16\u201335. "+Ot("https://doi.org/10.16986/HUJE.2018038794","DOI")],"pubs")+hi("Book chapters &amp; proceedings")+ci(["Isbell et al. (2027). Investigating Duolingo English Test washback. In <i>The Routledge Handbook of Digital Language Assessment</i>, 287\u2013305.","Wang et al. (in review). Multi\u02BB\u014Dlelo\u2019s legacy and future. Cambridge University Press.","Choe &amp; Yagi (2022). Embodied remembering in coordinated performances. <i>Proceedings of the 5th CAN-Asia Symposium on L2 Interaction</i>, 45\u201355.","Choe &amp; Reddington (2020). But-prefacing for refocusing in public talk. In <i>Communicating with the Public</i>, 87\u2013110. Bloomsbury. "+Ot("https://doi.org/10.5040/9781350098213.ch-005","DOI")],"pubs")+hi("Working papers")+ci(["Choe (2025). AI as empowerment in the applied linguistics classroom. <i>HPU Working Paper Series</i>, 23, 67\u201372.","Choe (2024). Using AI to enhance language teaching: Introduction. <i>HPU Working Paper Series</i>, 22, 89\u201390.","Chang, Choe, Holden, &amp; Isbell (2022). Evaluating HELP\u2019s writing placement rubric. <i>Second Language Studies</i>, 40(1).","Phung et al. (2020). The Multi\u02BB\u014Dlelo initiative. <i>Second Language Studies</i>, 38(1).","Choe &amp; Reddington (2018). But-prefacing in public questioning and answering. <i>TC Columbia Working Papers</i>, 18(1), 44\u201350.","Choe (2016). A critical review of Pimsleur language learning programs. <i>HPU Working Paper Series</i>, 14, 108\u2013120.","Tai &amp; Tregelles (2012). Inquiry-based learning: gender stereotypes in advertising. <i>HPU TESOL Working Paper Series</i>, 10, 107\u2013137."],"pubs")+hi("Book review")+ci(["Choe (2022). Review of Roever\u2019s <i>Teaching and Testing Second Language Pragmatics and Interaction</i>. <i>TESOL in Context</i>, 30(2), 63\u201367. "+Ot("https://doi.org/10.21153/tesol2022vol30no2art1567","DOI")],"pubs"),list:[]},lib_papers:{eye:"RESEARCH \xB7 THE PAPERS",title:"Research interests",body:"<p>My work sits where conversation analysis, second language learning, and digital interaction meet. I study multilingual interaction in institutional and educational settings using ethnomethodology and conversation analysis.</p><p>A growing strand looks at human\u2013AI interaction and AI-supported learning: how learners regard tools like ChatGPT, generative AI in the applied linguistics classroom, and how human-made podcasts compare with AI-generated ones.</p>",list:["Conversation Analysis &amp; EMCA","Human\u2013AI interaction","Second language learning","Multimodality &amp; embodiment","Language assessment"]},sch_board:{eye:"TEACHING \xB7 THE WHITEBOARD",title:"Teaching philosophy",body:"<p>My teaching philosophy centers on creating the optimal conditions for learning. I design interactive, project-based experiences that connect course content to students\u2019 real-world needs and interests.</p><p>In my classroom, students are active participants - collaborating, problem-solving, and applying concepts in ways that are immediately meaningful to them. I also believe in bringing current, up-to-date knowledge into the classroom, ensuring that what we discuss reflects the latest developments in the field.</p><blockquote>\u201CIf we teach today\u2019s students as we taught yesterday\u2019s, we rob them of tomorrow.\u201D - John Dewey</blockquote>",list:[]},sch_desks:{eye:"TEACHING \xB7 THE DESKS",title:"Courses",body:hi('University of Hawai\u02BBi at M\u0101noa <span class="muted">2019-2021, 2025-present</span>')+ci(["<b>SLS 150</b> Learning Languages and Communicating Interculturally","<b>SLS 302</b> Second Language Learning","<b>SLS 303</b> Second Language Teaching","<b>SLS 480E</b> Language Learning with Apps","<b>SLS 675</b> Second Language Qualitative Research","<b>SLS 680R</b> Conversation Analysis for Human-Computer Interaction"])+hi('Hawai\u02BBi Pacific University <span class="muted">2023-2024</span>')+ci(["<b>UNIV 1000</b> First Year Success Seminar","<b>AL 3500</b> Second Language Learning and Teaching","<b>AL 3950</b> Language Classroom Experience","<b>AL 3740</b> Technology in Language Teaching","<b>AL 4710</b> Teaching Listening and Speaking","<b>AL 4720</b> Teaching Reading and Writing","<b>AL 4960</b> Practice Teaching","<b>AL 6720</b> Second Language Reading and Writing","<b>AL 6740</b> Research &amp; Issues in CALL","<b>AL 6961</b> Practicum I in TESOL","<b>AL 7099</b> Practicum II and Capstone"]),list:[]},sch_testimonials:{eye:"TEACHING \xB7 TESTIMONIALS",title:"Testimonials",body:"<p>Comments from student course evaluations, 2019-2026.</p>"+An("The instructor\u2019s strength is being very open, flexible, and approachable. This created a supportive learning environment where I felt comfortable participating and sharing ideas.","SLS 675 \xB7 Spring 2026")+An("The instructor encouraged a lot of critical thinking through examples, definitions, theories, and open discussions based on the readings.","SLS 675 \xB7 Spring 2026")+An("Passionate and intelligent instructor with the right amount of warmth, push, and encouragement.","SLS 480E \xB7 Fall 2025")+An("I think that the professor was very knowledgeable, gracious, flexible, open, and understanding. I wish she taught more courses, because I would take them.","SLS 480E \xB7 Fall 2025")+An("Ann Tai was the best professor and encouraged all students to challenge ideologies, apply their own perspectives, and have discussions about differing views","SLS 480E \xB7 Fall 2025")+An("She broke down the SLS theories in a digestible manner.","SLS 480E \xB7 Fall 2025")+An("She is a truly one of the best instructors I\u2019ve had. She really pays attention to detail, it truly shocked me.","SLS 150 \xB7 Spring 2021")+An("She was always available, provided amazing feedback, and always motivated learners like me.","SLS 302 \xB7 Fall 2020")+An("Really an individual who cares. She seems to be very knowledgeable about SLS at a level much beyond this course. But she is able to use her expertise to teach us the basic things.","SLS 302 \xB7 Fall 2020")+An("There was not one class where I didn\u2019t want to come to class. Every class was super fun and highly informational on what we were learning in each class.","SLS 303 \xB7 Fall 2019")+An("I liked how she tailored the class to each student and motivated each and every one of us to do our best and beyond.","SLS 303 \xB7 Fall 2019")+An("She made the class challenging and got me thinking in many different and creative ways.","SLS 303 \xB7 Fall 2019")+An("The instructor is really caring and helps us get the best from the materials.","SLS 303 \xB7 Fall 2019"),list:[]},mus_one:{eye:"PROJECTS",title:"GOALL",body:'<p>An AI-powered Chinese language learning app that helps learners build reading skills from texts they bring themselves. Co-founded with Dr. Susanne DeVore; it grew out of first prize at the 2022 PACE Venture Competition.</p><p class="links">'+Ot(ts.goall,"goall.app")+"</p>",list:[]},mus_two:{eye:"PROJECTS",title:"UX & conversation design",body:'<p>Certified product designer and conversation designer. I work in Figma and bring linguistic insight to interactions so they sound natural and stay on-brand.</p><p class="links">'+Ot(ts.dribbble,"Portfolio on Dribbble")+"</p>",list:[]},mus_three:{eye:"PROJECTS",title:"Tangle with Ann",body:'<p>A ten-lesson online course on Zentangle and Zendala, designed and taught as a certified Zentangle teacher.</p><p class="links">'+Ot(ts.zendala,"Take the course")+"</p>",list:[]},dome_certs:{eye:"QUALIFICATIONS \xB7 CERTIFICATES",title:"Credentials",body:"",list:["Conversation Design - Conversational Academy, 2023","Product Design - Dribbble, 2022","Artificial Intelligence &amp; Machine Learning - Texas McCombs School of Business, 2021"]},dome_desk:{eye:"QUALIFICATIONS \xB7 THE DESK",title:"Work experience",body:ci(['<b>Lead Generative AI Analyst</b> \xB7 NVIDIA <span class="muted">Nov 2024 - present</span>','<b>AI Solutions Consultant</b> \xB7 JumpstartAI <span class="muted">Jan 2024 - Oct 2024</span>','<b>AI Data Specialist</b> \xB7 Duolingo English Test <span class="muted">Nov 2021 - May 2022</span>'])+hi("What I bring")+"<p>Conversation design, product design, generative AI evaluation, human-computer interaction, multimodality, and applied linguistics - in English, Mandarin Chinese and Korean.</p>",list:[]},dome_diplomas:{eye:"QUALIFICATIONS \xB7 DIPLOMAS",title:"Education",body:ci(['<b>PhD, Applied Linguistics</b> \xB7 University of Hawai\u02BBi at M\u0101noa <span class="muted">2023</span>','<b>EdM, Applied Linguistics</b> \xB7 Teachers College, Columbia University <span class="muted">2017</span>','<b>MA, TESOL</b> \xB7 Hawai\u02BBi Pacific University <span class="muted">2013</span>']),list:[]},dome_awards:{eye:"QUALIFICATIONS \xB7 THE SHELF",title:"Grants & awards",body:hi("Grants")+ci(['Access Pakistan Teacher Training &amp; Cultural Exchange, U.S. Dept. of State / HPU - Lead Instructor <span class="muted">Oct 2024</span>','Duolingo English Test, UH M\u0101noa - Research Assistant <span class="muted">Sep 2024 - Jun 2025</span>','Educational Testing Service (ETS), UH M\u0101noa - Research Assistant <span class="muted">2018\u20132019</span>','Robert Wood Johnson Foundation, Teachers College - Research Assistant <span class="muted">2016\u20132017</span>'])+hi("Awards")+ci(['Best AI Project - Honolulu Tech Week Hackathon <span class="muted">2024</span>','Calvin Shindo Student Venture Fund - PACE, Shidler College of Business <span class="muted">2024</span>','Achievement Scholarship - UH M\u0101noa Second Language Studies <span class="muted">2023</span>','CPB Foundation Scholarship - Central Pacific Bank <span class="muted">2023</span>','AAAL Graduate Student Award <span class="muted">2023</span>','Graduate Dean\u2019s Scholarship - UH M\u0101noa <span class="muted">2023</span>','Merit-Based Award in Mentorship - UH M\u0101noa GSO <span class="muted">2022</span>','Venture Competition First Prize - PACE, Shidler College of Business <span class="muted">2022</span>','Bilinski Dissertation Fellowship <span class="muted">2021\u20132022</span>','Dean\u2019s Special Fund - UH M\u0101noa College of LLL <span class="muted">2018</span>','Teachers College Scholarship - Columbia University <span class="muted">2016</span>','Annual Teachers of Excellence Award - Chinese Culture University <span class="muted">2014</span>']),list:[]}};var _t={grass:11918714,grassDark:10473320,cliff:12036582,cliffDark:10325974,cream:16774630,wall:16643046,roof:8226505,dome:11115488,path:16378583,water:9425138,pink:15968713,pine:9224530,leaf:10867562,trunk:10516049,wood:14263402,court:6066144,courtEdge:9290362,glass:14283252,door:12166630},ws={sky:1780830,hemiSky:10135792,hemiGround:4872854,sun:11451647,sunI:.7,hemiI:1.15,water:2308206,grass:7314274},Rn={sky:10147570,hemiSky:16777215,hemiGround:14280905,sun:16773590,sunI:1.45,hemiI:1.45,water:9425138,grass:11918714},ce=(()=>{let n=7;return()=>(n=n*16807%2147483647)/2147483647})(),Sp=new Map,P=(n,e={})=>{let t=n+JSON.stringify(e),i=Sp.get(t);return i||(i=new Zi({color:n,flatShading:!0,roughness:.85,metalness:0,...e}),Sp.set(t,i)),i};function Rc(n,e){n.updateMatrixWorld(!0);let t=new pt().copy(e.matrixWorld).invert(),i=new Map,s=[];(function r(a){for(let o of a.children)if(!o.userData.noMerge)if(o.isMesh){let l=o.material.uuid+(o.castShadow?1:0)+(o.receiveShadow?1:0),c=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();c.applyMatrix4(new pt().multiplyMatrices(t,o.matrixWorld));for(let d of Object.keys(c.attributes))d!=="position"&&d!=="normal"&&c.deleteAttribute(d);let h=i.get(l);h||i.set(l,h={m:o.material,c:o.castShadow,r:o.receiveShadow,gs:[]}),h.gs.push(c),s.push(o)}else r(o)})(n),s.forEach(r=>r.parent.remove(r)),i.forEach(r=>{let a=new wt(yp(r.gs),r.m);a.castShadow=r.c,a.receiveShadow=r.r,e.add(a)})}var Ec=[],Rt=(n=16770992)=>{let e=P(n,{emissive:16761963,emissiveIntensity:0});return Ec.includes(e)||Ec.push(e),e},Jv="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCACwALADASIAAhEBAxEB/8QAHAAAAAcBAQAAAAAAAAAAAAAAAQIDBAUGBwgA/8QAQxAAAQMDAgMFBQUGAwgDAQAAAQIDBAAFEQYhEjFBBxNRYXEigZGhsRQjMkJSCBUWYsHRJHKCM0NTkrLh8PE0g6LC/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwUAAgQGAQf/xAAyEQABAwMDAQUGBwEBAAAAAAABAAIDBBEhEjFBBRNRYXGxIjKBkaHBFCNS0eHw8QZy/9oADAMBAAIRAxEAPwDYhgZ2oQTUUY8iNIQ3EkPoQR+Fz7xA+O4+NOQ5cUDeOw+B1bcKD8Ff3pmXsAJLgLd+PVIWEvNmgkp2fGgB3pqbgEJ++jSmfMt8SfinNebucFzZExjPgVgH4GiaHdylwnecmgPpXkKSsZQoK9DmhUDjkaqvUXzoRXsEdKHBI5VF4vZzQ0AB58J+FEckstbuutoH86gKm6iUz0oM77UzN1hE4Q/3p8Gklf0FJM3f7WViHFdd7tXArjUlvhPgcnPyq2gqDIuFI5ya8FHO1Rjr9w75to9wx3nVALhHxwKhtX6osmjYYevM+VJfcGWoba8Ld9EpxgeZ29aEyWNxc0Oy3BRnwStDXFuHZHorK/LYjH759tsnopW593OkzLfdOIsJ9z+dwd2j57n3CsI/iLVmuriHLI2myRcEITEJCykcyV8z5q9lIpivSRmSO7a1axMuBOO7buKHHFK8AOL2j5Ak0J9Wxps3Nt9/t+63wdGqHt1SWbfa5AJ+dv7yugHGJrjqUyHylCuaGAUfFR3PyqSh/Z4MR6OzFZT3m6XMe0g+PnXL7mqNaaPfDTV9nBsEhIW4XEHHMFK84PlVosf7QN0jlLd7tkeajkXYx7pz4HKT8quyXWL3uCs0lBNTvLX7rb2oCQkhp4xnBvxoGyvVPI/Wh4pif923IA5lJ4D8Dt86r2le0bTmrlpZt8wtyyM/ZZKeBz3Dkr3E1ackcjsfnXsjpTdzSDe24wO/bKAA0GzwR5f2yRMvhH3jEhA8e7Kh8U5pM3CKNlPAeRSR/SnPEcYzzohR95x8a84xjO1WBPI+vHyVWAG+o2+CTYktPkpQr2xzQoEKHqDvS4JAODsedEWyzKWkSUgpznJGSn0pN5h1LqlRpJKM7JeRkfLcfE1VzWyHQ9uN85H9+CqHuYbtSjiOJKk5KeIEZHMUixDShgMvqEnH5nEg7UixcHHwr/DFXAcEtrB9+Dg0qJzHJay0rwdSUfXavYy2QCRhv4hHe6WIOgeLbEgj5eqZCyJNzW8tuOYpTgNhGMH3fWpa22ayLU59tS60AnKO7cWnf3GgbWlacoUlY/lOaNRXPccXWeNrWG9r+aafuqKFYBkAZ6Pr/vQuWmJxYCpChjq+v+9OScV7zoRDy8P1HHHCuC0MLdI8+UgzZbWtKy8hfEN0glS+L4mgbt8No5TEYH/1il8npQjxqOaXBwJOfH07lVlmuDgMhCfBOwHIVHW+zRbW6+6xx8T5yriOcdcD41IbYoOWTUYwNaGjhG/ESWcAbB244Obqj9p/aQnQ0NqPEaQ/dJaVFlK/wNJG3eKHXfYDrg9BXPf29d9viJV8nuK+0OgyZLmVEJzucAZwPADboKuPakxN1N2hXPuAAxCDcXvVnCEcKQVb+qjVW7mwW44efkXF4cwz7DefXmazyTC5aMnwTejoXiMSmwB5PPlyfgCr/fbNeLppxmFpttl61OnL78MqWmSBjgQSkeylP6FYPEckbDFZh9lt9lK4XYziG+vCys/MgAe81FRtUt213jttqZjK/WHl8R9SCKUma3lXEBE6FFlI/S8pxf1UayNZM0aWYHwunMk1HK/tJSC7w1W9L/VT3aDPQLVHtsi/i5zmnUlTTaWnu6SEkZckJTkr5DhCldeI5xVAFTSZ9ilezJtbsU/rjOkgf6TR16bRLjqkWiYialPNo+y4n3f+qMyQRjS648/3WSamfUOMkRa7wbi3wNj8rqFbW404lxta0LQQpKknBSRyIPQ10x2Uawkav0uHJyuOdDc+zvr5d5sClfqRz8wa5lWhbayhYKVpOCCMEGti/Z2m4k3yCTkqQy+B6FST9RWthSWpZ7GdwtqzXuKvele2oiXLxGede614mgzyr1eIUNobB4EJTk5OBzojcZKH1vha/bGFIz7J91KDOKjNQaig6btq509wpSDwoQndTqv0pHj9Kr2YwAEZs0gJsdxY+IUkiHBcUouxkcR5FIwflUbNudmtZIlXlqGf0rljPwJNYtqTtIvmoFrbS+qBEPJiOojI/mVzV8h5VVc899z1o4B5KsIbjK6ETrDTzi+FrVkInwc4SPjgVKxJipyCuJMt81A/M0v+xNcyhZG2aVYkvxHUvR33WXU7pW2opUPeKGI3AAar23wM+is2BoaQcldLCc4iR9nVGy4RkBDoP1Ao5mKRsuJJTnwSFfQ1kWk+1mZClIbv6RNY/B9qCfv2x4nH4x8/OtjjSI82O1JYcQ8y6kLbWk5CgeRFXOkHIWdsbmn8w48EQTGhspLyT5sr/tVb1nreLpy3rW24O/Kc5Uk4bHiQeZPQdauDT5adSodDXMfa1qCRdtSPtuKITxl1SfPJCR7kgfE1iqJHahGwWvzf5pl0yBhLp5RcMtjvJ2v4bk+VlXdQ6lmX6Q4txakMrWV8Gd1EnPErxJqLjsPTH0MR2VvOrOEobSVKUfICjR45ku8PGEIA4luKBIQnxOPp1O1XrTWpUWhJi6V0vInvkYclOBSnXT5hAPCP5c1nkcYW2ibc/L5kpiCamTXO+31+AA/wJpbuyjUE1AXIEaAD0eXlfwTnHxqVT2LSMe3eWM/yx1H+tazo1ibdrK3MvlrdtstS1JMcq/KDsrHMZ8D4VPm0wsY7n/8ARrnpeq1IcRcDyt/KeRdOpNINifO/8LAJHY5cWxmPdIj3ktCkfPeq5ctKah0y4JTkR5tKOUhg8aB6kcvfWx6w0lridd3FWG6Q4ttIT3bfeFCwcb8R4TnfPWoBGme1S0q71D8e5IHNpT6FhQ8MKCT8DW2CtlLQXvab8HH2sss1LCHewx4tyM/e6oaHI+rGC26lti7Np9hY2S+B09f/ADlU92HznLdr1UVTSyuRFdZLeQDxJwrG/wDlNTmo+zc3SE1dIUM2W88IdXFyAhS+o22Cs8iNj1qt6MuTLuttO3ZJS3KM1EaU2NiSoFPFjzB3rdRVLHn2Nu7uP7HhA6lTufEXSe+Be/6h3/8Aoc948l0ZxSlDjEMgfzOpH0zXkJnOk8DDA9XFH6JpxxK4eHOwoEuLQcpUpORjY4pq4uIOmwP98VyUgbjRfbnvRedByoQrArxORVlRe6bn3msA17qdepb864hwmHHJajJ6cIO6vVR39MVrnaFdlWfSU55tXA66kR2yOYK9ifhmufjj3CiMHK0Qt5XjvQBIxRHJbKDguJz4ZpMzGR+Y/wDKavdHsliDzoMHNJpmMrwA6geROKVCgd858xUXqAjfatP7G9ULQ+5p2U4ShYL0XP5VDdaPQj2h6HxrMT60va7k/aLnGuMdWHIzqXR54O494yPfXhFwqubcWXUBFZnr3saa1TPNxt09EKQr8aHWypCt89Nx1rR2JCJTDb7Jy26gOIPkRkfI0c5xzrO5gda6zxTvivpODusY7OuziC7I1Bab201LMCa22spKkhzCeJPgeHcnHWp26drWnNKqahW61yn4YKkoditpaYVwnCu7JxxgHbI286ntKsdzq3VBVuX/ALI8oHqeBaT/ANNPdR6IsOqRG/ekEO/ZQQ0W1qb4UnGU+zjbblXHVE8b6gmYEt7r7YXcQwytgDYyA4YvbfKV07qi36mtQuMDvQ3jKm3UcDiNsjI8CNwRkGplJyM9CNqjhFjWu2oiRGUMtNtpYabSNkjkAPjT9HspCfAYpY8tLjpGExaHBo1bqh9qGtL5pSCHbTb2yyHEtuzH0lSUqUCQEp68t1HbJA3OcB2bai1bqO2sXO5N29+E+6tolKCw82E8lgbpWk8uh261fFBLiSlQCgehGRQpHCkYAwOQFH7dnZdnoF+9A7B/a69Zt3Ij0duQkIdQFJz8K587P9Hy5naK5JQ2n7DZ7kovuKUBghSuFIHUkgV0PzNZtpu2vW6+amUptaEv3ha2wRjiTgEEeXtGj0NS6Bsjm749UOrpRUOYx+2fRaYD7Ne5UUH2B40Yb867SJ5exrjyAvn8zAyRzBwSEHOh/wDBXsiq9rbVqNJ2wOobDst7KWGzyyOaleQ29eVEVAL4CrHbVL4bVb4oWnjcfU4UZ3wEkA48MmsfLIcz3hK/LkPhT+9z7lPbfvs4PyEqdDan1D2SsgkIB5bAHYchVljaa0zBtUWZfbwWXpDSHO674NlPEkHAABUedCqKuOnA13JPAF01o6J8wIaRjck2CpqEIbA4UJT6DFKJPF6VdtOWCwSLoHrHfkzGUHMiFIQl3iT5cQCk79cVapOmrRJSUu22Lv1QjhPxGKXSdeiY7SWn7/IppH0OSRuoOH2+YWPLbSse0EqHmKbqgtBWW+Jo+KDitDu3Z2FnitL3Cf8AhPn5BX96pU2BIt8lcaU0Wnkc0nG3wplTV0FSPyznu5S+popqY/mDHfwo4qfY/wBqO8R+pI3HqKOh1K08SVBQPhSyldKYSQmIoyEHAyApPRX/AHrVssoyuj+ziebjoi1OKOVttlhR/wAiin6AVZCMjeqP2NvJe0Q2UZKftT+M/wCYVeN+VBKxPHtFMGLe3GukmanZchtCFY6hJJH/AFH408Jz5UZSaDHlXFdWpzDUE8Oyu56PVCenF924P7pjMQ4VNLQkrDauIpHM0SbcJDHcmNDD4WfbUt9LIbH+rcnyA99QkhLsnUzNruDz8YS+Ix5CxiMogZ7vjzhKscgRvirEnsyWAVvOthGM8antvpQWUmA45+H8ha5Koe7gW8UshaHAShaFjxSQaOAcVUrlDi2m9QoVikG6zS6PtAiODuojXVTjmOEHwRuo+FW5IwkAqyfHHOgTw9kQLokM3aC4XvSm32Flb/erTxL4+IH6U5IowwOla+m0P4p5BNgN1i6n1H8GwFouTsveVBXj514bkHpXbgW2XBE33Q9Kj7vYLXfQ1+8obcnuiSjjztnnyPLyqSA23pldrmxZrZLuMkgMxWlPKz1AGce/l76l1Be+FiPbNdmpl9g6VtyG240DhSW20gJDrmBgAeCSPeo1tEDTtot0tqV+747ktmOYqJKkAuITjHsnoRjbwrmOzzXbtrWDMmq4nJVyaddJ8VOgmurVniUr1rmutSuD2aTbf7LsOjQN7NzXZGFmml+xpuxTFyZd2VKW2eKKtpru1tKKkkqUrJ4shPCUnbCleNaEqHFUkp7hvHkOVHedSy0pxX4Ugk0WNxBkKX+NXtHyz0pFPPJM7VIblO4YGQttGLBRM7SzNxW0wubJjwlLzISweF1xH6Er/KD1I3xsMZzWbaa7Epn8TyU3cNN2tSnQy7GkHvFEnDeB0AyCeLPLG9bISDQJV3biVDfhINGpq2WEFrDuhVFGydwc/hZre/2fbk1xKst2jTeEbtSR3S/iMp+lZFrTT950zNTAu9vfiL5pUsZQ75oUNlD0rsGblD4dQccQCgRR5lhterbO5br1DZmRXR7SFpxg/qSeaVDxFPoOqS30SZH1SGagY1utqxXsDvom6clWdxQ72A9xoHUtOb/JQV8RWoioLRXYHB0VqV67R79NfjqbW0iKppKTwqwQFrz7WMeAq/q05FKQA66k9TkHNMhWxbXSeWikLiWhV/GaIrKTjx5VP/w6A97L/wB15j2v7UMlEe1pHds5UeSjz+NLeqmGeMWORsmPSBPBKcYPCgH4Cn4yw9GK2VDCgtvKT6g7VX3NLW1bhP7nt6hnqgY+GMVcplyLVsfdkOoQHCG0AnAJPhUOHOvMYzkcq5t4MeGldTE/XfUBhBFitQ2UtMtttITyShISkegFKZxTd6fGYALryEeRO/w60zkXtsDEdJUf1KGAPdQSDuUZvtYCkwtPeIQT7Ss4HpSpwDVUfm3SPDl3OEw1LkR2yvu3lFIWBuUgjkcZx0o2iO0K263YUlhBizmk8TkVxQJ4f1JP5k/Mda6voOnsXW3v/i5L/omP7ZpPu2/37KzqG2aLnejYNBjflT1c2ledZr223Nz90QdPxSe/usgBQH/DRgnPlxFPwNaUKxjtGll/Wt6lqPsWKyFLfk897A9/3ufdVXHCNCLvWPNuqYeS6yo8bagtCvMHIP0rrKwXhq/2WDdGiOGWyl3boSNx7jke6uSgMdfStj7CtWoCXtMS3AFZU/DyefVaP/6H+qkXWKcyRCRu7fRdR0qcMl0HY+q159bSGz3ym0oIweMgD50wQ9Gxwt3JAaH5QtJI8uLnQagtj02OzLgqbbuUFzv4ri2wtPFghSFJP4kqSSCPQ7EA1Dp7RnkYTcOzu3S3083YkltKSf8AKtPEPTeufhgbIL6rHxXQGR7dmFw8M/RWViQw4Alp5C/RYUaXxVRTc7trd4Ql2K12Gz5zJEbDsh9I/wB2XOEBAPXh3xncVcCARgUOaNsZsHXUa9x95unz3Um0TItiFc1MnhPp0/pU1CZ7mOgYAJGTgYql2bU0b+MW9MoWwt1cZUh9BcTxN/oATnJz7ROAcDHLIq/cO22BTOnadIc7uSWqkGosHekVuLxlppTmOZzgfOjpKikEjhPh4ViOvdOdrEjtGXIssmbItTn/AMJbUzuGIeU4y4lKhkpOTuFBW3PlW1PSWbfE7+fKYZbQkd486oNoz45JwMmtj2WAIN7rEHXvheU84HOAMuKSOaxjHwphdme8DS0JSVKPCVY3+NZ32tta11A1Bf7P5ip8Ip4Fqtk4IWy+FghZKVAKSU+zg5CdzjfNTuudSXXQnZh+8pbrUq8sx2WFvLKQkyFAJK8bZwcnA548M1V8Jc0AHJRIptDtXcmurpLch5uAghTUce0DyKz/AG/rVeTGSkYHEB4BRA+tQ2hLsq86VhSHXlPSE8TTy1HJUsKO5PiQQffU9nApJNrZI5t9iunp2sdE02vceqIhlts5SkA+PX404ixFy3Q2jYfmV0SKPDguzFDA4WxzWRt/3qfjx24zYbaTgfMmgl190Vzg0WCjNRyo9g0vcZJwltiMsjP5lEYA9SSK5fhTZNulMSIchyPIaOUOtKKVJIHQitJ7Ytfs3d4aftjwciR18Ul5Byl1wckg9Up8ep9Ky9n23FKHJOw9etdX0imdFEXO3d6Lkup1AlksNgte0j23ut8ETU7XeJ5Cawj2h/nQOfqn4GtYtl2gXmKJdulsS2D+dpXEB69QfI1yaRv605t11nWeSJNumPxH0/nZWUk+vj6GnAfZJZKZrstwutqwDtUliDqHVkNR4XZ6oCkD9TaUlR+YTR9Ndtd8txlPXZtd2QtOUtFQbLav5Tj8OOnltVQ1nrZ3Xd3/AHk7b2ISkNJZ4WlqVxAEkFRPXfGwFR5wqwwua7Kr/nSkSXIgymZcV5bL7Kw424g4KFA5BFExtQUO1xYrZsuqdFal/inTcG5Od2mQ6398hHILBwce8e6plyBFfVxuR2lqPVSATWHdjOolNKk2cucKwTJYz15BafofjWyNX1HCA60oK8UnINcTWwdjM5nHHkuwpJDLC17d+fNSSW0MpCUISlI5BIwBVZ1/rmNoezfaVID0x9RbjMnkVYzxK8EjmfHl1p/JvilgpYb4T+pe/wAqwLtc1CbzqP7Gh3vGoCS2VZzl07r+Gw9xovT6Xt5g12wyUKulMEJdydlvHYvbr49EcvV2uka4NSyXUEW1TC+I9QtbaSsDlkZGNga1JLiSsoz7Q3IrnvsL1+yJH7sRbY7KuEBxYW6/IeAG7jrzqghppPgOZICU10IttC1AqHtJ5HqKcVDC19lz8brhCohIJPIeAzVI7XNM2jWej3oFwvDNt7hwSWX1KCglxIIwUZyoEEjA3zjG9XgU3ft0KU4lx+HGdcT+Fa2klSfQ4yKE12k3CsRcWWc9gmkbdpXSynY92bnS7pwSH20+wGClOODgPtBQyQokA58MVftQRHZtqfQw2yuQElTSnSgBCv1AqQsA4zvwmnTMSNGKlMR2Wir8RQgAq9T1pnqG7sWa0yJcgvJbSkgrabcX3e3M92lSkj+YA4qznl79S8As2y5ctmolaK1LNjzrnCusSa4XXnoMj7QGl558QSkKONiAPpitXs0uw3FlMli7wpSCM4S8Bj1BOfjisB1teE3jUsya0UPNOK2dbSkFz+Y4bb4j/MUgnrnnUD3zZPtFOf5hvWip6UyoOu9ijU3VJIG9nuF1HdNcaasLX+Lu8NGBs00sOLPolOTWS657YJt/act9mQ5AgLBSt0n755Pht+AeQ38+lZsXmwMJwfJIoMOO4wO7Hiede03SYYTqPtHx/ZVqOpSyjSMBAVHIQjBV8kil0JCEhKdsUCGktjCR6nxo3KmqXL2c86KQKE14nOwrxROVHBSsHbkfQ1GuthiStI2B3FPFApw2Ttuj3HlSEocTTT/+lVXcqhIk17ORzop2PkaMB40NXT2xz5FqusabFP3zLgUgZ/Ef0+8ZHvromFJauEGPOjkliQ2l1skc0kZrmniUlQUg4UDkHwPSuh+xy4/vCyyrfkBMV1L7KTvhl5PGB7lcYpP1akdK0PYLkJt0utbASx5wUx11qf8AheyOPNECY/8AdRgeiiN1eiRv64rA1ZJKlKKlE5JO5J8auXarqJWotWyy2f8ACwj9naGdtj7SvefpTDs/0/E1Tq2Dapq3ERneNbndnClBKSrGemcYz50eipxSQlz99yg1tSauUBm2wSGlZr1jms3uOmE7JjupRHYktl0qcOcLSjIB4cbE7cRHXl0dpvtA1O6u7rmaauBbtjAUiMGyqRNcxnJWkd2CdvZTnGeuKpHaPDs1hnWxmG1CtcpXduNTZMdS40ZpjPC0lISoFSlEkjB8TzFbjoe7s33TkO4NS0T1KRwqmohKiokkc1oQrfhz15HBqSyskYJLXus4jcx5YcWVIuHbqm0xLZKuGnLjEEpt1bjTjagtK0nhCBkADJOeJRGACcb4py322wLnLuKLLCblxrYErkSVyOBLqeFRV3IxlWCnAzjPlWmq9sYVuPPekvssfORHZB557tOfpWfVH+n6q+l3esmt/wC0JFkW9mdctMXi2RXne5TLx3jI23JVgEYyOnxxiqxrvtrteodPToVsuE+Dc2X+Bl+LyeSk/iStJBCVeRyPAg10GrCkFJGUkYIO4I9K51/aF03GaLMizsWiK1Cc++ZjOBDynXSnIUyBzPsqCgRkE7bZosHZvePZsqPLmjdYwta3nVOuLUtaiVKUo5KieZJoCkHcik218YBHv8qUpqsy9tyFeAwaEivCoovDFAaHHhXsbVFEUAmg5UVauFxCf1H+lGO551FEtJPA3xD8pB+dJcIdZeZP6zjy6ijvLDsZa0nIIzSMJfEteeoBq/KqmQXzQv8A9UZtYJKTuennR7g2G3QsDAXv76bJOFA+dVIVrp0RitX7H7wIUiShLgCl2V3Yn87TyuH5LrLo0dUlxTaTghtax58KSr+lXvsotrnfTLotOGwj7O2T+Ykgq+g+NDfsoVRH1f4NK1nLr7y3Fq8hgfVSq6X7EdExoeiGbi3amWbpcEcTklThWstZykZP4M4B4R5ZJrn/AFpYf3RfZLMZKlR+ESAAP9klZ5Hy4ts+Yrp3sAhvQ+yu0l5Sz9oW8+gKP4UKcOAPLbPvrLWZjtwUandZ1woXXWho2s4bUSW47GfiulTbiACRnZSSDtg492KmexC9RZtgnWlCZaJ1qlqYkiYcvr29lahyGQMBI2SEgDOMma1Ktti6tt8PCX2+PP6iCQf6VXrp2cta8VHD9wkwIsd4OvCKlIXIOMBPFzG3Xfn6UhpZixxpnnHHgnVZCJIxUtweVpSpDQdLIWkvY4i2D7QHiR0HnREMJSvvFZU5+r+npTKxaas+mY7jFot7ENDiuNwoHtOK8VKO5/pTmfOagMla1I4yDwIUrh41Yzwg+Jwa2OIGUuaC42G6aajvTVktMuSpwJcbjOuoz4pTnNcz6ylIv95/itlFr1Ghfdw321qUExnXAAkc908fGU+HFg8hW535bmpmHGcvQ+9QWUqRjvEg88cxnmM+dQtp/Z8slviPx1zZi2npLcruu8wEFvPAnIGSBxe/Aq1FUtOp3wCvV05ZpbzyuY5tuXbUKfJSlDcgw3W1OJLnepTlZAH5c5waTSeIAjlXSHaB2G6cc03PnwIrMW4x2luhxbjxQTkqUpQSSSTknODjwxXMsd7unSyVpWnOErScpPofA03hmEguFgewt3TvehAoM17NGVEOPCgJzQ17lXqibOqzLaHgK8tZMgJ5hIyaTdWEzUqVyGKPEIeW4s9eVRRJNvFtC0H8Kh8DSkFR74jltTffrSsI/fjpnIqBROLi3xx+L9JzR9LWY32+RoZ2Z4u8eV+ltO6j8NvfRpCSplQx0NXDsi0y/qO36gbjShGc4WWlLCAVltXGVJSTsCcDevHmwuvFXLJHUtN0nhJ7qPGcSnA5rc9hCR/zH4VrmlrQbLYIcJYAdQjic/zq3P1x7qcQ9K2+xxGoDcUoQ04HsODKlODkpXiR06DbFSAIA3rO5114TdVy/abfuFyiT4S2O+CTFfakbNvsLOFJJ6YyTmuiLVCh2u1xIMBAbhxmUMspHRCRhPyrF1LBO4qSTrW+Rogitz1pbSAlJ4RxJA6BWM1nmYXgAIkTw3dXHVDjU+6oZUk/4JP4knmpWDj3Y+dWe1xREgtN/mI4lepqiaZlsyyxLIC1qWA8Fq24/E/WtBLwbT7ShjOOInGfE0kgaTI9z99k9qnARMYzI3UNqi6Son2eJCdDTz3EpS8ZKUj/ALmq03CHGpx91b7qjlSlkni91PZ81Fyu78ltXEy2kMtqHIgbkj30Q4xmsNTKXvNjhMaWLs4wLZ5R4oP2tkdO8T9avHFkmqI2stupcHNJBHuq7NPJebS4g5SoZFaqB2CFh6k3LXIys5ynY9K4s7Wv3adXSnLfEtsfvFKU6q3Su9YdXndQQQCyrOeJB5Hl59p7deVcW9srry+0W8omQY0SU0+pDqo4ITJ6odKTnClIKc42J38aeUXvlJptlWIrpdRwk+0PmKXAqLQ4W1BaTyqTbWlaQpJ2O9M1mR8DGa8obUGcmhOa9UUZIyp9Z86cwU4aPiTTRwkuKPPc1IRE4YT0zvUUX//Z",as=document.getElementById("c"),Cn=new uc({canvas:as,antialias:!0,powerPreference:"high-performance"});Cn.setPixelRatio(Math.min(devicePixelRatio,2));Cn.shadowMap.enabled=!0;Cn.shadowMap.type=vs;Cn.outputColorSpace=nn;Cn.toneMapping=Dn;var Ui=new or,Ha=new or;Ha.background=new Je(Rn.sky);var ln=new ys(-10,10,10,-10,-100,200),fi=new C(0,0,0),ss=new C(0,0,0),Ls=1,pi=1,Tc=13.2,ka=.32,rs=.32,Ir=.32,Ya=Math.atan(1/Math.SQRT2)+.08,wr=Ya,Pr=Ya,Zv=new C,Lp=new C,Dp=new C,Np=13.2;function Up(){ln.position.set(fi.x+Math.sin(rs)*Math.cos(wr)*40,fi.y+Math.sin(wr)*40,fi.z+Math.cos(rs)*Math.cos(wr)*40),ln.lookAt(fi),ln.updateMatrixWorld(),ln.matrixWorld.extractBasis(Zv,Lp,Dp)}function Ja(){let n=innerWidth,e=innerHeight,t=n/e;Cn.setSize(n,e,!1);let i=(t<1?Tc*(Qt==="island"?1.2:.8)/t:Tc)/Ls;Np=i,ln.left=-i*t,ln.right=i*t,ln.top=i,ln.bottom=-i,ln.updateProjectionMatrix()}addEventListener("resize",Ja);var Rs=new Ma(Rn.hemiSky,Rn.hemiGround,Rn.hemiI);Ui.add(Rs);var At=new Ta(Rn.sun,Rn.sunI);At.position.set(-12,22,10);At.castShadow=!0;At.shadow.mapSize.set(2048,2048);Object.assign(At.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:1,far:80});At.shadow.bias=-6e-4;At.shadow.normalBias=.04;Ui.add(At);var et=new Ne;Ui.add(et);function b(n,e,t,i=0,s=0,r=0,a={}){let o=new wt(e,t);return o.position.set(i,s,r),a.rx&&(o.rotation.x=a.rx),a.ry&&(o.rotation.y=a.ry),a.rz&&(o.rotation.z=a.rz),o.castShadow=a.cast!==!1,o.receiveShadow=a.recv!==!1,n.add(o),o}var D=(n,e,t)=>new Yi(n,e,t),Oe=(n,e,t,i=8)=>new ni(n,e,t,i),Le=(n,e=0)=>new _s(n,e);function Mp(n,e,t,i,s=0){let r=[];for(let a=0;a<t;a++){let o=a/t*Math.PI*2,l=1+Math.sin(o*3+s)*.06+Math.sin(o*5+s*2)*.05+(ce()-.5)*i;r.push(new ae(Math.cos(o)*n*l,Math.sin(o)*e*l))}return new Ji(r)}var Fp=P(_t.grass);{let n=new pr(Mp(15.5,10.5,28,.06,1),{depth:.6,bevelEnabled:!1});n.rotateX(-Math.PI/2),b(et,n,Fp,0,-.6,0),[[15.4,10.4,2.4,.18],[14.6,9.7,2.6,.2]].forEach(([e,t,i,s],r)=>{let a=new pr(Mp(e,t,24,s,3+r),{depth:i,bevelEnabled:!1});a.rotateX(-Math.PI/2);let o=a.attributes.position;for(let l=0;l<o.count;l++)o.setX(l,o.getX(l)+(ce()-.5)*.25),o.setZ(l,o.getZ(l)+(ce()-.5)*.25);a.computeVertexNormals(),b(et,a,P(r?_t.cliffDark:_t.cliff),0,-.6-i*(r+1)+.02*r,0)})}function Kv(){let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createRadialGradient(128,128,40,128,128,126);return t.addColorStop(0,"#fff"),t.addColorStop(.62,"#fff"),t.addColorStop(1,"#000"),e.fillStyle=t,e.fillRect(0,0,256,256),new qi(n)}var Au=new Zi({color:7652586,flatShading:!0,roughness:.35,transparent:!0,alphaMap:Kv(),emissive:6273258,emissiveIntensity:.22}),Cc=new si(80,34,64,34);Cc.rotateX(-Math.PI/2);var Op=b(et,Cc,Au,0,-3.4,.4,{cast:!1,recv:!1});Op.userData.noMerge=!0;{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,64);t.addColorStop(0,"rgba(40,70,90,.42)"),t.addColorStop(.55,"rgba(40,70,90,.2)"),t.addColorStop(1,"rgba(40,70,90,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let i=new qi(n),s=new wt(new si(1,1),new Gn({map:i,transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(1.5,-3.33,2),s.scale.set(32,23,1),s.castShadow=s.receiveShadow=!1,s.userData.noMerge=!0,et.add(s)}var bp=Float32Array.from(Cc.attributes.position.array),bt={home:new C(-9,0,1.5),library:new C(-8.5,0,-5.5),school:new C(1,0,-6.5),museum:new C(10.5,0,-3.5),dome:new C(1.5,0,2.5),court:new C(10.5,0,5.2),phone:new C(5.9,0,-4.7)},As={home:new C(-7.4,0,3.6),library:new C(-6.2,0,-3.4),school:new C(1,0,-4.1),museum:new C(8.2,0,-1.6),dome:new C(1.5,0,5.2),court:new C(8.2,0,4.4),bench:new C(-4,0,6.2)},Ds={home:As.home,library:As.library,school:As.school,museum:As.museum,dome:As.dome,court:As.court,bench:As.bench,a:new C(-4.5,0,1.5),b:new C(-4.2,0,-3.2),c:new C(1,0,-2),d:new C(6,0,-1.5),e:new C(5.5,0,4.6),f:new C(-3,0,5.5),start:new C(-1.6,0,4.4)},Bp=[["home","a"],["a","b"],["b","library"],["b","c"],["c","school"],["c","d"],["d","museum"],["d","e"],["e","court"],["e","dome"],["a","f"],["f","bench"],["f","start"],["start","dome"],["a","dome"]],zp=P(_t.path,{roughness:.95});function Qv(n,e,t=1.1){let i=n.distanceTo(e),s=Math.atan2(e.x-n.x,e.z-n.z),r=b(et,D(t,.07,i+t*.9),zp,(n.x+e.x)/2,.02,(n.z+e.z)/2,{ry:s,cast:!1});r.position.y=.035}Bp.forEach(([n,e])=>Qv(Ds[n],Ds[e]));Object.values(Ds).forEach(n=>b(et,Oe(.62,.62,.07,9),zp,n.x,.035,n.z,{cast:!1}));var jv=new Gn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function mi(n,e,t){let i=new wt(new mr(e,8,6),jv);return i.position.y=t,i.castShadow=i.receiveShadow=!1,i.renderOrder=999,n.add(i),i}var In=[],Ic=[],Hp=[],Ga=P(_t.wall),kp=P(_t.roof),Ht=P(_t.cream),$v=P(_t.door),Ni=[];function Mu(n,e,t,i,s,r,a=0){return b(n,D(e,t,.08),Rt(16774100),i,s,r,{ry:a,cast:!1})}function eS(){let n=new Ne;n.position.copy(bt.home),n.rotation.y=.25,et.add(n),b(n,D(3.6,1.9,2.8),Ga,0,.95,0),b(n,new ni(0,1,1,4),kp,0,2.55,0,{ry:Math.PI/4}).scale.set(2.9,1.5,2.2),b(n,D(.5,1.1,.5),Ht,1,2.9,-.3),b(n,D(.62,.15,.62),P(14141885),1,3.5,-.3),b(n,D(.7,1.15,.1),P(15899290),0,.58,1.42),b(n,D(1.1,.12,.5),Ht,0,.06,1.62),Mu(n,.7,.75,-1.1,1.1,1.42),Mu(n,.7,.75,1.1,1.1,1.42),Mu(n,.1,.75,1.82,1.1,0,0).rotation.y=0;for(let t=0;t<9;t++){let i=t/8;b(n,D(.1,.55,.1),Ht,-3.4+i*3.2,.28,3.2+Math.sin(i*3)*.1)}b(n,D(3.3,.08,.06),Ht,-1.8,.45,3.2),b(n,D(3.3,.08,.06),Ht,-1.8,.2,3.2),In.push({x:bt.home.x,z:bt.home.z,r:2.25,h:3.6}),Ni.push({key:"home",group:n,label:"HOME",hit:new C(0,1.5,0),r:2.4})}function tS(){let n=new Ne;n.position.copy(bt.library),et.add(n),b(n,D(1.4,2.6,3.4),Ga,-2.2,1.3,0),b(n,D(5.6,.25,4),Ht,.2,2.7,0),b(n,D(4,2.4,.12),P(14412227),.9,1.2,-1.7),b(n,D(4,.12,3.4),Ht,.9,.06,0),b(n,D(3.4,.09,.45),is(),.9,1.35,-1.45);for(let e=0;e<9;e++)b(n,D(.16,.42+ce()*.12,.3),P([10276751,15909842,13156590,15980964][e%4]),-.5+e*.36,1.62,-1.45);b(n,D(1.2,.5,.9),P(9619088),.2,.3,-.3),b(n,D(1.2,.5,.9),P(9619088),2.1,.3,-.3),b(n,Oe(.45,.45,.08,8),is(),1.15,.38,-.3),b(n,Oe(.07,.07,.35,6),is(),1.15,.2,-.3);for(let e of[.5,1.8]){let t=b(n,Le(.2,0),Rt(),e,2.35,.1);t.castShadow=!1,b(n,Oe(.015,.015,.5,4),is(),e,2.6,.1)}b(n,D(.9,1.8,.1),Rt(16773327),-2.2,.95,1.72),In.push({x:bt.library.x,z:bt.library.z,r:2.7,h:2.83}),Ic.push({x:bt.library.x+.2,z:bt.library.z,hx:2.7,hz:1.9,top:2.83}),Ni.push({key:"library",group:n,label:"RESEARCH",hit:new C(0,1.4,0),r:2.8})}function is(){return P(_t.wood)}function nS(){let n=new Ne;n.position.copy(bt.school),et.add(n),b(n,D(6.2,2.4,3.2),Ga,0,1.2,0),b(n,D(2.6,2.7,1.4),Ga,0,1.35,1.9);let e=b(n,new ni(1.6,1.6,1.6,3),kp,0,3,1.9,{rz:0,ry:0});e.rotation.set(Math.PI/2,0,Math.PI/2),e.scale.set(.35,1,1);for(let i of[-.85,.85])b(n,Oe(.12,.12,2.3,8),Ht,i,1.15,2.7);b(n,D(1,1.5,.1),$v,0,.78,2.62);for(let i of[-2.3,-1.2,1.2,2.3])b(n,D(.62,.95,.08),Rt(15985151),i,1.4,1.62);b(n,Oe(1.9,2.4,.55,12),P(_t.dome),0,2.9,-.2);let t=b(n,new mr(1.9,10,6,0,Math.PI*2,0,Math.PI/2),P(_t.dome),0,3.15,-.2);b(n,Le(.18,0),Ht,0,5.2,-.2);for(let i of[-2.6,2.6])b(n,Oe(.2,.2,1.1,6),P(9224530),i,.55,3.3),b(n,Le(.4,0),P(9224530),i,1.4,3.3);b(n,D(2.2,.15,1.2),Ht,0,.07,3.3),In.push({x:bt.school.x,z:bt.school.z,r:3,h:2.4}),Ic.push({x:bt.school.x,z:bt.school.z,hx:3,hz:1.5,top:2.4}),Ni.push({key:"school",group:n,label:"TEACHING",hit:new C(0,2,1),r:3.4})}function iS(){let n=new Ne;n.position.copy(bt.museum),et.add(n),b(n,D(1.6,2.5,3.4),Ga,-1.9,1.25,0),b(n,D(5.2,.25,4),Ht,.3,2.6,0),b(n,D(3.6,2.3,.12),P(16772297),.8,1.15,-1.6,{}),b(n,D(3.6,.12,3.2),Ht,.8,.06,0),b(n,D(.9,.7,.08),P(11130094),.4,1.45,-1.5),b(n,D(.9,.7,.08),P(16040143),1.6,1.45,-1.5);for(let e of[.4,1.6])b(n,Le(.2,0),Rt(16774100),e,2.2,-1.2);for(let e of[.2,1.3,2.3])b(n,D(.4,.55,.4),Ht,e,.3,.2),b(n,Le(.17,0),P([15968713,11130094,15980964][Math.round(e*3)%3]),e,.8,.2);b(n,D(1,1.9,.1),Rt(16773327),-1.9,1,1.72),b(n,D(2.4,.2,.9),Ht,-.4,.1,2.2),In.push({x:bt.museum.x,z:bt.museum.z,r:2.7,h:2.73}),Ic.push({x:bt.museum.x+.3,z:bt.museum.z,hx:2.5,hz:1.9,top:2.73}),Ni.push({key:"museum",group:n,label:"PROJECTS",hit:new C(0,1.4,0),r:2.9})}function sS(){let n=new Ne;n.position.copy(bt.dome),et.add(n),b(n,Oe(3,3.2,.4,14),Ht,0,.2,0);let e=new wt(new _s(2.9,1),new Zi({color:_t.glass,flatShading:!0,transparent:!0,opacity:.28,roughness:.1,side:wn}));e.position.y=.4,e.scale.y=.95,e.castShadow=!1,n.add(e);let t=new sa(new ya(new _s(2.92,1)),new hr({color:15124896}));t.position.y=.4,t.scale.y=.95,n.add(t),b(n,Oe(2.9,2.9,.05,14),P(15063490),0,.42,0);for(let[s,r,a]of[[-1,.2,1.1],[1.1,-.3,1],[0,-1.1,.9]]){b(n,D(1*a,.35,.8*a),is(),s,.65,r);for(let o=0;o<6;o++)b(n,new ii(.16,1.1*a,4),P(7123018),s+(ce()-.5)*.7*a,1.3,r+(ce()-.5)*.5*a).rotation.set((ce()-.5)*.7,ce()*3,(ce()-.5)*.7)}let i=b(n,Le(.25,0),Rt(16773572),0,2.2,0);i.castShadow=!1,b(n,D(1,.1,.6),Ht,0,.1,3.5,{recv:!0}),In.push({x:bt.dome.x,z:bt.dome.z,r:2.55,h:3.6}),Ni.push({key:"dome",group:n,label:"QUALIFICATIONS",hit:new C(0,1.6,0),r:3.2})}function rS(){let n=new Ne;n.position.copy(bt.court),n.rotation.y=-.18,et.add(n),b(n,D(7,.1,4.6),P(_t.courtEdge),0,.05,0,{cast:!1}),b(n,D(6.2,.12,3.9),P(_t.court),0,.07,0,{cast:!1}),b(n,D(.06,.13,3.9),P(16777215),0,.09,0,{cast:!1});for(let i of[-1.9,1.9])b(n,D(.05,.13,3.9),P(16777215),i,.09,0,{cast:!1});b(n,D(6.2,.05,.05),P(16777215),0,.09,0,{cast:!1});for(let i of[-2.05,2.05])b(n,Oe(.05,.05,.85,6),P(16777215),0,.48,i);let e=b(n,D(.04,.45,4.1),P(2766160,{transparent:!0,opacity:.8}),0,.7,0);e.castShadow=!1;let t=(i,s)=>{let r=new Ne;b(r,Oe(.2,.2,.04,8),P(i),0,0,0,{rx:Math.PI/2}),b(r,D(.05,.3,.05),is(),0,-.25,0),r.position.set(s,.2,2.9),r.rotation.set(.1,0,.5),n.add(r)};t(8307692,2.6),t(16177551,-2.5);for(let[i,s]of[[-2.8,-2.7],[2.8,-2.7]]){b(n,Oe(.2,.26,.22,8),P(14274498),i,.11,s),b(n,Oe(.08,.11,3.8,6),P(12371660),i,2,s),b(n,D(.96,.3,.5),P(9344927),i,3.95,s+.1),b(n,D(.86,.16,.42),Rt(16774866),i,3.78,s+.02,{cast:!1});let r=new _r(16773316,0,17,1.4);r.position.set(i,3.6,s+.3),n.add(r),Hp.push({l:r,power:20})}Rc(n,n)}function Gp(){let n=new Ne;n.position.copy(bt.phone),n.rotation.y=-.5,et.add(n);let e=P(13914442),t=P(11943738),i=P(16183264),s=new Zi({color:14676731,flatShading:!0,transparent:!0,opacity:.5,roughness:.12});b(n,D(1.5,.16,1.5),P(14274498),0,.08,0);for(let[r,a]of[[-.62,-.62],[.62,-.62],[-.62,.62],[.62,.62]])b(n,D(.18,2.6,.18),e,r,1.42,a);for(let[r,a,o]of[[0,-.62,0],[0,.62,0],[-.62,0,Math.PI/2],[.62,0,Math.PI/2]]){b(n,D(1.06,2.1,.07),s,r,1.6,a,{ry:o,cast:!1});for(let l of[.92,1.45,1.98,2.5])b(n,D(1.08,.07,.1),e,r,l,a,{ry:o});b(n,D(.08,2.1,.1),e,r,1.6,a,{ry:o})}b(n,D(1.62,.32,1.62),e,0,2.86,0),b(n,D(1.34,.24,1.34),t,0,3.14,0),b(n,Le(.14,0),P(15980964),0,3.34,0);for(let[r,a,o]of[[0,-.82,0],[.82,0,Math.PI/2]])b(n,D(.92,.22,.05),i,r,2.6,a,{ry:o,cast:!1});b(n,D(.9,.5,.06),Rt(16773327),0,1.05,-.56,{cast:!1}),In.push({x:bt.phone.x,z:bt.phone.z,r:1.15,h:3.4}),Gp.group=n}var ns={x:-4.6,z:7.4,seatY:.5,face:ka};function Fu(){let n=new Ne;n.position.set(ns.x,0,ns.z),n.rotation.y=ns.face,et.add(n);let e=P(14263402),t=P(12619614),i=P(7963533);for(let s of[-.92,.92])b(n,D(.12,.5,.12),i,s,.25,.22),b(n,D(.12,.5,.12),i,s,.25,-.22),b(n,D(.11,.62,.11),i,s,.78,-.3),b(n,D(.13,.08,.66),e,s,.76,-.02);for(let s=0;s<4;s++)b(n,D(2.2,.08,.15),s%2?t:e,0,.5,-.26+s*.18);for(let s=0;s<3;s++)b(n,D(2.2,.13,.08),s%2?t:e,0,.74+s*.2,-.33);b(n,D(2.3,.07,.1),t,0,1.19,-.33),n.userData.noMerge=!0,mi(n,1.1,.6),In.push({x:ns.x,z:ns.z,r:1,h:1.3}),Fu.group=n}function aS(n,e,t=1){In.push({x:n,z:e,r:.5*t,h:4.5});let i=new Ne;i.position.set(n,0,e),i.scale.setScalar(t),et.add(i),b(i,Oe(.12,.16,.5,5),P(_t.trunk),0,.25,0);for(let s=0;s<4;s++)b(i,new ii(.95-s*.18,1,6),P(s%2?9816410:_t.pine),0,.95+s*.62,0,{ry:s});for(let s=0;s<5;s++){let r=ce()*6.3,a=.45+ce()*.3;b(i,Le(.075,0),Rt(16774088),Math.cos(r)*a,1.1+ce()*1.9,Math.sin(r)*a,{cast:!1})}return i}var Vp=[];function os(n,e,t=1,i=_t.pink){In.push({x:n,z:e,r:.5*t,h:3.6});let s=new Ne;s.position.set(n,0,e),s.scale.setScalar(t),et.add(s),b(s,Oe(.12,.2,1.5,5),P(_t.trunk),0,.75,0,{rz:.08});let r=P(i);[[0,2.1,0,.95],[.6,1.8,.2,.7],[-.6,1.9,-.2,.7],[.1,2.7,.1,.6],[-.1,1.7,.6,.6]].forEach(([a,o,l,c])=>{b(s,Le(c,0),r,a,o,l).rotation.set(ce()*3,ce()*3,0)});for(let a=0;a<7;a++){let o=ce()*6.3,l=.55+ce()*.55;b(s,Le(.08,0),Rt(16774088),Math.cos(o)*l,1.6+ce()*1.3,Math.sin(o)*l,{cast:!1})}return Vp.push(s),s}function oS(n,e,t=1){In.push({x:n,z:e,r:.5*t,h:2.6});let i=new Ne;i.position.set(n,0,e),i.scale.setScalar(t),et.add(i),b(i,Oe(.1,.15,1,5),P(_t.trunk),0,.5,0),b(i,Le(.85,0),P(_t.leaf),0,1.5,0),b(i,Le(.55,0),P(12115580),.4,1.2,.3);for(let s=0;s<4;s++){let r=ce()*6.3;b(i,Le(.075,0),Rt(16774088),Math.cos(r)*.7,1.2+ce()*.9,Math.sin(r)*.7,{cast:!1})}Vp.push(i)}function lS(n,e,t=1){let i=new Ne;i.position.set(n,.12*t,e),et.add(i);for(let s=0;s<3;s++)b(i,Le(.3*t,0),P(s%2?9225818:10408810),(ce()-.5)*.5*t,.1*s,(ce()-.5)*.5*t).rotation.set(ce(),ce(),0)}function mc(n,e,t,i=1,s=_t.cliff){let r=b(et,Le(.6*i,0),P(s),n,e,t);r.rotation.set(ce()*3,ce()*3,0),r.scale.y=.75}var cS=[new C(-5.6,0,-4.4),new C(-5.4,0,-1.2),new C(-5.8,0,2.2),new C(-6.4,0,5.2),new C(-7.5,0,8.8)],Ep=new dr(cS),hS=P(_t.water,{roughness:.2,emissive:5945064,emissiveIntensity:.12,transparent:!0,opacity:.95});{for(let s=0;s<28;s++){let r=Ep.getPoint(s/28),a=Ep.getPoint((s+1)/28),o=r.distanceTo(a),l=b(et,D(1,.05,o+.15),hS,(r.x+a.x)/2,-.01,(r.z+a.z)/2,{ry:Math.atan2(a.x-r.x,a.z-r.z),cast:!1})}b(et,D(2.2,1.6,1.2),P(_t.cliff),-5.5,.6,-5.2),b(et,D(1.3,1.5,.15),P(10936058,{emissive:7128304,emissiveIntensity:.18,transparent:!0,opacity:.95}),-5.5,.65,-4.55);let e=b(et,D(1,1.3,.06),P(15202559,{transparent:!0,opacity:.85,emissive:12577535,emissiveIntensity:.25}),-5.5,.62,-4.45,{cast:!1});e.userData.noMerge=!0,mc(-6.6,.3,-5,1.1),mc(-4.4,.3,-5.4,1.2),mc(-6.9,.2,-3.6,.8);let t=new Ne;t.position.set(-5.7,0,1.1),et.add(t),b(t,D(1.9,.18,2),Ht,0,.45,0),b(t,D(1.4,.2,1.6),Ht,0,.62,0).scale.set(1,.6,1);for(let s of[-.95,.95])b(t,D(.12,.34,2),Ht,s,.74,0),b(t,Le(.13,0),Rt(16773327),s,1,.95),b(t,Le(.13,0),Rt(16773327),s,1,-.95);b(t,D(1,.5,.6),Ht,0,.2,-.8,{cast:!1});let i=new Ne;i.position.set(-7.7,0,8.4),i.rotation.y=-.3,et.add(i),b(i,D(2.4,.14,1.6),is(),0,-.25,0);for(let[s,r]of[[-1.1,-.7],[1.1,-.7],[-1.1,.7],[1.1,.7]])b(i,D(.12,1,.12),is(),s,-.7,r)}eS();tS();nS();iS();sS();rS();Gp();Fu();[[-13,-1.5,1.3],[-12.2,4,1],[-10.2,5.5,.9]].forEach(([n,e,t])=>oS(n,e,t));os(-13.2,.4,1.35);os(-11,-2.2,1);os(-4.6,.2,1.1);os(3.6,-4.8,1);os(13.2,-1.5,1.1);os(13,4.6,1.15);os(5.2,6.4,1);os(-6.5,-7.8,1.1);[[-12.5,-6,1.3],[-10.8,-8,1],[-13.5,-4.3,1],[-3.5,-8,1.2],[6.5,-8,1.2],[13.6,-6.2,1.4],[14.2,1.5,1.2],[.4,7.6,1.3],[-5,5.4,1]].forEach(([n,e,t])=>aS(n,e,t));for(let n=0;n<46;n++){let e=ce()*Math.PI*2,t=3+ce()*11,i=Math.cos(e)*t*1.2,s=Math.sin(e)*t*.75;Math.abs(i)<14.5&&Math.abs(s)<9.3&&lS(i,s,.7+ce()*.6)}for(let n=0;n<16;n++){let e=ce()*Math.PI*2;mc(Math.cos(e)*16,-3.4+ce()*.6,Math.sin(e)*11.5,.8+ce()*1.2,n%2?_t.cliff:_t.cliffDark)}Ni.forEach(n=>{Rc(n.group,n.group),n.group.userData.noMerge=!0,n.base=n.group.position.y});Rc(et,et);var Wp=[];for(let n=0;n<6;n++){let e=new Ne,t=P(16777215,{roughness:1,emissive:16777215,emissiveIntensity:.18,transparent:!0,opacity:.92});for(let i=0;i<4;i++)b(e,Le(1+ce()*.7,0),t,i*1.3-2,ce()*.4,ce()*.8,{cast:!1});e.scale.setScalar(.55+ce()*.3),e.position.set(-36+n*14,10+ce()*3,-26+ce()*5),e.userData.noMerge=!0,e.userData.speed=.15+ce()*.12,et.add(e),Wp.push(e)}var Ou=70,Bu=new St,gc=new Float32Array(Ou*3);for(let n=0;n<Ou;n++)gc[n*3]=-14+ce()*28,gc[n*3+1]=ce()*7,gc[n*3+2]=-9+ce()*18;Bu.setAttribute("position",new Yt(gc,3));var Pc=new Xi(Bu,new Ri({color:16761562,size:.16,transparent:!0,opacity:.9}));Ui.add(Pc);var zu=new St,xc=new Float32Array(120);for(let n=0;n<40;n++)xc[n*3]=-13+ce()*26,xc[n*3+1]=.5+ce()*2.5,xc[n*3+2]=-8+ce()*16;zu.setAttribute("position",new Yt(xc,3));var Xp=new Ri({color:16773544,size:.2,transparent:!0,opacity:0}),Hu=new Xi(zu,Xp);Ui.add(Hu);function qp(){let n=new Ne,e=P(16241597),t=P(3354162),i=P(16248794),s=P(5930928),r=P(4943e3),a=P(16051424),o=P(15770534),l=P(4866118),c={};for(let g of["L","R"]){let y=new Ne;y.position.set(g==="L"?-.13:.13,.52,0),b(y,D(.21,.28,.23),s,0,-.14,0);let T=new Ne;T.position.y=-.28,y.add(T),b(T,D(.2,.22,.21),r,0,-.11,0),b(T,D(.23,.1,.31),a,0,-.245,.05),n.add(y),c["leg"+g]=y,c["knee"+g]=T}b(n,D(.62,.62,.38),i,0,.84,0),b(n,D(.64,.12,.4),s,0,.55,0),b(n,D(.66,.14,.42),i,0,1.1,0);let h=new Ne,d=new Ne;h.position.set(-.35,1.04,0),d.position.set(.35,1.04,0);for(let g of[h,d])b(g,D(.15,.2,.17),i,0,-.09,0),b(g,D(.12,.28,.14),e,0,-.33,0),b(g,D(.13,.12,.15),e,0,-.52,0);n.add(h,d),b(n,D(.17,.1,.17),e,0,1.15,0);let u=new Ne;u.position.y=1.52,n.add(u),u.scale.setScalar(1.35),b(u,Le(.33,2),e,0,0,0),b(u,Le(.35,1),t,0,.05,-.13).scale.set(.99,.96,.88),b(u,Le(.21,1),t,-.02,.4,-.12);let m=b(u,D(.56,.17,.3),t,0,.235,.07);m.rotation.x=-.16,b(u,D(.12,.32,.15),t,-.3,0,-.02),b(u,D(.12,.32,.15),t,.3,0,-.02);for(let g of[-.12,.12])b(u,Le(.038,1),l,g,-.01,.3,{cast:!1});for(let g of[-.21,.21])b(u,Le(.055,1),o,g,-.1,.26,{cast:!1}).scale.set(1.3,.75,.6);let S=b(u,new ri(.075,.016,4,10,Math.PI),l,0,-.04,.3,{cast:!1});S.rotation.z=Math.PI;let p=new wt(new la(.36,14),new Gn({color:3955276,transparent:!0,opacity:.2}));return p.rotation.x=-Math.PI/2,p.position.y=.05,n.add(p),n.userData=Object.assign({armL:h,armR:d,head:u,shadow:p,wave:0,sit:0,swing:0},c),n}function Yp(n,e,t,i,s){let r=n.userData;r.wave>0&&(r.wave=Math.max(0,r.wave-t));let a=r.wave>0;if(r.sit>.01){let o=Math.min(1,r.sit);r.legL.rotation.x=-1.45*o,r.legR.rotation.x=-1.45*o,r.kneeL.rotation.x=1.5*o,r.kneeR.rotation.x=1.5*o,r.armL.rotation.x=-.3*o,a||(r.armR.rotation.x=-.3*o),r.head.rotation.y=Math.sin(i*.6)*.1}else if(e){let o=Math.sin(s);r.legL.rotation.x=o*.72,r.legR.rotation.x=-o*.72,r.kneeL.rotation.x=Math.max(0,-o)*.75,r.kneeR.rotation.x=Math.max(0,o)*.75,r.armL.rotation.x=-o*.5,a||(r.armR.rotation.x=o*.5)}else r.legL.rotation.x*=.8,r.legR.rotation.x*=.8,r.kneeL.rotation.x*=.8,r.kneeR.rotation.x*=.8,r.armL.rotation.x*=.8,a||(r.armR.rotation.x*=.8);if(a?(r.armR.rotation.x=-2.5,r.armR.rotation.z=-.5+Math.sin(i*16)*.5,r.head.rotation.z=Math.sin(i*8)*.06):(r.armR.rotation.z*=.8,r.head.rotation.z*=.85),r.swing>0){r.swing=Math.max(0,r.swing-t);let o=Math.sin((1-r.swing/.45)*Math.PI);r.armR.rotation.x=-.2-o*2.3,r.armR.rotation.z=-o*.7}}function Jp(n,e,t,i){let s=new Ne,r=P(n),a=P(e);b(s,D(.5,.3,.28),r,0,.32,0),b(s,D(.28,.28,.26),r,.3,.46,0),b(s,D(.12,.1,.1),P(3879988),.46,.44,0);for(let c of[-.1,.1])b(s,D(.05,.05,.04),P(2827814),.43,.52,c*1.1,{cast:!1}),b(s,i?D(.08,.2,.08):new ii(.07,.2,4),a,.28,i?.46:.68,c*2.2);let o=[];for(let[c,h]of[[-.18,-.1],[-.18,.1],[.18,-.1],[.18,.1]]){let d=b(s,D(.07,.2,.07),r,c,.1,h);o.push(d)}let l=b(s,D(.1,.1,.22),P(t),-.3,.45,0);return l.rotation.y=0,l.geometry.translate(0,0,0),s.userData={tail:l,legs:o},s}var gi=[],uS=1.7,Zp=.52*uS,yn=null;function dS(n){yn=n,_n=null,Nn=0,Is=0,Ar=0,Un=!1,ut.position.set(n.x,n.seatY-Zp,n.z),ut.rotation.y=n.face,Zn("A good spot to watch the water \u2661")}function Ru(){if(!yn)return;let n=yn.face;ut.position.set(yn.x+Math.sin(n)*1.35,0,yn.z+Math.cos(n)*1.35),yn=null}var ut=qp();ut.scale.setScalar(1.7);ut.position.copy(Ds.start);ut.rotation.y=.32;et.add(ut);mi(ut,.75,.95);function Kp(){ut.userData.wave=1.6,Zn("Hi, I\u2019m Ann! \u2661")}gi.push({obj:ut,label:"SAY HI",fn:Kp});gi.push({obj:Fu.group,label:"SIT ON THE BENCH",fn:()=>yn?Ru():mm("bench",()=>dS(ns))});var Za=Jp(16447728,15852772,16777215,!1),Ka=Jp(14659971,12488293,15121808,!0);Za.scale.setScalar(1.35);Ka.scale.setScalar(1.35);[Za,Ka].forEach(n=>mi(n,.62,.38));Za.position.set(-9.9,0,5.2);Ka.position.set(-8.5,0,5.5);et.add(Za,Ka);var Va=[{g:Za,home:new C(-9.9,0,5.2),bowl:new C(-10.7,0,6.4),t:0,goal:null,name:"Junbi",hop:0},{g:Ka,home:new C(-8.5,0,5.5),bowl:new C(-7.6,0,6.4),t:1.4,goal:null,name:"Jjanggu",hop:0}];Va.forEach(n=>gi.push({obj:n.g,label:"PET "+n.name.toUpperCase(),fn:()=>Qp(n)}));Va.forEach((n,e)=>{let t=new Ne;t.position.copy(n.bowl),et.add(t),mi(t,.42,.14),b(t,Oe(.26,.18,.16,10),P(e?15185862:12048360),0,.08,0),b(t,Oe(.2,.2,.03,10),P(16183778),0,.17,0,{cast:!1});let i=new Ne;i.visible=!1,t.add(i);for(let s=0;s<7;s++)b(i,Le(.055,0),P(11897953),(ce()-.5)*.26,.19+ce()*.04,(ce()-.5)*.26,{cast:!1});n.bowlEl=t,n.food=i,gi.push({obj:t,label:"FEED "+n.name.toUpperCase(),fn:()=>jp(n)})});function wc(n,e=3){for(let t=0;t<e;t++){let i=new wt(Le(.09,0),P(15891869,{emissive:15891869,emissiveIntensity:.4}));i.position.copy(n).add(new C((ce()-.5)*.4,.7+ce()*.2,(ce()-.5)*.4)),i.castShadow=!1,et.add(i),_c.push({m:i,t:0,life:1.1})}}var _c=[];function Qp(n){n.hop=.9,wc(n.g.position),Zn(n.name+" loves the pets! \u2661")}function jp(n){n.food.visible=!0,n.fedUntil=zt+6,n.goal=n.bowl.clone(),n.t=zt+5,Zn("Dinner for "+n.name+"!")}var yc=0;function Zn(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),yc=zt+2.2}var $p=[],Fn=new Ne;Ha.add(Fn);var Lc=new Ne;Fn.add(Lc);var Dc=(n,e=1)=>new Gn({color:n,transparent:!0,opacity:e,side:wn}),ku=[],Qa=7.5;{let n=document.createElement("canvas");n.width=4,n.height=256;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.1,"rgba(255,255,255,.75)"),t.addColorStop(.3,"#fff"),t.addColorStop(1,"#fff"),e.fillStyle=t,e.fillRect(0,0,4,256);let i=new Gn({color:7652586,transparent:!0,alphaMap:new qi(n),depthWrite:!1});ku.push({m:i,day:7652586,night:1913955});let s=new wt(new si(130,40),i);s.position.set(0,Qa-20,0),s.renderOrder=-15,Lc.add(s)}function em(n,e,t,i,s){let r=n.map(([c,h])=>[c,h+e]),a=new Ji;a.moveTo(r[0][0],r[0][1]);for(let c=1;c<r.length;c++)a.lineTo(r[c][0],r[c][1]);a.lineTo(r[r.length-1][0],e),a.lineTo(r[0][0],e),a.closePath();let o=Dc(t,1);ku.push({m:o,day:t,night:i});let l=new wt(new xa(a),o);return l.renderOrder=s,Lc.add(l),l}em([[-40,0],[-30,2.3],[-21,1.3],[-14,2.9],[-6,1.6],[1,2.4],[9,1],[17,0]],Qa-.25,11061979,2504801,-14);em([[1,0],[4.4,1.8],[7.6,2.7],[10,2],[12.2,3.1],[15.4,1.8],[18.6,2.5],[22.2,.8],[26,0]],Qa-.3,10272172,2243166,-13);var Gu=new Ne;Gu.position.set(1,-1.2,0);Fn.add(Gu);[16752029,16763274,16773793,11135140,10473717,13021680].forEach((n,e)=>{let t=Dc(n,.24);$p.push(t);let i=new wt(new ri(12.6-e*.4,.19,3,56,Math.PI),t);i.renderOrder=-16,i.castShadow=i.receiveShadow=!1,Gu.add(i)});var tm=new St,Cu=110,vc=new Float32Array(Cu*3);for(let n=0;n<Cu;n++){let e=n/(Cu-1)*Math.PI,t=10.6+ce()*2.9;vc[n*3]=1+Math.cos(e)*t,vc[n*3+1]=-1.2+Math.sin(e)*t,vc[n*3+2]=0}tm.setAttribute("position",new Yt(vc,3));var nm=new Ri({color:16774876,size:.26,transparent:!0,opacity:0,depthWrite:!1}),im=new Xi(tm,nm);im.renderOrder=-11;Fn.add(im);var sm=Dc(16774872,0),rm=Dc(16774088,0),ja=new wt(Le(1,2),sm);ja.renderOrder=-11;ja.castShadow=!1;ja.position.set(-11.5,10.4,0);Fn.add(ja);var Nc=new wt(Le(2.1,2),rm);Nc.renderOrder=-11;Nc.castShadow=!1;Nc.position.copy(ja.position);Fn.add(Nc);var am=new St,om=150,Sc=new Float32Array(om*3);for(let n=0;n<om;n++)Sc[n*3]=(ce()-.5)*62,Sc[n*3+1]=Qa+.8+ce()*5.6,Sc[n*3+2]=0;am.setAttribute("position",new Yt(Sc,3));var lm=new Ri({color:16777215,size:.17,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),cm=new Xi(am,lm);cm.renderOrder=-11;Fn.add(cm);var Tp=new C;function hm(){Fn.quaternion.copy(ln.quaternion),Fn.position.copy(fi).addScaledVector(Dp,-70);let n=Np/13.2;Fn.scale.setScalar(n),Tp.set(0,-3.4,-12.5).sub(fi);let e=Tp.dot(Lp)/n;Lc.position.y=Yn.clamp(e,-1,11)-Qa}function fS(){let n=new Ne,e=P(12172998),t=P(14278114),i=P(4867146);b(n,Le(.3,1),e,0,.32,0),b(n,Le(.24,1),e,0,.66,.03);for(let s of[-.22,.22])b(n,Le(.15,0),t,s,.76,-.02),b(n,Le(.1,0),P(15721446),s*1.05,.76,.05);b(n,Le(.09,1),i,0,.62,.22);for(let s of[-.09,.09])b(n,Le(.03,0),i,s,.72,.21,{cast:!1});for(let s of[-.16,.16])b(n,D(.11,.18,.12),e,s,.1,.02);return n}function pS(){let n=new Ne,e=P(11567444),t=P(9332032),i=P(4864560);b(n,Le(.34,1),e,0,.34,0).scale.set(1.5,.95,1),b(n,Le(.24,1),e,.46,.46,0).scale.set(1.25,.95,.95),b(n,Le(.09,1),i,.74,.44,0);for(let a of[-.12,.12])b(n,Le(.05,0),t,.42,.66,a),b(n,Le(.028,0),i,.64,.54,a,{cast:!1});for(let[a,o]of[[-.3,-.14],[-.3,.14],[.26,-.14],[.26,.14]])b(n,D(.1,.2,.1),t,a,.1,o);return n}{let n=fS();n.position.set(-11.6,0,2.6),n.rotation.y=1,n.scale.setScalar(1.15),mi(n,.62,.45),et.add(n);let e=pS();e.position.set(-10.6,0,3.5),e.rotation.y=2.3,e.scale.setScalar(1.15),mi(e,.66,.4),et.add(e),gi.push({obj:n,label:"A KOALA?",fn:()=>{wc(n.position,2),Zn("A koala in Hawaii? Don\u2019t ask. \u2661")}}),gi.push({obj:e,label:"A CAPYBARA?",fn:()=>{wc(e.position,2),Zn("The capybara is unbothered, as always.")}})}var Vu=[];[[9.2,7.3],[11.6,7.1],[12.8,3.1]].forEach(([n,e])=>{let t=new wt(Le(.17,1),P(16773227,{emissive:16769871,emissiveIntensity:.2}));t.position.set(n,.17,e),t.castShadow=!0,et.add(t),mi(t,.46,0);let i={m:t,vy:0,vx:0,vz:0};Vu.push(i),gi.push({obj:t,label:"BOUNCE!",fn:()=>{i.vy=5.2+ce()*1.6,i.vx=(ce()-.5)*2.4,i.vz=(ce()-.5)*2.4,Zn("Boing!")}})});function mS(n){for(let e of Vu){if(e.vy===0&&Math.abs(e.m.position.y-.17)<.001&&!e.vx&&!e.vz)continue;e.vy-=14*n,e.m.position.x+=e.vx*n,e.m.position.z+=e.vz*n,e.m.position.y+=e.vy*n,e.m.rotation.x+=e.vz*n*2,e.m.rotation.z-=e.vx*n*2,e.m.position.y<=.17&&(e.m.position.y=.17,e.vy=-e.vy*.55,e.vx*=.7,e.vz*=.7,Math.abs(e.vy)<.5&&(e.vy=0,e.vx=0,e.vz=0)),Math.hypot(e.m.position.x/14,e.m.position.z/9)>1&&(e.vx*=-.6,e.vz*=-.6,e.m.position.multiplyScalar(.985))}}var Cs={};Bp.forEach(([n,e])=>{(Cs[n]||(Cs[n]=[])).push(e),(Cs[e]||(Cs[e]=[])).push(n)});function gS(n,e){if(n===e)return[e];let t=[[n]],i=new Set([n]);for(;t.length;){let s=t.shift(),r=s[s.length-1];for(let a of Cs[r]){if(i.has(a))continue;let o=[...s,a];if(a===e)return o;i.add(a),t.push(o)}}return[e]}var _n=null,bu=0,um=14,xS=3.45,Nn=0,Is=0,Ar=0,Un=!1,Ba=0;function dm(){Ar>=2||(Ar===0?Is=6.6:Is=Math.sqrt(2*um*Math.max(.7,xS-Nn)),Ar++,Un=!0)}function fm(n,e){Un||Nn>e+.002?(Un=!0,Is-=um*n,Nn+=Is*n,Nn<=e&&Is<=0&&(Nn=e,Is=0,Ar=0,Un=!1)):(Nn=e,Ar=0)}function pm(n){Un&&(n.legL.rotation.x=-.6,n.legR.rotation.x=-.25,n.kneeL.rotation.x=1.1,n.kneeR.rotation.x=.5,n.armL.rotation.x=-1.4,n.wave<=0&&n.swing<=0&&(n.armR.rotation.x=-1.4))}function _S(n){let e="start",t=1e9;for(let i in Ds){let s=Ds[i].distanceToSquared(n);s<t&&(t=s,e=i)}return e}function mm(n,e){let t=gS(_S(ut.position),n);_n={pts:[ut.position.clone(),...t.map(i=>Ds[i].clone())],i:1,done:e},document.getElementById("hint")?.classList.add("gone")}var cn=new Set,wp={rx:13.6,rz:8.6};function yS(n,e,t,i){for(let s of In){if(t>=(s.h===void 0?99:s.h)-.08)continue;let r=n.x-s.x,a=n.z-s.z,o=s.r+e,l=r*r+a*a;if(l<o*o){let c=Math.sqrt(l)||1e-4,h=s.x+r/c*o,d=s.z+a/c*o;if(i){let u=h-n.x,f=d-n.z,m=Math.hypot(u,f),S=Math.min(1,i/(m||1));n.x+=u*S,n.z+=f*S}else n.x=h,n.z=d}}return n}function gm(n,e,t){let i=0;for(let s of Ic){let r=n-s.x,a=e-s.z;if(s.ry){let o=Math.cos(-s.ry),l=Math.sin(-s.ry),c=r*o-a*l;a=r*l+a*o,r=c}Math.abs(r)<=s.hx&&Math.abs(a)<=s.hz&&s.top<=t+.4&&s.top>i&&(i=s.top)}return i}function vS(n){let e=Math.hypot(n.x/wp.rx,n.z/wp.rz);return e>1&&(n.x/=e,n.z/=e),n}function Ap(n,e){let i=Math.atan2(n.x,n.z)-ut.rotation.y;i=Math.atan2(Math.sin(i),Math.cos(i)),ut.rotation.y+=i*Math.min(1,e*12)}function SS(n){let e=!1,t=ut.userData;t.sit+=((yn?1:0)-t.sit)*Math.min(1,n*8);let i=new C;cn.size&&(cn.has("up")&&(i.z-=1),cn.has("down")&&(i.z+=1),cn.has("left")&&(i.x-=1),cn.has("right")&&(i.x+=1),i.lengthSq()&&(i.normalize().applyAxisAngle(new C(0,1,0),rs),_n=null,yn&&Ru())),yn&&Un&&Ru();let s=!1;if(yn&&i.set(0,0,0),i.lengthSq())ut.position.addScaledVector(i,5*n),vS(ut.position),Ap(i,n),e=s=!0;else if(_n){let a=_n.pts[_n.i],o=a.clone().sub(ut.position);o.y=0;let l=o.length(),c=5.2*n;if(l<=c){if(ut.position.copy(a),_n.i++,_n.i>=_n.pts.length){let h=_n.done;_n=null,h&&h()}}else o.normalize(),ut.position.addScaledVector(o,c),Ap(o,n);e=!0}let r=Un;fm(n,gm(ut.position.x,ut.position.z,Nn)),r&&!Un&&(Ba=.6),Ba>0&&(Ba=Math.max(0,Ba-n)),!_n&&(s||Ba>0)&&yS(ut.position,.45,Nn,7*n),e&&(bu+=n*11),Yp(ut,e,n,zt,bu),pm(ut.userData),yn?(ut.position.y=yn.seatY-Zp,t.shadow.visible=!1):(t.shadow.visible=!0,ut.position.y=(e&&!Un?Math.abs(Math.sin(bu))*.06:0)+Nn)}function MS(n,e){for(let t of Va){let i=t.g,s=t.food.visible&&i.position.distanceTo(t.bowl)<.55;s&&(t.ateAt||(t.ateAt=n),n-t.ateAt>3&&(t.food.visible=!1,t.ateAt=0,wc(i.position,2),t.goal=null,t.t=n)),(!t.goal||i.position.distanceTo(t.goal)<.15)&&n>t.t&&(t.goal=t.home.clone().add(new C((ce()-.5)*3.4,0,(ce()-.5)*1.8)),t.t=n+1.5+ce()*3);let r=!1;if(t.goal){let o=t.goal.clone().sub(i.position);o.y=0;let l=o.length();if(l>.15){o.normalize(),i.position.addScaledVector(o,Math.min(l,(t.food.visible?1.5:.9)*e));let h=Math.atan2(-o.z,o.x)-i.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h)),i.rotation.y+=h*Math.min(1,e*8),r=!0}}t.hop>0?(t.hop=Math.max(0,t.hop-e*2.2),i.position.y=Math.abs(Math.sin(t.hop*7))*.22):i.position.y=s?Math.sin(n*9)*.02:0;let a=i.userData;a.tail.rotation.y=Math.sin(n*(r||t.hop>0?15:9))*(t.hop>0?1:.7),a.legs.forEach((o,l)=>o.rotation.z=r?Math.sin(n*14+l*1.6)*.5:0)}for(let t=_c.length-1;t>=0;t--){let i=_c[t];i.t+=e,i.m.position.y+=e*.9,i.m.scale.setScalar(1-i.t/i.life*.6),i.t>i.life&&(et.remove(i.m),_c.splice(t,1))}yc&&zt>yc&&(document.getElementById("toast").classList.remove("on"),yc=0)}var Ps=new wa,Ac=new ae,Wa=document.getElementById("tip"),z1=new Mn(new C(0,1,0),0),za=null;function bS(n){let e=as.getBoundingClientRect();Ac.set((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),Ps.setFromCamera(Ac,ln)}function xm(n){bS(n);let e=null,t=1e9;if(Qt==="room"){for(let i of Rr){let s=Ps.intersectObject(i.obj,!0);s.length&&s[0].distance<t&&(t=s[0].distance,e={kind:"act",c:i,label:i.label})}return e}for(let i of gi){let s=Ps.intersectObject(i.obj,!0);s.length&&s[0].distance<t&&(t=s[0].distance,e={kind:"act",c:i,label:i.label})}if(e)return e;for(let i of Ni){let s=Ps.intersectObject(i.group,!0);s.length&&s[0].distance<t&&(t=s[0].distance,e={kind:"zone",it:i,label:i.label})}if(!e)for(let i of Ni){let s=i.group.position.clone().add(i.hit),r=Ps.ray.distanceToPoint(s);r<i.r*.55&&r<t&&(t=r,e={kind:"zone",it:i,label:i.label})}return e}function Uc(n){let e=za&&n&&za.label===n.label;za=n,as.style.cursor=n?"pointer":"default",Wa.classList.toggle("on",!!n),n&&!e&&(Wa.textContent=n.label+(n.kind==="zone"?" \u2197":""))}as.addEventListener("pointermove",n=>{if(xi||Qt!=="island"&&Qt!=="room")return;let e=xm(n);Uc(e),e&&(Wa.style.left=n.clientX+"px",Wa.style.top=n.clientY+"px")});as.addEventListener("pointerdown",()=>Pu());as.addEventListener("click",n=>{if(xi)return;let e=xm(n);e&&(e.kind==="act"?e.c.fn():Wu(e.it.key))});document.querySelectorAll("[data-go]").forEach(n=>n.addEventListener("click",()=>Wu(n.dataset.go)));function ES(n){let e=n.dataset.move,t=s=>{s.preventDefault(),cn.add(e),document.getElementById("hint")?.classList.add("gone")},i=()=>cn.delete(e);n.addEventListener("pointerdown",t),n.addEventListener("pointerup",i),n.addEventListener("pointerleave",i),n.addEventListener("pointercancel",i)}document.querySelectorAll("[data-move]").forEach(ES);addEventListener("blur",()=>cn.clear());var _m={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",a:"left",s:"down",d:"right"};addEventListener("keydown",n=>{let e=_m[n.key];e&&!xi&&(n.preventDefault(),cn.add(e),document.getElementById("hint")?.classList.add("gone"))});addEventListener("keyup",n=>{let e=_m[n.key];e&&cn.delete(e)});var Cr=document.getElementById("panel"),xi=!1,Qt="island",Xa=null;function TS(n){let e=vp[n];Xa=n,document.getElementById("p-eye").textContent=e.eye,document.getElementById("p-title").textContent=e.title,document.getElementById("p-body").innerHTML=e.body+(e.tags?'<div class="tags">'+e.tags.map(t=>"<span>"+t+"</span>").join("")+"</div>":"")+(e.list&&e.list.length?"<ul>"+e.list.map(t=>"<li>"+t+"</li>").join("")+"</ul>":"")+(e.room?'<button id="enter" class="btn">'+e.cta+" \u2192</button>":""),Cr.classList.add("open"),xi=!0,Cr.setAttribute("aria-hidden","false"),document.getElementById("scrim").classList.add("on"),document.getElementById("enter")?.addEventListener("click",()=>wm(Xa)),document.getElementById("p-close").focus(),ss.copy(bt[n]||new C).setY(.5),pi=1.9,ss.x+=3,ss.z+=.8}function Lr(){Cr.classList.remove("open"),xi=!1,Cr.setAttribute("aria-hidden","true"),document.getElementById("scrim").classList.remove("on"),Qt==="island"&&(ss.set(0,0,0),pi=1),Xa=null}document.getElementById("p-close").addEventListener("click",Lr);document.getElementById("scrim").addEventListener("pointerdown",Lr);function Wu(n){document.querySelectorAll("[data-go]").forEach(t=>{let i=t.dataset.go===n;t.classList.toggle("on",i),t.classList.toggle("going",i)});let e=document.querySelector(".nav button.on");if(e&&e.scrollIntoView)try{e.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"})}catch{e.scrollIntoView()}Lr(),Uc(null),Wa.classList.remove("on"),clearTimeout(Iu),Iu=setTimeout(Pu,4e3),mm(n,()=>{Pu(),TS(n)})}var Iu=0;function Pu(){clearTimeout(Iu),document.querySelectorAll("[data-go].going").forEach(n=>n.classList.remove("going"))}function wS(n){let e=new Ne;return b(e,Oe(.23,.23,.04,18),P(n),0,.27,0,{rx:Math.PI/2}),b(e,Oe(.115,.115,.012,16),P(16639728),0,.27,.027,{rx:Math.PI/2,cast:!1}),b(e,Oe(.115,.115,.012,16),P(16639728),0,.27,-.027,{rx:Math.PI/2,cast:!1}),b(e,D(.085,.26,.06),P(12750430),0,.05,0),b(e,D(.1,.09,.07),P(9333318),0,-.06,0),e}var ls=new Ne;ls.position.set(6.3,0,7.5);ls.rotation.y=.5;et.add(ls);b(ls,D(1.5,.14,.75),P(13081192),0,.07,0);for(let n of[-.62,.62])b(ls,D(.16,1.05,.16),P(11764815),n,.6,-.22);b(ls,D(1.5,.14,.16),P(11764815),0,1.08,-.22);b(ls,Oe(.17,.17,.17,12),P(16773227,{emissive:16769871,emissiveIntensity:.2}),.5,.22,.14);var Fc=wS(15622043);Fc.scale.setScalar(1.7);Fc.position.set(-.3,.14,-.1);Fc.rotation.set(-.22,0,.1);ls.add(Fc);In.push({x:6.3,z:7.5,r:.7,h:1.3});addEventListener("keydown",n=>{if(n.code==="Space"&&!xi){n.preventDefault(),dm();return}n.key==="Escape"&&(xi?Lr():Qt==="room"&&qu())});function ym(){let n=document.getElementById("room-card"),e=document.getElementById("room-toggle"),t=n.classList.contains("min");e.setAttribute("aria-expanded",String(!t)),e.setAttribute("aria-label",t?"Show details":"Hide details")}document.getElementById("room-toggle").addEventListener("click",n=>{n.stopPropagation(),document.getElementById("room-card").classList.toggle("min"),ym()});var Jn=!!window.__theme,Eu=Jn?1:0,Rp=new Je,ui=new Je,H1=new Je;function vm(n){if(Qt==="room"){Ha.background.set(bc&&Bt[bc]?Bt[bc].bg:16441296).lerp(ui.set(2827332),n),Rs.color.set(16774894).lerp(ui.set(12828147),n),Rs.groundColor.set(15979188).lerp(ui.set(6970526),n),Rs.intensity=1.95-n*.5,At.intensity=1.3-n*.6,Sm.forEach(e=>e.l.intensity=e.power*(e.day+(1-e.day)*n)),Ec.forEach(e=>e.emissiveIntensity=n*1.25),document.body.classList.toggle("night",n>.5);return}Rp.set(Rn.sky).lerp(ui.set(ws.sky),n),Ha.background.copy(Rp),ku.forEach((e,t)=>e.m.color.set(e.day).lerp(ui.set(e.night),n)),Rs.color.set(Rn.hemiSky).lerp(ui.set(ws.hemiSky),n),Rs.groundColor.set(Rn.hemiGround).lerp(ui.set(ws.hemiGround),n),Rs.intensity=Yn.lerp(Rn.hemiI,ws.hemiI,n),At.color.set(Rn.sun).lerp(ui.set(ws.sun),n),At.intensity=Yn.lerp(Rn.sunI,ws.sunI,n),Au.color.set(7652586).lerp(ui.set(1913955),n),Au.emissiveIntensity=.22*(1-n),Fp.color.set(Rn.grass).lerp(ui.set(ws.grass),n),Hp.forEach(e=>e.l.intensity=e.power*n),Ec.forEach(e=>e.emissiveIntensity=n*1.6),Xp.opacity=n*.95,Pc.material.opacity=.9-n*.45,$p.forEach(e=>e.opacity=Math.max(0,1-n*2.2)*.24),sm.opacity=n,rm.opacity=n*.16,lm.opacity=n*.9,nm.opacity=Math.max(0,n*1.8-.8),document.body.classList.toggle("night",n>.5)}(function(){let n=document.getElementById("tod"),e=()=>{n.textContent=Jn?"\u2600":"\u263E",n.setAttribute("aria-pressed",Jn)};e();let t=s=>{Jn=s,e();try{localStorage.setItem("theme",Jn?"night":"day")}catch{}};n.addEventListener("click",()=>t(!Jn));let i=document.getElementById("tod2");if(i){i.hidden=!1;let s=()=>{i.textContent=Jn?"\u2600":"\u263E",i.setAttribute("aria-pressed",Jn)};s(),i.addEventListener("click",()=>{t(!Jn),s()}),n.addEventListener("click",s)}})();var Mc=-60,pc=4.05,AS=.52,Dr=new Ne;Dr.position.set(0,Mc,0);Dr.visible=!1;Ui.add(Dr);var Bt={},bc=null,Rr=[],Zt=null,Lu=[],Du=[],Nu=[],Sm=[];function pn(n,e,t,i,s,r,a){let o=new _r(s,0,11,1.5);return o.position.set(e,t,i),o.userData.noMerge=!0,Bt[n].g.add(o),Sm.push({l:o,power:r,day:a===void 0?.3:a}),o}function Mm(n,e,t,i,s){b(n,Oe(.34,.38,.09,10),P(i),e,.05,t),b(n,Oe(.05,.05,2.5,6),P(i),e,1.3,t),b(n,new ni(.34,.5,.52,10,1,!0),Rt(s),e,2.75,t,{cast:!1}),b(n,Le(.2,0),Rt(16774102),e,2.6,t,{cast:!1})}function qa(n,e,t,i,s){b(n,Oe(.02,.02,1.2,4),P(13351311),e,i+.6,t,{cast:!1}),b(n,new ni(.1,.42,.42,10,1,!0),Rt(s),e,i,t,{cast:!1}),b(n,Le(.16,0),Rt(16774102),e,i-.08,t,{cast:!1})}var RS=P(16765562,{emissive:16755005,emissiveIntensity:.75}),CS=P(16774095,{emissive:16767370,emissiveIntensity:.9}),on=()=>P(_t.wood),Lt=qp();Lt.scale.setScalar(1.08);mi(Lt,.8,.95);var bm=AS*1.08,Em=new Sa().load(Jv);Em.colorSpace=nn;function IS(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.fillStyle="#ffffff",e.font="bold 50px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText("z",32,34),new qi(n)}var PS=IS();function $a(n,e){let t=new Ne;return t.visible=!1,Dr.add(t),Bt[n]={g:t,bg:e.bg,clicks:[],start:e.start||new C(1,0,1.8),title:e.title,sub:e.sub,tags:e.tags||[]},b(t,D(10,.4,10),P(e.floor),0,-.2,0),b(t,D(10,5.6,.3),P(e.wallA),0,2.8,-4.85),b(t,D(.3,5.6,10),P(e.wallB),-4.85,2.8,0),b(t,D(10.3,.26,.12),P(e.trim),0,.13,-4.64),b(t,D(.12,.26,10.3),P(e.trim),-4.64,.13,0),b(t,D(10.4,.34,.44),P(e.beam),0,5.6,-4.85),b(t,D(.44,.34,10.4),P(e.beam),-4.85,5.6,0),e.windowAt!==void 0&&(b(t,D(.12,2.3,2.3),P(e.trim),-4.74,3,e.windowAt),b(t,D(.08,2,2),Rt(13627135),-4.68,3,e.windowAt,{cast:!1}),b(t,D(.1,.12,2.1),P(e.trim),-4.66,3,e.windowAt,{cast:!1}),b(t,D(.1,2.1,.12),P(e.trim),-4.66,3,e.windowAt,{cast:!1})),t}function Oc(n,e,t,i,s,r,a,o){b(n,D(i,.035,s),P(a),e,.022,t,{cast:!1}),b(n,D(i-.42,.045,s-.42),P(r),e,.03,t,{cast:!1}),b(n,D(i-.95,.055,s-.95),P(a),e,.036,t,{cast:!1}),b(n,D(i-1.15,.065,s-1.15),P(r),e,.042,t,{cast:!1});let l=b(n,D((i-1.2)*.42,.075,(s-1.2)*.42),P(o),e,.048,t,{cast:!1});l.rotation.y=Math.PI/4;for(let c=0;c<11;c++)b(n,D(.06,.03,.22),P(a),e-i/2+.2+c*(i-.4)/10,.02,t-s/2-.11,{cast:!1}),b(n,D(.06,.03,.22),P(a),e-i/2+.2+c*(i-.4)/10,.02,t+s/2+.11,{cast:!1})}function mn(n,e,t,i,s,r){let a=Bt[n].g,o=new Ne;o.position.set(e,t,i),o.userData.noMerge=!0,a.add(o);let l=b(o,new ri(.3,.05,6,18),RS,0,0,0,{cast:!1});b(o,Le(.13,1),CS,0,0,0,{cast:!1}),mi(o,.6,0),Lu.push({g:o,ring:l,base:t,p:Lu.length*1.1}),Bt[n].clicks.push({obj:o,label:s,fn:()=>FS(r)})}function eo(n,e,t,i,s){let r=new Ne;r.position.set(e,t,i),r.userData.noMerge=!0,Bt[n].g.add(r),mi(r,.46,.2);let a={x:e,y:t,z:i,face:s};Bt[n].clicks.push({obj:r,label:"SIT HERE",fn:()=>Zt&&Zt.x===e&&Zt.z===i?Tm():LS(a)})}function LS(n){Zt=n,Lt.position.set(n.x,n.y-bm,n.z),Lt.rotation.y=n.face,Zn("Taking a seat")}function Tm(){if(!Zt)return;let n=Zt.face;Lt.position.set(Zt.x+Math.sin(n)*.8,0,Zt.z+Math.cos(n)*.8),Zt=null}function Cp(n,e,t,i,s,r){let a=new Ne;a.position.set(i,0,s),a.rotation.y=r,a.userData.noMerge=!0,n.add(a);let o=P(e),l=P(t),c=P(4537402);b(n,Oe(.95,.95,.22,12),P(14272950),i,.11,s,{cast:!1}),b(n,new ri(.88,.17,6,14),P(12758680),i,.2,s,{rx:Math.PI/2});let h=b(a,Le(.46,1),o,0,.36,0);h.scale.set(1.45,.78,1),b(a,Le(.3,1),o,.52,.36,.1).scale.set(1.1,.95,1),b(a,Le(.12,1),c,.78,.31,.12);for(let f of[-.12,.12]){let m=b(a,D(.1,.22,.11),l,.42,.42,f*1.6);m.rotation.x=f*1.2}for(let f of[-.1,.1])b(a,D(.1,.022,.03),c,.68,.4,f*1.4,{cast:!1});let d=b(a,new ri(.26,.08,5,12,Math.PI*1.3),o,-.5,.3,0);d.rotation.x=Math.PI/2,Du.push({g:a,body:h,p:Du.length*1.7});let u=new Ne;u.position.set(i+.4,.9,s),u.userData.noMerge=!0,n.add(u);for(let f=0;f<3;f++){let m=new ia(new cr({map:PS,color:8360885,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}));m.renderOrder=50,m.scale.setScalar(.4),u.add(m),Nu.push({sp:m,p:f/3+Nu.length*.07})}return a}function DS(n,e,t,i,s){let r=new Ne;r.position.set(e,t,i),r.rotation.y=s||0,n.add(r),b(r,D(.62,.04,.44),P(13883614),0,.02,0),b(r,D(.5,.02,.3),P(15330801),0,.045,.03,{cast:!1});let a=b(r,D(.62,.42,.04),P(13225942),0,.22,-.2);a.rotation.x=.28;let o=b(r,D(.54,.34,.02),Rt(11130094),0,.22,-.17,{cast:!1});return o.rotation.x=.28,r}var Uu=[];function NS(n,e,t,i,s,r,a,o){let l=new Ne;l.position.set(e,0,t),l.rotation.y=i,l.userData.noMerge=!0,n.add(l);let c=P(s),h=P(r),d=P(a),u=P(7045017),f=P(15130320),m=P(4866118);b(l,D(.48,.5,.3),d,0,.93,0),b(l,D(.52,.12,.34),d,0,1.15,0);for(let T of[-.12,.12])b(l,D(.18,.18,.46),u,T,.68,.22),b(l,D(.17,.4,.17),u,T,.46,.42),b(l,D(.19,.09,.28),f,T,.25,.5);let S=[];for(let T of[-.3,.3]){b(l,D(.13,.17,.15),d,T,1,0);let v=new Ne;v.position.set(T,.93,.06),l.add(v),b(v,D(.11,.11,.36),c,0,0,.18),b(v,D(.12,.09,.13),c,0,-.02,.4),S.push(v)}b(l,D(.15,.09,.15),c,0,1.24,0);let p=new Ne;p.position.y=1.46,p.scale.setScalar(1.12),l.add(p),b(p,Le(.3,2),c,0,0,0),b(p,Le(.32,1),h,0,.05,-.1).scale.set(1,.95,.92),o===0?b(p,Le(.17,1),h,0,.32,-.12):o===1?(b(p,D(.5,.3,.16),h,0,0,-.22),b(p,D(.14,.26,.14),h,-.27,-.06,-.04),b(p,D(.14,.26,.14),h,.27,-.06,-.04)):b(p,D(.5,.15,.28),h,0,.21,.06);for(let T of[-.11,.11])b(p,Le(.034,1),m,T,-.01,.28,{cast:!1});for(let T of[-.19,.19])b(p,Le(.05,1),P(15770534),T,-.09,.24,{cast:!1}).scale.set(1.3,.75,.6);let y=b(p,new ri(.065,.014,4,10,Math.PI),m,0,-.03,.28,{cast:!1});return y.rotation.z=Math.PI,Uu.push({g:l,head:p,hands:S,p:Uu.length*1.9}),l}function Xu(n,e,t,i,s){let r=new Ne;return r.position.set(e,t,i),r.rotation.y=s||0,n.add(r),b(r,D(1.5,.95,.1),P(3620943),0,.72,0),b(r,D(1.36,.82,.05),Rt(11130094),0,.72,.06),b(r,D(.4,.07,.3),P(9080986),0,.26,0),b(r,Oe(.07,.1,.42,6),P(9080986),0,.45,0),b(r,D(.95,.06,.34),P(15921644),0,.03,.62),b(r,D(.2,.05,.28),P(15921644),.72,.03,.6),r}{let n=$a("home",{bg:16441296,title:"About me",sub:"The cottage \xB7 workspace",tags:["Applied Linguistics","UX Design","Generative AI"],floor:14920820,wallA:16311510,wallB:15914694,trim:15313002,beam:8226505,windowAt:1.6,start:new C(1.2,0,2)});Oc(n,.3,.5,5.4,4.2,15983568,13206623,15251852),b(n,D(6,2.8,.14),P(13208143),.3,3.3,-4.6),b(n,D(5.7,2.5,.1),P(14523227),.3,3.3,-4.52);for(let[s,r,a]of[[-1.9,0,16645106],[-.5,.08,14675677],[.9,-.05,16441572],[2.2,.04,16643032]]){let o=b(n,D(1.15,.85,.04),P(a),.3+s,3.5+r,-4.46);o.rotation.z=(ce()-.5)*.12}b(n,D(4.8,.2,2.1),P(14722406),.6,2.25,-3);for(let s of[-1.5,2.6])b(n,D(.26,2.15,1.7),P(16514039),s,1.12,-3);Xu(n,.3,2.35,-3.4,.08),b(n,Oe(.1,.14,.5,6),on(),2.25,2.55,-3.4),b(n,Le(.4,0),Rt(16773572),2.25,2.95,-3.4,{cast:!1}),b(n,Oe(.3,.22,.42,7),P(15968713),-.9,2.5,-2.6);{let s=new Ne;s.position.set(1.75,2.35,-2.6),s.rotation.y=-.5,s.rotation.x=-.1,n.add(s),b(s,D(.72,.72,.05),P(15255450),0,.36,0);let r=new wt(new si(.56,.56),new Gn({map:Em}));r.position.set(0,.36,.031),r.castShadow=r.receiveShadow=!1,r.userData.noMerge=!0,s.add(r),b(s,D(.78,.06,.14),P(14137487),0,.02,-.05)}let e=new Ne;e.position.set(.4,0,-1.3),e.rotation.y=.45,n.add(e),b(e,D(1.15,.22,1.15),P(10466252),0,1.32,0),b(e,D(1.15,1.25,.22),P(10466252),0,2.05,-.56),b(e,Oe(.09,.09,1.15,6),P(9146521),0,.68,0);for(let s=0;s<5;s++){let r=b(e,D(.85,.08,.13),P(15856110),0,.12,0);r.rotation.y=s*1.256}eo("home",.4,1.44,-1.3,.45),b(n,Oe(.75,.6,1.25,7),P(15850694),-3.2,.62,-2.6),b(n,Oe(.12,.18,2.3,5),P(_t.trunk),-3.2,2.3,-2.6),[[0,3.7,0,.95],[.65,3.35,.3,.7],[-.65,3.45,-.2,.72],[0,4.35,0,.58]].forEach(([s,r,a,o])=>b(n,Le(o,0),P(_t.leaf),-3.2+s,r,-2.6+a)),b(n,D(1.4,1.6,1.25),P(16247252),3.5,.8,-2.7);for(let s of[.55,1.2])b(n,D(1,.08,.06),on(),3.5,s,-2.06);b(n,Oe(.32,.24,.42,6),P(15850694),3.5,1.8,-2.7);for(let s=0;s<7;s++)b(n,new ii(.1,.85,4),P(7123018),3.5+(ce()-.5)*.5,2.3,-2.7+(ce()-.5)*.4).rotation.set(ce()-.5,0,ce()-.5);qa(n,.3,.6,4.4,16244164),pn("home",2.25,2.8,-3.4,16765590,7,.2),pn("home",.3,4.2,.6,16769212,18,.3);let t=Cp(n,16447728,15852772,2.3,2.1,2.2),i=Cp(n,14659971,12488293,3.4,.6,3.6);for(let[s,r,a]of[[1.5,3.1,12048360],[2.5,3.5,15185862]])b(n,Oe(.3,.22,.2,10),P(a),s,.1,r),b(n,Oe(.23,.23,.03,10),P(9425138,{emissive:6273258,emissiveIntensity:.2}),s,.2,r,{cast:!1});Bt.home.clicks.push({obj:t,label:"JUNBI (ASLEEP)",fn:()=>Zn("Junbi is dreaming. Shhh")}),Bt.home.clicks.push({obj:i,label:"JJANGGU (ASLEEP)",fn:()=>Zn("Jjanggu twitches a paw.")}),mn("home",-1.4,3.6,-4.2,"THE CORK BOARD",an.home_board),mn("home",.3,3.15,-3,"THE DESK",an.home_desk),mn("home",2.9,1.2,2.6,"THE DOG BEDS",an.home_dogs)}{let n=$a("library",{bg:14937819,title:"Research",sub:"The library \xB7 publications & interests",tags:["Conversation Analysis","Human-AI interaction","L2 learning"],floor:14465418,wallA:15660518,wallB:15069148,trim:12818530,beam:9941125,windowAt:2.4,start:new C(1.4,0,2.2)});Oc(n,.2,.9,5.2,4,15656658,9086076,13220239);let e=[10276751,15909842,13156590,15980964,11130094,15251872];for(let[i,s,r,a]of[[-1.4,-4.3,0,5],[1.9,-4.3,0,5],[-4.3,-1.6,Math.PI/2,5],[-4.3,1.6,Math.PI/2,5]]){let o=new Ne;o.position.set(i,0,s),o.rotation.y=r,n.add(o),b(o,D(2.9,3.4,.5),P(15127220),0,1.7,0);for(let l=0;l<a;l++){let c=.45+l*.62;b(o,D(2.7,.08,.46),on(),0,c-.04,.03);for(let h=0;h<9;h++){let d=.34+ce()*.16,u=b(o,D(.19+ce()*.07,d,.34),P(e[(h+l)%6]),-1.15+h*.28,c+d/2,.05);u.rotation.z=ce()<.12?.22:0}}}b(n,D(2.6,.18,1.5),on(),1.3,2,-1);for(let[i,s]of[[.3,-.55],[2.3,-.55],[.3,-1.45],[2.3,-1.45]])b(n,D(.14,2,.14),on(),i,1,s);b(n,D(.9,.04,.65),P(16644848),.95,2.11,-1),b(n,D(.75,.05,.55),P(16644848),1.85,2.12,-.85),b(n,Oe(.12,.16,.45,6),P(4877156),2.2,2.22,-1.35),b(n,Le(.3,0),Rt(16773572),2.2,2.6,-1.35,{cast:!1});let t=new Ne;t.position.set(-1.7,0,1.7),t.rotation.y=-.5,n.add(t),b(t,D(1.5,.45,1.4),P(9619088),0,.6,0),b(t,D(1.5,1.3,.35),P(9619088),0,1.3,-.65);for(let i of[-.72,.72])b(t,D(.28,.5,1.4),P(8764291),i,1,0);b(t,D(.9,.18,.9),P(16443864),0,.92,.1);for(let[i,s]of[[-.6,-.5],[.6,-.5],[-.6,.5],[.6,.5]])b(t,D(.14,.4,.14),on(),i,.2,s);eo("library",-1.7,1,1.7,-.5),b(n,Oe(.45,.4,.1,10),on(),.6,.6,2.6),b(n,Oe(.08,.08,.55,6),on(),.6,.3,2.6);for(let i=0;i<4;i++)b(n,D(.8,.12,.6),P(e[i]),.6+(ce()-.5)*.12,.71+i*.13,2.6);b(n,Oe(.42,.34,.26,8),on(),3.5,.13,1.6),b(n,Oe(.06,.06,1,6),on(),3.5,.6,1.6),b(n,Le(.62,1),P(9421792),3.5,1.65,1.6),b(n,Le(.3,0),P(10408810),3.25,1.9,1.95),Mm(n,.9,2.9,9075294,16245428),qa(n,.4,-.4,4.3,16245428),pn("library",2.2,2.5,-1.35,16766874,7,.2),pn("library",.9,2.6,2.9,16766106,16,.25),pn("library",.4,4.1,-.4,16769976,18,.3),pn("library",-2.6,2.4,-2.6,16768174,9,.2),mn("library",.4,2.6,-4,"THE SHELVES",an.lib_shelves),mn("library",1.3,2.75,-1,"THE PAPERS",an.lib_papers)}{let n=$a("school",{bg:15394038,title:"Teaching",sub:"The University \xB7 courses & philosophy",tags:["SLS 480E","SLS 675","SLS 680R"],floor:14859666,wallA:15986427,wallB:15393782,trim:12166630,beam:8226505,windowAt:2.6,start:new C(1.2,0,2.6)});Oc(n,-.4,1,5,3.8,16183264,9337694,13085570),b(n,D(6.2,2.9,.16),P(16185074),.2,3.3,-4.6),b(n,D(6.5,.18,.34),P(13620444),.2,1.8,-4.52);for(let[a,o,l]of[[-1.9,1.5,4157365],[.4,1.1,4868690],[2.1,1.7,12605035]])b(n,D(o,.07,.02),P(l),a,3.62,-4.5,{cast:!1});for(let[a,o,l]of[[-1.6,1,4868690],[.9,1.8,4165475]])b(n,D(o,.07,.02),P(l),a,3.2,-4.5,{cast:!1});for(let[a,o]of[[-.6,12605035],[-.35,4157365],[-.1,4165475]])b(n,D(.18,.07,.07),P(o),a,1.9,-4.44,{cast:!1});let e=new Ne;e.position.set(1.9,0,-3.3),e.rotation.y=Math.PI-.75,n.add(e),b(e,D(1.05,1.3,.78),on(),0,.65,0),b(e,D(1.15,.1,.88),P(15257510),0,1.35,0);let t=b(e,D(1.1,.08,.5),P(15257510),0,1.44,.16);t.rotation.x=-.22,b(e,D(.9,.42,.06),P(14269842),0,.95,.42),Xu(e,0,1.4,-.08,0).scale.setScalar(.72),b(e,Oe(.15,.12,.26,7),P(15968713),.42,1.53,.2);let s=[];for(let[a,o]of[[-2.3,-.2],[.3,-.2],[-2.3,1.5],[.3,1.5]]){let l=new Ne;l.position.set(a,0,o),n.add(l),b(l,D(1.5,.14,.95),P(15784116),0,1.12,0);for(let[c,h]of[[-.6,-.35],[.6,-.35],[-.6,.35],[.6,.35]])b(l,D(.1,1.1,.1),P(13225172),c,.55,h);b(l,D(.6,.12,.6),P(11123928),0,.62,.85),b(l,D(.6,.62,.12),P(11123928),0,.95,1.1);for(let[c,h]of[[-.22,.65],[.22,.65],[-.22,1.05],[.22,1.05]])b(l,D(.08,.6,.08),P(13225172),c,.32,h);b(l,D(.55,.04,.4),P(16644848),0,1.21,.05),s.push([a,o+.85])}let r=[[15779488,3354162,13623536,0],[14988684,4535339,15914202,1],[16243136,7031347,14478552,2]];s.forEach(([a,o],l)=>{l<3?NS(n,a,o-.08,Math.PI,...r[l]):eo("school",a,.68,o,Math.PI)}),[[-2.3,-.2],[.3,-.2],[-2.3,1.5],[.3,1.5]].forEach(([a,o])=>DS(n,a,1.19,o+.12,0)),b(n,D(1.3,2.2,1),P(16050904),3.6,1.1,-2.4);for(let a of[.6,1.25,1.9]){b(n,D(1.1,.07,.9),on(),3.6,a,-2.4);for(let o=0;o<5;o++)b(n,D(.16,.36,.3),P([10276751,15909842,13156590,15980964,11130094][o]),3.2+o*.21,a+.21,-2.1)}for(let a=0;a<3;a++){let o=2.6+a%2*1,l=3+a*.95,c=b(n,D(.85,.72,.07),P(16644848),l,o,-4.66);c.rotation.z=(ce()-.5)*.1;for(let h=0;h<3;h++)b(n,D(.52-h*.08,.05,.02),P(12831188),l-.05,o+.14-h*.14,-4.61,{cast:!1});b(n,Le(.07,0),P(15774812),l+.26,o-.24,-4.6,{cast:!1})}qa(n,-1.2,.4,4.4,15985404),qa(n,2.2,-1.6,4.4,15985404),pn("school",-1.2,4.2,.4,16772301,14,.3),pn("school",2.2,4.2,-1.6,16772301,14,.3),pn("school",.2,3.3,-2.6,16773853,3,.2),mn("school",.2,4,-4.2,"THE WHITEBOARD",an.sch_board),mn("school",-1,1.9,.6,"THE DESKS",an.sch_desks),mn("school",3.9,1.9,-4,"TESTIMONIALS",an.sch_testimonials)}{let n=$a("museum",{bg:16249058,title:"Projects",sub:"The museum \xB7 one gallery per project",tags:["GOALL","UX & CxD","Tangle with Ann"],floor:14472132,wallA:16512230,wallB:16051424,trim:14207406,beam:11115488,windowAt:3.2,start:new C(1.4,0,2.8)});b(n,D(9.6,.05,9.6),P(15262164),0,.03,0,{cast:!1}),[[-2.6,11130094,7317716,15980964],[.2,16040143,14258091,11130094],[2.9,15980964,13938794,16040143]].forEach(([i,s,r,a])=>{b(n,D(1.75,1.3,.1),P(16183264),i,3.1,-4.68),b(n,D(1.52,1.07,.05),P(s),i,3.1,-4.6),b(n,Oe(.3,.3,.02,24),P(r),i-.3,3.18,-4.56,{rx:Math.PI/2,cast:!1});let o=b(n,D(.36,.36,.02),P(a),i+.3,2.93,-4.56,{cast:!1});o.rotation.z=.18,b(n,Oe(.14,.14,.02,18),P(a),i+.26,3.33,-4.56,{rx:Math.PI/2,cast:!1}),b(n,D(.2,.2,.02),P(r),i-.46,2.82,-4.56,{cast:!1}),b(n,Oe(.1,.16,.2,6),Rt(16774100),i,4.5,-4.2,{cast:!1}),b(n,D(.06,.5,.06),P(12432290),i,4.8,-4.2,{cast:!1})});let t=(i,s,r,a)=>{b(n,D(.95,1.2,.95),P(16051938),i,.6,s),b(n,D(1.05,.08,1.05),P(15129803),i,1.24,s),a===0?b(n,Le(.33,1),P(r),i,1.6,s):a===1?b(n,new _a(.22,.08,48,6),P(r),i,1.65,s):b(n,D(.5,.5,.5),P(r),i,1.55,s,{ry:.6}),b(n,D(.4,.02,.26),P(16644848),i,1.29,s+.3,{cast:!1})};t(-2.4,-1.4,15968713,0),t(.3,-1,9421792,1),t(2.9,-1.4,15980964,2),b(n,D(2.8,.22,.8),P(15260870),.3,.62,2.3);for(let i of[-.75,1.35])b(n,D(.18,.55,.68),on(),i,.3,2.3);eo("museum",.3,.73,2.3,Math.PI),b(n,Oe(.42,.32,.5,7),P(15195856),-3.7,.25,2.6);for(let i=0;i<7;i++)b(n,new ii(.11,1,4),P(7123018),-3.7+(ce()-.5)*.5,.85,2.6+(ce()-.5)*.4).rotation.set(ce()-.5,0,ce()-.5);b(n,D(.9,1.3,.08),P(16644848),-4.7,2.4,-1.2),[-2.6,.2,2.9].forEach(i=>pn("museum",i,3.9,-3.6,16773330,5,.22)),pn("museum",.3,4.3,1.4,16774370,11,.3),mn("museum",-2.4,2.2,-1.4,"GOALL",an.mus_one),mn("museum",.3,2.25,-1,"UX & CxD",an.mus_two),mn("museum",2.9,2.2,-1.4,"TANGLE WITH ANN",an.mus_three)}{let n=$a("dome",{bg:14676199,title:"Qualifications",sub:"The conservatory \xB7 a desk among the plants",tags:["PhD","NVIDIA","Certifications"],floor:14272936,wallA:15201004,wallB:14478306,trim:14734004,beam:10470574,windowAt:1.2,start:new C(1.6,0,3)});Oc(n,.4,.8,5.2,4,15920092,10205087,13614998);for(let i=0;i<3;i++){let s=-3.2+i*1.4;b(n,D(1.2,.95,.08),P(15260084),s,3.5,-4.68),b(n,D(1.02,.78,.05),P(16644848),s,3.5,-4.6),b(n,D(.6,.05,.02),P(13351311),s,3.66,-4.56,{cast:!1}),b(n,D(.42,.04,.02),P(14273454),s,3.5,-4.56,{cast:!1}),b(n,Le(.1,0),P(15185862),s+.3,3.25,-4.55,{cast:!1})}b(n,D(3.4,.2,1.6),on(),.9,1.5,-3.1);for(let[i,s]of[[-.5,-2.5],[2.3,-2.5],[-.5,-3.7],[2.3,-3.7]])b(n,D(.16,1.45,.16),on(),i,.72,s);Xu(n,.7,1.6,-3.4,.06),b(n,D(.3,.26,.26),P(13351311),2.1,1.73,-3.3),b(n,Oe(.07,.07,.4,6),P(7123018),2.1,1.95,-3.3),b(n,Oe(.1,.13,.42,6),P(10470574),-.1,1.78,-3.4),b(n,Le(.3,0),Rt(16773572),-.1,2.12,-3.4,{cast:!1});let e=new Ne;e.position.set(.9,0,-1.7),e.rotation.y=Math.PI,n.add(e),b(e,D(1,.2,1),P(8229800),0,.92,0),b(e,D(1,1.15,.2),P(8229800),0,1.58,-.48),b(e,Oe(.09,.09,.78,6),P(9146521),0,.48,0);for(let i=0;i<5;i++){let s=b(e,D(.74,.08,.12),P(15856110),0,.1,0);s.rotation.y=i*1.256}eo("dome",.9,1.04,-1.7,Math.PI),b(n,D(1.5,1.45,1.15),P(16050904),3.4,.72,-3);for(let i of[.45,1])b(n,D(1.2,.08,.06),P(13351311),3.4,i,-2.42);b(n,D(1.62,.1,1.26),P(15259318),3.4,1.49,-3);for(let i=0;i<3;i++){let s=new Ne;s.position.set(3+i*.42,1.54,-3+i*.12),s.rotation.y=-.5+i*.16,s.rotation.z=(ce()-.5)*.08,n.add(s),b(s,D(.56,.72,.06),P([13349001,14205596,12756344][i]),0,.36,0),b(s,D(.44,.58,.03),P(16644848),0,.36,.04,{cast:!1}),b(s,D(.26,.04,.02),P(12165244),0,.46,.06,{cast:!1}),b(s,Le(.05,0),P(15185862),.1,.2,.06,{cast:!1})}b(n,D(2,1.5,.9),P(15721421),-3.4,.75,-2.6);for(let i of[.55,1.15])b(n,D(1.8,.08,.8),on(),-3.4,i,-2.6);b(n,Oe(.26,.2,.3,7),P(15850694),-3.4,1.65,-2.6),b(n,Le(.3,0),P(10408810),-3.4,1.95,-2.6),Mm(n,-2,2.4,10127980,16244910),qa(n,1,1.4,4.2,16244910),pn("dome",-.1,2,-3.4,16765590,6,.18),pn("dome",-2,2.6,2.4,16764818,12,.22),pn("dome",1,4,1.4,16769716,13,.3),pn("dome",3.2,2.2,-2.8,16768174,5,.18);let t=(i,s,r,a,o)=>{b(n,Oe(.46*o,.36*o,.6*o,8),P(15195856),i,.3*o,s),b(n,Oe(.48*o,.48*o,.08*o,8),P(14273460),i,.6*o,s,{cast:!1});for(let l=0;l<r;l++)b(n,new ii(.14*o,(1+ce()*.6)*o,4),P(a),i+(ce()-.5)*.7*o,(1+ce()*.3)*o,s+(ce()-.5)*.7*o).rotation.set((ce()-.5)*.7,ce()*3,(ce()-.5)*.7)};t(-1.6,-4,7,7123018,1.1),t(2.9,-4.1,7,8307290,1),t(-4.1,-.4,8,6269e3,1.2),t(-4,2.6,7,7648850,1),t(3.9,1.2,8,7123018,1.15),t(2.6,3.6,7,9225818,1),t(-1.4,3.8,6,8307290,.9);for(let[i,s]of[[-2.6,-4.4],[1.6,-4.4],[-4.45,1.8]]){b(n,Oe(.02,.02,1.1,4),P(13351311),i,4.9,s,{cast:!1}),b(n,Oe(.26,.2,.3,7),P(15195856),i,4.2,s);for(let r=0;r<4;r++){let a=b(n,D(.07,.8+ce()*.6,.07),P(7648850),i+(ce()-.5)*.4,3.6-ce()*.3,s+(ce()-.5)*.4);a.rotation.z=(ce()-.5)*.3}}b(n,D(1.9,.12,.5),P(13351311),1.5,2.45,-4.58);for(let i=0;i<4;i++){let s=.85+i*.44;b(n,Oe(.1,.14,.1,8),P(14204286),s,2.57,-4.56),b(n,Oe(.05,.05,.16,6),P(14204286),s,2.7,-4.56),b(n,Le(.11,0),P([15779946,14738666,15116394,15779946][i]),s,2.86,-4.56)}mn("dome",1.5,3.3,-4.4,"GRANTS & AWARDS",an.dome_awards),mn("dome",-2.5,4.3,-4.2,"THE CERTIFICATES",an.dome_certs),mn("dome",.9,2.5,-3.1,"THE DESK",an.dome_desk),mn("dome",3.4,2.6,-3,"THE DIPLOMAS",an.dome_diplomas)}Object.values(Bt).forEach(n=>Rc(n.g,n.g));var US={obj:Lt,label:"SAY HI",fn:()=>{Lt.userData.wave=1.6,Zn("Hi, I\u2019m Ann!")}};function FS(n){document.getElementById("p-eye").textContent=n.eye,document.getElementById("p-title").textContent=n.title,document.getElementById("p-body").innerHTML=n.body+(n.list&&n.list.length?"<ul>"+n.list.map(e=>"<li>"+e+"</li>").join("")+"</ul>":""),Cr.classList.add("open"),xi=!0,Cr.setAttribute("aria-hidden","false"),document.getElementById("scrim").classList.add("on"),document.getElementById("p-close").focus()}function wm(n){n=Bt[n]?n:"home",Lr(),Xa=null,bc=n,Zt=null,Lt.userData.sit=0,Object.values(Bt).forEach(t=>t.g.visible=!1),Bt[n].g.visible=!0,Dr.visible=!0,Bt[n].g.add(Lt),Lt.position.copy(Bt[n].start),Lt.rotation.y=.4,Rr=[US].concat(Bt[n].clicks),document.body.classList.add("inroom"),Qt="room",Uc(null),et.visible=!1,Pc.visible=Hu.visible=Fn.visible=!1,fi.set(0,Mc+1.7,0),ss.copy(fi),Ls=pi=1,Tc=8.4,Ir=.32,Pr=Ya,At.position.set(-9,Mc+26,11),At.target.position.set(0,Mc,0),Ui.add(At.target),At.shadow.camera.left=-10,At.shadow.camera.right=10,At.shadow.camera.top=10,At.shadow.camera.bottom=-10,At.shadow.camera.updateProjectionMatrix(),Ja(),document.getElementById("room-title").textContent=Bt[n].title,document.getElementById("room-sub").textContent=Bt[n].sub,document.getElementById("room-tags").innerHTML=Bt[n].tags.map(t=>"<span>"+t+"</span>").join("");let e=document.getElementById("room-card");e.classList.toggle("min",innerWidth<=700),ym(),e.classList.add("open")}function qu(){Lr(),Zt=null,Lt.userData.sit=0,document.body.classList.remove("inroom"),Qt="island",Uc(null),Rr=[],et.visible=!0,Pc.visible=Hu.visible=Fn.visible=!0,Dr.visible=!1,fi.set(0,0,0),ss.set(0,0,0),Ls=pi=1,Tc=13.2,Ir=ka,Pr=Ya,At.position.set(-12,22,10),At.target.position.set(0,0,0),At.shadow.camera.left=-22,At.shadow.camera.right=22,At.shadow.camera.top=22,At.shadow.camera.bottom=-22,At.shadow.camera.updateProjectionMatrix(),Ja(),document.getElementById("room-card").classList.remove("open")}document.getElementById("room-back").addEventListener("click",qu);var Tu=0;function OS(n){let e=Lt.userData,t=new C;cn.has("up")&&(t.z-=1),cn.has("down")&&(t.z+=1),cn.has("left")&&(t.x-=1),cn.has("right")&&(t.x+=1),Zt&&(t.lengthSq()||Un)&&Tm();let i=!1;if(!Zt&&t.lengthSq()){t.normalize().applyAxisAngle(new C(0,1,0),rs),Lt.position.addScaledVector(t,3.4*n),Lt.position.x=Yn.clamp(Lt.position.x,-pc,pc),Lt.position.z=Yn.clamp(Lt.position.z,-pc,pc);let a=Math.atan2(t.x,t.z)-Lt.rotation.y;a=Math.atan2(Math.sin(a),Math.cos(a)),Lt.rotation.y+=a*Math.min(1,n*12),i=!0,Tu+=n*11}fm(n,0),e.sit+=((Zt?1:0)-e.sit)*Math.min(1,n*8),Yp(Lt,i,n,zt,Tu),e.shadow.visible=!Zt;let s=i?Math.abs(Math.sin(Tu))*.05:Math.sin(zt*1.8)*.004;pm(e),Lt.position.y=Zt?Zt.y-bm:s+Nn,Lu.forEach(r=>{r.g.quaternion.copy(ln.quaternion),r.g.position.y=r.base+Math.sin(zt*1.6+r.p)*.09,r.ring.rotation.z+=n*1.3,r.ring.scale.setScalar(1+Math.sin(zt*2.4+r.p)*.12)}),Du.forEach(r=>{let a=1+Math.sin(zt*1.5+r.p)*.045;r.body.scale.set(1.45,.78*a,1*a)}),Uu.forEach(r=>{r.g.position.y=Math.sin(zt*2+r.p)*.012,r.head.rotation.z=Math.sin(zt*.8+r.p)*.05,r.hands.forEach((a,o)=>a.rotation.x=Math.sin(zt*7+r.p+o*2.1)*.08)}),Nu.forEach(r=>{let a=(zt*.42+r.p)%1;r.sp.position.set(a*.5,a*1.15,0),r.sp.scale.setScalar(.3+a*.4),r.sp.material.opacity=Math.sin(a*Math.PI)*1})}var Am=document.getElementById("classic"),BS=document.getElementById("plain");function Yu(n){document.body.classList.toggle("plain",n),Am.setAttribute("aria-pressed",String(n)),n?BS.scrollTop=0:location.hash&&history.replaceState(null,"",location.pathname+location.search)}Am.addEventListener("click",()=>Yu(!document.body.classList.contains("plain")));document.getElementById("plain-back").addEventListener("click",()=>Yu(!1));var zS=["about","qualifications","projects","research","teaching"];function Rm(){let n=location.hash.replace("#","");if(!zS.includes(n))return;Yu(!0);let e=document.getElementById(n);e&&e.scrollIntoView({block:"start"})}addEventListener("hashchange",Rm);Rm();var di=null,HS=()=>Qt==="room"?[.08,1.46]:[ka-.85,ka+.85],Ip=[.42,1.18];as.addEventListener("pointerdown",n=>{di={x:n.clientX,y:n.clientY,yaw:Ir,elev:Pr,moved:!1}});addEventListener("pointermove",n=>{if(!di)return;let e=n.clientX-di.x,t=n.clientY-di.y;if((Math.abs(e)>5||Math.abs(t)>5)&&(di.moved=!0),!di.moved)return;let[i,s]=HS();Ir=Yn.clamp(di.yaw-e*.005,i,s),Pr=Yn.clamp(di.elev+t*.004,Ip[0],Ip[1]),document.getElementById("hint")?.classList.add("gone")});addEventListener("pointerup",()=>{if(di?.moved){let n=e=>e.stopPropagation();addEventListener("click",n,{capture:!0,once:!0})}di=null});addEventListener("wheel",n=>{xi||document.body.classList.contains("plain")||n.target&&n.target.closest&&n.target.closest(".panel, #plain, .nav")||(pi=Yn.clamp(pi*(n.deltaY<0?1.1:.9),Qt==="room"?.7:.8,2.4))},{passive:!0});document.getElementById("resetview").addEventListener("click",()=>{Ir=Qt==="room"?.32:ka,Pr=Ya,pi=1});var zt=0,Pp=performance.now(),wu=Cc.attributes.position;function Cm(){let n=performance.now(),e=Math.min((n-Pp)/1e3,.05);if(Pp=n,zt+=e,Eu+=((Jn?1:0)-Eu)*Math.min(1,e*2.2),vm(Eu),Qt==="island"?(SS(e),mS(e)):OS(e),MS(zt,e),Ls+=(pi-Ls)*Math.min(1,e*3),fi.lerp(ss,Math.min(1,e*3)),rs+=(Ir-rs)*Math.min(1,e*5),wr+=(Pr-wr)*Math.min(1,e*5),Math.abs(Ls-pi)>.001&&Ja(),Up(),hm(),Qt==="island"){for(let s=0;s<wu.count;s++){let r=bp[s*3],a=bp[s*3+2];wu.setY(s,Math.sin(r*.17+zt*.9)*.1+Math.cos(a*.2+zt*.7)*.1)}wu.needsUpdate=!0,Op.geometry.computeVertexNormals(),Wp.forEach(s=>{s.position.x+=s.userData.speed*e,s.position.x>40&&(s.position.x=-40)}),Ni.forEach(s=>{let r=za&&za.it===s||Xa===s.key?.16:0;s.group.position.y+=(r-s.group.position.y)*Math.min(1,e*10)});let t=Bu.attributes.position;for(let s=0;s<Ou;s++){let r=t.getY(s)-e*.5,a=t.getX(s)+Math.sin(zt+s)*e*.4;r<0&&(r=7,a=-14+ce()*28),t.setXYZ(s,a,r,t.getZ(s)+e*.1)}t.needsUpdate=!0;let i=zu.attributes.position;for(let s=0;s<40;s++)i.setY(s,i.getY(s)+Math.sin(zt*1.3+s)*e*.3);i.needsUpdate=!0}Cn.autoClear=!0,Cn.render(Ha,ln),Cn.autoClear=!1,Cn.clearDepth(),Cn.render(Ui,ln),requestAnimationFrame(Cm)}Ja();Up();hm();vm(0);window.__world={annPos:()=>ut.position.toArray(),walking:()=>!!_n,panelOpen:()=>xi,jump:()=>dm(),airborne:()=>Un,zoom:()=>Ls,focusBench:()=>{ss.set(ns.x+1.2,.6,ns.z+.4),pi=2.3},seatedOutside:()=>!!yn,annYaw:()=>ut.rotation.y,camYaw:()=>rs,waving:()=>ut.userData.wave>0,sitAmount:()=>+ut.userData.sit.toFixed(2),teleport:(n,e)=>{ut.position.set(n,ut.position.y,e)},ground:(n,e,t)=>gm(n,e,t),jumpY:()=>Nn,labels:()=>(Qt==="room"?Rr:gi).map(n=>n.label),enterRoom:n=>wm(n),exitRoom:()=>qu(),view:()=>Qt,roomAnnPos:()=>Lt.position.toArray(),seated:()=>!!Zt,cam2:()=>({yaw:+rs.toFixed(3),elev:+wr.toFixed(3)}),insideObstacle:()=>In.some(n=>Math.hypot(ut.position.x-n.x,ut.position.z-n.z)<n.r-.05),probe:(n,e)=>{let t=as.getBoundingClientRect();return Ac.set((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Ps.setFromCamera(Ac,ln),Rr.map(i=>{let s=0;return i.obj.traverse(r=>{r.isMesh&&s++}),[i.label,s,Ps.intersectObject(i.obj,!0).length]})},screenOf:n=>{let e=(Qt==="room"?Rr:gi).find(i=>i.label===n);if(!e)return null;let t=new ti().setFromObject(e.obj).getCenter(new C);return t.project(ln),{x:(t.x*.5+.5)*innerWidth,y:(-t.y*.5+.5)*innerHeight}},walking2:()=>!!_n,wave:Kp,pet:()=>Qp(Va[0]),feed:()=>jp(Va[1]),bounce:()=>Vu.forEach(n=>{n.vy=5.5,n.vx=(ce()-.5)*2}),press:n=>cn.add(n),release:n=>cn.delete(n),scene:Ui,renderer:Cn,go:Wu,setNight:n=>{Jn=n},info:()=>Cn.info};document.getElementById("loading").classList.add("gone");Cm();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
}catch(e){document.body.classList.add("plain","no3d");var l=document.getElementById("loading");if(l)l.className="loading gone";if(window.console)console.warn("3D unavailable, showing plain view:",e);}}