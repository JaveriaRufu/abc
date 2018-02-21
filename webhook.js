var express = require("express"); 
var app = express();
const request = require('request');

const options = {  
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

app.get("/api", function(req, res)  { 
        request(options, function(err, output, body) {  
        var json = JSON.parse(body);
        console.log(json); // Logging the output within the request function
        res.json(json) //then returning the response.. The request.json is empty over here
}); //closing the request function

});

app.listen(3000, function() {  
    console.log("My API is running...");
});

module.exports = app;
