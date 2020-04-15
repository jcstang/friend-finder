const _ = require("lodash");

let friendArrObject = [
    {
      name: 'billy',
      photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
      scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ];

  let currScores = [1, 2, 3, 4, 5, 6, 6, 8, 9, 1];

  // result of doing func [ 1, 2, 3, 4, 5, 6, 8, 9 ]

function compareTwoFriends(currScoreArr, compareArr) {
    // const result = words.filter(word => word.length > 6);
    // const diffArray = friendArray.filter(friend => friend);

    // return _.intersection(friendArrObject[0].scores, currScores);
    return _.intersection(compareArr, currScoreArr).length;

}



module.exports = {
    compareTwoFriends
}