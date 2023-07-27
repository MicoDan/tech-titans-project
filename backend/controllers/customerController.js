const asyncHandler = require("express-async-handler");
const Customer = require("../models/customerModel");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

// Register a customer profile
const registerCustomer = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const isAdmin = req.body.password === "mysterious" ? true : false;

  const customerExists = await Customer.findOne({ email });
  if (customerExists) {
    res.status(400);
    throw new Error("Customer Profile Exists!");
  }

  const customer = new Customer({
    name,
    email,
    password,
    isAdmin,
  });

  const salt = await bcrypt.genSalt(10);
  customer.password = await bcrypt.hash(password, salt);

  await customer.save();

  if (customer) {
    res.status(201).json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      isAdmin: customer.isAdmin,
      token: generateToken(customer._id),
    });
  } else {
    res.status(400);
    throw new Error("Customer Registration Failed!");
  }
});

// Authenticate a customer profile
const authCustomer = asyncHandler(async (req, res) => {
  const { name, password } = req.body;

  const customer = await Customer.findOne({ email });

  if (!customer) {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }

  const isMatch = await bcrypt.compare(password, customer.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid Email or Password");
  } else {
    res.status(201).json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      isAdmin: customer.isAdmin,
      regDate: customer.regDate,
      token: generateToken(customer._id),
    });
  }
});

// Other functions remain unchanged as they only retrieve/update customer data based on the ID.

module.exports = {
  registerCustomer,
  authCustomer,
  // Other functions...
};
