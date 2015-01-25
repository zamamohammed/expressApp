'use strict';
var express = require('express');
var router = express.Router();
var custom = require('./../custom');

/* GET home page. */
router.get('/', function (req, res) {
    custom.sayHello();
    res.render('index', { title: 'Express' });
});
router.get('/user', function (req, res) {
    var data = {name: custom.getUser()};
    res.json(data);
});
module.exports = router;
