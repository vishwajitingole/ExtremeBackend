const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
