_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"4/Hk":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return s("ggPo")}])},ggPo:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return u}));var c=s("hGi/"),l=s("nKUr"),n=s("q1tI"),a=s("nOHt"),r=(s("eomm"),s("LvDl")),i=s.n(r),o=s("pOuo");function u(e){Object(c.a)(e);var t=Object(n.useState)(null),s=t[0],r=t[1],u=Object(n.useState)(null),j=u[0],d=u[1],h=Object(n.useState)(null),x=h[0],b=h[1],m=Object(n.useState)(null),O=m[0],f=m[1],p=Object(a.useRouter)().query.slug;return null===j&&fetch("/articles/articles.json").then((function(e){return e.json()})).then((function(e){e=e[0],fetch("/adverts/adverts.json").then((function(e){return e.json()})).then((function(t){f(t[e.issue])})).catch(console.log);var t=i.a.find(e.articles,(function(e){return e.slug===p}));t&&(d(t),b("/articles/sources/".concat(t.source,"/article.md")))})).catch(console.log),null===s&&fetch("/authors/authors.json").then((function(e){return e.json()})).then((function(e){var t=e.club,s=e.former,c=e.board;r(Object.assign(t,s,c))})).catch(console.log),Object(l.jsxs)("div",{className:"pt-6 mx-auto max-w-6xl",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase",children:null!==j&&j.section}),Object(l.jsx)("h2",{className:"pt-3 title text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl",children:null!==j&&j.title}),Object(l.jsxs)("p",{className:"subtitle mt-3 text-xl text-gray-500 sm:mt-4",children:[null!==j&&j.issue," Issue"]})]}),Object(l.jsxs)("table",{className:"w-full",children:[Object(l.jsxs)("colgroup",{children:[Object(l.jsx)("col",{span:"1",style:{width:"15%"}}),Object(l.jsx)("col",{span:"1",style:{width:"85%"}})]}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{className:"align-top pr-3",children:[Object(l.jsx)("h3",{className:"text-center cinzel-sm text-xl mb-12",children:"Authors"}),Object(l.jsx)("div",{className:"flex flex-col space-y-10",children:null!==s&&null!==j&&j.authors.map((function(e,t){return Object(l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[Object(l.jsxs)("div",{className:"flex-shrink-0",children:[Object(l.jsx)("span",{className:"sr-only",children:e}),Object(l.jsx)("img",{className:"h-32 w-32 object-cover rounded-full transform hover:scale-105 transition-all",src:"/authors/sources/".concat(s[e]&&s[e].src),alt:""})]}),Object(l.jsx)("div",{className:"ml-3",children:Object(l.jsx)("p",{className:"utopia-light text-md text-gray-900",children:e})})]},t)}))})]}),Object(l.jsx)("td",{children:x?Object(l.jsx)(o.a,{src:x,columns:j.columns||1}):Object(l.jsx)("div",{className:"prose article",children:"Article Unavailable"})})]})})]}),O&&O.length>0&&Object(l.jsxs)("div",{style:{width:500},className:"mx-auto",children:[Object(l.jsx)("h2",{className:"utopia",children:"This article was brought to you by:"}),Object(l.jsx)("div",{children:O?O.map((function(e){return Object(l.jsx)("img",{src:"/adverts/sources/".concat(e),alt:e,style:{width:500}})})):null})]})]})}}},[["4/Hk",0,1,3,6,2,4,5,7]]]);