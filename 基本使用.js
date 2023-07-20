const mysql = require('mysql2')
const connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user:"root",
  password:'hope123456',
  database:'music_db'
})

const statement = `SELECT * FROM products;`
connection.query(statement,(err,values,fields) => {
  if(err){
    console.log(err);
    return
  }
  console.log(values);
  console.log(fields);
})