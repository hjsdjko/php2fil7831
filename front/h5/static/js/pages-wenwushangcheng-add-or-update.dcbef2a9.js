(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wenwushangcheng-add-or-update"],{3259:function(e,i,t){var r=t("f598");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("44866885",r,!0,{sourceMap:!1,shadowMode:!1})},"4cfc":function(e,i,t){"use strict";t.r(i);var r=t("ae77"),n=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);i["default"]=n.a},"58f8":function(e,i,t){"use strict";t.r(i);var r=t("926b"),n=t("4cfc");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("6793");var s,o=t("f0c5"),l=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"6c811b0e",null,!1,r["a"],s);i["default"]=l.exports},6793:function(e,i,t){"use strict";var r=t("3259"),n=t.n(r);n.a},"926b":function(e,i,t){"use strict";var r={"xia-editor":t("064f").default,"w-picker":t("e2b1").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"100%"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"#fff",display:"block",height:"auto"}},[t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("商品编号")]),t("v-uni-view",{staticClass:"right-input",style:{padding:"0px 24rpx",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)",flex:"1"}},[e._v(e._s(e.ruleForm.shangpinbianhao))])],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("商品名称")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:e.ruleForm.shangpinmingcheng,callback:function(i){e.$set(e.ruleForm,"shangpinmingcheng",i)},expression:"ruleForm.shangpinmingcheng"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("商品分类")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{disabled:e.ro.shangpinfenlei,value:e.shangpinfenleiIndex,range:e.shangpinfenleiOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.shangpinfenleiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"24rpx",color:"#4753F2"}},[e._v(e._s(e.ruleForm.shangpinfenlei?e.ruleForm.shangpinfenlei:"请选择商品分类"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图片")]),e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.tupian.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("规格")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.guige,placeholder:"规格"},model:{value:e.ruleForm.guige,callback:function(i){e.$set(e.ruleForm,"guige",i)},expression:"ruleForm.guige"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("发布时间")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{disabled:e.ro.fabushijian,mode:"date",value:e.ruleForm.fabushijian},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.fabushijianChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"24rpx",color:"#4753F2"}},[e._v(e._s(e.ruleForm.fabushijian?e.ruleForm.fabushijian:"请选择发布时间"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("单限")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.onelimittimes,placeholder:"单限"},model:{value:e.ruleForm.onelimittimes,callback:function(i){e.$set(e.ruleForm,"onelimittimes",e._n(i))},expression:"ruleForm.onelimittimes"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("库存")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.alllimittimes,placeholder:"库存"},model:{value:e.ruleForm.alllimittimes,callback:function(i){e.$set(e.ruleForm,"alllimittimes",e._n(i))},expression:"ruleForm.alllimittimes"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("积分")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.jf,placeholder:"积分"},model:{value:e.ruleForm.jf,callback:function(i){e.$set(e.ruleForm,"jf",e._n(i))},expression:"ruleForm.jf"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("价格")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.price,placeholder:"价格"},model:{value:e.ruleForm.price,callback:function(i){e.$set(e.ruleForm,"price",e._n(i))},expression:"ruleForm.price"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",justifyContent:"space-around",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"140rpx",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right",fontWeight:"500"}},[e._v("商品详情")]),t("xia-editor",{ref:"editor",style:{minHeight:"300rpx",border:"2rpx solid #efefef",width:"calc(100% - 200rpx)",padding:"20rpx",height:"auto"},attrs:{placeholder:"商品详情"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.shangpinxiangqingChange.apply(void 0,arguments)}},model:{value:e.ruleForm.shangpinxiangqing,callback:function(i){e.$set(e.ruleForm,"shangpinxiangqing",i)},expression:"ruleForm.shangpinxiangqing"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"center",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0 0 20rpx",color:"rgb(255, 255, 255)",borderRadius:"60rpx",background:"#FC6103",width:"80%",lineHeight:"80rpx",fontSize:"36rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.clicktimeConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return r}))},ae77:function(e,i,t){"use strict";var r=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var n=r(t("3b8d")),a=r(t("e2b1")),s=r(t("064f")),o=r(t("bd56")),l={data:function(){return{cross:"",ruleForm:{shangpinbianhao:this.getUUID(),shangpinmingcheng:"",shangpinfenlei:"",tupian:"",guige:"",fabushijian:"",shangpinxiangqing:"",onelimittimes:"-1",alllimittimes:"-1",discussnum:"",jf:"",price:"",storeupnum:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpinfenlei:!1,tupian:!1,guige:!1,fabushijian:!1,shangpinxiangqing:!1,onelimittimes:!1,alllimittimes:!1,clicktime:!1,clicknum:!1,discussnum:!1,jf:!1,price:!1,storeupnum:!1}}},components:{wPicker:a.default,xiaEditor:s.default,multipleSelect:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDate(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:return r=e.sent,this.user=r.data,e.next=8,this.$api.option("shangpinfenlei","shangpinfenlei",{});case 8:if(r=e.sent,this.shangpinfenleiOptions=r.data,this.shangpinfenleiOptions.unshift("请选择商品分类"),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=19;break}return this.ruleForm.id=i.id,e.next=17,this.$api.info("wenwushangcheng",this.ruleForm.id);case 17:r=e.sent,this.ruleForm=r.data;case 19:if(this.cross=i.cross,!i.cross){e.next=87;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 23:if((e.t1=e.t0()).done){e.next=87;break}if(a=e.t1.value,"shangpinbianhao"!=a){e.next=29;break}return this.ruleForm.shangpinbianhao=n[a],this.ro.shangpinbianhao=!0,e.abrupt("continue",23);case 29:if("shangpinmingcheng"!=a){e.next=33;break}return this.ruleForm.shangpinmingcheng=n[a],this.ro.shangpinmingcheng=!0,e.abrupt("continue",23);case 33:if("shangpinfenlei"!=a){e.next=37;break}return this.ruleForm.shangpinfenlei=n[a],this.ro.shangpinfenlei=!0,e.abrupt("continue",23);case 37:if("tupian"!=a){e.next=41;break}return this.ruleForm.tupian=n[a].split(",")[0],this.ro.tupian=!0,e.abrupt("continue",23);case 41:if("guige"!=a){e.next=45;break}return this.ruleForm.guige=n[a],this.ro.guige=!0,e.abrupt("continue",23);case 45:if("fabushijian"!=a){e.next=49;break}return this.ruleForm.fabushijian=n[a],this.ro.fabushijian=!0,e.abrupt("continue",23);case 49:if("shangpinxiangqing"!=a){e.next=53;break}return this.ruleForm.shangpinxiangqing=n[a],this.ro.shangpinxiangqing=!0,e.abrupt("continue",23);case 53:if("onelimittimes"!=a){e.next=57;break}return this.ruleForm.onelimittimes=n[a],this.ro.onelimittimes=!0,e.abrupt("continue",23);case 57:if("alllimittimes"!=a){e.next=61;break}return this.ruleForm.alllimittimes=n[a],this.ro.alllimittimes=!0,e.abrupt("continue",23);case 61:if("clicktime"!=a){e.next=65;break}return this.ruleForm.clicktime=n[a],this.ro.clicktime=!0,e.abrupt("continue",23);case 65:if("clicknum"!=a){e.next=69;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,e.abrupt("continue",23);case 69:if("discussnum"!=a){e.next=73;break}return this.ruleForm.discussnum=n[a],this.ro.discussnum=!0,e.abrupt("continue",23);case 73:if("jf"!=a){e.next=77;break}return this.ruleForm.jf=n[a],this.ro.jf=!0,e.abrupt("continue",23);case 77:if("price"!=a){e.next=81;break}return this.ruleForm.price=n[a],this.ro.price=!0,e.abrupt("continue",23);case 81:if("storeupnum"!=a){e.next=85;break}return this.ruleForm.storeupnum=n[a],this.ro.storeupnum=!0,e.abrupt("continue",23);case 85:e.next=23;break;case 87:this.styleChange(),this.$forceUpdate();case 89:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{shangpinxiangqingChange:function(e){this.ruleForm.shangpinxiangqing=e},styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(e){this.ruleForm.fabushijian=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},shangpinfenleiChange:function(e){this.shangpinfenleiIndex=e.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.tupian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,t,r,n,a,s,o,l,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.onelimittimes||this.$validate.isIntNumer(this.ruleForm.onelimittimes)){e.next=3;break}return this.$utils.msg("单限应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.alllimittimes||this.$validate.isIntNumer(this.ruleForm.alllimittimes)){e.next=6;break}return this.$utils.msg("库存应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=9;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.discussnum||this.$validate.isIntNumer(this.ruleForm.discussnum)){e.next=12;break}return this.$utils.msg("评论数应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.jf||this.$validate.isIntNumer(this.ruleForm.jf)){e.next=15;break}return this.$utils.msg("积分应输入整数"),e.abrupt("return");case 15:if(this.ruleForm.price){e.next=18;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 18:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=21;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 21:if(!this.ruleForm.storeupnum||this.$validate.isIntNumer(this.ruleForm.storeupnum)){e.next=24;break}return this.$utils.msg("收藏数应输入整数"),e.abrupt("return");case 24:if(!this.cross){e.next=41;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),s=uni.getStorageSync("statusColumnValue"),""==a){e.next=41;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=37;break}for(o in i)o==a&&(i[o]=s);return l=uni.getStorageSync("crossTable"),e.next=35,this.$api.update("".concat(l),i);case 35:e.next=41;break;case 37:t=Number(uni.getStorageSync("userid")),r=i["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 41:if(!r||!t){e.next=64;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=r,u={page:1,limit:10,crossuserid:t,crossrefid:r},e.next=47,this.$api.list("wenwushangcheng",u);case 47:if(c=e.sent,!(c.data.total>=n)){e.next=54;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 54:if(!this.ruleForm.id){e.next=59;break}return e.next=57,this.$api.update("wenwushangcheng",this.ruleForm);case 57:e.next=61;break;case 59:return e.next=61,this.$api.add("wenwushangcheng",this.ruleForm);case 61:this.$utils.msgBack("提交成功");case 62:e.next=72;break;case 64:if(!this.ruleForm.id){e.next=69;break}return e.next=67,this.$api.update("wenwushangcheng",this.ruleForm);case 67:e.next=71;break;case 69:return e.next=71,this.$api.add("wenwushangcheng",this.ruleForm);case 71:this.$utils.msgBack("提交成功");case 72:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),r=i.getMonth()+1,n=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(e){if(this.ro[e])return!1;this.$refs[e].show()}}};i.default=l},f598:function(e,i,t){var r=t("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-6c811b0e]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i}}]);