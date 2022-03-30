import Vuex from "vuex";
import Vue from "vue";
//使用插件
Vue.use(Vuex);
import home from "./home";
import nationalStandard from "./nationalStandard";
import industryStandard from "./industryStandard";
import groupStandard from "./groupStandard";
import enterpriseStandard from "./enterpriseStandard"
export default new Vuex.Store({
  modules: {
    home,
    nationalStandard,
    industryStandard,
    groupStandard,
    enterpriseStandard
  },
});
