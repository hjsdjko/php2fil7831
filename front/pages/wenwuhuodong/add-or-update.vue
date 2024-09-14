<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
		<form :style='{"width":"100%","padding":"24rpx","background":"#fff","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动标题</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.huodongbiaoti" v-model="ruleForm.huodongbiaoti" placeholder="活动标题"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动分类</view>
				<picker :disabled="ro.huodongfenlei" :style='{"width":"100%","flex":"1","height":"auto"}' @change="huodongfenleiChange" :value="huodongfenleiIndex" :range="huodongfenleiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"24rpx","color":"#4753F2"}' class="uni-input">{{ruleForm.huodongfenlei?ruleForm.huodongfenlei:"请选择活动分类"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="fengmianTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">封面</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.fengmian" :src="baseUrl+ruleForm.fengmian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动地点</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.huodongdidian" v-model="ruleForm.huodongdidian" placeholder="活动地点"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动时间</view>
				<picker :disabled="ro.huodongshijian" :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.huodongshijian" @change="huodongshijianChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"24rpx","color":"#4753F2"}' class="uni-input">{{ruleForm.huodongshijian?ruleForm.huodongshijian:"请选择活动时间"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">发布时间</view>
				<picker :disabled="ro.fabushijian" :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.fabushijian" @change="fabushijianChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"24rpx","color":"#4753F2"}' class="uni-input">{{ruleForm.fabushijian?ruleForm.fabushijian:"请选择发布时间"}}</view>
				</picker>
			</view>
 

			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-around","height":"auto"}' class="">
				<view :style='{"width":"140rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right","fontWeight":"500"}' class="title">活动详情</view>
                <xia-editor ref="editor" :style='{"minHeight":"300rpx","border":"2rpx solid #efefef","width":"calc(100% - 200rpx)","padding":"20rpx","height":"auto"}' v-model="ruleForm.huodongxiangqing" placeholder="活动详情" @editorChange="huodongxiangqingChange"></xia-editor>
			</view>
			
			<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0 0 20rpx","color":"rgb(255, 255, 255)","borderRadius":"60rpx","background":"#FC6103","width":"80%","lineHeight":"80rpx","fontSize":"36rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="clicktimeConfirm" ref="clicktime" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				huodongbiaoti: '',
				huodongfenlei: '',
				fengmian: '',
				huodongdidian: '',
				huodongshijian: '',
				fabushijian: '',
				huodongxiangqing: '',
				storeupnum: '',
				},
				huodongfenleiOptions: [],
				huodongfenleiIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   huodongbiaoti : false,
                   huodongfenlei : false,
                   fengmian : false,
                   huodongdidian : false,
                   huodongshijian : false,
                   fabushijian : false,
                   huodongxiangqing : false,
                   clicktime : false,
                   clicknum : false,
                   storeupnum : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect,
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.huodongshijian = this.$utils.getCurDate();
            this.ruleForm.fabushijian = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下拉框
			res = await this.$api.option(`huodongfenlei`,`huodongfenlei`,{});
			this.huodongfenleiOptions = res.data;
            this.huodongfenleiOptions.unshift("请选择活动分类");

			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`wenwuhuodong`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='huodongbiaoti'){
					this.ruleForm.huodongbiaoti = obj[o];
					this.ro.huodongbiaoti = true;
					continue;
					}
					if(o=='huodongfenlei'){
					this.ruleForm.huodongfenlei = obj[o];
					this.ro.huodongfenlei = true;
					continue;
					}
					if(o=='fengmian'){
					this.ruleForm.fengmian = obj[o].split(",")[0];
					this.ro.fengmian = true;
					continue;
					}
					if(o=='huodongdidian'){
					this.ruleForm.huodongdidian = obj[o];
					this.ro.huodongdidian = true;
					continue;
					}
					if(o=='huodongshijian'){
					this.ruleForm.huodongshijian = obj[o];
					this.ro.huodongshijian = true;
					continue;
					}
					if(o=='fabushijian'){
					this.ruleForm.fabushijian = obj[o];
					this.ro.fabushijian = true;
					continue;
					}
					if(o=='huodongxiangqing'){
					this.ruleForm.huodongxiangqing = obj[o];
					this.ro.huodongxiangqing = true;
					continue;
					}
					if(o=='clicktime'){
					this.ruleForm.clicktime = obj[o];
					this.ro.clicktime = true;
					continue;
					}
					if(o=='clicknum'){
					this.ruleForm.clicknum = obj[o];
					this.ro.clicknum = true;
					continue;
					}
					if(o=='storeupnum'){
					this.ruleForm.storeupnum = obj[o];
					this.ro.storeupnum = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            huodongxiangqingChange(e) {
                this.ruleForm.huodongxiangqing = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			huodongshijianChange(e) {
				this.ruleForm.huodongshijian = e.target.value;
				this.$forceUpdate();
			},
			fabushijianChange(e) {
				this.ruleForm.fabushijian = e.target.value;
				this.$forceUpdate();
			},

			// 日长控件选择日期时间
			clicktimeConfirm(val) {
				console.log(val)
				this.ruleForm.clicktime = val.result;
				this.$forceUpdate();
			},

			// 下拉变化
			huodongfenleiChange(e) {
				this.huodongfenleiIndex = e.target.value
				this.ruleForm.huodongfenlei = this.huodongfenleiOptions[this.huodongfenleiIndex]
			},

			fengmianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.fengmian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {




















//跨表计算判断
				var obj;
				if(this.ruleForm.clicknum&&(!this.$validate.isIntNumer(this.ruleForm.clicknum))){
					this.$utils.msg(`点击次数应输入整数`);
					return
				}
				if(this.ruleForm.storeupnum&&(!this.$validate.isIntNumer(this.ruleForm.storeupnum))){
					this.$utils.msg(`收藏数应输入整数`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
                    uni.setStorageSync('crossCleanType',true);
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`wenwuhuodong`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`wenwuhuodong`, this.ruleForm);
						}else{
							await this.$api.add(`wenwuhuodong`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`wenwuhuodong`, this.ruleForm);
					}else{
						await this.$api.add(`wenwuhuodong`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				if(this.ro[str]){
					return false
				}
				this.$refs[str].show();
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
