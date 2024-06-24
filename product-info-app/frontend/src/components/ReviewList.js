import React from "react";

const ReviewList = ({ reviews }) => (
  <ul>
    {reviews.map((review) => (
      <li key={review._id}>{review.reviewText}</li>
    ))}
  </ul>
);

export default ReviewList;
