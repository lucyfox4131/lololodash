var _ = require('lodash');

var worker = function(collection){
  return _.chain(collection)
  .map(function(word){
    return (word + "Chained").toUpperCase();
  })
  .sortBy();
};

module.exports = worker;
