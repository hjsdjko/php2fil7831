(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-add-or-update"],{"0b8b":function(t,e,r){"use strict";var i={"xia-editor":r("064f").default,"w-picker":r("e2b1").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"100%"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"#fff",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("标题")]),r("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:t.ro.title,placeholder:"标题"},model:{value:t.ruleForm.title,callback:function(e){t.$set(t.ruleForm,"title",e)},expression:"ruleForm.title"}})],1),r("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("分类名称")]),r("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{disabled:t.ro.typename,value:t.typenameIndex,range:t.typenameOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.typenameChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"24rpx",color:"#4753F2"}},[t._v(t._s(t.ruleForm.typename?t.ruleForm.typename:"请选择分类名称"))])],1)],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("发布人")]),r("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:t.ro.name,placeholder:"发布人"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.headportraitTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("头像")]),t.ruleForm.headportrait?r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:t.baseUrl+t.ruleForm.headportrait.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pictureTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("图片")]),t.ruleForm.picture?r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:t.baseUrl+t.ruleForm.picture.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("简介")]),r("v-uni-textarea",{style:{border:"0",padding:"24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"300rpx"},attrs:{placeholder:"简介"},model:{value:t.ruleForm.introduction,callback:function(e){t.$set(t.ruleForm,"introduction",e)},expression:"ruleForm.introduction"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0",background:"#f7f7f7",display:"flex",width:"100%",borderStyle:"solid",justifyContent:"space-around",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"140rpx",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right",fontWeight:"500"}},[t._v("内容")]),r("xia-editor",{ref:"editor",style:{minHeight:"300rpx",border:"2rpx solid #efefef",width:"calc(100% - 200rpx)",padding:"20rpx",height:"auto"},attrs:{placeholder:"内容"},on:{editorChange:function(e){arguments[0]=e=t.$handleEvent(e),t.contentChange.apply(void 0,arguments)}},model:{value:t.ruleForm.content,callback:function(e){t.$set(t.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0 0 20rpx",color:"rgb(255, 255, 255)",borderRadius:"60rpx",background:"#FC6103",width:"80%",lineHeight:"80rpx",fontSize:"36rpx",height:"80rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("提交")])],1)],1),r("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.clicktimeConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i}))},"25d3":function(t,e,r){"use strict";var i=r("c468"),n=r.n(i);n.a},"8ad2":function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o=i(r("064f")),s=i(r("bd56")),u={data:function(){return{cross:"",ruleForm:{title:"",introduction:"",typename:"",name:"",headportrait:"",storeupnum:"",picture:"",content:""},typenameOptions:[],typenameIndex:0,user:{},ro:{title:!1,introduction:!1,typename:!1,name:!1,headportrait:!1,clicknum:!1,clicktime:!1,thumbsupnum:!1,crazilynum:!1,storeupnum:!1,picture:!1,content:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var r,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:return i=t.sent,this.user=i.data,t.next=7,this.$api.option("newstype","typename",{});case 7:if(i=t.sent,this.typenameOptions=i.data,this.typenameOptions.unshift("请选择分类名称"),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){t.next=18;break}return this.ruleForm.id=e.id,t.next=16,this.$api.info("news",this.ruleForm.id);case 16:i=t.sent,this.ruleForm=i.data;case 18:if(this.cross=e.cross,!e.cross){t.next=74;break}n=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(n);case 22:if((t.t1=t.t0()).done){t.next=74;break}if(a=t.t1.value,"title"!=a){t.next=28;break}return this.ruleForm.title=n[a],this.ro.title=!0,t.abrupt("continue",22);case 28:if("introduction"!=a){t.next=32;break}return this.ruleForm.introduction=n[a],this.ro.introduction=!0,t.abrupt("continue",22);case 32:if("typename"!=a){t.next=36;break}return this.ruleForm.typename=n[a],this.ro.typename=!0,t.abrupt("continue",22);case 36:if("name"!=a){t.next=40;break}return this.ruleForm.name=n[a],this.ro.name=!0,t.abrupt("continue",22);case 40:if("headportrait"!=a){t.next=44;break}return this.ruleForm.headportrait=n[a].split(",")[0],this.ro.headportrait=!0,t.abrupt("continue",22);case 44:if("clicknum"!=a){t.next=48;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,t.abrupt("continue",22);case 48:if("clicktime"!=a){t.next=52;break}return this.ruleForm.clicktime=n[a],this.ro.clicktime=!0,t.abrupt("continue",22);case 52:if("thumbsupnum"!=a){t.next=56;break}return this.ruleForm.thumbsupnum=n[a],this.ro.thumbsupnum=!0,t.abrupt("continue",22);case 56:if("crazilynum"!=a){t.next=60;break}return this.ruleForm.crazilynum=n[a],this.ro.crazilynum=!0,t.abrupt("continue",22);case 60:if("storeupnum"!=a){t.next=64;break}return this.ruleForm.storeupnum=n[a],this.ro.storeupnum=!0,t.abrupt("continue",22);case 64:if("picture"!=a){t.next=68;break}return this.ruleForm.picture=n[a].split(",")[0],this.ro.picture=!0,t.abrupt("continue",22);case 68:if("content"!=a){t.next=72;break}return this.ruleForm.content=n[a],this.ro.content=!0,t.abrupt("continue",22);case 72:t.next=22;break;case 74:this.styleChange(),this.$forceUpdate();case 76:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{contentChange:function(t){this.ruleForm.content=t},styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(t){console.log(t),this.ruleForm.clicktime=t.result,this.$forceUpdate()},typenameChange:function(t){this.typenameIndex=t.target.value,this.ruleForm.typename=this.typenameOptions[this.typenameIndex]},headportraitTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.headportrait="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},pictureTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.picture="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var e,r,i,n,a,o,s,u,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.title){t.next=3;break}return this.$utils.msg("标题不能为空"),t.abrupt("return");case 3:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){t.next=6;break}return this.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 6:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){t.next=9;break}return this.$utils.msg("赞应输入整数"),t.abrupt("return");case 9:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){t.next=12;break}return this.$utils.msg("踩应输入整数"),t.abrupt("return");case 12:if(!this.ruleForm.storeupnum||this.$validate.isIntNumer(this.ruleForm.storeupnum)){t.next=15;break}return this.$utils.msg("收藏数应输入整数"),t.abrupt("return");case 15:if(this.ruleForm.picture){t.next=18;break}return this.$utils.msg("图片不能为空"),t.abrupt("return");case 18:if(this.ruleForm.content){t.next=21;break}return this.$utils.msg("内容不能为空"),t.abrupt("return");case 21:if(!this.cross){t.next=38;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){t.next=38;break}if(e||(e=uni.getStorageSync("crossObj")),a.startsWith("[")){t.next=34;break}for(s in e)s==a&&(e[s]=o);return u=uni.getStorageSync("crossTable"),t.next=32,this.$api.update("".concat(u),e);case 32:t.next=38;break;case 34:r=Number(uni.getStorageSync("userid")),i=e["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 38:if(!i||!r){t.next=61;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,c={page:1,limit:10,crossuserid:r,crossrefid:i},t.next=44,this.$api.list("news",c);case 44:if(l=t.sent,!(l.data.total>=n)){t.next=51;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),t.abrupt("return",!1);case 51:if(!this.ruleForm.id){t.next=56;break}return t.next=54,this.$api.update("news",this.ruleForm);case 54:t.next=58;break;case 56:return t.next=58,this.$api.add("news",this.ruleForm);case 58:this.$utils.msgBack("提交成功");case 59:t.next=69;break;case 61:if(!this.ruleForm.id){t.next=66;break}return t.next=64,this.$api.update("news",this.ruleForm);case 64:t.next=68;break;case 66:return t.next=68,this.$api.add("news",this.ruleForm);case 68:this.$utils.msgBack("提交成功");case 69:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(t){if(this.ro[t])return!1;this.$refs[t].show()}}};e.default=u},"9e70":function(t,e,r){"use strict";r.r(e);var i=r("0b8b"),n=r("e23c");for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);r("25d3");var o,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"63b46545",null,!1,i["a"],o);e["default"]=u.exports},add7:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-63b46545]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),t.exports=e},c468:function(t,e,r){var i=r("add7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("2e6c7fdd",i,!0,{sourceMap:!1,shadowMode:!1})},e23c:function(t,e,r){"use strict";r.r(e);var i=r("8ad2"),n=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a}}]);