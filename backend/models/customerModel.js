/**
 * This model is implemented for
 * the Customer
 */
const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		regDate: {
			type: String,
			default: new Date(),
		},
	},
	{
		timestamps: true,
	}
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
