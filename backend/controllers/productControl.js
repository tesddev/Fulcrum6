import { apiResponseCode } from "../helper.js";


//create product
const product = () => {
    const productSchema = new mongoose.Schema({
        ProductName: { type: String, required: true },
        prosuctdescription: { type: String },
        productPrice: { type: Number, required: true },
        productCategory: { type: String, required: true },
        productCreatedAt: { type: Date, default: Date.now }
    });
    
    exports.createProduct = async(req, res) => {
        try {
            const product  = new product(req.body);
            await product.save()
            res.status(201).json({
                responseCode: apiResponseCode.SUCCESSFUL,
                 responseMessage: "product sucesfully created",
                  data: {
                    product
                  },
            });
        } catch (error) {
            res.status(400).json({
                responseCode: apiResponseCode.BAD_REQUEST,
                responseMessage: " product error",
                data: null,
             });
        }
    };
    
    //edit product
    exports.updateProduct = async(req, res) => {
        try {
            const product = await product.findByIdAndUpdate(req.params.id, req.body, { 
                new: true, 
                runValidators: true
             });
            if (!product) {
                return res.status(400).json({ 
                    responseCode: apiResponseCode.BAD_REQUEST,
                    responseMessage: " product not found with that ID",
                    data: null, 
                });
            }
            res.status(200).json({
                status: "sucess",
                data: {
                    product
                },
            })
        } catch (error) {
            res.status(400).json({ 
                responseCode: apiResponseCode.BAD_REQUEST,
                responseMessage: "product error",
                data: null,
            });
        }
    };
    
    //Get all product
     exports.getAllProduct = async(req, res) => {
        try {
            const product = await product.find();
            res.status(200).json({
                status: "sucess",
                data: {
                    product
                },
            })
        } catch (error) {
            res.status(400).json({
                responseCode: apiResponseCode.BAD_REQUEST,
                responseMessage: "product error",
                data: null,
            })
        }
     };
    
     // delete a product
     exports.deleteProduct = async(req, res) => {
        try {
            const product = await product.findProductByIdAndDelete();
            if (!product) {
                return res.status(400).json({ 
                    responseCode: apiResponseCode.BAD_REQUEST,
                    responseMessage: " product not found",
                    data: null,
                 });
            } res.status(200).json({
                status: "sucess",
                data: {
                    product
                },
            })
        } catch (error) {
            
        }
     };
}

export default product