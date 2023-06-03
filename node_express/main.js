const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
//创建app对象
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use(morgan('combined',{stream:fs.createWriteStream('./logs/access.txt')}))


//便携中间件
app.post('/login',(req,res,next) => {
  console.log(req.body);
  if(req.body.name === 'hope' && req.body.password === '123456'){
    res.end('登陆成功！')
  }else{
    res.end('账号密码错误！')
  }
 
})

//启动服务器
app.listen(9000,() => {
  console.log('express 🚀');
})