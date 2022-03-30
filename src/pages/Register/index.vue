<template>
  <div>
    <h3>用户注册</h3>
    <hr />
    <el-form
      class="form-content"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <div class="register-input">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </div>

      <el-form-item class="register-input" label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="register-input" label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="register-input" label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="register-input" label="手机" prop="phone">
        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="form-btn">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reqUserExist, reqRegisterUser } from "@/api";
export default {
  name: "Register",

  data() {
    let validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      this.isExistUser(value).then((isExist) => {
        if (isExist) {
          callback(new Error("用户名已存在,请重新输入"));
        } else {
          callback();
        }
      });
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        password: "",
        checkPass: "",
        email: "",
        phone: "",
      },
      rules: {
        name: [{ validator: validateName, required: true, trigger: "blur" }],
        password: [
          { validator: validatePass, required: true, trigger: "blur" },
        ],
        checkPass: [
          { validator: validatePass2, required: true, trigger: "blur" },
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "请输入正确的邮箱格式",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            pattern: /^1\d{10}$/,
            message: "请输入正确的手机号格式",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async isExistUser(name) {
      let isExistMsg = await reqUserExist({ name });
      if (isExistMsg.data.extend.isExistUser == "true") {
        return true;
      } else {
        return false;
      }
    },
    async registerUser() {},
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          reqRegisterUser(this.ruleForm).then((result) => {
            this.$message({
              message: "注册成功",
              type: "success",
            });
            this.$router.push("/login");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },

  mounted() {},
};
</script>

<style scoped>
.form-content {
  width: 500px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 50px;
}
.register-input {
  width: 500px;
  text-align: center;
}
h3 {
  width: 100px;
  font-size: 20px;
  color: #17a1ff;
  font-weight: 500;
  padding-top: 30px;
  padding-bottom: 10px;
  margin: 0 auto;
}
hr {
  background-color: #f2f2f2;
  height: 1px;
  border: none;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
}
.form-btn {
  text-align: center;
}
</style>