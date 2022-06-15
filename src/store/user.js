import { reqLogin } from "@/api";
const state = {
  userInfo:{},
  loginRes:"",
  token:""
};
const actions = {
  async userLogin({commit},user){
    let result = await reqLogin(user);
    console.log(result)
    if(result.status == 200){
      commit("USERLOGIN",result.data);
    }
  }
};
const mutations = {
  USERLOGIN(state,userLoginMsg){
    state.loginRes = userLoginMsg.extend.loginRes
    if(userLoginMsg.code == 200){
      state.userInfo = userLoginMsg.extend.userInfo
      state.token = userLoginMsg.extend.token
    } 
  }
};
const getters = {
 
};
export default {
  state,
  actions,
  mutations,
  getters
}