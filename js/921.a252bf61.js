"use strict";(self["webpackChunkautomation_platforms"]=self["webpackChunkautomation_platforms"]||[]).push([[921],{6921:function(t,i,e){e.r(i),e.d(i,{default:function(){return r}});var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"zhichan",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"header",staticStyle:{top:"0rem",position:"fixed",height:"2rem","background-color":"white"}},[e("el-page-header",{staticClass:"elpageheader",staticStyle:{"margin-top":"0.5rem"},attrs:{content:"我的资产"},on:{back:t.goBack}})],1),e("i",{staticClass:"el-icon-coin",staticStyle:{color:"gold","font-size":"2rem","margin-top":"7rem"}}),e("p",[t._v("我的金币")]),e("p",[t._v(t._s(t.money))]),e("el-button",{staticStyle:{"margin-top":"10rem"},attrs:{type:"success"},on:{click:function(i){t.chongzhiformvisible=!0}}},[t._v("充值")]),e("el-button",{attrs:{type:"success"},on:{click:function(i){t.tixianformvisible=!0}}},[t._v("提现")]),e("el-dialog",{attrs:{title:"充值金额",width:"90%",visible:t.chongzhiformvisible,"close-on-click-modal":!1},on:{"update:visible":function(i){t.chongzhiformvisible=i}}},[e("el-form",{attrs:{model:t.chongzhiinfo}},[e("el-form-item",{attrs:{fixed:"",label:"输入充值金额：","label-width":"8rem"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.chongzhiinfo.value,callback:function(i){t.$set(t.chongzhiinfo,"value",i)},expression:"chongzhiinfo.value"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(i){t.chongzhiformvisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},nativeOn:{click:function(i){return t.submit_chongzhi.apply(null,arguments)}}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"提现金额",width:"90%",visible:t.tixianformvisible,"close-on-click-modal":!1},on:{"update:visible":function(i){t.tixianformvisible=i}}},[e("el-form",{attrs:{model:t.tixianinfo}},[e("el-form-item",{attrs:{fixed:"",label:"输入提现金额：","label-width":"8rem"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.tixianinfo.value,callback:function(i){t.$set(t.tixianinfo,"value",i)},expression:"tixianinfo.value"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(i){t.tixianformvisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},nativeOn:{click:function(i){return t.submit_tixian.apply(null,arguments)}}},[t._v("确 定")])],1)],1)],1)},n=[],l={name:"zhichan",data(){return{money:0,chongzhiformvisible:!1,tixianformvisible:!1,chongzhiinfo:{value:"0"},tixianinfo:{value:"0"}}},created(){this.get_reducemoney()},methods:{get_reducemoney(){var t=this;this.$axios.post(this.GLOBAL.serverSrc+"/getreducemoney",{phone:t.$store.state.login_id}).then((function(i){console.log(i.data),t.money=i.data.reducemoney})).catch((t=>{console.log(t)}))},goBack(){this.$router.push("/user")},submit_chongzhi(){this.chongzhiformvisible=!1,this.chongzhiinfo.value="0"},submit_tixian(){this.tixianformvisible=!1,this.tixianinfo.value="0"}}},a=l,s=e(1001),c=(0,s.Z)(a,o,n,!1,null,null,null),r=c.exports}}]);
//# sourceMappingURL=921.a252bf61.js.map