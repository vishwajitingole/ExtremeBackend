const jwt = require("jsonwebtoken");

const secret = "nikallawde";
function verifyToken(req, res, next) {
  const token = req.headers["oauths"];
  if (!token) {
    return res.status(403).json({ error: "Token is missing" });
  }
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      console.log(err);
    } else {
      req.user = decode;
    }
  });

  next();
}

module.exports = verifyToken;
