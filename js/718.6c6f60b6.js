"use strict";(self["webpackChunkautomation_platforms"]=self["webpackChunkautomation_platforms"]||[]).push([[718],{7718:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user"},[1==t.is_login?i("div",{staticClass:"userpage"},[i("div",{staticClass:"header"},[t._m(0),i("div",{staticClass:"setupicon"},[i("i",{staticClass:"el-icon-s-tools",on:{click:t.enter_setup}})])]),i("div",{staticClass:"avatar",staticStyle:{"margin-top":"3rem","text-align":"center"}},[i("el-avatar",{attrs:{size:50,src:t.userinfo.avatarurl}})],1),i("div",{staticClass:"username",staticStyle:{"margin-top":"0rem","text-align":"center"}},[i("p",{staticStyle:{"font-size":"1.3rem"}},[t._v(t._s(t.userinfo.name))])]),i("div",{staticClass:"chaifu",staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",{staticClass:"order",staticStyle:{"font-size":"1.5rem",color:"cornflowerblue",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"},on:{click:t.enter_order}},[i("i",{staticClass:"el-icon-shopping-cart-full"}),i("span",{staticStyle:{"font-size":"0.7rem"}},[t._v("我的订单")])]),i("div",{staticClass:"zhichan",staticStyle:{"font-size":"1.5rem",color:"orange",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"},on:{click:t.enter_zhichan}},[i("i",{staticClass:"el-icon-receiving"}),i("span",{staticStyle:{"font-size":"0.7rem"}},[t._v("我的资产")])]),i("div",{staticClass:"changpin",staticStyle:{"font-size":"1.5rem",color:"orangered",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"},on:{click:t.enter_mychangpin}},[i("i",{staticClass:"el-icon-box"}),i("span",{staticStyle:{"font-size":"0.7rem"}},[t._v("我的藏品")])]),i("div",{staticClass:"manghe",staticStyle:{"font-size":"1.5rem",color:"purple",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"},on:{click:t.enter_mymanghe}},[i("i",{staticClass:"el-icon-present"}),i("span",{staticStyle:{"font-size":"0.7rem"}},[t._v("我的盲盒")])])]),i("div",{staticClass:"itemul",staticStyle:{"margin-top":"1.5rem"}},[i("div",{staticClass:"about",staticStyle:{"margin-bottom":"0.5rem",border:"1px solid gray","background-color":"gray",height:"2.5rem","line-height":"2.5rem",width:"100%",position:"relative"},on:{click:function(e){t.aboutVisible=!0}}},[i("i",{staticClass:"el-icon-warning-outline",staticStyle:{position:"absolute",left:"1rem",top:"0.7rem"}},[t._v("关于")]),i("i",{staticClass:"el-icon-arrow-right",staticStyle:{position:"absolute",right:"0.2rem",top:"0.7rem"}})]),i("div",{staticClass:"kefu",staticStyle:{border:"1px solid gray","background-color":"gray",height:"2.5rem","line-height":"2.5rem",width:"100%",position:"relative"},on:{click:function(e){t.kefuVisible=!0}}},[i("i",{staticClass:"el-icon-service",staticStyle:{position:"absolute",left:"1rem",top:"0.7rem"}},[t._v("我的客服")]),i("i",{staticClass:"el-icon-arrow-right",staticStyle:{position:"absolute",right:"0.2rem",top:"0.7rem"}})])]),i("el-dialog",{attrs:{title:"关于",width:"90%",visible:t.aboutVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.aboutVisible=e}}},[i("div",{staticClass:"info"},[i("p",[t._v("数字藏品交易系统")]),i("p",[t._v("版本信息：1.0")]),i("p",[t._v("交流QQ群：123456789")])]),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.aboutVisible=!1}}},[t._v("确 定")])],1)]),i("el-dialog",{attrs:{title:"我的客服",width:"90%",visible:t.kefuVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.kefuVisible=e}}},[i("div",{staticClass:"info"},[i("p",[t._v("添加下面客服QQ")]),i("p",[t._v("QQ号：98989898")])]),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.kefuVisible=!1}}},[t._v("确 定")])],1)])],1):i("div",{staticClass:"notloginuserpage"},[i("div",{staticClass:"username",staticStyle:{"margin-top":"10rem",display:"flex","flex-direction":"row","justify-content":"center"}},[i("p",{staticStyle:{width:"4rem"}},[t._v("用户名:")]),i("el-input",{staticStyle:{width:"15rem","margin-left":"1rem"},attrs:{placeholder:"请输入手机号"},model:{value:t.login_info.phone,callback:function(e){t.$set(t.login_info,"phone",e)},expression:"login_info.phone"}})],1),i("div",{staticClass:"psw",staticStyle:{"margin-top":"1rem",display:"flex","flex-direction":"row","justify-content":"center"}},[i("p",{staticStyle:{width:"4rem"}},[t._v("密码:")]),i("el-input",{staticStyle:{width:"15rem","margin-left":"1rem"},attrs:{placeholder:"请输入密码"},model:{value:t.login_info.pwd,callback:function(e){t.$set(t.login_info,"pwd",e)},expression:"login_info.pwd"}})],1),i("div",{staticClass:"loginbtn",staticStyle:{"text-align":"center","margin-top":"1rem"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")]),i("el-button",{attrs:{type:"primary"},on:{click:t.register}},[t._v("注册")])],1),t._m(1)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("span",[t._v("我的")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rember",staticStyle:{position:"relative"}},[i("p",{staticStyle:{"font-size":"0.5rem",color:"blue",position:"absolute",right:"0px"}},[t._v("忘记密码")])])}],o={name:"UserPage",data(){return{is_login:!1,login_info:{phone:"",pwd:""},userinfo:{avatarurl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",name:"Jack"},aboutVisible:!1,kefuVisible:!1,password:""}},created(){"0"==this.$store.state.login_id?this.is_login=!1:(this.is_login=!0,this.get_userinfo())},updated(){},methods:{enter_setup(){this.$router.push("/setup")},enter_order(){this.$router.push("/order")},enter_zhichan(){this.$router.push("/zhichan")},enter_mychangpin(){this.$router.push("/mychangpin")},enter_mymanghe(){this.$router.push("/mymanghe")},login(){var t=this;this.$axios.post(this.GLOBAL.serverSrc+"/login",t.login_info).then((function(e){console.log(e.data),e.data.length,t.$store.commit("set_loginid",t.login_info.phone),t.$store.commit("set_loginpwd",t.login_info.pwd),t.is_login=!0,t.userinfo.name=e.data.name,t.userinfo.avatarurl=e.data.avatarurl})).catch((t=>{console.log(t)}))},register(){},get_userinfo(){var t=this;this.$axios.post(this.GLOBAL.serverSrc+"/getuserinfo_basic",{phone:t.$store.state.login_id}).then((function(e){console.log(e.data),t.userinfo=e.data})).catch((t=>{console.log(t)}))}}},n=o,l=i(1001),r=(0,l.Z)(n,s,a,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=718.6c6f60b6.js.map