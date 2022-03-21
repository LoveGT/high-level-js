function foo() {}
const fooProxy = new Proxy(foo, {
  apply: function (target, thisArg, argArr) {
    console.log("apply进行调用");
    target.apply(thisArg, argArr);
  },
  construct: function (target, argArr, newTatget) {
    console.log('construct调用')
    return new target(...argArr)
  },
});
foo();

fooProxy.apply({}, ["abc", "cba"]);

new fooProxy('aaaa','bbbb')