const fs = require("fs");

fs.rename("xyz.txt", "text.txt", (err) => {
  if (err) console.log(err);
  else {
    console.log("Rename hogya");
  }
});

// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });
