import { reqIcsCategory } from "@/api";
const state = {
  nationalStandardMsg:{},
  icsCategoryMsg:{}
};
const actions = {
  async getNationalStandard({commit},params={targetPage:3}){
    
  },
  async getIcsCategory({commit}){
    let result = await reqIcsCategory();
    if(result.status == 200){
      commit("GETICSCATEGORY",result.data)
    }
  }
};
const mutations = {
  GETNATIONALSTANDARD(state,ntionalStandardMsg){
    
  },
  GETICSCATEGORY(state,icsCategoryMsg){
    state.icsCategoryMsg = icsCategoryMsg.extend
  }
};
const getters = {
  ntionalStandardInfo(state){
    
  },
  icsCategory(state){
    return state.icsCategoryMsg.data || [];
  }
};
export default {
  state,
  actions,
  mutations,
  getters
}