var logger          = require('morgan'),
    cors            = require('cors'),
    http            = require('http'),
    passport        = require('passport'),
    express         = require('express'),
    errorhandler    = require('errorhandler'),
    cors            = require('cors'),
    dotenv          = require('dotenv'),
    bodyParser      = require('body-parser');

var app = express();

dotenv.load();

require('./config/passport')(passport); // pass passport for configuration

const SESSION_SECRET = 'itsafuckingsecret'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.session({ secret: SESSION_SECRET })); // session secret
app.use(require('express-session')({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler())
}

app.use(require('./routes/anonymous-routes'));
app.use(require('./routes/protected-routes'));
app.use(require('./routes/user-routes'));
app.use(require('./routes/facebook-auth-routes'));

var port = process.env.PORT || 3001;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});