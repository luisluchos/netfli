var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api');
var cors = require('cors')




var app = express();

app.use(logger('dev'));
app.use(express.json()); // de este modo soporta la request que se le está haciendo cuando se le pasa un objeto, y lo parsea para tenerlo en el req.body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 const corsOptions = {
    origin:'https://tranquil-wave-38036.herokuapp.com',
    optionsSuccessStatus: 200
  } 
  
app.use(cors(corsOptions));
  


app.use('/api', apiRouter)

//send to angular if dont find path url
app.get('/404',function(req,res){
    res.status(404).sendFile(path.join(__dirname,"public/index.html"));
});
// cualquiera que no sea /api o /404 lo enviamos a indexhtml que ha sido generado por angular
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"));
});


module.exports = app;
