var _ = require('lodash');

var worker = function (array){
  return _.sortBy(array, [callback='quantity']).reverse();
};

module.exports = worker;
