var express = require('express');
var app = express();

var port = process.env.PORT || 4000;
app.listen(port);

app.get('/',function(req,res){
    res.status(400);
    res.send("Hello World");
});

app.get('/health',function(req,res){
    res.status(400);
    res.send("running successfully")
});