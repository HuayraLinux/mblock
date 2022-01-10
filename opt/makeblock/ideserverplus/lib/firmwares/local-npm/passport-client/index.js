var express = require('express');
var Promise = require('promise');
var qs = require('querystring');
var http = require('http');

var hostname, clientId, secret;
var router = express.Router();

module.exports = function (options) {
	hostname = options.hostname;
	clientId = options.clientId;
	secret = options.secret;
	return {
		oauth2: {
			getAccessToken: function (code) {
				return new Promise((resolve, reject) => {
					var data = qs.stringify({ client_id: clientId, client_secret: secret, code: code, grant_type: 'authorization_code' });
					var request = http.request({
						hostname: hostname,
						path: '/oauth2/token',
						method: 'POST',
						headers: {
							"Content-Type": 'application/x-www-form-urlencoded',
							"Content-Length": data.length
						}
					}, function (res) {
						res.setEncoding('utf8');
						res.on('data', function (chunk) {
							var accessToken = JSON.parse(chunk);
							if (accessToken.code) {
								reject(accessToken);
							}
							else {
								resolve(accessToken);
							}
						});
					});
					request.end(data);
				});
			},
			refreshToken: function (refresh_token) {
				return new Promise((resolve, reject) => {
					var request = http.request({
						hostname: hostname,
						path: '/oauth2/token?' + qs.stringify({ grant_type: 'refresh_token', client_id: clientId, client_secret: secret, refresh_token: refresh_token }),
						method: 'GET'
					}, function (res) {
						res.setEncoding('utf8');
						res.on('data', function (chunk) {
							var refreshToken = JSON.parse(chunk);
							if (refreshToken.code) {
								reject(refreshToken)
							} else {
								resolve(refreshToken);
							}
						});
					});
					request.end();
				});
			}
		},
		api: {
			user: {
				me: function (access_token) {
					return new Promise((resolve, reject) => {
						var request = http.request({
							hostname: hostname,
							path: '/api/user/me?' + qs.stringify({ access_token: access_token }),
							method: 'GET'
						}, function (res) {
							res.setEncoding('utf8');
							res.on('data', function (chunk) {
								var user = JSON.parse(chunk);
								if (user.code) {
									reject(user)
								} else {
									resolve(user);
								}
							});
						});
						request.end();
					});
				}
			}
		}
	}
};