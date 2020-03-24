const express = require('express');
const path = require('path');
const friends = require('../data/friends');
const router = express.Router();
const fileHandler = require('fs');

let friendsArr = [
  {
    name: 'billy',
    photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
    scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
];

let friendArrObject = [
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
  // getFriendsDB();
  // res.sendFile(path.join(__dirname, '../', 'data', 'friends.json'));
  // res.json(getLocalData());
  res.json(friendArrObject);
});

router.post('/friends', (req, res) => {
  // TODO: get survey data
  

  // TODO: push new friend to db
  // console.log(req);
  
  // console.log("here is req.body");
  // console.log(req.body);
  // updateFriendsDB(req.body);
  // updateLocalData(JSON.parse(req.body));

  const scoreArr = req.body.scores.map(function(score) {
    // console.log('score inside map');
    // console.log(score);
    return parseInt(score);
  });

  // console.log('here is req.body before score change');
  // console.log(req.body.scores);
  
  // score array of ints now added back to the object. 
  req.body.scores = scoreArr;

  // console.log('here is req.body after score change');
  // console.log(req.body.scores);
  

  // updateLocalData(req.body);
  friendArrObject.push(req.body);
  // console.log(friendsArr);

  

  // fileHandler.appendFile(path.join(__dirname, "../", "data", "friends.json"), req.body, function(error) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('hooray!');
      
  //   }
  // });
  

  res.end('posted!!!');
  
});

// function convertScoresToInts(arr) {
//   const scoreArr = arr.map(function(score) {
//     return parseInt(score);
//   });
// }


// just JS object
// =================================================
function updateLocalData(value) {
  friendArrObject.push(value);
}

function getLocalData() {
  return friendArrObject;
}


// FS - file handler
// =================================================
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
    console.log('here is data, getFriendDB');
    console.log(data);
    
    // FIXME: scores coming in as strings in the friends.json file instead of numbers
    friendsArr = JSON.parse(data);
    
    // friendsArr = data;
  });
}




module.exports = router;