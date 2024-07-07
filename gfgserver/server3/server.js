const express = require("express");
const jwt = require("jsonwebtoken");
const secret = "kuchbhi";

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { user, pass } = req.body;
  const token = jwt.sign({ user, pass }, secret);
  res.json(token);
});

function verify(req, res, next) {
  const token = req.headers["oauths"];
  jwt.verify(token, secret, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log(data);
      next();
    }
  });
}

app.use(verify);

app.post("/logins", verify, (req, res) => {
  res.json({
    success: true,
    message: "Login Hogya",
  });
});
app.post("/loginss", (req, res) => {
  res.send("Logged in");
});

app.listen(4000);
