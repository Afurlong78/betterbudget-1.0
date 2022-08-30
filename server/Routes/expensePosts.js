const router = require("express").Router();
const verify = require("../middleware/verifyJWT");
const Expense = require("../model/Expenses");
const User = require("../model/User");
const { expenseValidation } = require('../Validation/validation')

router.get("/expense", verify, async (req, res) => {
  const foundExpenses = await Expense.find({ user: req.headers.user });

  if (foundExpenses)
    try {
      res.status(200).json(foundExpenses);
    } catch (err) {
      res.status(400).send(err);
    }
});

router.post("/expense", verify, async (req, res) => {
  //need to validate expense
  const { error } = expenseValidation(req.body);
  if(error) return res.status(400).json({success:false, data: error.details[0].message})

  const expense = new Expense({
    expense: req.body.expense,
    category: req.body.category,
    user: req.body.user,
  });

  try {
    const savedExpense = await expense.save();
    if (savedExpense) {
      const userExpenses = await Expense.find({ user: req.body.user });
      res
        .status(200)
        .json({ success: true, expense: expense, userExpenses: userExpenses });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/expense", verify, async (req, res) => {
  const foundId = await Expense.findOne({ _id: req.body.id });
  // console.log(foundId);

  if (foundId)
    try {
      const deletedItem = await Expense.deleteOne({ _id: foundId });
      const updatedExpense = await Expense.find({ user: req.headers.user });
      res.status(200).json({ success: true, updatedExpense });
    } catch (err) {
      res.status(400).send(err);
    }
});

module.exports = router;
