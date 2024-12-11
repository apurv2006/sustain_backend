const mysql = require("mysql2");

// Database connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Aaavj@1981",
  database: process.env.DB_NAME || "sys",
  port: 3306, // Default MySQL port
});

// Establish connection
const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
    } else {
      console.log("Connected to the MySQL database successfully.");
    }
  });
};

module.exports = db;
module.exports.connectDB = connectDB;
