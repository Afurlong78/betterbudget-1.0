const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../model/User");

router.get("/confirmation/:token", async (req, res) => {
  const verified = jwt.verify(req.params.token, process.env.EMAIL_SECRET);

  // if (!verified) {
  //   return res.status(400).json({ success: false, data: "Not verified." });
  // }

  // console.log(verified, "are we verfied?");
  try {
    const foundUser = await User.findOne({ _id: verified.user });
    // console.log(foundUser, "the user we are updating");
    const confirmedUser = await User.updateOne(
      { _id: foundUser._id },
      { $set: { activatedUser: true } }
    );
    res.redirect("https://better-budget-smoky.vercel.app/login");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
