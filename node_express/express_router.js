const express = require('express')

//创建app对象
const app = express()

const userRouter = require('./user.js')
app.use(express.json())

app.post('/login',  (req,res,next) => {
  const {userName,password} = req.body
  if( !userName || !password ){
    next(-10001)
  }else if(userName !== 'hope' || password !== '123456' ){
    next(-10002)
  }else{
    res.json({
      code: 200,
      message: '登录成功'
    })
  }
})

app.use(( err, req, res, next) => {
  console.log('err',err);
  const message = '未知错误1～'
  switch (err) {
    case -10001:
      res.json({
        code: -10001,
        message: '用户名或密码错误'
      })
      break;
    case -10002:
      res.json({
        code: -10002,
        message: '请输入正确的用户名和密码'
      })
      break;
  
    default:
      res.json({
        code: 500,
        message
      })
      break;
  }

})

app.use('/user',userRouter)
app.use(express.static('./uploads'))
app.use(express.static('./build'))



//启动服务器
app.listen(9000,() => {
  console.log('express 🚀');
})