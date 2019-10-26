const RulesPlugin = {
  install(Vue) {
    Vue.mixin({
      created() {
        if (this.$options.rules) {
          Object.keys(this.$options.rules).forEach(key => {
            const rule = this.$options.rules[key]
            this.$watch(key, newValue => {
              const result = rule.validate(newValue)
              if (!result) {
                console.log(rule.message)
              }
            })
          })
        }
      }
    })
  }
}

Vue.use(RulesPlugin)