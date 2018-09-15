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

module.exports = router;
