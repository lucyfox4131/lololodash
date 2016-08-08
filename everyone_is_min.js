var _ = require('lodash');

var worker = function(collection){
  var temps = {
                hot: [],
                warm: []
              };

  function isHot(collection){
    return collection > 19;
  };

  _.forEach(collection, function(town, name){
      if (_.every(town, isHot)){
        temps.hot.push(name);
      } else if (_.some(town, isHot)){
        temps.warm.push(name);
      }
    });

  return temps;
};

module.exports = worker;
