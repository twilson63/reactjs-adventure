#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('reactjs-adventure');

var problems = [
  'welcome',
  'hello',
  'setup',
  'state',
  'props',
  'composition',
  'mixins',
  'html',
  'server',
  'client',
  'socket-io',
  'twitter'
];

problems.forEach(function(problem) {
  shop.add(problem, function() {
    return require(__dirname + '/problems/' + problem);
  });
});

shop.execute(process.argv.slice(2));


