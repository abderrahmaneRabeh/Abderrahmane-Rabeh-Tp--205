import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/products", { name, description });
      console.log("Product added:", response.data);
    } catch (error) {
      console.error("There was an error adding the product!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
