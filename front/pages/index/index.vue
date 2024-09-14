<template>
<view class="content">
	<view :style='{"width":"100%","position":"relative","flexWrap":"wrap","background":"#F7F7F7","display":"flex","height":"100%"}'>
		<swiper :style='{"width":"100%","margin":"0 0 40rpx","background":"#fff","height":"360rpx"}' class="swiper" :indicator-dots='true' :autoplay='true' :circular='true' indicator-active-color='#ff6600' indicator-color='rgba(255, 255, 255, 0.5)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"100%","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"width":"100%","padding":"0 8rpx","lineHeight":"60rpx","fontSize":"28rpx","color":"#333","background":"#fff"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"0","margin":"0 auto 20rpx","borderRadius":"20rpx","flexWrap":"wrap","background":"#fff","display":"flex","width":"calc(100% - 40rpx)","justifyContent":"space-between","height":"auto","order":"1"}'>
            <block v-for="(item,index1) in menuList" v-bind:key="item.roleName">
                <block v-if="index1==0" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"23%","padding":"12rpx 0","margin":"10rpx 0","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#fff","borderRadius":"100%","textAlign":"center","background":"linear-gradient(180deg, #FC6103 0%, #FFB56E 100%)","display":"block","width":"80rpx","lineHeight":"80rpx","fontSize":"52rpx","height":"80rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		<!-- 关于我们 -->
		<view :style='{"padding":"0 0","margin":"0 auto","flexWrap":"wrap","background":"#F7F7F7","display":"flex","width":"calc(100% - 40rpx)","height":"auto","order":"5"}'>
			<view :style='{"border":"2rpx solid #FC6103","padding":"12rpx 20rpx 0","margin":"0 0 16rpx","color":"#FC6103","borderRadius":"0 0 6rpx 6rpx","textAlign":"center","borderWidth":"0 0 10rpx","width":"auto","lineHeight":"1.5","fontSize":"32rpx","fontWeight":"bold"}'>{{aboutUsDetail.title}}</view>
			<view :style='{"margin":"0 0 20rpx","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"32rpx"}'>{{aboutUsDetail.subtitle}}</view>
			<view :style='{"width":"100%","padding":"24rpx","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}'>
				<img :style='{"margin":"0 0","objectFit":"cover","borderRadius":"10rpx","flex":1,"display":"block","width":"100%","height":"300rpx"}' v-if="aboutUsDetail.picture1" :src="baseUrl+aboutUsDetail.picture1">
				<img :style='{"margin":"0 10rpx","objectFit":"cover","flex":1,"display":"none","height":"160rpx"}' v-if="aboutUsDetail.picture2" :src="baseUrl+aboutUsDetail.picture2"">
				<img :style='{"margin":"0 10rpx","objectFit":"cover","flex":1,"display":"none","height":"160rpx"}' v-if="aboutUsDetail.picture3" :src="baseUrl+aboutUsDetail.picture3"">
			</view>
			<view :style='{"padding":"0 24rpx","margin":"0 0 20rpx 0","color":"#000","background":"#fff","width":"100%","lineHeight":"2","fontSize":"28rpx"}' v-html="aboutUsDetail.content"></view>
			<view :style='{"border":"0","padding":"0 30rpx","margin":"0 auto","textAlign":"center","background":"#409EFF","display":"none","width":"auto","lineHeight":"56rpx"}'>
			  <text :style='{"color":"#f5f5f5","fontSize":"24rpx"}'>更多</text>
			  <text class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"24rpx"}'></text>
			</view>
			<view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
			<view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 系统简介 -->
		<view :style='{"padding":"0 0 20rpx","margin":"0 auto 0","flexWrap":"wrap","background":"#F7F7F7","display":"flex","width":"calc(100% - 40rpx)","height":"auto","order":"6"}'>
			<view :style='{"border":"2rpx solid #FC6103","padding":"12rpx 20rpx 0","margin":"0 0 12rpx","color":"#FC6103","borderRadius":"0 0 6rpx 6rpx","textAlign":"center","borderWidth":"0 0 10rpx","width":"auto","lineHeight":"1.5","fontSize":"32rpx","fontWeight":"bold","order":"1"}'>{{systemIntroductionDetail.title}}</view>
			<view :style='{"margin":"0 0 20rpx","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"32rpx"}'>{{systemIntroductionDetail.subtitle}}</view>
			<view :style='{"padding":"20rpx 10rpx 40rpx","flexWrap":"wrap","background":"#fff","flexDirection":"column","display":"flex","width":"100%","height":"360rpx","order":"3"}'>
				<img :style='{"width":"40%","margin":"0 10rpx 0 0","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"300rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
				<img :style='{"width":"calc(60% - 20rpx)","margin":"0 10rpx","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"140rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
				<img :style='{"width":"calc(60% - 20rpx)","margin":"20rpx 10rpx 0","objectFit":"cover","borderRadius":"10rpx","display":"block","height":"140rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
			</view>
			<view :style='{"border":"12rpx solid #fff","padding":"20rpx","margin":"0","color":"#000","borderRadius":"0","background":"#F7F7F7","width":"100%","lineHeight":"2","fontSize":"28rpx","order":"2"}' v-html="systemIntroductionDetail.content"></view>
			<view :style='{"border":"0","padding":"0 30rpx","margin":"0 auto","textAlign":"center","background":"#409EFF","display":"none","width":"auto","lineHeight":"56rpx"}'>
			  <text :style='{"color":"#f5f5f5","fontSize":"24rpx"}'>更多</text>
			  <text class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"24rpx"}'></text>
			</view>
			<view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
			<view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>
		
		<!-- 商品推荐 -->
		<view class="listBox recommend" :style='{"width":"calc(100% - 40rpx)","padding":"0 0","margin":"0 auto","background":"#fff","order":"2"}'>
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"100%","padding":"0px 20rpx 20rpx","margin":"0 0","background":"#F7F7F7","display":"flex"}'>
				<view :style='{"border":"2rpx solid #FC6103","padding":"12rpx 0 0","color":"#FC6103","borderRadius":"0 0 6rpx 6rpx","borderWidth":"0 0 10rpx","fontSize":"32rpx","lineHeight":"68rpx","fontWeight":"bold"}'>文物介绍推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			
			
			
			  
			
			
			  
			
			<!-- 样式9 -->
			<view class="list-box style4 style9" :style='{"width":"100%","padding":"24rpx","margin":"0","height":"auto"}'>
				<view v-if="wenwujieshaolist.length > 0" @tap="onDetailTap('wenwujieshao',wenwujieshaolist[0].id)" class="box box1" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwujieshaolist[0].tupian.substring(0,4)=='http'" :src="wenwujieshaolist[0].tupian"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwujieshaolist[0].tupian?baseUrl+wenwujieshaolist[0].tupian.split(',')[0]:''"></image>
					<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
						<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwujieshaolist[0].wenwumingcheng}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx 8rpx","order":"6"}'>
						  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[0].addtime}}</text>
						</view>
						<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"3"}'>
						  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[0].storeupnum}}</text>
						</view>
						<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"4"}'>
						  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[0].clicknum}}</text>
						</view>
					</view>
				</view>
				<view class="list-item" :style='{"width":"100%","padding":"0","margin":"0 0 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view v-if="wenwujieshaolist.length > 1" @tap="onDetailTap('wenwujieshao',wenwujieshaolist[1].id)" class="box box2" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"672rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwujieshaolist[1].tupian.substring(0,4)=='http'" :src="wenwujieshaolist[1].tupian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"672rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwujieshaolist[1].tupian?baseUrl+wenwujieshaolist[1].tupian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwujieshaolist[1].wenwumingcheng}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[1].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[1].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[1].clicknum}}</text>
							</view>
						</view>
					</view>
					<view class="list-item-body" :style='{"width":"48%","padding":"0","margin":"0","height":"auto"}'>
						<view v-if="wenwujieshaolist.length > 2" @tap="onDetailTap('wenwujieshao',wenwujieshaolist[2].id)" class="box box3" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwujieshaolist[2].tupian.substring(0,4)=='http'" :src="wenwujieshaolist[2].tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwujieshaolist[2].tupian?baseUrl+wenwujieshaolist[2].tupian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwujieshaolist[2].wenwumingcheng}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[2].addtime}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[2].storeupnum}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[2].clicknum}}</text>
								</view>
							</view>
						</view>
						<view v-if="wenwujieshaolist.length > 3" @tap="onDetailTap('wenwujieshao',wenwujieshaolist[3].id)" class="box box4" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"8rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwujieshaolist[3].tupian.substring(0,4)=='http'" :src="wenwujieshaolist[3].tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwujieshaolist[3].tupian?baseUrl+wenwujieshaolist[3].tupian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwujieshaolist[3].wenwumingcheng}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[3].addtime}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[3].storeupnum}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[3].clicknum}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="list-item" :style='{"width":"100%","padding":"0","margin":"0","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view v-if="wenwujieshaolist.length > 4" @tap="onDetailTap('wenwujieshao',wenwujieshaolist[4].id)" class="box box5" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwujieshaolist[4].tupian.substring(0,4)=='http'" :src="wenwujieshaolist[4].tupian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwujieshaolist[4].tupian?baseUrl+wenwujieshaolist[4].tupian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwujieshaolist[4].wenwumingcheng}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[4].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[4].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[4].clicknum}}</text>
							</view>
						</view>
					</view>
					<view v-if="wenwujieshaolist.length > 5" @tap="onDetailTap('wenwujieshao',wenwujieshaolist[5].id)" class="box box6" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwujieshaolist[5].tupian.substring(0,4)=='http'" :src="wenwujieshaolist[5].tupian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwujieshaolist[5].tupian?baseUrl+wenwujieshaolist[5].tupian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwujieshaolist[5].wenwumingcheng}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[5].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[5].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwujieshaolist[5].clicknum}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<view class="listBox recommend" :style='{"width":"calc(100% - 40rpx)","padding":"0 0","margin":"0 auto","background":"#fff","order":"2"}'>
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"100%","padding":"0px 20rpx 20rpx","margin":"0 0","background":"#F7F7F7","display":"flex"}'>
				<view :style='{"border":"2rpx solid #FC6103","padding":"12rpx 0 0","color":"#FC6103","borderRadius":"0 0 6rpx 6rpx","borderWidth":"0 0 10rpx","fontSize":"32rpx","lineHeight":"68rpx","fontWeight":"bold"}'>文物活动推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			
			
			
			  
			
			
			  
			
			<!-- 样式9 -->
			<view class="list-box style4 style9" :style='{"width":"100%","padding":"24rpx","margin":"0","height":"auto"}'>
				<view v-if="wenwuhuodonglist.length > 0" @tap="onDetailTap('wenwuhuodong',wenwuhuodonglist[0].id)" class="box box1" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwuhuodonglist[0].fengmian.substring(0,4)=='http'" :src="wenwuhuodonglist[0].fengmian"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwuhuodonglist[0].fengmian?baseUrl+wenwuhuodonglist[0].fengmian.split(',')[0]:''"></image>
					<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
						<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwuhuodonglist[0].huodongbiaoti}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx 8rpx","order":"6"}'>
						  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[0].addtime}}</text>
						</view>
						<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"3"}'>
						  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[0].storeupnum}}</text>
						</view>
						<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"4"}'>
						  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[0].clicknum}}</text>
						</view>
					</view>
				</view>
				<view class="list-item" :style='{"width":"100%","padding":"0","margin":"0 0 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view v-if="wenwuhuodonglist.length > 1" @tap="onDetailTap('wenwuhuodong',wenwuhuodonglist[1].id)" class="box box2" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"672rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwuhuodonglist[1].fengmian.substring(0,4)=='http'" :src="wenwuhuodonglist[1].fengmian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"672rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwuhuodonglist[1].fengmian?baseUrl+wenwuhuodonglist[1].fengmian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwuhuodonglist[1].huodongbiaoti}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[1].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[1].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[1].clicknum}}</text>
							</view>
						</view>
					</view>
					<view class="list-item-body" :style='{"width":"48%","padding":"0","margin":"0","height":"auto"}'>
						<view v-if="wenwuhuodonglist.length > 2" @tap="onDetailTap('wenwuhuodong',wenwuhuodonglist[2].id)" class="box box3" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwuhuodonglist[2].fengmian.substring(0,4)=='http'" :src="wenwuhuodonglist[2].fengmian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwuhuodonglist[2].fengmian?baseUrl+wenwuhuodonglist[2].fengmian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwuhuodonglist[2].huodongbiaoti}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[2].addtime}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[2].storeupnum}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[2].clicknum}}</text>
								</view>
							</view>
						</view>
						<view v-if="wenwuhuodonglist.length > 3" @tap="onDetailTap('wenwuhuodong',wenwuhuodonglist[3].id)" class="box box4" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"8rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwuhuodonglist[3].fengmian.substring(0,4)=='http'" :src="wenwuhuodonglist[3].fengmian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwuhuodonglist[3].fengmian?baseUrl+wenwuhuodonglist[3].fengmian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwuhuodonglist[3].huodongbiaoti}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[3].addtime}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[3].storeupnum}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[3].clicknum}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="list-item" :style='{"width":"100%","padding":"0","margin":"0","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view v-if="wenwuhuodonglist.length > 4" @tap="onDetailTap('wenwuhuodong',wenwuhuodonglist[4].id)" class="box box5" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwuhuodonglist[4].fengmian.substring(0,4)=='http'" :src="wenwuhuodonglist[4].fengmian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwuhuodonglist[4].fengmian?baseUrl+wenwuhuodonglist[4].fengmian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwuhuodonglist[4].huodongbiaoti}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[4].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[4].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[4].clicknum}}</text>
							</view>
						</view>
					</view>
					<view v-if="wenwuhuodonglist.length > 5" @tap="onDetailTap('wenwuhuodong',wenwuhuodonglist[5].id)" class="box box6" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwuhuodonglist[5].fengmian.substring(0,4)=='http'" :src="wenwuhuodonglist[5].fengmian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwuhuodonglist[5].fengmian?baseUrl+wenwuhuodonglist[5].fengmian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwuhuodonglist[5].huodongbiaoti}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[5].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[5].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwuhuodonglist[5].clicknum}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<view class="listBox recommend" :style='{"width":"calc(100% - 40rpx)","padding":"0 0","margin":"0 auto","background":"#fff","order":"2"}'>
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"100%","padding":"0px 20rpx 20rpx","margin":"0 0","background":"#F7F7F7","display":"flex"}'>
				<view :style='{"border":"2rpx solid #FC6103","padding":"12rpx 0 0","color":"#FC6103","borderRadius":"0 0 6rpx 6rpx","borderWidth":"0 0 10rpx","fontSize":"32rpx","lineHeight":"68rpx","fontWeight":"bold"}'>文物商城推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			
			
			
			  
			
			
			  
			
			<!-- 样式9 -->
			<view class="list-box style4 style9" :style='{"width":"100%","padding":"24rpx","margin":"0","height":"auto"}'>
				<view v-if="wenwushangchenglist.length > 0" @tap="onDetailTap('wenwushangcheng',wenwushangchenglist[0].id)" class="box box1" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwushangchenglist[0].tupian.substring(0,4)=='http'" :src="wenwushangchenglist[0].tupian"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwushangchenglist[0].tupian?baseUrl+wenwushangchenglist[0].tupian.split(',')[0]:''"></image>
					<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
						<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwushangchenglist[0].shangpinmingcheng}}</view>
						<view :style='{"width":"100%","padding":"0 20rpx 8rpx","order":"6"}'>
						  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[0].addtime}}</text>
						</view>
						<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"3"}'>
						  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[0].storeupnum}}</text>
						</view>
						<view :style='{"width":"calc(100% / 3)","padding":"0 20rpx","display":"inline-block","order":"4"}'>
						  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
						  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[0].clicknum}}</text>
						</view>
					</view>
				</view>
				<view class="list-item" :style='{"width":"100%","padding":"0","margin":"0 0 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view v-if="wenwushangchenglist.length > 1" @tap="onDetailTap('wenwushangcheng',wenwushangchenglist[1].id)" class="box box2" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"672rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwushangchenglist[1].tupian.substring(0,4)=='http'" :src="wenwushangchenglist[1].tupian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"672rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwushangchenglist[1].tupian?baseUrl+wenwushangchenglist[1].tupian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwushangchenglist[1].shangpinmingcheng}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[1].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[1].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[1].clicknum}}</text>
							</view>
						</view>
					</view>
					<view class="list-item-body" :style='{"width":"48%","padding":"0","margin":"0","height":"auto"}'>
						<view v-if="wenwushangchenglist.length > 2" @tap="onDetailTap('wenwushangcheng',wenwushangchenglist[2].id)" class="box box3" :style='{"padding":"0","margin":"0 0 20rpx","overflow":"hidden","borderRadius":"10rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwushangchenglist[2].tupian.substring(0,4)=='http'" :src="wenwushangchenglist[2].tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwushangchenglist[2].tupian?baseUrl+wenwushangchenglist[2].tupian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwushangchenglist[2].shangpinmingcheng}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[2].addtime}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[2].storeupnum}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[2].clicknum}}</text>
								</view>
							</view>
						</view>
						<view v-if="wenwushangchenglist.length > 3" @tap="onDetailTap('wenwushangcheng',wenwushangchenglist[3].id)" class="box box4" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"8rpx","width":"100%","position":"relative","height":"auto"}'>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwushangchenglist[3].tupian.substring(0,4)=='http'" :src="wenwushangchenglist[3].tupian"></image>
							<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwushangchenglist[3].tupian?baseUrl+wenwushangchenglist[3].tupian.split(',')[0]:''"></image>
							<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
								<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwushangchenglist[3].shangpinmingcheng}}</view>
								<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
								  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[3].addtime}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
								  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[3].storeupnum}}</text>
								</view>
								<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
								  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
								  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[3].clicknum}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="list-item" :style='{"width":"100%","padding":"0","margin":"0","justifyContent":"space-between","display":"flex","height":"auto"}'>
					<view v-if="wenwushangchenglist.length > 4" @tap="onDetailTap('wenwushangcheng',wenwushangchenglist[4].id)" class="box box5" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwushangchenglist[4].tupian.substring(0,4)=='http'" :src="wenwushangchenglist[4].tupian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwushangchenglist[4].tupian?baseUrl+wenwushangchenglist[4].tupian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwushangchenglist[4].shangpinmingcheng}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[4].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[4].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[4].clicknum}}</text>
							</view>
						</view>
					</view>
					<view v-if="wenwushangchenglist.length > 5" @tap="onDetailTap('wenwushangcheng',wenwushangchenglist[5].id)" class="box box6" :style='{"padding":"0","margin":"0","overflow":"hidden","borderRadius":"10rpx","width":"48%","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="wenwushangchenglist[5].tupian.substring(0,4)=='http'" :src="wenwushangchenglist[5].tupian"></image>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="wenwushangchenglist[5].tupian?baseUrl+wenwushangchenglist[5].tupian.split(',')[0]:''"></image>
						<view :style='{"left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.3)","display":"flex","width":"100%","position":"absolute"}'>
							<view :style='{"padding":"0 20rpx","color":"#fff","width":"100%","lineHeight":"2","fontSize":"32rpx","fontWeight":"bold","order":"1"}' class="title ">{{wenwushangchenglist[5].shangpinmingcheng}}</view>
							<view :style='{"width":"100%","padding":"0 20rpx 6rpx","order":"6"}'>
							  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[5].addtime}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"3"}'>
							  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[5].storeupnum}}</text>
							</view>
							<view :style='{"width":"50%","padding":"0 20rpx 8rpx","display":"inline-block","order":"4"}'>
							  <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#fff"}'></text>
							  <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"20rpx"}'>{{wenwushangchenglist[5].clicknum}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 商品推荐 -->
		
		<!-- 商品列表 -->
		<!-- 商品列表 -->
		
		<!-- 新闻资讯 -->
		<view class="listBox news" :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","background":"#fff","order":"4"}'>
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"100%","padding":"0 20rpx 20rpx","margin":"0","background":"#F7F7F7","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"border":"2rpx solid #FC6103","padding":"12rpx 0 0","color":"#FC6103","borderRadius":"0 0 6rpx 6rpx","borderWidth":"0 0 10rpx","fontSize":"32rpx","lineHeight":"68rpx","fontWeight":"bold"}'>公告信息</view>
				<view :style='{"alignItems":"center","justifyContent":"center","display":"flex"}' @tap="onPageTap('news')">
				  <text :style='{"color":"#FC6103","fontSize":"28rpx"}'>更多</text>
				  <text class="icon iconfont icon-gengduo1" :style='{"color":"#FC6103","fontSize":"28rpx"}'></text>
				</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  
			
			
		  <!-- 样式4 -->
		  
		  <!-- 样式5 -->
		  
		  <!-- 样式6 -->
		  <view class="news-box3" :style='{"width":"100%","padding":"24rpx","margin":"0","height":"auto"}'>
			<view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"padding":"8rpx 20rpx 8rpx 40rpx","margin":"0 0 20rpx","borderColor":"#FC6103","backgroundColor":"#F7F7F7","borderRadius":"10rpx","flexWrap":"wrap","borderWidth":"0 0 0 2rpx","display":"flex","width":"100%","position":"relative","borderStyle":"solid","height":"auto"}'>
			  <view :style='{"padding":"0","boxShadow":"4rpx 0 2rpx 0px #625D5A","margin":"-8rpx 0 0 0","backgroundColor":"#FC6103","top":"50%","left":"16rpx","width":"8rpx","position":"absolute","height":"16rpx"}' class="dian"></view>
			  <view :style='{"padding":"0 20rpx","whiteSpace":"nowrap","overflow":"hidden","color":"#000","width":"100%","lineHeight":"1.5","fontSize":"28rpx","textOverflow":"ellipsis","fontWeight":"bold","order":"1"}' class="title ">{{item.title}}</view>
			  <view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#9e9e9e","width":"100%","lineHeight":"2","fontSize":"26rpx","textOverflow":"ellipsis","order":"2"}' class="text">{{item.introduction}}</view>
			  <view :style='{"width":"50%","padding":"0 20rpx ","order":"6"}'>
			    <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#9e9e9e"}'></text>
			    <text :style='{"color":"#9e9e9e","lineHeight":"1.5","fontSize":"20rpx"}'>{{item.addtime}}</text>
			  </view>
			  <view :style='{"width":"50%","padding":"0 20rpx","order":"9"}'>
			    <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#9e9e9e"}'></text>
			    <text :style='{"color":"#9e9e9e","lineHeight":"1.5","fontSize":"20rpx"}'>{{item.name}}</text>
			  </view>
			  <view :style='{"width":"calc(100% / 3)","padding":"0 20rpx 4rpx","display":"inline-block","order":"3"}'>
			    <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#9e9e9e"}'></text>
			    <text :style='{"color":"#9e9e9e","lineHeight":"1.5","fontSize":"20rpx"}'>{{item.thumbsupnum}}</text>
			  </view>
			  <view :style='{"width":"calc(100% / 3)","padding":"0 20rpx 4rpx","display":"inline-block","order":"4"}'>
			    <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#9e9e9e"}'></text>
			    <text :style='{"color":"#9e9e9e","lineHeight":"1.5","fontSize":"20rpx"}'>{{item.storeupnum}}</text>
			  </view>
			  <view :style='{"width":"calc(100% / 3)","padding":"0 20rpx 4rpx","display":"inline-block","order":"5"}'>
			    <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#9e9e9e"}'></text>
			    <text :style='{"color":"#9e9e9e","lineHeight":"1.5","fontSize":"20rpx"}'>{{item.clicknum}}</text>
			  </view>
			  <view class="cuIcon-right" :style='{"padding":"0","margin":"-36rpx 0 0 0","top":"50%","color":"#666","display":"none","width":"32rpx","lineHeight":"72rpx","fontSize":"32rpx","position":"absolute","right":"0"}'></view>
			</view>
		  </view>
		  
		  <!-- 样式7 -->
		  
		  <!-- 样式8 -->
		  
		  <!-- 样式9 -->

			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 新闻资讯 -->

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                aboutUsDetail: {},
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				wenwujieshaolist: [],
				wenwuhuodonglist: [],
				wenwushangchenglist: [],
				news: [],





























































































			}
		},
		watch: {




























































































		},
		mounted() {




























































































		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},





























































































		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(key==0) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.list('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name,
						url: item.url
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			

            this.getAboutUs();
            this.getSystemIntroduction();

			// 推荐信息
			// 推荐信息
			// 推荐信息
			this.getRecommendList()
			this.getHomeList()
			this.getNewsList()
		},

		methods: {




























































































			uGetRect(selector, all) {
				return new Promise(resolve => {
					uni.createSelectorQuery()
					.in(this)
					[all ? 'selectAll' : 'select'](selector)
					.boundingClientRect(rect => {
						if (all && Array.isArray(rect) && rect.length) {
							resolve(rect);
						}
						if (!all && rect) {
							resolve(rect);
						}
					})
					.exec();
				});
			},
			cloneData(data) {
				return JSON.parse(JSON.stringify(data));
			},
			newsTabClick2(index){
				this.newsIndex2 = index
				this.getNewsList()
			},
			async getNewsList(){
				let res;
				let params = {
					page: 1,
					limit: 6,
					sort: 'id',
					order: 'desc',
				}
				// 公告信息
				res = await this.$api.list('news', params)
				this.news = res.data.list
				
				
			},
			homeTabClick2(index,name){
				this['home' + name + 'Index2'] = index
				this.getHomeList()
			},
			async getHomeList(){
				let res;
				let params;
			},
			recommendTabClick2(index,name){
				this[name + 'Index2'] = index
				this.getRecommendList()
			},
			async getRecommendList(){
				let res;
				let params;
				// 推荐信息
				params = {
					page: 1,
					limit: 6,
				}
				res = await this.$api.recommend('wenwujieshao', params);
				this.wenwujieshaolist = res.data.list
				

				// 推荐信息
				params = {
					page: 1,
					limit: 6,
				}
				res = await this.$api.recommend('wenwuhuodong', params);
				this.wenwuhuodonglist = res.data.list
				

				// 推荐信息
				params = {
					page: 1,
					limit: 6,
				}
				res = await this.$api.recommend('wenwushangcheng', params);
				this.wenwushangchenglist = res.data.list
				

			},
			//轮播图跳转
			onSwiperTap(e) {
				if(e.url) {
					if (e.url.indexOf('https') != -1) {
						window.open(e.url)
					} else {
						this.$utils.jump(e.url)
					}
				}
			},
            async getAboutUs() {
                let res = await this.$api.info('aboutus', 1)
                this.aboutUsDetail = res.data;
            },
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
            }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}

</style>
