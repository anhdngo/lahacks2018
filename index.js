
const request = require('request');
var express = require("express");
var app = express();
var util = require('util');

app.get('/data', function(req, res){
  body = request({
    url: 'https://api.foursquare.com/v2/venues/explore',
    method: 'GET',
    qs: {
      client_id: 'COHMOQH1IRCXSHOSCJQGCHMW0KDM15T2SL42SV4HEXZNCZ1O',
      client_secret: 'T10V523SUH04DKHMUVAUQSBECBLVCPMKHDR5BFJDHLX3I5CB',
      ll: '33.64, 117.8443',
      query: 'coffee',
      v: '20180323',
      limit: 1
    }
  }, function(err, res, body) {
    if (err) {
      console.error(err);
    } else {
      return body;
    }
  });
  re = request;
  res.send(re);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.listen(8000, function() {
    console.log("Listening on localhost:8000");
});
