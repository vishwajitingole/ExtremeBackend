const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

app.use(function (req, res, next) {
  console.log("Hello");
  ///next();
});

app.get("*", (req, res) => {
  res.send("If nothing works I will");
});

app.listen(3000, (req, res) => {
  console.log("Server started");
});
