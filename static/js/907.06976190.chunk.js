/*! For license information please see 907.06976190.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkghpages=self.webpackChunkghpages||[]).push([[907],{907:(e,t,c)=>{c.r(t),c.d(t,{scopeCss:()=>A});var n="-shadowcsshost",s="-shadowcssslotted",o="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+n+r,"gim"),a=new RegExp("("+o+r,"gim"),i=new RegExp("("+s+r,"gim"),p=n+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,d=e=>new RegExp("((?<!(^@supports(.*)))|(?<={.*))(".concat(e,"\\b)"),"gim"),f=d("::slotted"),m=d(":host"),x=d(":host-context"),w=/\/\*\s*[\s\S]*?\*\//g,S=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,b=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,_=/(^.*?[^\\])??((:+)(.*)|$)/,k="%BLOCK%",E=e=>{const t=e.split(v),c=[],n=[];let s=0,o=[];for(let r=0;r<t.length;r++){const e=t[r];"}"===e&&s--,s>0?o.push(e):(o.length>0&&(n.push(o.join("")),c.push(k),o=[]),c.push(e)),"{"===e&&s++}o.length>0&&(n.push(o.join("")),c.push(k));return{escapedString:c.join(""),blocks:n}},O=(e,t,c)=>e.replace(t,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t[2]){const e=t[2].split(","),n=[];for(let s=0;s<e.length;s++){const o=e[s].trim();if(!o)break;n.push(c(p,o,t[3]))}return n.join(",")}return p+t[3]})),$=(e,t,c)=>e+t.replace(n,"")+c,R=(e,t,c)=>t.indexOf(n)>-1?$(e,t,c):e+t+c+", "+t+" "+e+c,j=(e,t)=>{const c=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!c.test(e)},C=(e,t)=>e.replace(_,(function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+t+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),W=(e,t,c)=>{const n="."+(t=t.replace(/\[is=([^\]]*)\]/g,(function(e){return arguments.length<=1?void 0:arguments[1]}))),s=e=>{let s=e.trim();if(!s)return"";if(e.indexOf(p)>-1)s=((e,t,c)=>{if(u.lastIndex=0,u.test(e)){const t=".".concat(c);return e.replace(g,((e,c)=>C(c,t))).replace(u,t+" ")}return t+" "+e})(e,t,c);else{const t=e.replace(u,"");t.length>0&&(s=C(t,n))}return s},o=(e=>{const t=[];let c=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,((e,n)=>{const s="__ph-".concat(c,"__");return t.push(n),c++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,n,s)=>{const o="__ph-".concat(c,"__");return t.push(s),c++,n+o})),placeholders:t}})(e);let r,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let h=!((e=o.content).indexOf(p)>-1);for(;null!==(r=i.exec(e));){const t=r[1],c=e.slice(a,r.index).trim();h=h||c.indexOf(p)>-1;const n=h?s(c):c;l+="".concat(n," ").concat(t," "),a=i.lastIndex}const d=e.substring(a);return h=h||d.indexOf(p)>-1,l+=h?s(d):d,f=o.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>f[+t]));var f},T=(e,t,c,n)=>((e,t)=>{const c=E(e);let n=0;return c.escapedString.replace(b,(function(){const e=arguments.length<=2?void 0:arguments[2];let s="",o=arguments.length<=4?void 0:arguments[4],r="";o&&o.startsWith("{"+k)&&(s=c.blocks[n++],o=o.substring(8),r="{");const l=t({selector:e,content:s});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(l.content).concat(o)}))})(e,(e=>{let s=e.selector,o=e.content;"@"!==e.selector[0]?s=((e,t,c,n)=>e.split(",").map((e=>n&&e.indexOf("."+n)>-1?e.trim():j(e,t)?W(e,t,c).trim():e.trim())).join(", "))(e.selector,t,c,n):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=T(e.content,t,c,n));return{selector:s.replace(/\s{2,}/g," ").trim(),content:o}})),L=(e,t,c,r)=>{const g=((e,t)=>{const c="."+t+" > ",n=[];return e=e.replace(i,(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];if(t[2]){const e=t[2].trim(),s=t[3],o=c+e+s;let r="";for(let c=t[4]-1;c>=0;c--){const e=t[5][c];if("}"===e||","===e)break;r=e+r}const l=(r+o).trim(),a="".concat(r.trimEnd()).concat(o.trim()).trim();if(l!==a){const e="".concat(a,", ").concat(l);n.push({orgSelector:l,updatedSelector:e})}return o}return p+t[3]})),{selectors:n,cssText:e}})(e=(e=>O(e,a,R))(e=(e=>O(e,l,$))(e=(e=>e.replace(x,"$1".concat(o)).replace(m,"$1".concat(n)).replace(f,"$1".concat(s)))(e))),r);return e=(e=>h.reduce(((e,t)=>e.replace(t," ")),e))(e=g.cssText),t&&(e=T(e,t,c,r)),{cssText:(e=(e=y(e,c)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors.map((e=>({orgSelector:y(e.orgSelector,c),updatedSelector:y(e.updatedSelector,c)})))}},y=(e,t)=>e.replace(/-shadowcsshost-no-combinator/g,".".concat(t)),A=(e,t)=>{const c=t+"-h",n=t+"-s",s=e.match(S)||[];e=(e=>e.replace(w,""))(e);const o=L(e,t,c,n);return e=[o.cssText,...s].join("\n"),o.slottedSelectors.forEach((t=>{const c=new RegExp(t.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");e=e.replace(c,t.updatedSelector)})),e}}}]);
//# sourceMappingURL=907.06976190.chunk.js.map