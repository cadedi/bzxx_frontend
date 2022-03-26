<template>
  <div class="content">
    <h1 class="title">企业标准排名</h1>
    省市
    <el-cascader
      placeholder="请选择"
      clearable
      class="selector"
      v-model="pcValue"
      :options="pcOptions"
      @change="handleChange"
    ></el-cascader>
    企业分类
    <el-select class="selector" clearable v-model="categoryValue" placeholder="请选择">
      <el-option
        v-for="item in category"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
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
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import pcObj from "@/assets/pc.json";
export default {
  name: "Home",
  methods: {},
  beforeMount() {
    this.$store.dispatch("getStandardRank");
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      pcValue: [],
      categoryValue: '',
      pcOptions: pcObj,
      category: [
        { value: "isListed", label: "上市企业" },
        { value: "isHighTech", label: "高新企业" },
        { value: "isSpecialized", label: "专精特新" },
      ],
    };
  },
  mounted() {
    console.log(pcObj);
  },

  methods: {
    handleChange() {},
  },
  computed: {
    ...mapState({
      standardRankMsg: (state) => state.home.standardRankMsg,
    }),
    ...mapGetters(["standardRankInfo"]),
  },
};
</script>

<style scoped>
.content {
  margin: 20px 30px;
  font-size: 14px;
}
.selector {
  margin: 10px 10px;
}
.title {
  text-align: center;
}
</style>