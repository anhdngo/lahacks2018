
const request = require('request');
var express = require("express");
var app = express();
var util = require('util');

function getVenues() {
	$.ajax({
  		type: "GET",
  		url: "https://api.foursquare.com/v2/venues/explore?ll="+lat+","+lng+"&client_id=COHMOQH1IRCXSHOSCJQGCHMW0KDM15T2SL42SV4HEXZNCZ1O&client_secret=YOUR_CLIENT_SECRET&v=20130619&query="+$("#query").val()+"",
  		success: function(data) {
			var dataobj = data.response.groups[0].items;
			$("#venues").html("");

			$.each( dataobj, function() {
				if (this.venue.categories[0]) {
					str = this.venue.categories[0].icon.prefix;
					newstr = str.substring(0, str.length - 1);
					icon = newstr+this.venue.categories[0].icon.suffix;
				} else {
					icon = "";
				}

				if (this.venue.contact.formattedPhone) {
					phone = "Phone:"+this.venue.contact.formattedPhone;
				} else {
					phone = "";
				}

				if (this.venue.location.address) {
					address = '<p class="subinfo">'+this.venue.location.address+'<br>';
				} else {
					address = "";i
				}

				if (this.venue.rating) {
					rating = '<span class="rating">'+this.venue.rating+'</span>';
				}

				appendeddatahtml = '<div class="venue">
        <h2><span>'+this.venue.name+'<img class="icon" src="'+icon+'"> '+rating+'</span></h2>'+address+phone+'</p><p><strong>Total Checkins:</strong> '+this.venue.stats.checkinsCount+'</p></div>';
				$("#venues").append(appendeddatahtml);

			});
		}
	});
}

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
  re = JSON.stringify(request);
  res.send(re);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.listen(8000, function() {
    console.log("Listening on localhost:8000");
});
