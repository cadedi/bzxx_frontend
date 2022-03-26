import { reqStandardRank } from "@/api";
const state = {
  standardRankMsg:{}
};
const actions = {
  async getStandardRank({commit},params={targetPage:3}){
    let result = await reqStandardRank(params);
    if(result.status == 200){
      commit("GETSTANDARDRANK",result.data)
    }
  }
};
const mutations = {
  GETSTANDARDRANK(state,standardRankMsg){
    state.standardRankMsg = standardRankMsg.extend
  }
};
const getters = {
  standardRankInfo(state){
    return state.standardRankMsg.data || [];
  }
};
export default {
  state,
  actions,
  mutations,
  getters
}