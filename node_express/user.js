const express = require('express')

const userRouter = express.Router()


//便携中间件
userRouter.get('/',  (req,res,next) => {
  res.json('用户列表~')
})
//便携中间件
userRouter.delete('/:id',  (req,res,next) => {
  console.log(req.params);
  res.json('删除成功~')

})
//便携中间件
userRouter.patch('/:id',  (req,res,next) => {
  console.log(req.params);
  res.json('修改成功~')

})

module.exports = userRouter

