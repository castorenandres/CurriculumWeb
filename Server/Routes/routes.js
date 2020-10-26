const express = require('express');
const app = express();
var Model = require('../curricula')

app.get("/", function(req, res) {
    res.send("<h1> API </h1>")
})

app.get("/language", function(req, res) {
    Model.getLanguage((data) => {
        res.json({lang: data})
    })
})

app.get("/framework", function(req, res) {
    Model.getFrameworks((data) => {
        res.json({frame: data})
    })
})

app.get("/spoken", function(req, res) {
    Model.getSpoken((data) => {
        res.json({spoken: data})
    })
})

module.exports = app;