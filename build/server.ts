/// <reference path="../node_modules/@types/open/index.d.ts" />

import express = require('express');
import path = require('path');
import open = require('open');

var port = 8080;
var app = express();

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
