const koa = require("koa")
const app = new koa()

app.use((context, next) => {
  console.log(context)
  if (context.request.path === "/user") {
    if (context.request.method === "POST") {
      context.response.body = "创建用户成功"
    } else if (context.request.method === "GET") {
      context.response.body = "获取用户成功"
    }
  } else if (context.request.path === "/goods") {
    context.response.body = "商品列表"
  }
})
app.listen(8000, () => {
  console.log("koa 🚀")
})
