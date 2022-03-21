const obj = {
  _name: "tao",
  get name() {
    return this._name;
  },
  set name(newVal) {
    this._name = newVal;
  },
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) { //receiver是代理对象
    Reflect.get(target, key);
  },
  set: function (target, key, newVal) {
    Reflect.set(target, key, newVal)
  },
});
obj.name = "kobe";
console.log(objProxy.name);
