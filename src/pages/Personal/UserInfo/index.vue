<template>
    <div class="personBox">
        <div class="title">
            <h3>个人中心</h3>
            <hr>
        </div>
        <div class="formBox">
            <form name="form">
                <input type="hidden" name="id" :value="user.id">
                <div class="inputBox">
                    <label>用户名</label>
                    <input type="email" name="userName" :value="user.name" readonly="">
                </div>
                <div class="inputBox">
                    <label>邮箱</label>
                    <input type="email" name="email" :value="user.email">
                </div>
                <div class="inputBox">
                    <label>手机号码</label>
                    <input type="tel" name="phone" :value="user.phone">
                </div>
                <div style="margin-bottom: 50px;"/>
    
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserInfo',

  data() {
    return {
      user:{}
    };
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("userInfo"))
  },

  methods: {
    
  },
};
</script>

<style scoped>
.personBox .title h3 {
    font-size: 17px;
    color: #434343;
    font-weight: 500;
    margin-bottom: 25px;
}
.formBox {
    padding: 40px 0px;
}
.inputBox {
    margin-top: 20px;
    font-size: 15px;
}
.inputBox label {
    display: inline-block;
    width: 90px;
    font-size: 15px;
    padding-right: 40px;
    text-align: right;
}
.inputBox input[type="email"], .inputBox input[type="tel"], .inputBox textarea {
    width: 260px;
    font-size: 15px;
    height: 42px;
    line-height: 40px;
    padding: 0px 15px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
}
</style>