const mongoose = require("mongoose");

const URI = process.env.URI;

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Database Connected !!!!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connect;
