const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const morgan = require('morgan');
const { Activity, Listing } = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '../client/dist'))); // learn more

app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.get('/suggestions/activities', (req, res) => {
  Activity.findAll().then(activities => res.json(activities));
});

app.get('/suggestions/listings', (req, res) => {
  Listing.findAll().then(listings => res.json(listings));
});

app.listen(port, () => {
  console.log(`We be listening on port ${port}`);
});