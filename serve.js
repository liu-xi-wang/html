const http = require("http")
const url = require("url")
const querystring = require("querystring")

const serve = http.createServer((req, res) => {
  // res.end(() => {
  //   console.log("res")
  // })
  if (req.headers["content-type"] === "application/json") {
    if (url.parse(req.url).pathname === "/login") {
      req.setEncoding("utf-8")
      let isLogin = false
      req.on("data", (data) => {
        const bodyParam = JSON.parse(data)
        if (
          !(
            bodyParam &&
            bodyParam.name === "hope" &&
            bodyParam.password === "123456"
          )
        ) {
          isLogin = false
        } else {
          isLogin = true
        }
      })
      req.on("end", () => {
        if (isLogin) {
          // res.statusCode = 200
          res.write("登录中。。。")
          res.write("登录中。。。")
          res.end(`登录成功！！`)
        } else {
          // res.statusCode = 500
          // res.writeHead(500)
          res.end(`账号密码错误`)
        }
      })

      res.statusCode = 500
    } else {
      res.end(`请求路径错误`)
    }
  } else {
    res.end(`请求参数格式错误`)
  }
})
serve.listen(8000, () => {
  console.log("🚀")
})
