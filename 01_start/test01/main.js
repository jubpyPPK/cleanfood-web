var express = require('express');
var path = require('path');
var pug = require('ejs');
var fs = require('fs');
var app = express();

app.set('view engine','ejs');
app.set('views','./template')
app.use(express.static(path.join(__dirname,'./template/')));

app.get('/index',function(request,response){
    response.render('template');
});

app.get('/table',function(request,response){
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    response.render('table',{drinks:drinks});
});

app.get('/user',function(request,response){
    response.render('user');
});

app.get('/dashboard',function(request,response){
    response.render('dashboard');
});

app.get('/typography',function(request,response){
    response.render('typography');
});

app.get('/notifications',function(request,response){
    response.render('notifications');
});

app.get('/upgrade',function(request,response){
    response.render('upgrade');
});

app.get('/test',function(request,response){
    var menu = JSON.parse(fs.readFileSync('template/file/menu.json', 'utf8')).menu;
    console.log('Menu :: ',menu);
    response.render('test',{menu:menu});
});

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s',host,port);
});