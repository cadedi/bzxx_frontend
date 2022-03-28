<template>
  <div class="clearFix">
    <TypeNav />
    <div class="search_box">
      <h1 class="search_title">国家标准目录</h1>
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
    <div class="search-result">
      <el-table :data="nationalStandardInfo" stripe border style="width: 100%">
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
        <el-table-column label="发布日期" width="100" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.releaseDate.substring(0, 9) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="实施日期" width="100" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.applyDate.substring(0, 9) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标准状态" width="107" align="center">
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
import TypeNav from "./TypeNav";
import { mapGetters, mapState } from "vuex";
export default {
  name: "NationalStandard",
  components: {
    TypeNav,
  },

  data() {
    return {
      searchParams: {
        keyword: "",
        targetStatus: "全部",
        releaseDateLimit: "0",
        targetPage: 1,
      },
      pageSize: 15
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
      this.$store.dispatch("getNationalStandard", this.searchParams);
    },
    search() {
      this.searchParams.targetPage = 1; //搜索新数据一律跳转第一页
      this.$router.push({ name: "nationalStandard", query: this.searchParams });
    },
    pageChange(currentPage) {
      this.searchParams.targetPage = currentPage;
      this.$router.push({ name: "nationalStandard", query: this.searchParams });
    }
  },
  computed: {
    ...mapState({
      nationalStandardMsg: (state) =>
        state.nationalStandard.nationalStandardMsg,
    }),
    ...mapGetters(["nationalStandardInfo"]),
    total() {
      return this.nationalStandardMsg.totalRecordsNum;
    },
  },
  watch: {
    $route(newValue, oldValue) {
      this.searchParams = {
        keyword: "",
        targetStatus: "全部",
        releaseDateLimit: "0",
        targetPage: 1,
      };
      Object.assign(this.searchParams, this.$route.query);
      this.getData();
    },
  },
};
</script>

<style scoped>
.search_box {
  width: 750px; /*850px */
  height: 200px;
  border-radius: 4px;
  border: solid 0px rgb(150, 146, 138);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  float: right;
  /*margin-right: 2px;*/
  margin-top: 12px;
  position: relative;
  right: 25px;
  padding: 20px 50px;
}
.search_title {
  margin-bottom: 10px;
}
.label {
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
}
.radio-selector {
  margin-top: 15px;
  border: hidden;
}
.search-result {
  width: 850px; /*850px */
  float: right;
  margin-top: 20px;
  position: relative;
  right: 25px;
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
}
</style>