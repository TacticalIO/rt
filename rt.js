var fs = require('fs'),
	debug = require('debug')('rt');

process.env.DEBUG = "*";

var config = JSON.parse(fs.readFileSync('data/config.json'));
config.mqtt.onsubscribe = function(subscriber) {
	debug('New data node: ', subscriber);
}

var ds = require('tio').data(config.mqtt);
debug('started', ds.uuid);
