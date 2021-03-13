var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api');
var cors = require('cors')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/api', apiRouter)

//send to angular
app.get('/404',function(req,res){
    res.status(404).sendFile(path.join(__dirname,"public/index.html"));
});

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"));
});


module.exports = app;
