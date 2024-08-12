const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Retrieve SALT and JWT_KEY from environment variables
const SALT = parseInt(process.env.SALT); // Convert to integer
const JWT_KEY = process.env.JWT_KEY;

// Route for user signup
router.post("/signup", async (req, res) => {
  try {
    // Extracting variables off the req
    const { firstName, email, password } = req.body;

    // Validation code to ensure it has all data
    if (!firstName || !email || !password) {
      throw new Error("Incomplete Data");
    }

    // Encrypting password
    const hashedPassword = bcrypt.hashSync(password, SALT);
    const userObj = { firstName, email, password: hashedPassword };

    // Saving user off
    const newUser = new User(userObj);

    await newUser.save();
    const token = getToken(newUser);

    // Sending success response with token
    res.status(201).json({
      message: "User Created",
      token,
    });
  } catch (err) {
    console.log(err);
    // Sending error response with error message
    res.status(500).json({
      message: err.message, // Include error message in response
    });
  }
});

// Route for user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Ensures an email and/or password are included in the req
    if (!email || !password) {
      throw new Error("Please provide an email and password");
    }

    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      throw new Error("User doesn't exist");
    }

    // Compares the hashed passwords
    const isCorrectPassword = await bcrypt.compare(
      password,
      foundUser.password
    );

    // Kept the standard of not informing them specifically the pass is wrong
    if (!isCorrectPassword) {
      throw new Error("Username or Password incorrect");
    }

    // Creating a token for logging in locally for the user
    const token = getToken(foundUser);

    // Sending success response with token
    res.status(200).json({
      message: "User logged in",
      token,
    });
  } catch (err) {
    console.log(err);
    // Sending error response with error message
    res.status(500).json({
      message: err.message, // Include error message in response
    });
  }
});

// Function to generate JWT token
function getToken(user) {
  const tenDaysInSeconds = 60 * 60 * 24 * 10;
  const token = jwt.sign(
    // Payload
    { _id: user._id },
    JWT_KEY,
    { expiresIn: tenDaysInSeconds } // Token expiration time
  );
  return token;
}

module.exports = router;
