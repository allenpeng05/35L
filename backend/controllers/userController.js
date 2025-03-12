const User = require("../models/userModel.js");
const FriendRequest = require("../models/requestModel.js");
const mongoose = require("mongoose");
const {
  hashPassword,
  validateEmail,
  validatePassword,
} = require("../utils/helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "dev_secret";

const registerUser = async (req, res) => {
  try {
    const { email, password, name = "", major = "", bio = "" } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const emailError = validateEmail(email);
    if (emailError) return res.status(400).json({ error: emailError });

    const passwordError = validatePassword(password);
    if (passwordError) return res.status(400).json({ error: passwordError });

    if (await User.findOne({ email })) {
      return res.status(409).json({ error: "Email already registered." });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      email,
      password: hashedPassword,
      name,  // Will be empty string if not provided
      major, // Will be empty string if not provided
      bio,   // Will be empty string if not provided
    });

    await newUser.save();

    res.status(201).json({ message: "User registered", id: newUser._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required." });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ error: "Invalid email." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Invalid password." });

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Login failed" });
  }
};

const sendFriendRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    if (senderId === receiverId) {
      return res.status(400).json({
        message: "You cannot send a friend request to yourself.",
      });
    }

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({
        message: "One or both users not found.",
      });
    }

    const existingRequest = await FriendRequest.findOne({
      sender: senderId,
      receiver: receiverId,
      status: "pending",
    });

    if (existingRequest) {
      return res.status(400).json({ message: "Friend request already sent." });
    }

    const friendRequest = new FriendRequest({ sender: senderId, receiver: receiverId });
    await friendRequest.save();

    return res.status(200).json({ message: "Friend request sent!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const acceptFriendRequest = async (req, res) => {
  try {
    const { requestId } = req.body;

    const friendRequest = await FriendRequest.findById(requestId);
    if (!friendRequest) {
      return res.status(404).json({ message: "Friend request not found." });
    }

    if (friendRequest.status !== "pending") {
      return res.status(400).json({ message: "Friend request already processed." });
    }

    friendRequest.status = "accepted";
    await friendRequest.save();

    await User.findByIdAndUpdate(friendRequest.sender, {
      $push: { friends: friendRequest.receiver },
    });

    await User.findByIdAndUpdate(friendRequest.receiver, {
      $push: { friends: friendRequest.sender },
    });

    return res.status(200).json({ message: "Friend request accepted!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

/**
 * GET a single user by ID
 **/
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Fetching user data for ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ID format detected");
      return res.status(400).json({ error: "Invalid user ID." });
    }
    
    const user = await User.findById(id).populate("coursesInterested").select("-password");
    
    console.log("Database query result:", user ? "User found" : "User not found");
    
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    console.log("Returning user data for ID:", id);
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Validate id
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true, // returns the updated document
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }
    return res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    return res.status(500).json({ error: "Update failed" });
  }
};


module.exports = {
  registerUser,
  loginUser,
  updateUser,
  sendFriendRequest,
  acceptFriendRequest,
  getUser, 
  updateUser
};
