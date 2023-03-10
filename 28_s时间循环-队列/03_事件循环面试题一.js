setTimeout(() => {
  console.log("setTimeOut1");

  new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    new Promise((resolve) => {
        resolve()
    }).then(() => {
      console.log('then4')
    })
    console.log('then2')
  });
});

new Promise((resolve) => {
  console.log('promise1')
  resolve()
}).then(() => {
  console.log('then1')
})

setTimeout(() => {
  console.log('setTimeOut2')
})

console.log(2)

queueMicrotask(() => {
  console.log('queueMicrotask1')
})

new Promise((resolve) => {
  resolve()
}).then(() => {
  console.log('then3')
})


/**
 * promise1
 * 2
 * then1
 * queue1  
 * then3
 * settimeout1
 * then2
 * then4
 * settimeout2
 * 
 */