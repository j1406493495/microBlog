var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  // res.render('index', { title: 'Hello'});
  res.send('Time time is ' + new Date().toString());
});

router.get('/list', function(req, res) {
  res.render('list', {
    title: 'List',
    items: [1991, 'woong', 'express', 'Node.js']
  });
});

router.get('/helper', function(req, res) {
  res.render('helper');
});

module.exports = router;