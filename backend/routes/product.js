import express from "express";
import { createProduct } from "../controllers/product.js"

const productRouter = express.Router();

productRouter.get('/create-product', createProduct);

export default productRouter;