import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

import {Table,TableColumn,Cascader,Select,Option,
        Input,Button,Pagination,Carousel,CarouselItem,
        Radio,RadioGroup,RadioButton,Icon,Form,FormItem,Message} from 'element-ui';
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
Vue.component(Radio.name,Radio);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(RadioButton.name,RadioButton);
Vue.component(Icon.name,Icon);
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Message.name,Message);


Vue.prototype.$message = Message



import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store
}).$mount('#app')
