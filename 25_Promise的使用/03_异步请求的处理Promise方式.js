function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "kobe") {
        let name = ["abc", "cba"];
        resolve(name);
      } else {
        let errMsg = "请求失败";
        reject(errMsg);
      }
    }, 1000);
  });
}
const requestPromise = requestData()
requestPromise.then(res=> {
  console.log(res, 'res')
}, err => {
  console.log(err, 'err')
})
