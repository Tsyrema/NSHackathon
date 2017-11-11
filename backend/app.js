var express = require('express');
var mongoose= require('mongoose');
var passport= require('passport');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//app
var app = express();
//cors control
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'team10-184315.appspot.com');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//sessions
app.use(session({
    secret: 'nsHacks2017', // session secret
    resave: true,
    saveUninitialized: true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());

//bodyParser and morgan
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



app.listen(8080);
