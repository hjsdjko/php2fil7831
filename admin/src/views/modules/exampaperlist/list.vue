<template>
  <div class="main-content" :style='{"padding":"20px 30px 30px","fontSize":"14px","color":"#666","background":"none","height":"100%"}'>
    <!-- 列表页 -->
    <template v-if="!showFlag">
      <el-form :style='{"padding":"0px 10px 0","margin":"0px","overflow":"hidden","flexWrap":"wrap","background":"none","display":"flex","fontSize":"inherit"}' :inline="true" :model="searchForm" class="center-form-pv">
		<el-row :style='{"width":"100%","margin":"0 0 20px","fontSize":"inherit","textAlign":"CENTER","display":"block","order":"2"}'>
			<div :style='{"margin":"0 10px 0 0","fontSize":"inherit","display":"inline-block"}'>
			  <label :style='{"margin":"0 10px 0 0","color":"inherit","display":"inline-block","lineHeight":"40px","fontSize":"inherit","fontWeight":"500","height":"40px"}' class="item-label">试卷</label>
			  <el-input v-model="searchForm.name" placeholder="试卷名称" clearable></el-input>
			</div>
			<el-button class="search" :style='{"border":"0","cursor":"pointer","padding":"0 24px","outline":"none","color":"#fff","borderRadius":"30px","background":"url(http://codegen.caihongy.cn/20230807/43484e01d1b944d7a58b67f5f67312cc.gif) no-repeat center top / 100% 100%","display":"inline-block","width":"90px","fontSize":"inherit","height":"40px"}' type="success" @click="search()">
				<span class="icon iconfont icon-chakan14" :style='{"margin":"0 2px","fontSize":"0","color":"inherit","height":"40px"}'></span>
				
			</el-button>
		</el-row>
      </el-form>

	<div :style='{"padding":"10px","borderColor":"rgba(252,234,238,1)","borderRadius":"10px","background":"rgba(255,255,255,1)","borderWidth":"6px 3px 2px 3px","width":"100%","borderStyle":"solid"}'>
        <el-table
		  :stripe='true'
		  :style='{"padding":"0","borderColor":"rgba(252,234,238,1)","color":"inherit","borderRadius":"0px","borderWidth":"1px","background":"none","width":"100%","fontSize":"inherit","borderStyle":"solid"}'
          :data="dataList"
          :border='false'
          v-loading="dataListLoading"
          @selection-change="selectionChangeHandler"
          style="width: 100%;"
        >
          <el-table-column :resizable='true' type="selection" header-align="center" align="center" width="50"></el-table-column>
          <el-table-column :resizable='true' :sortable='true' prop="name" header-align="center" align="center" sortable label="试卷">
            <template slot-scope="scope">{{scope.row.name}}</template>
          </el-table-column>
          <el-table-column
		    :resizable='true' :sortable='true'
            prop="time"
            header-align="center"
            align="center"
            sortable
            label="考试时长/分钟"
          >
            <template slot-scope="scope">{{scope.row.time}}</template>
          </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            width="150"
            label="操作"
          >
            <template slot-scope="scope">
			  <el-button class="view" :style='{"cursor":"pointer","padding":"0 0px 0 0px","boxShadow":"inset 0px 0px 0px 0px rgba(244,100,130,.3)","margin":"0 10px 5px 0","borderColor":"rgba(244,111,139,.3)","color":"#555","minWidth":"40px","outline":"none","borderRadius":"0px","background":"rgba(255,255,255,.0)","borderWidth":"0 0 4px","width":"auto","fontSize":"14px","lineHeight":"32px","borderStyle":"double","height":"32px"}' type="success" @click="addOrUpdateHandler(scope.row.id)">
			  	<span class="icon iconfont icon-chakan14" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none","height":"40px"}'></span>
			  	考试
			  </el-button>
            </template>
          </el-table-column>
        </el-table>
	</div>
        <el-pagination
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          :total="totalPage"
          :layout="layouts.join()"
          prev-text="上一页"
          next-text="下一页"
          :hide-on-single-page="false"
          :style='{"border":"1px solid rgba(252,234,238,1)","padding":"6px 0","margin":"20px auto 0","whiteSpace":"nowrap","color":"inherit","borderRadius":"10px","textAlign":"center","background":"#fff","width":"50%","fontSize":"inherit","fontWeight":"500"}'
        ></el-pagination>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layouts: ["total","prev","pager","next","sizes","jumper"],
      searchForm: {
        key: ""
      },
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: false,
      user: {}
    };
  },
  mounted() {
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.user = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.init();
    this.getDataList();
  },
  components: {},
  methods: {
    init() {},
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },
    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      var params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: "id",
        status: "1"
      };
      if (this.searchForm.name) {
        params["name"] = `%${this.searchForm.name}%`;
      }
      this.$http({
        url: this.$api.exampaperpage,
        method: "get",
        params: params
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id) {
      this.$http({
        url: `examrecord/deleteRecords?userid=${this.user.id}&paperid=${id}`,
        method: "post",
        data: {}
      }).then(({ data }) => {});
      this.$router.push({
        name: "adminexam",
        params: {
          id: id
        }
      });
    },
    // 删除
    deleteHandler(id) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: this.$api.exampaperdelete,
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.search();
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.form-content {
	background: transparent;
}
.table-content {
	background: transparent;
}

	.center-form-pv {
		.el-input {
		  width: auto;
		}
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 1px solid #fceaee;
				border-radius: 30px;
				padding: 0 12px;
				outline: none;
				color: inherit;
				background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,244,246,1) 50%, rgba(255,208,218,1) 100%, rgba(244,100,130,1) 100%);
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 1px solid #fceaee;
				border-radius: 30px;
				padding: 0 10px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: inherit;
				background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,244,246,1) 50%, rgba(255,208,218,1) 100%, rgba(244,100,130,1) 100%);
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 1px solid #fceaee;
				border-radius: 30px;
				padding: 0 10px 0 30px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: inherit;
				background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,244,246,1) 50%, rgba(255,208,218,1) 100%, rgba(244,100,130,1) 100%);
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: inherit;
				background: rgba(254,169,34,0);
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,244,246,1) 50%, rgba(255,208,218,1) 100%, rgba(244,100,130,1) 100%);
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 6px 0;
				background: none;
				border-color: #fceaee;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				word-break: break-all;
				white-space: normal;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}
	
	
	.el-table /deep/ .el-table__body-wrapper tbody {
				padding: 0;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 2px 0;
				color: inherit;
				background: none;
				font-size: inherit;
				border-color: #fceaee;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
		.el-table /deep/ .el-table__body-wrapper tbody tr.el-table__row--striped td {
		background: rgba(252,234,238,.1);
	}
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 2px 0;
				color: #666;
				background: rgba(254,184,197,.1);
				border-color: #fceaee;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 2px 0;
				color: inherit;
				background: none;
				font-size: inherit;
				border-color: #fceaee;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				color: inherit;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: inherit;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: auto;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				border-radius: 20px;
				padding: 0 4px;
				margin: 0 5px;
				color: #333;
				background: rgba(252,234,238,1);
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: auto;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				border-radius: 20px;
				padding: 0 4px;
				margin: 0 5px;
				color: #333;
				background: rgba(252,234,238,1);
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: auto;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				color: inherit;
				width: 100px;
				font-size: inherit;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 0px solid #ddd;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: none;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				color: inherit;
				display: inline-block;
				width: 50px;
				font-size: inherit;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #eee;
				cursor: pointer;
				padding: 0 0px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 24px;
				border-radius: 20px;
				outline: 0;
				background: none;
				width: auto;
				text-align: center;
				height: 24px;
			}
	
	.center-form-pv .search {
				border: 0;
				cursor: pointer;
				border-radius: 30px;
				padding: 0 24px;
				outline: none;
				color: #fff;
				background: url(http://codegen.caihongy.cn/20230807/43484e01d1b944d7a58b67f5f67312cc.gif) no-repeat center top / 100% 100%;
				display: inline-block;
				width: 90px;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .search:hover {
				opacity: 0.8;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view {
				cursor: pointer;
				padding: 0 0px 0 0px;
				margin: 0 10px 5px 0;
				color: #555;
				font-size: 14px;
				border-color: rgba(244,111,139,.3);
				line-height: 32px;
				border-radius: 0px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: rgba(255,255,255,.0);
				width: auto;
				border-width: 0 0 4px;
				border-style: double;
				min-width: 40px;
				height: 32px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view:hover {
				color: #ed5474;
				opacity: 0.8;
			}
	
	// list one
	.one .list1-view {
				cursor: pointer;
				padding: 0 0px 0 0px;
				margin: 0px 10px 5px 0;
				color: inherit;
				font-size: inherit;
				border-color: rgba(244,111,139,.3);
				line-height: 32px;
				border-radius: 0px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: rgba(86,178,198,.0);
				width: auto;
				border-width: 0 0 4px;
				border-style: double;
				min-width: 40px;
				height: 32px;
			}
	
	.one .list1-view:hover {
				color: #ed5474;
				opacity: 0.8;
			}
</style>
