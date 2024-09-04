import "./styling/product.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../models/ProductsData";

const Product = () => {
  const [prods, setProds] = useState(products);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProd = () => {
    const id = prods.length + 1;
    const addProd = { ...newProduct, id };
    setProds([...prods, addProd]);
    setNewProduct({
      name: "",
      price: "",
      description: "",
      category: "",
    });
  };

  const formStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "25px",
    padding: "20px",
    alignItems: "center",
    maxWidth: "100%",
  };

  const inputStyle = {
    width: "90%",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "whitesmoke",
  };

  const overallBackgroundStyle = {
    backgroundColor: "white", 
    minHeight: "100vh"
  };

  return (
    <>
      <div className="overall-background" style={overallBackgroundStyle }>
        <div className="add-product-form">
          <div className="add-new">
            <h2>Add New Product</h2>
          </div>
          <div className="product-input" style={formStyle}>
            <input
              style={inputStyle}
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInput}
            />
            <input
              style={inputStyle}
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInput}
            />
            <input
              style={inputStyle}
              type="text"
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleInput}
            />
            <select
              style={inputStyle}
              name="category"
              value={newProduct.category}
              onChange={handleInput}
            >
              <option value="">Select Category</option>
              <option value="Electricity">Electricity</option>
              <option value="Clothes">Clothes</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Phones">Phones</option>
              <option value="Others">Others</option>
            </select>
            <button style={{ width: "90%" }} onClick={handleProd}>
              Add Product
            </button>
          </div>
        </div>
  
        <div className="product-page">
          <div className="page-header">
            <h1>Products</h1>
          </div>
  
          <table className="product-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {prods.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </td>
                  <td>${product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  
};

export default Product;
