var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "movie_planner_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Create - POST

app.post('/api/movie', function (request, response) {
  // I need a movie to insert!
  // request.body.movie

  // INSERT INTO movies (movie) VALUE (?)

  // respond response.send()
});

// Read - GET

app.get('/', function(request, response) {
  // need to read from the database
  // SELECT * FROM movies
  
  // then respond to "requestor"
  // respond response.send()
});

// Update - PUT

app.put('/api/movie/:id', funtion(request, response) {
  // I need movie text to update!
  // request.body.movie

  // OUR ID!!
  // request.params.id

  // UPDATE

  // response.send()
});

// Delete - DELETE

app.delete('/api/movie/:id', funtion(request, response) {
  // OUR ID!!
  // request.params.id

  // DELETE

  // response.send()
});

app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
