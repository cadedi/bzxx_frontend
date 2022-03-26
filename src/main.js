import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
Vue.config.productionTip = false

import {Table,TableColumn,Cascader,Select,Option,} from 'element-ui';
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Cascader.name, Cascader);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);

//引入swiper样式
import "swiper/css/swiper.css";


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
