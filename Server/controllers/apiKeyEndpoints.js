const express = require('express');
const router = express.Router();


router.get('/apiKey',(req,res)=> {
    const APIKEY = process.env.APIKEY
    res.json({ APIKEY });
});

module.exports = router