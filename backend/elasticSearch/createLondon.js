var client = require('./elasticConnection.js');
var inputFile = require('./json_docs/london.json');
var elasticBulk = require('./bulkFunctions.js');

var bulk = [];


elasticBulk.createBulk(inputFile,'london', function(response){
  console.log("Bulk data prepared");
  elasticBulk.indexAll(response, function(response){
    console.log(response)
  })
})
