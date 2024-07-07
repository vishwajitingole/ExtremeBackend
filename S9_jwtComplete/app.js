const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const db = require("./config/db");
db();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey");
});

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server running at PORT " + PORT);
});
