"use strict";(self.webpackChunksninjo_personal_website=self.webpackChunksninjo_personal_website||[]).push([[845],{6816:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(1883),c=n(8032),i=n(7294);var r=e=>{let{name:t,isFocus:n=!1,onClick:r=(()=>{})}=e;const{allFile:s}=(0,a.useStaticQuery)("2423299584");return i.createElement("picture",{className:"index-module--picture--3768a "+(n?"index-module--focused--8b4b0":""),title:t,onClick:r},i.createElement(c.G,{className:"index-module--image--2392b",image:(0,c.c)(s.nodes.find((e=>e.name===t.toLowerCase()))),alt:t.toLowerCase()+" icon",loading:"lazy"}))}},4373:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7294);const c=(e,t,n)=>i(e,1,t,n),i=function(e,t,n,a){void 0===a&&(a=()=>{});let c=setInterval((()=>{n(e+=.02*t),(e<0||e>1)&&(clearInterval(c),a())}),3);return c},r=e=>{const{0:t,1:n}=(0,a.useState)(0),i=(0,a.useRef)(!0);i.current&&c(t,(e=>{n(e)})),i.current=!1;const r={margin:"0",opacity:t};return a.createElement("div",{style:r},e.children)},s=e=>{const{0:t,1:n}=(0,a.useState)(0),r=(0,a.useRef)(),s=()=>{null!==r.current&&clearInterval(r.current)},l=(0,a.useRef)(!1);var o;e.isShow&&!l.current?(s(),r.current=c(t,(e=>n(e)))):!e.isShow&&l.current&&(s(),r.current=i(t,-1,(e=>n(e)),o)),l.current=e.isShow;const m={margin:"0",display:"inline",opacity:t};return a.createElement("div",{style:m},e.children)};var l=n(8032);var o=()=>a.createElement("footer",{className:"index-module--footer--8eaa0"},a.createElement("nav",null,a.createElement("div",null,a.createElement("a",{href:"mailto:contact@SNinjo.com",target:"_blank",rel:"noreferrer",title:"Email"},a.createElement(l.S,{style:{width:30},src:"../../assets/icon/email.png",alt:"email logo",loading:"eager",__imageData:n(3149)})),a.createElement("a",{href:"https://www.linkedin.com/in/ru-jun-liao-3bba07196/",target:"_blank",rel:"noreferrer",title:"Linkedin"},a.createElement(l.S,{style:{width:23},src:"../../assets/icon/linkedin.png",alt:"linkedin logo",loading:"eager",__imageData:n(4005)})),a.createElement("a",{href:"https://github.com/SNinjo",target:"_blank",rel:"noreferrer",title:"Github"},a.createElement(l.S,{style:{width:25},src:"../../assets/icon/github_white.png",alt:"github logo",loading:"eager",__imageData:n(3853)})),a.createElement("a",{href:"https://www.instagram.com/sninjo657/",target:"_blank",rel:"noreferrer",title:"Instagram"},a.createElement(l.S,{style:{width:27},src:"../../assets/icon/instagram.png",alt:"instagram logo",loading:"eager",__imageData:n(7712)})),a.createElement("a",{id:"index-module--blog--3ec66",href:"https://blog.sninjo.com",target:"_blank",rel:"noreferrer",title:"Blog"},a.createElement(l.S,{style:{width:25},src:"../../assets/blog.png",alt:"SNinjo blog logo",loading:"eager",__imageData:n(7907)})))),a.createElement("p",null,"SNinjo 2022 © all rights reserved")),m=n(1883),d="index-module--pivot--5d156";var u=()=>{const{0:e,1:t}=(0,a.useState)(!1),c="undefined"!=typeof window?window.location.pathname.match(/^(\/[a-zA-Z0-9]*)/)[1]:"";return a.createElement("header",{className:"index-module--header--52ad0"},a.createElement(m.Link,{to:"/",id:"index-module--logo--b1f41",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1)},a.createElement(l.S,{className:"index-module--img--f1cc6",src:"../../assets/SNinjo.png",alt:"SNinjo logo",loading:"eager",__imageData:n(2412)}),a.createElement(s,{isShow:e},a.createElement("span",null,"SNinjo.com"))),a.createElement("nav",null,a.createElement(m.Link,{to:"/",id:"index-module--home--9d6f8"},a.createElement(s,{isShow:"/"===c},a.createElement("span",{className:d},"/")),a.createElement("span",null,"home")),a.createElement(m.Link,{to:"/projects",id:"index-module--about--77008"},a.createElement(s,{isShow:"/projects"===c},a.createElement("span",{className:d},"/")),a.createElement("span",null,"projects")),a.createElement(m.Link,{to:"/resume",id:"index-module--resume--b1410"},a.createElement(s,{isShow:"/resume"===c},a.createElement("span",{className:d},"/")),a.createElement("span",null,"resume")),a.createElement(m.Link,{to:"/contact",id:"index-module--contact--77353"},a.createElement(s,{isShow:"/contact"===c},a.createElement("span",{className:d},"/")),a.createElement("span",null,"contact"))))};var b=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(u,null),a.createElement(r,null,a.createElement("div",{className:"index-module--div--bda75"},t)),a.createElement(o,null))}},1522:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1883),c=n(7294);var i=e=>{let{name:t,isFocus:n=!1,navigateTo:i}=e;return c.createElement(a.Link,{to:null!=i?i:"/projects/?roles="+encodeURIComponent(t),className:"index-module--link--c3c71 "+(n?"index-module--focused--55d46":"")},"#",t)}},2349:function(e,t,n){var a=n(1883),c=n(7294);t.Z=e=>{let{title:t,pathname:n}=e;const{site:i}=(0,a.useStaticQuery)("3344473786"),{title:r,description:s,image:l,siteUrl:o}=i.siteMetadata,m=(t?t+" | ":"")+r,d=""+o+n,u=o+"/"+l;return c.createElement(c.Fragment,null,c.createElement("html",{lang:"en"}),c.createElement("title",null,m),c.createElement("link",{rel:"canonical",href:d}),c.createElement("meta",{name:"description",content:s}),c.createElement("meta",{name:"image",content:u}),c.createElement("meta",{name:"og:title",content:m}),c.createElement("meta",{name:"og:description",content:s}),c.createElement("meta",{name:"og:image",content:u}),c.createElement("meta",{name:"og:type",content:"website"}),c.createElement("meta",{name:"og:url",content:d}),c.createElement("meta",{name:"og:site_name",content:r}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:title",content:m}),c.createElement("meta",{name:"twitter:url",content:d}),c.createElement("meta",{name:"twitter:description",content:s}),c.createElement("meta",{name:"twitter:image",content:u}))}},5016:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(1883),c=n(7294);const i=new Map([["job","#fd5f5f"],["side project","#fd995f"],["web","#fdf25f"],["game","#775ffd"],["IoT","#b65ffd"]]);var r=e=>{var t;let{name:n,isFocus:r=!1,navigateTo:s}=e;const{0:l,1:o}=(0,c.useState)(!1),m={borderLeft:"solid 5px "+(null!==(t=i.get(n))&&void 0!==t?t:"white"),backgroundColor:r?"#5b5b5e":l?"#67676b":"#8b8b8b"};return c.createElement(a.Link,{to:null!=s?s:"/projects/?tabs="+encodeURIComponent(n)},c.createElement("div",{style:m,className:"index-module--div--3e51f",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)},c.createElement("span",null,n)))}},7520:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return g}});var a=n(5785),c=n(1883),i=n(8032),r=n(7294),s="index-module--icon--ff7ce",l=n(6816),o=n(4373),m=n(1522),d=n(2349),u=n(5016),b=n(3374);let f=function(){var e=t.prototype;function t(e){const t=new URLSearchParams(e);this.tabs=this.decode(t.get("tabs")),this.roles=this.decode(t.get("roles")),this.languages=this.decode(t.get("languages")),this.frameworks=this.decode(t.get("frameworks")),this.techniques=this.decode(t.get("techniques"))}return e.encode=function(e,t){return e+"="+encodeURIComponent((0,a.Z)(t).join("&"))},e.decode=function(e){return null===e?new Set:new Set(decodeURIComponent(e).split("&").filter((e=>""!==e)))},e.toString=function(){return"?"+[this.encode("tabs",this.tabs),this.encode("roles",this.roles),this.encode("languages",this.languages),this.encode("frameworks",this.frameworks),this.encode("techniques",this.techniques)].join("&")},e.clone=function(){return new t(this.toString())},e.has=function(e,t){return this[e].has(t)},e.add=function(e,t){return this[e].add(t),this},e.delete=function(e,t){return this[e].delete(t),this},e.getNavigationPath=function(e,t){const n=this.clone();return this.has(e,t)?n.delete(e,t).toString():n.add(e,t).toString()},e.isEmpty=function(){return 0===this.tabs.size&&0===this.roles.size&&0===this.languages.size&&0===this.frameworks.size&&0===this.techniques.size},e.isMatch=function(e){for(const t of this.tabs)if(!e.tabs.includes(t))return!1;for(const t of this.roles)if(!e.roles.includes(t))return!1;for(const t of this.languages)if(!e.programming.languages.includes(t))return!1;for(const t of this.frameworks)if(!e.programming.frameworks.includes(t))return!1;for(const t of this.techniques)if(!e.programming.techniques.includes(t))return!1;return!0},t}();var g=e=>{let{data:t,location:n}=e;const d=new Set,g=new Set,h=new Set,p=new Set,w=new Set;t.projects.nodes.forEach((e=>{const t=(0,b.q)(e.fields.contents);t.tabs.forEach((e=>d.add(e))),t.roles.forEach((e=>g.add(e))),t.programming.languages.forEach((e=>h.add(e))),t.programming.frameworks.forEach((e=>p.add(e))),t.programming.techniques.forEach((e=>w.add(e)))}));const E=new f(n.search),v=(e,t)=>e.toLowerCase()<t.toLowerCase()?-1:1,k=t.projects.nodes.map((e=>(0,b.q)(e.fields.contents,e.relativeDirectory))).filter((e=>E.isMatch(e))).sort(((e,t)=>v(e.name,t.name))).sort(((e,t)=>{if(null===e.time.end&&null===t.time.end){if(e.name<t.name)return-1}else{if(null===e.time.end)return-1;if(null===t.time.end)return 1;if(e.time.end>t.time.end)return-1}return 1}));return r.createElement(o.Z,null,r.createElement("div",{className:"index-module--div--ff6a6"},r.createElement("header",null,r.createElement("header",null,r.createElement("h1",null,"FILTER"),r.createElement("h2",null,k.length," results"),r.createElement("button",{disabled:E.isEmpty(),onClick:()=>(0,c.navigate)("#")},"clear all")),r.createElement("section",null,r.createElement("h2",null,"Tabs"),r.createElement("nav",null,(0,a.Z)(d).sort(v).map((e=>r.createElement(u.Z,{key:"tab_"+e,name:e,isFocus:E.has("tabs",e),navigateTo:E.getNavigationPath("tabs",e)}))))),r.createElement("section",null,r.createElement("h2",null,"Roles"),r.createElement("nav",null,(0,a.Z)(g).sort(v).map((e=>r.createElement(m.Z,{key:"role_"+e,name:e,isFocus:E.has("roles",e),navigateTo:E.getNavigationPath("roles",e)}))))),r.createElement("section",null,r.createElement("h2",null,"Techniques"),r.createElement("nav",null,(0,a.Z)(w).sort(v).map((e=>r.createElement(c.Link,{key:"technique_"+e,to:E.getNavigationPath("techniques",e)},r.createElement(l.Z,{name:e,isFocus:E.has("techniques",e)})))))),r.createElement("section",null,r.createElement("h2",null,"Frameworks"),r.createElement("nav",null,(0,a.Z)(p).sort(v).map((e=>r.createElement(c.Link,{key:"framework_"+e,to:E.getNavigationPath("frameworks",e)},r.createElement(l.Z,{name:e,isFocus:E.has("frameworks",e)})))))),r.createElement("section",null,r.createElement("h2",null,"Languages"),r.createElement("nav",null,(0,a.Z)(h).sort(v).map((e=>r.createElement(c.Link,{key:"language_"+e,to:E.getNavigationPath("languages",e)},r.createElement(l.Z,{name:e,isFocus:E.has("languages",e)}))))))),k.map((e=>r.createElement(c.Link,{key:"project_"+e.pathname,to:e.pathname,className:"index-module--project--d0211"},e.image.icon?r.createElement(i.G,{className:s,image:(0,b.H)(e.pathname,e.image.icon,t.projectImages.nodes),alt:e.name+" icon",loading:"eager"}):r.createElement("div",{className:s}),r.createElement("span",{className:"index-module--name--32248"},e.name),r.createElement("span",{className:"index-module--headline--4cda7"},e.headline))))))};const h=e=>{let{location:t}=e;return r.createElement(d.Z,{title:"Projects",pathname:t.pathname})}},3374:function(e,t,n){n.d(t,{H:function(){return i},q:function(){return c}});var a=n(8032);function c(e,t){var n;return{...JSON.parse(e),pathname:null!==(n="/"+t)&&void 0!==n?n:""}}function i(e,t,n){return(0,a.c)(n.find((n=>e==="/"+n.relativeDirectory&&t===""+n.name+n.ext)))}},4005:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f297ff5f41d31edd253cc1522e241ed3/7eff4/linkedin.png","srcSet":"/static/f297ff5f41d31edd253cc1522e241ed3/21a05/linkedin.png 134w,\\n/static/f297ff5f41d31edd253cc1522e241ed3/ce388/linkedin.png 269w,\\n/static/f297ff5f41d31edd253cc1522e241ed3/7eff4/linkedin.png 537w","sizes":"(min-width: 537px) 537px, 100vw"},"sources":[{"srcSet":"/static/f297ff5f41d31edd253cc1522e241ed3/71b64/linkedin.webp 134w,\\n/static/f297ff5f41d31edd253cc1522e241ed3/db76b/linkedin.webp 269w,\\n/static/f297ff5f41d31edd253cc1522e241ed3/08a21/linkedin.webp 537w","type":"image/webp","sizes":"(min-width: 537px) 537px, 100vw"}]},"width":537,"height":536}')},7712:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/07bb009c6375b63b224bb1aea630abfa/e78d2/instagram.png","srcSet":"/static/07bb009c6375b63b224bb1aea630abfa/53c4c/instagram.png 119w,\\n/static/07bb009c6375b63b224bb1aea630abfa/72c44/instagram.png 237w,\\n/static/07bb009c6375b63b224bb1aea630abfa/e78d2/instagram.png 474w","sizes":"(min-width: 474px) 474px, 100vw"},"sources":[{"srcSet":"/static/07bb009c6375b63b224bb1aea630abfa/0cc8f/instagram.webp 119w,\\n/static/07bb009c6375b63b224bb1aea630abfa/56ccb/instagram.webp 237w,\\n/static/07bb009c6375b63b224bb1aea630abfa/69dc2/instagram.webp 474w","type":"image/webp","sizes":"(min-width: 474px) 474px, 100vw"}]},"width":474,"height":472}')},3149:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/8a3ead210ca2ca9f703a05cc191b5618/ccc41/email.png","srcSet":"/static/8a3ead210ca2ca9f703a05cc191b5618/bf8e1/email.png 128w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/acb7c/email.png 256w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/ccc41/email.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/8a3ead210ca2ca9f703a05cc191b5618/6766a/email.webp 128w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/22bfc/email.webp 256w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/d689f/email.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},2412:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/cebed2ef897d5925598703350d0b27b0/ccc41/SNinjo.png","srcSet":"/static/cebed2ef897d5925598703350d0b27b0/bf8e1/SNinjo.png 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/acb7c/SNinjo.png 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/ccc41/SNinjo.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/cebed2ef897d5925598703350d0b27b0/6766a/SNinjo.webp 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/22bfc/SNinjo.webp 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/d689f/SNinjo.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},3853:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/eb94bb97c3410733ce017b184d314723/1c9ce/github_white.png","srcSet":"/static/eb94bb97c3410733ce017b184d314723/fbc98/github_white.png 16w,\\n/static/eb94bb97c3410733ce017b184d314723/914ee/github_white.png 32w,\\n/static/eb94bb97c3410733ce017b184d314723/1c9ce/github_white.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/eb94bb97c3410733ce017b184d314723/e789a/github_white.webp 16w,\\n/static/eb94bb97c3410733ce017b184d314723/ef6ff/github_white.webp 32w,\\n/static/eb94bb97c3410733ce017b184d314723/8257c/github_white.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')},7907:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/db75736a79c8789601cf79d289ea745f/ccc41/blog.png","srcSet":"/static/db75736a79c8789601cf79d289ea745f/bf8e1/blog.png 128w,\\n/static/db75736a79c8789601cf79d289ea745f/acb7c/blog.png 256w,\\n/static/db75736a79c8789601cf79d289ea745f/ccc41/blog.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/db75736a79c8789601cf79d289ea745f/6766a/blog.webp 128w,\\n/static/db75736a79c8789601cf79d289ea745f/22bfc/blog.webp 256w,\\n/static/db75736a79c8789601cf79d289ea745f/d689f/blog.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-23d30e6482518821094a.js.map