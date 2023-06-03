// const http = require("http")
const axios = require("axios")
axios.get("http://localhost:8000/").then((res) => {
  console.log(res)
})

// http.get("http://localhost:8000/", (res) => {
//   res.on("data", (data) => {
//     console.log(data.toString())
//   })
//   res.on("end")
// })

// const req = http.request({ port: 8000, method: "POST" }, (res) => {
//   res.on("data", (chunk) => {
//     console.log(`BODY: ${chunk}`)
//   })
//   res.on("end", () => {
//     console.log("No more data in response.")
//   })
// })

// req.end()
