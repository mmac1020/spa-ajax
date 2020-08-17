const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/ajaxdogs', {
  password: 'admin',
  logging: false
});

module.exports = db;
