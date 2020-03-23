const express = require('express');
const path = require('path');
const friends = require('../data/friends');
const router = express.Router();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('apiRoutes Time: ', Date.now());
  next();
});

router.get('/friends', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'data', 'friends.json'));
});

router.post('/friends', (req, res) => {
  // TODO: get survey data
  

  // TODO: push new friend to db
  

  res.end('posted!!!');
  
});




module.exports = router;