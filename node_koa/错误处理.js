const fs = require("fs")
const Koa = require("koa")
const Router = require("@koa/router")

const app = new Koa()
const userRouter = new Router({ prefix: "/user" })

userRouter.get("/", (ctx, next) => {
  // const readStream = fs.createReadStream("../1685712019630.jpeg")
  // ctx.type = "image/jpeg"

  ctx.app.emit("error", 4101, ctx)
})

app.on("error", (code, ctx) => {
  switch (code) {
    case 401:
      ctx.body = {
        code: 401,
        data: {
          name: "hope",
          age: 24,
        },
        msg: "登录失败！",
      }
      break
    default:
      ctx.body = {
        code: 404,
        msg: "访问路径不存在！",
      }
      break
  }
})

app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.listen(8000, () => {
  console.log("koa 🚀")
})
