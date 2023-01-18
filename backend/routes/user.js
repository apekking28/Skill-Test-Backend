const express = require("express");
const router = express.Router();
const requireLogin = require("../middleware/requireLogin");
const { signUp, signIn, forgot } = require("../controllers/auth");
const {
  addUserDetails,
  getUserDetail,
  updatedUserDetail,
  deletedUserDetail,
} = require("../controllers/UserDetail");
const {
  addProduct,
  getProduct,
  updatedProduct,
  deletedProduct,
} = require("../controllers/Product");
const {
  getUserWithUserDetail,
  getUserWithProduct,
  getUser,
} = require("../controllers/Query");

///////////////////////////////
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/forgot-password", forgot);

///////////////////////////
router.post("/user", requireLogin, addUserDetails);
router.get("/user", requireLogin, getUserDetail);
router.put("/user/:id", requireLogin, updatedUserDetail);
router.delete("/user/:id", requireLogin, deletedUserDetail);

///////////////////////////
router.post("/product", requireLogin, addProduct);
router.get("/product", requireLogin, getProduct);
router.put("/product/:id", requireLogin, updatedProduct);
router.delete("/product/:id", requireLogin, deletedProduct);
///////////////////////////
router.get("/userDetail", getUserWithUserDetail);
router.get("/userProduct", getUserWithProduct);
router.get("/getUser", getUser);

//////////////////////////

module.exports = router;
