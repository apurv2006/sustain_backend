const db = require("../config/db");

exports.createOrder = (req, res) => {
    const { userId, productId, quantity } = req.body;
    db.query(
        "INSERT INTO Orders (userId, productId, quantity) VALUES (?, ?, ?)",
        [userId, productId, quantity],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: "Order placed successfully" });
        }
    );
};

exports.getOrdersByUser = (req, res) => {
    const { userId } = req.params;
    db.query(
        "SELECT * FROM Orders WHERE userId = ?",
        [userId],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        }
    );
};
