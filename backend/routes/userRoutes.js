// routes/userRoutes.js
const express = require("express");
const {
  registerUser,
  loginUser,
  updateUser,
  sendFriendRequest,
  acceptFriendRequest,
  getUser
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/users/friend-request", sendFriendRequest);
router.post("/users/friend-request/accept", acceptFriendRequest);

router.get("/users/:id", getUser);

router.put("/users/:id", updateUser);

module.exports = router;
