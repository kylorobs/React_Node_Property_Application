
function getAdunaListing(city, category){
  const promise = new Promise((resolve, reject) => {
    client.search({
      index: city,
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
          console.log("--- Aduna Response below, yay ---");
          console.log(response);

          resolve(response);
          });
        }
    });
  });

  return promise; // promise
}

module.exports = getBournemouth;
