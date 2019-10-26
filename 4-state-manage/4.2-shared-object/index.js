const state = {
  count: 0
}

const Counter = {
  render: h => h('div', state.count)
}

new Vue({
  el: '#app',
  data: state,
  components: { Counter },
  methods: {
    inc() {
      state.count++;
    }
  }
})