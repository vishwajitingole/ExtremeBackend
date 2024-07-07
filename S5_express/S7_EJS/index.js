const express = require("express");
const app = express();

app.use(express.json());
//it is used when we make api request using axios
app.use(express.urlencoded({ extended: true }));
//helps in reading post url requests

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/form", (req, res) => {
  res.render("form");
});
app.post("/check", (req, res) => {
  res.send("Working");
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Server started....");
});
