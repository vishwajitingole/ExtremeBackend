const mongoose = require("mongoose");
const profile = mongoose.Schema({
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true },
});

module.exports = mongoose.model("Profile", profile);
