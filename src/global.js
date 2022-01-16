import Vue from 'vue'
import routerUtil from "@/router/util.js";
Vue.prototype.$routerUtil = routerUtil;
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, {
  size: 'medium' // set element-ui default size
});