var validationPlugin = {
  install(Vue) {
    Vue.mixin({
      computed: {
        $v() {
          let valid = true
          const errors = []
          const rules = this.$options.validations

          Object.keys(rules || {}).forEach(key => {
            const rule = rules[key]
            const value = this[key]
            const result = rule.validate(value)
            if (!result) {
              valid = false
              errors.push(rule.message(key, value))
            }
          })
          return {
            valid,
            errors
          }
        }
      }
    })
  }
}

Vue.use(validationPlugin)


//邮箱正则
const emailRE = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;

new Vue({
  el: '#app',
  data: {
    text: 'foo',
    email: ''
  },
  validations: {
    text: {
      validate: value => value.length >= 5,
      message: (key, value) => `${key} should have a min length of 5, but got ${value.length}`
    },
    email: {
      validate: value => emailRE.test(value),
      message: key => `${key} must be a valid email`
    }
  },
  methods: {
    validate(e) {
      if (!this.$v.valid) {
        e.preventDefault;
        alert('not valid!')
      }
    }
  }
})