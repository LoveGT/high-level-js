// 1.创建set结构
// const set = new Set()

// set.add(10)
// set.add(100)
// set.add(1000)
// set.add(10000)

// console.log(set);

// 2.数据去重
let arr = [10,11,12,13,14,15,15,17,17]
// let  newArr = []

// for (const item of arr) {
//   if(newArr.indexOf(item)===-1) {
//     newArr.push(item)
//   }
// }

const arrSet = new Set(arr)
const newArr = Array.from(arrSet)
console.log(newArr); 

// 3.size属性
console.log(arrSet.size);

// 4.添加方法
arrSet.add(100)

// 5.删除方法
arrSet.delete(17)

// 6.has方法
console.log(arrSet.has(100));

// 7.clear方法
// arrSet.clear() 
console.log(arrSet);

// 8.遍历
arrSet.forEach(item => {
  console.log(item);
})

for (const  item of arrSet) {
  console.log(item);
}