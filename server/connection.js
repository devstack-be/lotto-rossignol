import mysql from 'mysql'

var production = {
  connectionLimit : 10,
  host     : 'eu-cdbr-west-02.cleardb.net',
  user     : 'b68198d9af1100',
  password : '8361e556',
  database: 'heroku_2eddafca139694a'
}
var development = {
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'lotto'
}
var params = process.env.NODE_ENV === 'development' ? development : production
console.log(params)
var pool  = mysql.createPool(params);

export default pool