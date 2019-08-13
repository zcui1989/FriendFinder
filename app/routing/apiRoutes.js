//requiring the json file, which is the friends.js file in our data folder
var friendsData = require('../data/friends');

module.exports = (app) => {

    //get request for an api of the friends data 
    app.get('/api/friends', (request, response) => {
        response.json(friendsData);
    });

    // post request to an api
    app.post('/api/friends', (request, response) => {
        var totalDifference = 0,
            matchingFriends = {
                name : '',
                photo : '',
                friendsDifference : 1000
            },

            userData = request.body,
            userName = userData.name,
            userScores = userData.scores,

        //scores are currently string data types in the array
            convertedScores = userScores.map((n)=>{
                return parseInt(n, 10);
            });

            userData = {
                name : request.body.name,
                photo : request.body.photo,
                scores : convertedScores
            }

        var totalScore = convertedScores.reduce((a, b) => a + b, 0);

        for(var x in friendsData){
            totalDifference = 0;

            var friendScore = friendsData[x].scores.reduce((a, b) => a + b, 0);
            
            totalDifference += Math.abs(totalScore - friendScore);

            if (totalDifference <= matchingFriends.friendsDifference){
                matchingFriends.name = friendsData[x].name; 
                matchingFriends.photo = friendsData[x].photo; 
                matchingFriends.friendsDifference = totalDifference;
            } 
        }

        friendsData.push(userData);
        response.json(matchingFriends);
    });



}