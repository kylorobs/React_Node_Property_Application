var client = require('./elasticConnection.js');

function getBournemouth(){
  const promise = new Promise((resolve, reject) => {
    client.search({
      index: 'bournemouth',
      type: 'property_sales',
      body: {
        sort : [
           { date : {"order" : "asc"}},
         ],
        size: 10,
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
              price : hit._source.price
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

module.exports = getBournemouth;
