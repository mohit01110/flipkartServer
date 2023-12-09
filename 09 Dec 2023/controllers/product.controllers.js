const productModel =require('../models/product.model');

const addProduct = async (req, res) => {
    //adding new product
    try {
        const { productname, category, productdetails, price, rating } = req.body;

        const insertedProduct = await ProductModel.create({
            productname,
            category,
            productdetails,
            price,
            rating
        })

        res.status(200).json({
            message: "Product inserted successfully",
            insertedProduct
        })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }

}

// update the product detail;
const updateProduct = async (req, res) => {
    try {
        //details of updating the product
        const { id } = req.params
        const { productdetails, price } = req.body;
        //id : params                                              //unqiue fields
        const updatedProduct = await ProductModel.findOneAndUpdate({_id:id}, { productdetails:productdetails,price:price},{new:true})
        res.status(201).json({
            message: "Product data Updated",
            updatedProduct
        })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }
}

// Make endpoint to filter the data  of product based on price;
// see product price less than equal to 35000; GET 
// see product price less than equal to what user is providing the price;
// how to work with req.query
//www.google.com/gmail?category=1000
//$lte : less than equal to 
//$gte: greater than equal to
//$eq: eual to

//minPrice and maxPrice 
const filterProduct = async(req,res)=>{
     try {
        const {minprice,maxprice} =req.query;
         
        // const filteredProduct =await ProductModel.find({price:{$gte:price}});
        // const filteredProduct =await ProductModel.find({price:{$lte:price}});
        // const filteredProduct =await ProductModel.find({price:{$eq:price}});
        const filteredProduct =await ProductModel.find({price:{$gte:minprice,$lte:maxprice}});
        res.status(200).json({
            filteredProduct
        })
     } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message:error.message
        })
     }

}

module.exports={
    addProduct,
    updateProduct,
    filterProduct
};