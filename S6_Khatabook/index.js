const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir("./files", function (err, files) {
    console.log(files);
    res.render("index", { files });
  });
});

app.get("/create", (req, res) => {
  const currDate = new Date();
  const date = String(currDate.getDate()).padStart(2, "0");
  const month = String(currDate.getMonth()).padStart(2, "0");
  const year = String(currDate.getFullYear());
  const fn = `${date}-${month}-${year}.txt`;
  fs.writeFile(`./files/${fn}`, "daal cheeni", function (err) {
    if (err) return res.send(err);

    res.send("Done");
  });
});

app.get("/edit/:fname", (req, res) => {
  const fname = req.params.fname;
  fs.readFile(`./files/${fname}`, "utf-8", function (err, data) {
    if (err) return res.send(err);
    res.render("edit", { data, fname: req.params.fname });
  });
});
app.get("/delete/:fname", (req, res) => {
  const fname = req.params.fname;
  fs.unlink(`./files/${fname}`, function (err) {
    if (err) return res.send(err);
    res.redirect("/");
  });
});
app.post("/update/:fname", (req, res) => {
  const fname = req.params.fname;
  console.log(fname);
  fs.writeFile(`./files/${fname}`, req.body.filedata, "utf-8", function (err) {
    if (err) return res.send(err);

    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("Server Started !!!!");
});
