require('dotenv').config();
const rateLimit = require('express-rate-limit');
const REQLIMIT = process.env.REQLIMIT || 100;

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: REQLIMIT,
    message: 'Too many requests from this IP, please try again later'
});

module.exports = apiLimiter;