<template>
  <div class="header" v-show="show">
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
            <li :class="{nav_select:isCurrentItem('/')}">
              <!-- <a href="/" one-link-mark="yes">首页</a> -->
              <router-link to="/">首页</router-link>
            </li>
            <li :class="{nav_select:isCurrentItem('/nationalStandard')}">
              <!-- <a href="/nationalStandard" one-link-mark="yes">国家标准</a> -->
              <router-link to="/nationalStandard">国家标准</router-link>
            </li>
            <li :class="{nav_select:isCurrentItem('/industryStandard')}">
              <!-- <a href="/industryStandard" one-link-mark="yes">行业标准</a> -->
              <router-link to="/industryStandard">行业标准</router-link>
            </li>
            <li :class="{nav_select:isCurrentItem('/groupStandard')}">
              <!-- <a href="/groupStandard" one-link-mark="yes">团体标准</a> -->
              <router-link to="/groupStandard">团体标准</router-link>
            </li>
            <li :class="{nav_select:isCurrentItem('/enterpriseStandard')}">
              <!-- <a href="/enterpriseStandard" one-link-mark="yes">企业标准</a> -->
              <router-link to="/enterpriseStandard">企业标准</router-link>
            </li>
          </ul>
        </div>
        <!-- 用户登录 -->
        <div class="personal">
          <!-- <a href="/login" one-link-mark="yes">用户登录</a> -->
          <router-link to="/login">用户登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      
    };
  },

  mounted() {
  },

  methods: {
    isCurrentItem(itemName){
      return itemName == this.$route.path
    }
  },
  computed:{
    show(){
      return this.$route.path!='/login';
    }
  }
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