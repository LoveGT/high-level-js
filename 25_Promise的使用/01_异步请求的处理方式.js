function requestData(url, successCallback, failCallback) {
  setTimeout(() => {
    if (url === "kobe") {
      let name = ["abc", "cba"];
      successCallback(name);
    } else {
      let errMsg = "请求失败";
      failCallback(errMsg);
    }
  }, 1000);
}

requestData(
  "kobe",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
