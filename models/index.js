const Sequelize= require('sequelize')
const fs= require('fs')
const path= require('path')
const basename=path.basename(__filename)
const db= {}


const db_connec='postgres://pevrqhkl:QIW6b12M-ItlU2PsITtckhuMOfVxxl_G@castor.db.elephantsql.com/pevrqhkl'

const sequelize = new Sequelize(db_connec) // Example for postgres

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;