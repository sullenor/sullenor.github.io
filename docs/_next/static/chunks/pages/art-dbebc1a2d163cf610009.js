_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"7TUZ":function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/art",function(){return n("LdNO")}])},LdNO:function(r,t,n){"use strict";n.r(t);var e={};n.r(e),n.d(e,"waves",(function(){return J})),n.d(e,"circles",(function(){return U})),n.d(e,"lines",(function(){return Z})),n.d(e,"vectors",(function(){return q}));var a=n("ODXe"),o=n("FdF9"),c=n("tXcZ"),u=n("68b9"),i=n("MbLX"),f=n("PQhJ"),s=n("o0o1"),l=n.n(s);function h(r){return r*r*r*(r*(6*r-15)+10)}function v(r,t,n){return t+r*(n-t)}var b=new Uint8Array([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180]);function p(r,t,n,e){switch(15&r){case 0:return t+n;case 1:return-t+n;case 2:return t-n;case 3:return-t-n;case 4:return t+e;case 5:return-t+e;case 6:return t-e;case 7:return-t-e;case 8:return n+e;case 9:return-n+e;case 10:return n-e;case 11:return-n-e;case 12:return n+t;case 13:return-n+e;case 14:return n-t;case 15:return-n-e;default:return 0}}var d=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=256,n=b;return function(t,n,a){for(var o=1,c=1,u=0,i=0;i<r;++i)u+=e(t*o,n*o,a*o)*c,o*=.5,c*=.5;return u};function e(r,e,a){var o=Math.floor(r)&t,c=Math.floor(e)&t,u=Math.floor(a)&t;r-=Math.floor(r),e-=Math.floor(e),a-=Math.floor(a);var i=h(r),f=h(e),s=h(a),l=n[o]+c,b=n[l]+u,d=n[l+1]+u,w=n[o+1]+c,g=n[w]+u,y=n[w+1]+u;return v(s,v(f,v(i,p(n[b],r,e,a),p(n[g],r-1,e,a)),v(i,p(n[d],r,e-1,a),p(n[y],r-1,e-1,a))),v(f,v(i,p(n[b+1],r,e,a-1),p(n[g+1],r-1,e,a-1)),v(i,p(n[d+1],r,e-1,a-1),p(n[y+1],r-1,e-1,a-1))))}},w=n("s4An");function g(r,t,n){return(g=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}()?Reflect.construct:function(r,t,n){var e=[null];e.push.apply(e,t);var a=new(Function.bind.apply(r,e));return n&&Object(w.a)(a,n.prototype),a}).apply(null,arguments)}var y=n("a3WO");var m=n("BsWD");function M(r){return function(r){if(Array.isArray(r))return Object(y.a)(r)}(r)||function(r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||Object(m.a)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(r,t){for(var n=arguments.length,e=new Array(n>2?n-2:0),a=2;a<n;a++)e[a-2]=arguments[a];if(!r){var o=0,c=new Error(t.replace(/%s/g,(function(){return e[o++]})));throw c.name="Invariant",c}}var O=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i;function j(r,t,n){if(r instanceof j)return r;this.rgb=[r,t,n]}j.prototype.toString=function(){var r=Object(a.a)(this.rgb,3),t=r[0],n=r[1],e=r[2];return"rgb(".concat(t,",").concat(n,",").concat(e,")")};var P={current:null,fill:!1,stroke:!1,vertices:null};function E(){return k(P.current,"context is not set, call withContext() first"),P.current}function x(){P.current=null}function I(r){P.current=r,r.lineWidth=1}function _(r){var t=E();t.beginPath(),t.fillStyle=r,t.rect.apply(t,[0,0].concat(M(function(){var r=P.current.canvas;return[r.width,r.height]}()))),t.fill()}function S(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];if(1===t.length){var e=t[0];if(t=[0,0,0],"number"===typeof e)t=t.map((function(){return e}));else if(O.test(e)){var a=O.exec(e)[1];t=3===a.length?t.map((function(r,t){return 17*parseInt(a[t],16)})):t.map((function(r,t){return parseInt(a.substr(2*t,2),16)}))}else k(!1,'unsupported color format "'+e+'"')}return g(j,M(t=t.map((function(r){return Math.floor(r)}))))}function A(r){E().strokeStyle=r,P.stroke=!0}function N(r){E().lineWidth=r}function T(r,t,n,e,a){var o=E();o.beginPath(),o.arc(r,t,n,e,a),P.stroke&&o.stroke(),P.fill&&o.fill()}function L(r,t,n,e){var a=E();a.beginPath(),a.moveTo(r,t),a.lineTo(n,e),P.stroke&&a.stroke()}function R(r,t,n,e){var a=E();a.beginPath(),a.rect(r,t,n,e),P.stroke&&a.stroke(),P.fill&&a.fill()}var W=.4785769341459727,X=function(){var r=2147483647,t=2147483629,n=2147483587;return function(){return(W=(t*W+n)%r)/(r-1)}}();var C=l.a.mark(J),D=l.a.mark(Z),F=d(3);function J(r,t,n){var e,o,c,u,i,f,s,h,v;return l.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:for(I(r),_("#000"),e=.01,o=9,c=Math.round(Math.sqrt(t*n/900)),u=35,i=35,f=[],s=0;s<t;s+=c)for(h=0;h<n;h+=c)f.push([s+X(),h+X()]);r.globalAlpha=1,N(i),v=0;case 12:if(!(v<u)){l.next=20;break}return N(i*=.86),f.forEach((function(r,c){var i=Object(a.a)(r,2),f=i[0],s=i[1];A("hsl(".concat(v/u*50+c%5,",100%,").concat(70*(v/u-.5)+60,"%)"));var l=f,h=s,b=3*(F(f*e,s*e,.01)+.2039);L(l,h,f+=o*Math.cos(b),s+=o*Math.sin(b)),f>t&&(f%=t),s>n&&(s%=n),r[0]=f,r[1]=s})),l.next=17,v;case 17:++v,l.next=12;break;case 20:x();case 21:case"end":return l.stop()}}),C)}function U(r,t,n){I(r),_("#000");for(var e=Math.min(n-128,t)/11,o=Math.floor(e/9),c=["#ffffcc","#fcb941","#ff9478","#e74c3c","#1f3a93"],u=Array(64),i=0;i<u.length;++i){var f=c[Math.floor(c.length*X())],s=Math.floor(4*X()),l=1===s||2===s?e:0,h=2===s||3===s?e:0;u[i]=[f,s,l,h]}var v=Math.round((t-8*(e+3))/2),b=Math.round((n-8*(e+3))/2);r.lineCap="butt",r.lineWidth=6;for(var p=0;p<1;++p)for(var d=0;d<o;++d)for(var w=0;w<8;++w)for(var g=0;g<8;++g){var y=Object(a.a)(u[8*g+w],4),m=y[0],M=y[1],k=v+w*(e+3)+y[2],O=b+g*(e+3)+y[3],j=M*Math.PI/2+p*Math.PI/2/1,P=Math.min(j+Math.PI/2/1+Math.PI/10,(M+1)*Math.PI/2);r.strokeStyle=m,r.beginPath(),r.arc(k,O,e-3-9*d,j,P),r.stroke()}x()}function Z(r,t,n){var e,a,o,c,u;return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:for(I(r),_("#000"),26,e=S("#1c5084"),a=S("#cdbba3"),o=t/26,c=0;c<=26;++c)s=c/26,l=e,h=a,s=Math.min(Math.max(s,0),1),l=new j(l),h=new j(h),u=S(v(s,l.rgb[0],h.rgb[0]),v(s,l.rgb[1],h.rgb[1]),v(s,l.rgb[2],h.rgb[2])),f=u,E().fillStyle=f,P.fill=!0,A(u),R(o*c,0,o,n);x();case 8:case"end":return i.stop()}var f,s,l,h}),D)}function q(r,t,n){I(r),_("#000"),A("#fff"),N(1.5);for(var e=0;e<t;e+=24)for(var a=0;a<n;a+=24){T(e,a,1.2,0,2*Math.PI);var o=8*(F(.003*e,.003*a,.01)+.2039);L(e,a,e+12*Math.cos(o),a+12*Math.sin(o))}x()}var B=n("CS0q"),Q=n("EWdr"),$=o.createElement,z=Object.keys(e).map((function(r){return["#".concat(r),e[r]]})).map((function(r){return r[0]=r[0].toLowerCase().replace(/[aeiouy]/g,""),r}));function G(){return window.location.hash}var H=Object(Q.b)("canvas");t.default=function(){var r=o.useState(G()),t=Object(a.a)(r,2),n=t[0],e=t[1],s=z.findIndex((function(r){return r[0]===n})),l=z[s>-1?s:0][1],h=Object(B.a)(l);o.useEffect((function(){function r(){e(G())}return window.addEventListener("hashchange",r,!0),function(){return window.removeEventListener("hashchange",r,!0)}}),[]);var v=z.map((function(r){var t=Object(a.a)(r,1)[0];return{href:t,title:t}}));return $(o.Fragment,null,$(c.a,{title:"art | jsalterego.im"}),$(f.a,{justifyBetween:!0},$(u.a,null,$(i.a,{menu:v,useRoute:!1})),$(H,{className:"bg-black-10 flex-auto w-100",ref:h}),$(u.a,null,$(i.a,{tr:!0}))))}}},[["7TUZ",0,1,2,3,4]]]);