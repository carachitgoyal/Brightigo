const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./Model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean();

  if (!user) {
    return res.json({
      status: 'error',
      at: 'email',
      error: 'Email Does not exist',
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    // the email, password combination is successful
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET
    );
    return res.json({ status: 'ok', data: token });
  }

  // user exists but password is wrong
  res.json({ status: 'error', at: 'password', error: 'Wrong Password' });
});

app.post('/api/createUser', async (req, res) => {
  const { username, email, password: plainTextPassword } = req.body;

  if (!email || typeof username !== 'string') {
    return res.json({ status: 'error' });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      username,
      email,
      password,
    });
    console.log('user created successfully', response);
  } catch (error) {
    if (error.code === 11000) {
      //11000 is duplicate key error
      return res.json({ status: 'error', error: 'Email already exists' });
    }
    throw error;
  }

  res.json({ status: 'ok' });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}!`);
});
