const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../Validation/validation");

//api/user/register
// router.post("/register", async (req, res) => {
//   //validate data before we make a new user
//   const { error } = registerValidation(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   //checking if we already have user
//   const emailExists = await User.findOne({ email: req.body.email });
//   if (emailExists) return res.status(400).send("Email already exists.");

//   //salt and hash password
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(req.body.password, salt);

//   //create a new user
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: hashedPassword,
//   });
//   try {
//     const savedUser = await user.save();
//     res.status(200).json({ success: true, user: user._id });
//   } catch (err) {
//     console.log(err);
//     res.status(400).send(err);
//   }
// });

router.post("/register", async (req, res) => {
  //validate data before we make a new user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if we already have user
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists.");

  //salt and hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create a new user
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    // console.log(savedUser._id, "this is the id we want to send with the jwt.");

    const emailToken = jwt.sign(
      {
        ["user"]: savedUser._id,
      },
      process.env.EMAIL_SECRET,
      { expiresIn: "1d" }
    );

    const url = `http://localhost:5000/api/user/confirmation/${emailToken}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.BB_EMAIL,
        pass: process.env.BB_PASSWORD,
      },
    });

    const mailOptions = {
      from: "BetterBudgetRecovery@gmail.com",
      to: savedUser.email,
      subject: `Confirm Account Creation`,
      html: `Please click this link to confirm your email: <a href="${url}">Click.</a>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        // console.log(error);
        res.status(400).json({ success: false, data: error });
      } else {
        // console.log("email sent:" + info.response);
        res
          .status(200)
          .json({ success: true, data: info.response, user: user._id });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  //validate login
  const { error } = await loginValidation(req.body);
  if (error) return res.status(400).send(error);

  //checking if we already have user
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .json({ success: false, message: "Email is not found." });

  //is password correct?
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res
      .status(400)
      .json({ success: false, message: "Password is not found." });

  //activatedUser check
  const activatedUser = await User.findOne({ email: req.body.email });
  if (!activatedUser.activatedUser)
    return res
      .status(400)
      .json({ success: false, data: "please confirm account creation." });

  //create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res
    .header("Authorization", token)
    .status(200)
    .json({ success: true, token, id: user._id });
});

module.exports = router;
