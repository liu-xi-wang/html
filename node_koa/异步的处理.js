const Koa = require("koa")
const Router = require("@koa/router")

const app = new Koa()
const userRouter = new Router({ prefix: "/user" })
function runAsync() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      resolve("tableData")
    }, 2000)
  })
  return p
}

app.use(async (ctx, next) => {
  // ctx.userRouter available
  ctx.msg = "hope!11!"
  await next()
  ctx.body = ctx.msg
})
app.use(async (ctx, next) => {
  // ctx.userRouter available
  ctx.msg += "hope!22!"
  await next()
})
app.use(async (ctx, next) => {
  const res = await runAsync()
  console.log(res)
  ctx.msg += res
})
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.listen(8000, () => {
  console.log("koa 🚀")
})
