var client = require('./elasticConnection.js');
var inputFile = require('./json_docs/bournemouth.json');
var bulk = [];
var data = inputFile.results;

var createBulk = function(jsonDoc, callback){
  for (var i in jsonDoc){
    bulk.push(
      {index: {_index:'bournemouth', _type: 'property_sales'} },
      {
        'price': jsonDoc[i].price_paid,
        'date' : jsonDoc[i].deed_date,
        'postcode': jsonDoc[i].postcode,
        'type': jsonDoc[i].property_type,
        'new-build': jsonDoc[i].new_build,
        'saon' : jsonDoc[i].saon,
        'street': jsonDoc[i].street,
        'locality':jsonDoc[i].locality,
        'town': jsonDoc[i].town,
        'district': jsonDoc[i].district,
        'county': jsonDoc[i].county,
        'transaction': jsonDoc[i].transaction_category
      }
    );
  }

  callback(bulk);
}

var indexAll = function(finishedBulk, callback){
  client.bulk({
    index: 'bournemouth',
    type: 'property_sales',
    body: finishedBulk
  }, function(err, resp, status){
    if(err){
      console.log(err)
    }
    else {
      callback(resp.items);
    }
  })
}

createBulk(data, function(response){
  console.log("Bulk data prepared");
  indexAll(response, function(response){
    console.log(response)
  })
})
