"use strict";(self["webpackChunkautomation_platforms"]=self["webpackChunkautomation_platforms"]||[]).push([[701],{9701:function(t,a,i){i.r(a),i.d(a,{default:function(){return o}});var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"index"},[i("div",{staticClass:"search",staticStyle:{"margin-top":"1rem"}},[i("el-input",{attrs:{placeholder:"请输入搜索内容"},model:{value:t.searchdata,callback:function(a){t.searchdata=a},expression:"searchdata"}},[i("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._m(0),t._l(t.changpindatas,(function(a,e){return i("div",{key:e,staticClass:"item",on:{click:function(i){return t.switch_changpindetail(a)}}},[i("el-card",{attrs:{"body-style":{padding:"0.1rem"}}},[i("div",{staticClass:"showimg"},[i("el-image",{staticClass:"img",style:{width:t.imgwidth,height:t.imgwidth},attrs:{src:a.imgurl,fit:"fill"}})],1),i("div",{staticStyle:{padding:"1rem"}},[i("span",[t._v(t._s(a.name))]),i("div",{staticClass:"autor"},[i("span",{staticClass:"autortitle"},[t._v("作者")]),i("span",{staticClass:"autorvalue"},[t._v(t._s(a.autor))])]),i("div",{staticClass:"price"},[i("span",{staticClass:"pricetitle"},[t._v("价格")]),i("span",{staticClass:"pricevalue"},[t._v("￥"+t._s(a.price))])])])])],1)})),i("div",{staticClass:"mangheitem",staticStyle:{"margin-top":"1rem","text-align":"center"}},[t._v(" 暂无更多 ")])],2)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"itemtitle"},[i("span",{staticStyle:{"font-size":"1rem"}},[i("i",{staticClass:"el-icon-present",staticStyle:{color:"aqua"}}),t._v("盲盒")])])}],n={name:"MangHe",data(){return{searchdata:"",imgwidth:4*window.innerWidth/5+"px",changpindatas:[{name:"战机",autor:"元宇宙出品",price:"待售",path:"/changpindetail?changpin=0",imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.9k9k.com%2Fm%2Fappimg%2F202109%2F2616225944z2.png&refer=http%3A%2F%2Fimages.9k9k.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657105565&t=a40e4393fa45ff7a48277a890a6891e0"}]}},created(){},methods:{get_indexchangpin_data(){var t=this;this.$axios.post(this.GLOBAL.serverSrc+"/getindexchangpin",{}).then((function(a){console.log(a.data),t.changpindatas=a.data})).catch((t=>{console.log(t)}))},switch_to_changpin(){},switch_to_manghe(){this.$router.push("/manghe")},switch_changpindetail(t){}}},c=n,r=i(1001),l=(0,r.Z)(c,e,s,!1,null,"ee8ee884",null),o=l.exports}}]);
//# sourceMappingURL=701.ebf97e7b.js.map