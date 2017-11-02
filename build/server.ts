/// <reference path="../node_modules/@types/open/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />

// only the first of these works... if you try the 2nd, the call to
// set app = express(); complains that
// xpress_1.default is not a function
import express = require('express');
//import express from "express";

// either of the next 2 work... why?
// import path = require('path');
import * as path from "path";

// on the other hand, only the first one here works - the 2nd one doesn't and throws a
// "...open/index" resolves to a non-module entity and cannot be imported using this construct.
import open = require('open');
// import * as open from "open";

const port = 8080;
const app = express();

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
