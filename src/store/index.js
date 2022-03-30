import Vuex from "vuex";
import Vue from "vue";
//使用插件
Vue.use(Vuex);
import home from "./home";
import nationalStandard from "./nationalStandard";
import industryStandard from "./industryStandard";
import groupStandard from "./groupStandard";
export default new Vuex.Store({
  //模块：把小仓库进行合并变为大仓库
  modules: {
    home,
    nationalStandard,
    industryStandard,
    groupStandard
  },
});
