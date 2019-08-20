const express = require('express')
const bodyParse = require('body-parser')
const multipart = require('connect-multiparty')
const config = require("./config")
const multipartMiddleware = multipart()
const app = express()
const Mock = require('mockjs')

// 定义mock方法
const mock = (data, params) => {
  if (Object.prototype.toString.call(data) === "[object Object]" || Object.prototype.toString.call(data) === "[object Array]") {
    return Mock.mock(data);
  } else if (typeof data === "function") {
    return Mock.mock(data(params));
  } else {
    return "error: data 需要是object 或者 function 类型";
  }
};

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

// 绑定路由信息
config.forEach(({ method, url, data }) => {
  if (method === "get") {
    app.get(url, (req, res) => {
      res.json(mock(data, req.query));
    });
  } else if (method === "post") {
    console.log(url)
    app.post(url, multipartMiddleware, (req, res) => {
      res.json(mock(data, req.body));
    });
  }
});

// 支持自定义端口
let port = 8081
process.argv.forEach((arg, index, arr) => {
  if (arg === '--port') {
    port = arr[index + 1] || 8081
    return false
  }
})

module.exports = app.listen(port, () => {
  console.log("Mock Server listening on http://localhost:" + port);
});