// 📂 routes/userRoutes.js
const express = require("express");
const { registerUser, updateUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.put("/users/:id", updateUser);

module.exports = router;
