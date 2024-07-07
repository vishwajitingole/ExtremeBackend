const express = require("express");
const upload = require("./multer-setup"); // Ensure correct path to multer-setup

const User = require("./models/db");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), async (req, res) => {
  let user = await User.create({ name: "bag", image: req.file.filename });
  if (req.file) {
    console.log("File uploaded successfully:", req.file);
    res.send({ user });
  } else {
    console.log("No file uploaded.");
  }
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server running at Port 3000");
});
