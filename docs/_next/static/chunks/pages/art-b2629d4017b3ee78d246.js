_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"7TUZ":function(r,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/art",function(){return e("LdNO")}])},LdNO:function(r,t,e){"use strict";e.r(t);var n=e("o0o1"),a=e.n(n),o=e("ODXe"),c=e("FdF9"),u=e("tXcZ"),f=e("68b9"),i=e("N/cN"),s=e("PQhJ");function l(r){return r*r*r*(r*(6*r-15)+10)}function h(r,t,e){return t+r*(e-t)}var v=new Uint8Array([151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180]);function d(r,t,e,n){switch(15&r){case 0:return t+e;case 1:return-t+e;case 2:return t-e;case 3:return-t-e;case 4:return t+n;case 5:return-t+n;case 6:return t-n;case 7:return-t-n;case 8:return e+n;case 9:return-e+n;case 10:return e-n;case 11:return-e-n;case 12:return e+t;case 13:return-e+n;case 14:return e-t;case 15:return-e-n;default:return 0}}var M=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=256,e=v;return function(t,e,a){for(var o=1,c=1,u=0,f=0;f<r;++f)u+=n(t*o,e*o,a*o)*c,o*=.5,c*=.5;return u};function n(r,n,a){var o=Math.floor(r)&t,c=Math.floor(n)&t,u=Math.floor(a)&t;r-=Math.floor(r),n-=Math.floor(n),a-=Math.floor(a);var f=l(r),i=l(n),s=l(a),v=e[o]+c,M=e[v]+u,w=e[v+1]+u,b=e[o+1]+c,g=e[b]+u,p=e[b+1]+u;return h(s,h(i,h(f,d(e[M],r,n,a),d(e[g],r-1,n,a)),h(f,d(e[w],r,n-1,a),d(e[p],r-1,n-1,a))),h(i,h(f,d(e[M+1],r,n,a-1),d(e[g+1],r-1,n,a-1)),h(f,d(e[w+1],r,n-1,a-1),d(e[p+1],r-1,n-1,a-1))))}},w=.4785769341459727,b=function(){var r=2147483647,t=2147483629,e=2147483587;return function(){return(w=(t*w+e)%r)/(r-1)}}();var g=e("CS0q"),p=e("EWdr"),P=c.createElement,m=a.a.mark(N),k=M(3),_=[["#waves",N],["#vectors",function(r,t,e){r.beginPath(),r.rect(0,0,t,e),r.fillStyle="#000",r.fill(),r.strokeStyle="#fff";for(var n=0;n<t;n+=24)for(var a=0;a<e;a+=24){r.beginPath(),r.arc(n,a,1.2,0,2*Math.PI),r.moveTo(n,a);var o=8*(k(.003*n,.003*a,.01)+.2039),c=n+12*Math.cos(o),u=a+12*Math.sin(o);r.lineTo(c,u),r.stroke()}}],["#circles",function(r,t,e){r.beginPath(),r.rect(0,0,t,e),r.fillStyle="#000",r.fill();for(var n=Math.min(e-128,t)/11,a=Math.floor(n/9),c=["#ffffcc","#fcb941","#ff9478","#e74c3c","#1f3a93"],u=Array(64),f=0;f<u.length;++f){var i=c[Math.floor(c.length*b())],s=Math.floor(4*b()),l=1===s||2===s?n:0,h=2===s||3===s?n:0;u[f]=[i,s,l,h]}var v=Math.round((t-8*(n+3))/2),d=Math.round((e-8*(n+3))/2);r.lineCap="butt",r.lineWidth=6;for(var M=0;M<1;++M)for(var w=0;w<a;++w)for(var g=0;g<8;++g)for(var p=0;p<8;++p){var P=Object(o.a)(u[8*p+g],4),m=P[0],k=P[1],_=P[2],E=P[3],y=v+g*(n+3)+_,N=d+p*(n+3)+E,O=k*Math.PI/2+M*Math.PI/2/1,j=Math.min(O+Math.PI/2/1+Math.PI/10,(k+1)*Math.PI/2);r.strokeStyle=m,r.beginPath(),r.arc(y,N,n-3-9*w,O,j),r.stroke()}}]].map((function(r){return r[0]=r[0].toLowerCase().replace(/[aeiouy]/g,""),r}));function E(){return window.location.hash}var y=Object(p.b)("canvas");t.default=function(){var r=c.useState(E()),t=Object(o.a)(r,2),e=t[0],n=t[1],a=_.findIndex((function(r){return r[0]===e})),l=_[a>-1?a:0][1],h=Object(g.a)(l);c.useEffect((function(){function r(){n(E())}return window.addEventListener("hashchange",r,!0),function(){return window.removeEventListener("hashchange",r,!0)}}),[]);var v=_.map((function(r){var t=Object(o.a)(r,1)[0];return{href:t,title:t}}));return P(c.Fragment,null,P(u.a,{title:"art | jsalterego.im"}),P(s.a,{justifyBetween:!0},P(f.a,null,P(i.a,{menu:v,useRoute:!1})),P(y,{className:"bg-black-10 flex-auto w-100",ref:h}),P(f.a,null,P(i.a,{tr:!0}))))};function N(r,t,e){var n,c,u,f,i,s,l,h;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(r.beginPath(),r.rect(0,0,t,e),r.fillStyle="#000",r.fill(),n=.01,c=9,u=Math.round(Math.sqrt(t*e/900)),f=35,35,i=[],s=0;s<t;s+=u)for(l=0;l<e;l+=u)i.push([s+b(),l+b()]);r.globalAlpha=1,r.lineWidth=35,h=0;case 14:if(!(h<f)){a.next=24;break}return r.lineWidth*=.86,r.beginPath(),i.forEach((function(a,u){var i=Object(o.a)(a,2),s=i[0],l=i[1];r.strokeStyle="hsl(".concat(h/f*50+u%5,",100%,").concat(70*(h/f-.5)+60,"%)"),r.moveTo(s,l);var v=3*(k(s*n,l*n,.01)+.2039);s+=c*Math.cos(v),l+=c*Math.sin(v),r.lineTo(s,l),s>t&&(s%=t),l>e&&(l%=e),a[0]=s,a[1]=l})),r.stroke(),a.next=21,h;case 21:++h,a.next=14;break;case 24:case"end":return a.stop()}}),m)}}},[["7TUZ",0,1,2,3,4]]]);