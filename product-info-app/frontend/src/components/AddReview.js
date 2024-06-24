import React, { useState } from "react";
import axios from "axios";

const AddReview = ({ productId }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/reviews", {
        productId,
        reviewText,
        rating,
      });
      console.log("Review added:", response.data);
    } catch (error) {
      console.error("There was an error adding the review!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Review"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
      />
      <button type="submit">Add Review</button>
    </form>
  );
};

export default AddReview;
