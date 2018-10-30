var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// SCHEMAS FOR MONGOOSE
var dealSchema = new Schema({
  post_code: String,
  price: Number,
  refurb: Number
})

var Deal_Profile = mongoose.model('Deal_Profile', dealSchema);

//EXPORT TO USE IN SERVER.JS
//export default mongoose.model('Deal', dealSchema);

module.exports = Deal_Profile   ;
