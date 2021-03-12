var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter)

//send to angular
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"));
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
