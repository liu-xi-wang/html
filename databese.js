const mysql = require('mysql2')
const phoneJson = require('./phone.json')
const connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user:"root",
  password:'hope123456',
  database:'music_db'
})

const statement = `INSERT INTO products SET ?;`

for(let phone of phoneJson){
  connection.query(statement,phone)
}