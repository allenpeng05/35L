const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  registerUser,
  loginUser,
  updateUser,
  sendFriendRequest,
  acceptFriendRequest,
  getUser
} = require("../controllers/userController");
const User = require("../models/userModel"); 

const router = express.Router();

// Configure storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save uploaded files to the "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/users/friend-request", sendFriendRequest);
router.post("/users/friend-request/accept", acceptFriendRequest);

router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);

// Upload profile picture
router.post("/users/:id/upload-profile-pic", upload.single("profilePic"), async (req, res) => {
  try {
    const userId = req.params.id;
    const imageUrl = `/uploads/${req.file.filename}`; // Store image path

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: imageUrl },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json({ message: "Profile picture uploaded!", profilePic: imageUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = router;