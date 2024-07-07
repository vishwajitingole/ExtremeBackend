const express = require("express");
const app = express();
const upload = require("./multer-setup");
const User = require("./User");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), async (req, res) => {
  console.log(req.file);
  if (req.file) {
    const user = await User.create({
      name: "bag",
      image: req.file.buffer,
    });
    console.log(user);

    res.redirect("/show");
  } else {
    res.status(400).send("File upload failed");
  }
});

app.get("/show", async (req, res) => {
  try {
    let files = await User.find();
    res.render("dikhao", { files });
  } catch (error) {
    console.log("Error fetching files:", error);
    res.status(500).send("Error fetching files");
  }
});

app.listen(3000);
