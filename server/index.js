const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const morgan = require('morgan');

app.use('/', express.static(path.join(__dirname, '../client/dist'))); // learn more

app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`We be listening on port ${port}`);
});