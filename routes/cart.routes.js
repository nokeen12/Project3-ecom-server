const router = require('express').Router();
// const express = require('express');
const User = require("../models/User.model");
const Product = require("../models/Product.model");
const { useResolvedPath } = require('react-router-dom');
// const { isAuthenticated } = require('./../middleware/jwt.middleware.js');

router.post('/cart', (req,res)=>{
    const { productId, userId } = req.body;
    Product.findById(productId)
        .then(foundProduct => {
            User.findByIdAndUpdate(userId, { $push: { cart: {foundProduct, newId: mongoose.Types.ObjectId}}})
                .then(response => res.json(response))
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
})

router.put('/cart', (req,res)=>{
    const { index, userId } = req.body;
    User.findById(userId)
        .then(foundUser => {
            foundUser.cart.splice(index, 1)
        })
        .catch(err => res.json(err))
})
module.exports = router;