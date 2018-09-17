var express = require('express');
var crypto = require('crypto')
var User = require('../models/user.js')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/:username', function(req, res) {
  // res.send('user: ' + req.params.username);
// })

router.get('/reg', function(req, res) {
  console.log('go to register page === ');
  res.render('reg', { title: 'Register' });
});

router.post('/reg', function(req, res) {
  //生成口令的散列值
  console.log('start reg ==== ');
  var md5 = crypto.createHash('md5');
  var password = md5.update('123456').digest('base64');

  var newUser = new User({
    name: 'woong001',
    password: password,
  });

  console.log('name === ' + newUser.name + ", password === " + newUser.password);
  //检查用户名是否已经存在
  User.get(newUser.name, function (err, user) {
    console.log('exist user === ' + user);
    if (user)
      err = 'Username already exists.';
    console.log('err === ' + err);
    if (err) {
      req.flash('error', err); 
      return res.redirect('/reg');
    }
    //如果不存在则新增用户 newUser.save(function(err) {
    if (err) {
      req.flash('error', err); 
      return res.redirect('/reg');
    }

    console.log('register success ===== ');
    req.session.user = newUser; 
    req.flash('success', '注册成功'); 
    res.redirect('/');
  });
});

router.get('/login', function(req, res) {
  res.render('login', {title: 'Login'});
});

router.post('/login', function (req, res) {
  //生成口令的散列值
  var md5 = crypto.createHash('md5');
  var password = md5.update('123456').digest('base64');
  User.get('woong001', function (err, user) {
    if (!user) {
      req.flash('error', '用户不存在');
      return res.redirect('/login');
    }
    if (user.password != password) {
      req.flash('error', '用户口令错误'); 
      return res.redirect('/login');
    }
    req.session.user = user; 
    req.flash('success', '登入成功'); 
    res.redirect('/');
  });
});

router.get('/logout', function(req, res) {
  req.session.user = null; 
  req.flash('success', '登出成功'); 
  res.redirect('/');
});

module.exports = router;