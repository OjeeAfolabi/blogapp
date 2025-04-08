const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.post("/signup", (req, res) => {
  res.send("User signed up successfully!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// mongodb+srv://afolabiojee:Jayson@931005@cluster0.irzglmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0