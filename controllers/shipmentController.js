const db = require("../config/db");

// Add new shipment information
exports.createShipment = (req, res) => {
    const { order_id, tracking_number, courier_name, shipped_date, estimated_delivery_date, status } = req.body;

    db.query(
        "INSERT INTO shipments (order_id, tracking_number, courier_name, shipped_date, estimated_delivery_date, status) VALUES (?, ?, ?, ?, ?, ?)",
        [order_id, tracking_number, courier_name, shipped_date, estimated_delivery_date, status],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Could not create shipment" });
            }

            res.status(201).json({ message: "Shipment created successfully", shipment_id: results.insertId });
        }
    );
};

// Get all shipments
exports.getAllShipments = (req, res) => {
    db.query("SELECT * FROM shipments", (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Could not fetch shipment data" });
        }

        res.status(200).json(results);
    });
};
