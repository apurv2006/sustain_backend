const db = require("../config/db");

// Create a new order with order details
exports.createOrder = (req, res) => {
    const { customer_id, business_id, products } = req.body;

    if (!products || products.length === 0) {
        return res.status(400).json({ error: "No products provided for the order" });
    }

    // Insert a new order into the Orders table
    db.query(
        "INSERT INTO Orders (customer_id, business_id, total_amount, status) VALUES (?, ?, ?, 'Pending')",
        [customer_id, business_id, 0],
        (err, orderResult) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            const orderId = orderResult.insertId; // Get the newly created order's ID
            const orderDetailsPromises = [];

            // Insert each product into the order_details table
            for (const product of products) {
                const { product_id, quantity, price } = product;
                const query = db.promise().query(
                    "INSERT INTO order_details (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
                    [orderId, product_id, quantity, price]
                );
                orderDetailsPromises.push(query);
            }

            // Wait for all order details to be inserted
            Promise.all(orderDetailsPromises)
                .then(() => {
                    // Update total amount in the Orders table based on the inserted order_details
                    db.query(
                        `SELECT SUM(total_amount) AS total FROM order_details WHERE order_id = ?`,
                        [orderId],
                        (err, result) => {
                            if (err) {
                                return res.status(500).json({ error: err.message });
                            }

                            const totalAmount = result[0].total || 0;

                            db.query(
                                "UPDATE Orders SET total_amount = ? WHERE order_id = ?",
                                [totalAmount, orderId],
                                (err) => {
                                    if (err) {
                                        return res.status(500).json({ error: err.message });
                                    }
                                    res.status(201).json({
                                        message: "Order and order details created successfully",
                                        orderId,
                                        totalAmount,
                                    });
                                }
                            );
                        }
                    );
                })
                .catch(error => {
                    res.status(500).json({ error: error.message });
                });
        }
    );
};

// Fetch orders by user
exports.getOrdersByUser = (req, res) => {
    const { userId } = req.params;

    db.query(
        "SELECT * FROM Orders WHERE customer_id = ?",
        [userId],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        }
    );
};
