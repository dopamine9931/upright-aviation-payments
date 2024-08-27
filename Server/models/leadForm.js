//use dbConnect for db interaction
const { mongoose } = require("../DB/dbConnect");

//Lead capture schema
const LeadCapture = new mongoose.Schema({
    firstName: {
        type: String,
        unique: false,
        required: true,
    },
    lastName: {
        type: String,
        unique: false,
        required: true,
    },
    company: {
        type: String,
        unique: false,
        required: false,
    },
    title: {
        type: String,
        unique: false,
        required: false,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,// all email addresses saved in lowercase
        trim: true,//removes leading and trailing white space
        validate: {
            validator: function(email) {
                //use regular expression to validate email address
                return /^([\w-]+(?:\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7})$/.test(email);
            },
            message:props => `${props.value} is not a valid email address!`
        }
    },
    phone: {
        type: String,
        unique: false,
        required: false,
    },
    extension: {
        type: String,
        unique: false,
        required: false,
    },
    product: {
        type: String,
        unique: false,
        required: false,
    },
    contacted: {
        type: Boolean,
        unique: false,
        required: false,
        default: false,
    }, 
},
    {
        timestamps: {//let database handle the timestamps
            createdAt: 'Created',//when was this record created
            updatedAt: 'Updated'//when was this last updated- created counts as updated
    }
});

module.exports = mongoose.model('LeadCapture', LeadCapture)