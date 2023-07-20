const Koa = require("koa")
const Router = require("@koa/router")

const app = new Koa()
const userRouter = new Router({ prefix: "/user" })

userRouter.get("/", (ctx, next) => {
  // ctx.userRouter available
  ctx.body = "hope!11!"
})

app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.listen(8000, () => {
  console.log("koa 🚀")
})
