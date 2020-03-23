const express = require('express');
const path = require('path');
const chalk = require('chalk');
const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');
const friends = require('./app/data/friends');
const expressHandlebars = require('express-handlebars');
const questions = require('./app/data/questions');

const app = express();
const PORT = process.env.PORT || 8085
app.use('/api', apiRouter);
// app.use('/', htmlRouter);
app.use(express.static('public'));
app.use(express.static('public/views'));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


// html routes
// =================================================
app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname, '.app', 'public', 'home.html'));
  res.render('home');
});

app.get('/survey', function(req, res) {
  res.render('survey', questions);
});

// friends.forEach(element => {
//   console.log(element.scores);
// });

// TODO: figure out how to compare currentFriend to db of friends.
// TODO: Total friend list api
// TODO: Build homepage
// TODO: Build survey page
// TODO: Pass data from survey to express
// TODO: Figure out the friend find algorithm




app.listen(PORT, () => {
  console.log(`listening on port ${chalk.cyanBright(PORT)}`);
});