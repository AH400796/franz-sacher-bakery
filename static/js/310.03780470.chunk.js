"use strict";(self.webpackChunkfranz_sacher_bakery=self.webpackChunkfranz_sacher_bakery||[]).push([[310],{310:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,i,a,o,u,c,s=e(439),p=e(791),f=e(287),d=e(168),l=e(444),x=l.ZP.main(r||(r=(0,d.Z)(["\n  padding: 10px 0;\n"]))),h=(l.ZP.p(i||(i=(0,d.Z)(["\n  font-size: 24px;\n  padding: 20px;\n  margin-bottom: 50px;\n"]))),l.ZP.h1(a||(a=(0,d.Z)(["\n  font-size: 28px;\n  margin-bottom: 30px;\n"])))),b=e(743),Z=l.ZP.ul(o||(o=(0,d.Z)(["\n  font-size: 20px;\n  background-color: #ecebeb;\n  box-shadow: 2px 4px 7px #807f7f;\n  padding: 20px;\n  border: 1px dotted #807f7f;\n  border-radius: 10px;\n  list-style: inside decimal;\n"]))),m=e(87),v=l.ZP.li(u||(u=(0,d.Z)(["\n  margin-bottom: 10px;\n"]))),y=(0,l.ZP)(m.rU)(c||(c=(0,d.Z)(["\n  \n"]))),g=e(689),k=e(184);function w(n){var t=n.id,e=n.title,r=(0,g.TH)();return(0,k.jsx)(v,{children:(0,k.jsx)(y,{to:"movies/".concat(t),state:{from:r},children:e})})}function P(n){var t=n.movies;return(0,k.jsx)(Z,{children:t.map((function(n){var t=n.id,e=n.title;return(0,k.jsx)(w,{id:t,title:e},t)}))})}function _(){var n=(0,p.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1];return(0,p.useEffect)((function(){(0,f.Df)().then((function(n){r(n.data.results)})).catch((function(n){n.response?(0,b.L)(n.response.data):n.request?(0,b.L)("XMLHttpRequest failed"):(0,b.L)("Error",n.message)})).finally()}),[]),(0,k.jsxs)(x,{children:[(0,k.jsx)(h,{children:"Trending today:"}),(0,k.jsx)(P,{movies:e})]})}},287:function(n,t,e){e.d(t,{Df:function(){return c},TP:function(){return d},qF:function(){return p},tx:function(){return b},zv:function(){return x}});var r=e(861),i=e(757),a=e.n(i),o=e(912);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="fbee7941f117d258bba2ad0706e433a4";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},743:function(n,t,e){e.d(t,{L:function(){return i},l:function(){return a}});var r=e(14),i=function(n){return(0,r.ZP)(n,{style:{fontSize:"16px",border:"1px solid #be1b16",padding:"10px",color:"#be1b16"},position:"top-right"})},a=function(n){return(0,r.ZP)(n,{style:{fontSize:"16px",border:"1px solid #020071",padding:"10px",color:"#020071"},position:"top-right"})}}}]);
//# sourceMappingURL=310.03780470.chunk.js.map