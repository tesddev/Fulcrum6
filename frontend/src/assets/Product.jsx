import "./product.css"
import React, { useState } from "react";
import carImage from "../assets/images/car.jpg"
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const products = [
    {
      id: 1,
      name: 'Product 1',
      image: carImage,
      price: 64,
      sold: 124,
      revenue: 5828,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'carImage',
      price: 46,
      sold: 98,
      revenue: 4508,
    },
        
    
  ];


const Product = () => {
    const  [prods, setProds] = useState(products)
    const [newProduct, setNewProduct] = useState({
        name: '',
        image: "",
        price: '',
        sold: '',
        revenue: '',
    });

    const  handleInput = (e) => {
        const {name, value} = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value,

        }));

    };

    const  handleImage = (e) => {
        const file = e.target.files [0];

        if (file) {
            const imageUrl = URL.createObjectURL(file)
        
        setNewProduct((prev) => ({ ...prev, image: imageUrl,

        }));
      }

    };

    const handleProd = () => {
        const id = prods.length + 1
        const addProd = {...newProduct, id};
        setProds([...prods, addProd]);
        setNewProduct({ name: '',
            image: "",
            price: '',
            sold: '',
            revenue: '',})
    }
   

    const formStyle = {
        display : "flex",
        justifyContent : "space-between",
        gap : "25px",
        padding : "20px",
        alignItems : "center",
        maxWidth : "100%",
    }

    const inputStyle = {
        width : "90%",
        height : "40px",
        borderRadius : "10px",
        backgroundColor : "whitesmoke"

    }


    return(
        <>
        <div className="add-product-form">
            <div className="add-new">
             <h2>Add New Product</h2>
            </div>
            <div className="product-input" style={formStyle}>
                <input style={inputStyle} type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInput} />
                <input style={inputStyle} type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInput} />
                <input style={inputStyle} type="number" name="sold" placeholder="Units Sold" value={newProduct.sold} onChange={handleInput}/>
                <input style={inputStyle} type="number" name="revenue" placeholder="Revenue" value={newProduct.revenue} onChange={handleInput}/>
                        <input  type="file" name="image" onChange={handleImage} />
                        <button style={{width : "90%"}} onClick={handleProd}>Add Product</button>
            </div>
        </div>

        <div className="product-page">
            <div className="page-header">
                <h1>Products</h1>
            </div>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Revenue</th>
                    </tr>
            </thead>
            <tbody>
                    {prods.map(product => (
                    <tr key={product.id}>
                    <td>
                        <img src={product.image} alt={product.name} className="product-image" />
                    </td>
                    <td> 
                        <Link to = "/product"> {product.name} </Link>
                    </td>
                    <td>${product.price}</td>
                    <td>{product.sold}</td>
                    <td>${product.revenue}</td>
                    </tr>
                ))}
            </tbody>  
            </table>

         

        </div>
        </>
    )
}

export default Product