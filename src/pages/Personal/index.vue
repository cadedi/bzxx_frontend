<template>
  <div class="clearFix content-box">
    <div class="left-nav">
      <h3>全部功能</h3>
      <ul>
          <li>
            <!-- <a class="aVisit" v-bind:class="{ activeLi : $route.path=='/personal'}">个人中心</a> -->
            <router-link active-class="activeLi" to="/personal/info">个人中心</router-link>
          </li>
          <li>
            <!-- <a href="/order" v-bind:class="{ activeLi : $route.path=='/personal/order'}">我的订单</a> -->
            <router-link active-class="activeLi" to="/personal/order">我的订单</router-link>
          </li>
          <li><a href="#" v-on:click.prevent="">开通会员</a></li>
          <li><a href="#" v-on:click.prevent="logout">退出</a></li>
      </ul>
    </div>
    <div class="detail">
      <router-view></router-view>
    </div> 
  </div>
</template>

<script>
export default {
  name:'Personal',
  mounted(){
    // console.log(this.$route.path)
  },
  methods:{
    logout(){
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.content-box {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0px;
}
.left-nav {
    width: 160px;
    float: left;
}
.left-nav h3 {
    font-size: 17px;
    color: #17a1ff;
}

.left-nav ul li {
    margin-top: 25px;
    font-size: 14px;
    list-style: none;
}
.activeLi {
    color: #17a1ff;
}
.detail {
    width: 1040px;
    float: right;
}
</style>