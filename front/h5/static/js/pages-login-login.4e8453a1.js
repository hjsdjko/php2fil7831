(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"1c6f":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"box",style:{padding:"0 40rpx 24rpx",alignItems:"flex-end",background:"url(http://codegen.caihongy.cn/20231130/9d6cdaa3f00542fd86911cbface57689.png)",display:"flex",width:"100%",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",justifyContent:"center",height:"100%"}},[n("v-uni-view",{style:{padding:"80rpx 0 ",borderRadius:"30rpx",flexWrap:"wrap",background:"#fff",display:"flex",width:"100%",position:"relative",height:"auto"}},[n("v-uni-image",{style:{width:"160rpx",margin:"0 auto 24rpx auto",borderRadius:"8rpx",display:"none",height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg",mode:"aspectFill"}}),1==t.loginType?n("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"85%",margin:"0 auto 40rpx",display:"flex",height:"auto",order:"1"}},[n("v-uni-input",{staticClass:"uni-input",style:{border:"none",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"0",flex:"1",background:"#F5F8F9",fontSize:"28rpx",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1):t._e(),1==t.loginType?n("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"85%",margin:"0 auto 40rpx",display:"flex",height:"auto",order:"1"}},[n("v-uni-input",{staticClass:"uni-input",style:{border:"none",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"0",flex:"1",background:"#F5F8F9",fontSize:"28rpx",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1):t._e(),1==t.loginType?n("v-uni-view",{staticClass:"code",style:{width:"85%",margin:"0 auto 24rpx",background:"#F5F8F9",display:"flex",height:"auto",order:"2"}},[n("v-uni-input",{style:{border:"none",padding:"0 24rpx",margin:"0",color:"rgb(0, 0, 0)",flex:"1",background:"none",fontSize:"28rpx",height:"88rpx"},attrs:{type:"text",placeholder:"请输入验证码"},model:{value:t.inputCode,callback:function(e){t.inputCode=e},expression:"inputCode"}}),n("v-uni-view",{staticClass:"getCodeBt",style:{border:"none",padding:"0px",margin:"8rpx 4rpx 8rpx 0",alignItems:"center",background:"rgb(255, 255, 255)",display:"flex",width:"168rpx",justifyContent:"center",height:"72rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.randomString(4)}}},t._l(t.codes,(function(e,i){return n("v-uni-view",{key:i,style:{color:e.color,transform:e.rotate,fontSize:e.size,padding:"0 3px",display:"inline-block"}},[t._v(t._s(e.num))])})),1)],1):t._e(),t.roleNum>1?n("v-uni-view",{style:{padding:"0 20rpx",margin:"0 auto 24rpx",background:"#F5F8F9",display:"flex",width:"85%",height:"auto",order:"3"}},[n("v-uni-picker",{style:{lineHeight:"88rpx",fontSize:"28rpx",textDecoration:"underline",color:"#FC6103"},attrs:{value:t.index,range:t.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.optionsChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-picker-type"},[t._v(t._s(t.options[t.index]))])],1)],1):t._e(),1==t.loginType?n("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0px",margin:"0 auto 24rpx",color:"rgb(255, 255, 255)",borderRadius:"6rpx",background:"#FC6103",width:"85%",lineHeight:"88rpx",fontSize:"36rpx",height:"88rpx",order:"5"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoginTap.apply(void 0,arguments)}}},[t._v("登陆")]):t._e(),2==t.loginType?n("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0px",margin:"0 auto 24rpx",color:"rgb(255, 255, 255)",borderRadius:"6rpx",background:"#FC6103",width:"85%",lineHeight:"88rpx",fontSize:"36rpx",height:"88rpx",order:"5"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onFaceLoginTap.apply(void 0,arguments)}}},[t._v("人脸识别登录")]):t._e(),n("v-uni-view",{staticClass:"links",style:{width:"100%",margin:"0 auto 24rpx",flexWrap:"wrap",display:"flex",height:"auto",order:"4"}},[n("v-uni-view",{staticClass:"link-highlight",style:{width:"calc(100% / 3)",padding:"0 8rpx",fontSize:"24rpx",lineHeight:"60rpx",color:"#9e9e9e",textAlign:"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRegisterTap("yonghu")}}},[t._v("注册用户")]),n("v-uni-view",{style:{width:"calc(100% / 3)",padding:"0 8rpx",fontSize:"24rpx",lineHeight:"60rpx",color:"#9e9e9e",textAlign:"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onForgetTap.apply(void 0,arguments)}}},[t._v("忘记密码？")])],1),n("v-uni-view",{staticClass:"idea1",style:{width:"100%",background:"red",display:"none",height:"80rpx"}},[t._v("idea1")]),n("v-uni-view",{staticClass:"idea2",style:{width:"100%",background:"red",display:"none",height:"80rpx"}},[t._v("idea2")]),n("v-uni-view",{staticClass:"idea3",style:{width:"100%",background:"red",display:"none",height:"80rpx"}},[t._v("idea3")])],1)],1)],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},3285:function(t,e,n){"use strict";n.r(e);var i=n("6263"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},3552:function(t,e,n){var i=n("4feb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("0ece2d11",i,!0,{sourceMap:!1,shadowMode:!1})},"3c8a":function(t,e,n){"use strict";var i=n("3552"),r=n.n(i);r.a},"4feb":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-43adfe22]{height:100%}.content[data-v-43adfe22]{height:100%;box-sizing:border-box}',""]),t.exports=e},6263:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("3b8d")),a=i(n("2971")),o={data:function(){return{username:"",password:"",loginType:1,codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],inputCode:"",validateCode:"",index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],e=a.default.list();this.menuList=e;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(t.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.randomString(4),this.styleChange()},onShow:function(){},mounted:function(){},methods:{randomString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],i=["28","30","32","34","36"];this.validateCode="";for(var r=0;r<t;r++){var a=Math.floor(Math.random()*e.length);this.codes[r].num=e[a],this.validateCode=this.validateCode+e[a];for(var o="#",s=0;s<6;s++){var u=Math.floor(Math.random()*n.length);o+=n[u]}this.codes[r].color=o;var d=Math.floor(30*Math.random()),p=Math.floor(2*Math.random());1==p&&(d="-"+d),this.codes[r].rotate="rotate("+d+"deg)";var l=Math.floor(Math.random()*i.length);this.codes[r].size=i[l]+"rpx"}},styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){uni.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.username){t.next=3;break}return this.$utils.msg("请输入用户名"),t.abrupt("return");case 3:if(this.password){t.next=6;break}return this.$utils.msg("请输入用户密码"),t.abrupt("return");case 6:if(this.optionsValues[this.index]){t.next=9;break}return this.$utils.msg("请选择登录用户类型"),t.abrupt("return");case 9:if(e=JSON.parse(JSON.stringify(this.inputCode)).toLowerCase(),n=JSON.parse(JSON.stringify(this.validateCode)).toLowerCase(),e==n){t.next=14;break}return this.$utils.msg("请输入正确的验证码"),t.abrupt("return");case 14:this.loginPost();case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loginPost:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 2:return e=t.sent,uni.removeStorageSync("useridTag"),uni.setStorageSync("token",e.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),t.next=9,this.$api.session("".concat(this.optionsValues[this.index]));case 9:e=t.sent,e.data.touxiang?uni.setStorageSync("headportrait",e.data.touxiang):e.data.headportrait&&uni.setStorageSync("headportrait",e.data.headportrait),uni.setStorageSync("userid",e.data.id),e.data.vip&&uni.setStorageSync("vip",e.data.vip),uni.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value}}};e.default=o},a86a:function(t,e,n){"use strict";n.r(e);var i=n("1c6f"),r=n("3285");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("3c8a");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"43adfe22",null,!1,i["a"],o);e["default"]=u.exports}}]);