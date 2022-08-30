const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
  budget: {
    type: Number,
    required: true,
    min: 1,
  },
  entertainment:{
    type: Number,
    required: true,
    min: 1,
  },
  bills:{
    type: Number,
    required: true,
    min: 1,
  },
  groceries:{
    type: Number,
    required: true,
    min: 1,
  },
  other:{
    type: Number,
    required: true,
    min: 1,
  },
  month:{
    type: String,
    required: true,
    min: 1
  },
  user: {
    type: String,
    required: true,
    min: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Month", monthSchema);