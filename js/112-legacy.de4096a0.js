"use strict";(self["webpackChunkautomation_platforms"]=self["webpackChunkautomation_platforms"]||[]).push([[112],{112:function(i,t,n){n.r(t),n.d(t,{default:function(){return c}});var s=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"setup"},[n("div",{staticClass:"header",staticStyle:{top:"0rem",position:"fixed",height:"2rem","background-color":"white"}},[n("el-page-header",{staticClass:"elpageheader",staticStyle:{"margin-top":"0.5rem"},attrs:{content:"实名认证"},on:{back:i.goBack}})],1),n("div",{staticClass:"content"},[n("div",{staticClass:"name",on:{click:function(t){i.shiminFormVisible=!0}}},[n("p",[i._v("真实姓名")]),n("p",[i._v(i._s(i.personinfo.realname)),n("i",{staticClass:"el-icon-arrow-right"})])]),n("div",{staticClass:"idnum",on:{click:function(t){i.shiminFormVisible=!0}}},[n("p",[i._v("身份证号")]),n("p",[i._v(i._s(i.personinfo.idnum)),n("i",{staticClass:"el-icon-arrow-right"})])]),n("div",{staticClass:"cardnum",on:{click:function(t){i.shiminFormVisible=!0}}},[n("p",[i._v("银行卡号")]),n("p",[i._v(i._s(i.personinfo.cardnum)),n("i",{staticClass:"el-icon-arrow-right"})])])]),n("div",{staticClass:"submit"},[n("el-button",{staticStyle:{width:"100%","margin-top":"1rem"},attrs:{type:"primary"},on:{click:i.sumbit_personinfo}},[i._v("保存提交")])],1),n("el-dialog",{attrs:{title:"实名认证信息",width:"90%",visible:i.shiminFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){i.shiminFormVisible=t}}},[n("el-form",{attrs:{model:i.personinfo1}},[n("el-form-item",{attrs:{fixed:"",label:"输入真实姓名：","label-width":"8rem"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:i.personinfo1.realname,callback:function(t){i.$set(i.personinfo1,"realname",t)},expression:"personinfo1.realname"}})],1),n("el-form-item",{attrs:{fixed:"",label:"输入身份证号：","label-width":"8rem"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:i.personinfo1.idnum,callback:function(t){i.$set(i.personinfo1,"idnum",t)},expression:"personinfo1.idnum"}})],1),n("el-form-item",{attrs:{fixed:"",label:"输入银行卡号：","label-width":"8rem"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:i.personinfo1.cardnum,callback:function(t){i.$set(i.personinfo1,"cardnum",t)},expression:"personinfo1.cardnum"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:i.cancel_shimin}},[i._v("取 消")]),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return i.submit_shimin.apply(null,arguments)}}},[i._v("确 定")])],1)],1)],1)},o=[],e={name:"shimin",data:function(){return{is_mod_flag:!1,personinfo:{realname:"Jack",idnum:"511843188411258943",cardnum:"621443528954"},personinfo1:{realname:"Jack",idnum:"511843188411258943",cardnum:"621443528954"},shiminFormVisible:!1}},created:function(){this.get_userinfo()},methods:{get_userinfo:function(){var i=this;this.$axios.post(this.GLOBAL.serverSrc+"/getalluserinfo",{phone:i.$store.state.login_id,pwd:i.$store.state.login_pwd}).then((function(t){console.log(t.data),i.personinfo=t.data,i.personinfo1=i.personinfo})).catch((function(i){console.log(i)}))},goBack:function(){if(1==this.is_mod_flag){var i=confirm("修改内容未保存提交，确定退出？");i&&this.$router.push("/setup")}else this.$router.push("/setup")},cancel_shimin:function(){this.shiminFormVisible=!1,this.personinfo1=this.personinfo},submit_shimin:function(){this.is_mod_flag=!0,this.shiminFormVisible=!1,this.personinfo=this.personinfo1},submit_idnum:function(){var i=prompt("请输入真实身份证号");i&&(this.personinfo.idnum=i,this.is_mod_flag=!0)},submit_cardnum:function(){var i=prompt("请输入银行卡号");i&&(this.personinfo.cardnum=i,this.is_mod_flag=!0)},sumbit_personinfo:function(){this.is_mod_flag=!1,this.$axios.post(this.GLOBAL.serverSrc+"/saveuserinfoshimin",this.personinfo).then((function(i){console.log(i.data),"success"==i.data&&alert("保存成功")})).catch((function(i){console.log(i)}))}}},a=e,r=n(1001),l=(0,r.Z)(a,s,o,!1,null,"71378818",null),c=l.exports}}]);
//# sourceMappingURL=112-legacy.de4096a0.js.map