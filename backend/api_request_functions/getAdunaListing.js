const apiID = process.env.AZUNA_ID;
const apiKEY = process.env.AZUNA_KEY;
const axios = require('axios');
const {parse, stringify} =  require('flatted/cjs');
const util = require('util')


function getAdunaListing(city, category, beds){
  let contructedURL;
  if (!beds){
    constructedURL = `http://api.adzuna.com/v1/api/property/gb/search/1/?category=${category}&app_id=${apiID}&app_key=${apiKEY}&results_per_page=100&where=${city}`
  }
  else {
    constructedURL = `http://api.adzuna.com/v1/api/property/gb/search/1/?category=${category}&app_id=${apiID}&app_key=${apiKEY}&results_per_page=100&where=${city}&beds=${beds}`
  }
  console.log("constructed URL: " + constructedURL)

  return axios.get(constructedURL).then(results => {
      console.log("axios returned results: " + util.inspect(results.data));
      return results.data;
    })
    .catch(err => console.log(err.message))
}

module.exports = getAdunaListing;
