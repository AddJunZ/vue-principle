function app({ el, model, view, actions }) {
  const wrappedActions = {};
  Object.keys(actions).forEach(key => {
    const originalAction = actions[key]
    wrappedActions[key] = () => {
      const nextModel = originalAction(vm.model)
      vm.model = nextModel
    }
  })
  const vm = new Vue({
    el,
    data: {
      model
    },
    render(h) {
      return view(h, this.model, wrappedActions)
    }
  })
}

app({
  el: '#app',
  model: {
    count: 0
  },
  actions: {
    inc: ({ count }) => ({ count: count + 1 }),
    dec: ({ count }) => ({ count: count - 1 }),
  },
  view: (h, model, actions) => h('div', { attrs: { id: 'app' } }, [
    model.count, ' ',
    h('button', { on: { click: actions.inc } }, '+'),
    h('button', { on: { click: actions.dec } }, '-')
  ])
})
