const bcrypt = require("bcrypt");
const db = require("../config/db");

// User Registration
exports.registerUser = async (req, res) => {
    const { first_name, last_name, email, password, location, profile_picture } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert a new customer into the database
        db.query(
            "INSERT INTO Customer (email, first_name, last_name, password, profile_picture, location, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())",
            [email, first_name, last_name, hashedPassword, profile_picture, location],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: err.message });
                }

                res.status(201).json({ message: "User registered successfully" });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error during registration" });
    }
};

// User Login
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    db.query(
        "SELECT * FROM Customer WHERE email = ?",
        [email],
        async (err, results) => {
            if (err || results.length === 0) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const isMatch = await bcrypt.compare(password, results[0].password);
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            res.status(200).json({
                message: "Login successful",
                user: results[0],
            });
        }
    );
};
