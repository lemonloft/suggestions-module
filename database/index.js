const Sequelize = require('sequelize');

const sequelize = new Sequelize('lemonloft', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

sequelize
.authenticate()
.then(() => {
  console.log('Connected');
})
.catch(err => {
  console.log('Unable to connect');
});

module.exports = {
  sequelize
}