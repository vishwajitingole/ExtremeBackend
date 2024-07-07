const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://vishwajitingole22:vishwajit@memorystorage.ixhnkuu.mongodb.net/?retryWrites=true&w=majority&appName=MemoryStorage"
  )
  .then(() => console.log("DB Connected"))
  .catch((er) => console.log("error" + er));
const UserSchema = mongoose.Schema({
  name: String,
  image: Buffer,
});

module.exports = mongoose.model("User", UserSchema);
