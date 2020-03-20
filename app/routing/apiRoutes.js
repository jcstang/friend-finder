const express = require('express');
const router = express.Router();
const path = require('path');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/friends', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'public', 'friend.json'));
});




module.exports = router;