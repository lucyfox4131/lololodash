var _ = require('lodash');

var worker = function(collection){
  var users = [];
  var commentsByName = _.groupBy(collection, 'username');

  _.forEach(commentsByName, function(user, name){
    var count = _.size(user)
    users.push({username: name, comment_count: count});
  })
  return users.reverse();
};

module.exports = worker;
