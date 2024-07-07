const express = require("express");
const app = express();
const cookie = require("cookie-parser");

app.use(cookie());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/banned", (req, res) => {
  res.cookie("name", "Vishwajit");
  res.send("Bann hogya");
});

app.get("/check", (req, res) => {
  //inorder to read cookie we would need cookie parser
  console.log(req.cookies.name);
  res.send("Checking");
});

app.listen(3000, () => {
  console.log("Server started");
});
