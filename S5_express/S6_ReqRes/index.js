const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.ip);

  //   console.log(req.headers);
  //::1 which represents that it is same ip
  res.send("Loading..... " + req.ip);
});

app.get("/profile/:username", (req, res) => {
  res.send("Kuch Details " + req.params.username);
});

app.listen(3000, () => {
  console.log("Started....");
});
