const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const mongoose = require("mongoose");
const UserModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "fsgfgsdvgfsdbvcadaweerettereryrtgstt";

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// MongoDB connection

mongoose
  .connect(
    "mongodb+srv://afolabiojee:pg21gSInJyO2qGfZ@oblog.sjhrfuc.mongodb.net/?retryWrites=true&w=majority&appName=Oblog"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//Routes
app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const userData = await UserModel.create({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userData = await UserModel.findOne({ email });
  const passwordCheck = bcrypt.compareSync(password, userData.password);
  if (passwordCheck) {
    jwt.sign({ email, id: userData._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json(userData);
    });
    res.json("Login successful");
  } else {
    res.status(400).json("Wrong credentials");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
