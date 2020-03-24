const express = require('express');
const router = express.Router();
const path = require('path');
const app = require('express');


// app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('htmlRoutes Time: ', Date.now())
  next()
});
// router.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
// router.set("view engine", "handlebars");

// define the home page route
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'public','home.html'));
  // res.render('home', {questions: questions});
});

// define the about route
router.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'public','home.html'));
});

module.exports = router;