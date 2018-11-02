var client = require('./elasticConnection.js');

function deleteIndex(index){
  client.indices.delete({index: index},function(err,resp,status) {
    console.log("delete",resp);
  });
}

// deleteIndex('london');
deleteIndex('bournemouth');
// // deleteIndex('bristol');
// // deleteIndex('colchester');
// // deleteIndex('ipswich');
// // deleteIndex('leeds');
// deleteIndex('middlesbrough');
// deleteIndex('newcastle');
// deleteIndex('portsmouth');
// deleteIndex('scarborough');
// deleteIndex('southampton');
// deleteIndex('sunderland');
