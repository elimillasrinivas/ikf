const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
  age: Number,
  mobile: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  pincode: String,
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;