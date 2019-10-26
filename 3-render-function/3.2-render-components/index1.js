const Foo = {
  render:h => h('div','foo')
}

const Bar = {
  render:h => h('div','bar')
}

//只有Vue component的render才带有h函数
Vue.component('example', {
  props:['ok'],
  render(h){
    return this.ok?h(Foo):h(Bar);
  }
})