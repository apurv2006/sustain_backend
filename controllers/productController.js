const db = require("../config/db");

exports.getAllProducts = (req, res) => {
    db.query("SELECT * FROM Products", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.addProduct = (req, res) => {
    const { name, price, description, stock } = req.body;
    db.query(
        "INSERT INTO Products (name, price, description, stock) VALUES (?, ?, ?, ?)",
        [name, price, description, stock],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: "Product added successfully" });
        }
    );
};
