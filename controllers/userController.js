const db = require("../config/db");

exports.registerUser = (req, res) => {
    const { name, email, password } = req.body;
    db.query(
        "INSERT INTO Users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: "User registered successfully" });
        }
    );
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    db.query(
        "SELECT * FROM Users WHERE email = ? AND password = ?",
        [email, password],
        (err, results) => {
            if (err || results.length === 0) {
                return res.status(401).json({ message: "Invalid credentials" });
            }
            res.json({ message: "Login successful", user: results[0] });
        }
    );
};
