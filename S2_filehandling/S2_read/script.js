const fs = require("fs");

fs.readFile("./abcd.txt", "utf-8", function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
