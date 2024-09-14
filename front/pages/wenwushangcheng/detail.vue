
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
												<z-swiper effect="cube" :loop="false" :showIndicators="false" :style='{"width":"100%","background":"#fff","height":"360rpx"}' style="touch-action: none;">
				<z-swiper-item style="touch-action: none;" :style='{"width":"100%","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</z-swiper-item>
			</z-swiper>
						            <view :style='{"padding":"24rpx","margin":"-60rpx 0 0","borderRadius":"60rpx 60rpx 0 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative","height":"auto","zIndex":"999"}' class="detail-content">
				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","flexWrap":"wrap","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto"}' class="detail-list-item price priceFavor">
					<view :style='{"display":"flex"}' class="text">
						<view :style='{"lineHeight":"80rpx","fontSize":"40rpx","color":"red","fontWeight":"bold"}'>￥</view>
						<view :style='{"lineHeight":"80rpx","fontSize":"36rpx","color":"red","fontWeight":"bold"}'>{{detail.price}}</view>
					</view>

					<view :style='{"border":"2rpx solid #FC6103","padding":"0 30rpx","borderRadius":"40rpx","display":"flex","height":"auto"}' v-if="storeupFlag==1" @click="shoucang">
						<text class="icon iconfont icon-shoucang11" :style='{"margin":"0 4rpx 0 0","lineHeight":"60rpx","fontSize":"28rpx","color":"#FC6103"}'></text>
						<text :style='{"color":"#FC6103","lineHeight":"60rpx","fontSize":"28rpx"}'>收藏</text>
					</view>
					<view :style='{"width":"100%","display":"flex","height":"auto"}' v-if="storeupFlag==0" @click="shoucang">
						<text class="icon iconfont icon-shoucang11" :style='{"margin":"0 4rpx 0 0","lineHeight":"60rpx","fontSize":"28rpx","color":"#FC6103"}'></text>
						<text :style='{"color":"#FC6103","lineHeight":"60rpx","fontSize":"28rpx"}'>收藏</text>
					</view>
					
				</view>
				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","flexWrap":"wrap","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto"}' class="detail-list-item price priceFavor">
					<view :style='{"display":"flex"}' class="text">
						<view :style='{"lineHeight":"80rpx","fontSize":"36rpx","color":"red","fontWeight":"bold"}'>{{Number(detail.jf)}}积分</view>
					</view>
				</view>

				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">商品名称：</view>
					<view :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.shangpinmingcheng}}</view>
				</view>

				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>商品编号：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.shangpinbianhao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>商品分类：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.shangpinfenlei}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>规格：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.guige}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>发布时间：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.fabushijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>库存：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.alllimittimes}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>点击次数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.clicknum}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>评论数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.discussnum}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>收藏数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.storeupnum}}</view>
				</view>





				<view class="detail-list-item rich" :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>商品详情</view>
					<view class="rich-text" :style='{"color":"#000","padding":"24rpx 24rpx 24rpx 0","margin":"0"}'>
						<rich-text :nodes="detail.shangpinxiangqing"></rich-text>
					</view>
				</view>


				<view class="time-content" :style='{"width":"100%","margin":"0 0 24rpx 0","background":"#f7f7f7","height":"auto"}'>
					<view class="comoment-header" :style='{"boxShadow":"none","margin":"20rpx auto","background":"#f7f7f7","display":"flex","width":"calc(100% - 20rpx)","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"padding":"0 24rpx","color":"#FC6103","background":"#fff","width":"calc(100% - 200rpx)","lineHeight":"60rpx","fontSize":"28rpx","fontWeight":"bold"}'>评论</view>
						<view :style='{"width":"180rpx","padding":"0 20rpx","textAlign":"center","background":"#FC6103","display":"flex"}' @click="onCommentTap" class="btn-comment-content" style="display: flex;align-items: center;">
							<view :style='{"margin":"0 8rpx 0 0","lineHeight":"60rpx","fontSize":"24rpx","color":"#fff"}' class="cuIcon-add"></view>
							<view :style='{"color":"#fff","lineHeight":"60rpx","fontSize":"24rpx"}'>添加评论</view>
						</view>
					</view>
				
					<view :style='{"width":"calc(100% - 20rpx)","boxShadow":"none","padding":"24rpx","margin":"24rpx auto ","background":"#fff","height":"auto"}' v-for="(item,index) in commentList" v-bind:key="index" class="cu-item comment-item">
						<view :style='{"width":"100%","display":"flex","height":"auto"}'>
							<image :style='{"width":"60rpx","margin":"0 8rpx 0 0","borderRadius":"100%","display":"block","height":"60rpx"}' v-if="item.avatarurl" mode="aspectFill" :src="baseUrl+item.avatarurl"></image>
							<view :style='{"color":"#333","lineHeight":"60rpx","fontSize":"28rpx"}' class="text-grey">{{item.nickname}}</view>
						</view>
						<view :style='{"margin":"8rpx 0","lineHeight":"1.5","fontSize":"28rpx","color":"#9E9E9E"}' class="text-gray text-content text-df">
							<view v-html="item.content"></view>
						</view>
						<view :style='{"lineHeight":"24rpx","fontSize":"20rpx","color":"#999","textAlign":"right"}' class="margin-top-sm text-gray text-df">{{item.addtime}}</view>
						<view v-if="item.reply" :style='{"margin":"8rpx 0","lineHeight":"1.5","fontSize":"28rpx","color":"#9E9E9E"}' class="text-gray text-content text-df">
							回复:{{item.reply}}
						</view>
						<view style="display: flex;display: flex;justify-content: flex-end;padding: 6rpx 0;" v-if="user&&user.id==item.userid">
							<view style="color: #999;font-size: 16rpx;" @click="delClick(item.id)">删除</view>
						</view>
					</view>
				</view>

				<view class="bottom-content bg-white tabbar border shop" :style='{"padding":"10rpx 24rpx","alignItems":"center","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 20rpx 20rpx","color":"rgb(255, 255, 255)","background":"#FFDB18","width":"auto","fontSize":"28rpx","height":"60rpx"}' v-if="detail.alllimittimes>0" @tap="onCartTap" class="cu-btn bg-orange round shadow-blur" >加入购物车</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 20rpx 20rpx","color":"rgb(255, 255, 255)","background":"#FFDB18","width":"auto","fontSize":"28rpx","height":"60rpx"}' v-if="detail.alllimittimes>0" @tap="onBuyTap">立即购买</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 20rpx 20rpx","color":"rgb(255, 255, 255)","background":"#FFDB18","width":"auto","fontSize":"28rpx","height":"60rpx"}' v-if="detail.alllimittimes>0" @tap="onJifenTap">积分兑换</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 20rpx 20rpx","color":"rgb(255, 255, 255)","background":"#FC6103","width":"auto","fontSize":"28rpx","height":"60rpx"}' v-if="detail.alllimittimes<=0">已售罄</button>
					
				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				storeupFlag: 0,
				count: 0,
				timer: null,
				title:'',
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			// #ifdef APP-PLUS
			let page = getCurrentPages()
			this.href = this.baseUrl + 'front/h5/#/' + page[page.length - 1].route
			// #endif
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
		// #ifdef MP-WEIXIN
		onShareAppMessage(){
			var obj = {
				title: this.title,
				imageUrl: this.swiperList[0]?this.baseUrl + this.swiperList[0]: ''
			}
			return obj
		},
		// #endif
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getStoreup();
			let cleanType = uni.getStorageSync('discusswenwushangchengCleanType')
			if(cleanType){
				uni.removeStorageSync('discusswenwushangchengCleanType')
				this.mescroll.num = 1
				this.upCallback(this.mescroll)
				this.init();
			}
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('wenwushangcheng', this.id);
                this.detail = res.data;
				this.title = this.detail.shangpinmingcheng
            }
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				if(!this.user){
					return false
				}
				uni.setStorageSync('paytable','wenwushangcheng');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				if(!this.user){
					return false
				}
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'wenwushangcheng',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				if(!this.user){
					return false
				}
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'wenwushangcheng',
					userid: _this.user.id,
					type: 1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								_this.detail.storeupnum--
								await _this.$api.update('wenwushangcheng',_this.detail)
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.shangpinmingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'wenwushangcheng',
                                type: 1
							});
							_this.detail.storeupnum++
							await _this.$api.update('wenwushangcheng',_this.detail)
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				if(!this.user){
					return false
				}
				uni.setStorageSync('crossTable','wenwushangcheng');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('wenwushangcheng', this.id);
				this.detail = res.data;

				this.title = this.detail.shangpinmingcheng
				// 轮播图片
				this.swiperList = this.detail.tupian ? this.detail.tupian.split(",") : [];
				

				//修改富文本的图片样式
				this.detail.shangpinxiangqing = this.detail.shangpinxiangqing.replace(/img src/gi,"img style=\"width:100%;\" src");
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
                let res = await this.$api.list('discusswenwushangcheng', {
					page: mescroll.num,
					limit: 10,
					refid: this.id
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.commentList = [];
				this.commentList = this.commentList.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },

            async onCartTap() {
				if(!this.user){
					return false
				}
				if (uni.getStorageSync(`cart${this.detail.id}${this.user.id}`)) {
					this.$utils.msg('该商品已添加到购物车')
					return
				}
				await this.$api.add('cart', {
					tablename: 'wenwushangcheng',
					goodid: this.detail.id,
					goodname: this.detail.shangpinmingcheng,
					picture: this.swiperList[0],
					buynumber: 1,
					userid: this.user.id,
					price: this.detail.price,
					discountprice: this.detail.vipprice
				});
				uni.setStorageSync(`cart${this.detail.id}${this.user.id}`, true);
				this.$utils.msg('添加到购物车成功')
			},
            onBuyTap() {
				if(!this.user){
					return false
				}
				uni.setStorageSync('orderGoods', [{
					tablename: 'wenwushangcheng',
					goodid: this.detail.id,
					goodname: this.detail.shangpinmingcheng,
					picture: this.swiperList[0],
					buynumber: 1,
					price: this.detail.price,
					discountprice: this.detail.vipprice
				}])
				this.$utils.jump('../shop-order-confirm/shop-order-confirm?type=1');
			},


			// 积分兑换
			onJifenTap(){
				if(!this.user){
					return false
				}
				uni.setStorageSync('orderGoods', [{
					tablename: 'wenwushangcheng',
					goodid: this.detail.id,
					goodname: this.detail.shangpinmingcheng,
					picture: this.swiperList[0],
					buynumber: 1,
					price: this.detail.jf,
					discountprice: this.detail.vipprice
				}])
				this.$utils.jump('../shop-order-confirm/shop-order-confirm?type=2');
			},
			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
				if(!this.user){
					return false
				}
                let params = {
                    page: 1,
                    limit: 1,
					status: '已完成',
					goodid: this.detail.id
                }
                let res = await this.$api.page('orders', params);
                if (res.data.list.length == 0) {
                this.$utils.msg('请完成订单后再评论');
					return;
				}
				this.$utils.jump(`../discusswenwushangcheng/add-or-update?refid=${this.id}`)
			},
			delClick(id){
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否删除此评论？',
					async success(res) {
						if(res.confirm){
							await that.$api.del('discusswenwushangcheng',JSON.stringify([id]))
							that.$utils.msg('删除成功')
							that.detail.discussnum--
							await that.$api.update('wenwushangcheng',that.detail)
							setTimeout(()=>{
								that.upCallback(that.mescroll)
							},1500)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
	  --animate-duration: 1s;
	  --animate-delay: 1s;
	  --animate-repeat: 1;
	}
	
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
	

</style>
