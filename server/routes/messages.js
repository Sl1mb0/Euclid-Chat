const router = require('express').Router();
let Message = require('../models/message.model');

router.route('/').get((req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const content = req.body.content;
  const sender = req.body.sender;


  const newMessage = new Message({
    content,
    sender,
  });

  newMessage.save()
  .then(() => res.json('Message added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
