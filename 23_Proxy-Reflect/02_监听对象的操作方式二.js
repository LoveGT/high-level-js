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
});
objProxy.name = "zq";
objProxy.age = 27;

console.log(objProxy.name);
console.log(objProxy.age);
console.log(obj.name);
console.log(obj.age);
