"use strict";(self.webpackChunkfranz_sacher_bakery=self.webpackChunkfranz_sacher_bakery||[]).push([[762],{858:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,i,c,o,u,p=e(439),s=e(689),f=e(791),h=e(287),d=e(743),l=e(168),x=e(444),b=x.ZP.li(r||(r=(0,l.Z)(["\n  width: 150px;\n  height: 270px;\n  text-align: center;\n  padding: 2px;\n  border-radius: 5px;\n  background-color: #c2baba;\n"]))),g=x.ZP.p(a||(a=(0,l.Z)(["\n  font-size: 14px;\n"]))),m=x.ZP.p(i||(i=(0,l.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 5px;\n"]))),v=x.ZP.img(c||(c=(0,l.Z)(["\n  width: 150px;\n  height: 75%;\n  margin-bottom: 10px;\n  object-fit: cover;\n"]))),y=e(184);function Z(n){var t=n.name,e=n.profile_path,r=n.character,a=e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://i.ibb.co/yQNvgQ7/1231313.jpg";return(0,y.jsxs)(b,{children:[(0,y.jsx)(v,{src:a,alt:""}),(0,y.jsx)(m,{children:t}),(0,y.jsxs)(g,{children:["Character: ",r]})]})}var w=x.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 20px;\n  row-gap: 20px;\n  list-style: none;\n  padding: 10px;\n"]))),k=x.ZP.p(u||(u=(0,l.Z)(["\n  padding: 20px;\n  font-size: 16px;\n"])));function _(){var n=(0,f.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,s.UO)().movieId,i=Number(a);return(0,f.useEffect)((function(){(0,h.zv)(i).then((function(n){var t=n.data.cast,e=t.map((function(n){return n.id})),a=Array.from(new Set(e)),i=[];a.forEach((function(n){i.push(t.find((function(t){return t.id===n})))})),r(i)})).catch((function(n){n.response?(0,d.L)(n.response.data):n.request?(0,d.L)("XMLHttpRequest failed"):(0,d.L)("Error",n.message)})).finally()}),[i]),(0,y.jsx)(y.Fragment,{children:0!==e.length?(0,y.jsx)(w,{children:e.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,y.jsx)(Z,{name:e,profile_path:r,character:a},t)}))}):(0,y.jsx)(k,{children:"There is no information about casts in this movie"})})}},287:function(n,t,e){e.d(t,{Df:function(){return u},TP:function(){return h},qF:function(){return s},tx:function(){return b},zv:function(){return l}});var r=e(861),a=e(757),i=e.n(a),c=e(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="fbee7941f117d258bba2ad0706e433a4";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},743:function(n,t,e){e.d(t,{L:function(){return a},l:function(){return i}});var r=e(14),a=function(n){return(0,r.ZP)(n,{style:{fontSize:"16px",border:"1px solid #be1b16",padding:"10px",color:"#be1b16"},position:"top-right"})},i=function(n){return(0,r.ZP)(n,{style:{fontSize:"16px",border:"1px solid #020071",padding:"10px",color:"#020071"},position:"top-right"})}}}]);
//# sourceMappingURL=762.15e5b532.chunk.js.map