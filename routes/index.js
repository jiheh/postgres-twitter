'use strict';
var express = require('express');
var router = express.Router();
var client = require('../db/');

module.exports = function makeRouterWithSockets (io) {

  // a reusable function
  function respondWithAllTweets (req, res, next){
    var allTheTweets = client.query('SELECT users.name, tweets.content FROM users INNER JOIN tweets ON tweets.userid = users.id', function (err, result) {
      if (err) return next(err); // pass errors to Express
      var tweets = result.rows;
      res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });

    });
  }

  // here we basically treet the root view and tweets view as identical
  router.get('/', respondWithAllTweets);
  router.get('/tweets', respondWithAllTweets);

  // single-user page
  router.get('/users/:username', function(req, res, next){
    var tweetsForName = allTheTweets.find({ name: req.params.username });
    res.render('index', {
      title: 'Twitter.js',
      tweets: tweetsForName,
      showForm: true,
      username: req.params.username
    });
  });

  // single-tweet page
  router.get('/tweets/:id', function(req, res, next){
    var tweetsWithThatId = allTheTweets.find({ id: Number(req.params.id) });
    res.render('index', {
      title: 'Twitter.js',
      tweets: tweetsWithThatId // an array of only one element ;-)
    });
  });

  // create a new tweet
  router.post('/tweets', function(req, res, next){
    var id;
    function checkId(err,data){
     client.query('SELECT id FROM users WHERE name=$1', [req.body.name], function (err, data) {
      if (err) return next(err);
      //console.log(data);
      id = data.rows[0];
      // console.log(data);
      console.log(id);
      if(id) {
          client.query('INSERT INTO tweets (userid, content) VALUES ($1,$2)', [id,req.body.text], function (err, a) {
          if (err) return next(err);
          console.log('req.body.text');
          console.log(id);

          res.redirect('/'); //??????maybe sockets.io implementation
        });

      } else {
          client.query('INSERT INTO users (name) VALUES ($1)', [req.body.name], function (err, b) {
          if (err) return next(err);

          id =  client.query('SELECT id FROM users WHERE name=$1', [req.body.name], function(err, c){
            if (err) return next(err);
            return c.id;

            client.query('INSERT INTO tweets (content) VALUES ($1,$2)', [id, req.body.text], function (err, d) {
              if (err) return next(err);
              res.redirect('/'); //??????protects against injection?
            }); 

          });
        });
      }
    })
   }



    // var newTweet = allTheTweets.add(req.body.name, req.body.text);
    // io.sockets.emit('new_tweet', newTweet);
    checkId();
    res.redirect('/');
  });

  

  // replaced this hard-coded route with general static routing in app.js
  router.get('/stylesheets/style.css', function(req, res, next){
    res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
  });

  return router;
}
