"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{4448:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(8152),r=a(2791),c=a(6871),i=a(2444),o=a(5197),s="Cast_container__vsnKI",u="Cast_wraper__k+N1d",f="Cast_img__+IgP2",d="Cast_text__RfM9a",h=a(184),m=function(){var e=(0,c.UO)(),t=(0,r.useState)([]),a=(0,n.Z)(t,2),m=a[0],p=a[1],l=(0,r.useState)(!1),v=(0,n.Z)(l,2),_=v[0],g=v[1];return(0,r.useEffect)((function(){(0,i.Wd)(e.movieId).then((function(e){return p(e.data.cast)})).catch((function(e){g(e)}))}),[e.movieId]),_?(0,h.jsx)(o.Z,{variant:"danger",className:"mt-5",children:"Oop! Something went wrong!"}):(0,h.jsx)("div",{className:s,children:m.length>0&&(0,h.jsx)("ul",{children:m.map((function(e){var t=e.name,a=e.character,n=e.profile_path,r=e.id;return(0,h.jsxs)("li",{children:[(0,h.jsx)("div",{className:u,children:(0,h.jsx)("img",{className:f,src:n?"https://image.tmdb.org/t/p/w200/".concat(n):"https://via.placeholder.com/50",alt:"foto"})}),(0,h.jsxs)("p",{className:d,children:[" name: ",t]}),(0,h.jsxs)("p",{className:d,children:[" character: ",a]})," "]},r)}))})})}},2444:function(e,t,a){a.d(t,{HI:function(){return i},JN:function(){return c},Wd:function(){return u},jP:function(){return s},t2:function(){return o}});var n=a(4569),r=a.n(n)().create({baseURL:"https://api.themoviedb.org/3/movie/550?api_key=1949309aa629f4334f453cd9e8380085"}),c=function(){return r.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1949309aa629f4334f453cd9e8380085")},i=function(e){return r.get("https://api.themoviedb.org/3/search/movie?api_key=1949309aa629f4334f453cd9e8380085&query=".concat(e))},o=function(e){return r.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=1949309aa629f4334f453cd9e8380085"))},s=function(e){return r.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=1949309aa629f4334f453cd9e8380085"))},u=function(e){return r.get("http://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=1949309aa629f4334f453cd9e8380085"))}}}]);
//# sourceMappingURL=cast.8ff0ec4d.chunk.js.map