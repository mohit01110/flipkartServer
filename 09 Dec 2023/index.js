const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Port = 5000;

app.use(express.json());
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://snehalmishra:123@cluster0.8owrboj.mongodb.net/Flipkart')
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

connectDb();


// Problem statement for E-commerce(Flipkart);
// Product , Userdetail, Orders, comments;



//user , message

const UserRoute =require('./routes/user.routes');
const productRoute = require('./routes/product.routes');

//in order to user any kind of custom route or any external middleware 
// we use app.use() : loader method
// /user/register
app.use('/user',UserRoute);
app.use('/product',productRoute);
app.use('/commentsRoute',commentsRoute);







//User model : register and login : inserting new document;



//authentication :validate if user exists in the db or not;
//  Authorisation : token :
// reading operation
app.post('/user/login', )

// api endpoint to update the username of user based on userid;
// update operation , passing info using params 

app.post('/user/:id', async (req, res) => {
    // req.params
    const { id } = req.params;
    const { username } = req.body;

    //update operation of mongoose;
    const updatedDoc = await UserModel.findByIdAndUpdate(id, { username: username }, { new: true });

    res.json({
        message: "Document updated",
        updatedDoc
    })

})

// Methods of Mongoose;
// save(),create() ,findOne(),find(),findbyIdandUpdate();
// take info from body and params of request object;


//Adding new product
app.post('/product/new', addProduct)

// update the product detail;
app.post('/product/update/:id', updateProduct)

// Make endpoint to filter the data  of product based on price;
// see product price less than equal to 35000; GET 
// see product price less than equal to what user is providing the price;
// how to work with req.query
//www.google.com/gmail?category=1000
//$lte : less than equal to 
//$gte: greater than equal to
//$eq: eual to

//minPrice and maxPrice 
app.post('/product/filter',filterProduct)

// Make Api endpoint to delete the product by ID ********************

// api endpoints for creating comments : 
app.post('/comment/create', addComments)

// API endpoint to get all comments;
app.get('/comment/read',allComments)

// API endpoint to update your comment using userID for the same product;***************
//updateOne();
app.listen(Port, () => {
    console.log(`server is working on Port ${Port}`)
})


app.get('/getinfo',)
//Model,view and controller structure;
//MVCR : Routes 

//Model : schema and model definintion of db;
//Controller : callback function which handles req and res object for apartivular
// api endpoint.
//view : rendering html templates or Ui templates from your server.

// Main Pointer :
//  Modularity and folder structure for more readable codes.
// Error handling becomes easy.
// Avoid repeated codes.
// Clear separation
// Easy to maintain and upgrade in future.

//  client --API ---server
//          http://localhost:5000/getinfo