const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/ajaxdogs', {
  logging: false
});

module.exports = db;
