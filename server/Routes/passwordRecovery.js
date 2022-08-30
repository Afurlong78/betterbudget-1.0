const router = require("express").Router();
const User = require("../model/User");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

router.put("/password-recovery", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  console.log(user);

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

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.BB_EMAIL,
          pass: process.env.BB_PASSWORD,
        },
      });

      const mailOptions = {
        from: "BetterBudgetRecovery@gmail.com",
        to: req.body.email,
        subject: `New password request from: ${req.body.email}`,
        text: `Your new password is: ${req.body.password}.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(400).json({ success: false, data: error });
        } else {
          console.log("email sent:" + info.response);
          res.status(200).json({ success: true, data: info.response });
        }
      });

      res.status(200).json({ success: true, data: req.body.password });
    } catch (err) {
      res.status(400).json({ success: false, data: err });
    }
  }
});

module.exports = router;
