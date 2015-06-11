/**
 * Module dependencies.
 */
var util = require('util'),
    OAuth2Strategy = require('passport-oauth2').Strategy;

function CustomOAuth2Strategy(options, verify) {
    options = options || {};
    options.scopeSeparator = options.scopeSeparator || ' ';
    options.passReqToCallback = true;
    options.state = true;
    OAuth2Strategy.call(this, options, verify);
    this.name = options.name;
	this.userProfileHandler = options.userProfileHandler;
}

util.inherits(CustomOAuth2Strategy, OAuth2Strategy);

CustomOAuth2Strategy.prototype.userProfile = function (accessToken, done) {
	if(this.userProfileHandler)
		this.userProfileHandler(accessToken, done);
	else
		done();
};

/**
 * Expose `CustomOAuth2Strategy`.
 */
module.exports = CustomOAuth2Strategy;