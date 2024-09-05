const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const apiKeyAuth = require("../middlewares/apiKey");

// Retrieve SALT and JWT_KEY from environment variables
const SALT = parseInt(process.env.SALT); // Convert to integer
const JWT_KEY = process.env.JWT_KEY;

// Route for user signup
router.post("/signup", apiKeyAuth, async (req, res) => {
  try {
    // Extracting variables off the req
    const { firstName, email, password, admin = false } = req.body;

    // Validation code to ensure it has all data
    if (!firstName || !email || !password) {
      throw new Error("Incomplete Data");
    }

    // Encrypting password
    const hashedPassword = bcrypt.hashSync(password, SALT);
    const userObj = { firstName, email, password: hashedPassword, admin };

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
router.post("/login", apiKeyAuth, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Ensures an email and/or password are included in the req
    if (!email || !password) {
      throw new Error("Please provide an email and password");
    }

    // Find the user by email
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

    // Sending success response with token and admin status
    res.status(200).json({
      message: "User logged in",
      token,
      isAdmin: foundUser.admin, // Include the admin status in the response
    });
  } catch (err) {
    console.log(err);
    // Sending error response with error message
    res.status(500).json({
      message: err.message, // Include error message in response
    });
  }
});

// Route to delete a user by email
router.delete("/delete", apiKeyAuth, async (req, res) => {
  try {
    const { email } = req.body;

    // Ensure the email is provided
    if (!email) {
      throw new Error("Please provide an email");
    }

    // Find and delete the user by email
    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      throw new Error("User not found");
    }

    // Sending success response
    res.status(200).json({
      message: "User deleted successfully",
      email: deletedUser.email,
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
