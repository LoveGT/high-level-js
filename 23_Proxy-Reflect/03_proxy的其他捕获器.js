const obj = {
  name: "gaotao",
  age: 18,
};

const objProxy = new Proxy(obj, {
  get: function (target, key) {
    console.log(target, "key", key);
    return target[key];
  },
  set: function (target, key, newVal) {
    console.log(target, "key2", key);
    target[key] = newVal;
  },
  has(targrt,  key) {
    console.log(`监听到对象的${key}的in操作`)
    return key in targrt
  },
  deleteProperty: function(target, key) {
    console.log(`监听到对象的${key}的delete操作`)
    delete target[key]
  }
});

console.log("name" in objProxy)
delete objProxy.name
console.log(obj)
