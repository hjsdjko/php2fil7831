<template>
	<div class="addEdit-block" :style='{"padding":"30px","fontSize":"16px","color":"#666","background":"none"}'>
		<el-form
			:style='{"border":"1px solid rgba(255,255,255,1)","padding":"30px","borderColor":"#fceaee","alignItems":"flex-start","borderRadius":"20px","flexWrap":"wrap","background":"rgba(255,255,255,1)","borderWidth":"6px","display":"flex","fontSize":"inherit","borderStyle":"double"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="150px"
		>
			<template >
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'" label="参观编号" prop="canguanbianhao">
					<el-input v-model="ruleForm.canguanbianhao" placeholder="参观编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-else-if="ruleForm.canguanbianhao" label="参观编号" prop="canguanbianhao">
					<el-input v-model="ruleForm.canguanbianhao" placeholder="参观编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="文物名称" prop="wenwumingcheng">
					<el-input  v-model="ruleForm.wenwumingcheng" placeholder="文物名称" clearable  :readonly="ro.wenwumingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="文物名称" prop="wenwumingcheng">
					<el-input v-model="ruleForm.wenwumingcheng" placeholder="文物名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="文物类别" prop="wenwuleibie">
					<el-input  v-model="ruleForm.wenwuleibie" placeholder="文物类别" clearable  :readonly="ro.wenwuleibie"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="文物类别" prop="wenwuleibie">
					<el-input v-model="ruleForm.wenwuleibie" placeholder="文物类别" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="upload" v-if="type!='info' && !ro.tupian" label="图片" prop="tupian">
					<file-upload
						tip="点击上传图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.tupian?ruleForm.tupian:''"
						@change="tupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="upload" v-else-if="ruleForm.tupian" label="图片" prop="tupian">
					<img v-if="ruleForm.tupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.tupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="地点" prop="didian">
					<el-input  v-model="ruleForm.didian" placeholder="地点" clearable  :readonly="ro.didian"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="地点" prop="didian">
					<el-input v-model="ruleForm.didian" placeholder="地点" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="积分" prop="jf">
					<el-input type="number" v-model.number="ruleForm.jf" placeholder="积分" clearable  :readonly="ro.jf"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="积分" prop="jf">
					<el-input v-model="ruleForm.jf" placeholder="积分" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="date" v-if="type!='info'" label="打卡时间" prop="dakashijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.dakashijian" 
						type="datetime"
						:readonly="ro.dakashijian"
						placeholder="打卡时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-else-if="ruleForm.dakashijian" label="打卡时间" prop="dakashijian">
					<el-input v-model="ruleForm.dakashijian" placeholder="打卡时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input  v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="姓名" prop="xingming">
					<el-input  v-model="ruleForm.xingming" placeholder="姓名" clearable  :readonly="ro.xingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="姓名" prop="xingming">
					<el-input v-model="ruleForm.xingming" placeholder="姓名" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="type!='info'"  label="感受分享" prop="ganshoufenxiang">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.ganshoufenxiang" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else-if="ruleForm.ganshoufenxiang" label="感受分享" prop="ganshoufenxiang">
                    <span :style='{"fontSize":"16px","lineHeight":"40px","color":"inherit","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.ganshoufenxiang"></span>
                </el-form-item>
			<el-form-item :style='{"padding":"0","margin":"30px 0","alignItems":"center","textAlign":"center","display":"flex","width":"100%","fontSize":"48px"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"color":"inherit","margin":"0 2px","fontSize":"18px"}'></span>
					确定
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"color":"inherit","margin":"0 2px","fontSize":"18px"}'></span>
					中止
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"color":"inherit","margin":"0 2px","fontSize":"18px"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
            uObject: null,
			type: '',
			
			
			ro:{
				canguanbianhao : false,
				wenwumingcheng : false,
				wenwuleibie : false,
				tupian : false,
				didian : false,
				jf : false,
				dakashijian : false,
				yonghuzhanghao : false,
				xingming : false,
				ganshoufenxiang : false,
			},
			
			
			ruleForm: {
				canguanbianhao: this.getUUID(),
				wenwumingcheng: '',
				wenwuleibie: '',
				tupian: '',
				didian: '',
				jf: '50',
				dakashijian: '',
				yonghuzhanghao: '',
				xingming: '',
				ganshoufenxiang: '',
			},
		

			
			rules: {
				canguanbianhao: [
				],
				wenwumingcheng: [
				],
				wenwuleibie: [
				],
				tupian: [
				],
				didian: [
				],
				jf: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				dakashijian: [
				],
				yonghuzhanghao: [
				],
				xingming: [
				],
				ganshoufenxiang: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
		this.ruleForm.dakashijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='canguanbianhao'){
							this.ruleForm.canguanbianhao = obj[o];
							this.ro.canguanbianhao = true;
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
							this.ruleForm.tupian = obj[o];
							this.ro.tupian = true;
							continue;
						}
						if(o=='didian'){
							this.ruleForm.didian = obj[o];
							this.ro.didian = true;
							continue;
						}
						if(o=='jf'){
							this.ruleForm.jf = obj[o];
							this.ro.jf = true;
							continue;
						}
						if(o=='dakashijian'){
							this.ruleForm.dakashijian = obj[o];
							this.ro.dakashijian = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='xingming'){
							this.ruleForm.xingming = obj[o];
							this.ro.xingming = true;
							continue;
						}
						if(o=='ganshoufenxiang'){
							this.ruleForm.ganshoufenxiang = obj[o];
							this.ro.ganshoufenxiang = true;
							continue;
						}
				}
				






				this.ruleForm.jf='50'




			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
                    this.uObject = data.data;
					if(((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
						this.ro.yonghuzhanghao = true;
					}
					if(((json.xingming!=''&&json.xingming) || json.xingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.xingming = json.xingming
						this.ro.xingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `wenwuzhilv/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.ganshoufenxiang = this.ruleForm.ganshoufenxiang.replace(reg,'../../../php2fil7831/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
		if(this.ruleForm.canguanbianhao) {
			this.ruleForm.canguanbianhao = String(this.ruleForm.canguanbianhao)
		}




	if(this.ruleForm.tupian!=null) {
		this.ruleForm.tupian = this.ruleForm.tupian.replace(new RegExp(this.$base.url,"g"),"");
	}







var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "wenwuzhilv/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `wenwuzhilv/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
                         if(this.uObject.jf>=0){
                             this.uObject.jf = parseFloat(this.uObject.jf) + parseFloat(this.ruleForm.jf)
                             this.$http({url: `${this.$storage.get('sessionTable')}/update`,method: "post",data: this.uObject}).then(res => {});
                         }
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.wenwuzhilvCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `wenwuzhilv/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
                  if(this.uObject.jf>=0){
                      this.uObject.jf = parseFloat(this.uObject.jf) + parseFloat(this.ruleForm.jf)
                      this.$http({url: `${this.$storage.get('sessionTable')}/update`,method: "post",data: this.uObject}).then(res => {});
                  }
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.wenwuzhilvCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.wenwuzhilvCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    tupianUploadChange(fileUrls) {
	    this.ruleForm.tupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: inherit;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #fceaee;
	  	  border-radius: 30px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,208,218,.3) 100%, rgba(244,100,130,1) 100%);
	  	  width: 400px;
	  	  font-size: 16px;
	  	  height: 44px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #fceaee;
	  	  border-radius: 30px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,208,218,.3) 100%, rgba(244,100,130,1) 100%);
	  	  width: 200px;
	  	  font-size: 16px;
	  	  height: 44px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #fceaee;
	  	  border-radius: 30px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,208,218,.3) 100%, rgba(244,100,130,1) 100%);
	  	  width: 200px;
	  	  font-size: 16px;
	  	  height: 44px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px solid #fceaee;
	  	  cursor: pointer;
	  	  border-radius: 30px;
	  	  color: inherit;
	  	  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,208,218,.3) 100%, rgba(244,100,130,1) 100%);
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #fceaee;
	  	  cursor: pointer;
	  	  border-radius: 30px;
	  	  color: inherit;
	  	  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,208,218,.3) 100%, rgba(244,100,130,1) 100%);
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #fceaee;
	  	  cursor: pointer;
	  	  border-radius: 30px;
	  	  color: inherit;
	  	  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,208,218,.3) 100%, rgba(244,100,130,1) 100%);
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #fceaee;
	  	  border-radius: 30px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,208,218,.3) 100%, rgba(244,100,130,1) 100%);
	  	  width: 500px;
	  	  font-size: 16px;
	  	  height: 140px;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				padding: 0 20px;
				margin: 0px 4px;
				color: #fff;
				display: inline-block;
				font-size: 16px;
				line-height: 24px;
				border-radius: 4px;
				outline: none;
				background: radial-gradient(circle, rgba(254,184,197,1) 0%, rgba(244,111,139,1) 100%);
				width: auto;
				height: 40px;
			}
	
	.add-update-preview .btn .btn1:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: radial-gradient(circle, rgba(254,184,197,1) 0%, rgba(244,111,139,1) 100%);
				width: auto;
				font-size: 16px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn2:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: radial-gradient(circle, rgba(254,184,197,1) 0%, rgba(244,111,139,1) 100%);
				width: auto;
				font-size: 16px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn3:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: radial-gradient(circle, rgba(254,184,197,1) 0%, rgba(244,111,139,1) 100%);
				width: auto;
				font-size: 16px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn4:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn5 {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: radial-gradient(circle, rgba(254,184,197,1) 0%, rgba(244,111,139,1) 100%);
				width: auto;
				font-size: 16px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn5:hover {
				opacity: 0.8;
			}
</style>
