const Sequelize = require('sequelize');

const sequelize = new Sequelize('lemonloft', 'root', '', {
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
    type: Sequelize.STRING(300)
  },
  'imageUrl': {
    type: Sequelize.STRING(300)
  },
  'cost': {
    type: Sequelize.INTEGER
  },
  'rating': {
    type: Sequelize.DECIMAL
  },
  'numComments': {
    type: Sequelize.INTEGER
  },
  'location': {
    type: Sequelize.STRING
  }
}, {
    timestamps: false
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
}, {
  timestamps: false
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
}, {
  timestamps: false
});

var Listing = sequelize.define('listings', {
  'id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'title': {
    type: Sequelize.STRING(50)
  },
  'imageUrl': {
    type: Sequelize.STRING(300)
  },
  'image': {
    type: Sequelize.INTEGER
  },
  'cost': {
    type: Sequelize.INTEGER
  },
  'rating': {
    type: Sequelize.DECIMAL
  },
  'numComments': {
    type: Sequelize.INTEGER
  },
  'location': {
    type: Sequelize.INTEGER
  },
  'roomType': {
    type: Sequelize.STRING(50)
  }
}, {
  timestamps: false
});

module.exports = {
  sequelize,
  Activity,
  Listing,
  Location,
  Image
}