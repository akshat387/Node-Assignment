//  this file to create routes of product page

const express = require('express');
const products = require('../models/products');

const router = express.Router();

const product = require('../models/products')

const category = require('../models/categories')

const categories = require('../models/categories');
const res = require('express/lib/response');
// route for creating product page

router.get("/", (req, res) => {
  res.send("Home page");
});


router.get("/product", (req, res) => {
    res.send("product page");
});

// to post any product item

router.post('/product',async function (req, res) {
        const product = new products({
            // title: req.body.title,
            // description: req.body.description
            productId : req.body.productId,
            productName : req.body.productName,
            qtyPerUnit : req.body.qtyPerUnit,
            unitPrice : req.body.unitPrice,
            unitInStock : req.body.unitInStock,
            discontinued :  req.body.discontinued,
            categoryId : req.body.categoryId
        });
        try {

            const savedProduct = await product.save();
            res.json(savedProduct);
        } catch (err) {
            res.json({ message: err });
        }


    })

    // to get specific product

    router.get('/:producttId', async (req, res) => {
        try {
            const product = await products.findById(req.params.productId) 
            res.json(product)        
        } catch (err) {
            res.json({ message: err})
            
        }
    })

//     // to delete any of the the item of product
 
 
 router.delete('/:producttId', async(req,res) => {
     try {
         const removeProduct = await products.remove({ _id: req.params.productId})
         res.json(removeProduct)
     } catch (err) {
         res.json({message: err})
     }
 })

//  to update any product item

router.patch('/:productId', async(req, res) => {
    try {

        const updatedProduct = await products.updateMany(
            { _id: req.params.productId },
            { $set: {productId: req.body.productId}}
        )
        res.json(updatedProduct)        
    } catch(err) {
        res.json({ message: err})
    }
        
    
})


// route to category page

router.get("/category", (req, res) => {
    res.send("category page");
  });

  //  to post any category model


  router.post("/category", async(req,res) => {
  const category = new categories({
    categoryId : req.body.categoryId,		
    categoryName :req.body.categoryName,
  })
  try {
    const savedCategory = await category.save()
    res.json(savedCategory)
  } catch (err) {
      res.json({ message: err})
      
  }

  })

  // to get specific category

  router.get('/:categoryId', async (req, res) => {
    try {
        const category = await categories.findById(req.params.categoryId) 
        res.json(category)        
    } catch (err) {
        res.json({ message: err})
        
    }
})

//     // to delete any  of  the decription item of category


router.delete('/:categoryId', async(req,res) => {
 try {
     const removeCategory = await categories.remove({ _id: req.params.categoryId})
     res.json(removeCategory)
 } catch (err) {
     res.json({message: err})
 }
})

//  to update any product item

router.patch('/:categoryId', async(req, res) => {
    try {

        const updatedCategory = await categories.updateMany(
            { _id: req.params.categoryId },
            { $set: {categoryId: req.body.categoryId}}
        )
        res.json(updatedCategory)        
    } catch(err) {
        res.json({ message: err})
    }
        
    
})

 

module.exports = router;