const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",    // Replace with your MySQL server's host
  user: "root",         // Replace with your MySQL username
  password: "root", // Replace with your MySQL password
  database: "book_review_platform", // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connected successfully!");
    connection.release(); // Release the connection back to the pool
  }
});

module.exports = pool.promise();
