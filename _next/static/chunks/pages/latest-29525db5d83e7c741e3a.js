_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{B4Iw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/latest",function(){return n("flW/")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var s=c(n("q1tI")),o=n("elyg"),l=n("nOHt"),a=n("vNVm"),i={};function u(e,t,n,r){if((0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(c?"%"+c:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),c=n&&n.pathname||"/",d=s.default.useMemo((function(){var t=(0,o.resolveHref)(c,e.href,!0),n=r(t,2),s=n[0],l=n[1];return{href:s,as:e.as?(0,o.resolveHref)(c,e.as):l||s}}),[c,e.href,e.as]),f=d.href,p=d.as,h=e.children,b=e.replace,m=e.shallow,x=e.scroll,j=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var v=s.Children.only(h),g=v&&"object"===typeof v&&v.ref,O=(0,a.useIntersection)({rootMargin:"200px"}),y=r(O,2),w=y[0],E=y[1],N=s.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,s.useEffect)((function(){var e=E&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof j?j:n&&n.locale,c=i[f+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,f,p,{locale:r})}),[p,f,E,j,t,n]);var F={ref:N,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,s,l,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:s,locale:a}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,p,b,m,x,j)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};return(e.passHref||"a"===v.type&&!("href"in v.props))&&(F.href=(0,o.addBasePath)((0,o.addLocale)(p,"undefined"!==typeof j?j:n&&n.locale,n&&n.defaultLocale))),s.default.cloneElement(v,F)};t.default=d},"flW/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("nKUr"),c=n("q1tI"),s=n("YFqc"),o=n.n(s),l=[{bg:"#FEE2E2",text:"#991B1B"},{bg:"#FEF3C7",text:"#92400E"},{bg:"#D1FAE5",text:"#065F46"},{bg:"#E0E7FF",text:"#3730A3"},{bg:"#EDE9FE",text:"#5B21B6"},{bg:"#FCE7F3",text:"#9D174D"},{bg:"#DBEAFE",text:"#1E40AF"},{bg:"#F3F4F6",text:"#1F2937"}];function a(){var e=Object(c.useState)(""),t=e[0],n=e[1],s=Object(c.useState)(null),a=s[0],i=s[1],u=Object(c.useState)(null),d=u[0],f=u[1],p=Object(c.useState)(null),h=(p[0],p[1]),b=Object(c.useState)({}),m=b[0],x=b[1],j=Object(c.useState)(""),v=j[0],g=j[1];return null===a&&fetch("/articles/articles.json").then((function(e){return e.json()})).then((function(e){e=e[0],fetch("/pdfs/pdfs.json").then((function(e){return e.json()})).then((function(t){g(t[e.issue])})).catch(console.log),n(e.issue),i(e.articles);var t=e.articles.map((function(e){var t=e.source;return fetch("/articles/sources/".concat(t,"/article.md"))})),r=0;x(e.articles.reduce((function(e,t){var n=t.section;return(null===e||void 0===e?void 0:e.hasOwnProperty(n))||(e[n]=l[r],r+=1),e}),{})),Promise.all(t).then((function(e){return Promise.all(e.map((function(e){return e.text()})))})).then((function(e){return h(e.map((function(e){return e.replace(/<.*?>/g," ").replace(/#/g," ").replace(/[\w,\s-_]+\.[A-Za-z]{3,4}/g,"")})))}))})),null===d&&fetch("/authors/authors.json").then((function(e){return e.json()})).then((function(e){var t=e.club,n=e.former,r=e.board;f(Object.assign(t,n,r))})).catch(console.log),Object(r.jsx)("div",{className:"pt-10 px-4 sm:px-6 lg:pt-16 lg:px-8",children:Object(r.jsxs)("div",{className:"relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"title text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl",children:"Latest Articles"}),Object(r.jsxs)("p",{className:"subtitle mt-3 text-xl text-gray-500 sm:mt-4",children:[t," Issue"]})]}),Object(r.jsx)("div",{className:"mt-3 mb-3 grid pt-12 lg:grid-cols-5",children:null===a||void 0===a?void 0:a.map((function(e,t){var n=e.slug,c=e.title,s=e.section,a=e.authors;return Object(r.jsx)("div",{children:Object(r.jsx)(o.a,{href:{pathname:"/article",query:{slug:n}},children:Object(r.jsxs)("div",{className:"transition-all cursor-pointer p-6 hover:bg-gray-100",children:[Object(r.jsx)("div",{children:Object(r.jsx)("span",{className:"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",style:{backgroundColor:(null===m||void 0===m?void 0:m.hasOwnProperty(s))?m[s].bg:l[0].bg,color:(null===m||void 0===m?void 0:m.hasOwnProperty(s))?m[s].text:l[0].text},children:s})}),Object(r.jsx)("div",{className:"block mt-4",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"utopia text-xl text-gray-900",children:c}),Object(r.jsx)("div",{className:"mt-6 flex-col items-left space-y-2",children:null!==d&&a.map((function(e,t){return Object(r.jsxs)("div",{className:"flex flex items-center",children:[Object(r.jsx)("div",{className:"flex-shrink-0",children:Object(r.jsxs)("a",{href:"#",children:[Object(r.jsx)("span",{className:"sr-only",children:e}),Object(r.jsx)("img",{className:"h-10 w-10 object-cover rounded-full",src:"/authors/sources/".concat(d[e]&&d[e].src),alt:""})]})}),Object(r.jsx)("div",{className:"ml-3",children:Object(r.jsx)("p",{className:"utopia-light text-md font-medium text-gray-900",children:e})})]},t)}))})]})})]})})},t)}))}),Object(r.jsxs)("div",{className:"w-full mb-32 p-10 lg:flex lg:m-0 lg:justify-center lg:items-center",style:{height:650},children:[Object(r.jsx)("object",{data:"/pdfs/sources/".concat(v),type:"application/pdf",className:"",width:400,height:600,children:Object(r.jsx)("embed",{src:"/pdfs/sources/".concat(v),type:"application/pdf",width:400,height:600})}),Object(r.jsx)("a",{href:"/pdfs/sources/".concat(v),children:Object(r.jsx)("button",{type:"button",className:"transition-all w-64 ml-20 cinzel-md text-center tracking-wider leading-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none",style:{marginTop:20},children:"Or Download Our Print Version"})})]})]})})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,c=(0,s.useRef)(),i=(0,s.useState)(!1),u=r(i,2),d=u[0],f=u[1],p=(0,s.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,s=r.observer,o=r.elements;return o.set(e,t),s.observe(e),function(){s.unobserve(e),0===o.size&&(s.disconnect(),a.delete(c))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,s.useEffect)((function(){l||d||(0,o.default)((function(){return f(!0)}))}),[d]),[p,d]};var s=n("q1tI"),o=c(n("0G5g")),l="undefined"!==typeof IntersectionObserver;var a=new Map}},[["B4Iw",0,1,2]]]);