const express = require("express");
const { getAllProducts, addProduct } = require("../controllers/productController");

const router = express.Router();

// Route for fetching all products
router.get("/", getAllProducts);

// Route for adding a new product
router.post("/add-product", addProduct);

module.exports = router;
