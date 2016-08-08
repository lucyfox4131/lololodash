var _ = require('lodash');

var worker = function(userLogin){
  return _.template('Hello <%= name %> (logins: <%= _.size(login) %>)')(userLogin);
};

module.exports = worker;
