const router = require("express").Router();
const Blog = require("../models/blogModel");
const apiKeyAuth = require("../middlewares/apiKey");

// Route to create a new blog post
router.post("/create", apiKeyAuth, async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validation to ensure all required fields are present
    if (!title || !content) {
      throw new Error("Please provide a title, content, and author");
    }

    // Create a new blog post object
    const newBlogPost = new Blog({ title, content });

    // Save the blog post to the database
    await newBlogPost.save();

    // Sending success response
    res.status(201).json({
      message: "Blog post created successfully",
      blogPost: newBlogPost,
    });
  } catch (err) {
    console.log(err);
    // Sending error response with error message
    res.status(500).json({
      message: err.message, // Include error message in response
    });
  }
});

// Route to get all blog posts
router.get("/viewAll", apiKeyAuth, async (req, res) => {
  try {
    // Retrieve all blog posts from the database
    const blogPosts = await Blog.find();

    // Sending success response with all blog posts
    res.status(200).json({
      message: "Blogs retrieved successfully",
      blogPosts,
    });
  } catch (err) {
    console.log(err);
    // Sending error response with error message
    res.status(500).json({
      message: err.message, // Include error message in response
    });
  }
});

//router to delete a blog post
router.delete("/delete", apiKeyAuth, async (req, res) => {
  try {
    const { title } = req.body;

    // Ensure the title is provided
    if (!title) {
      throw new Error("Please provide an email");
    }

    // Find and delete the post by title
    const deletedPost = await Blog.findOneAndDelete({ title });

    if (!deletedPost) {
      throw new Error("Blog post not found");
    }

    // Sending success response
    res.status(200).json({
      message: "Blog post deleted successfully",
      title: deletedPost.title,
    });
  } catch (err) {
    console.log(err);
    // Sending error response with error message
    res.status(500).json({
      message: err.message, // Include error message in response
    });
  }
});

module.exports = router;
