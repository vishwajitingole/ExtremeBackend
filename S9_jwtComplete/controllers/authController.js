const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateTokens");
const cookieParser = require("cookie-parser");

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Please provide all required fields");
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists, please login");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create new user
    user = await User.create({ name, email, password: hash });

    // Generate token
    const token = generateToken({ id: user._id });

    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal server error");
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Please provide email and password");
    }

    if (req.cookies && req.cookies.token) {
      return res.status(400).send("User already logged in");
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found, please register");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Invalid password");
    }

    // Generate token
    const authToken = generateToken({ id: user._id });

    // Set auth token in cookie
    res.cookie("token", authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.send("Logged in successfully");
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send("Internal server error");
  }
};

// Logout User
const logoutUser = (req, res) => {
  res.cookie("token", "", { maxAge: 0 }); // Clear the cookie
  res.send("Logged out successfully");
};

// Get User
const getUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email && !name) {
      return res.status(400).send("Please provide email or name");
    }

    // Find user
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ user, message: "User found!!" });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Internal server error");
  }
};

// Get All Users
const allUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports = { registerUser, loginUser, logoutUser, getUser, allUser };
