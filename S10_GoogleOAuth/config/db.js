const mongoose = require("mongoose");
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = db;
