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

// Sign-up
router.post("/signUp", signUp);
// Sign-in
router.post("/signIn", signIn);
router.post("/forgot-password", forgot);

// Add user-detail
router.post("/user", requireLogin, addUserDetails);
// Get user-detail
router.get("/user", requireLogin, getUserDetail);
// Updated user-detail
router.put("/user/:id", requireLogin, updatedUserDetail);
// Delete user-detail
router.delete("/user/:id", requireLogin, deletedUserDetail);

// Add product
router.post("/product", requireLogin, addProduct);
// Get product
router.get("/product", requireLogin, getProduct);
// Update product
router.put("/product/:id", requireLogin, updatedProduct);
// deleted product
router.delete("/product/:id", requireLogin, deletedProduct);

// Get user with user-detail
router.get("/userDetail", getUserWithUserDetail);
// Get user with product
router.get("/userProduct", getUserWithProduct);
// get all user
router.get("/getUser", getUser);

module.exports = router;
