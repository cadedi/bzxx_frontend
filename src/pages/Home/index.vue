<template>
  <div class="content">
    <div class="carousel">
      <el-carousel height="250px">
        <el-carousel-item v-for="item in images" :key="item.url">
          <img :src="item.url" alt="无图片"/>          
        </el-carousel-item>
      </el-carousel>
    </div>
    <h1 class="title">企业标准排名</h1>
    <div class="content-selector">
      <span class="pc">省市</span>
      <el-cascader
        placeholder="请选择"
        clearable
        class="selector"
        v-model="pcValue"
        :options="pcOptions"
        @change="pcChange"
      ></el-cascader>
      <span>企业分类</span>
      <el-select
        class="selector"
        clearable
        v-model="searchParams.categoryValue"
        placeholder="请选择"
      >
        <el-option
          v-for="item in category"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>企业名称关键字</span>
      <el-input
        class="input"
        size="large"
        v-model="searchParams.keyword"
        placeholder="请输入"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
    </div>
    <el-table :data="standardRankInfo" stripe border style="width: 100%">
      <el-table-column
        prop="enterpriseName"
        label="企业名称"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="totalCount" label="标准总数" align="center">
      </el-table-column>
      <el-table-column prop="standardRank" label="总排名" align="center">
      </el-table-column>
      <el-table-column prop="nationalCount" label="国家标准数" align="center">
      </el-table-column>
      <el-table-column prop="nationalRank" label="国家标准排名" align="center">
      </el-table-column>
      <el-table-column prop="industryCount" label="行业标准数" align="center">
      </el-table-column>
      <el-table-column prop="industryRank" label="行业标准排名" align="center">
      </el-table-column>
      <el-table-column prop="groupCount" label="团体标准数" align="center">
      </el-table-column>
      <el-table-column prop="groupRank" label="团体标准排名" align="center">
      </el-table-column>
      <el-table-column prop="enterpriseCount" label="企业标准数" align="center">
      </el-table-column>
      <el-table-column
        prop="enterpriseRank"
        label="企业标准排名"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="internationalCount"
        label="国际标准数"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="internationalRank"
        label="国际标准排名"
        align="center"
      >
      </el-table-column>
    </el-table>
    <div class="clearfix">
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
import pcObj from "@/assets/pc.json";
export default {
  name: "Home",
  methods: {},
  data() {
    return {
      images: [
        { url: require("@/assets/images/banner1.png") },
        { url: require("@/assets/images/banner2.png") },
      ],
      searchParams: {
        keyword: "",
        province: "",
        city: "",
        categoryValue: "",
        targetPage: 1,
        //size: 15  每页条数,后端写死
      },
      pageSize: 15,
      pcValue: [],
      pcOptions: pcObj,
      category: [
        { value: "isListed", label: "上市企业" },
        { value: "isHighTech", label: "高新企业" },
        { value: "isSpecialized", label: "专精特新" },
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
      console.log(this.searchParams);
      this.$store.dispatch("getStandardRank", this.searchParams);
    },
    pcChange(param) {
      //省市改变
    },
    pageChange(currentPage) {
      //页码改变
      this.searchParams.targetPage = currentPage;
      //改变路由参数targetPage并拉取数据
      this.$router.push({ name: "home", query: this.searchParams });
    },
    search() {
      //改变路由参数并拉取数据
      this.searchParams.targetPage = 1; //搜索新数据一律跳转第一页
      this.$router.push({ name: "home", query: this.searchParams });
    },
  },
  computed: {
    ...mapState({
      standardRankMsg: (state) => state.home.standardRankMsg,
    }),
    ...mapGetters(["standardRankInfo"]),
    total() {
      return this.standardRankMsg.totalRecordsNum;
    },
  },
  watch: {
    //监听路由
    $route(newValue, oldValue) {
      //  if(this.$route.query.targetPage){
      //    this.$route.query.targetPage = parseInt(this.$route.query.targetPage)
      //  }
      this.searchParams = {
        keyword: "",
        province: "",
        city: "",
        categoryValue: "",
        targetPage: 1,
        // size: 15
      };
      Object.assign(this.searchParams, this.$route.query);
      this.getData();
    },
    pcValue(newValue) {
      this.searchParams.province = newValue[0];
      this.searchParams.city = newValue[1];
    },
  },
};
</script>

<style scoped>
.content {
  margin: 20px 30px;
  font-size: 14px;
}
.selector {
  margin: 10px 20px;
}
.title {
  text-align: center;
}
.input {
  width: 30%;
  margin: 10px 20px;
}
.content-selector {
  margin-left: 5%;
}
.pagination {
  float: right;
  margin-top: 20px;
}
.carousel {
    height: auto;
    width: 1150px;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    margin-bottom: 25px;
}
</style>