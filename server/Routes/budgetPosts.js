const router = require("express").Router();
const verify = require("../middleware/verifyJWT");
const Budget = require("../model/Budgets");
const User = require("../model/User");
const { budgetValidation } = require("../Validation/validation");

//useffect getting budget
router.get("/budget", verify, async (req, res) => {
  const foundBudget = await Budget.findOne({ user: req.headers.user });

  if (!foundBudget)
    res.status(400).json({ success: false, message: "No budget was found." });

  if (foundBudget)
    try {
      return res
        .status(200)
        .json({ success: true, budget: foundBudget.budget });
    } catch (err) {
      res
        .status(400)
        .json({ success: false, message: "Error retrieving budget." });
    }
});

//editing budget
router.put("/budget", verify, async (req, res) => {
  const { error } = budgetValidation(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, data: error.details[0].message });

  const foundBudget = await Budget.findOne({ user: req.body.user });
  // console.log(foundBudget);

  if (foundBudget)
    try {
      await Budget.updateOne(
        { budget: foundBudget.budget },
        { $set: { budget: req.body.budget } }
      );
      res.status(200).json({ success: true, budget: req.body.budget });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
});

//creating budget
router.post("/budget", verify, async (req, res) => {
  const { error } = budgetValidation(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, data: error.details[0].message });

  const budgetExists = await Budget.findOne({ user: req.body.user });
  if (budgetExists)
    return res.status(400).json({ data: "A budget already exists." });

  const budget = new Budget({
    budget: req.body.budget,
    user: req.body.user,
  });

  try {
    const savedBudget = await budget.save();
    res.status(200).json({ success: true, budget: budget.budget });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
