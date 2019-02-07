import mysql from 'mysql'

var production = {
  connectionLimit : 10,
  host     : 'eu-cdbr-west-02.cleardb.net',
  user     : 'b50826c6f33468',
  password : '552452bd',
  database: 'heroku_d8e47286581e2ab'
}
var development = {
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'lotto'
}
var params = process.env.NODE_ENV === 'development' ? development : production

var pool  = mysql.createPool(params);

export default pool