import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from "@/store/index.js";
import locale from 'element-ui/lib/locale'
import en from "./config/en.js";
import zh from './config/zh.js';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(VueI18n)

const messages = {
  en: Object.assign(en, enLocale),
  zh: Object.assign(zh, zhLocale),
}

const i18n = new VueI18n({
	locale: store.getters.i18nType,
	messages
})
locale.i18n((key, value) => i18n.t(key, value))

export default i18n;
