const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/db");
db();
const authRouter = require("./routes/authRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting up passport js
const expressSession = require("express-session");
app.use(expressSession({ secret: "vishwajit" }));
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function (req, res) {});
app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("Server started at PORT 3000");
});
