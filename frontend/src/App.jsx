
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Product from "./assets/Product"
import ProductDetails from "./assets/ProductDetails"




const App = ()=> {
  return(
    <div>
     
        <Routes>
              <Route path = "/Products" element = {<Product/>} />
              <Route path = "/product" element = {<ProductDetails/>} />
          </Routes>
     

              
    </div>

  );
};

export default App