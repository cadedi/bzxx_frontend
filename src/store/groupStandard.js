import { reqGroupStandard  } from "@/api";
const state = {
  groupStandardMsg:{},
};
const actions = {
  async getGroupStandard({commit},params={targetPage:1}){
    let result = await reqGroupStandard(params);
    if(result.status == 200){
      commit("GETGROUPSTANDARD",result.data);
    }
  }
};
const mutations = {
  GETGROUPSTANDARD(state,groupStandardMsg){
    state.groupStandardMsg = groupStandardMsg.extend;
  }
};
const getters = {
  groupStandardInfo(state){
    return state.groupStandardMsg.data || [];
  }
};
export default {
  state,
  actions,
  mutations,
  getters
}