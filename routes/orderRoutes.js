const express = require("express");
const { createOrder, getOrdersByUser } = require("../controllers/orderController");

const router = express.Router();

// Route for creating a new order
router.post("/create", createOrder);

// Route for fetching orders by user
router.get("/user/:userId", getOrdersByUser);

module.exports = router;
