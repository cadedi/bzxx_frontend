import { reqIndustryArea,reqIndustryStandard } from "@/api";
const state = {
  industryStandardMsg:{},
  industryAreaMsg:{}
};
const actions = {
  async getIndustryStandard({commit},params={targetPage:1}){
    let result = await reqIndustryStandard(params);
    if(result.status == 200){
      commit("GETINDUSTRYSTANDARD",result.data);
    }
  },
  async getIndustryArea({commit}){
    let result = await reqIndustryArea();
    if(result.status == 200){
      commit("GETINDUSTRYAREA",result.data)
    }
  }
};
const mutations = {
  GETINDUSTRYSTANDARD(state,industryStandardMsg){
    state.industryStandardMsg = industryStandardMsg.extend;
  },
  GETINDUSTRYAREA(state,industryAreaMsg){
    state.industryAreaMsg = industryAreaMsg.extend
  }
};
const getters = {
  industryStandardInfo(state){
    return state.industryStandardMsg.data || [];
  },
  industryArea(state){
    return state.industryAreaMsg.data || [];
  }
};
export default {
  state,
  actions,
  mutations,
  getters
}