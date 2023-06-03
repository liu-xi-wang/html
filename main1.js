// import { alias } from "./utils.js"
// console.log(alias)

const fs = require("fs")
// fs.readFile("./text.txt", (err, data) => {
//   if (err) {
//     return err
//   }
//   if (data) {
//     console.log(data)
//   }
// })

// const textStream = fs.createReadStream("./text.txt", {
//   start: 5,
//   end: 9,
//   highWaterMark: 1,
// })
// textStream.on("data", (data) => {
//   console.log(data.toString())
//   textStream.pause()
//   setTimeout(() => {
//     textStream.resume()
//   }, 1000)
// })

// const textStream = fs.createWriteStream("./aaa.txt")
// textStream.write("hope")
// textStream.close()

// textStream.on("finish", () => {
//   console.log("finish")
// })
// textStream.on("close", () => {
//   console.log("close")
// })
// fs.readFile("./aaa.txt", null, (err, data) => {
//   fs.writeFile("./aaaCopy.txt", data, "utf8", () => {
//     console.log("写入成功")
//   })
// })

// const readStream = fs.createReadStream("./aaa.txt", undefined)
// const writeStream = fs.createWriteStream("./aaaCopy10.txt", undefined)

// // readStream.on("data", (data) => {
// //   writeStream.write(data)
// // })
// // readStream.on("end", () => {
// //   writeStream.close()
// // })
// readStream.pipe(writeStream)

const writeStream = fs.createWriteStream("./aaaCopy188.txt", {
  flags: "a+",
  start: 5,
})

writeStream.write("+hope")
writeStream.close()
