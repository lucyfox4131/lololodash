var _ = require('lodash');

var worker = function(collection){
  var orders = [];
  var grouped = _.groupBy(collection, 'article');

  _.forEach(grouped, function(article, key){
    key = parseInt(key);
    var total_orders = 0;

    if (article.length === 1){
      total_orders = article[0].quantity;
    } else {
      total_orders = _.reduce(article, function(sum, article){
        return sum + article.quantity;
      },
      0);
    }

    orders.push({
      article: key,
      total_orders: total_orders
    });

  });
  return _.sortBy(orders, 'total_orders').reverse();
};

module.exports = worker;
