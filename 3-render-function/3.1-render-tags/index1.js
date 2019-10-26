Vue.component('example', {
  props: ['tags'],
  render(h) {
    return h('div', this.tags.map((tag, index) => h(tag, index)))
  }
})
