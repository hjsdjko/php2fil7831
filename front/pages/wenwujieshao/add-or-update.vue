<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
		<form :style='{"width":"100%","padding":"24rpx","background":"#fff","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">文物编号</view>
				<view :style='{"padding":"0px 24rpx","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)","flex":"1"}' class="right-input">
					{{ruleForm.wenwubianhao}}
				</view>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">文物名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.wenwumingcheng" v-model="ruleForm.wenwumingcheng" placeholder="文物名称"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">文物类别</view>
				<picker :disabled="ro.wenwuleibie" :style='{"width":"100%","flex":"1","height":"auto"}' @change="wenwuleibieChange" :value="wenwuleibieIndex" :range="wenwuleibieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"24rpx","color":"#4753F2"}' class="uni-input">{{ruleForm.wenwuleibie?ruleForm.wenwuleibie:"请选择文物类别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">图片</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="shipinTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">视频</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' v-if="ruleForm.shipin"  v-model="baseUrl+ruleForm.shipin" placeholder="视频"></input>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" input" @tap="yinpinTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">音频</view>
				<view class="right-input" :style='{"padding":"0px 24rpx","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)","flex":"1"}'>
					{{ruleForm.yinpin?ruleForm.yinpin:'点击上传音频'}}
				</view>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">地点</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.didian" v-model="ruleForm.didian" placeholder="地点"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">年代</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.niandai" v-model="ruleForm.niandai" placeholder="年代"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">登记日期</view>
				<input :disabled="ro.dengjiriqi" :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' v-model="ruleForm.dengjiriqi" placeholder="登记日期" @tap="toggleTab('dengjiriqi')"></input>
			</view>
 

			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">简介</view>
				<textarea :style='{"border":"0","padding":"24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"300rpx"}' v-model="ruleForm.jianjie" placeholder="简介"></textarea>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0","background":"#f7f7f7","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-around","height":"auto"}' class="">
				<view :style='{"width":"140rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right","fontWeight":"500"}' class="title">文物详情</view>
                <xia-editor ref="editor" :style='{"minHeight":"300rpx","border":"2rpx solid #efefef","width":"calc(100% - 200rpx)","padding":"20rpx","height":"auto"}' v-model="ruleForm.wenwuxiangqing" placeholder="文物详情" @editorChange="wenwuxiangqingChange"></xia-editor>
			</view>
			
			<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0 0 20rpx","color":"rgb(255, 255, 255)","borderRadius":"60rpx","background":"#FC6103","width":"80%","lineHeight":"80rpx","fontSize":"36rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="dengjiriqiConfirm" ref="dengjiriqi" themeColor="#333333"></w-picker>
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
				wenwubianhao: this.getUUID(),
				wenwumingcheng: '',
				wenwuleibie: '',
				tupian: '',
				shipin: '',
				yinpin: '',
				didian: '',
				niandai: '',
				jianjie: '',
				dengjiriqi: '',
				wenwuxiangqing: '',
				storeupnum: '',
				},
				wenwuleibieOptions: [],
				wenwuleibieIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   wenwubianhao : false,
                   wenwumingcheng : false,
                   wenwuleibie : false,
                   tupian : false,
                   shipin : false,
                   yinpin : false,
                   didian : false,
                   niandai : false,
                   jianjie : false,
                   dengjiriqi : false,
                   wenwuxiangqing : false,
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
            this.ruleForm.dengjiriqi = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下拉框
			res = await this.$api.option(`wenwuleibie`,`wenwuleibie`,{});
			this.wenwuleibieOptions = res.data;
            this.wenwuleibieOptions.unshift("请选择文物类别");

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
				res = await this.$api.info(`wenwujieshao`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='wenwubianhao'){
					this.ruleForm.wenwubianhao = obj[o];
					this.ro.wenwubianhao = true;
					continue;
					}
					if(o=='wenwumingcheng'){
					this.ruleForm.wenwumingcheng = obj[o];
					this.ro.wenwumingcheng = true;
					continue;
					}
					if(o=='wenwuleibie'){
					this.ruleForm.wenwuleibie = obj[o];
					this.ro.wenwuleibie = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='shipin'){
					this.ruleForm.shipin = obj[o];
					this.ro.shipin = true;
					continue;
					}
					if(o=='yinpin'){
					this.ruleForm.yinpin = obj[o];
					this.ro.yinpin = true;
					continue;
					}
					if(o=='didian'){
					this.ruleForm.didian = obj[o];
					this.ro.didian = true;
					continue;
					}
					if(o=='niandai'){
					this.ruleForm.niandai = obj[o];
					this.ro.niandai = true;
					continue;
					}
					if(o=='jianjie'){
					this.ruleForm.jianjie = obj[o];
					this.ro.jianjie = true;
					continue;
					}
					if(o=='dengjiriqi'){
					this.ruleForm.dengjiriqi = obj[o];
					this.ro.dengjiriqi = true;
					continue;
					}
					if(o=='wenwuxiangqing'){
					this.ruleForm.wenwuxiangqing = obj[o];
					this.ro.wenwuxiangqing = true;
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
            wenwuxiangqingChange(e) {
                this.ruleForm.wenwuxiangqing = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			dengjiriqiConfirm(val) {
				console.log(val)
				this.ruleForm.dengjiriqi = val.result;
				this.$forceUpdate();
			},
			// 日长控件选择日期时间
			clicktimeConfirm(val) {
				console.log(val)
				this.ruleForm.clicktime = val.result;
				this.$forceUpdate();
			},

			// 下拉变化
			wenwuleibieChange(e) {
				this.wenwuleibieIndex = e.target.value
				this.ruleForm.wenwuleibie = this.wenwuleibieOptions[this.wenwuleibieIndex]
			},

			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
                    _this.baiduAdvancedGeneral(res.file);
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
            async baiduAdvancedGeneral(fileName) {
                let res = await this.$api.baiduIdentify(`wenwujieshao`, 'advancedGeneral', fileName);
                this.ruleForm.wenwumingcheng = res.data.keyword;
                this.ruleForm.wenwuxiangqing = res.data.baike_info.description;
                this.$refs.editor.shibieText(res.data.baike_info.description)
            },
			shipinTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.shipin = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
			yinpinTap () {
				let _this = this;
				this.$api.uploadMedia(function(res) {
					_this.ruleForm.yinpin = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {




























//跨表计算判断
				var obj;
				if((!this.ruleForm.wenwumingcheng)){
					this.$utils.msg(`文物名称不能为空`);
					return
				}
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
					let res = await this.$api.list(`wenwujieshao`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`wenwujieshao`, this.ruleForm);
						}else{
							await this.$api.add(`wenwujieshao`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`wenwujieshao`, this.ruleForm);
					}else{
						await this.$api.add(`wenwujieshao`, this.ruleForm);
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
