(window.webpackJsonp=window.webpackJsonp||[]).push([[33],Array(187).concat([function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"i",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return f}),n.d(e,"e",function(){return p}),n.d(e,"k",function(){return d}),n.d(e,"l",function(){return h}),n.d(e,"c",function(){return v}),n.d(e,"j",function(){return g});const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function p(t,e){const n=t.hash,r=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function d(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,n,i){const{pages:r,themeConfig:s}=n,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===m(t).indexOf(encodeURI(n)))return{base:n,config:e[n]};return{}}(e,o);return n?n.map(e=>(function t(e,n,i,r=1){if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});{r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,i,r+1)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function m(t){return/(\.html|\/)$/.test(t)?t:t+"/"}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,function(t,e,n){"use strict";n(106),n(107),n(102),n(215);var i=n(187),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=n(17),a=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);a.options.__file="NavLink.vue";e.a=a.exports},function(t,e,n){n(76)("match",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){var i=n(77),r=n(18)("toStringTag"),s="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:s?i(e):"Object"==(a=i(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var i=n(241).Symbol;t.exports=i},function(t,e,n){"use strict";n.r(e);n(102);var i=n(187),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(214).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(212).default},methods:{isActive:i.e}},s=(n(250),n(17)),a=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null);a.options.__file="SidebarGroup.vue";var o=a.exports;n(105),n(251);function u(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function c(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var o=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[u(t,n+"#"+e.slug,e.title,o),c(t,e.children,n,r,s,a+1)])}))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,o=n.$themeLocaleConfig,l=e.props,f=l.item,p=l.sidebarDepth,d=Object(i.e)(s,f.path),h="auto"===f.type?d||f.children.some(function(t){return Object(i.e)(s,f.basePath+"#"+t.slug)}):d,v="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):u(t,f.path,f.title||f.path,h),g=[r.frontmatter.sidebarDepth,p,o.sidebarDepth,a.sidebarDepth,1].find(function(t){return void 0!==t}),m=o.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[v,c(t,f.children,f.basePath,s,g)]:(h||m)&&f.headers&&!i.d.test(f.path)?[v,c(t,Object(i.c)(f.headers),f.path,s,g)]:v}},f=(n(252),Object(s.a)(l,void 0,void 0,!1,null,null,null));function p(t,e){return"group"===e.type&&e.children.some(function(e){return"group"===e.type?p(t,e):"page"===e.type&&Object(i.e)(t,e.path)})}f.options.__file="SidebarLink.vue";var d={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:f.exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(p(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);h.options.__file="SidebarLinks.vue";e.default=h.exports},,function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(234),n(17)),s=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);s.options.__file="DropdownTransition.vue";e.a=s.exports},function(t,e,n){"use strict";n(216)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){var i=n(2),r=n(7),s=n(19),a=/"/g,o=function(t,e,n,i){var r=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";var i=n(188);n.n(i).a},function(t,e,n){"use strict";var i=n(189);n.n(i).a},function(t,e,n){"use strict";var i=n(190);n.n(i).a},function(t,e,n){t.exports=n(221)},function(t,e,n){n(222),t.exports=n(35).Array.isArray},function(t,e,n){var i=n(75);i(i.S,"Array",{isArray:n(117)})},function(t,e,n){t.exports=n(224)},function(t,e,n){n(104),n(225),t.exports=n(35).Array.from},function(t,e,n){"use strict";var i=n(113),r=n(75),s=n(115),a=n(226),o=n(227),u=n(114),c=n(228),l=n(229);r(r.S+r.F*!n(230)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,p=s(t),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,m=0,b=l(p);if(g&&(v=i(v,h>2?arguments[2]:void 0,2)),void 0==b||d==Array&&o(b))for(n=new d(e=u(p.length));e>m;m++)c(n,m,g?v(p[m],m):p[m]);else for(f=b.call(p),n=new d;!(r=f.next()).done;m++)c(n,m,g?a(f,v,[r.value,m],!0):r.value);return n.length=m,n}})},function(t,e,n){var i=n(36);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var s=t.return;throw void 0!==s&&i(s.call(t)),e}}},function(t,e,n){var i=n(50),r=n(18)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[r]===t)}},function(t,e,n){"use strict";var i=n(20),r=n(37);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var i=n(210),r=n(18)("iterator"),s=n(50);t.exports=n(35).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||s[i(t)]}},function(t,e,n){var i=n(18)("iterator"),r=!1;try{var s=[7][i]();s.return=function(){r=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var s=[7],a=s[i]();a.next=function(){return{done:n=!0}},s[i]=function(){return a},t(s)}catch(t){}return n}},function(t,e,n){t.exports=n(232)},function(t,e,n){n(116),n(104),t.exports=n(233)},function(t,e,n){var i=n(210),r=n(18)("iterator"),s=n(50);t.exports=n(35).isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||s.hasOwnProperty(i(e))}},function(t,e,n){"use strict";var i=n(191);n.n(i).a},function(t,e,n){"use strict";var i=n(192);n.n(i).a},,function(t,e,n){"use strict";var i=n(194);n.n(i).a},function(t,e,n){"use strict";var i=n(195);n.n(i).a},function(t,e,n){var i=n(240),r=n(245),s=n(246),a="[object String]";t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&i(t)==a}},function(t,e,n){var i=n(211),r=n(243),s=n(244),a="[object Null]",o="[object Undefined]",u=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?o:a:u&&u in Object(t)?r(t):s(t)}},function(t,e,n){var i=n(242),r="object"==typeof self&&self&&self.Object===Object&&self,s=i||r||Function("return this")();t.exports=s},function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},function(t,e,n){var i=n(211),r=Object.prototype,s=r.hasOwnProperty,a=r.toString,o=i?i.toStringTag:void 0;t.exports=function(t){var e=s.call(t,o),n=t[o];try{t[o]=void 0;var i=!0}catch(t){}var r=a.call(t);return i&&(e?t[o]=n:delete t[o]),r}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=function(t){return null==t}},function(t,e,n){"use strict";var i=n(196);n.n(i).a},function(t,e,n){"use strict";var i=n(197);n.n(i).a},function(t,e,n){"use strict";var i=n(198);n.n(i).a},function(t,e,n){"use strict";var i=n(2),r=n(28)(5),s=!0;"find"in[]&&Array(1).find(function(){s=!1}),i(i.P+i.F*s,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)("find")},function(t,e,n){"use strict";var i=n(199);n.n(i).a},function(t,e,n){"use strict";var i=n(200);n.n(i).a},,,,,,,,function(t,e,n){"use strict";n(103);var i=n(187),r={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,a=void 0===s?"master":s,o=t.docsRepo,u=void 0===o?e:o;return u&&n&&this.$page.relativePath?this.createEditLink(e,u,r,a,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,s){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+s}}},s=(n(238),n(17)),a=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])},[],!1,null,null,null);a.options.__file="PageEdit.vue";var o=a.exports,u=n(239),c=n.n(u),l=n(247),f=n.n(l),p={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return h(d.PREV,this)},next:function(){return h(d.NEXT,this)}}};var d={NEXT:{resolveLink:function(t,e){return v(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return v(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function h(t,e){var n=e.$themeConfig,r=e.$page,s=e.$route,a=e.$site,o=e.sidebarItems,u=t.resolveLink,l=t.getThemeLinkConfig,p=t.getPageLinkConfig,d=l(n),h=p(r),v=f()(h)?d:h;return!1===v?void 0:c()(v)?Object(i.k)(a.pages,v,s.path):u(r,o)}function v(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var g=p,m=(n(248),Object(s.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n    ")],1):t._e()])]):t._e()},[],!1,null,null,null));m.options.__file="PageNav.vue";var b={components:{PageEdit:o,PageNav:m.exports},props:["sidebarItems"]},_=(n(249),Object(s.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));_.options.__file="Page.vue";e.a=_.exports},function(t,e,n){"use strict";n(109),n(110),n(209),n(108),n(119),n(111),n(118);var i={data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=n);a++){var o=e[a];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(r(o))s.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(s.length>=n);u++){var c=o.headers[u];r(c)&&s.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},r=(n(218),n(17)),s=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null);s.options.__file="SearchBox.vue";var a=s.exports,o=(n(219),Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));function u(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}o.options.__file="SidebarButton.vue";var c={components:{SidebarButton:o.exports,NavLinks:n(213).a,SearchBox:a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(u(this.$el,"paddingLeft"))+parseInt(u(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},l=(n(237),Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));l.options.__file="Navbar.vue";e.a=l.exports},function(t,e,n){"use strict";var i={components:{NavLink:n(208).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(217),n(17)),s=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null);s.options.__file="Home.vue";e.a=s.exports},function(t,e,n){"use strict";var i=n(212),r=n(213),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.a},props:["items"]},a=(n(253),n(17)),o=Object(a.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null);o.options.__file="Sidebar.vue";e.a=o.exports},function(t,e,n){"use strict";var i=n(208),r=n(214),s={components:{NavLink:i.a,DropdownTransition:r.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},a=(n(235),n(17)),o=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null);o.options.__file="DropdownLink.vue";e.a=o.exports},function(t,e,n){"use strict";var i=n(220),r=n.n(i);var s=n(223),a=n.n(s),o=n(231),u=n.n(o);function c(t){return function(t){if(r()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return c})}])]);