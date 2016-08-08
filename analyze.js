var _ = require('lodash');

var worker = function(freelancers){
  var result = {average: 0,
                underperform: [],
                overperform: []}

  var average_income = (_.reduce(freelancers, function(sum, freelancer){
    return sum + freelancer.income;
  }, 0))/freelancers.length;

  var underperforming = _.filter(freelancers, function(person){
    return (person.income <= average_income);
  });

  var overperforming = _.filter(freelancers, function(person){
    return (person.income > average_income);
  });

  result["average"] = average_income;
  result["underperform"] = _.sortBy(underperforming, 'income');
  result["overperform"] = _.sortBy(overperforming, 'income');

  return result;
};


module.exports = worker;
