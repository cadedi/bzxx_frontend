import { reqEnterpriseStandard  } from "@/api";
const state = {
  enterpriseStandardMsg:{},
};
const actions = {
  async getEnterpriseStandard({commit},params={targetPage:1}){
    let result = await reqEnterpriseStandard(params);
    if(result.status == 200){
      commit("GETENTERPRISESTANDARD",result.data);
    }
  }
};
const mutations = {
  GETENTERPRISESTANDARD(state,enterpriseStandardMsg){
    state.enterpriseStandardMsg = enterpriseStandardMsg.extend;
  }
};
const getters = {
  enterpriseStandardInfo(state){
    return state.enterpriseStandardMsg.data || [];
  }
};
export default {
  state,
  actions,
  mutations,
  getters
}