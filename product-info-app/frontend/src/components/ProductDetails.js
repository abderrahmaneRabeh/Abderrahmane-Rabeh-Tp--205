import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/products/${match.params.id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product!", error);
      });

    axios
      .get(`/api/reviews/${match.params.id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, [match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>{review.reviewText}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
