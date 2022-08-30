const router = require("express").Router();
const verify = require("../middleware/verifyJWT");
const Month = require("../model/Month");
const User = require("../model/User");

router.get("/all_months", verify, async (req, res) => {
  const doesUserHaveMonths = await Month.findOne({ user: req.headers.user });
  const allUserMonths = await Month.find({ user: req.headers.user });

  if (!doesUserHaveMonths) {
    res.status(400).json({
      success: false,
      data: {
        bills_start: 0,
        entertainment_start: 0,
        groceries_start: 0,
        other_start: 0,
        bills_end: 0,
        entertainment_end: 0,
        groceries_end: 0,
        other_end: 0,
      },
    });
  } else if (allUserMonths.length === 1) {
    let savedMonth = allUserMonths[0];
    res.status(200).json({
      success: true,
      data: {
        last: savedMonth,
        secondToLast: {
          month: "No month.",
          budget: 0,
          entertainment: 0,
          groceries: 0,
          bills: 0,
          other: 0,
        },
      },
    });
  } else {
    let lastMonth = allUserMonths[allUserMonths.length - 2];
    let secondToLastMonth = allUserMonths[allUserMonths.length - 1];

    res.status(200).json({
      success: true,
      data: { last: lastMonth, secondToLast: secondToLastMonth },
    });
  }
});

router.get("/month", verify, async (req, res) => {
  const foundMonth = await Month.findOne({
    user: req.headers.user,
    month: req.headers.month,
  });

  if (!foundMonth) {
    res
      .status(400)
      .json({ success: false, message: "You do not have this month saved." });
  }

  if (foundMonth) {
    try {
      return res.status(200).json({ success: true, data: foundMonth });
    } catch (err) {
      return res.status(400).json({ success: false, data: err });
    }
  }
});

router.post("/month", verify, async (req, res) => {
  const foundUser = await Month.find({ user: req.body.user });
  let found = foundUser.find((el) => el.month === req.body.month);
  if (found) {
    return res
      .status(400)
      .json({ success: false, data: "You already have this month saved." });
  } else {
    const month = new Month({
      budget: req.body.budget,
      entertainment: req.body.entertainment,
      bills: req.body.bills,
      groceries: req.body.groceries,
      other: req.body.other,
      month: req.body.month,
      user: req.body.user,
    });
    try {
      await month.save();
      res.status(200).json({ success: true, data: month });
    } catch (err) {
      res.status(400).json({ success: false, data: err });
    }
  }
});

router.put("/month", verify, async (req, res) => {
  const foundMonth = await Month.findOne({
    user: req.body.user,
    month: req.body.month,
  });

  if (foundMonth) {
    try {
      await Month.updateOne(
        {
          budget: foundMonth.budget,
          entertainment: foundMonth.entertainment,
          bills: foundMonth.bills,
          groceries: foundMonth.groceries,
          other: foundMonth.other,
          month: foundMonth.month,
        },
        {
          $set: {
            budget: req.body.budget,
            entertainment: req.body.entertainment,
            bills: req.body.bills,
            groceries: req.body.groceries,
            other: req.body.other,
            month: req.body.month,
            user: req.body.user,
          },
        }
      );
      res.status(200).json({ success: true, data: foundMonth });
    } catch (err) {
      res.status(400).json({ success: false, data: err });
    }
  }
});

module.exports = router;
