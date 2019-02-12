import Sequelize from 'sequelize'
import PlayerModel from './models/player'
import DrawingModel from './models/drawing'

var env = process.env.NODE_ENV === 'development' ? 'development' : 'production'
var config = require(__dirname + '/config/config.js')[env]
var sequelize

config['define'] = {
  timestamps: false // true by default
}
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const Player = PlayerModel(sequelize, Sequelize)
const Drawing = DrawingModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables initiated!`)
  })

export { Player, Drawing }