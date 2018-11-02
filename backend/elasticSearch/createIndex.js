var client = require('./elasticConnection.js');

function createIndex(indexName){
  client.indices.create({
    index: indexName
  },function(err,resp,status) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });
}
// 
// createIndex('london');
createIndex('bournemouth');
// createIndex('bristol');
// createIndex('colchester');
// createIndex('ipswich');
// createIndex('leeds');
// createIndex('middlesbrough');
// createIndex('newcastle');
// createIndex('portsmouth');
// createIndex('southampton');
// createIndex('sunderland');
