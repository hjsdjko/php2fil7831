(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-storeup-detail"],{"09ac":function(t,e,i){"use strict";var n={"mescroll-uni":i("f05e").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"100%"}},[i("v-uni-view",{staticClass:"detail-content",style:{padding:"24rpx",margin:"-60rpx 0 0",borderRadius:"60rpx 60rpx 0 0",flexWrap:"wrap",background:"#fff",display:"flex",width:"100%",position:"relative",height:"auto",zIndex:"999"}},[i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("商品id：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.refid))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("表名：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.tablename))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("名称：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.name))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t.detail.picture?i("v-uni-image",{style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:t.baseUrl+t.detail.picture}}):t._e()],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("类型：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.type))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("推荐类型：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.inteltype))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("备注：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.remark))])],1),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{padding:"10rpx 24rpx",alignItems:"center",flexWrap:"wrap",background:"#fff",display:"flex",width:"100%",height:"auto"}})],1)],1)],1)],1)],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"54f5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-9b5add26]{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.content[data-v-9b5add26]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-9b5add26]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-9b5add26]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-9b5add26]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-9b5add26]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-9b5add26] .uni-audio-default{width:inherit}',""]),t.exports=e},"772c":function(t,e,i){"use strict";var n=i("dca8"),r=i.n(n);r.a},aa59:function(t,e,i){"use strict";i.r(e);var n=i("e2bb"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},dca8:function(t,e,i){var n=i("54f5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("8e26de70",n,!0,{sourceMap:!1,shadowMode:!1})},dce4:function(t,e,i){"use strict";i.r(e);var n=i("09ac"),r=i("aa59");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("772c");var s,o=i("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"9b5add26",null,!1,n["a"],s);e["default"]=l.exports},e2bb:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("f559"),i("55dd"),i("96cf");var r=n(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null,title:""}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid),this.init();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(n=t.sent,this.user=n.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),r=uni.getStorageSync("crossCleanType"),!r){t.next=13;break}return uni.removeStorageSync("crossCleanType"),t.next=11,this.$api.info("storeup",this.id);case 11:n=t.sent,this.detail=n.data;case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){if(!this.user)return!1;uni.setStorageSync("paytable","storeup"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(t,e,i,n,r){if(!this.user)return!1;if(uni.setStorageSync("crossTable","storeup"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",i),uni.setStorageSync("statusColumnValue",r),uni.setStorageSync("tips",n),""!=i&&!i.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var s in a)if(s==i&&a[s]==r)return void this.$utils.msg(n)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("storeup",this.id);case 3:e=t.sent,this.detail=e.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;t=e.$base.url+t,uni.downloadFile({url:t,success:function(i){200===i.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")}}};e.default=a}}]);