<template>
	<view class="content">
		<view :style='{"width":"100%","padding":"0 0 ","margin":"0 0 200rpx","position":"relative","background":"#f7f7f7","height":"100%"}'>
			<view v-if="user" :style='{"padding":"0 24rpx","margin":"20rpx auto","borderRadius":"90rpx","background":"#FC6103","display":"flex","width":"calc(100% - 60rpx)","position":"relative","height":"44rpx"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignContent":"center","border":"2rpx solid #fff","padding":"160rpx 120rpx 80rpx 20rpx","alignItems":"center","flexWrap":"wrap","background":"#F6F6F8","borderWidth":"0 40rpx 20rpx","display":"flex","width":"100%","position":"relative","height":"auto"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"padding":"0","margin":"0","borderRadius":"20rpx","top":"80rpx","width":"100rpx","position":"absolute","right":"10rpx","height":"100rpx","order":"3"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"flex":"1","flexDirection":"column","display":"flex","width":"240rpx","position":"static","justifyContent":"center","order":"2"}' class="info">
						<view :style='{"color":"#000","top":"200rpx","width":"auto","lineHeight":"36rpx","fontSize":"24rpx","position":"absolute","right":"20rpx"}'>{{user.yonghuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
					
					<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"center","display":"flex","order":"1","height":"auto"}' class="info">
						<view :style='{"width":"50%","lineHeight":"36rpx","fontSize":"24rpx","color":"#8E8E8E"}' v-if="user.money">余额：{{user.money}}</view>
						<view :style='{"width":"50%","lineHeight":"36rpx","fontSize":"24rpx","color":"#8E8E8E"}' v-if="user.jf||user.jf==0">积分：{{user.jf}}</view>
					</view>
				</view>
				<view :style='{"padding":"0 60rpx","alignItems":"center","top":"0","left":"24rpx","background":"linear-gradient(180deg, #FC6103 0%, rgba(255,255,255,0) 100%)","display":"flex","width":"calc(100% - 48rpx)","position":"absolute","height":"50rpx","zIndex":"999"}' class="setting">
					<text class="icon iconfont icon-qita6" :style='{"border":"0","margin":"90rpx 8rpx 0 0","color":"#000","borderRadius":"0","width":"auto","lineHeight":"64rpx","fontSize":"36rpx"}'></text>
					<text :style='{"margin":"90rpx 0 0","lineHeight":"2","fontSize":"28rpx","color":"#000"}'>设置</text>
				</view>
			</view>
			
			<view v-else :style='{"padding":"0 24rpx","margin":"20rpx auto","borderRadius":"90rpx","background":"#FC6103","display":"flex","width":"calc(100% - 60rpx)","position":"relative","height":"44rpx"}' @tap="loginClick" class="header" v-bind:class="{'status':isH5Plus}">
				<view style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;font-size: 18px;color: #666">登录/注册</view>
			</view>
			
			<view :style='{"width":"100%","margin":"240rpx 0 0","background":"none","height":"auto"}' class="list">
				<view :style='{"width":"calc(100% - 60rpx)","padding":"20rpx","margin":"0 auto 20rpx","background":"#fff","height":"auto"}'>
					<view :style='{"padding":"0 0","alignItems":"center","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"border":"2rpx solid #FC6103","color":"#FC6103","borderRadius":"0 0 8rpx 8rpx","borderWidth":"0 0 10rpx","fontSize":"28rpx","lineHeight":"60rpx","fontWeight":"bold"}'>我的订单</view>
						<view :style='{"color":"#616161","fontSize":"24rpx","lineHeight":"40rpx"}' @tap="onPageTap('../shop-order/shop-order')">查看全部</view>
					</view>
					<view :style='{"width":"100%","padding":"20rpx 0","margin":"12rpx 0","background":"#FFE6D7","display":"flex","height":"auto"}'>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=未支付')">
							<span class="icon iconfont icon-quxiao03" :style='{"color":"#000","lineHeight":"1","fontSize":"36rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">未支付</view>
						</view>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已支付')">
							<span class="icon iconfont icon-tijiao04" :style='{"color":"#000","lineHeight":"1","fontSize":"36rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已支付</view>
						</view>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已完成')">
							<span class="icon iconfont icon-yanziwancheng" :style='{"color":"#000","lineHeight":"1","fontSize":"36rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已完成</view>
						</view>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已取消')">
							<span class="icon iconfont icon-quxiao09" :style='{"color":"#000","lineHeight":"1","fontSize":"36rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已取消</view>
						</view>
						<view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已退款')">
							<span class="icon iconfont icon-gonggao16" :style='{"color":"#000","lineHeight":"1","fontSize":"36rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已退款</view>
						</view>
						<!-- <view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已发货')">
							<span class="icon iconfont icon-fahuo16" :style='{"color":"#000","lineHeight":"1","fontSize":"36rpx"}'></span>
							<view :style='{"color":"#000","lineHeight":"2","fontSize":"24rpx"}' class="title">已发货</view>
						</view> -->
					</view>
				</view>
				
				<view :style='{"width":"calc(100% - 60rpx)","padding":"20rpx","margin":"0 auto","background":"#fff","height":"auto"}'>
					<view :style='{"width":"100%","padding":"0 20rpx","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"border":"2rpx solid #FC6103","color":"#FC6103","borderRadius":"0 0 8rpx 8rpx","borderWidth":"0 0 10rpx","fontSize":"28rpx","lineHeight":"40rpx","fontWeight":"bold"}'>我的服务</view>
					</view>
					<view :style='{"width":"100%","padding":"0 0","flexWrap":"wrap","display":"flex","height":"auto"}'>
					
						<block v-for="item in menuList" v-bind:key="item.roleName">
							<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
								<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
									<view :style='{"padding":"8rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","flexDirection":"column","display":"flex","width":"25%","borderStyle":"solid","height":"auto"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
										<view :style='{"width":"auto","lineHeight":"1.5","fontSize":"60rpx","color":"#CAC34C"}' :class="child.appFrontIcon"></view>
										<view :style='{"width":"auto","padding":"0 20rpx","lineHeight":"1","fontSize":"24rpx","color":"#333"}' class="text">{{child.menu}}</view>
										<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
									</view>
								</block>
							</block>
						</block>
						
						<view @tap="onPageTap('../shop-recharge/pay-confirm')" :style='{"padding":"8rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","flexDirection":"column","display":"flex","width":"25%","borderStyle":"solid","height":"auto"}' class="li" hover-class="hover">
							<view :style='{"width":"auto","lineHeight":"1.5","fontSize":"60rpx","color":"#CAC34C"}' class="cuIcon-moneybag"></view>
							<view class="text" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"1","fontSize":"24rpx","color":"#333"}'>用户充值</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
						<view @tap="onPageTap('../chat/chat')" :style='{"padding":"8rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","flexDirection":"column","display":"flex","width":"25%","borderStyle":"solid","height":"auto"}' class="li" hover-class="hover">
							<view :style='{"width":"auto","lineHeight":"1.5","fontSize":"60rpx","color":"#CAC34C"}' class="cuIcon-service"></view>
							<view class="text" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"1","fontSize":"24rpx","color":"#333"}'>在线客服</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
						<view @tap="onPageTap('../shop-cart/shop-cart')" :style='{"padding":"8rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","flexDirection":"column","display":"flex","width":"25%","borderStyle":"solid","height":"auto"}' class="li" hover-class="hover">
							<view :style='{"width":"auto","lineHeight":"1.5","fontSize":"60rpx","color":"#CAC34C"}' class="cuIcon-cart"></view>
							<view class="text" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"1","fontSize":"24rpx","color":"#333"}'>购物车</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 推荐 -->
			<view class="recommend" :style='{"padding":"20rpx","margin":"20rpx auto","flexWrap":"wrap","background":"#fff","display":"flex","width":"calc(100% - 60rpx)","height":"auto"}' v-if="recommendList.length">
				<view :style='{"border":"2rpx solid #FC6103","padding":"0 0","color":"#FC6103","borderRadius":"0 0 8rpx 8rpx","background":"none","borderWidth":"0 0 10rpx","width":"auto","lineHeight":"60rpx","fontSize":"28rpx","fontWeight":"bold"}'>为你推荐</view>
				<view :style='{"padding":"0 20rpx 20rpx","flexWrap":"wrap","background":"#f7f7f7","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
					<view v-for="(item,index) in recommendList" :key="index" :style='{"width":"48%","margin":"20rpx 0 0 0","overflow":"hidden","borderRadius":"10rpx","background":"#fff","height":"auto"}' @click="recommendDetail(item.id)">
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"200rpx"}' :src="item[recommendPicture]?(baseUrl + item[recommendPicture].split(',')[0]):''"></image>
						<view :style='{"padding":"0 8rpx","lineHeight":"2","fontSize":"28rpx","color":"#000","textAlign":"center"}'>{{item[recommendTitle]}}</view>
						<view :style='{"padding":"0 8rpx","lineHeight":"2","fontSize":"24rpx","color":"#000","textAlign":"center"}'>{{item.addtime}}</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 80px"></view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
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
				recommendList: [],
				recommendTable: '',
				recommendTitle: '',
				recommendPicture: '',
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.getThumbsup()
			this.getStoreup()
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
			this.getRecommendList()
		},
		methods: {
			async getThumbsup(){
				if(!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 21})
				this.user.thumbsnum = Number(res.data.total)
				this.$forceUpdate()
			},
			async getStoreup(){
				if(!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 1})
				this.user.storenum = Number(res.data.total)
				this.$forceUpdate()
			},
			loginClick(){
				uni.navigateTo({
					url: '../login/login'
				});
			},
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			},
			async getRecommendList(){
				let params = {
					page: 1,
					limit: 4
				}
				let res;
				res = await this.$api.recommend('wenwujieshao', params);
				console.log(res.data)
				this.recommendList = res.data.list
				this.recommendTable = 'wenwujieshao'
				this.recommendTitle = 'wenwumingcheng'
				this.recommendPicture = 'tupian'
				this.$forceUpdate()
			},
			recommendDetail(id) {
				uni.navigateTo({
					url: `../${this.recommendTable}/detail?id=${id}`,
					fail: function() {
						uni.switchTab({
							url: `../${this.recommendTable}/detail?id=${id}`
						});
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>
