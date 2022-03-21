class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const depend = new Depend()

// 对象的响应式
const obj = {
  name: "why",
  age: 18,
};

const info = {
  height: 1.88,
  address: '深圳市'
}
// 监听属性对象的变更：proxy(vue3)/defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})

// 封装一个响应式的函数
function watchFn(fn) {
  depend.addDepend(fn)
}

watchFn(function foo() {
  const newName = objProxy.name;
  console.log("你好啊，李银河");
});

watchFn(function demo() {
  console.log(objProxy.name);
});

function bar() {
  console.log("普通的其他函数");
}

objProxy.name = "kobe";
objProxy.name = "curry";