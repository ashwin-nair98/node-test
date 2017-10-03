var express = require('express');
var moment = require('moment')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
	res.send('HTTP ESP8266 Test Server')
});

app.get('/test/:temp', function(req, res) {
	console.log(req.params);
	res.send("Temperature: " + req.params.temp);
});

app.post('/test', function(req,res) {
	res.setHeader('Content-Type', 'application/json');

	res.write(JSON.stringify({
		value: req.body.value || null,
	}));
	console.log("Value: " + req.body.value);
});

app.listen(8080);

