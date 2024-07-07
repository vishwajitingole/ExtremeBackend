const fs = require("fs");
fs.rmdir("bagpack", (err, files) => {
  if (err) console.log(err);
  else {
    console.log("deleted");
  }
});
