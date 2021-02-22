const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: String,
  sender: String,
  },{
  timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);
