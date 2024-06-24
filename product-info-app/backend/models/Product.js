const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Product", ProductSchema);
