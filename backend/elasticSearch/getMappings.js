var client = require('./elasticConnection.js');


client.indices.getMapping({
    index: 'bournemouth',
    type: 'property_sales',
  },
function (error,response) {
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n",response.bournemouth.mappings.property_sales.properties);
    }
});
