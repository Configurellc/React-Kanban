const express = require('express');
const app = express();

const CONFIG = require('./config/config.json');

const db = require('./models');
  const { Card } = db;


 app.listen(3000, function() {
    db.sequelize.sync();
  });
