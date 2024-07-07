const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://invishwn:vishwajit@jwt.uvzqqdc.mongodb.net/?retryWrites=true&w=majority&appName=JWT"
);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
