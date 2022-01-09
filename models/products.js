const mongoose = require('mongoose')

// created Product Schmea

const ProductSchema = mongoose.Schema({
 
    

        productId : {
            type: String,		// Product ID
            required: true 
        }, 
        productName : {
            type: String,		// Product Name
             required: true
        },
        qtyPerUnit : {
             type: Number,		// Quantity of the Product
            required: true
            } ,
        unitPrice : {
           type: Number,
           required: true
        } ,
        unitInStock : {
            type: Number,
            required: true		// Unit in Stock
        } ,
        discontinued : {
            type: String,		// Boolean (yes/no)
             required: true
        } ,
        categoryId : {
            type: String,
            required: true		// Category ID
        } 
        
    





})

module.exports = mongoose.model('Product', ProductSchema)