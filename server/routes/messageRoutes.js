const express = require('express');
const messageModel = require('../models/Message');
const app = express();

app.get('/', async(req, res) => {
  const msg = await messageModel.find({});
  if(msg)
    res.send(msg);
  else
    res.send('Hello yo');
});

module.exports = app
