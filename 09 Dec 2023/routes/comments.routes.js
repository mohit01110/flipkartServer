const express =require('express');
const {addComments,
    allComments} =require('../controllers/comments.controllers')

// creating cusotm route;
const commentsRoute =express.Router();

commentsRoute.post('/addComments',addComments);
commentsRoute.post('/allComments',allComments);


module.exports =commentsRoute;