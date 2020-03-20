const express = require('express');
const router = express.Router();
const path = require('path');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('apiRoutes Time: ', Date.now());
  next();
});

router.get('/friends', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'public', 'friend.json'));
});

router.post('/friends', (req, res) => {
  console.log('posted!!!');
  res.end('posted!!!');
});




module.exports = router;