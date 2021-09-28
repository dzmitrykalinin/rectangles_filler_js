const express = require('express'),
	BodyParser = require('body-parser'),
	app = express(),
	Settings = require('./config/settings');
	ImageProcessor = require('./lib/image_processsor');

app.use(BodyParser.json());
app.use(function(req, res, next) {
	if (Settings.token != req.query.token) {
		res.status(403).send('Access Denied');
	} else {
		next();
	}
});

app.get('/hello', function(req, res) {
	res.status(200).json({ message: 'Hello World!' });
});

app.post('/create_image_with_lines_and_fill', function(req, res) {
	ImageProcessor.process(req, res);
});

app.use(function(err, req, res, next) { next(err); });

module.exports = app;

