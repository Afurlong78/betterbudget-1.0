const router = require("express").Router();
const User = require("../model/User");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const verify = require("../middleware/verifyJWT");
const { registerValidation } = require("../Validation/validation");

router.put("/update", verify, async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (user === null) {
    res.status(400).json({ success: false, data: "User does not exist." });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.updateOne(
        { password: user.password },
        { $set: { password: hashedPassword } }
      );

      res.status(200).json({ success: true, data: req.body.password });
    } catch (err) {
      res.status(400).json({ success: false, data: err });
    }
  }
});

module.exports = router;
