var msee = require('msee');
var verify = require('adventure-verify');
var fs = require('fs');

exports.problem = msee.parse(
  fs.readFileSync(__dirname + '/ex9-fin.md', 'utf-8')
);

exports.verify = function(args, cb) { cb(true); };
