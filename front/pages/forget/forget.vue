<template>
	<view class="content">
		<view class="box" :style='{"padding":"24rpx","background":"url(http://codegen.caihongy.cn/20231130/2412c18dce7a4ddcbc1ded0a0aeddaa0.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"100%"}' v-if="type==1">
			<view :style='{"padding":"24rpx","borderRadius":"30rpx","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}'>
				<view class="forget-input" :style='{"width":"85%","margin":"0 auto 24rpx","height":"auto"}'>
					<input v-model="username" :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","background":"#F5F8F9","width":"100%","fontSize":"28rpx","height":"88rpx"}' type="text" placeholder="请输入您的账号" />
				</view>
				<button class="landing" :style='{"border":"0","padding":"0px","margin":"0 auto 24rpx","color":"rgb(255, 255, 255)","borderRadius":"6rpx","background":"#FC6103","width":"85%","lineHeight":"88rpx","fontSize":"36rpx","height":"88rpx"}' @tap="nextClick" type="primary">下一步</button>
			</view>
		</view>
        <view class="box" :style='{"padding":"24rpx","background":"url(http://codegen.caihongy.cn/20231130/2412c18dce7a4ddcbc1ded0a0aeddaa0.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"100%"}' v-if="type==2">
            <view :style='{"padding":"24rpx","borderRadius":"30rpx","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}'>
                <view class="forget-input" :style='{"width":"85%","margin":"0 auto 24rpx","height":"auto"}'>
                    <input v-model="userForm.pquestion"  :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","background":"#F5F8F9","width":"100%","fontSize":"28rpx","height":"88rpx"}' type="text" placeholder="密保问题" disabled="disabled"/>
                </view>
                <view class="forget-input" :style='{"width":"85%","margin":"0 auto 24rpx","height":"auto"}'>
                    <input v-model="panswer1" :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","background":"#F5F8F9","width":"100%","fontSize":"28rpx","height":"88rpx"}' type="text" placeholder="密保答案" />
                </view>
                <button class="landing" :style='{"border":"0","padding":"0px","margin":"0 auto 24rpx","color":"rgb(255, 255, 255)","borderRadius":"6rpx","background":"#FC6103","width":"85%","lineHeight":"88rpx","fontSize":"36rpx","height":"88rpx"}' @tap="confirmClick" type="primary">确定</button>
            </view>
        </view>
        <view class="box" :style='{"padding":"24rpx","background":"url(http://codegen.caihongy.cn/20231130/2412c18dce7a4ddcbc1ded0a0aeddaa0.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"100%"}' v-if="type==3">
            <view :style='{"padding":"24rpx","borderRadius":"30rpx","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}'>
                <view class="forget-input" :style='{"width":"85%","margin":"0 auto 24rpx","height":"auto"}'>
                    <input v-model="password" :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","background":"#F5F8F9","width":"100%","fontSize":"28rpx","height":"88rpx"}' type="password" placeholder="密码" />
                </view>
                <view class="forget-input" :style='{"width":"85%","margin":"0 auto 24rpx","height":"auto"}'>
                    <input v-model="repassword" :style='{"border":"none","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"6rpx","background":"#F5F8F9","width":"100%","fontSize":"28rpx","height":"88rpx"}' type="password" placeholder="确认密码" />
                </view>
                <button class="landing" :style='{"border":"0","padding":"0px","margin":"0 auto 24rpx","color":"rgb(255, 255, 255)","borderRadius":"6rpx","background":"#FC6103","width":"85%","lineHeight":"88rpx","fontSize":"36rpx","height":"88rpx"}' @tap="updateClick" type="primary">修改密码</button>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
                tableName: '',
                type: 1,
                repassword: '',
                password: '',
                panswer1: '',
                userForm: {
                }
			}
		},
		onLoad() {
			this.styleChange()
		},
		methods: {
			async nextClick() {
				if(this.username==undefined) {
					this.$utils.msg('请输入账号')
					return;
                                }
                this.tableName = 'yonghu'
                let res = await this.$api.security(this.tableName,{
                    username: this.username
                })
                if(!res.data) {
                    this.$utils.msg('用户不存在')
                }
                if (res.code == 0) {
                    this.userForm = res.data
                    this.type = 2
                }
			},
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.forget-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.restPwFrom.content.input.backgroundColor
					// })
				})
			},
            confirmClick() {
                if (this.userForm.panswer !== this.panswer1) {
                    this.$utils.msg('密保答案不正确')
                    return false
                }
                this.$utils.msg('验证成功')
                this.password = ''
                setTimeout(() => {
                    this.type = 3
                }, 1000)
            },
            async updateClick() {
                if(!this.password) {
                    this.$utils.msg('密码不能为空')
                    return false
                }
                if (this.password != this.repassword) {
                    this.$utils.msg('两次密码输入不一致')
                    return false
                }
                if(this.userForm.mima) {
                    this.userForm.mima=this.password;
                } else {
                    this.userForm.password=this.password;
                }
                await this.$api.update(this.tableName, this.userForm)
                this.$utils.msg('密码修改成功')
                setTimeout(() => {
                    uni.navigateBack({
            
                    })
                }, 1000)
            },
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
