(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wenwushangcheng-detail"],{"0551":function(t,e,i){"use strict";i.r(e);var n=i("e77f"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"0649":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-f4eb1378]{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.content[data-v-f4eb1378]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-f4eb1378]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-f4eb1378]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-f4eb1378]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-f4eb1378]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-f4eb1378] .uni-audio-default{width:inherit}',""]),t.exports=e},"17e6":function(t,e,i){var n=i("0649");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("4e75c086",n,!0,{sourceMap:!1,shadowMode:!1})},2215:function(t,e,i){"use strict";i.r(e);var n=i("b89c"),r=i("0551");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("446f");var s,o=i("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"f4eb1378",null,!1,n["a"],s);e["default"]=l.exports},"446f":function(t,e,i){"use strict";var n=i("17e6"),r=i.n(n);r.a},b89c:function(t,e,i){"use strict";var n={"mescroll-uni":i("f05e").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"100%"}},[i("z-swiper",{staticStyle:{"touch-action":"none"},style:{width:"100%",background:"#fff",height:"360rpx"},attrs:{effect:"cube",loop:!1,showIndicators:!1}},t._l(t.swiperList,(function(e,n){return i("z-swiper-item",{key:n,staticStyle:{"touch-action":"none"},style:{width:"100%",background:"#fff",height:"360rpx"}},["http"==e.substring(0,4)?i("v-uni-image",{style:{width:"100%",objectFit:"cover",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:e}}):i("v-uni-image",{style:{width:"100%",objectFit:"cover",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+e}})],1)})),1),i("v-uni-view",{staticClass:"detail-content",style:{padding:"24rpx",margin:"-60rpx 0 0",borderRadius:"60rpx 60rpx 0 0",flexWrap:"wrap",background:"#fff",display:"flex",width:"100%",position:"relative",height:"auto",zIndex:"999"}},[i("v-uni-view",{staticClass:"detail-list-item price priceFavor",style:{margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",flexWrap:"wrap",borderWidth:"0",display:"flex",width:"100%",borderStyle:"solid",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"text",style:{display:"flex"}},[i("v-uni-view",{style:{lineHeight:"80rpx",fontSize:"40rpx",color:"red",fontWeight:"bold"}},[t._v("￥")]),i("v-uni-view",{style:{lineHeight:"80rpx",fontSize:"36rpx",color:"red",fontWeight:"bold"}},[t._v(t._s(t.detail.price))])],1),1==t.storeupFlag?i("v-uni-view",{style:{border:"2rpx solid #FC6103",padding:"0 30rpx",borderRadius:"40rpx",display:"flex",height:"auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoucang.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"icon iconfont icon-shoucang11",style:{margin:"0 4rpx 0 0",lineHeight:"60rpx",fontSize:"28rpx",color:"#FC6103"}}),i("v-uni-text",{style:{color:"#FC6103",lineHeight:"60rpx",fontSize:"28rpx"}},[t._v("收藏")])],1):t._e(),0==t.storeupFlag?i("v-uni-view",{style:{width:"100%",display:"flex",height:"auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoucang.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"icon iconfont icon-shoucang11",style:{margin:"0 4rpx 0 0",lineHeight:"60rpx",fontSize:"28rpx",color:"#FC6103"}}),i("v-uni-text",{style:{color:"#FC6103",lineHeight:"60rpx",fontSize:"28rpx"}},[t._v("收藏")])],1):t._e()],1),i("v-uni-view",{staticClass:"detail-list-item price priceFavor",style:{margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",flexWrap:"wrap",borderWidth:"0",display:"flex",width:"100%",borderStyle:"solid",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"text",style:{display:"flex"}},[i("v-uni-view",{style:{lineHeight:"80rpx",fontSize:"36rpx",color:"red",fontWeight:"bold"}},[t._v(t._s(Number(t.detail.jf))+"积分")])],1)],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("商品名称：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.shangpinmingcheng))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("商品编号：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.shangpinbianhao))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("商品分类：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.shangpinfenlei))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("规格：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.guige))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("发布时间：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.fabushijian))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("库存：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.alllimittimes))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("点击次数：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.clicknum))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("评论数：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.discussnum))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#D8D8D8",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("收藏数：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[t._v(t._s(t.detail.storeupnum))])],1),i("v-uni-view",{staticClass:"detail-list-item rich",style:{margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",display:"none",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("商品详情")]),i("v-uni-view",{staticClass:"rich-text",style:{color:"#000",padding:"24rpx 24rpx 24rpx 0",margin:"0"}},[i("v-uni-rich-text",{attrs:{nodes:t.detail.shangpinxiangqing}})],1)],1),i("v-uni-view",{staticClass:"time-content",style:{width:"100%",margin:"0 0 24rpx 0",background:"#f7f7f7",height:"auto"}},[i("v-uni-view",{staticClass:"comoment-header",style:{boxShadow:"none",margin:"20rpx auto",background:"#f7f7f7",display:"flex",width:"calc(100% - 20rpx)",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{style:{padding:"0 24rpx",color:"#FC6103",background:"#fff",width:"calc(100% - 200rpx)",lineHeight:"60rpx",fontSize:"28rpx",fontWeight:"bold"}},[t._v("评论")]),i("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{width:"180rpx",padding:"0 20rpx",textAlign:"center",background:"#FC6103",display:"flex"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCommentTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cuIcon-add",style:{margin:"0 8rpx 0 0",lineHeight:"60rpx",fontSize:"24rpx",color:"#fff"}}),i("v-uni-view",{style:{color:"#fff",lineHeight:"60rpx",fontSize:"24rpx"}},[t._v("添加评论")])],1)],1),t._l(t.commentList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item comment-item",style:{width:"calc(100% - 20rpx)",boxShadow:"none",padding:"24rpx",margin:"24rpx auto ",background:"#fff",height:"auto"}},[i("v-uni-view",{style:{width:"100%",display:"flex",height:"auto"}},[e.avatarurl?i("v-uni-image",{style:{width:"60rpx",margin:"0 8rpx 0 0",borderRadius:"100%",display:"block",height:"60rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+e.avatarurl}}):t._e(),i("v-uni-view",{staticClass:"text-grey",style:{color:"#333",lineHeight:"60rpx",fontSize:"28rpx"}},[t._v(t._s(e.nickname))])],1),i("v-uni-view",{staticClass:"text-gray text-content text-df",style:{margin:"8rpx 0",lineHeight:"1.5",fontSize:"28rpx",color:"#9E9E9E"}},[i("v-uni-view",{domProps:{innerHTML:t._s(e.content)}})],1),i("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{lineHeight:"24rpx",fontSize:"20rpx",color:"#999",textAlign:"right"}},[t._v(t._s(e.addtime))]),e.reply?i("v-uni-view",{staticClass:"text-gray text-content text-df",style:{margin:"8rpx 0",lineHeight:"1.5",fontSize:"28rpx",color:"#9E9E9E"}},[t._v("回复:"+t._s(e.reply))]):t._e(),t.user&&t.user.id==e.userid?i("v-uni-view",{staticStyle:{display:"flex","justify-content":"flex-end",padding:"6rpx 0"}},[i("v-uni-view",{staticStyle:{color:"#999","font-size":"16rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delClick(e.id)}}},[t._v("删除")])],1):t._e()],1)}))],2),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{padding:"10rpx 24rpx",alignItems:"center",flexWrap:"wrap",background:"#fff",display:"flex",width:"100%",height:"auto"}},[t.detail.alllimittimes>0?i("v-uni-button",{staticClass:"cu-btn bg-orange round shadow-blur",style:{border:"0",padding:"0 20rpx",margin:"0 20rpx 20rpx",color:"rgb(255, 255, 255)",background:"#FFDB18",width:"auto",fontSize:"28rpx",height:"60rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCartTap.apply(void 0,arguments)}}},[t._v("加入购物车")]):t._e(),t.detail.alllimittimes>0?i("v-uni-button",{style:{border:"0",padding:"0 20rpx",margin:"0 20rpx 20rpx",color:"rgb(255, 255, 255)",background:"#FFDB18",width:"auto",fontSize:"28rpx",height:"60rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onBuyTap.apply(void 0,arguments)}}},[t._v("立即购买")]):t._e(),t.detail.alllimittimes>0?i("v-uni-button",{style:{border:"0",padding:"0 20rpx",margin:"0 20rpx 20rpx",color:"rgb(255, 255, 255)",background:"#FFDB18",width:"auto",fontSize:"28rpx",height:"60rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onJifenTap.apply(void 0,arguments)}}},[t._v("积分兑换")]):t._e(),t.detail.alllimittimes<=0?i("v-uni-button",{style:{border:"0",padding:"0 20rpx",margin:"0 20rpx 20rpx",color:"rgb(255, 255, 255)",background:"#FC6103",width:"auto",fontSize:"28rpx",height:"60rpx"}},[t._v("已售罄")]):t._e()],1)],1)],1)],1)],1)],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},e77f:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("28a5"),i("f559"),i("55dd"),i("96cf");var r=n(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},storeupFlag:0,count:0,timer:null,title:""}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid),this.init();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(n=t.sent,this.user=n.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),r=uni.getStorageSync("discusswenwushangchengCleanType"),r&&(uni.removeStorageSync("discusswenwushangchengCleanType"),this.mescroll.num=1,this.upCallback(this.mescroll),this.init()),a=uni.getStorageSync("crossCleanType"),!a){t.next=17;break}return uni.removeStorageSync("crossCleanType"),t.next=14,this.$api.info("wenwushangcheng",this.id);case 14:n=t.sent,this.detail=n.data,this.title=this.detail.shangpinmingcheng;case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){if(!this.user)return!1;uni.setStorageSync("paytable","wenwushangcheng"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},getStoreup:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.user){t.next=2;break}return t.abrupt("return",!1);case 2:return e={page:1,limit:1,refid:this.id,tablename:"wenwushangcheng",userid:this.user.id,type:1},t.next=5,this.$api.list("storeup",e);case 5:i=t.sent,this.storeupFlag=i.data.list.length;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),shoucang:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.user){t.next=2;break}return t.abrupt("return",!1);case 2:return e=this,i={page:1,limit:1,refid:e.detail.id,tablename:"wenwushangcheng",userid:e.user.id,type:1},t.next=6,e.$api.list("storeup",i);case 6:if(n=t.sent,1!=n.data.list.length){t.next=11;break}return a=n.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=8;break}return e.detail.storeupnum--,t.next=4,e.$api.update("wenwushangcheng",e.detail);case 4:return t.next=6,e.$api.del("storeup",JSON.stringify([a]));case 6:e.$utils.msg("取消成功"),e.getStoreup();case 8:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()}),t.abrupt("return");case 11:uni.showModal({title:"提示",content:"是否收藏",success:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=8;break}return t.next=3,e.$api.add("storeup",{userid:e.user.id,name:e.detail.shangpinmingcheng,picture:e.swiperList[0],refid:e.detail.id,tablename:"wenwushangcheng",type:1});case 3:return e.detail.storeupnum++,t.next=6,e.$api.update("wenwushangcheng",e.detail);case 6:e.$utils.msg("收藏成功"),e.getStoreup();case 8:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()});case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onAcrossTap:function(t,e,i,n,r){if(!this.user)return!1;if(uni.setStorageSync("crossTable","wenwushangcheng"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",i),uni.setStorageSync("statusColumnValue",r),uni.setStorageSync("tips",n),""!=i&&!i.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var s in a)if(s==i&&a[s]==r)return void this.$utils.msg(n)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("wenwushangcheng",this.id);case 3:e=t.sent,this.detail=e.data,this.title=this.detail.shangpinmingcheng,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[],this.detail.shangpinxiangqing=this.detail.shangpinxiangqing.replace(/img src/gi,'img style="width:100%;" src');case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discusswenwushangcheng",{page:e.num,limit:10,refid:this.id});case 2:i=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onCartTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.user){t.next=2;break}return t.abrupt("return",!1);case 2:if(!uni.getStorageSync("cart".concat(this.detail.id).concat(this.user.id))){t.next=5;break}return this.$utils.msg("该商品已添加到购物车"),t.abrupt("return");case 5:return t.next=7,this.$api.add("cart",{tablename:"wenwushangcheng",goodid:this.detail.id,goodname:this.detail.shangpinmingcheng,picture:this.swiperList[0],buynumber:1,userid:this.user.id,price:this.detail.price,discountprice:this.detail.vipprice});case 7:uni.setStorageSync("cart".concat(this.detail.id).concat(this.user.id),!0),this.$utils.msg("添加到购物车成功");case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onBuyTap:function(){if(!this.user)return!1;uni.setStorageSync("orderGoods",[{tablename:"wenwushangcheng",goodid:this.detail.id,goodname:this.detail.shangpinmingcheng,picture:this.swiperList[0],buynumber:1,price:this.detail.price,discountprice:this.detail.vipprice}]),this.$utils.jump("../shop-order-confirm/shop-order-confirm?type=1")},onJifenTap:function(){if(!this.user)return!1;uni.setStorageSync("orderGoods",[{tablename:"wenwushangcheng",goodid:this.detail.id,goodname:this.detail.shangpinmingcheng,picture:this.swiperList[0],buynumber:1,price:this.detail.jf,discountprice:this.detail.vipprice}]),this.$utils.jump("../shop-order-confirm/shop-order-confirm?type=2")},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;t=e.$base.url+t,uni.downloadFile({url:t,success:function(i){200===i.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.user){t.next=2;break}return t.abrupt("return",!1);case 2:return e={page:1,limit:1,status:"已完成",goodid:this.detail.id},t.next=5,this.$api.page("orders",e);case 5:if(i=t.sent,0!=i.data.list.length){t.next=9;break}return this.$utils.msg("请完成订单后再评论"),t.abrupt("return");case 9:this.$utils.jump("../discusswenwushangcheng/add-or-update?refid=".concat(this.id));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),delClick:function(t){var e=this;uni.showModal({title:"提示",content:"是否删除此评论？",success:function(){var i=(0,r.default)(regeneratorRuntime.mark((function i(n){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.confirm){i.next=8;break}return i.next=3,e.$api.del("discusswenwushangcheng",JSON.stringify([t]));case 3:return e.$utils.msg("删除成功"),e.detail.discussnum--,i.next=7,e.$api.update("wenwushangcheng",e.detail);case 7:setTimeout((function(){e.upCallback(e.mescroll)}),1500);case 8:case"end":return i.stop()}}),i)})));function n(t){return i.apply(this,arguments)}return n}()})}}};e.default=a}}]);