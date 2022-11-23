var http = require('http');

module.exports = {
	get: function(callback) {
		var req = http.request({
			hostname: 'http://localhost:3000/api/V1',
			path: '/orders'
		}, function(response) {
			var data = '';
			response.on('data', function(chunk) {
				data += chunk;
			});

			response.on('end', function() {
				callback(null, JSON.parse(data));
			});
		});
		
		req.on('error', function(err) {
			callback(err);
		});

		req.end();
	},

	post: function(data, callback) {
		var req = http.request({
			hostname: 'http://localhost:3000/api/V1',
			path: '/orders',
			method: 'POST'
		}, function(response) {
			var data = '';
			response.on('data', function(chunk) {
				data += chunk;
			});

			response.on('end', function() {
				callback(null, JSON.parse(data));
			});
		});

		req.write(JSON.stringify(data));

		req.end();
	}
};