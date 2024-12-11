const express = require("express");
const { addTracking, getAllTracking } = require("../controllers/trackingController");

const router = express.Router();

// Route to add tracking information
router.post("/add", addTracking);

// Route to get all tracking information
router.get("/", getAllTracking);

module.exports = router;
