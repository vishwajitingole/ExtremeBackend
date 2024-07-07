const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

app.use(session({ resave: false, saveUninitialized: false, secret: "random" }));
app.use(flash());

app.get("/", (req, res) => {
  req.flash("error", "Invalid credentials ");
  res.redirect("/Started");
});
app.get("/Started", (req, res) => {
  let message = req.flash("error");
  res.send(message);
});

app.listen(3000, () => {
  console.log("Start hogya....");
});
