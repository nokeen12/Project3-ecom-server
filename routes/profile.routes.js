const router = require('express').Router();
const User = require('../models/User.model')
const mongoose = require('mongoose');


// router.get('/profiles', (req, res, next)=>{
//     res.json('profile page')
// })

//update account with inputted data
router.put('/profile/edit/:userId', (req, res, next)=>{
    const { userId } = req.params;
    // const { username, email, cart } = req.body ;

    if(!mongoose.Types.ObjectId.isValid(userId)){
        res.status(400).json({message: 'Specified id is not valid'});
        return;
    }

    User.findByIdAndUpdate(userId, req.body, {new: true})
    .then(updatedUser => res.json(updatedUser))
    .catch(err=>res.json(err))
})

// //delete user account
// router.delete('/profile', (req, res, next)=>{
//     res.json('deleting account')
// })

module.exports = router;