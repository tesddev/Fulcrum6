import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        required: true
    },

    prosuctdescription : {
        type: String,
    },

    productprice : {
        type: Number,
        required: true
    },

    productcategory : {
        type: Number,
        required: true
    },

    producttimeCreated : {
        type: Number,
        required: true
    },

})

export default mongoose.model('product', productSchema)