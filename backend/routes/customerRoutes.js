const express = require("express");
const {
	registerCustomer,
	authCustomer,
	updateCustomerProfile,
	getCustomers,
	deleteCustomerProfile,
} = require("../controllers/customerController");
const { protectCustomer } = require("../middleware/authCustomerMiddleware");
const router = express.Router();

//Routes for Customer Account Operations
router.route("/register").post(registerCustomer);
router.route("/login").post(authCustomer);

module.exports = router;
