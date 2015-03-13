#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('reactjs-adventure');

var problems = [
  'welcome',
  'ex1-hello',
  'ex2-input',
  'ex3-header',
  'ex4-main',
  'ex5-input-events',
  'ex6-flux',
  'ex7-store',
  'ex8-actions',
  'ex9-fin'
];

problems.forEach(function(problem) {
  shop.add(problem, function() {
    return require(__dirname + '/problems/' + problem);
  });
});

shop.execute(process.argv.slice(2));


