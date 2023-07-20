const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const multer  = require('multer')

//创建app对象
const app = express()

const upload = multer({
  storage:multer.diskStorage({
    destination(req,file,cb){
      cb(null,'./uploads')
    },
    filename(req,file,cb){
      cb(null,file.originalname)
    }
  })
})
app.use(morgan('combined',{stream:fs.createWriteStream('./logs/access.txt',{flags:'a+'})}))


//便携中间件
app.post('/upload', upload.single('photo'), (req,res,next) => {
  console.log(req.file);
  res.end('上传成功！')
})

//便携中间件
app.post('/photo', upload.array('photo'), (req,res,next) => {
  console.log(req.file);
  res.end('上传成功！')
})

//便携中间件
app.post('/info', multer().any(), (req,res,next) => {
  console.log(req.body);
  res.end('上传成功！')
})

//便携中间件
app.get('/query',(req,res,next) => {
  console.log(req.query);
  res.end('上传成功！')
})

//便携中间件
app.get('/user/:id',(req,res,next) => {
  console.log(req.params);
  res.end('上传成功！')
})

//便携中间件
app.get('/login',(req,res,next) => {
  // res.end('上传成功！')
  res.status(500)
  res.json({
    name:'hope',
    age:23
  })
})

//启动服务器
app.listen(9000,() => {
  console.log('express 🚀');
})