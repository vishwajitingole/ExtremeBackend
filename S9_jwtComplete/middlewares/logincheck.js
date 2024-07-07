const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
module.exports = async (req, res, next) => {
  if (req.cookies && req.cookies.token) {
    try {
      const data = jwt.verify(req.cookies.token, process.env.JWT_Secret);
      console.log(data);
      const user = await userModel.findOne({ email: data.email });
    } catch (error) {
      res.status(401).send("Not Authorised !!! ");
    }
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
