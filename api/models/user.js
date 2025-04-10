const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "please enter your first name"],
  },
  lastname: {
    type: String,
    required: [true, "please enter your last name"],
  },

  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [6, "password must be more than six characters"],
  },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
