function createStore({ state, mutations }) {
  return new Vue({
    data: { state },
    methods: {
      commit(mutationType) {
        mutations[mutationType](this.state)
      }
    }
  })
}

const store = createStore({
  state: { count: 0 },
  mutations: {
    inc(state) {
      state.count++;
    }
  }
})

const Counter = {
  render: h => h('div', store.state.count)
}

new Vue({
  el: '#app',
  components: { Counter },
  methods: {
    inc() {
      store.commit('inc');
    }
  }
})