const fs = require("fs");

fs.unlink("text copy 2.txt", (err) => {
  if (err) console.log(err);
  else {
    console.log("Deleted");
  }
});
