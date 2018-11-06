var client = require('../elasticSearch/elasticConnection.js');

function getPropertyTypes(city, postcode){

  const promise = new Promise((resolve, reject) => {
    client.search({
      index: city,
      type: 'property_sales',
      body: {
           size: 10000,
         query: {
           bool: {
           must:
            { match: { postcode: postcode}}
         },
         }
      }
    },function (error, response, status) {
        if (error){
          console.log("search error: "+ error);
          reject(error);
        }
        else {
          data = [];
          console.log("--- Response below, yay ---");
          console.log(response);

          response.hits.hits.forEach(function(hit){
            let type = {
              postcode: hit._source.postcode,
              type: hit._source.type
            }
            console.log(type);
            data.push(type);
            resolve(data);
          });
        }
    });
  });

  return promise; // promise
}

module.exports = getPropertyTypes;
