const db = require("../config/db");

// Get all products from the database
exports.getAllProducts = (req, res) => {
    db.query("SELECT * FROM Products", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Add a new product to the database
exports.addProduct = (req, res) => {
    console.log('Request received:', req.body);

    const { business_id, name, price, description, stock_quantity, eco_credit_cost, image_url } = req.body;

    if (!business_id || !name || !price || !stock_quantity) {
        return res.status(400).json({
            error: "business_id, name, price, and stock_quantity are required fields"
        });
    }

    db.query(
        "INSERT INTO Products (business_id, name, description, price, eco_credit_cost, stock_quantity, image_url, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())",
        [business_id, name, description, price, eco_credit_cost, stock_quantity, image_url],
        (err, results) => {
            if (err) {
                console.error('Database Error:', err);
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({ 
                message: "Product added successfully", 
                product_id: results.insertId 
            });
        }
    );
};
