import express from "express";
import product from "../controllers/productControl";

const productRouter = express.Router();

productRouter.post('/products', product.createProduct);

productRouter.post('/products:id', product.updateProduct);

productRouter.post('/products', product.getAllProduct);

router.delete('/products/:id', product.deleteProduct);

export default productRouter

