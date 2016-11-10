// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '621362308042855', // your App ID
		'clientSecret' 	: 'itsafuckingsecret', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

};