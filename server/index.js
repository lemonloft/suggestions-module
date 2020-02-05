const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3002;
const morgan = require('morgan');
const { Activity, Listing } = require('../database/index.js');
const cors = require('cors');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const compression = require('compression');

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(compression());
app.use(morgan('dev'));
app.use(cors());

app.get('/suggestions/activities', (req, res) => {
  Activity.findAll().then((activities) => {
    res.status(200).json(activities);
  })
  .catch((err) => {
    res.status(404).send(err);
  });
});

app.get('/suggestions/activities/:id', (req, res) => {
  let random_id = Math.floor(Math.random() * 99);
  Activity.findAll({ where: {id: {[Op.between]: [random_id, random_id + 10]} }}).then((activities) => {
    res.status(200).json(activities);
  })
  .catch((err) => {
    res.status(404).send(err);
  });
});

app.get('/suggestions/listings', (req, res) => {
  Listing.findAll().then((listings) => {
    res.status(200).json(listings);
  })
  .catch((err) => {
    res.status(404).send(err);
  });
});

app.get('/suggestions/listings/:id', (req, res) => {
  let random_id = Math.floor(Math.random() * 99);
  Listing.findAll({ where: {id: {[Op.between]: [random_id, random_id + 10]} }}).then((listings) => {
    res.status(200).json(listings);
  })
  .catch((err) => {
    res.status(404).send(err);
  });
});

// app.get('/suggestions/locations', (req, res) => {
//   Location.findAll().then((locations) => {
//     res.status(200).json(locations);
//   })
//   .catch((err) => {
//     res.status(404).send(err);
//   });
// });

app.listen(port, () => {
  console.log(`We be listening on port ${port}`);
});