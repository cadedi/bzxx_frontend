import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
Vue.config.productionTip = false


//引入swiper样式
import "swiper/css/swiper.css";


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
