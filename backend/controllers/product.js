import { apiResponseCode } from "../helper.js";
import Product from "../models/Product.js";

// Create a new product
const createProduct = async (req, res) => {
    try {
        // Create a new product instance using the request body
        const newProduct = new Product(req.body);

        // Save the product to the database
        await newProduct.save();

        // Respond with success
        res.status(201).json({
            responseCode: apiResponseCode.SUCCESSFUL,
            responseMessage: "Product successfully created",
            data: newProduct, // Return the created product
        });
    } catch (error) {
        // Handle errors and respond with a 500 Internal Server Error
        res.status(500).json({
            responseCode: apiResponseCode.INTERNAL_SERVER_ERR,
            responseMessage: "Product creation error",
            data: null,
            error: error.message, // Include the error message for debugging
        });
    }
};

export { createProduct };
