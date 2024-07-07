const multer = require("multer");
const path = require("path");

function fileFilter(req, file, cb) {
  const extnames = [".png", ".jpeg", "jpg"];
  let ext = path.extname(file.originalname);

  if (extnames.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only .png, .jpeg, and .jpg files are allowed"), false);
  }
}

const storage = multer.memoryStorage();
const upload = multer({ storage, fileFilter });

module.exports = upload;
