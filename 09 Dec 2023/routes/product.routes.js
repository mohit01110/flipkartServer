const express =require('express');
const {addProduct,
    updateProduct,
    filterProduct} =require('../controllers/product.controllers')

// creating cusotm route;
const productRoute =express.Router();

productRoute.post('/addProduct',addProduct);
productRoute.post('/updateProduct',updateProduct);
productRoute.post('/filterProduct',filterProduct);


module.exports =productRoute;