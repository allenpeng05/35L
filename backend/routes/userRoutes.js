const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
  sendFriendRequest,
  acceptFriendRequest,
  getUser,           // <-- (1) import the new getUser controller
} = require("../controllers/userController");

const router = express.Router();

// Existing routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/users/friend-request", sendFriendRequest);
router.post("/users/friend-request/accept", acceptFriendRequest);

// (3) Add a GET route to fetch user by ID
// e.g. GET /users/12345
router.get("/users/:id", getUser);

module.exports = router;
