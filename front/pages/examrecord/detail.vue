<template>
	<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
		<view class="cu-list menu-avatar" v-for="(item,index) in list" v-bind:key="index" @click="showClick(index)">
			<view class="cu-item" style="height: 180rpx;">
				<view class="content" style="left: 20rpx;">
					<view class="text-grey">试卷：{{item.papername}}</view>
					<view class="text-gray text-sm flex">
						试题：{{item.questionname}}
					</view>
					<view class="text-gray text-sm flex">
						题型：{{item.type==0?'单选':item.type==1?'多选':item.type==2?'判断':item.type==3?'填空':'主观'}}题
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">分数：{{item.score}}</view>
					<view v-if="item.myscore==0" class="cu-tag round bg-grey sm">得分{{item.myscore}}</view>
					<view v-if="item.myscore>0" class="cu-tag round bg-red sm">得分{{item.myscore}}</view>
				</view>
			</view>
			<uni-transition :mode-class="['fade']" :duration="500" style="width: 100%;margin: 10px 0;background: #fff;padding: 16px;box-sizing: border-box;"
				:show="showIndex==index?true:false">
				<view class="text-gray text-sm flex">
					正确答案：{{item.right}}
				</view>
				<view class="text-gray text-sm flex">
					我的答案：{{item.myanswer}}
				</view>
			</uni-transition>
		</view>
	</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm: {},
				CustomBar: '0',
				showIndex: -1
			};
		},
		onShow() {
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
			this.hasNext = true
			this.paperid = options.paperid
			this.userid = options.userid
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		methods: {
			// 显示当前正确答案
			showClick(index){
				if(this.showIndex == index){
					this.showIndex = -1
				}else {
					this.showIndex = index
				}
			},
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let res = await this.$api.list(`examrecord`, {
					page: mescroll.num,
					limit: mescroll.size,
					paperid: this.paperid,
					userid: this.userid
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				let arr = []
				for(let x in res.data.list){
					if(res.data.list[x].type==0||res.data.list[x].type==2){
						arr = JSON.parse(res.data.list[x].options)
						for(let i in arr){
							if(res.data.list[x].answer == arr[i].code){
								res.data.list[x].right = arr[i].text
							}
						}
					}else if(res.data.list[x].type==1){
						arr = JSON.parse(res.data.list[x].options)
						res.data.list[x].answer.split(',').forEach(item=>{
							for(let i in arr){
								if (item == arr[i].code) {
									if (res.data.list[x].right) {
										res.data.list[x].right += ','
										res.data.list[x].right = res.data.list[x].right + arr[i].text
									}else{
										res.data.list[x].right = arr[i].text
									}
								}
							}
						})
					}else if(res.data.list[x].type==3){
						res.data.list[x].right = res.data.list[x].answer
					}else if(res.data.list[x].type==4){
						res.data.list[x].right = '略'
					}
				}
				this.list = this.list.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style>

</style>
