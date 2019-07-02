var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('home');
});
router.get('/pricing', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('pricing');
});
router.get('/sched', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('sched');
});
router.get('/nails', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('nails');
});
router.get('/hair', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('hair');
});
router.get('/cuts', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('cuts');
});
router.get('/colors', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('colors');
});
router.get('/perms', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('perms');
});
router.get('/styling', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('styling');
});
router.get('/weddingstyles', function(req, res, next) {
  // res.render('index', { title: 'Express awesomeness!' });
  res.render('weddingstyles');
});

module.exports = router;
