export default (sequelize, type) => {
    return sequelize.define('player', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        numbers: type.STRING,
    })
}