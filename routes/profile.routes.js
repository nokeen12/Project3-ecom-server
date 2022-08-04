const router = require('express').Router();
const User = require('../models/User.model')
const mongoose = require('mongoose');


router.get('/profile/cart/:userId', (req, res, next)=>{
    const { userId } = req.params;
    if(!mongoose.Types.ObjectId.isValid(userId)){
        res.status(400).json({message: 'Specified id is not valid'});
        return;
    }
    User.findById(userId)
        .then(selectedUser=>{
            res.json(selectedUser.cart)
        })
        .catch(err=>res.json(err))
})


router.put('/profile/edit/:userId', (req, res, next)=>{
    const { userId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(userId)){
        res.status(400).json({message: 'Specified id is not valid'});
        return;
    }

    User.findByIdAndUpdate(userId, req.body, {new: true})
    .then(updatedUser => res.json(updatedUser))
    .catch(err=>res.json(err))
})
router.delete('/profile/:userId', (req, res)=>{
    const { userId } = req.params;
    User.findByIdAndDelete(userId)
    .then(() => res.json(`User:'${userId}' deleted`))
    .catch(err=>res.json(err))
})

module.exports = router;