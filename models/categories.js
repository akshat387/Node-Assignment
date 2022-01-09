
const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

// creating category schema

const CategoriesSchema = mongoose.Schema({
 
    

categoryId : {
    type: String,		// Category ID
    required: true
} ,
categoryName : {
    type: String,		// Category Name
    required: true
} 







})

module.exports = mongoose.model('Category', CategoriesSchema)