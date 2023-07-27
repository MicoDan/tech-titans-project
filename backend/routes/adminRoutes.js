const express = require("express");
const { registerAdmin, authAdmin, getAdminProfile, updateAdminProfile } = require("../controllers/adminController");
const { protectAdmin } = require("../middleware/authAdminMiddleware");
const router = express.Router();

//Routes for Admin Account Operations
router.route("/register").post(registerAdmin);
router.route("/login").post(authAdmin);
router.route("/view").get(protectAdmin, getAdminProfile);
router.route("/edit").put(protectAdmin, updateAdminProfile);



module.exports = router;
