const db = require("./config/db");

const testConnection = async () => {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS solution");
    console.log("Test query executed successfully:", rows[0].solution); // Should log `2`
  } catch (err) {
    console.error("Error executing test query:", err.message);
  }
};

testConnection();
