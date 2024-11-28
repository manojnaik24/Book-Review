require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize Express app
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming JSON requests

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL Database
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    process.exit(1); // Exit if connection fails
  }
  console.log("Connected to MySQL database.");
});

// API Endpoint: User Registration
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    // Check if the username already exists
    db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        return res.status(400).json({ message: "Username already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user into the database
      db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, hashedPassword],
        (err, results) => {
          if (err) throw err;
          res.status(201).json({ message: "User registered successfully" });
        }
      );
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000; // Default to 3000 if not defined in .env
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
