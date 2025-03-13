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
      status: { $in: ["pending", "accepted"] },
    });

    const existingOppositeRequest = await FriendRequest.findOne({
      sender: receiverId,
      receiver: senderId,
      status: { $in: ["pending", "accepted"] },
    });

    if (existingRequest || existingOppositeRequest) {
      return res.status(400).json({ message: "Friend request already exists." });
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
    
    const user = await User.findById(id)
  .populate({
    path: "friends",
    select: "name coursesInterested year major",
    populate: {
      path: "coursesInterested",
      select: "courseNumber name professor" // fields from Course model
    }
  })
  .populate("coursesInterested") // to populate the current user's coursesInterested 
  .select("-password")

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
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true }).populate("coursesInterested");
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }
    return res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    return res.status(500).json({ error: "Update failed" });
  }
};

const getRecommendedFriends = async (req, res) => {
  try {
    const { id } = req.params;
    // Fetch current user with courses populated
    const currentUser = await User.findById(id).populate("coursesInterested");
    if (!currentUser) {
      return res.status(404).json({ error: "User not found." });
    }
    // Create a set of the current user's course IDs for lookup
    const currentUserCourses = new Set(
      currentUser.coursesInterested.map((course) => course._id.toString())
    );

    const currentUserFriends = new Set(currentUser.friends.map((friend) => friend.toString()));
    
    // Find all other users and populate their courses
    const otherUsers = await User.find({ _id: { $ne: id } }).populate("coursesInterested");

    const recommendedFriends = [];
    otherUsers.forEach((user) => {

      if (currentUserFriends.has(user._id.toString())) {
        return;
      }

      // Find common courses between currentUser and this user
      const commonCourses = user.coursesInterested.filter((course) =>
        currentUserCourses.has(course._id.toString())
      );
      if (commonCourses.length >= 2) {
        // Map the common courses to details required by the frontend
        const sharedCourses = commonCourses.map((course) => ({
          classId: course.courseNumber, // using courseNumber as classId
          className: course.name,
          professor: course.professor,
        }));
        recommendedFriends.push({
          _id: user._id, // include the user's unique id
          friendName: user.name,
          classes: sharedCourses,
        });
      }
    });

    return res.status(200).json({ recommendedFriends });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to get recommended friends." });
  }
};

// New function to get pending friend requests for a user
const getFriendRequests = async (req, res) => {
  try {
    const { id } = req.params; // 'id' is the receiver's user id
    
    // Get current user with courses populated
    const currentUser = await User.findById(id).populate("coursesInterested");
    if (!currentUser) {
      return res.status(404).json({ error: "User not found." });
    }
    
    // Create a set of the current user's course IDs for lookup
    const currentUserCourses = new Set(
      currentUser.coursesInterested.map((course) => course._id.toString())
    );
    
    // Find pending friend requests
    const friendRequests = await FriendRequest.find({
      receiver: id,
      status: "pending",
    }).populate({
      path: "sender",
      select: "name email coursesInterested",
      populate: {
        path: "coursesInterested"
      }
    });
    
    // Transform the response to include shared course information
    const requestsWithCourseInfo = friendRequests.map(request => {
      // Find common courses between receiver and sender
      const commonCourses = request.sender.coursesInterested.filter((course) =>
        currentUserCourses.has(course._id.toString())
      );
      
      // Map the common courses to the required format
      const sharedCourses = commonCourses.map((course) => ({
        classId: course.courseNumber,
        className: course.name,
        professor: course.professor,
      }));
      
      // Return the formatted request object
      return {
        _id: request._id,
        sender: {
          _id: request.sender._id,
          name: request.sender.name,
          email: request.sender.email
        },
        status: request.status,
        createdAt: request.createdAt,
        classes: sharedCourses
      };
    });
    
    return res.status(200).json({ friendRequests: requestsWithCourseInfo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch friend requests." });
  }
};

// Function to get outbound friend requests sent by a user
const getFriendRequestsOutbound = async (req, res) => {
  try {
    const { id } = req.params; // 'id' is the sender's user id
    
    // Get current user with courses populated
    const currentUser = await User.findById(id).populate("coursesInterested");
    if (!currentUser) {
      return res.status(404).json({ error: "User not found." });
    }
    
    // Create a set of the current user's course IDs for lookup
    const currentUserCourses = new Set(
      currentUser.coursesInterested.map((course) => course._id.toString())
    );
    
    // Find outbound friend requests
    const outboundRequests = await FriendRequest.find({
      sender: id,
      status: "pending",
    }).populate({
      path: "receiver",
      select: "name email coursesInterested",
      populate: {
        path: "coursesInterested"
      }
    });
    
    // Transform the response to include shared course information
    const formattedRequests = outboundRequests.map(request => {
      // Find common courses between sender and receiver
      const commonCourses = request.receiver.coursesInterested.filter((course) =>
        currentUserCourses.has(course._id.toString())
      );
      
      // Map the common courses to the required format
      const sharedCourses = commonCourses.map((course) => ({
        classId: course.courseNumber,
        className: course.name,
        professor: course.professor,
      }));
      
      // Return the formatted request object
      return {
        _id: request._id,
        receiver: {
          _id: request.receiver._id,
          name: request.receiver.name,
          email: request.receiver.email
        },
        status: request.status,
        createdAt: request.createdAt,
        classes: sharedCourses
      };
    });
    
    return res.status(200).json({ outboundRequests: formattedRequests });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch outbound friend requests." });
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  sendFriendRequest,
  acceptFriendRequest,
  getUser, 
  updateUser,
  getRecommendedFriends,
  getFriendRequests,
  getFriendRequestsOutbound
};
