const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
  budget: {
    type: Number,
    required: true,
    min: 0,
  },
  entertainment: {
    type: Number,
    required: true,
    min: 0,
  },
  bills: {
    type: Number,
    required: true,
    min: 0,
  },
  groceries: {
    type: Number,
    required: true,
    min: 0,
  },
  other: {
    type: Number,
    required: true,
    min: 0,
  },
  month: {
    type: String,
    required: true,
    min: 0,
  },
  user: {
    type: String,
    required: true,
    min: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Month", monthSchema);
