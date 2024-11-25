const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db"); // Adjust path to your db.js
const router = express.Router();

// Secret for JWT
const JWT_SECRET = "your_jwt_secret";

// Login Endpoint
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user in the database
    const [user] = await db.query("SELECT * FROM users WHERE username = ?", [username]);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user[0].password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user[0].id, username: user[0].username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
