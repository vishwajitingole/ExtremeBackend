const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/get", (req, res) => {
  const token = jwt.sign({ email: "vishwajitingole22@gmail.com" }, "huihui");
  res.send(token);
});
app.get("/decode", (req, res) => {
  const data = jwt.decode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpc2h3YWppdGluZ29sZTIyQGdtYWlsLmNvbSIsImlhdCI6MTcxODYyNjY0MX0.aJ7GskJlMRktv6pKBUVtPEF6YBPRfofo_ZSX_IJ9Qm4",
    "huihui"
  );
  res.send(data);
});

//setting cookie
//No package is required to set a cookie in browser
app.get("/setcookie", (req, res) => {
  res.cookie("age", "25");
  //This will set an expiration for a cookie which will automatically delete the cookie after a certain time
  //  res.cookie("age", "25", { maxAge: 10000 });

  //This will make it accessible to only server as it isn't safe to keep cookies access to the end user
  //res.cookie("age","25",{httpOnly:true})

  //The cookie will be sent only to secured https site
  //res.cookie("age","25",{httpOnly:true,secure:true})
  res.send("Cookie set hogyi!!");
});

//inorder to read cookies from the browser we would need cookieparser
app.use(cookieParser());
app.get("/readcookie", (req, res) => {
  res.send(req.cookies.age);
});

app.listen(3000, () => {
  console.log("running on 3000");
});
