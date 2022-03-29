<template>
  <div>
    <div class="title">
      行业标准信息查询
      <p>Industry Standard Information Search</p>
    </div>
    <div class="search_box">
      <div class="search-input">
        <span class="label">搜索栏:</span>
        <el-input
          class="input"
          size="large"
          v-model="searchParams.keyword"
          placeholder="请输入标准名称"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="search"
          ></el-button>
        </el-input>
      </div>
      <div class="radio-selector it-selector">
        <span class="label">行业领域:</span>
        <el-radio-group v-model="searchParams.targetIndustryType" size="medium">
          <el-radio-button label="全部">全部</el-radio-button>
          <el-radio-button
            v-for="item of industryArea.slice(0, 7)"
            :key="item.id"
            :label="item.val"
            >{{ item.name }}</el-radio-button>
          <span class="iconfont icon-xiangxiajiantou expand-icon"></span>
          <br />
          <div class="hide-selector">
            <el-radio-button
              v-for="item of industryArea.slice(7)"
              :key="item.id"
              :label="item.val"
              >{{ item.name }}</el-radio-button
            >
          </div>
        </el-radio-group>
      </div>
      <div class="radio-selector">
        <span class="label">标准状态:</span>
        <el-radio-group v-model="searchParams.targetStatus" size="medium">
          <el-radio-button label="全部">全部</el-radio-button>
          <el-radio-button label="现行">现行</el-radio-button>
          <el-radio-button label="即将实施">即将实施</el-radio-button>
          <el-radio-button label="被代替">被代替</el-radio-button>
          <el-radio-button label="废止">废止</el-radio-button>
        </el-radio-group>
      </div>
      <div class="radio-selector">
        <span class="label">发布日期:</span>
        <el-radio-group v-model="searchParams.releaseDateLimit" size="medium">
          <el-radio-button label="0">全部</el-radio-button>
          <el-radio-button label="1">近一个月</el-radio-button>
          <el-radio-button label="3">近三个月</el-radio-button>
          <el-radio-button label="6">近半年</el-radio-button>
          <el-radio-button label="12">近一年</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="search-result clearFix">
      <el-table :data="industryStandardInfo" stripe border style="width: 100%">
        <el-table-column
          prop="standardNo"
          label="标准号"
          width="160"
          align="center"
        >
        </el-table-column>
        <el-table-column label="标准中文名称" width="380" align="center">
          <template slot-scope="scope">
            <span class="name">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="行业领域" width="160" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.industryType }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标准状态" width="110" align="center">
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
        <el-table-column label="批准日期" width="120" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.releaseDate.substring(0, 9) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="实施日期" width="120" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.applyDate.substring(0, 9) }}</span>
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
  name: "IndustryStandard",

  data() {
    return {
      searchParams: {
        keyword: "",
        targetStatus: "全部",
        releaseDateLimit: "0",
        targetIndustryType: "",
        targetPage: 1,
      },
      pageSize: 15,
    };
  },

  beforeMount() {
    Object.assign(this.searchParams, this.$route.query);
    this.$store.dispatch("getIndustryArea");
    localStorage.setItem(
      "industryAreaMsg",
      JSON.stringify(this.industryAreaMsg)
    );
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.$store.dispatch("getIndustryStandard", this.searchParams);
    },
    search() {
      this.searchParams.targetPage = 1;
      this.$router.push({ name: "industryStandard", query: this.searchParams });
    },
    pageChange(currentPage) {
      this.searchParams.targetPage = currentPage;
      this.$router.push({ name: "industryStandard", query: this.searchParams });
    },
  },
  computed: {
    ...mapState({
      industryStandardMsg: (state) =>
        state.industryStandard.industryStandardMsg,
      industryAreaMsg: (state) => state.industryStandard.industryAreaMsg,
    }),
    ...mapGetters(["industryStandardInfo", "industryArea"]),
    total() {
      return this.industryStandardMsg.totalRecordsNum;
    },
    locIndustryArea() {
      if (
        !localStorage.getItem("industryAreaMsg") ||
        localStorage.getItem("industryAreaMsg") == "{}"
      ) {
        if (!this.industryAreaMsg) {
          this.$store.dispatch("getIndustryArea");
        }
        localStorage.setItem(
          "industryAreaMsg",
          JSON.stringify(this.industryAreaMsg)
        );
        return this.industryArea;
      }
      return JSON.parse(localStorage.getItem("industryAreaMsg")).data;
    },
  },
  watch: {
    $route(newValue, oldValue) {
      (this.searchParams = {
        keyword: "",
        targetStatus: "全部",
        releaseDateLimit: "0",
        targetIndustryType: "",
        targetPage: 1,
      }),
        Object.assign(this.searchParams, this.$route.query);
      this.getData();
    },
  },
};
</script>

<style scoped>

.search_box {
  width: 1000px; /*850px */
  /* height: 210px; */
  border-radius: 4px;
  border: solid 0px rgb(150, 146, 138);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 20px 50px;
  /* position: relative;
  left: 30px; */
  margin: 0 auto;
}
.label {
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
}
.input {
  width: 800px;
}
.radio-selector {
  margin-top: 15px;
  border: hidden;
}
.title {
  font-size: 20px;
  color: #1aa6fe;
  text-align: left;
  padding-bottom: 18px;
  margin-top: 15px;
  margin-left: 20px;
}
.title p {
  font-size: 14px;
  color: #959595;
}
.search-result {
  width: 1052px;
  margin-top: 20px;
  margin: 0 auto;
  margin-top: 30px;
}
.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pagination {
  float: right;
  margin-top: 20px;
  margin-bottom: 10px;
}
.expand-icon {
  margin-left: 50px;
}

/* vue深度穿透器 */
.it-selector >>> .el-radio-button__inner {
  border: none !important;
}
</style>