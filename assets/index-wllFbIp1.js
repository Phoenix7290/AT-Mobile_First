import{R as j,r as he}from"./client-CZ7ZPx7S.js";import{G as qe}from"./iconBase-D8QjFRKA.js";var _=function(){return _=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_.apply(this,arguments)};function st(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,o;n<s;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var v="-ms-",nt="-moz-",m="-webkit-",de="comm",Ct="rule",Ht="decl",Ke="@import",le="@keyframes",Ue="@layer",ge=Math.abs,qt=String.fromCharCode,jt=Object.assign;function Ze(t,e){return R(t,0)^45?(((e<<2^R(t,0))<<2^R(t,1))<<2^R(t,2))<<2^R(t,3):0}function me(t){return t.trim()}function D(t,e){return(t=e.exec(t))?t[0]:t}function f(t,e,r){return t.replace(e,r)}function lt(t,e,r){return t.indexOf(e,r)}function R(t,e){return t.charCodeAt(e)|0}function q(t,e,r){return t.slice(e,r)}function O(t){return t.length}function ye(t){return t.length}function rt(t,e){return e.push(t),t}function Je(t,e){return t.map(e).join("")}function Xt(t,e){return t.filter(function(r){return!D(r,e)})}var xt=1,K=1,ve=0,k=0,A=0,Q="";function At(t,e,r,n,s,o,i,c){return{value:t,root:e,parent:r,type:n,props:s,children:o,line:xt,column:K,length:i,return:"",siblings:c}}function G(t,e){return jt(At("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function W(t){for(;t.root;)t=G(t.root,{children:[t]});rt(t,t.siblings)}function Qe(){return A}function Ve(){return A=k>0?R(Q,--k):0,K--,A===10&&(K=1,xt--),A}function N(){return A=k<ve?R(Q,k++):0,K++,A===10&&(K=1,xt++),A}function Y(){return R(Q,k)}function gt(){return k}function Et(t,e){return q(Q,t,e)}function zt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xe(t){return xt=K=1,ve=O(Q=t),k=0,[]}function tr(t){return Q="",t}function Nt(t){return me(Et(k-1,Ft(t===91?t+2:t===40?t+1:t)))}function er(t){for(;(A=Y())&&A<33;)N();return zt(t)>2||zt(A)>3?"":" "}function rr(t,e){for(;--e&&N()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Et(t,gt()+(e<6&&Y()==32&&N()==32))}function Ft(t){for(;N();)switch(A){case t:return k;case 34:case 39:t!==34&&t!==39&&Ft(A);break;case 40:t===41&&Ft(t);break;case 92:N();break}return k}function nr(t,e){for(;N()&&t+A!==57;)if(t+A===84&&Y()===47)break;return"/*"+Et(e,k-1)+"*"+qt(t===47?t:N())}function sr(t){for(;!zt(Y());)N();return Et(t,k)}function or(t){return tr(mt("",null,null,null,[""],t=Xe(t),0,[0],t))}function mt(t,e,r,n,s,o,i,c,a){for(var u=0,p=0,d=i,g=0,l=0,b=0,C=1,P=1,x=1,w=0,S="",I=s,E=o,y=n,h=S;P;)switch(b=w,w=N()){case 40:if(b!=108&&R(h,d-1)==58){lt(h+=f(Nt(w),"&","&\f"),"&\f",ge(u?c[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:h+=Nt(w);break;case 9:case 10:case 13:case 32:h+=er(b);break;case 92:h+=rr(gt()-1,7);continue;case 47:switch(Y()){case 42:case 47:rt(ir(nr(N(),gt()),e,r,a),a);break;default:h+="/"}break;case 123*C:c[u++]=O(h)*x;case 125*C:case 59:case 0:switch(w){case 0:case 125:P=0;case 59+p:x==-1&&(h=f(h,/\f/g,"")),l>0&&O(h)-d&&rt(l>32?ee(h+";",n,r,d-1,a):ee(f(h," ","")+";",n,r,d-2,a),a);break;case 59:h+=";";default:if(rt(y=te(h,e,r,u,p,s,c,S,I=[],E=[],d,o),o),w===123)if(p===0)mt(h,e,y,y,I,o,d,c,E);else switch(g===99&&R(h,3)===110?100:g){case 100:case 108:case 109:case 115:mt(t,y,y,n&&rt(te(t,y,y,0,0,s,c,S,s,I=[],d,E),E),s,E,d,c,n?I:E);break;default:mt(h,y,y,y,[""],E,0,c,E)}}u=p=l=0,C=x=1,S=h="",d=i;break;case 58:d=1+O(h),l=b;default:if(C<1){if(w==123)--C;else if(w==125&&C++==0&&Ve()==125)continue}switch(h+=qt(w),w*C){case 38:x=p>0?1:(h+="\f",-1);break;case 44:c[u++]=(O(h)-1)*x,x=1;break;case 64:Y()===45&&(h+=Nt(N())),g=Y(),p=d=O(S=h+=sr(gt())),w++;break;case 45:b===45&&O(h)==2&&(C=0)}}return o}function te(t,e,r,n,s,o,i,c,a,u,p,d){for(var g=s-1,l=s===0?o:[""],b=ye(l),C=0,P=0,x=0;C<n;++C)for(var w=0,S=q(t,g+1,g=ge(P=i[C])),I=t;w<b;++w)(I=me(P>0?l[w]+" "+S:f(S,/&\f/g,l[w])))&&(a[x++]=I);return At(t,e,r,s===0?Ct:c,a,u,p,d)}function ir(t,e,r,n){return At(t,e,r,de,qt(Qe()),q(t,2,-2),0,n)}function ee(t,e,r,n,s){return At(t,e,r,Ht,q(t,0,n),q(t,n+1,-1),n,s)}function Se(t,e,r){switch(Ze(t,e)){case 5103:return m+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+t+t;case 4789:return nt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return m+t+nt+t+v+t+t;case 5936:switch(R(t,e+11)){case 114:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return m+t+v+t+t;case 6165:return m+t+v+"flex-"+t+t;case 5187:return m+t+f(t,/(\w+).+(:[^]+)/,m+"box-$1$2"+v+"flex-$1$2")+t;case 5443:return m+t+v+"flex-item-"+f(t,/flex-|-self/g,"")+(D(t,/flex-|baseline/)?"":v+"grid-row-"+f(t,/flex-|-self/g,""))+t;case 4675:return m+t+v+"flex-line-pack"+f(t,/align-content|flex-|-self/g,"")+t;case 5548:return m+t+v+f(t,"shrink","negative")+t;case 5292:return m+t+v+f(t,"basis","preferred-size")+t;case 6060:return m+"box-"+f(t,"-grow","")+m+t+v+f(t,"grow","positive")+t;case 4554:return m+f(t,/([^-])(transform)/g,"$1"+m+"$2")+t;case 6187:return f(f(f(t,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),t,"")+t;case 5495:case 3959:return f(t,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return f(f(t,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+t+t;case 4200:if(!D(t,/flex-|baseline/))return v+"grid-column-align"+q(t,e)+t;break;case 2592:case 3360:return v+f(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,D(n.props,/grid-\w+-end/)})?~lt(t+(r=r[e].value),"span",0)?t:v+f(t,"-start","")+t+v+"grid-row-span:"+(~lt(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(t,/\d+/))+";":v+f(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?t:v+f(f(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return f(t,/(.+)-inline(.+)/,m+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(t)-1-e>6)switch(R(t,e+1)){case 109:if(R(t,e+4)!==45)break;case 102:return f(t,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+nt+(R(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~lt(t,"stretch",0)?Se(f(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return f(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,i,c,a,u){return v+s+":"+o+u+(i?v+s+"-span:"+(c?a:+a-+o)+u:"")+t});case 4949:if(R(t,e+6)===121)return f(t,":",":"+m)+t;break;case 6444:switch(R(t,R(t,14)===45?18:11)){case 120:return f(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(R(t,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+v+"$2box$3")+t;case 100:return f(t,":",":"+v)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return f(t,"scroll-","scroll-snap-")+t}return t}function St(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function ar(t,e,r,n){switch(t.type){case Ue:if(t.children.length)break;case Ke:case Ht:return t.return=t.return||t.value;case de:return"";case le:return t.return=t.value+"{"+St(t.children,n)+"}";case Ct:if(!O(t.value=t.props.join(",")))return""}return O(r=St(t.children,n))?t.return=t.value+"{"+r+"}":""}function cr(t){var e=ye(t);return function(r,n,s,o){for(var i="",c=0;c<e;c++)i+=t[c](r,n,s,o)||"";return i}}function ur(t){return function(e){e.root||(e=e.return)&&t(e)}}function fr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Ht:t.return=Se(t.value,t.length,r);return;case le:return St([G(t,{value:f(t.value,"@","@"+m)})],n);case Ct:if(t.length)return Je(r=t.props,function(s){switch(D(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":W(G(t,{props:[f(s,/:(read-\w+)/,":"+nt+"$1")]})),W(G(t,{props:[s]})),jt(t,{props:Xt(r,n)});break;case"::placeholder":W(G(t,{props:[f(s,/:(plac\w+)/,":"+m+"input-$1")]})),W(G(t,{props:[f(s,/:(plac\w+)/,":"+nt+"$1")]})),W(G(t,{props:[f(s,/:(plac\w+)/,v+"input-$1")]})),W(G(t,{props:[s]})),jt(t,{props:Xt(r,n)});break}return""})}}var pr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$={},U=typeof process<"u"&&$!==void 0&&($.REACT_APP_SC_ATTR||$.SC_ATTR)||"data-styled",be="active",we="data-styled-version",Rt="6.1.13",Kt=`/*!sc*/
`,bt=typeof window<"u"&&"HTMLElement"in window,hr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==""?$.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.SC_DISABLE_SPEEDY!==void 0&&$.SC_DISABLE_SPEEDY!==""&&$.SC_DISABLE_SPEEDY!=="false"&&$.SC_DISABLE_SPEEDY),dr={},_t=Object.freeze([]),Z=Object.freeze({});function Ie(t,e,r){return r===void 0&&(r=Z),t.theme!==r.theme&&t.theme||e||r.theme}var Ce=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),lr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gr=/(^-|-$)/g;function re(t){return t.replace(lr,"-").replace(gr,"")}var mr=/(a)(d)/gi,ht=52,ne=function(t){return String.fromCharCode(t+(t>25?39:97))};function Gt(t){var e,r="";for(e=Math.abs(t);e>ht;e=e/ht|0)r=ne(e%ht)+r;return(ne(e%ht)+r).replace(mr,"$1-$2")}var Ot,xe=5381,H=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Ae=function(t){return H(xe,t)};function Ee(t){return Gt(Ae(t)>>>0)}function yr(t){return t.displayName||t.name||"Component"}function Tt(t){return typeof t=="string"&&!0}var Re=typeof Symbol=="function"&&Symbol.for,_e=Re?Symbol.for("react.memo"):60115,vr=Re?Symbol.for("react.forward_ref"):60112,Sr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},br={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wr=((Ot={})[vr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ot[_e]=Pe,Ot);function se(t){return("type"in(e=t)&&e.type.$$typeof)===_e?Pe:"$$typeof"in t?wr[t.$$typeof]:Sr;var e}var Ir=Object.defineProperty,Cr=Object.getOwnPropertyNames,oe=Object.getOwnPropertySymbols,xr=Object.getOwnPropertyDescriptor,Ar=Object.getPrototypeOf,ie=Object.prototype;function $e(t,e,r){if(typeof e!="string"){if(ie){var n=Ar(e);n&&n!==ie&&$e(t,n,r)}var s=Cr(e);oe&&(s=s.concat(oe(e)));for(var o=se(t),i=se(e),c=0;c<s.length;++c){var a=s[c];if(!(a in br||r&&r[a]||i&&a in i||o&&a in o)){var u=xr(e,a);try{Ir(t,a,u)}catch{}}}}return t}function J(t){return typeof t=="function"}function Ut(t){return typeof t=="object"&&"styledComponentId"in t}function L(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Mt(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function ot(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Bt(t,e,r){if(r===void 0&&(r=!1),!r&&!ot(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Bt(t[n],e[n]);else if(ot(e))for(var n in e)t[n]=Bt(t[n],e[n]);return t}function Zt(t,e){Object.defineProperty(t,"toString",{value:e})}function it(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Er=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;e>=o;)if((o<<=1)<0)throw it(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=s;i<o;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(e+1),a=(i=0,r.length);i<a;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[e]++,c++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n,i=s;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(Kt);return r},t}(),yt=new Map,wt=new Map,vt=1,dt=function(t){if(yt.has(t))return yt.get(t);for(;wt.has(vt);)vt++;var e=vt++;return yt.set(t,e),wt.set(e,t),e},Rr=function(t,e){vt=e+1,yt.set(t,e),wt.set(e,t)},_r="style[".concat(U,"][").concat(we,'="').concat(Rt,'"]'),Pr=new RegExp("^".concat(U,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$r=function(t,e,r){for(var n,s=r.split(","),o=0,i=s.length;o<i;o++)(n=s[o])&&t.registerName(e,n)},kr=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Kt),s=[],o=0,i=n.length;o<i;o++){var c=n[o].trim();if(c){var a=c.match(Pr);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(Rr(p,u),$r(t,p,a[3]),t.getTag().insertRules(u,s)),s.length=0}else s.push(c)}}},ae=function(t){for(var e=document.querySelectorAll(_r),r=0,n=e.length;r<n;r++){var s=e[r];s&&s.getAttribute(U)!==be&&(kr(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function Nr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ke=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(c){var a=Array.from(c.querySelectorAll("style[".concat(U,"]")));return a[a.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(U,be),n.setAttribute(we,Rt);var i=Nr();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},Or=function(){function t(e){this.element=ke(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var i=n[s];if(i.ownerNode===r)return i}throw it(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Tr=function(){function t(e){this.element=ke(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Dr=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ce=bt,jr={isServer:!bt,useCSSOMInjection:!hr},It=function(){function t(e,r,n){e===void 0&&(e=Z),r===void 0&&(r={});var s=this;this.options=_(_({},jr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&bt&&ce&&(ce=!1,ae(this)),Zt(this,function(){return function(o){for(var i=o.getTag(),c=i.length,a="",u=function(d){var g=function(x){return wt.get(x)}(d);if(g===void 0)return"continue";var l=o.names.get(g),b=i.getGroup(d);if(l===void 0||!l.size||b.length===0)return"continue";var C="".concat(U,".g").concat(d,'[id="').concat(g,'"]'),P="";l!==void 0&&l.forEach(function(x){x.length>0&&(P+="".concat(x,","))}),a+="".concat(b).concat(C,'{content:"').concat(P,'"}').concat(Kt)},p=0;p<c;p++)u(p);return a}(s)})}return t.registerId=function(e){return dt(e)},t.prototype.rehydrate=function(){!this.server&&bt&&ae(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(_(_({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new Dr(s):n?new Or(s):new Tr(s)}(this.options),new Er(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(dt(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(dt(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(dt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),zr=/&/g,Fr=/^\s*\/\/.*$/gm;function Ne(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ne(r.children,e)),r})}function Gr(t){var e,r,n,s=Z,o=s.options,i=o===void 0?Z:o,c=s.plugins,a=c===void 0?_t:c,u=function(g,l,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(e):g},p=a.slice();p.push(function(g){g.type===Ct&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(zr,r).replace(n,u))}),i.prefix&&p.push(fr),p.push(ar);var d=function(g,l,b,C){l===void 0&&(l=""),b===void 0&&(b=""),C===void 0&&(C="&"),e=C,r=l,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(Fr,""),x=or(b||l?"".concat(b," ").concat(l," { ").concat(P," }"):P);i.namespace&&(x=Ne(x,i.namespace));var w=[];return St(x,cr(p.concat(ur(function(S){return w.push(S)})))),w};return d.hash=a.length?a.reduce(function(g,l){return l.name||it(15),H(g,l.name)},xe).toString():"",d}var Mr=new It,Lt=Gr(),Oe=j.createContext({shouldForwardProp:void 0,styleSheet:Mr,stylis:Lt});Oe.Consumer;j.createContext(void 0);function Yt(){return he.useContext(Oe)}var Br=function(){function t(e,r){var n=this;this.inject=function(s,o){o===void 0&&(o=Lt);var i=n.name+o.hash;s.hasNameForId(n.id,i)||s.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,Zt(this,function(){throw it(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Lt),this.name+e.hash},t}(),Lr=function(t){return t>="A"&&t<="Z"};function ue(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Lr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Te=function(t){return t==null||t===!1||t===""},De=function(t){var e,r,n=[];for(var s in t){var o=t[s];t.hasOwnProperty(s)&&!Te(o)&&(Array.isArray(o)&&o.isCss||J(o)?n.push("".concat(ue(s),":"),o,";"):ot(o)?n.push.apply(n,st(st(["".concat(s," {")],De(o),!1),["}"],!1)):n.push("".concat(ue(s),": ").concat((e=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in pr||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function M(t,e,r,n){if(Te(t))return[];if(Ut(t))return[".".concat(t.styledComponentId)];if(J(t)){if(!J(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var s=t(e);return M(s,e,r,n)}var o;return t instanceof Br?r?(t.inject(r,n),[t.getName(n)]):[t]:ot(t)?De(t):Array.isArray(t)?Array.prototype.concat.apply(_t,t.map(function(i){return M(i,e,r,n)})):[t.toString()]}function je(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(J(r)&&!Ut(r))return!1}return!0}var Yr=Ae(Rt),Wr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&je(e),this.componentId=r,this.baseHash=H(Yr,r),this.baseStyle=n,It.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=L(s,this.staticRulesId);else{var o=Mt(M(this.rules,e,r,n)),i=Gt(H(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}s=L(s,i),this.staticRulesId=i}else{for(var a=H(this.baseHash,n.hash),u="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")u+=d;else if(d){var g=Mt(M(d,e,r,n));a=H(a,g+p),u+=g}}if(u){var l=Gt(a>>>0);r.hasNameForId(this.componentId,l)||r.insertRules(this.componentId,l,n(u,".".concat(l),void 0,this.componentId)),s=L(s,l)}}return s},t}(),Jt=j.createContext(void 0);Jt.Consumer;var Dt={};function Hr(t,e,r){var n=Ut(t),s=t,o=!Tt(t),i=e.attrs,c=i===void 0?_t:i,a=e.componentId,u=a===void 0?function(I,E){var y=typeof I!="string"?"sc":re(I);Dt[y]=(Dt[y]||0)+1;var h="".concat(y,"-").concat(Ee(Rt+y+Dt[y]));return E?"".concat(E,"-").concat(h):h}(e.displayName,e.parentComponentId):a,p=e.displayName,d=p===void 0?function(I){return Tt(I)?"styled.".concat(I):"Styled(".concat(yr(I),")")}(t):p,g=e.displayName&&e.componentId?"".concat(re(e.displayName),"-").concat(e.componentId):e.componentId||u,l=n&&s.attrs?s.attrs.concat(c).filter(Boolean):c,b=e.shouldForwardProp;if(n&&s.shouldForwardProp){var C=s.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;b=function(I,E){return C(I,E)&&P(I,E)}}else b=C}var x=new Wr(r,g,n?s.componentStyle:void 0);function w(I,E){return function(y,h,V){var at=y.attrs,Ge=y.componentStyle,Me=y.defaultProps,Be=y.foldedComponentIds,Le=y.styledComponentId,Ye=y.target,We=j.useContext(Jt),He=Yt(),Pt=y.shouldForwardProp||He.shouldForwardProp,Qt=Ie(h,We,Me)||Z,T=function(ut,tt,ft){for(var et,B=_(_({},tt),{className:void 0,theme:ft}),kt=0;kt<ut.length;kt+=1){var pt=J(et=ut[kt])?et(B):et;for(var F in pt)B[F]=F==="className"?L(B[F],pt[F]):F==="style"?_(_({},B[F]),pt[F]):pt[F]}return tt.className&&(B.className=L(B.className,tt.className)),B}(at,h,Qt),ct=T.as||Ye,X={};for(var z in T)T[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&T.theme===Qt||(z==="forwardedAs"?X.as=T.forwardedAs:Pt&&!Pt(z,ct)||(X[z]=T[z]));var Vt=function(ut,tt){var ft=Yt(),et=ut.generateAndInjectStyles(tt,ft.styleSheet,ft.stylis);return et}(Ge,T),$t=L(Be,Le);return Vt&&($t+=" "+Vt),T.className&&($t+=" "+T.className),X[Tt(ct)&&!Ce.has(ct)?"class":"className"]=$t,X.ref=V,he.createElement(ct,X)}(S,I,E)}w.displayName=d;var S=j.forwardRef(w);return S.attrs=l,S.componentStyle=x,S.displayName=d,S.shouldForwardProp=b,S.foldedComponentIds=n?L(s.foldedComponentIds,s.styledComponentId):"",S.styledComponentId=g,S.target=n?s.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=n?function(E){for(var y=[],h=1;h<arguments.length;h++)y[h-1]=arguments[h];for(var V=0,at=y;V<at.length;V++)Bt(E,at[V],!0);return E}({},s.defaultProps,I):I}}),Zt(S,function(){return".".concat(S.styledComponentId)}),o&&$e(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function fe(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var pe=function(t){return Object.assign(t,{isCss:!0})};function ze(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(J(t)||ot(t))return pe(M(fe(_t,st([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?M(n):pe(M(fe(n,e)))}function Wt(t,e,r){if(r===void 0&&(r=Z),!e)throw it(1,e);var n=function(s){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(e,r,ze.apply(void 0,st([s],o,!1)))};return n.attrs=function(s){return Wt(t,e,_(_({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Wt(t,e,_(_({},r),s))},n}var Fe=function(t){return Wt(Hr,t)},qr=Fe;Ce.forEach(function(t){qr[t]=Fe(t)});var Kr=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=je(e),It.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,s){var o=s(Mt(M(this.rules,r,n,s)),""),i=this.componentId+e;n.insertRules(i,i,o)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,s){e>2&&It.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,s)},t}();function Jr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=ze.apply(void 0,st([t],e,!1)),s="sc-global-".concat(Ee(JSON.stringify(n))),o=new Kr(n,s),i=function(a){var u=Yt(),p=j.useContext(Jt),d=j.useRef(u.styleSheet.allocateGSInstance(s)).current;return u.styleSheet.server&&c(d,a,u.styleSheet,p,u.stylis),j.useLayoutEffect(function(){if(!u.styleSheet.server)return c(d,a,u.styleSheet,p,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,a,u.styleSheet,p,u.stylis]),null};function c(a,u,p,d,g){if(o.isStatic)o.renderStyles(a,dr,p,g);else{var l=_(_({},u),{theme:Ie(u,d,i.defaultProps)});o.renderStyles(a,l,p,g)}}return j.memo(i)}function Qr(t){return qe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}export{Qr as F,qr as d,Jr as f};
