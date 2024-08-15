require('dotenv').config();
const APIKEY = process.env.APIKEY;

const apiKeyAuth = (req, res, next)=> {
    const apiKey = req.headers['x-api-key'];
    if(apiKey && apiKey === APIKEY) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Invalid Key' });
    }
}

module.exports = apiKeyAuth;