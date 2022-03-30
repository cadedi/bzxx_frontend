<template>
  <div class="body-bg">
    <div class="bg">
      <div class="titleBox">
        <div class="logTitle">
          <h1>标准信息服务平台</h1>
          <h6>Public service platform for standards information</h6>
        </div>
      </div>
      <div class="infoBox">
        <div class="logInfo">
          <h1>欢迎登陆</h1>
          <h4>请使用本人账号密码登陆!</h4>
          <form name="form">
            <input placeholder="请输入账号" name="userName" type="text" />
            <input placeholder="请输入密码" name="password" type="password" />
            <div class="remember">
              <input type="checkbox" name="rememberPassword" /><span
                >记住密码</span
              >
              <a class="forgetP" href="/forgetPassword" one-link-mark="yes"
                >忘记密码</a
              >
            </div>
            <button type="button" onclick="login()">登 录</button>
            <a class="register" href="/register" one-link-mark="yes">注册</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {};
  },

  methods: {},
};
</script>



<style scoped>
.body-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: url(~@/assets/images/login_bgBox.png) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

.bg {
  width: 1690px;
  height: 885px;
  background: url(~@/assets/images/login_bg.png) no-repeat center center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -442px 0 0 -845px;
}

/* 平台标题 */
.titleBox {
  width: 880px;
  height: 880px;
  float: left;
  text-align: center;
}

.logTitle {
  padding: 80px 250px;
}

.logTitle h1 {
  font-size: 36px;
  color: #17a1ff;
  font-weight: 500;
}

.logTitle h6 {
  font-size: 12px;
  color: #17a1ff;
  font-weight: 500;
}

/* 登录信息 */
.infoBox {
  width: 730px;
  height: 880px;
  float: right;
}

.logInfo {
  padding: 170px 160px;
}

.logInfo h1 {
  font-size: 36px;
  color: #17a1ff;
  font-weight: 500;
  padding-bottom: 15px;
  width: 180px;
  border-bottom: 5px solid #17a1ff;
}

.logInfo h4 {
  font-size: 22px;
  color: #a0a0a0;
  font-weight: 500;
  padding: 30px 0px;
}

/* 登录表单 */
.logInfo input[type="text"],
.logInfo input[type="password"] {
  display: block;
  width: 360px;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  border-radius: 60px;
  margin: 20px 0px;
  border: 1px solid #a0a0a0;
}

.logInfo span {
  color: #17a1ff;
  font-size: 20px;
}
/* 复选框自定义 */
.logInfo input[type="checkbox"] {
  width: 16px;
  height: 16px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 16px;
  position: relative;
  margin-top: -10px;
  margin-right: 10px;
}

.logInfo input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  background: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid #17a1ff;
}

.logInfo input[type="checkbox"]:checked::before {
  content: "\2713";
  background-color: #17a1ff;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  border: 1px solid #17a1ff;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

.remember {
  padding: 20px 0px;
}

.forgetP {
  font-size: 20px;
  color: #17a1ff;
  float: right;
}

.logInfo button {
  background-color: #17a1ff;
  color: #fff;
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 60px;
  font-size: 22px;
  margin: 20px 0px;
}

.register {
  display: block;
  font-size: 20px;
  color: #17a1ff;
  text-align: center;
  margin: 30px 0px;
}
</style>