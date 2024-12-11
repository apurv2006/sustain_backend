const express = require("express");
const { createShipment, getAllShipments } = require("../controllers/shipmentController");

const router = express.Router();

// Route to create a shipment
router.post("/create", createShipment);

// Route to get all shipments
router.get("/", getAllShipments);

module.exports = router;
