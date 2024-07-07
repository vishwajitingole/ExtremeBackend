const fs = require("fs");

fs.appendFile("xyz.txt", "Lga diya....", (err) => {
  if (err) console.log(err);
  else console.log("Appended");
});

fs.readFile("xyz.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
