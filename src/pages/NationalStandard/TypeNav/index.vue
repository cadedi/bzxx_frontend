<template>
  <div class="clearFix">
    <div class="ics">
      <el-table :data="localIcs" border style="float: left" :header-cell-style="{background: 'rgb(21, 145, 229)',color: '#fff','font-size':'16px'}">
        <el-table-column prop="name" label="国际标准分类号（ICS）" width="280">
          <template slot-scope="scope">
            <span class="column">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "TypeNav",

  data() {
    return {};
  },
  beforeMount() {
    this.getData();
  },

  mounted() {},

  methods: {
    getData() {
      this.$store.dispatch("getIcsCategory");
    },
  },
  computed: {
    ...mapGetters(["icsCategory"]),
    ...mapState({
      icsCategoryMsg: (state) => state.nationalStandard.icsCategoryMsg,
    }),
    localIcs() {
      if (!localStorage.getItem("ics") || localStorage.getItem("ics") == "{}") {
        localStorage.setItem("ics", JSON.stringify(this.icsCategoryMsg));
        return this.icsCategory;
      }
      return JSON.parse(localStorage.getItem("ics")).data;
    },
  },
};
</script>

<style scoped>
.ics {
  margin: 10px 5px;
  float: left;
  width: auto;
  height: 1096px;
  overflow-x:hidden;
  overflow-y: auto;
  border: solid 0px rgb(150, 146, 138);
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.ics::-webkit-scrollbar {
  width: 0;
}
.column {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
}
</style>