const fs = require("fs");
fs.readdir("backpack", (err, files) => {
  if (err) console.log(err);
  else console.log(files);
});
