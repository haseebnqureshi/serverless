'use strict';

require('dotenv').config();

module.exports.example = function(event, context, callback) {
	var body = JSON.parse(event.body) || {};
	return callback(null, {
		statusCode: 200,
		body: JSON.stringify(body),
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
			"Content-Type": "application/json",
			"X-Example-Body-Length": JSON.stringify(body).length
		}
	});
};
