const router = require('express').Router();
const User = require('../models/User.model')
//read






router.post('/auth/signup',(req,res)=>{

})
router.post('/auth/login',(req,res)=>{
    
})
router.get('/auth/verify',(req,res)=>{
    
})
// router.get('/profiles', (req, res, next)=>{
//     res.json('profile page')
// })
// //get signup page
// router.get('/profile/signup', (req, res, next)=>{
//     res.json("signup page")
// })
// //create account with inputted data
// router.post('/profile/signup', (req, res, next)=>{
//     res.json('signup page post')
// })
// //get edit profile page
// router.get('/profile/edit', (req, res, next)=>{
//     res.json('edit profile page')
// })
// //update account with inputted data
// router.put('/profile/edit', (req, res, next)=>{
//     res.json('edit profile')
// })
// //delete user account
// router.delete('/profile', (req, res, next)=>{
//     res.json('deleting account')
// })

module.exports = router;