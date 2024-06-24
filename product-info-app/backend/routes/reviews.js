const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.get("/:productId", async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId });
  res.json(reviews);
});

router.post("/", async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.json(newReview);
});

module.exports = router;
