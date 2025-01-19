"use strict";(self.webpackChunkghpages=self.webpackChunkghpages||[]).push([[35],{405:(t,c,o)=>{o.d(c,{m:()=>e});var r,n=o(3072),e=(r=class{constructor(t){this.init=t,this.records=this.init()}reset(){this.records=this.init()}},(0,n.K2)(r,"ImperativeState"),r)},5888:(t,c,o)=>{function r(t,c){var o,r,n;t.accDescr&&(null===(o=c.setAccDescription)||void 0===o||o.call(c,t.accDescr));t.accTitle&&(null===(r=c.setAccTitle)||void 0===r||r.call(c,t.accTitle));t.title&&(null===(n=c.setDiagramTitle)||void 0===n||n.call(c,t.title))}o.d(c,{S:()=>r}),(0,o(3072).K2)(r,"populateCommonDb")},7035:(t,c,o)=>{o.d(c,{diagram:()=>vt});var r=o(9379),n=o(5888),e=o(405),a=o(8862),i=o(3072),s=o(5502),d=o(963),l={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},h=i.UI.gitGraph,m=(0,i.K2)((()=>(0,a.$t)((0,r.A)((0,r.A)({},h),(0,i.zj)().gitGraph))),"getConfig"),g=new e.m((()=>{const t=m(),c=t.mainBranchName,o=t.mainBranchOrder;return{mainBranchName:c,commits:new Map,head:null,branchConfig:new Map([[c,{name:c,order:o}]]),branches:new Map([[c,null]]),currBranch:c,direction:"LR",seq:0,options:{}}}));function y(){return(0,a.yT)({length:7})}function u(t,c){const o=Object.create(null);return t.reduce(((t,r)=>{const n=c(r);return o[n]||(o[n]=!0,t.push(r)),t}),[])}(0,i.K2)(y,"getID"),(0,i.K2)(u,"uniqBy");var p=(0,i.K2)((function(t){g.records.direction=t}),"setDirection"),f=(0,i.K2)((function(t){var c;i.Rm.debug("options str",t),t=(t=null===(c=t)||void 0===c?void 0:c.trim())||"{}";try{g.records.options=JSON.parse(t)}catch(o){i.Rm.error("error while parsing gitGraph options",o.message)}}),"setOptions"),x=(0,i.K2)((function(){return g.records.options}),"getOptions"),v=(0,i.K2)((function(t){var c,o;let r=t.msg,n=t.id;const e=t.type;let a=t.tags;i.Rm.info("commit",r,n,e,a),i.Rm.debug("Entering commit:",r,n,e,a);const s=m();n=i.Y2.sanitizeText(n,s),r=i.Y2.sanitizeText(r,s),a=null===(c=a)||void 0===c?void 0:c.map((t=>i.Y2.sanitizeText(t,s)));const d={id:n||g.records.seq+"-"+y(),message:r,seq:g.records.seq++,type:null!==e&&void 0!==e?e:l.NORMAL,tags:null!==(o=a)&&void 0!==o?o:[],parents:null==g.records.head?[]:[g.records.head.id],branch:g.records.currBranch};g.records.head=d,i.Rm.info("main branch",s.mainBranchName),g.records.commits.set(d.id,d),g.records.branches.set(g.records.currBranch,d.id),i.Rm.debug("in pushCommit "+d.id)}),"commit"),b=(0,i.K2)((function(t){let c=t.name;const o=t.order;if(c=i.Y2.sanitizeText(c,m()),g.records.branches.has(c))throw new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '.concat(c,'")'));g.records.branches.set(c,null!=g.records.head?g.records.head.id:null),g.records.branchConfig.set(c,{name:c,order:o}),E(c),i.Rm.debug("in createBranch")}),"branch"),w=(0,i.K2)((t=>{let c=t.branch,o=t.id;const r=t.type,n=t.tags,e=m();c=i.Y2.sanitizeText(c,e),o&&(o=i.Y2.sanitizeText(o,e));const a=g.records.branches.get(g.records.currBranch),s=g.records.branches.get(c),d=a?g.records.commits.get(a):void 0,h=s?g.records.commits.get(s):void 0;if(d&&h&&d.branch===c)throw new Error("Cannot merge branch '".concat(c,"' into itself."));if(g.records.currBranch===c){const t=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw t.hash={text:"merge ".concat(c),token:"merge ".concat(c),expected:["branch abc"]},t}if(void 0===d||!d){const t=new Error('Incorrect usage of "merge". Current branch ('.concat(g.records.currBranch,")has no commits"));throw t.hash={text:"merge ".concat(c),token:"merge ".concat(c),expected:["commit"]},t}if(!g.records.branches.has(c)){const t=new Error('Incorrect usage of "merge". Branch to be merged ('+c+") does not exist");throw t.hash={text:"merge ".concat(c),token:"merge ".concat(c),expected:["branch ".concat(c)]},t}if(void 0===h||!h){const t=new Error('Incorrect usage of "merge". Branch to be merged ('+c+") has no commits");throw t.hash={text:"merge ".concat(c),token:"merge ".concat(c),expected:['"commit"']},t}if(d===h){const t=new Error('Incorrect usage of "merge". Both branches have same head');throw t.hash={text:"merge ".concat(c),token:"merge ".concat(c),expected:["branch abc"]},t}if(o&&g.records.commits.has(o)){const t=new Error('Incorrect usage of "merge". Commit with id:'+o+" already exists, use different custom Id");throw t.hash={text:"merge ".concat(c," ").concat(o," ").concat(r," ").concat(null===n||void 0===n?void 0:n.join(" ")),token:"merge ".concat(c," ").concat(o," ").concat(r," ").concat(null===n||void 0===n?void 0:n.join(" ")),expected:["merge ".concat(c," ").concat(o,"_UNIQUE ").concat(r," ").concat(null===n||void 0===n?void 0:n.join(" "))]},t}const u=s||"",p={id:o||"".concat(g.records.seq,"-").concat(y()),message:"merged branch ".concat(c," into ").concat(g.records.currBranch),seq:g.records.seq++,parents:null==g.records.head?[]:[g.records.head.id,u],branch:g.records.currBranch,type:l.MERGE,customType:r,customId:!!o,tags:null!==n&&void 0!==n?n:[]};g.records.head=p,g.records.commits.set(p.id,p),g.records.branches.set(g.records.currBranch,p.id),i.Rm.debug(g.records.branches),i.Rm.debug("in mergeBranch")}),"merge"),B=(0,i.K2)((function(t){var c;let o=t.id,r=t.targetId,n=t.tags,e=t.parent;i.Rm.debug("Entering cherryPick:",o,r,n);const a=m();if(o=i.Y2.sanitizeText(o,a),r=i.Y2.sanitizeText(r,a),n=null===(c=n)||void 0===c?void 0:c.map((t=>i.Y2.sanitizeText(t,a))),e=i.Y2.sanitizeText(e,a),!o||!g.records.commits.has(o)){const t=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw t.hash={text:"cherryPick ".concat(o," ").concat(r),token:"cherryPick ".concat(o," ").concat(r),expected:["cherry-pick abc"]},t}const s=g.records.commits.get(o);if(void 0===s||!s)throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(e&&(!Array.isArray(s.parents)||!s.parents.includes(e))){throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.")}const d=s.branch;if(s.type===l.MERGE&&!e){throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.")}if(!r||!g.records.commits.has(r)){if(d===g.records.currBranch){const t=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw t.hash={text:"cherryPick ".concat(o," ").concat(r),token:"cherryPick ".concat(o," ").concat(r),expected:["cherry-pick abc"]},t}const t=g.records.branches.get(g.records.currBranch);if(void 0===t||!t){const t=new Error('Incorrect usage of "cherry-pick". Current branch ('.concat(g.records.currBranch,")has no commits"));throw t.hash={text:"cherryPick ".concat(o," ").concat(r),token:"cherryPick ".concat(o," ").concat(r),expected:["cherry-pick abc"]},t}const c=g.records.commits.get(t);if(void 0===c||!c){const t=new Error('Incorrect usage of "cherry-pick". Current branch ('.concat(g.records.currBranch,")has no commits"));throw t.hash={text:"cherryPick ".concat(o," ").concat(r),token:"cherryPick ".concat(o," ").concat(r),expected:["cherry-pick abc"]},t}const a={id:g.records.seq+"-"+y(),message:"cherry-picked ".concat(null===s||void 0===s?void 0:s.message," into ").concat(g.records.currBranch),seq:g.records.seq++,parents:null==g.records.head?[]:[g.records.head.id,s.id],branch:g.records.currBranch,type:l.CHERRY_PICK,tags:n?n.filter(Boolean):["cherry-pick:".concat(s.id).concat(s.type===l.MERGE?"|parent:".concat(e):"")]};g.records.head=a,g.records.commits.set(a.id,a),g.records.branches.set(g.records.currBranch,a.id),i.Rm.debug(g.records.branches),i.Rm.debug("in cherryPick")}}),"cherryPick"),E=(0,i.K2)((function(t){if(t=i.Y2.sanitizeText(t,m()),!g.records.branches.has(t)){const c=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '.concat(t,'")'));throw c.hash={text:"checkout ".concat(t),token:"checkout ".concat(t),expected:["branch ".concat(t)]},c}{g.records.currBranch=t;const o=g.records.branches.get(g.records.currBranch);var c;if(void 0!==o&&o)g.records.head=null!==(c=g.records.commits.get(o))&&void 0!==c?c:null;else g.records.head=null}}),"checkout");function k(t,c,o){const r=t.indexOf(c);-1===r?t.push(o):t.splice(r,1,o)}function C(t){const c=t.reduce(((t,c)=>t.seq>c.seq?t:c),t[0]);let o="";t.forEach((function(t){o+=t===c?"\t*":"\t|"}));const r=[o,c.id,c.seq];for(const n in g.records.branches)g.records.branches.get(n)===c.id&&r.push(n);if(i.Rm.debug(r.join(" ")),c.parents&&2==c.parents.length&&c.parents[0]&&c.parents[1]){const o=g.records.commits.get(c.parents[0]);k(t,c,o),c.parents[1]&&t.push(g.records.commits.get(c.parents[1]))}else{if(0==c.parents.length)return;if(c.parents[0]){const o=g.records.commits.get(c.parents[0]);k(t,c,o)}}C(t=u(t,(t=>t.id)))}(0,i.K2)(k,"upsert"),(0,i.K2)(C,"prettyPrintCommitHistory");var T=(0,i.K2)((function(){i.Rm.debug(g.records.commits);C([P()[0]])}),"prettyPrint"),L=(0,i.K2)((function(){g.reset(),(0,i.IU)()}),"clear"),K=(0,i.K2)((function(){return[...g.records.branchConfig.values()].map(((t,c)=>null!==t.order&&void 0!==t.order?t:(0,r.A)((0,r.A)({},t),{},{order:parseFloat("0.".concat(c))}))).sort(((t,c)=>{var o,r;return(null!==(o=t.order)&&void 0!==o?o:0)-(null!==(r=c.order)&&void 0!==r?r:0)})).map((t=>{let{name:c}=t;return{name:c}}))}),"getBranchesAsObjArray"),M=(0,i.K2)((function(){return g.records.branches}),"getBranches"),R=(0,i.K2)((function(){return g.records.commits}),"getCommits"),P=(0,i.K2)((function(){const t=[...g.records.commits.values()];return t.forEach((function(t){i.Rm.debug(t.id)})),t.sort(((t,c)=>t.seq-c.seq)),t}),"getCommitsArray"),A={commitType:l,getConfig:m,setDirection:p,setOptions:f,getOptions:x,commit:v,branch:b,merge:w,cherryPick:B,checkout:E,prettyPrint:T,clear:L,getBranchesAsObjArray:K,getBranches:M,getCommits:R,getCommitsArray:P,getCurrentBranch:(0,i.K2)((function(){return g.records.currBranch}),"getCurrentBranch"),getDirection:(0,i.K2)((function(){return g.records.direction}),"getDirection"),getHead:(0,i.K2)((function(){return g.records.head}),"getHead"),setAccTitle:i.SV,getAccTitle:i.iN,getAccDescription:i.m7,setAccDescription:i.EI,setDiagramTitle:i.ke,getDiagramTitle:i.ab},I=(0,i.K2)(((t,c)=>{(0,n.S)(t,c),t.dir&&c.setDirection(t.dir);for(const o of t.statements)G(o,c)}),"populate"),G=(0,i.K2)(((t,c)=>{const o={Commit:(0,i.K2)((t=>c.commit(O(t))),"Commit"),Branch:(0,i.K2)((t=>c.branch(q(t))),"Branch"),Merge:(0,i.K2)((t=>c.merge(z(t))),"Merge"),Checkout:(0,i.K2)((t=>c.checkout(H(t))),"Checkout"),CherryPicking:(0,i.K2)((t=>c.cherryPick(S(t))),"CherryPicking")}[t.$type];o?o(t):i.Rm.error("Unknown statement type: ".concat(t.$type))}),"parseStatement"),O=(0,i.K2)((t=>{var c,o;return{id:t.id,msg:null!==(c=t.message)&&void 0!==c?c:"",type:void 0!==t.type?l[t.type]:l.NORMAL,tags:null!==(o=t.tags)&&void 0!==o?o:void 0}}),"parseCommit"),q=(0,i.K2)((t=>{var c;return{name:t.name,order:null!==(c=t.order)&&void 0!==c?c:0}}),"parseBranch"),z=(0,i.K2)((t=>{var c,o;return{branch:t.branch,id:null!==(c=t.id)&&void 0!==c?c:"",type:void 0!==t.type?l[t.type]:void 0,tags:null!==(o=t.tags)&&void 0!==o?o:void 0}}),"parseMerge"),H=(0,i.K2)((t=>t.branch),"parseCheckout"),S=(0,i.K2)((t=>{var c;return{id:t.id,targetId:"",tags:0===(null===(c=t.tags)||void 0===c?void 0:c.length)?void 0:t.tags,parent:t.parent}}),"parseCherryPicking"),D={parse:(0,i.K2)((async t=>{const c=await(0,s.qg)("gitGraph",t);i.Rm.debug(c),I(c,A)}),"parse")};var Y=(0,i.D7)(),N=null===Y||void 0===Y?void 0:Y.gitGraph,j=10,W=40,_=new Map,F=new Map,U=new Map,V=[],$=0,J="LR",Q=(0,i.K2)((()=>{_.clear(),F.clear(),U.clear(),$=0,V=[],J="LR"}),"clear"),X=(0,i.K2)((t=>{const c=document.createElementNS("http://www.w3.org/2000/svg","text");return("string"===typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach((t=>{const o=document.createElementNS("http://www.w3.org/2000/svg","tspan");o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),o.setAttribute("dy","1em"),o.setAttribute("x","0"),o.setAttribute("class","row"),o.textContent=t.trim(),c.appendChild(o)})),c}),"drawText"),Z=(0,i.K2)((t=>{let c,o,r;return"BT"===J?(o=(0,i.K2)(((t,c)=>t<=c),"comparisonFunc"),r=1/0):(o=(0,i.K2)(((t,c)=>t>=c),"comparisonFunc"),r=0),t.forEach((t=>{var n,e;const a="TB"===J||"BT"==J?null===(n=F.get(t))||void 0===n?void 0:n.y:null===(e=F.get(t))||void 0===e?void 0:e.x;void 0!==a&&o(a,r)&&(c=t,r=a)})),c}),"findClosestParent"),tt=(0,i.K2)((t=>{let c="",o=1/0;return t.forEach((t=>{const r=F.get(t).y;r<=o&&(c=t,o=r)})),c||void 0}),"findClosestParentBT"),ct=(0,i.K2)(((t,c,o)=>{let r=o,n=o;const e=[];t.forEach((t=>{const o=c.get(t);if(!o)throw new Error("Commit not found for key ".concat(t));o.parents.length?(r=rt(o),n=Math.max(r,n)):e.push(o),nt(o,r)})),r=n,e.forEach((t=>{et(t,r,o)})),t.forEach((t=>{const o=c.get(t);if(null!==o&&void 0!==o&&o.parents.length){const t=tt(o.parents);r=F.get(t).y-W,r<=n&&(n=r);const c=_.get(o.branch).pos,e=r-j;F.set(o.id,{x:c,y:e})}}))}),"setParallelBTPos"),ot=(0,i.K2)((t=>{var c;const o=Z(t.parents.filter((t=>null!==t)));if(!o)throw new Error("Closest parent not found for commit ".concat(t.id));const r=null===(c=F.get(o))||void 0===c?void 0:c.y;if(void 0===r)throw new Error("Closest parent position not found for commit ".concat(t.id));return r}),"findClosestParentPos"),rt=(0,i.K2)((t=>ot(t)+W),"calculateCommitPosition"),nt=(0,i.K2)(((t,c)=>{const o=_.get(t.branch);if(!o)throw new Error("Branch not found for commit ".concat(t.id));const r=o.pos,n=c+j;return F.set(t.id,{x:r,y:n}),{x:r,y:n}}),"setCommitPosition"),et=(0,i.K2)(((t,c,o)=>{const r=_.get(t.branch);if(!r)throw new Error("Branch not found for commit ".concat(t.id));const n=c+o,e=r.pos;F.set(t.id,{x:e,y:n})}),"setRootPosition"),at=(0,i.K2)(((t,c,o,r,n,e)=>{if(e===l.HIGHLIGHT)t.append("rect").attr("x",o.x-10).attr("y",o.y-10).attr("width",20).attr("height",20).attr("class","commit ".concat(c.id," commit-highlight").concat(n%8," ").concat(r,"-outer")),t.append("rect").attr("x",o.x-6).attr("y",o.y-6).attr("width",12).attr("height",12).attr("class","commit ".concat(c.id," commit").concat(n%8," ").concat(r,"-inner"));else if(e===l.CHERRY_PICK)t.append("circle").attr("cx",o.x).attr("cy",o.y).attr("r",10).attr("class","commit ".concat(c.id," ").concat(r)),t.append("circle").attr("cx",o.x-3).attr("cy",o.y+2).attr("r",2.75).attr("fill","#fff").attr("class","commit ".concat(c.id," ").concat(r)),t.append("circle").attr("cx",o.x+3).attr("cy",o.y+2).attr("r",2.75).attr("fill","#fff").attr("class","commit ".concat(c.id," ").concat(r)),t.append("line").attr("x1",o.x+3).attr("y1",o.y+1).attr("x2",o.x).attr("y2",o.y-5).attr("stroke","#fff").attr("class","commit ".concat(c.id," ").concat(r)),t.append("line").attr("x1",o.x-3).attr("y1",o.y+1).attr("x2",o.x).attr("y2",o.y-5).attr("stroke","#fff").attr("class","commit ".concat(c.id," ").concat(r));else{const a=t.append("circle");if(a.attr("cx",o.x),a.attr("cy",o.y),a.attr("r",c.type===l.MERGE?9:10),a.attr("class","commit ".concat(c.id," commit").concat(n%8)),e===l.MERGE){const e=t.append("circle");e.attr("cx",o.x),e.attr("cy",o.y),e.attr("r",6),e.attr("class","commit ".concat(r," ").concat(c.id," commit").concat(n%8))}if(e===l.REVERSE){t.append("path").attr("d","M ".concat(o.x-5,",").concat(o.y-5,"L").concat(o.x+5,",").concat(o.y+5,"M").concat(o.x-5,",").concat(o.y+5,"L").concat(o.x+5,",").concat(o.y-5)).attr("class","commit ".concat(r," ").concat(c.id," commit").concat(n%8))}}}),"drawCommitBullet"),it=(0,i.K2)(((t,c,o,r)=>{if(c.type!==l.CHERRY_PICK&&(c.customId&&c.type===l.MERGE||c.type!==l.MERGE)&&null!==N&&void 0!==N&&N.showCommitLabel){var n;const e=t.append("g"),a=e.insert("rect").attr("class","commit-label-bkg"),i=e.append("text").attr("x",r).attr("y",o.y+25).attr("class","commit-label").text(c.id),s=null===(n=i.node())||void 0===n?void 0:n.getBBox();if(s&&(a.attr("x",o.posWithOffset-s.width/2-2).attr("y",o.y+13.5).attr("width",s.width+4).attr("height",s.height+4),"TB"===J||"BT"===J?(a.attr("x",o.x-(s.width+16+5)).attr("y",o.y-12),i.attr("x",o.x-(s.width+16)).attr("y",o.y+s.height-12)):i.attr("x",o.posWithOffset-s.width/2),N.rotateCommitLabel))if("TB"===J||"BT"===J)i.attr("transform","rotate(-45, "+o.x+", "+o.y+")"),a.attr("transform","rotate(-45, "+o.x+", "+o.y+")");else{const t=-7.5-(s.width+10)/25*9.5,c=10+s.width/25*8.5;e.attr("transform","translate("+t+", "+c+") rotate(-45, "+r+", "+o.y+")")}}}),"drawCommitLabel"),st=(0,i.K2)(((t,c,o,r)=>{if(c.tags.length>0){let e=0,a=0,i=0;const s=[];for(const r of c.tags.reverse()){var n;const c=t.insert("polygon"),d=t.append("circle"),l=t.append("text").attr("y",o.y-16-e).attr("class","tag-label").text(r),h=null===(n=l.node())||void 0===n?void 0:n.getBBox();if(!h)throw new Error("Tag bbox not found");a=Math.max(a,h.width),i=Math.max(i,h.height),l.attr("x",o.posWithOffset-h.width/2),s.push({tag:l,hole:d,rect:c,yOffset:e}),e+=20}for(const{tag:t,hole:c,rect:n,yOffset:d}of s){const e=i/2,s=o.y-19.2-d;if(n.attr("class","tag-label-bkg").attr("points","\n      ".concat(r-a/2-2,",").concat(s+2,"  \n      ").concat(r-a/2-2,",").concat(s-2,"\n      ").concat(o.posWithOffset-a/2-4,",").concat(s-e-2,"\n      ").concat(o.posWithOffset+a/2+4,",").concat(s-e-2,"\n      ").concat(o.posWithOffset+a/2+4,",").concat(s+e+2,"\n      ").concat(o.posWithOffset-a/2-4,",").concat(s+e+2)),c.attr("cy",s).attr("cx",r-a/2+2).attr("r",1.5).attr("class","tag-hole"),"TB"===J||"BT"===J){const i=r+d;n.attr("class","tag-label-bkg").attr("points","\n        ".concat(o.x,",").concat(i+2,"\n        ").concat(o.x,",").concat(i-2,"\n        ").concat(o.x+j,",").concat(i-e-2,"\n        ").concat(o.x+j+a+4,",").concat(i-e-2,"\n        ").concat(o.x+j+a+4,",").concat(i+e+2,"\n        ").concat(o.x+j,",").concat(i+e+2)).attr("transform","translate(12,12) rotate(45, "+o.x+","+r+")"),c.attr("cx",o.x+2).attr("cy",i).attr("transform","translate(12,12) rotate(45, "+o.x+","+r+")"),t.attr("x",o.x+5).attr("y",i+3).attr("transform","translate(14,14) rotate(45, "+o.x+","+r+")")}}}}),"drawCommitTags"),dt=(0,i.K2)((t=>{var c;switch(null!==(c=t.customType)&&void 0!==c?c:t.type){case l.NORMAL:return"commit-normal";case l.REVERSE:return"commit-reverse";case l.HIGHLIGHT:return"commit-highlight";case l.MERGE:return"commit-merge";case l.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}}),"getCommitClassType"),lt=(0,i.K2)(((t,c,o,r)=>{const n={x:0,y:0};if(!(t.parents.length>0)){if("TB"===c)return 30;if("BT"===c){var e;return(null!==(e=r.get(t.id))&&void 0!==e?e:n).y-W}return 0}{const o=Z(t.parents);if(o){var a;const e=null!==(a=r.get(o))&&void 0!==a?a:n;if("TB"===c)return e.y+W;if("BT"===c){var i;return(null!==(i=r.get(t.id))&&void 0!==i?i:n).y-W}return e.x+W}}return 0}),"calculatePosition"),ht=(0,i.K2)(((t,c,o)=>{var r,n;const e="BT"===J&&o?c:c+j,a="TB"===J||"BT"===J?e:null===(r=_.get(t.branch))||void 0===r?void 0:r.pos,i="TB"===J||"BT"===J?null===(n=_.get(t.branch))||void 0===n?void 0:n.pos:e;if(void 0===i||void 0===a)throw new Error("Position were undefined for commit ".concat(t.id));return{x:i,y:a,posWithOffset:e}}),"getCommitPosition"),mt=(0,i.K2)(((t,c,o)=>{var r;if(!N)throw new Error("GitGraph config not found");const n=t.append("g").attr("class","commit-bullets"),e=t.append("g").attr("class","commit-labels");let a="TB"===J||"BT"===J?30:0;const s=[...c.keys()],d=null!==(r=null===N||void 0===N?void 0:N.parallelCommits)&&void 0!==r&&r,l=(0,i.K2)(((t,o)=>{var r,n;const e=null===(r=c.get(t))||void 0===r?void 0:r.seq,a=null===(n=c.get(o))||void 0===n?void 0:n.seq;return void 0!==e&&void 0!==a?e-a:0}),"sortKeys");let h=s.sort(l);"BT"===J&&(d&&ct(h,c,a),h=h.reverse()),h.forEach((t=>{const r=c.get(t);if(!r)throw new Error("Commit not found for key ".concat(t));d&&(a=lt(r,J,a,F));const i=ht(r,a,d);if(o){var s,l,h;const t=dt(r),c=null!==(s=r.customType)&&void 0!==s?s:r.type,o=null!==(l=null===(h=_.get(r.branch))||void 0===h?void 0:h.index)&&void 0!==l?l:0;at(n,r,i,t,o,c),it(e,r,i,a),st(e,r,i,a)}"TB"===J||"BT"===J?F.set(r.id,{x:i.x,y:i.posWithOffset}):F.set(r.id,{x:i.posWithOffset,y:i.y}),a="BT"===J&&d?a+W:a+W+j,a>$&&($=a)}))}),"drawCommits"),gt=(0,i.K2)(((t,c,o,r,n)=>{const e=("TB"===J||"BT"===J?o.x<r.x:o.y<r.y)?c.branch:t.branch,a=(0,i.K2)((t=>t.branch===e),"isOnBranchToGetCurve"),s=(0,i.K2)((o=>o.seq>t.seq&&o.seq<c.seq),"isBetweenCommits");return[...n.values()].some((t=>s(t)&&a(t)))}),"shouldRerouteArrow"),yt=(0,i.K2)((function(t,c){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=t+Math.abs(t-c)/2;if(o>5)return r;if(V.every((t=>Math.abs(t-r)>=10)))return V.push(r),r;const n=Math.abs(t-c);return yt(t,c-n/5,o+1)}),"findLane"),ut=(0,i.K2)(((t,c,o,r)=>{var n;const e=F.get(c.id),a=F.get(o.id);if(void 0===e||void 0===a)throw new Error("Commit positions not found for commits ".concat(c.id," and ").concat(o.id));const i=gt(c,o,e,a,r);let s="",d="",h=0,m=0,g=null===(n=_.get(o.branch))||void 0===n?void 0:n.index;var y;o.type===l.MERGE&&c.id!==o.parents[0]&&(g=null===(y=_.get(c.branch))||void 0===y?void 0:y.index);let u;if(i){s="A 10 10, 0, 0, 0,",d="A 10 10, 0, 0, 1,",h=10,m=10;const t=e.y<a.y?yt(e.y,a.y):yt(a.y,e.y),o=e.x<a.x?yt(e.x,a.x):yt(a.x,e.x);var p;if("TB"===J)if(e.x<a.x)u="M ".concat(e.x," ").concat(e.y," L ").concat(o-h," ").concat(e.y," ").concat(d," ").concat(o," ").concat(e.y+m," L ").concat(o," ").concat(a.y-h," ").concat(s," ").concat(o+m," ").concat(a.y," L ").concat(a.x," ").concat(a.y);else g=null===(p=_.get(c.branch))||void 0===p?void 0:p.index,u="M ".concat(e.x," ").concat(e.y," L ").concat(o+h," ").concat(e.y," ").concat(s," ").concat(o," ").concat(e.y+m," L ").concat(o," ").concat(a.y-h," ").concat(d," ").concat(o-m," ").concat(a.y," L ").concat(a.x," ").concat(a.y);else if("BT"===J){var f;if(e.x<a.x)u="M ".concat(e.x," ").concat(e.y," L ").concat(o-h," ").concat(e.y," ").concat(s," ").concat(o," ").concat(e.y-m," L ").concat(o," ").concat(a.y+h," ").concat(d," ").concat(o+m," ").concat(a.y," L ").concat(a.x," ").concat(a.y);else g=null===(f=_.get(c.branch))||void 0===f?void 0:f.index,u="M ".concat(e.x," ").concat(e.y," L ").concat(o+h," ").concat(e.y," ").concat(d," ").concat(o," ").concat(e.y-m," L ").concat(o," ").concat(a.y+h," ").concat(s," ").concat(o-m," ").concat(a.y," L ").concat(a.x," ").concat(a.y)}else{var x;if(e.y<a.y)u="M ".concat(e.x," ").concat(e.y," L ").concat(e.x," ").concat(t-h," ").concat(s," ").concat(e.x+m," ").concat(t," L ").concat(a.x-h," ").concat(t," ").concat(d," ").concat(a.x," ").concat(t+m," L ").concat(a.x," ").concat(a.y);else g=null===(x=_.get(c.branch))||void 0===x?void 0:x.index,u="M ".concat(e.x," ").concat(e.y," L ").concat(e.x," ").concat(t+h," ").concat(d," ").concat(e.x+m," ").concat(t," L ").concat(a.x-h," ").concat(t," ").concat(s," ").concat(a.x," ").concat(t-m," L ").concat(a.x," ").concat(a.y)}}else s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",h=20,m=20,"TB"===J?(e.x<a.x&&(u=o.type===l.MERGE&&c.id!==o.parents[0]?"M ".concat(e.x," ").concat(e.y," L ").concat(e.x," ").concat(a.y-h," ").concat(s," ").concat(e.x+m," ").concat(a.y," L ").concat(a.x," ").concat(a.y):"M ".concat(e.x," ").concat(e.y," L ").concat(a.x-h," ").concat(e.y," ").concat(d," ").concat(a.x," ").concat(e.y+m," L ").concat(a.x," ").concat(a.y)),e.x>a.x&&(s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",h=20,m=20,u=o.type===l.MERGE&&c.id!==o.parents[0]?"M ".concat(e.x," ").concat(e.y," L ").concat(e.x," ").concat(a.y-h," ").concat(d," ").concat(e.x-m," ").concat(a.y," L ").concat(a.x," ").concat(a.y):"M ".concat(e.x," ").concat(e.y," L ").concat(a.x+h," ").concat(e.y," ").concat(s," ").concat(a.x," ").concat(e.y+m," L ").concat(a.x," ").concat(a.y)),e.x===a.x&&(u="M ".concat(e.x," ").concat(e.y," L ").concat(a.x," ").concat(a.y))):"BT"===J?(e.x<a.x&&(u=o.type===l.MERGE&&c.id!==o.parents[0]?"M ".concat(e.x," ").concat(e.y," L ").concat(e.x," ").concat(a.y+h," ").concat(d," ").concat(e.x+m," ").concat(a.y," L ").concat(a.x," ").concat(a.y):"M ".concat(e.x," ").concat(e.y," L ").concat(a.x-h," ").concat(e.y," ").concat(s," ").concat(a.x," ").concat(e.y-m," L ").concat(a.x," ").concat(a.y)),e.x>a.x&&(s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",h=20,m=20,u=o.type===l.MERGE&&c.id!==o.parents[0]?"M ".concat(e.x," ").concat(e.y," L ").concat(e.x," ").concat(a.y+h," ").concat(s," ").concat(e.x-m," ").concat(a.y," L ").concat(a.x," ").concat(a.y):"M ".concat(e.x," ").concat(e.y," L ").concat(a.x-h," ").concat(e.y," ").concat(s," ").concat(a.x," ").concat(e.y-m," L ").concat(a.x," ").concat(a.y)),e.x===a.x&&(u="M ".concat(e.x," ").concat(e.y," L ").concat(a.x," ").concat(a.y))):(e.y<a.y&&(u=o.type===l.MERGE&&c.id!==o.parents[0]?"M ".concat(e.x," ").concat(e.y," L ").concat(a.x-h," ").concat(e.y," ").concat(d," ").concat(a.x," ").concat(e.y+m," L ").concat(a.x," ").concat(a.y):"M ".concat(e.x," ").concat(e.y," L ").concat(e.x," ").concat(a.y-h," ").concat(s," ").concat(e.x+m," ").concat(a.y," L ").concat(a.x," ").concat(a.y)),e.y>a.y&&(u=o.type===l.MERGE&&c.id!==o.parents[0]?"M ".concat(e.x," ").concat(e.y," L ").concat(a.x-h," ").concat(e.y," ").concat(s," ").concat(a.x," ").concat(e.y-m," L ").concat(a.x," ").concat(a.y):"M ".concat(e.x," ").concat(e.y," L ").concat(e.x," ").concat(a.y+h," ").concat(d," ").concat(e.x+m," ").concat(a.y," L ").concat(a.x," ").concat(a.y)),e.y===a.y&&(u="M ".concat(e.x," ").concat(e.y," L ").concat(a.x," ").concat(a.y)));if(void 0===u)throw new Error("Line definition not found");t.append("path").attr("d",u).attr("class","arrow arrow"+g%8)}),"drawArrow"),pt=(0,i.K2)(((t,c)=>{const o=t.append("g").attr("class","commit-arrows");[...c.keys()].forEach((t=>{const r=c.get(t);r.parents&&r.parents.length>0&&r.parents.forEach((t=>{ut(o,c.get(t),r,c)}))}))}),"drawArrows"),ft=(0,i.K2)(((t,c)=>{const o=t.append("g");c.forEach(((t,c)=>{var r;const n=c%8,e=null===(r=_.get(t.name))||void 0===r?void 0:r.pos;if(void 0===e)throw new Error("Position not found for branch ".concat(t.name));const a=o.append("line");a.attr("x1",0),a.attr("y1",e),a.attr("x2",$),a.attr("y2",e),a.attr("class","branch branch"+n),"TB"===J?(a.attr("y1",30),a.attr("x1",e),a.attr("y2",$),a.attr("x2",e)):"BT"===J&&(a.attr("y1",$),a.attr("x1",e),a.attr("y2",30),a.attr("x2",e)),V.push(e);const i=t.name,s=X(i),d=o.insert("rect"),l=o.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);l.node().appendChild(s);const h=s.getBBox();d.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-h.width-4-(!0===(null===N||void 0===N?void 0:N.rotateCommitLabel)?30:0)).attr("y",-h.height/2+8).attr("width",h.width+18).attr("height",h.height+4),l.attr("transform","translate("+(-h.width-14-(!0===(null===N||void 0===N?void 0:N.rotateCommitLabel)?30:0))+", "+(e-h.height/2-1)+")"),"TB"===J?(d.attr("x",e-h.width/2-10).attr("y",0),l.attr("transform","translate("+(e-h.width/2-5)+", 0)")):"BT"===J?(d.attr("x",e-h.width/2-10).attr("y",$),l.attr("transform","translate("+(e-h.width/2-5)+", "+$+")")):d.attr("transform","translate(-19, "+(e-h.height/2)+")")}))}),"drawBranches"),xt=(0,i.K2)((function(t,c,o,r,n){return _.set(t,{pos:c,index:o}),c+=50+(n?40:0)+("TB"===J||"BT"===J?r.width/2:0)}),"setBranchPosition");var vt={parser:D,db:A,renderer:{draw:(0,i.K2)((function(t,c,o,r){var n,e;if(Q(),i.Rm.debug("in gitgraph renderer",t+"\n","id:",c,o),!N)throw new Error("GitGraph config not found");const s=null!==(n=N.rotateCommitLabel)&&void 0!==n&&n,l=r.db;U=l.getCommits();const h=l.getBranchesAsObjArray();J=l.getDirection();const m=(0,d.Ltv)('[id="'.concat(c,'"]'));let g=0;h.forEach(((t,c)=>{var o;const r=X(t.name),n=m.append("g"),e=n.insert("g").attr("class","branchLabel"),a=e.insert("g").attr("class","label branch-label");null===(o=a.node())||void 0===o||o.appendChild(r);const i=r.getBBox();g=xt(t.name,g,c,i,s),a.remove(),e.remove(),n.remove()})),mt(m,U,!1),N.showBranches&&ft(m,h),pt(m,U),mt(m,U,!0),a._K.insertTitle(m,"gitTitleText",null!==(e=N.titleTopMargin)&&void 0!==e?e:0,l.getDiagramTitle()),(0,i.mj)(void 0,m,N.diagramPadding,N.useMaxWidth)}),"draw")},styles:(0,i.K2)((t=>"\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ".concat([0,1,2,3,4,5,6,7].map((c=>"\n        .branch-label".concat(c," { fill: ").concat(t["gitBranchLabel"+c],"; }\n        .commit").concat(c," { stroke: ").concat(t["git"+c],"; fill: ").concat(t["git"+c],"; }\n        .commit-highlight").concat(c," { stroke: ").concat(t["gitInv"+c],"; fill: ").concat(t["gitInv"+c],"; }\n        .label").concat(c,"  { fill: ").concat(t["git"+c],"; }\n        .arrow").concat(c," { stroke: ").concat(t["git"+c],"; }\n        "))).join("\n"),"\n\n  .branch {\n    stroke-width: 1;\n    stroke: ").concat(t.lineColor,";\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ").concat(t.commitLabelFontSize,"; fill: ").concat(t.commitLabelColor,";}\n  .commit-label-bkg { font-size: ").concat(t.commitLabelFontSize,"; fill: ").concat(t.commitLabelBackground,"; opacity: 0.5; }\n  .tag-label { font-size: ").concat(t.tagLabelFontSize,"; fill: ").concat(t.tagLabelColor,";}\n  .tag-label-bkg { fill: ").concat(t.tagLabelBackground,"; stroke: ").concat(t.tagLabelBorder,"; }\n  .tag-hole { fill: ").concat(t.textColor,"; }\n\n  .commit-merge {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n  }\n  .commit-reverse {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(t.textColor,";\n  }\n")),"getStyles")}}}]);
//# sourceMappingURL=35.2da45a44.chunk.js.map