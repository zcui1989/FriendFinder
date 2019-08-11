var path = require('path');

module.exports = (app) =>  {
    app.get('/survey', (request, result) => {
        result.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('*', (request, result) => {
        result.sendFile(path.join(__dirname, '../public/home.html'));
    });
}