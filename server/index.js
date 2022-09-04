const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors({ origin: "*", credentials: true }));

//importing routes
const authRoute = require("./Routes/auth");
const postRoute = require("./Routes/budgetPosts");
const expenseRoute = require("./Routes/expensePosts");
const monthRoute = require("./Routes/monthPosts");
const passwordRecoveryRoute = require("./Routes/passwordRecovery");
const passwordUpdate = require("./Routes/updatePassword");
const confirmation = require("./Routes/Confirmation");

//importing dotenv
dotenv.config();

//connecting to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to database.")
);

//server
app.get("/api", (req, res) => {
  res.send("hello from the server");
});

//middleware
app.use(express.json());

//route middlwares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/posts", expenseRoute);
app.use("/api/posts", monthRoute);
app.use("/api/posts", passwordRecoveryRoute);
app.use("/api/posts", passwordUpdate);
app.use("/api/user", confirmation);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, () => console.log("Express server is running."));
