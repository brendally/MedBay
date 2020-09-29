console.log(module);
var express = require('express');
var app = express();
//var serve = require('http').Server('app');
var path = require('path')

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/client/about.html');
});
app.get('/res', function(req, res) {
    res.sendFile(__dirname + '/client/response.html');
});

app.use('client',express.static(__dirname + '/client'));

app.use(express.static(path.join(__dirname, 'public')));

//Heroku
app.listen(process.env.PORT || 3000);
