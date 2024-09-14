<template>
<view class="content">
	<view class="box" :style='{"padding":"24rpx","background":"url(http://codegen.caihongy.cn/20231130/2412c18dce7a4ddcbc1ded0a0aeddaa0.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"100%"}'>
		<view :style='{"padding":"24rpx 0","borderRadius":"30rpx","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative","height":"auto"}'>
			<image :style='{"width":"160rpx","margin":"0 auto 24rpx auto","borderRadius":"8rpx","display":"none","height":"160rpx"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" mode="aspectFill"></image>
			<view :style='{"width":"85%","margin":"0 auto 24rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","flex":"1","background":"#F5F8F9","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.yonghuzhanghao"  type="text"  class="uni-input" name="" placeholder="用户账号" />
			</view>
			<view :style='{"width":"85%","margin":"0 auto 24rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","flex":"1","background":"#F5F8F9","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"85%","margin":"0 auto 24rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","flex":"1","background":"#F5F8F9","fontSize":"28rpx","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"85%","margin":"0 auto 24rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","flex":"1","background":"#F5F8F9","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.xingming"  type="text"  class="uni-input" name="" placeholder="姓名" />
			</view>
            <view :style='{"width":"85%","margin":"0 auto 24rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<picker :style='{"padding":"0 20rpx","margin":"0 auto 24rpx","background":"#F5F8F9","display":"flex","width":"100%","justifyContent":"flex-start","height":"auto"}' v-if="tableName=='yonghu'"  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view>
						<view :style='{"lineHeight":"88rpx","fontSize":"28rpx","textDecoration":"underline","color":"#FC6103","flex":"1"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
					</view>
				</picker>
			</view>
            <view :style='{"width":"85%","margin":"0 auto 24rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<image :style='{"width":"200rpx","borderRadius":"0","display":"block","height":"200rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"200rpx","borderRadius":"0","display":"block","height":"200rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"width":"85%","margin":"0 auto 24rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","flex":"1","background":"#F5F8F9","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.pquestion"  type="text"  class="uni-input" name="" placeholder="密保问题" />
			</view>
			<view :style='{"width":"85%","margin":"0 auto 24rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","flex":"1","background":"#F5F8F9","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.panswer"  type="text"  class="uni-input" name="" placeholder="密保答案" />
			</view>
			<button :style='{"border":"0","padding":"0px","margin":"0 auto 24rpx","color":"rgb(255, 255, 255)","borderRadius":"8rpx","background":"#FC6103","width":"85%","lineHeight":"88rpx","fontSize":"36rpx","height":"88rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
			
			<view class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea1</view>
			<view class="idea2" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea2</view>
			<view class="idea3" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea3</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
                yonghuxingbieOptions: [],
                yonghuxingbieIndex: 0,
				ruleForm: {
                yonghuzhanghao: '',
                mima: '',
                xingming: '',
                xingbie: '',
                touxiang: '',
                jf: '',
                money: '',
                pquestion: '',
                panswer: '',
				},
				tableName:""
			}
		},
        components: {
            multipleSelect
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='yonghu'){
                this.yonghuxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.yonghuxingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
            yonghutouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`yonghu` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.xingming) && `yonghu` == this.tableName){
					this.$utils.msg(`姓名不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.jf&&(!this.$validate.isNumber(this.ruleForm.jf))){
					this.$utils.msg(`积分应输入数字`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
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
