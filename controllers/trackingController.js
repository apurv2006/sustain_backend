const db = require("../config/db");

// Add new product tracking info
exports.addTracking = (req, res) => {
    const { order_id, product_id, status, location } = req.body;

    db.query(
        "INSERT INTO product_tracking (order_id, product_id, status, location) VALUES (?, ?, ?, ?)",
        [order_id, product_id, status, location],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Error in adding tracking information" });
            }

            res.status(201).json({ message: "Tracking info added successfully", tracking_id: results.insertId });
        }
    );
};

// Get all product tracking information
exports.getAllTracking = (req, res) => {
    db.query("SELECT * FROM product_tracking", (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Could not fetch tracking data" });
        }

        res.status(200).json(results);
    });
};
