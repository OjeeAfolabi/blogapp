const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const mongoose = require("mongoose");
const UserModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const salt = bcrypt.genSaltSync(10);
const secret = "fsgfgsdvgfsdbvcadaweerettereryrtgstt";

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

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
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json("User already exists");
    }
    // create a new user
    const userData = await UserModel.create({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    jwt.sign(
      { email: userData.email, id: userData._id },
      secret,
      {},
      (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal server error" });
        }
        console.log("Generated Token:", token);
        res
          .cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: false,
            maxAge: 1000 * 60 * 60 * 24, // 1 day
          })
          .json({ message: "Sign up successful", user: userData });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await UserModel.findOne({ email });
    if (!userData) {
      return res.status(400).json("User not found");
    }
    const passwordCheck = bcrypt.compareSync(password, userData.password);
    

    if (passwordCheck) {
      jwt.sign({ email, id: userData._id }, secret, {}, (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal server error" });
        }
        console.log("Generated Token:", token);
        res
          .cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: false,
            maxAge: 1000 * 60 * 60 * 24, // 1 day
          })
          .json({ user: userData });
      });
    } else {
      res.status(400).json("Wrong credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get('/profile', (req, res) => {
  
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
