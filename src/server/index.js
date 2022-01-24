const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to mongo DB 🗃'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => {
  res.send({ username: 'Irfan Asif' });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}!`);
});
