const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const secret = "nikallawde";
const verifyToken = require("./middlewares/login");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey");
});

app.post("/login", (req, res) => {
  const { user, pass } = req.body;

  const token = jwt.sign({ user, pass }, secret, { expiresIn: "1h" });
  //   res.json({ sucess: true, token });
  res.send(token);
});

app.post("/logins", verifyToken, (req, res) => {
  console.log("hogya done");
  res.send("Abe lawde chal nikal");
});

app.listen(4000);
