import express from "express";
import product from "../controllers/productControl.js";

const productRouter = express.Router();

productRouter.post('/products', product);

productRouter.put('/products:id', product);

productRouter.get('/products', product);

productRouter.delete('/products/:id', product);

export default productRouter

