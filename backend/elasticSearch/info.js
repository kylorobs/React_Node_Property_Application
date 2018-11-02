var client = require('./elasticConnection.js');

client.cluster.health({},function(err,resp,status) {
  console.log("-- Client Health --",resp);
});

// client.count({index: 'london', type: 'property_sales'},function(err,resp,status) {
//   console.log("london",resp);
// });

client.count({index: 'bournemouth', type: 'property_sales'},function(err,resp,status) {
  console.log("bournemouth",resp);
});

// client.count({index: 'bristol', type: 'property_sales'},function(err,resp,status) {
//   console.log("bristol",resp);
// });

// client.count({index: 'ipswich', type: 'property_sales'},function(err,resp,status) {
//   console.log("ipswich",resp);
// });
