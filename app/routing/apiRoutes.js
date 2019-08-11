var friendsData = require('../data/friends');

module.exports = (app) => {
    app.get('/api/friends', (request, response) => {
        response.json(friendsData);
    });


    app.post("/api/friends", (request, response) => {
        friendsData.push(request.body);
        response.json(true);
    });
}