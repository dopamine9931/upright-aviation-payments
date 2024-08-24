//required stuff
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

const { dbConnect, mongoose } = require('./DB/dbConnect');

//host / port
const PORT = process.env.PORT || 4000; 
const HOST = process.env.HOST || '127.0.0.1';

//routes
const leadRoutes = require('./controllers/leadEndpoints');
const apiKeyRoute = require('./controllers/apiKeyEndpoints')
const adminRoutes = require('./controllers/adminEndpoints');

//limit requests 
const apiLimiter = require('./middlewares/apiLimiter')

//limit how many requests come from an ip address in 15 minutes
app.use(apiLimiter);

//limit packet size to 1MB
app.use(express.json({ limit: '1mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//use routes
app.use(leadRoutes, apiKeyRoute);
app.use("/auth", adminRoutes);

//connect to db, if no errors then execute app.listen
//this makes sure there are no issues with the db connection before starting the app to listen for incoming requests. 
dbConnect().then(() => {
    app.listen(PORT,HOST, () => {
        //console log app is listening port and db connection
        console.log(`[Server] listening on ${HOST}:${PORT}`);
        console.log(`[Database] connected to host: ${mongoose.connection.host} port: ${mongoose.connection.port}`);
        console.log(`[Database] DB: ${mongoose.connection.name}`)
    });
}).catch(err => {
    console.error('Failed to connect to the database: ', err);
});

