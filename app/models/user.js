
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	username: String,
	password: String,
	type: String
});

/*
Database is called 'users'

When adding keys to this model update passport/signup.js
*/