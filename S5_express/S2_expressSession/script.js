const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({ secret: "random", resave: true, saveUninitialized: false }));

app.get("/", (req, res) => {
  res.send("Started");
});
app.get("/create", (req, res) => {
  req.session.polo = true;
  res.send("Done");
});
app.get("/created", (req, res) => {
  console.log(req.session.polo);
});

app.listen(3000, () => {
  console.log("Listening");
});
