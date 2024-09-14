
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
				<view :style='{"border":"2rpx solid #FC6103","padding":"0 30rpx","borderRadius":"40rpx","display":"flex","height":"auto"}' v-if="storeupFlag==1" @click="shoucang">
					<text class="icon iconfont icon-shoucang11" :style='{"margin":"0 4rpx 0 0","lineHeight":"60rpx","fontSize":"28rpx","color":"#FC6103"}'></text>
					<text :style='{"color":"#FC6103","lineHeight":"60rpx","fontSize":"28rpx"}'>收藏</text>
				</view>
				<view :style='{"width":"100%","display":"flex","height":"auto"}' v-if="storeupFlag==0" @click="shoucang">
					<text class="icon iconfont icon-shoucang11" :style='{"margin":"0 4rpx 0 0","lineHeight":"60rpx","fontSize":"28rpx","color":"#FC6103"}'></text>
					<text :style='{"color":"#FC6103","lineHeight":"60rpx","fontSize":"28rpx"}'>收藏</text>
				</view>

				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">文物名称：</view>
					<view :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.wenwumingcheng}}</view>
				</view>

				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>文物编号：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.wenwubianhao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>文物类别：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.wenwuleibie}}</view>
				</view>
				<view class="detail-list-item audio" :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}'>
					<audio :style='{"width":"100%","height":"80rpx"}' :src="baseUrl+detail.yinpin" controls></audio>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>地点：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.didian}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>年代：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.niandai}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>登记日期：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.dengjiriqi}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>点击次数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.clicknum}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>收藏数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.storeupnum}}</view>
				</view>


				<view class="detail-list-item video" :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<video :style='{"border":"0","width":"100%","margin":"0","outline":"none","borderRadius":"20rpx","display":"block"}' id="myVideo" :src="baseUrl+detail.shipin" controls></video>
				</view>

				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#D8D8D8","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>简介</view>
					<view class="text" :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.jianjie}}</view>
				</view>


				<view class="detail-list-item rich" :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>文物详情</view>
					<view class="rich-text" :style='{"color":"#000","padding":"24rpx 24rpx 24rpx 0","margin":"0"}'>
						<rich-text :nodes="detail.wenwuxiangqing"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"padding":"10rpx 24rpx","alignItems":"center","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 20rpx 20rpx","color":"rgb(255, 255, 255)","background":"#FC6103","width":"auto","fontSize":"28rpx","height":"60rpx"}' v-if="userid&&isAuth('wenwujieshao','签到')" @tap="onAcrossTap('wenwuzhilv','','','')" class="cu-btn bg-brown round shadow-blur" >签到</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 20rpx 20rpx","color":"rgb(255, 255, 255)","background":"#FC6103","width":"auto","fontSize":"28rpx","height":"60rpx"}' v-if="!userid&&isAuthFront('wenwujieshao','签到')" @tap="onAcrossTap('wenwuzhilv','','','')" class="cu-btn bg-brown round shadow-blur" >签到</button>
					
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
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('wenwujieshao', this.id);
                this.detail = res.data;
				this.title = this.detail.wenwumingcheng
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
				uni.setStorageSync('paytable','wenwujieshao');
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
					tablename : 'wenwujieshao',
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
					tablename : 'wenwujieshao',
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
								await _this.$api.update('wenwujieshao',_this.detail)
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
								name: _this.detail.wenwumingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'wenwujieshao',
                                type: 1
							});
							_this.detail.storeupnum++
							await _this.$api.update('wenwujieshao',_this.detail)
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
				uni.setStorageSync('crossTable','wenwujieshao');
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
				let res = await this.$api.info('wenwujieshao', this.id);
				this.detail = res.data;

				this.title = this.detail.wenwumingcheng
				// 轮播图片
				this.swiperList = this.detail.tupian ? this.detail.tupian.split(",") : [];
				

				//修改富文本的图片样式
				this.detail.wenwuxiangqing = this.detail.wenwuxiangqing.replace(/img src/gi,"img style=\"width:100%;\" src");
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
				mescroll.endSuccess(mescroll.size, this.hasNext);

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
