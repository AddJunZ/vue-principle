// index.js
window.Dep = class Dep {
  constructor() {
    this.subscribers = new Set();
  }
  depend() {
    if (activeUpdate) {
      //注册目前激活的更新作为订阅者
      this.subscribers.add(activeUpdate);
      console.log(this.subscribers)
    }
  }
  notify() {
    //执行订阅函数
    this.subscribers.forEach(sub => sub());
  }
}

let activeUpdate;

function autorun(update) {
  function wrappedUpdate() {
    activeUpdate = wrappedUpdate;
    update();
    activeUpdate = null;
  }
  wrappedUpdate();
}