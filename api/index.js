const express = require("express");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
