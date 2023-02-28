const express = require("express");
const postRouter = express.Router();
const { PostModel } = require("../model/post.model");
require("dotenv").config();

postRouter.get("/post", async (req, res) => {
  const query = req.query;
  if (query.sort === "low_date") {
    const post = await PostModel.find().sort({ date: 1 });
    res.send(post);
  } else if (query.sort === "high_date") {
    const post = await PostModel.find().sort({ date: -1 });
    res.send(post);
  } else if (query.category === "clothing") {
    const post = await PostModel.find({ category: "clothing" });
    res.send(post);
  } else if (query.category === "electronics") {
    const post = await PostModel.find({ category: "electronics" });
    res.send(post);
  } else if (query.category === "furniture") {
    const post = await PostModel.find({ category: "furniture" });
    res.send(post);
  } else if (query.category === "other") {
    const post = await PostModel.find({ category: "other" });
    res.send(post);
  } else {
    const post = await PostModel.find(query);
    res.send(post);
  }
});

// postRouter.get("/post/:category", async (req, res) => {
//   const query = req.params.category;
//   const post = await PostModel.find({ category: query });
//   res.send(post);
// });

// postRouter.get("/post")

postRouter.post("/post", async (req, res) => {
  const payload = req.body;
  try {
    const new_post = new PostModel(payload);
    await new_post.save();
    res.send("New post created");
  } catch (err) {
    console.log(err);
    res.send("Unable to create post");
  }
});

postRouter.delete("/post/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await PostModel.findByIdAndDelete({ _id: id });
    res.send("Delete the  post");
  } catch (err) {
    res.send("Unable to delete the post");
  }
});

module.exports = {
  postRouter,
};
