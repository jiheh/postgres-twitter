// 'use strict';

// var _ = require('lodash');
// var data = [];

// function add (name, text) {
//   data.push({ name: name, text: text, id: data.length });
//   return _.clone(data[data.length - 1]);
// }

// function list () {
//   return _.cloneDeep(data);
// }

// function find (properties) {
//   return _.cloneDeep(_.filter(data, properties));
// }

// module.exports = { add: add, list: list, find: find };

// var randArrayEl = function(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// var getFakeName = function() {
//   var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Ashi', 'Gabriel', 'Emily', 'Ashley', 'Kimber', 'Ani'];
//   var fakeLasts = ['Hashington', 'Hopperson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
//   return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
// };

// var getFakeTweet = function() {
//   var awesomeAdj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
//   return 'Grace Hopper Academy is ' + randArrayEl(awesomeAdj) + '! The instructors are just so ' + randArrayEl(awesomeAdj) + '. #GHAlove #codedreams';
// };

// for (var i = 0; i < 10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }
