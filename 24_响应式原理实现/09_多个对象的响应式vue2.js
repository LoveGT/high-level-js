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
//封装一个函数  跟vue3的区别
// { name: 'why', age: 18 }
function reactive(obj) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get: function () {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set: function (newValue) {
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      },
    });
  });
  return obj
}
// 监听属性对象的变更：proxy(vue3)/defineProperty(vue2) -
const objProxy = reactive(obj);

const info = {
  height: 1.88,
  address: "深圳市",
};

const infoProxy = reactive(info);

watchFn(() => {
  console.log(infoProxy.address);
});

infoProxy.address = "广州市";

// 简写方式
foo = reactive({
  name: "foo",
});

watchFn(() => {
  console.log(foo.name);
});
foo.name = "bar";
