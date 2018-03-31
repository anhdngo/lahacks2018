
var express = require("express");
var app = express();

//parses body so express can read stuff being sent to /foursquare
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/foursquare', function(req, res) {
    console.log(req.body.location);
	res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.listen(8000, function() {
    console.log("Listening on localhost:8000");
});
