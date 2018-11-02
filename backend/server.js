// import express from 'express';
// import bodyParser from 'body-parser';
// import logger from 'morgan';
// import mongoose from 'mongoose';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const Deal_Profile = require('./models/deals.js');

const getBournemouth = require('./elasticSearch/getBournemouth.js')
const client = require('./elasticSearch/elasticConnection.js');

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


router.get('/bournemouth', (req, res) => {
  getBournemouth()
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
