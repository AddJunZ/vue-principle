const i18nPlugin = {
  install(Vue, locales) {
    Vue.prototype.$t = function (id) {
      return locales[this.$root.lang][id]
    }
  }
}

Vue.use(i18nPlugin, /* option */{
  en: { 'welcome-message': 'hello' },
  zh: { 'welcome-message': '你好' },
  jp: { 'welcome-message': 'こんにちは' },
})

new Vue({
  el: '#app',
  data: {
    lang: 'en'
  },
  methods: {
    changeLang(lang) {
      this.lang = lang
    }
  }
})