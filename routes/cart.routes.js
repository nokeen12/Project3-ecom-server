const router = require('express').Router();
// const express = require('express');
const User = require("../models/User.model");
// const { isAuthenticated } = require('./../middleware/jwt.middleware.js');

// router.get('/cart', (req,res)=>{
    

//     User.findOne({  })
//     res.json("view your cart page")
// })

router.put('/cart', (req,res)=>{
    const { productId, userId } = req.body;
    User.findByIdAndUpdate(userId, { $push: { cart: productId}})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

// router.put('/cart',(req,res)=>{
//     res.json("update your cart")
// })

// router.delete('/cart', (req,res)=>{
//     res.json("delete your cart")
// })
module.exports = router;