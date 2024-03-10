import{ae as I,a1 as $}from"./index-VOjbm7ci.js";const j=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!O(f)?null:f}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!O(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return t&&!O(c,n)?null:c}return null},O=(e,t)=>e?!!((e.provider===""||e.provider.match(j))&&(t&&e.prefix===""||e.prefix.match(j))&&e.name.match(j)):!1,pe=Object.freeze({left:0,top:0,width:16,height:16}),A=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),G=Object.freeze({...pe,...A}),z=Object.freeze({...G,body:"",hidden:!1});function Me(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ne(e,t){const n=Me(e,t);for(const r in z)r in A?r in e&&!(r in n)&&(n[r]=A[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Oe(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function Fe(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(c){i=ne(r[c]||o[c],i)}return s(t),n.forEach(s),ne(e,i)}function ge(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Oe(e);for(const o in r){const i=r[o];i&&(t(o,Fe(e,o,i)),n.push(o))}return n}const Ae={provider:"",aliases:{},not_found:{},...pe};function H(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function me(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,Ae))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(j)||typeof i.body!="string"||!H(i,z))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(j)||typeof s!="string"||!n[s]&&!r[s]||!H(i,z))return null}return t}const oe=Object.create(null);function De(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function v(e,t){const n=oe[e]||(oe[e]=Object.create(null));return n[t]||(n[t]=De(e,t))}function J(e,t){return me(t)?ge(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Ne(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let P=!1;function ye(e){return typeof e=="boolean"&&(P=e),P}function Re(e){const t=typeof e=="string"?D(e,!0,P):e;if(t){const n=v(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function $e(e,t){const n=D(e,!0,P);if(!n)return!1;const r=v(n.provider,n.prefix);return Ne(r,n.name,t)}function He(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),P&&!t&&!e.prefix){let o=!1;return me(e)&&(e.prefix="",ge(e,(i,s)=>{s&&$e(i,s)&&(o=!0)})),o}const n=e.prefix;if(!O({provider:t,prefix:n,name:"a"}))return!1;const r=v(t,n);return!!J(r,e)}const we=Object.freeze({width:null,height:null}),xe=Object.freeze({...we,...A}),Ue=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ze=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function re(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Ue);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=ze.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const Be=e=>e==="unset"||e==="undefined"||e==="none";function Qe(e,t){const n={...G,...e},r={...xe,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(x=>{const g=[],C=x.hFlip,m=x.vFlip;let u=x.rotate;C?m?u+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):m&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let w;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:w=o.height/2+o.top,g.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:w=o.width/2+o.left,g.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}u%2===1&&(o.left!==o.top&&(w=o.left,o.left=o.top,o.top=w),o.width!==o.height&&(w=o.width,o.width=o.height,o.height=w)),g.length&&(i='<g transform="'+g.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=o.width,f=o.height;let a,d;s===null?(d=c===null?"1em":c==="auto"?f:c,a=re(d,l/f)):(a=s==="auto"?l:s,d=c===null?re(a,f/l):c==="auto"?f:c);const p={},y=(x,g)=>{Be(g)||(p[x]=g.toString())};return y("width",a),y("height",d),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:p,body:i}}const qe=/\sid="(\S+)"/g,Ve="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ke=0;function We(e,t=Ve){const n=[];let r;for(;r=qe.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(Ke++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const B=Object.create(null);function Ge(e,t){B[e]=t}function Q(e){return B[e]||B[""]}function X(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Y=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;T.length>0;)T.length===1||Math.random()>.5?F.push(T.shift()):F.push(T.pop());Y[""]=X({resources:["https://api.iconify.design"].concat(F)});function Je(e,t){const n=X(t);return n===null?!1:(Y[e]=n,!0)}function Z(e){return Y[e]}const Xe=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ie=Xe();function Ye(e,t){const n=Z(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function Ze(e){return e===404}const et=(e,t,n)=>{const r=[],o=Ye(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function tt(e){if(typeof e=="string"){const t=Z(e);if(t)return t.path}return"/"}const nt=(e,t,n)=>{if(!ie){n("abort",424);return}let r=tt(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;ie(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Ze(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},ot={prepare:et,send:nt};function rt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),f=l[s]||(l[s]=v(i,s));let a;c in f.icons?a=t.loaded:s===""||f.missing.has(c)?a=t.missing:a=t.pending;const d={provider:i,prefix:s,name:c};a.push(d)}),t}function be(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function it(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(e.icons[f])s.loaded.push({provider:r,prefix:o,name:f});else if(e.missing.has(f))s.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||be([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let st=0;function ct(e,t,n){const r=st++,o=be.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function lt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?D(o,t,n):o;i&&r.push(i)}),r}var ft={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function at(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let h=e.resources.slice(0);for(s=[];h.length>1;){const b=Math.floor(Math.random()*h.length);s.push(h[b]),h=h.slice(0,b).concat(h.slice(b+1))}s=s.concat(h)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",f=0,a,d=null,p=[],y=[];typeof r=="function"&&y.push(r);function x(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),x(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function C(h,b){b&&(y=[]),typeof h=="function"&&y.push(h)}function m(){return{startTime:c,payload:t,status:l,queriesSent:f,queriesPending:p.length,subscribe:C,abort:g}}function u(){l="failed",y.forEach(h=>{h(void 0,a)})}function w(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function Le(h,b,k){const L=b!=="success";switch(p=p.filter(S=>S!==h),l){case"pending":break;case"failed":if(L||!e.dataAfterTimeout)return;break;default:return}if(b==="abort"){a=k,u();return}if(L){a=k,p.length||(s.length?R():u());return}if(x(),w(),!e.random){const S=e.resources.indexOf(h.resource);S!==-1&&S!==e.index&&(e.index=S)}l="completed",y.forEach(S=>{S(k)})}function R(){if(l!=="pending")return;x();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{x(),l==="pending"&&(w(),u())},e.timeout);return}u();return}const b={status:"pending",resource:h,callback:(k,L)=>{Le(b,k,L)}};p.push(b),f++,d=setTimeout(R,e.rotate),n(h,t,b.callback)}return setTimeout(R),m}function Ie(e){const t={...ft,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const a=at(t,c,l,(d,p)=>{r(),f&&f(d,p)});return n.push(a),a}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function se(){}const U=Object.create(null);function ut(e){if(!U[e]){const t=Z(e);if(!t)return;const n=Ie(t),r={config:t,redundancy:n};U[e]=r}return U[e]}function dt(e,t,n){let r,o;if(typeof e=="string"){const i=Q(e);if(!i)return n(void 0,424),se;o=i.send;const s=ut(e);s&&(r=s.redundancy)}else{const i=X(e);if(i){r=Ie(i);const s=e.resources?e.resources[0]:"",c=Q(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),se):r.query(t,o,n)().abort}const ce="iconify2",E="iconify",Se=E+"-count",le=E+"-version",ve=36e5,ht=168;function q(e,t){try{return e.getItem(t)}catch{}}function ee(e,t,n){try{return e.setItem(t,n),!0}catch{}}function fe(e,t){try{e.removeItem(t)}catch{}}function V(e,t){return ee(e,Se,t.toString())}function K(e){return parseInt(q(e,Se))||0}const N={local:!0,session:!0},Ce={local:new Set,session:new Set};let te=!1;function pt(e){te=e}let M=typeof window>"u"?{}:window;function ke(e){const t=e+"Storage";try{if(M&&M[t]&&typeof M[t].length=="number")return M[t]}catch{}N[e]=!1}function Te(e,t){const n=ke(e);if(!n)return;const r=q(n,le);if(r!==ce){if(r){const c=K(n);for(let l=0;l<c;l++)fe(n,E+l.toString())}ee(n,le,ce),V(n,0);return}const o=Math.floor(Date.now()/ve)-ht,i=c=>{const l=E+c.toString(),f=q(n,l);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&t(a,c))return!0}catch{}fe(n,l)}};let s=K(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,V(n,s)):Ce[e].add(c))}function je(){if(!te){pt(!0);for(const e in N)Te(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=v(r,o);if(!J(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function gt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in N)Te(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function mt(e,t){te||je();function n(r){let o;if(!N[r]||!(o=ke(r)))return;const i=Ce[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=K(o),!V(o,s+1))return;const c={cached:Math.floor(Date.now()/ve),provider:e.provider,data:t};return ee(o,E+s.toString(),JSON.stringify(c))}t.lastModified&&!gt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ae(){}function yt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,it(e)}))}function wt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=Q(n)))return;i.prepare(n,r,o).forEach(c=>{dt(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{e.missing.add(f)});else try{const f=J(e,l);if(!f.length)return;const a=e.pendingIcons;a&&f.forEach(d=>{a.delete(d)}),mt(e,l)}catch(f){console.error(f)}yt(e)})})}))}const xt=(e,t)=>{const n=lt(e,!0,ye()),r=rt(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ae)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:a}=l;if(a===c&&f===s)return;s=f,c=a,i.push(v(f,a));const d=o[f]||(o[f]=Object.create(null));d[a]||(d[a]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:a,name:d}=l,p=v(f,a),y=p.pendingIcons||(p.pendingIcons=new Set);y.has(d)||(y.add(d),o[f][a].push(d))}),i.forEach(l=>{const{provider:f,prefix:a}=l;o[f][a].length&&wt(l,o[f][a])}),t?ct(t,r,i):ae};function bt(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in we?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const It=/[\s,]+/;function St(e,t){t.split(It).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function vt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function Ct(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function kt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Tt(e){return"data:image/svg+xml,"+kt(e)}function jt(e){return'url("'+Tt(e)+'")'}let _;function _t(){try{_=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{_=null}}function Pt(e){return _===void 0&&_t(),_?_.createHTML(e):e}const _e={...xe,inline:!1},Et={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Lt={display:"inline-block"},W={backgroundColor:"currentColor"},Pe={backgroundColor:"transparent"},ue={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},de={WebkitMask:W,mask:W,background:Pe};for(const e in de){const t=de[e];for(const n in ue)t[e+n]=ue[n]}const Mt={..._e,inline:!0};function he(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Ot=(e,t,n,r)=>{const o=n?Mt:_e,i=bt(o,t),s=t.mode||"svg",c={},l=t.style||{},f={...s==="svg"?Et:{},ref:r};for(let m in t){const u=t[m];if(u!==void 0)switch(m){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[m]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&St(i,u);break;case"color":c.color=u;break;case"rotate":typeof u=="string"?i[m]=vt(u):typeof u=="number"&&(i[m]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete f["aria-hidden"];break;default:o[m]===void 0&&(f[m]=u)}}const a=Qe(e,i),d=a.attributes;if(i.inline&&(c.verticalAlign="-0.125em"),s==="svg"){f.style={...c,...l},Object.assign(f,d);let m=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),f.dangerouslySetInnerHTML={__html:Pt(We(a.body,u?()=>u+"ID"+m++:"iconifyReact"))},I.createElement("svg",f)}const{body:p,width:y,height:x}=e,g=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),C=Ct(p,{...d,width:y+"",height:x+""});return f.style={...c,"--svg":jt(C),width:he(d.width),height:he(d.height),...Lt,...g?W:Pe,...l},I.createElement("span",f)};ye(!0);Ge("",ot);if(typeof document<"u"&&typeof window<"u"){je();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!He(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Je(n,o)||console.error(r)}catch{console.error(r)}}}}class Ee extends I.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(t||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=D(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=Re(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:xt([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,n=this.state.icon;if(n===null)return t.children?t.children:I.createElement("span",{});let r=t;return n.classes&&(r={...t,className:(typeof t.className=="string"?t.className+" ":"")+n.classes.join(" ")}),Ot({...G,...n.data},r,t._inline,t._ref)}}const Ft=I.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!1};return I.createElement(Ee,r)});I.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!0};return I.createElement(Ee,r)});function Dt(e){const{name:t,className:n,prefix:r="icon",size:o=14,onClick:i}=e;return t.includes(":")?$.jsx(Ft,{className:`overflow-hidden fill-[currentcolor] ${n}`,style:{width:`${o}px`,height:`${o}px`},icon:t,onClick:i}):$.jsx("svg",{className:`overflow-hidden fill-[currentcolor] ${n}`,style:{width:`${o}px`,height:`${o}px`},"aria-hidden":"true",onClick:i,children:$.jsx("use",{xlinkHref:`#${r}-${t}`})})}export{Dt as S};