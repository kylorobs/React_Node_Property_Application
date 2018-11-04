
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const Deal_Profile = require('./models/deals.js');
const util = require('util')

const getBournemouth = require('./elasticSearch/getBournemouth.js')
const client = require('./elasticSearch/elasticConnection.js');
const getAdunaListing = require('./api_request_functions/getAdunaListing.js');

const app = express();
const router = express.Router();
const PORT = 3001;
const Schema = mongoose.Schema;
const myLocalDb = process.env.DB_URI;
const azunaId = process.env.AZUNA_ID;
const azunaKey = process.env.AZUNA_KEY;
var promise = mongoose.connect(myLocalDb);


//app.use('/client', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));


router.get('/', (req, res) => {
  res.status(200).json({ message: "Hello World"})
});

router.get('/deals/:id?', (req, res) => {
  Deal_Profile.find({}).exec(function(err, deals){
    var query = {};
    var id = req.params.id;
    if (id){
      query._id = id;
    }
    else if (err){
      return res.status(500).json({succes: false, error: err})
      console.log("Problem!")
    }
    res.status(200).json({success: true, data: deals});
  });
});

router.get('/keys', (req, res) => {
  res.status(200).json({ azunaId: azunaId,
                        azunaKey: azunaKey});
})

router.post('/deals/', (req, res) => {
  let newDeal = req.body;
  newDeal.post_code = newDeal.post_code.toLowerCase();
  console.log(`New deal to be saved to the DB: ${newDeal}`);
  let deal = new Deal_Profile(newDeal);
  deal.save(function(err, deal){
    if(err){
      return res.status(500).json({ success: false, error: err});
      console.log("problem: " + err);
    }
    res.status(202).json(deal)
  })
});



//GET REQUEST MADE TO ADUNA API
router.get('/city-listings/:city/:category/:type/:beds?', (req, res) => {
  var city = req.params.city;
  var category = req.params.category;
  var beds = req.params.beds;
  var type = req.params.type

  const promise = getAdunaListing(city, category, type, beds)
  console.log(util.inspect(promise))

promise.then(data =>{
    console.log(data);
    console.log(util.inspect(data))
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).send(err);
    console.log("server side error " + err)
  })
})


//GET REQUEST MADE TO ELASTIC SEARCH SERVER
router.get('/city-data/:city/', (req, res) => {
  var city = req.params.city;
  getBournemouth(city)
  .then(data =>{
    res.status(200).json({ data });
  })
  .catch(err => {
    res.status(500).send(err);
  })

})



app.use('/api', router);

//SET UP PROMISE AND LINK TO DATABASE USING MONGOOSE
mongoose.Promise = global.Promise;
var promise = mongoose.connect(myLocalDb);

promise.then(function(db){
  console.log("DATABASE CONNECTED!")
}).catch(function(err){
  console.log("CONNECTION ERROR: " + err);
})

app.listen(PORT, () => {
  console.log("Up and Listening to Port: " + PORT)
});
