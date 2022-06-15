<template>
  <div>
    <div class="clearFix content-box">
      <div class="detailsBox">
        <div class="infoBox">
          <div class="title">
            <p>{{ detail.standardNo }} {{ detail.name }}</p>
          </div>
        </div>
        <div style="clear: both"></div>
        <div class="detailInfoBox">
          <div class="infoTitle">国家标准详细信息</div>
          <div class="detailInfo">
            <div>
              <label>标准号:</label>
              <span>{{ detail.standardNo }}</span>
            </div>
            <div>
              <label>标准名称:</label><span>{{ detail.name }}</span>
            </div>
            <div>
              <label>状态:</label><span>{{ detail.status }}</span>
            </div>
            <div>
              <label>发布日期:</label
              ><span>{{ detail.releaseDate.substring(0, 9) }}</span>
            </div>
            <div>
              <label>实时日期:</label
              ><span>{{ detail.applyDate.substring(0, 9) }}</span>
            </div>
            <div>
              <label>中国标准分类号:</label
              ><span>{{ detail.chineseCategoryNo }}</span>
            </div>
            <div>
              <label>国际标准分类号:</label
              ><span>{{ detail.internationalCategoryNo }}</span>
            </div>
            <div>
              <label>归口单位:</label><span>{{ detail.belongUnit }}</span>
            </div>
            <div>
              <label>执行单位:</label><span>{{ detail.executeUnit }}</span>
            </div>
            <div>
              <label>主管单位:</label
              ><span>{{ detail.administrativeUnit }}</span>
            </div>
            <div>
              <label>主要起草单位:</label><span>上{{ detail.authorUnit }}</span>
            </div>
            <div>
              <label>主要起草人:</label><span>{{ detail.author }}</span>
            </div>
            <div><label>备注:</label><span></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NationalDetail",
  props: ["id"],
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getInfoDetail", this.id);
  },

  methods: {},

  computed: {
    ...mapState({
      detail: (state) => state.nationalStandard.infoDetailMsg.data,
    }),
  },
};
</script>

<style scoped>
.content-box {
  width: 1200px;
  margin: 0 auto;
}
.detailsBox .infoBox .title {
  font-size: 20px;
  color: #434343;
  text-align: center;
  margin: 20px 0;
}

.detailsBox .infoBox .info {
  font-size: 14px;
  color: #434343;
  line-height: 28px;
}

.info p {
  text-indent: 28px;
}

.detailsBox .infoBox .signBox {
  float: right;
  font-size: 14px;
  color: #434343;
  line-height: 28px;
}

.detailsBox .infoBox .info,
.detailsBox .infoBox .signBox {
  padding: 20px;
}

/* 详细信息 */
.detailInfoBox .infoTitle {
  /*background: url(img/titlebg.png) no-repeat;*/
  padding-left: 20px;
  font-size: 16px;
  color: #434343;
  font-weight: bold;
}

/* hr{background-color: #f2f2f2;height: 1px;border: none;margin-top:20px;} */
.detailInfo {
  padding: 20px;
  font-size: 14px;
  line-height: 28px;
  color: #434343;
}

.detailInfo div {
  line-height: 2.5rem;
  display: flex;
  border: 1px solid #e5e5e5;
}

.detailInfo div label {
  display: inline-block;
  border-right: 1px solid #e5e5e5;
  font-weight: bold;
  text-align: right;
  width: 150px;
  padding: 0 10px;
}

.detailInfo div span {
  padding: 0 10px;
  display: inline-block;
  flex: 1;
}
</style>