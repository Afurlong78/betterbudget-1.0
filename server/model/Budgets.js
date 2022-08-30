const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  budget: {
    type: Number,
    required: true,
    min: 1,
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

module.exports = mongoose.model("Budget", budgetSchema);
