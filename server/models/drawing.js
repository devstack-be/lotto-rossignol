export default (sequelize, type) => {
    return sequelize.define('drawing', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        numbers: type.STRING,
        date: type.DATE
    })
}