export const development = {
  username: 'root',
  password: null,
  database: 'lotto',
  host: 'localhost',
  dialect: 'mysql'
}
export const production = {
  host: 'eu-cdbr-west-02.cleardb.net',
  username: 'b50826c6f33468',
  password: '552452bd',
  database: 'heroku_d8e47286581e2ab',
  dialect: 'mysql',
  use_env_variable: 'DATABASE_URL'
}