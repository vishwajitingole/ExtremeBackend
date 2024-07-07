const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const suffix = Date.now();
    cb(null, file.fieldname + "-" + suffix + path.extname(file.originalname));
    //file.fieldname :- wo frontend mein hum jo bhi <input type="file" name="image"/>
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
