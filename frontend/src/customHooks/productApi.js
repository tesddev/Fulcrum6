// src/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/";

// Get all products
export const getProducts = () => {
  return axios.get(`${API_BASE_URL}/products`);
};

// Add a new product
export const addProduct = (product) => {
  return axios.post(`${API_BASE_URL}/products`, product);
};

// Update a product
export const updateProduct = (id, product) => {
  return axios.put(`${API_BASE_URL}/products/${id}`, product);
};

// Delete a product
export const deleteProduct = (id) => {
  return axios.delete(`${API_BASE_URL}/products/${id}`);
};
