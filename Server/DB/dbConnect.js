// require mongoose for working with mongoDB
const mongoose = require("mongoose");
require("dotenv").config();

//DB path variable
const DBURI = process.env.DBURI;

const dbConnect = async () => {
    try {
        //set strict query has to be set before connecting.
        //strictQuery only allows queries that use actual fields from the schema. 
        mongoose.set("strictQuery", true);
        //connect to database for the app
        await mongoose.connect(DBURI);

        //set db to be the connection
        const db = mongoose.connection;

        //one time, log connection to db to console.
        db.once("open", () => {
            console.log('connect to DB: ', mongoose.connection.db)
        });
    //throw error in console log if there is one
    } catch (err) {
        console.log("DB error: ", err);
    }
};

//export for app.js to use this.
module.exports = { dbConnect, mongoose };