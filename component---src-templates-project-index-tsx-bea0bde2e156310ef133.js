"use strict";(self.webpackChunksninjo_personal_website=self.webpackChunksninjo_personal_website||[]).push([[857],{6816:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1883),c=a(8032),i=a(7294);var l=e=>{let{name:t,isFocus:a=!1,onClick:l=(()=>{})}=e;const{allFile:r}=(0,n.useStaticQuery)("2423299584");return i.createElement("picture",{className:"index-module--picture--3768a "+(a?"index-module--focused--8b4b0":""),title:t,onClick:l},i.createElement(c.G,{className:"index-module--image--2392b",image:(0,c.c)(r.nodes.find((e=>e.name===t.toLowerCase()))),alt:t.toLowerCase()+" icon",loading:"lazy"}))}},4373:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294);const c=(e,t,a)=>i(e,1,t,a),i=function(e,t,a,n){void 0===n&&(n=()=>{});let c=setInterval((()=>{a(e+=.02*t),(e<0||e>1)&&(clearInterval(c),n())}),3);return c},l=e=>{const{0:t,1:a}=(0,n.useState)(0),i=(0,n.useRef)(!0);i.current&&c(t,(e=>{a(e)})),i.current=!1;const l={margin:"0",opacity:t};return n.createElement("div",{style:l},e.children)},r=e=>{const{0:t,1:a}=(0,n.useState)(0),l=(0,n.useRef)(),r=()=>{null!==l.current&&clearInterval(l.current)},s=(0,n.useRef)(!1);var o;e.isShow&&!s.current?(r(),l.current=c(t,(e=>a(e)))):!e.isShow&&s.current&&(r(),l.current=i(t,-1,(e=>a(e)),o)),s.current=e.isShow;const m={margin:"0",display:"inline",opacity:t};return n.createElement("div",{style:m},e.children)};var s=a(8032);var o=()=>n.createElement("footer",{className:"index-module--footer--8eaa0"},n.createElement("nav",null,n.createElement("div",null,n.createElement("a",{href:"mailto:contact@SNinjo.com",target:"_blank",rel:"noreferrer noopener",title:"Email"},n.createElement(s.S,{style:{width:30},src:"../../assets/icon/email.png",alt:"email logo",loading:"eager",__imageData:a(6508)})),n.createElement("a",{href:"https://www.linkedin.com/in/ru-jun-liao-3bba07196/",target:"_blank",rel:"noreferrer noopener",title:"Linkedin"},n.createElement(s.S,{style:{width:23},src:"../../assets/icon/linkedin.png",alt:"linkedin logo",loading:"eager",__imageData:a(6821)})),n.createElement("a",{href:"https://github.com/SNinjo",target:"_blank",rel:"noreferrer noopener",title:"Github"},n.createElement(s.S,{style:{width:25},src:"../../assets/icon/github_white.png",alt:"github logo",loading:"eager",__imageData:a(2728)})),n.createElement("a",{href:"https://www.instagram.com/sninjo657/",target:"_blank",rel:"noreferrer noopener",title:"Instagram"},n.createElement(s.S,{style:{width:27},src:"../../assets/icon/instagram.png",alt:"instagram logo",loading:"eager",__imageData:a(2257)})),n.createElement("a",{id:"index-module--blog--3ec66",href:"https://blog.sninjo.com",target:"_blank",title:"Blog"},n.createElement(s.S,{style:{width:25},src:"../../assets/blog.png",alt:"SNinjo blog logo",loading:"eager",__imageData:a(5896)})))),n.createElement("p",null,"SNinjo 2022 © all rights reserved")),m=a(1883),d="index-module--pivot--5d156";var b=()=>{const{0:e,1:t}=(0,n.useState)(!1),c="undefined"!=typeof window?window.location.pathname.match(/^(\/[a-zA-Z0-9]*)/)[1]:"";return n.createElement("header",{className:"index-module--header--52ad0"},n.createElement(m.Link,{to:"/",id:"index-module--logo--b1f41",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1)},n.createElement(s.S,{className:"index-module--img--f1cc6",src:"../../assets/SNinjo.png",alt:"SNinjo logo",loading:"eager",__imageData:a(4945)}),n.createElement(r,{isShow:e},n.createElement("span",null,"SNinjo.com"))),n.createElement("nav",null,n.createElement(m.Link,{to:"/",id:"index-module--home--9d6f8"},n.createElement(r,{isShow:"/"===c},n.createElement("span",{className:d},"/")),n.createElement("span",null,"home")),n.createElement(m.Link,{to:"/projects",id:"index-module--about--77008"},n.createElement(r,{isShow:"/projects"===c},n.createElement("span",{className:d},"/")),n.createElement("span",null,"projects")),n.createElement(m.Link,{to:"/resume",id:"index-module--resume--b1410"},n.createElement(r,{isShow:"/resume"===c},n.createElement("span",{className:d},"/")),n.createElement("span",null,"resume")),n.createElement(m.Link,{to:"/contact",id:"index-module--contact--77353"},n.createElement(r,{isShow:"/contact"===c},n.createElement("span",{className:d},"/")),n.createElement("span",null,"contact"))))};var u=e=>{let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(b,null),n.createElement(l,null,n.createElement("div",{className:"index-module--div--bda75"},t)),n.createElement(o,null))}},1522:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(1883),c=a(7294);var i=e=>{let{name:t,isFocus:a=!1,navigateTo:i}=e;return c.createElement(n.Link,{to:null!=i?i:"/projects/?roles="+encodeURIComponent(t),className:"index-module--link--c3c71 "+(a?"index-module--focused--55d46":"")},"#",t)}},2349:function(e,t,a){var n=a(1883),c=a(7294);t.Z=e=>{let{title:t,pathname:a}=e;const{site:i}=(0,n.useStaticQuery)("3344473786"),{title:l,description:r,image:s,siteUrl:o}=i.siteMetadata,m=(t?t+" | ":"")+l,d=""+o+a,b=o+"/"+s;return c.createElement(c.Fragment,null,c.createElement("html",{lang:"en"}),c.createElement("title",null,m),c.createElement("link",{rel:"canonical",href:d}),c.createElement("meta",{name:"description",content:r}),c.createElement("meta",{name:"image",content:b}),c.createElement("meta",{name:"og:title",content:m}),c.createElement("meta",{name:"og:description",content:r}),c.createElement("meta",{name:"og:image",content:b}),c.createElement("meta",{name:"og:type",content:"website"}),c.createElement("meta",{name:"og:url",content:d}),c.createElement("meta",{name:"og:site_name",content:l}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:title",content:m}),c.createElement("meta",{name:"twitter:url",content:d}),c.createElement("meta",{name:"twitter:description",content:r}),c.createElement("meta",{name:"twitter:image",content:b}))}},5016:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1883),c=a(7294);const i=new Map([["job","#fd5f5f"],["side project","#fd995f"],["web","#fdf25f"],["game","#775ffd"],["IoT","#b65ffd"]]);var l=e=>{var t;let{name:a,isFocus:l=!1,navigateTo:r}=e;const{0:s,1:o}=(0,c.useState)(!1),m={borderLeft:"solid 5px "+(null!==(t=i.get(a))&&void 0!==t?t:"white"),backgroundColor:l?"#5b5b5e":s?"#67676b":"#8b8b8b"};return c.createElement(n.Link,{to:null!=r?r:"/projects/?tabs="+encodeURIComponent(a)},c.createElement("div",{style:m,className:"index-module--div--3e51f",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)},c.createElement("span",null,a)))}},6107:function(e,t,a){a.r(t),a.d(t,{Head:function(){return E},default:function(){return w}});var n=a(1883),c=a(8032),i=a(381),l=a.n(i),r=a(7294),s="index-module--disable--5f48a",o="index-module--icons--8f651",m="index-module--verticalLine--dcf2c",d=a(6816),b=a(4373),u=a(1522),g=a(2349),f=a(5016),p=a(3374);var w=e=>{let{data:t}=e;const a=(0,p.q)(t.project.fields.contents,t.project.relativeDirectory),i=e=>l()(e).format("MMM YYYY");return r.createElement(b.Z,null,r.createElement("div",{className:"index-module--div--6ad27"},r.createElement("section",{className:"index-module--header--db97b"},r.createElement("div",null,r.createElement(c.G,{className:"index-module--cover--72abe",image:(0,p.H)(a.pathname,a.image.cover,t.images.nodes),alt:a.name+" cover",loading:"lazy"}),a.image.icon?r.createElement(c.G,{className:"index-module--icon--b9843",image:(0,p.H)(a.pathname,a.image.icon,t.images.nodes),alt:a.name+" icon",loading:"eager"}):r.createElement(r.Fragment,null)),r.createElement("main",null,r.createElement("h1",null,a.name),r.createElement("h2",null,a.headline))),r.createElement("section",{className:"index-module--navigator--bf120"},r.createElement("a",{className:a.link.code?"":s,href:a.link.code,target:"_blank",rel:"noreferrer noopener",title:"source code link"},"CODE"),r.createElement("div",{className:m}),r.createElement("a",{className:a.link.demo?"":s,href:a.link.demo,target:"_blank",rel:"noreferrer noopener",title:"DEMO link"},"DEMO")),r.createElement("section",{className:"index-module--textCenter--0696e"},i(a.time.start)+(" - "+(a.time.end?i(a.time.end):"Present"))+" · "+(e=>{const t=e.end?l()(e.end).endOf("month"):l()(),a=l().duration(t.diff(l()(e.start))),n=Math.floor(a.asYears());return(n>0?n+"yrs ":"")+Math.round(a.asMonths()%12)+"mos"})(a.time)),r.createElement("section",{className:"index-module--tabs--0eb4c"},r.createElement("h1",null,"Tab"),r.createElement("div",null,a.tabs.map((e=>r.createElement(f.Z,{key:"tab_"+e,name:e}))))),r.createElement("section",{className:"index-module--roles--0cdf4"},r.createElement("h1",null,"Role"),r.createElement("div",null,a.roles.map((e=>r.createElement(u.Z,{key:"role"+e,name:e}))))),r.createElement("section",{className:"index-module--programming--d7e17"},r.createElement("h1",null,"Techniques ",r.createElement("span",null,"|")," Frameworks ",r.createElement("span",null,"|")," Languages"),r.createElement("div",null,r.createElement("div",{className:o},a.programming.techniques.map((e=>r.createElement(n.Link,{key:"icon_"+e,to:"/projects/?techniques="+e},r.createElement(d.Z,{name:e}))))),r.createElement("div",{className:m}),r.createElement("div",{className:o},a.programming.frameworks.map((e=>r.createElement(n.Link,{key:"icon_"+e,to:"/projects/?frameworks="+e},r.createElement(d.Z,{name:e}))))),r.createElement("div",{className:m}),r.createElement("div",{className:o},a.programming.languages.map((e=>r.createElement(n.Link,{key:"icon_"+e,to:"/projects/?languages="+e},r.createElement(d.Z,{name:e}))))))),r.createElement("section",{className:"index-module--description--77cfc"},a.descriptions.map((e=>r.createElement("article",{key:"article_"+e.title},r.createElement("div",null,r.createElement("h1",null,e.title),r.createElement("div",{className:"index-module--content--addbe"},e.text?r.createElement("p",null,e.text):r.createElement(r.Fragment,null),e.list?r.createElement("ul",null,e.list.map(((t,a)=>r.createElement("li",{key:"descriptionText_"+e.title+"_"+a},t)))):r.createElement(r.Fragment,null))),e.image?r.createElement(c.G,{className:"index-module--image--3ec17",image:(0,p.H)(a.pathname,e.image,t.images.nodes),alt:e.title+" image",loading:"lazy"}):r.createElement(r.Fragment,null)))))))};const E=e=>{let{data:t,location:a}=e;return r.createElement(g.Z,{title:(0,p.q)(t.project.fields.contents).name+" | Projects",pathname:a.pathname})}},3374:function(e,t,a){a.d(t,{H:function(){return i},q:function(){return c}});var n=a(8032);function c(e,t){var a;return{...JSON.parse(e),pathname:null!==(a="/"+t)&&void 0!==a?a:""}}function i(e,t,a){return(0,n.c)(a.find((a=>e==="/"+a.relativeDirectory&&t===""+a.name+a.ext)))}},6508:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/8a3ead210ca2ca9f703a05cc191b5618/ccc41/email.png","srcSet":"/static/8a3ead210ca2ca9f703a05cc191b5618/bf8e1/email.png 128w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/acb7c/email.png 256w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/ccc41/email.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/8a3ead210ca2ca9f703a05cc191b5618/6766a/email.webp 128w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/22bfc/email.webp 256w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/d689f/email.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},2257:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/07bb009c6375b63b224bb1aea630abfa/e78d2/instagram.png","srcSet":"/static/07bb009c6375b63b224bb1aea630abfa/53c4c/instagram.png 119w,\\n/static/07bb009c6375b63b224bb1aea630abfa/72c44/instagram.png 237w,\\n/static/07bb009c6375b63b224bb1aea630abfa/e78d2/instagram.png 474w","sizes":"(min-width: 474px) 474px, 100vw"},"sources":[{"srcSet":"/static/07bb009c6375b63b224bb1aea630abfa/0cc8f/instagram.webp 119w,\\n/static/07bb009c6375b63b224bb1aea630abfa/56ccb/instagram.webp 237w,\\n/static/07bb009c6375b63b224bb1aea630abfa/69dc2/instagram.webp 474w","type":"image/webp","sizes":"(min-width: 474px) 474px, 100vw"}]},"width":474,"height":472}')},6821:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f297ff5f41d31edd253cc1522e241ed3/7eff4/linkedin.png","srcSet":"/static/f297ff5f41d31edd253cc1522e241ed3/21a05/linkedin.png 134w,\\n/static/f297ff5f41d31edd253cc1522e241ed3/ce388/linkedin.png 269w,\\n/static/f297ff5f41d31edd253cc1522e241ed3/7eff4/linkedin.png 537w","sizes":"(min-width: 537px) 537px, 100vw"},"sources":[{"srcSet":"/static/f297ff5f41d31edd253cc1522e241ed3/71b64/linkedin.webp 134w,\\n/static/f297ff5f41d31edd253cc1522e241ed3/db76b/linkedin.webp 269w,\\n/static/f297ff5f41d31edd253cc1522e241ed3/08a21/linkedin.webp 537w","type":"image/webp","sizes":"(min-width: 537px) 537px, 100vw"}]},"width":537,"height":536}')},5896:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/db75736a79c8789601cf79d289ea745f/ccc41/blog.png","srcSet":"/static/db75736a79c8789601cf79d289ea745f/bf8e1/blog.png 128w,\\n/static/db75736a79c8789601cf79d289ea745f/acb7c/blog.png 256w,\\n/static/db75736a79c8789601cf79d289ea745f/ccc41/blog.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/db75736a79c8789601cf79d289ea745f/6766a/blog.webp 128w,\\n/static/db75736a79c8789601cf79d289ea745f/22bfc/blog.webp 256w,\\n/static/db75736a79c8789601cf79d289ea745f/d689f/blog.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},4945:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/cebed2ef897d5925598703350d0b27b0/ccc41/SNinjo.png","srcSet":"/static/cebed2ef897d5925598703350d0b27b0/bf8e1/SNinjo.png 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/acb7c/SNinjo.png 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/ccc41/SNinjo.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/cebed2ef897d5925598703350d0b27b0/6766a/SNinjo.webp 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/22bfc/SNinjo.webp 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/d689f/SNinjo.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},2728:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/eb94bb97c3410733ce017b184d314723/1c9ce/github_white.png","srcSet":"/static/eb94bb97c3410733ce017b184d314723/fbc98/github_white.png 16w,\\n/static/eb94bb97c3410733ce017b184d314723/914ee/github_white.png 32w,\\n/static/eb94bb97c3410733ce017b184d314723/1c9ce/github_white.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/eb94bb97c3410733ce017b184d314723/e789a/github_white.webp 16w,\\n/static/eb94bb97c3410733ce017b184d314723/ef6ff/github_white.webp 32w,\\n/static/eb94bb97c3410733ce017b184d314723/8257c/github_white.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')}}]);
//# sourceMappingURL=component---src-templates-project-index-tsx-bea0bde2e156310ef133.js.map