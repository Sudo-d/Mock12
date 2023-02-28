const mongoose = require("mongoose");

const postSchemal = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  image: String,
  location: String,
  date: String,
  price: String,
});

const PostModel = mongoose.model("post", postSchemal);

module.exports = { PostModel };
