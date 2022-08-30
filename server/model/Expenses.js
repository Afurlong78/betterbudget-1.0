const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  expense: {
    type: Number,
    required: true,
    min: 1,
  },
  category:{
    type: String,
    required: true,
    min: 1,
  },
  user:{
    type: String,
    required: true,
    min: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
