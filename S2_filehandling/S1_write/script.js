const fs = require("fs");
fs.writeFile("xyz.txt", "Hey Hello!!!", function (err) {
  if (err) {
    console.log("Error" + err);
  } else {
    console.log("File created");
  }
});
