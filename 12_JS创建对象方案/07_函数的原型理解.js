/*
 * @Author: your name
 * @Date: 2022-02-16 18:12:08
 * @LastEditTime: 2022-02-16 18:16:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \high-level-js\12_JS创建对象方案\07_函数的原型理解.js
 */
function foo () {

}

console.log(foo.__proto__); //函数的隐式原型


// 函数会多出来一个显式原型
console.log(foo.prototype, 'prototype');

var f1 = new foo()
var f2 = new foo()

console.log(f1.__proto__ === foo.prototype);
console.log(f2.__proto__ === foo.prototype);