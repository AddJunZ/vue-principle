// index.js
var convert = (obj) => {
  Object.keys(obj).forEach(key => {
    var val = obj[key];
    Object.defineProperty(obj, key, {
      // 对于一些原先没有的属性没有监听到
      set(newV) {
        val = newV;
        console.log(`setting key "${key}" to ${newV}`)
      },
      get() {
        console.log(`getting key "${key}": ${val}`)
        return val;
      }
    })
  })
}