<template>
  <div class="clearFix">
    <div class="title">
      企业标准信息查询
      <p>Enterprise Standard Information Search</p>
      <hr />
    </div>
    <div class="search_box">
      <div class="search-selector">
        <span class="label">标准编号:</span>
        <el-input class="search-input" v-model="searchParams.targetStandardNo">
        </el-input>
        <span class="label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准名称:</span>
        <el-input
          class="search-input"
          v-model="searchParams.targetStandardName"
        >
        </el-input>
        <br />
        <span class="label">企业名称:</span>
        <el-input
          class="search-input"
          v-model="searchParams.targetEnterpriseName"
        >
        </el-input>
        <span class="label">统一社会信用代码:</span>
        <el-input class="search-input" v-model="searchParams.targetCertNo">
        </el-input>
        <br />
        <span class="label">标准状态:</span>
        <el-select
          class="search-input"
          v-model="searchParams.targetStatus"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="search-btn">
        <el-button type="primary" @click="search" >搜索</el-button>
      </div>
    </div>
    <div class="search-result">
      <div class="up-table-title">最新数据:</div>
      <hr class="up-table-hr"/>
      <el-table :data="enterpriseStandardInfo" stripe border class="search-table">
        <el-table-column
          prop="enterpriseName"
          label="企业名称"
          width="240"
          align="center"
        >
        </el-table-column>
        <el-table-column label="标准编号" width="240" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.standardNo }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标准名称" width="230" align="center">
          <template slot-scope="scope">
            <span class="name">{{ scope.row.standardName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="发布时间" width="240" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.releaseDate.substring(0, 9) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="198" align="center">
          <template slot-scope="scope">
            <template v-if="scope.row.status == '现行'">
              <span>现行</span>
            </template>
            <template v-else-if="scope.row.status == '即将实施'">
              <span>即将实施</span>
            </template>
            <template v-else-if="scope.row.status == '被代替'">
              <span>被代替</span>
            </template>
            <template v-else-if="scope.row.status == '废止'">
              <span>废止</span>
            </template>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="parseInt(total)"
        :page-size="pageSize"
        :current-page="parseInt(searchParams.targetPage)"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "EnterpriseStandard",

  data() {
    return {
      searchParams: {
        targetStandardNo: "",
        targetStandardName: "",
        targetEnterpriseName: "",
        targetCertNo: "",
        targetStatus: "全部",
        targetPage: 1,
      },
      pageSize: 15,
      options: [
        {
          value: "全部",
          label: "全部",
        },
        {
          value: "现行",
          label: "现行",
        },
        {
          value: "即将实施",
          label: "即将实施",
        },
        {
          value: "被代替",
          label: "被代替",
        },
        {
          value: "废止",
          label: "废止",
        },
      ],
    };
  },

  beforeMount() {
    Object.assign(this.searchParams, this.$route.query);
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.$store.dispatch("getEnterpriseStandard", this.searchParams);
    },
    reset() {
      this.searchParams = {
        targetStandardNo: "",
        targetStandardName: "",
        targetEnterpriseName: "",
        targetCertNo: "",
        targetStatus: "全部",
        targetPage: 1,
      };
    },
    search() {
      this.searchParams.targetPage = 1; //搜索新数据一律跳转第一页
      this.$router.push({
        name: "enterpriseStandard",
        query: this.searchParams,
      });
    },
    pageChange(currentPage) {
      this.searchParams.targetPage = currentPage;
      this.$router.push({
        name: "enterpriseStandard",
        query: this.searchParams,
      });
    },
  },
  computed: {
    ...mapState({
      enterpriseStandardMsg: (state) =>
        state.enterpriseStandard.enterpriseStandardMsg,
    }),
    ...mapGetters(["enterpriseStandardInfo"]),
    total() {
      return this.enterpriseStandardMsg.totalRecordsNum;
    },
  },
  watch: {
    $route(newValue, oldValue) {
      this.searchParams = {
        targetStandardNo: "",
        targetStandardName: "",
        targetEnterpriseName: "",
        targetCertNo: "",
        targetStatus: "全部",
        targetPage: 1,
      };
      Object.assign(this.searchParams, this.$route.query);
      this.getData();
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 18px;
  color: #1aa6fe;
  /* padding-bottom: 20px; */
  /* padding: 10px; */
  /* position: relative;
  left: 15px;
  top: 15px; */
  margin: 10px;
  padding-top: 20px;
}
.title p {
  font-size: 14px;
  color: #959595;
}
hr {
  overflow: hidden;
  color: grey;
  background-color: currentColor;
  border: 0;
  opacity: 0.55;
  margin-top: 10px;
  /* width: 1100px; */
  margin-bottom: 30px;
}
.search_box {
  width: 1200px;
  height: 200px;
  margin-top: 8px;
  margin: 0 auto;
}
.search-result {
  width: 1200px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin: 0 auto;
}
.label {
  font-weight: bold;
  font-size: 15px;
  margin-right: 5px;
  padding-left: 30px;
}
.search-input {
  width: 300px;
  margin: 5px 10px;
}
.search-btn {
  width: 200px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
  left: 25px;
}
.search-selector {
  width: 900px;
  margin: 0 auto;
}

.up-table-title {
  font-size: 18px;
  color: #1aa6fe;
  padding: 10px;
  position: relative;
  top: 15px;
}
.search-table {
  width: 1150px;
  margin: 0 auto;
}
.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
}
.pagination {
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  right: 10px;
}
</style>