const express = require('express');
var port = process.env.PORT || 4000;

const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
};

app.use(allowCrossDomain);
app.use(express.static('public'))

app.listen(port, function(){
    console.log('Servidor corriendo en: ' + port);
})