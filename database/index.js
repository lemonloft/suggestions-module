const Sequelize = require('sequelize');

const sequelize = new Sequelize('lemonloft', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
.authenticate()
.then(() => {
  console.log('Connected');
})
.catch(err => {
  console.log('Unable to connect');
});

var Activity = sequelize.define('activities', {
  'id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'title': {
    type: Sequelize.STRING(50)
  },
  'image_url': {
    type: Sequelize.STRING(300)
  },
  'cost': {
    type: Sequelize.INTEGER
  },
  'rating': {
    type: Sequelize.DECIMAL
  },
  'num_comments': {
    type: Sequelize.INTEGER
  },
  'location_id': {
    type: Sequelize.INTEGER
  }
});

var Location = sequelize.define('locations', {
  'id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'location': {
    type: Sequelize.STRING(50)
  }
});

var Image = sequelize.define('images', {
  'id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'url': {
    type: Sequelize.STRING(300)
  }
});

var Home = sequelize.define('homes', {
  'id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'title': {
    type: Sequelize.STRING(50)
  },
  'image_url': {
    type: Sequelize.STRING(300)
  },
  'image_id': {
    type: Sequelize.INTEGER
  },
  'cost': {
    type: Sequelize.INTEGER
  },
  'rating': {
    type: Sequelize.DECIMAL
  },
  'num_comments': {
    type: Sequelize.INTEGER
  },
  'location_id': {
    type: Sequelize.INTEGER
  },
  'room_type': {
    type: Sequelize.STRING(50)
  }
});

module.exports = {
  sequelize,
  Activity,
  Location,
  Image,
  Home
}