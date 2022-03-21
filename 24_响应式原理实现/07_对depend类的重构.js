//需要收集的响应式函数
let activeReactiveFn = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn);
  }
  //+
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
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
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
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

  return depend;
}

// 监听属性对象的变更：proxy(vue3)/defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 根据target和key获取对应的depend
    const depend = getDepend(target, key);
    // 给depend对象中添加函数
    // depend.addDepend(activeReactiveFn); -
    depend.depend(); //+
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  },
});

watchFn(() => {
  console.log(objProxy.name, '--------------------')
  console.log(objProxy.name, '++++++++++++++++++++')
})

objProxy.name = "kobe"