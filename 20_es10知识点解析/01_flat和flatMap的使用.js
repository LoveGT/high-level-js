const nums = [
  10,
  20,
  [2, 9],
  [
    [30, 40],
    [10, 45],
  ],
  78,
  [55, 8],
];

// const newNum = nums.flat()
// console.log(newNum)
// let result = [];

// // function flatFn(arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (Array.isArray(arr[i])) {
// //       // console.log(arr[i], 'arr')
// //       flatFn(arr[i])
// //     } else {
// //       result.push(arr[i]);
// //     }
// //   }
// //   return result;
// // }

// function flatFn2(arr) {
//   return arr.reduce((prev, current) => {
//       return prev.concat(Array.isArray(current)?flatFn2(current) : current)
//   },[])
// }
// console.log(flatFn2(nums));

// flatMap的使用
const nums2 = [10,20,30]

const newNum2 = nums2.flatMap(item => {
  return item * 2
})
console.log(newNum2)

// flatMap的应用场景
const message = ['hello world', 'hello javascript', 'hello Vue' ] 

const words = message.flatMap(item => {
  return item.split(" ")
})
console.log(words)