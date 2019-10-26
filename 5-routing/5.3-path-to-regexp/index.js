const pathToRegexp = require("path-to-regexp");
const Foo = {
  props: ['id'],
  template: `<div>foo with id: {{ id }}</div>`
}

const Bar = { template: `<div>bar</div>` }
const NotFound = { template: `<div>not found</div>` }

//expose to user
const routeTable = {
  '/foo/:id': Foo,
  '/bar': Bar
}

const compiledRoutes = []
Object.keys(routeTable).forEach(path => {
  const dynamicSegments = []
  const regex = pathToRegexp(path, dynamicSegments)
  const component = routeTable[path]
  compiledRoutes.push({
    component,
    regex,
    dynamicSegments
  })
})
console.log('compiledRoutes',compiledRoutes)

window.addEventListener('hashchange', () => {
  app.url = document.location.hash.slice(1)
})

const app = new Vue({
  el: '#app',
  data: {
    url: window.location.hash.slice(1)
  },
  render(h) {
    const path = '/' + this.url
    console.log('path',path);
    let componentToRender
    let props = {}
    compiledRoutes.some(route => {
      console.log('route',route)
      const match = route.regex.exec(path);
      console.log('match',match)//null
      if(match){
        componentToRender = route.component
        route.dynamicSegments.forEach((segment,index) => {
          console.log('segment.name',segment.name)
          props[segment.name] = match[index + 1]
        })
      }
    })
    console.log('componentToRender',componentToRender)//null

    return h('div', [
      h(componentToRender || NotFound, { props }),
      h('a', { attrs: { href: '#foo/123' } }, 'foo 123'),
      ' ',
      h('a', { attrs: { href: '#foo/234' } }, 'foo 234'),
      ' ',
      h('a', { attrs: { href: '#bar' } }, 'bar'),
    ])
  }
})

