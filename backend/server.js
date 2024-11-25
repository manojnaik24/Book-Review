const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const db = require("./config/db");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample POST route for signup (using the User model)
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    const newUser = new User({
      username,
      email,
      password, // Don't forget to hash the password before saving it!
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(400).json({ error: "Error creating user" });
  }
});

mongoose.connect("mongodb://localhost:27017/bookReviewPlatform", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

  app.get("/users", async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM users");
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });
  