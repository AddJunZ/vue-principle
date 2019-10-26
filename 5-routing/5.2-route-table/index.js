const Foo = { template: `<div>foo</div>` }
const Bar = { template: `<div>bar</div>` }
const NotFound = { template: `<div>not found</div>` }

const routeTable = {
  'foo': Foo,
  'bar': Bar
}

window.addEventListener('hashchange', () => {
  app.url = window.location.hash.slice(1);
})

// 'user/:username'

const app = new Vue({
  el: '#app',
  data: {
    url: window.location.hash.slice(1)
  },
  render(h) {
    return h('div', [
      h(routeTable[this.url] || NotFound),
      h('a', { attrs: { href: '#foo' } }, 'foo'),
      ' ',
      h('a', { attrs: { href: '#bar' } }, 'bar'),
    ])
  }
})