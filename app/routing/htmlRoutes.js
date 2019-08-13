//setting the required module for this file
var path = require('path');

//exporting the html routing paths...
module.exports = (app) =>  {

    //requesting for the url path, '/survey'  
    app.get('/survey', (request, result) => {
        //the result will be the survey.html file to display
        result.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    
    //using the root url path as a 'default'
    app.use((request, result) => {
        //then loads the result, which is the home.html file
        result.sendFile(path.join(__dirname + '/../public/home.html'));
    });

}