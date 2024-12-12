const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../config/db"); // Replace with your database connection logic

// Profile endpoint
router.post("/profile", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user by email
    const [customer] = await db.query("SELECT * FROM Customer WHERE email = ?", [email]);

    if (!customer) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate password (assuming passwords are hashed in DB)
    const isPasswordValid = bcrypt.compareSync(password, customer.password); // Use bcrypt for secure validation
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Fetch wallet details
    const [wallet] = await db.query(
      "SELECT * FROM Wallet WHERE customer_id = ?",
      [customer.customer_id]
    );

    res.json({
      profile: {
        customer_id: customer.customer_id,
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        location: customer.location,
        profile_picture: customer.profile_picture,
      },
      wallet: wallet || {
        total_points: 0,
        points_earned: 0,
        points_spent: 0,
      },
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
