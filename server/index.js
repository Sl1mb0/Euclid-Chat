require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.json());


const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB connection established successfully.");
});


/*app.get('/',(req, res) => {
  res.send('Hello World');
});*/

//app.use(messageRouter);

const Message = require('./models/message.model');
const messageRouter = require('./routes/messages.js');

app.use('/messages', messageRouter);

http.listen(port, () => {
  console.log('listening on *:' + port);
});
