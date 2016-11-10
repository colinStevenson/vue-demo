var express  =  require('express'),
    passport =  require('passport')

var app = module.exports = express.Router();

app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/overview',
        failureRedirect : '/login'
}));