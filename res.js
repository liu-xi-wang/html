const http = require("http")
const fs = require("fs")
const serve = http.createServer((req, res) => {
  console.log("监听端口")
  req.setEncoding("binary")

  const boundary = req.headers["content-type"]
    .split("; ")[1]
    .replace("boundary=", "")

  let formData = ""

  req.on("data", (data) => {
    // writeSteam.write(data)
    // console.log(data)
    formData += data
  })
  req.on("end", () => {
    const imageType = "image/jpeg"
    const imageTypePosition = formData.indexOf(imageType) + imageType.length
    let imageData = formData.substring(imageTypePosition)
    imageData = imageData.replace(/^\s\s*/, "")
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))
    console.log(formData)

    fs.writeFile(`./${Date.now()}.jpeg`, imageData, "binary", () => {
      res.end("文件储存成功！！")
    })
    // writeSteam.close()
  })
})
serve.listen(8000, () => {
  console.log("🚀")
})
