<template>
  <div class="header">
    <div class="nav_box">
      <!-- logo -->
      <div class="logo">
        <a href="/" one-link-mark="yes">
          <img src="./images/logo.png" />
        </a>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <div class="nav_class">
          <ul>
            <li class="nav_select">
              <a href="/" one-link-mark="yes">首页</a>
            </li>
            <li>
              <a href="/standardMap" one-link-mark="yes">标准地图</a>
            </li>
            <li>
              <a href="/nationalStandard" one-link-mark="yes">国家标准</a>
            </li>
            <li>
              <a href="/industryStandard" one-link-mark="yes">行业标准</a>
            </li>
            <li>
              <a href="/groupStandard" one-link-mark="yes">团体标准</a>
            </li>
            <li>
              <a href="/enterpriseStandard" one-link-mark="yes">企业标准</a>
            </li>
            <li>
              <a href="/iso" one-link-mark="yes">国际标准</a>
            </li>
            <li>
              <a href="/standardPolicy" one-link-mark="yes">标准政策</a>
            </li>
            <li>
              <a href="/demonstration" one-link-mark="yes">示范试点</a>
            </li>
          </ul>
        </div>
        <!-- 用户登录 -->
        <div class="personal">
          <a href="/login" one-link-mark="yes">用户登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 130px;
  background: url(~@/assets/images/nav_bg.jpg) no-repeat center top;
}

.nav_box {
  width: 1200px;
  margin: 0 auto;
}

.logo {
  width: 340px;
  text-align: center;
  height: 130px;
  line-height: 130px;
  float: left;
}

.logo a img {
  width: 340px;
  height: 74px;
  vertical-align: middle;
}

.nav {
  float: right;
  position: relative;
  text-align: center;
  height: 130px;
  line-height: 130px;
  font-size: 14px;
}

.nav ul li {
  float: left;
  padding: 0px 13px;
}

.nav a {
  color: #fff;
}

.nav_class {
  display: inline-block;
}

.nav_select a {
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
}

.personal {
  float: right;
  position: relative;
  padding-left: 30px;
}

.personal a {
  background: url(~@/assets/images/personal.png) no-repeat left center;
  padding-left: 20px;
}
</style>