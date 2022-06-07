(function(){"use strict";var e={7745:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var i=n(8935),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{id:"mainview"}})],1)},o=[],a=(n(1539),{name:"App",components:{},created:function(){this.$axios.interceptors.request.use((function(e){return console.log("begin request"),e}),(function(e){return Promise.reject(e)}))}}),u=a,c=n(1001),s=(0,c.Z)(u,r,o,!1,null,null,null),f=s.exports,l=n(4549),m=n.n(l),d=n(2809),h=(n(8783),n(3948),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainmenu"},[n("div",{staticStyle:{width:"100%"}},[n("div",{staticStyle:{width:"90%","margin-left":"5%"}},[n("router-view",{staticStyle:{"padding-bottom":"4rem"}})],1)]),n("div",{staticClass:"footmenu"},e._l(e.menuitem,(function(t,i){return n("span",{key:i,class:{menuitemactive:t.isactive,menuitem:!t.isactive},on:{click:function(t){return e.select_menu(i)}}},[n("i",{class:t.icon}),n("span",[e._v(e._s(t.name))])])})),0)])}),p=[],v={name:"MainMenu",data:function(){return{menuitem:[{isactive:!0,name:"首页",icon:"el-icon-house",path:"/index"},{isactive:!1,name:"市场",icon:"el-icon-box",path:"/changpin"},{isactive:!1,name:"盲盒",icon:"el-icon-present",path:"/manghe"},{isactive:!1,name:"我的",icon:"el-icon-user",path:"/user"}],isactive:!1}},props:[],beforeCreate:function(){},created:function(){},mounted:function(){},updated:function(){},watch:{$route:function(e){if("/index"==e.path){for(var t=0,n=0;n<this.menuitem.length;n++)this.menuitem[n].isactive=!1;this.menuitem[t].isactive=!0}else if("/changpin"==e.path){for(t=1,n=0;n<this.menuitem.length;n++)this.menuitem[n].isactive=!1;this.menuitem[t].isactive=!0}else if("/manghe"==e.path){for(t=2,n=0;n<this.menuitem.length;n++)this.menuitem[n].isactive=!1;this.menuitem[t].isactive=!0}else if("/user"==e.path){for(t=3,n=0;n<this.menuitem.length;n++)this.menuitem[n].isactive=!1;this.menuitem[t].isactive=!0}else for(n=0;n<this.menuitem.length;n++)this.menuitem[n].isactive=!1}},components:{},methods:{select_menu:function(e){this.$router.push(this.menuitem[e].path)}}},g=v,b=(0,c.Z)(g,h,p,!1,null,"61ad62f5",null),y=b.exports,w=[{path:"/",component:y,children:[{path:"index",name:"index",meta:{title:"首页",index:0},component:function(){return n.e(514).then(n.bind(n,9514))}},{path:"changpin",name:"changpin",meta:{title:"藏品",index:0},component:function(){return n.e(606).then(n.bind(n,3606))}},{path:"manghe",name:"manghe",meta:{title:"盲盒",index:0},component:function(){return n.e(701).then(n.bind(n,9701))}},{path:"user",name:"user",meta:{title:"我的",index:0},component:function(){return n.e(718).then(n.bind(n,7718))}},{path:"changpindetail",name:"changpindetail",meta:{title:"藏品详情",index:0},component:function(){return n.e(166).then(n.bind(n,1166))}},{path:"setup",name:"setup",meta:{title:"个人信息修改",index:0},component:function(){return n.e(765).then(n.bind(n,765))}},{path:"shimin",name:"shimin",meta:{title:"实名认证",index:0},component:function(){return n.e(112).then(n.bind(n,112))}},{path:"order",name:"order",meta:{title:"订单",index:0},component:function(){return n.e(570).then(n.bind(n,3570))}},{path:"zhichan",name:"zhichan",meta:{title:"资产",index:0},component:function(){return n.e(921).then(n.bind(n,6921))}},{path:"mychangpin",name:"mychangpin",meta:{title:"我的藏品",index:0},component:function(){return n.e(168).then(n.bind(n,168))}},{path:"mymanghe",name:"mymanghe",meta:{title:"我的盲盒",index:0},component:function(){return n.e(183).then(n.bind(n,1183))}}]}],x=w;i["default"].use(d.Z);var _,k,C=new d.Z({routes:x}),O=C,S=n(6166),j=n.n(S),E="http://162.14.117.192:80",P={serverSrc:E},A=P,T=(0,c.Z)(A,_,k,!1,null,null,null),L=T.exports,N=n(4665);i["default"].use(N.ZP);var Z=new N.ZP.Store({state:{suitePath:"",login_id:"0",login_pwd:""},mutations:{set_suitePath:function(e,t){e.suitePath=t},set_loginid:function(e,t){e.login_id=t},set_loginpwd:function(e,t){e.login_pwd=t}}});i["default"].config.productionTip=!1,i["default"].use(m()),i["default"].prototype.$axios=j(),i["default"].prototype.GLOBAL=L,new i["default"]({router:O,store:Z,render:function(e){return e(f)}}).$mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,o){if(!i){var a=1/0;for(f=0;f<e.length;f++){i=e[f][0],r=e[f][1],o=e[f][2];for(var u=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[i,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{112:"de4096a0",166:"29aa88a0",168:"ede57cf9",183:"ef672e07",514:"ed6e2e38",570:"82490616",606:"0fbac9bc",701:"8e4b3af5",718:"1f56fb64",765:"4b161791",921:"9c873178"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{112:"9ab814b1",166:"d26d2652",168:"a417f65d",183:"855fe7f3",514:"482ef235",570:"aafce31f",606:"003afea8",701:"bf6ac69e",718:"a8ef2865",765:"c7de61bc"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="automation-platforms:";n.l=function(i,r,o,a){if(e[i])e[i].push(r);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==i||l.getAttribute("data-webpack")==t+o){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=i),e[i]=[r];var m=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var r=e[i];if(delete e[i],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){r=a[i],o=r.getAttribute("data-href");if(o===e||o===t)return r}},i=function(i){return new Promise((function(r,o){var a=n.miniCssF(i),u=n.p+a;if(t(a,u))return r();e(i,u,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={112:1,166:1,168:1,183:1,514:1,570:1,606:1,701:1,718:1,765:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=i(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=o);var a=n.p+n.u(t),u=new Error,c=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,o,a=i[0],u=i[1],c=i[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var f=c(n)}for(t&&t(i);s<a.length;s++)o=a[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(f)},i=self["webpackChunkautomation_platforms"]=self["webpackChunkautomation_platforms"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7745)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.b74e3396.js.map