<template>
  <div class="footer" v-show="show">
    <div class="footer_box">
      <!-- 底部导航 -->
      <div class="footerNav">
        <ul>
          <li class="nav_select">
            <a href="/#/" one-link-mark="yes">国家标准</a>
          </li>
          <li>
            <a href="/#/industryStandard" one-link-mark="yes">行业标准</a>
          </li>
          <li>
            <a href="/#/groupStandard" one-link-mark="yes">团体标准</a>
          </li>
          <li>
            <a href="/#/enterpriseStandard" one-link-mark="yes">企业标准</a>
          </li>
        </ul>
      </div>
      <!-- 版权 -->
      <div class="copyright">
        <p>Copyright © 2021 标准信息服务平台 粤ICP备2021135895号-1</p>
        <p>公司：广东聚智诚标准技术研究院有限公司</p>
        <p>电话：020-38868500 13925106699 18002268385</p>
        <p>邮箱：71bz@gdeifq.com</p>
        <p>地址：广东省东莞市松山湖园区学府路1号9栋605室</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {};
  },

  mounted() {

  },

  methods: {},
  computed:{
    show(){
      return this.$route.path!='/login';
    }
  }
};
</script>

<style scoped>
/* 页脚 */
.footer {
  width: 100%;
  background: #17a1ff;
}

.footer_box {
  width: 1200px;
  margin: 0 auto;
  font-size: 12px;
  text-align: center;
  padding: 30px 0px;
}

.footerNav {
  font-size: 16px;
  text-align: center;
}

.footerNav ul li {
  display: inline-block;
  padding: 0px 20px;
  border-right: 1px solid #fff;
}

.footerNav ul li:last-child {
  border: none;
}

.footerNav ul li a {
  font-size: 14px;
  color: #fff;
}

.copyright {
  color: #d1d1d1;
  margin-top: 20px;
}

.copyright p {
  padding: 5px;
}
</style>