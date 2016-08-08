var _ = require('lodash');

var worker = function(collection){
  var temps = {hot: [], warm: []};
  return _.forEach(collection, function(item){
      if (_.every(item.values, < 19)){
        temps.hot << item
      } else if (_.some(item.values, 19)){
        temps.warm << item
      }
    }
  )
};

module.exports = worker;
