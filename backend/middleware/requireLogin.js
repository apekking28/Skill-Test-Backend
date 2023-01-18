const jwt = require("jsonwebtoken");
const { Jwt_secret } = require("../keys");
const USER = require("../models/User");

const requireLogin = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You must have logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, Jwt_secret, async (err) => {
    if (err) {
      return res.status(401).json({ error: "You must have logged in 2" });
    }
    next();
  });
};

module.exports = requireLogin;
