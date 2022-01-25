const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./Model/user');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to mongo DB 🗃'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => {
  res.send({ username: 'Irfan Asif' });
});

app.post('/api/createUser', async (req, res) => {
  const { username, email, password: plainTextPassword } = req.body;

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      username,
      email,
      password,
    });
    console.log('user created successfully', response);
  } catch (error) {
    console.log(error);
    return res.json({ status: 'error' });
  }

  res.json({ status: 'ok' });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}!`);
});
