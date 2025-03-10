const express = require("express");
const { registerUser, updateUser, loginUser, sendFriendRequest, acceptFriendRequest } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/users/update", updateUser);
router.post("/users/friend-request", sendFriendRequest);
router.post("/users/friend-request/accept", acceptFriendRequest);

module.exports = router;
