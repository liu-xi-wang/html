const mysql = require('mysql2')
const connectionPool = mysql.createPool({
  host:'localhost',
  port: 3306,
  user:"root",
  password:'hope123456',
  database:'music_db',
  connectionLimit:5
})

const statement = `SELECT * FROM products WHERE brand = ?;`
// connection.query(statement,(err,values,fields) => {
//   if(err){
//     console.log(err);
//     return
//   }
//   console.log(values);
//   console.log(fields);
// })

connectionPool.promise().execute(statement, ['苹果']).then(res => {
  console.log(res);
})