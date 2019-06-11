const express = require('express');
const router = express.Router();
router.get('/', (req,res) => {
    res.render('home');
})
router.get('/about', (req,res) => {
    res.render('about');
})
router.get('/services', (req,res) => {
    res.render('services');
})


module.exports = router;