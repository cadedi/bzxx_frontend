import Vuex from "vuex";
import Vue from "vue";
//使用插件
Vue.use(Vuex);
import home from "./home";
import nationalStandard from "./nationalStandard";
import industryStandard from "./industryStandard"
//需要暴露Vuex.Store类的实例(你需要暴露这个类的实例，如果你不对外暴露，外部是不能使用的)
export default new Vuex.Store({
  //模块：把小仓库进行合并变为大仓库
  modules: {
    home,
    nationalStandard,
    industryStandard
  },
});
