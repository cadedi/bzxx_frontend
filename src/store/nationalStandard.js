import { reqIcsCategory,reqNationalStandard,reqNationalDeatil } from "@/api";
const state = {
  nationalStandardMsg:{},
  icsCategoryMsg:{},
  infoDetailMsg:{}
};
const actions = {
  async getNationalStandard({commit},params={targetPage:1}){
    let result = await reqNationalStandard(params);
    if(result.status == 200){
      commit("GETNATIONALSTANDARD",result.data);
    }
  },
  async getIcsCategory({commit}){
    let result = await reqIcsCategory();
    if(result.status == 200){
      commit("GETICSCATEGORY",result.data);
    }
  },
  async getInfoDetail({commit},id){
    let result = await reqNationalDeatil(id);
    if(result.status == 200){
      commit("GETINFODETAIL",result.data);
    }
  }
};
const mutations = {
  GETNATIONALSTANDARD(state,nationalStandardMsg){
    state.nationalStandardMsg = nationalStandardMsg.extend;
  },
  GETICSCATEGORY(state,icsCategoryMsg){
    state.icsCategoryMsg = icsCategoryMsg.extend;
  },
  GETINFODETAIL(state,infoDetailMsg){
    state.infoDetailMsg = infoDetailMsg.extend;
  }
};
const getters = {
  nationalStandardInfo(state){
    return state.nationalStandardMsg.data || [];
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