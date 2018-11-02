var client = require('./elasticConnection.js');

function mapData(index){
  client.indices.putMapping({
    index: index,
    type: 'property_sales',
    body: {
      properties: {
        'price': {
          'type': 'integer'
        },
        'date' : {
          'type' : 'date',
          'format' : "dd/MM/yyyy || MM/yyyy"   
        },
        'postcode' : {
          'type' : 'keyword'
        },
        'type' : {
          'type' : 'keyword'
        },
        'new-build' : {
          'type' : 'keyword'
        },
        'saon' : {
          'type' : 'keyword'
        },
        'street' : {
          'type' : 'text'
        },
        'locality' : {
          'type' : 'text'
        },
        'town' : {
          'type' : 'keyword'
        },
        'district' : {
          'type' : 'text'
        },
        'county' : {
          'type' : 'text'
        },
        'transaction' : {
          'type' : 'keyword'
        }
      }
    }
  },function(err,resp,status){
      if (err) {
        console.log(err);
      }
      else {
        console.log(resp);
      }
  });
}

mapData('bournemouth')
