const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Promise = require('bluebird');
const morgan = require('morgan');
const debug = require('debug')('iVR:server');
const keys = require('./config/keys');
require('dotenv').load();

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI);

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev'));

const server = (module.exports = app.listen(PORT, () => {
  debug(`Server up on port ${PORT}`);
}));

server.isRunning = true;
