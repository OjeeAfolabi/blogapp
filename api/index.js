const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const mongoose = require("mongoose");
const User = require("./models/user");
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

// // MongoDB connection

mongoose
  .connect(
    "mongodb+srv://afolabiojee:pg21gSInJyO2qGfZ@oblog.sjhrfuc.mongodb.net/?retryWrites=true&w=majority&appName=Oblog"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const userDoc = await User.create({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (!userDoc) return res.status(400).json("User not found");
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign(
      { email: userDoc.email, id: userDoc._id },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          email
        });
      }
    );
  } else {
    res.status(400).json("Wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
  res.json(req.cookies);
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
  <>
  </>
});
app.listen(5000);

