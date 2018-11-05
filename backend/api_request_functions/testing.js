var client = require('../elasticSearch/elasticConnection.js');

function getLandRegistryData(city, type, postcode){

  switch(type) {
    case "detached":
      type = 'D'
    break;
    case "semi-detached":
      type = 'S'
    break;
    case "flat":
      type = 'F'
    break;
    case "bungalow":
      type = 'O'
    break;
    case "terraced":
      type = 'T'
    break;
    default:
    type="undefined"
  }
  const promise = new Promise((resolve, reject) => {
    client.search({
      index: city,
      type: 'property_sales',
      body: {
        sort : [
           { date : {"order" : "asc"}},
         ],
           size: 10000,
         query: {
           bool: {
           must: [
           { match: { postcode: postcode}},
            { match: { type: type}}
          ],
         },
         }
      }
    },function (error, response, status) {
        if (error){
          console.log("search error: "+error);
          reject(error);
        }
        else {
          data = [];
          console.log("--- Response below, yay ---");
          console.log(response);

          response.hits.hits.forEach(function(hit){
            let sale = {
              date: hit._source.date,
              price : hit._source.price,
              postcode: hit._source.postcode,
              type: hit._source.type
            }
            console.log(sale);
            data.push(sale);
            resolve(data);
          });
        }
    });
  });

  return promise; // promise
}

module.exports = getLandRegistryData;
