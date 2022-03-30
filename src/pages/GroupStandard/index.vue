<template>
  <div class="clearFix">
    <GroupTypeNav />
    <div class="title">
      团体标准信息查询
      <p>Team Standard Information Search</p>
      <hr />
    </div>

    <div class="search_box">
      <!-- <h1 class="search_title">国家标准目录</h1> -->
      <span class="label">标准编号:</span>
      <el-input class="search-input" v-model="searchParams.targetStandardNo">
      </el-input>
      <span class="label">标准名称:</span>
      <el-input class="search-input" v-model="searchParams.targetStandardName">
      </el-input>
      <br />
      <span class="label">团体编号:</span>
      <el-input class="search-input" v-model="searchParams.targetCertNo">
      </el-input>
      <span class="label">团体名称:</span>
      <el-input class="search-input" v-model="searchParams.targetGroupName">
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
      <br />
      <div class="search-btn">
        <el-button type="primary" plain @click="search">查询</el-button>
        <el-button type="info" plain @click="reset">重置</el-button>
      </div>
    </div>
    <div class="search-result">
      <div class="up-table-title">最新数据:</div>
      <hr class="up-table-hr"/>
      <el-table :data="groupStandardInfo" stripe border style="width: 100%">
        <el-table-column
          prop="groupName"
          label="团体名称"
          width="240"
          align="center"
        >
        </el-table-column>
        <el-table-column label="标准编号" width="210" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.standardNo }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标准名称" width="240" align="center">
          <template slot-scope="scope">
            <span class="name">{{ scope.row.standardName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="公布日期" width="95" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.releaseDate.substring(0, 9) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="70" align="center">
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
import GroupTypeNav from "./GroupTypeNav";
import { mapGetters, mapState } from "vuex";
export default {
  name: "GroupStandard",
  components: {
    GroupTypeNav,
  },
  data() {
    return {
      searchParams: {
        targetStandardNo: "",
        targetStandardName: "",
        targetGroupName: "",
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
      this.$store.dispatch("getGroupStandard", this.searchParams);
    },
    reset() {
      this.searchParams = {
        targetStandardNo: "",
        targetStandardName: "",
        targetGroupName: "",
        targetCertNo: "",
        targetStatus: "全部",
        targetPage: 1,
      }
    },
    search() {
      this.searchParams.targetPage = 1; //搜索新数据一律跳转第一页
      this.$router.push({ name: "groupStandard", query: this.searchParams });
    },
    pageChange(currentPage) {
      this.searchParams.targetPage = currentPage;
      this.$router.push({ name: "groupStandard", query: this.searchParams });
    },
  },
  computed: {
    ...mapState({
      groupStandardMsg: (state) => state.groupStandard.groupStandardMsg,
    }),
    ...mapGetters(["groupStandardInfo"]),
    total() {
      return this.groupStandardMsg.totalRecordsNum;
    },
  },
  watch: {
    $route(newValue, oldValue) {
      this.searchParams = {
        targetStandardNo: "",
        targetStandardName: "",
        targetGroupName: "",
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
hr {
  /* display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto; */
  overflow: hidden;
  color: grey;
  background-color: currentColor;
  border: 0;
  opacity: 0.55;
  margin-top: 10px;
  width: 850px;
}
.search_box {
  width: 780px; /*850px */
  height: 200px;
  /* border-radius: 4px;
  border: solid 0px rgb(150, 146, 138);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04); */
  float: right;
  margin-top: 8px;
  position: relative;
  right: 35px;
  padding: 20px 50px;
}
.search-result {
  /* width: 894px; */
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  right: 45px;
}
.label {
  font-weight: bold;
  font-size: 15px;
  margin-right: 5px;
}
.search-input {
  width: 300px;
  margin: 5px 10px;
}
.title {
  font-size: 18px;
  color: #1aa6fe;
  /* padding-bottom: 20px; */
  padding: 10px;
  position: relative;
  left: 15px;
  top: 15px;
}
.title p {
  font-size: 14px;
  color: #959595;
}
.up-table-title {
  font-size: 18px;
  color: #1aa6fe;
  padding: 10px;
  position: relative;
  /* left: 5px; */
  top: 15px;
}
.search-btn {
  width: 200px;
  margin: 0 auto;
  padding-top: 20px;
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
.up-table-hr {
  margin-bottom: 10px;
}
</style>