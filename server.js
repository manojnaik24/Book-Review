const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());
app.use("/api/auth", authRoutes); // Prefix for auth routes

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
