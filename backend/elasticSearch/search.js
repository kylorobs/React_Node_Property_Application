var client = require('./elasticConnection.js');


client.search({
  index: 'bournemouth',
  type: 'property_sales',
  body: {
    query: {
      bool: {
      must:{ match: { "postcode": "BH1 1AA"}}
      }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response below, yay ---");
      console.log(response);
      console.log("--- Number Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit._source.price);
      })
    }
});
module.exports
