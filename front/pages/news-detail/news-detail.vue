<template>
	<view :style='{"padding":"20rpx","flexWrap":"wrap","background":"#f7f7f7","display":"flex","width":"100%","position":"relative","height":"100%"}'>
		<view class="title" :style='{"margin":"0","color":"#000","borderRadius":"16rpx 16rpx 0 0","textAlign":"center","background":"#fff","width":"100%","lineHeight":"3","fontSize":"32rpx","fontWeight":"bold","order":"1"}'>{{detail.title}}</view>
		
		<view :style='{"padding":"12rpx","alignItems":"center","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","order":"2"}'>
		  <view :style='{"padding":"0"}'>
		    <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666","display":"none"}'></text>
		    <text :style='{"color":"#000","lineHeight":"1.5","fontSize":"20rpx"}'>发布时间：{{detail.addtime}}</text>
		  </view>
		  <view :style='{"padding":"0"}'>
		    <text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666","display":"none"}'></text>
		    <text :style='{"color":"#000","lineHeight":"1.5","fontSize":"20rpx"}'>{{detail.name}}</text>
		  </view>
		  <view :style='{"padding":"0"}'>
		    <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#000"}'></text>
		    <text :style='{"color":"#000","lineHeight":"1.5","fontSize":"20rpx"}'>{{detail.thumbsupnum}}</text>
		  </view>
		  <view :style='{"padding":"0"}'>
		    <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#000"}'></text>
		    <text :style='{"color":"#000","lineHeight":"1.5","fontSize":"20rpx"}'>{{detail.storeupnum}}</text>
		  </view>
		  <view :style='{"padding":"0"}'>
		    <text class="icon iconfont icon-chakan9" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"20rpx","color":"#000"}'></text>
		    <text :style='{"color":"#000","lineHeight":"1.5","fontSize":"20rpx"}'>{{detail.clicknum}}</text>
		  </view>
		</view>
		
		<view :style='{"padding":" 24rpx","borderRadius":"0 0 16rpx 16rpx","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","order":"5"}'>
		  <view :style='{"border":"2rpx solid #EAEAEA","padding":"0 40rpx","borderRadius":"60rpx","display":"flex"}' @click="likeClick">
		    <text class="icon iconfont" :style='{"margin":"0 4rpx 0 0","lineHeight":"60rpx","fontSize":"28rpx","color":"#3d3d3d"}' :class="likeType?'icon-zan10':'icon-zan10'"></text>
		    <text :style='{"color":"#3d3d3d","lineHeight":"60rpx","fontSize":"28rpx"}'>{{likeType?'已':''}}赞</text>
		  </view>
		  <view :style='{"border":"2rpx solid #EAEAEA","padding":"0 40rpx","borderRadius":"60rpx","display":"flex"}' @click="collectClick">
		    <text class="icon iconfont" :style='{"margin":"0 4rpx 0 0","lineHeight":"60rpx","fontSize":"28rpx","color":"#000"}' :class="collectType?'icon-shoucang10':'icon-shoucang10'"></text>
		    <text :style='{"color":"#000","lineHeight":"60rpx","fontSize":"28rpx"}'>{{collectType?'已':''}}收藏</text>
		  </view>
		</view>
		
		<view class="content" :style='{"width":"100%","padding":"24rpx","background":"#fff","height":"auto","order":"3"}'>
			<rich-text :nodes="detail.content"></rich-text>
		</view>
		
		<div :style='{"padding":"0 24rpx","alignItems":"center","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"4"}'>
		  <div @click="prepDetailClick" :style='{"border":"2rpx solid #909090","lineHeight":"1.5","fontSize":"24rpx","color":"#909090","borderWidth":"0 0 2rpx"}'>上一篇：prev</div>
		  <div @click="nextDetailClick" :style='{"border":"2rpx solid #000","lineHeight":"1.5","fontSize":"24rpx","color":"#000","borderWidth":"0 0 2rpx"}'>下一篇：next</div>
		</div>
		

		<!-- 热门 -->
		<view class="hot" :style='{"width":"100%","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto","order":"7"}'>
		  <view :style='{"border":"2rpx solid #FC6103","padding":"0","margin":"0 auto 12rpx","color":"#FC6103","borderRadius":"0 0 8rpx 8rpx","background":"none","borderWidth":"0 0 10rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"bold"}'>热门信息</view>
		  <view :style='{"padding":"0 20rpx 24rpx","flexWrap":"wrap","background":"#f7f7f7","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <view v-for="(item,index) in hotList" :key="index" :style='{"width":"48%","margin":"20rpx 0 0 0","overflow":"hidden","borderRadius":"10rpx","background":"#fff","height":"auto"}' @click="toDetail(item.id)">
			  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"200rpx"}' mode="aspectFill" :src="baseUrl + item.picture"></image>
		      <view :style='{"padding":"0 8rpx","lineHeight":"2","fontSize":"28rpx","color":"#000","textAlign":"center"}'>{{ item.title }}</view>
		      <view :style='{"padding":"0 8rpx","lineHeight":"2","fontSize":"20rpx","color":"#000","textAlign":"center"}'>{{ item.addtime }}</view>
		    </view>
		  </view>
		</view>
		<!-- 推荐 -->
		<view class="recommend" :style='{"width":"100%","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto","order":"8"}'>
		  <view :style='{"border":"2rpx solid #FC6103","padding":"0 0","margin":"0 auto 12rpx","color":"#FC6103","borderRadius":"0 0 8rpx 8rpx","background":"none","borderWidth":"0 0 10rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"bold"}'>推荐信息</view>
		  <view :style='{"padding":"0 20rpx 24rpx","flexWrap":"wrap","background":"#f7f7f7","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <view v-for="(item,index) in recommendList" :key="index" :style='{"width":"48%","margin":"20rpx 0 0 0","overflow":"hidden","borderRadius":"10rpx","background":"#fff","height":"auto"}' @click="toDetail(item.id)">
		      <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"200rpx"}' mode="aspectFill" :src="baseUrl + item.picture"></image>
			  <view :style='{"padding":"0 8rpx","lineHeight":"2","fontSize":"28rpx","color":"#000","textAlign":"center"}'>{{ item.title }}</view>
		      <view :style='{"padding":"0 8rpx","lineHeight":"2","fontSize":"20rpx","color":"#000","textAlign":"center"}'>{{ item.addtime }}</view>
		    </view>
		  </view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				detail: {},
				id: '',
				likeType: false,
				likeForm: {},
				collectType: false,
				collectForm: {},
				allList: [],
				currentIndex: 0,
				hotList: [],
				recommendList: [],
			}
		},
		async onLoad(options) {
			this.id = options.id;
			this.getInfo()
			
			this.getHotList()
			this.getRecommendList()
		},
		computed:{
			baseUrl() {
				return this.$base.url;
			},
			userid(){
				return uni.getStorageSync('userid')
			}
		},
		methods: {
			async getInfo(){
				let res = await this.$api.info('news', this.id)
				res.data.content = res.data.content.replace(/<img/g,'<img style="width: 100%;"');
				this.detail = res.data;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 100,
				})
				this.getLike()
				this.getCollect()
				res = await this.$api.list('news',{page:1,limit:100,sort:'addtime',order:'desc'})
				for(let x in res.data.list){
					if(res.data.list[x].id == this.id){
						this.currentIndex = Number(x)
						break
					}
				}
				this.allList = res.data.list
				
			},
			// 获取点赞状态
			async getLike() {
				let res = await this.$api.list('storeup', {
					page: 1,
					limit: 1,
					type: 21,
					userid: uni.getStorageSync('userid'),
					refid: this.id,
					tablename: 'news'
				})
				if (res.data.list.length) {
					this.likeType = true
					this.likeForm = res.data.list[0]
				} else {
					this.likeType = false
					this.likeForm = {}
				}
			},
			// 获取热门列表
			async getHotList(){
				let res = await this.$api.recommend('news',{page:1, limit: 4,sort:'addtime',order:'desc'})
				this.hotList = res.data.list;
			},
			// 获取推荐列表	
			async getRecommendList(){
				let res;
				if(uni.getStorageSync("userid")){
					res = await this.$api.recommend2('news',{page:1, limit: 4,sort:'addtime',order:'desc'})
				}else{
					res = await this.$api.recommend('news',{page:1, limit: 4,sort:'addtime',order:'desc'})
				}
				
				this.recommendList = res.data.list;
			},
			// 上一篇
			prepDetailClick(){
				if(this.currentIndex == 0){
					this.$message.error('已经是第一篇了')
					return false
				}
				this.currentIndex--
				this.id = this.allList[this.currentIndex].id
				this.getInfo()
			},
			// 下一篇
			nextDetailClick(){
				if(this.currentIndex == this.allList.length - 1){
					this.$message.error('已经是最后一篇了')
					return false
				}
				this.currentIndex++
				this.id = this.allList[this.currentIndex].id
				this.getInfo()
			},
			toDetail(id){
				this.id = id
				this.getInfo()
			},
			// 获取收藏状态
			async getCollect() {
				let res = await this.$api.list('storeup', {
					page: 1,
					limit: 1,
					type: 1,
					userid: uni.getStorageSync('userid'),
					refid: this.id,
					tablename: 'news'
				})
				if (res.data.list.length) {
					this.collectType = true
					this.collectForm = res.data.list[0]
				} else {
					this.collectType = false
					this.collectForm = {}
				}
			},
			// 点赞按钮
			async likeClick() {
				let that = this
				if (this.likeType) {
					uni.showModal({
						title: '提示',
						content: '是否取消点赞？',
						async success(res) {
							if (res.confirm) {
								await that.$api.del('storeup', JSON.stringify([that.likeForm.id]))
								that.$utils.msg('取消成功')
								that.getLike()
							}
						}
					})
				} else {
					await that.$api.add('storeup', {
						userid: uni.getStorageSync('userid'),
						refid: this.id,
						type: 21,
						name: this.detail.title,
						picture: this.detail.picture,
						tablename: 'news',
					})
					this.$utils.msg('点赞成功')
					this.getLike()
				}
			},
			// 收藏按钮
			async collectClick() {
				let that = this
				if (this.collectType) {
					uni.showModal({
						title: '提示',
						content: '是否取消收藏？',
						async success(res) {
							if (res.confirm) {
								await that.$api.del('storeup', JSON.stringify([that.collectForm.id]))
								that.$utils.msg('取消成功')
								that.getCollect()
							}
						}
					})
				} else {
					await that.$api.add('storeup', {
						userid: uni.getStorageSync('userid'),
						refid: this.id,
						type: 1,
						name: this.detail.title,
						picture: this.detail.picture,
						tablename: 'news',
					})
					this.$utils.msg('收藏成功')
					this.getCollect()
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	page {
		background: #FFFFFF;
	}

	.title {
		text-align: center;
		font-size: 40upx;
		font-weight: bold;
		margin: 20upx;
	}

	.content {
		margin: 40upx;
		font-size: 30upx;
		line-height: 50upx;
		letter-spacing: 5upx;
	}
	.operateView {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;

		.like_box {
			width: 40%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 32rpx;

			.icon {
				font-size: 36rpx;
				padding: 0 6rpx;
			}
		}

		.likeActive {
			color: #f00;
		}
	}
</style>
