
var express = require("express");
var app = express();

//parses body so express can read stuff being sent to /foursquare
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//when website is opened
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

//when user queries using text box
app.post('/foursquare', function(req, res) {
    console.log(req.body.location);
	
	var obj = getLatLng();
	console.log(obj.lat);
	
	res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.listen(8000, function() {
    console.log("Listening on localhost:8000");
});

//returns arbitrary lat and lng, replace with foursquare api
function getLatLng(){
	var obj = {
		lat: 34,
		lng: 118
	}
	return obj
}

exports.getLatLngData = function(){
	var obj = getLatLng();
	return obj
}
