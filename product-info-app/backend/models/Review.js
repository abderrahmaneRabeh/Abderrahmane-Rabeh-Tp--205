const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  reviewText: String,
  rating: Number,
});

module.exports = mongoose.model("Review", ReviewSchema);
