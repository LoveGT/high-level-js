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
function watchFn(fn) {
  depend.addDepend(fn);
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
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  },
});

watchFn(function () {
  const newName = objProxy.name;
  console.log("你好啊，李银河");
});

watchFn(function () {
  console.log(objProxy.name);
});

function bar() {
  console.log("普通的其他函数");
}

objProxy.name = "gaoao"
// const objMap = new Map()
// objMap.set('name', 'nameDepend')
// objMap.set('age', 'ageDepend')

// console.log(objMap.get("name"))
// // objProxy.name,  = "kobe";
// // objProxy.name = "curry";

// // info对象

// const infoMap = new Map()
// infoMap.set('height', 'heightDepend')
// infoMap.set('address', 'addresstDepend')

// const targetMap = new WeakMap()

// targetMap.set(obj, objMap)
// targetMap.set(info, infoMap)

// // obj.name
// const depend = targetMap.get(obj).get('name')
// depend.notify()
