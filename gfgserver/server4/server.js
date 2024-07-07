const express = require("express");
require("dotenv").config();
const db = require("./config/db");
db();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is Live!!!");
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} Port number se bhaag rha hai `);
});
