const router = require('express').Router();


router.get('/cart', (req,res)=>{
    res.json("view your cart page")
})

router.post('/cart', (req,res)=>{
    res.json("send in your order")
})

router.put('/cart',(req,res)=>{
    res.json("update your cart")
})

router.delete('/cart', (req,res)=>{
    res.json("delete your cart")
})
module.exports = router;