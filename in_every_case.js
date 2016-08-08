var _ = require('lodash');

var worker = function (towns){
  return _.forEach(towns, function (town){
        if (town.population > 1.0) {
          return town.size = 'big';
        } else if (town.population > 0.5 && town.population < 1.0) {
          return town.size = 'med';
        } else {
          return town.size = 'small';
        };
      };
  );
};

module.exports = worker;
