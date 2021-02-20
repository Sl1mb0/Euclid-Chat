const express = require('express');
const messageModel = require('../models/Message');
const app = express();

app.get('/', async(req, res) => {
  const foods = await messageModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app
