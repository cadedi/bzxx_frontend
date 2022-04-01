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
          <el-form
            class="form-content"
            :model="loginParam"
            status-icon
            label-width="50px"
          >
            <div class="login-input">
              <el-form-item>
                <el-input
                  v-model="loginParam.name"
                  autocomplete="off"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
            </div>
            <div class="login-input">
              <el-form-item>
                <el-input
                  type="password"
                  v-model="loginParam.password"
                  autocomplete="off"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
            </div>
            <el-form-item class="login-checkbox">
              <el-checkbox v-model="storePass">记住密码</el-checkbox>
            </el-form-item>
          </el-form>
          <div class="login-btn">
            <el-button type="primary">登 录</el-button>
          </div>
          <div class="to-register">
            <router-link to="/register" class="register-a">注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      storePass: false,
      loginParam: {
        name: "",
        password: "",
      },
    };
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
  /* 缩放 */
  background-size: 50% 50%;
}

/* 平台标题 */
.titleBox {
  width: 880px;
  height: 880px;
  float: left;
  text-align: center;
  position: relative;
  left: 220px;
  top: 170px;
}

.logTitle {
  padding: 80px 250px;
}

.logTitle h1 {
  font-size: 30px;
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
  /* width: 730px; */
  width: 390px;
  /* height: 880px; */
  height: 450px;
  float: right;
  position: relative;
  right: 450px;
  top: 230px;
}

.logInfo {
  padding: 10px 10px;
}

.logInfo h1 {
  font-size: 30px;
  color: #17a1ff;
  font-weight: 500;
  padding-bottom: 10px;
  width: 180px;
  border-bottom: 5px solid #17a1ff;
  margin-left: 50px;
}

.logInfo h4 {
  font-size: 18px;
  color: #a0a0a0;
  font-weight: 500;
  padding: 20px 0px;
  margin-left: 50px;
}

.login-btn {
  /* width: 80px;
  margin: 0 auto; */
  text-align: center;
}
.to-register {
  text-align: center;
  margin: 20px 0px;
}
.to-register .register-a {
  font-size: 16px;
  color: #17a1ff;
  text-align: center;
}
</style>