const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting the App
const port = 3000
const app = express();
app.use(express.json());
app.use(cors());

// Starting the DB
const uri = `mongodb://localhost:27017/nodeapi`
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

requireDir('./src/models');

// Routes
app.use('/api', require('./src/routes'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});