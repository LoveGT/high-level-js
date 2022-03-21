class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

const depend = new Depend();

// 对象的响应式
const obj = {
  name: "why",
  age: 18,
};

const info = {
  height: 1.88,
  address: "深圳市",
};

// 封装一个响应式的函数
let activeReactiveFn = null
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封装一个获取depend的函数
const targetMap = new WeakMap();
function getDepend(target, key) {
  // 1.根据target对象获取map的过程
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  // 2.根据key获取depend对象
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend
}

// 监听属性对象的变更：proxy(vue3)/defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 根据target和key获取对应的depend
    const depend = getDepend(target, key)
    // 给depend对象中添加函数
    depend.addDepend(activeReactiveFn)
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  },
});
console.log('fn1开始执行-----------')
watchFn(function () {
  const newName = objProxy.name;
  console.log("你好啊，李银河");
  console.log(objProxy.name,1111)
});
console.log('fn1结束执行-------------')

console.log('fn2开始执行+++++++++++++++++')
watchFn(function () {
  console.log(objProxy.age, 'demo function----------');
});
console.log('fn2结束执行+++++++++++++++++')
function bar() {
  console.log("普通的其他函数");
}

// objProxy.name = "gaoao"
objProxy.age = 200
