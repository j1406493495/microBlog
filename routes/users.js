var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:username', function(req, res) {
  res.send('user: ' + req.params.username);
})

router.get('/reg', function(req, res) {

})

router.post('/reg', function(req, res) {

})

router.get('/login', function(req, res) {

})

router.post('/login', function(req, res) {

})

router.get('/logout', function(req, res) {

})

module.exports = router;