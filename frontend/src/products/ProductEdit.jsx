// src/EditProduct.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts, updateProduct } from "../customHooks/productApi";
import "./productEdit.css"

const ProductEdit = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState({ 
    name: "", 
    price: "",
    description: "",
    category: "",
 });
  const navigate = useNavigate();

  
  useEffect(() => {
    getProducts(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, product)
      .then(() => {
        console.log("Product updated successfully");
        navigate("/products");  
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={product.name}
        onChange={handleInput}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleInput}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleInput}
      />

<select
            name="category"
            placeholder= "Category"
            value={product.category}
            onChange={handleInput}
          >
            <option value="">Select Category</option>
            <option value="Electricity">Electricity</option>
            <option value="Clothes">Clothes</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Phones">Phones</option>
            <option value="Others">Others</option>
          </select>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default ProductEdit;
