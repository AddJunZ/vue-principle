const store = new Vue({
  data(){
    return {
      count:0
    }
  },
  methods: {
    inc() {
      this.count++;
    }
  }
})

const Counter = {
  render: h => h('div', store.count)
}

new Vue({
  el: '#app',
  data: store,
  components: {Counter},
  // methods: {
  //   inc() {
  //     store.inc()
  //   }
  // }
})