
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Product from "./products/Product"
import ProductDetails from "./products/ProductDetails"
import Home from "./products/Home";




const App = ()=> {
  return(
    <div>
     
        <Routes>
              <Route path = "/products" element = {<Product/>} />
              <Route path = "/products/:id" element = {<ProductDetails/>} />
              <Route path = "/" element = {<Home/>} />
          </Routes>
     

              
    </div>

  );
};

export default App