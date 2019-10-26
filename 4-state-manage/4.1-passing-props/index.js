new Vue({
  el: '#app',
  data: { count: 0 },
  components: {
    Counter: {
      props: ['count'],
      template: `<div>{{ count }}</div>`
    }
  }
})