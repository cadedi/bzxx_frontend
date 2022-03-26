import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
Vue.config.productionTip = false

import {Table,TableColumn,Cascader,Select,Option,Input,Button,Pagination,Carousel,CarouselItem} from 'element-ui';
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Cascader.name, Cascader);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Pagination.name,Pagination);
Vue.component(Carousel.name,Carousel);
Vue.component(CarouselItem.name,CarouselItem);




//引入swiper样式
import "swiper/css/swiper.css";


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store
}).$mount('#app')
