window.addEventListener('hashchange', () => {
  app.url = window.location.hash.slice(1)
})

const app = new Vue({
  el: '#app',
  data: {
    url: window.location.hash.slice(1)
  },
  components: {
    foo: { template: `<div>foo</div>` },
    bar: { template: `<div>bar</div>` }
  }
})