const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "please enter a title"],
    },
    summary: {
      type: String,
      required: [true, "please enter a summary"],
    },
    content: {
      type: String,
      required: [true, "please enter a content"],
    },
    cover: {
      type: String,
      required: [true, "please upload a cover image"],
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);
const PostModel = model("Post", PostSchema);
module.exports = PostModel;
