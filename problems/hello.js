var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');
var path = require('path');
var jsdom = require('jsdom');


exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/hello.md', 'utf-8')
);

exports.verify = function(args, cb) { cb(true); };

// exports.verify = verify(function(args, t) { 
//   var wzrd = require(path.resolve('./node_modules/wzrd'));
//   wzrd.http({
//     entries: [{from: 'app.js', to: 'app.js'}],
//     browserifyArgs: '-t reactify'
//   }).listen(9966);
//   // 
//   jsdom.env(
//     "http://localhost:9966",
//     { 
//     features: {
//       FetchExternalResources : ["script"]
//     },
//     done: function (errors, window) {
//       var html = window.document.body.outerHTML;
//       console.log(html);
//       if (/<h1>Hello, ReactJS<\/h1>/.test(html)) {
//         t.ok(true);
//       } else {
//         t.ok(false);
//       }
//       t.end();
//       setTimeout(function() {
//         process.exit(0);
//       }, 50);
//     }
//   });
// });