const express = require('express');
const router = express.Router();
const path = require('path');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// define the home page route
router.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, '../public','home.html'));
  res.sendFile(path.join(__dirname, '../', 'public','home.html'));
});

// define the about route
router.get('/survey', function (req, res) {
  // res.send('survey page')
  // res.sendFile(path.join(__dirname, 'survey.html'));
  res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});

module.exports = router;