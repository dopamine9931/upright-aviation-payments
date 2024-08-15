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
const adminRoutes = require('./controllers/adminEndpoints');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//use routes
app.use(leadRoutes);
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
