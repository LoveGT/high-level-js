const obj1 = {name:'why'}
const obj2 = {name:'kobe'}

// 1.map允许对象作为key值
const map = new Map()
map.set(obj1, "aaaa")
map.set(obj2, "bbbb")
console.log(map);

const map2 = new Map([[obj1,'aaaa'], [obj2,"bbbbb"], [2,'ccccc']])
console.log(map2);
// 1.5 size方法
console.log(map2.size, 11111111);
// 2. get方法
console.log(map2.get(2))

// 3. has方法
console.log(map2.has(obj1));

// 4. delete方法
map2.delete(obj2)
console.log(map2);

// 5. clear方法
map2.clear()

// 6. 遍历map
map.forEach((item, key) => {
  console.log(item, key);
})
// for (const item of map) {
for (const [key, value] of map) {
    console.log(key,value,111);
}
