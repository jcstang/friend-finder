const express = require('express');
const path = require('path');
const friends = require('../data/friends');
const router = express.Router();
const fileHandler = require('fs');

const friendsArr = [
  {
    name: 'billy',
    photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
    scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
];

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('apiRoutes Time: ', Date.now());
  next();
});

router.get('/friends', (req, res) => {
  getFriendsDB();
  res.sendFile(path.join(__dirname, '../', 'data', 'friends.json'));
});

router.post('/friends', (req, res) => {
  // TODO: get survey data
  

  // TODO: push new friend to db

  console.log(req.body);

  // friendsArr.push(req.body);
  updateFriendsDB(req.body);
  console.log(friendsArr);
  

  // fileHandler.appendFile(path.join(__dirname, "../", "data", "friends.json"), req.body, function(error) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('hooray!');
      
  //   }
  // });
  

  res.end('posted!!!');
  
});

function updateFriendsDB(value) {
  friendsArr.push(value);
  fileHandler.writeFile(path.join(__dirname, "../", "data", "friends.json"), JSON.stringify(friendsArr), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('hooray!!');
    }
  });
}

function getFriendsDB() {
  fileHandler.readFile(path.join(__dirname, "../", "data", "friends.json"), {encoding: 'utf8'}, function(err, data) {
    friendsArr = data;
  });
}




module.exports = router;