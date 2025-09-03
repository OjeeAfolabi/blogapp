const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

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
app.use("/uploads", express.static(__dirname + "/uploads"));

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
          email,
          firstname: userDoc.firstname,
        });
      }
    );
  } else {
    res.status(400).json("Wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(400).json("No token provided");
  jwt.verify(token, secret, {}, async(err, info) => {
    if (err) throw err;
     const user = await User.findById(info.id);
    res.json({
      email: user.email,
      firstname: user.firstname, 
    });
    
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/createpost", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  if (!token) return res.status(400).json("No token provided");
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc); // res.json(files.req.file);
  });
});

app.get("/post", async (req, res) => {
  const posts = await Post.find()
    .sort({ createdAt: -1 })
    .populate("author", "firstname")
    .limit(30);
  res.json(posts);
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", "firstname");
  res.json(postDoc);
});

app.listen(PORT);
console.log("Server is running on port", PORT);
