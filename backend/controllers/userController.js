// 📂 controllers/userController.js
const { ObjectId } = require("mongodb");
const {
  hashPassword,
  insertDocument,
  validateEmail,
  validatePassword,
  validateUsername
} = require("../utils/helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Use an environment variable for production secret
const SECRET_KEY = process.env.JWT_SECRET || "dev_secret";

const registerUser = async (req, res) => {
  const { email, password, username, major, bio, contactInfo } = req.body;

  const emailError = validateEmail(email);
  if (emailError) return res.status(400).json({ error: emailError });

  const passwordError = validatePassword(password);
  if (passwordError) return res.status(400).json({ error: passwordError });

  const usernameError = validateUsername(username);
  if (usernameError) return res.status(400).json({ error: usernameError });

  try {
    const users = req.db.collection("users");
    if (await users.findOne({ email }))
      return res.status(409).json({ error: "❌ Email already registered." });
    if (await users.findOne({ username }))
      return res.status(409).json({ error: "❌ Username taken." });

    const hashedPassword = await hashPassword(password);
   
    console.log("Attempting user insertion");
    const userId = await insertDocument(req.db, "users", {
      email,
      password: hashedPassword,
      username,
      major,
      bio,
      contactInfo
    });
    res.status(201).json({ message: "✅ User registered", id: userId });
  } catch (error) {
    res.status(500).json({ error: "❌ Registration failed" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id))
      return res.status(400).json({ error: "❌ Invalid User ID." });

    const result = await req.db.collection("users").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: req.body },
      { returnDocument: "after" }
    );

    if (!result.value)
      return res.status(404).json({ error: "❌ User not found." });
    res.status(200).json({ message: "✅ User updated", updatedUser: result.value });
  } catch (error) {
    res.status(500).json({ error: "❌ Update failed" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "❌ Email and password are required." });

    const users = req.db.collection("users");
    const user = await users.findOne({ email });
    if (!user)
      return res.status(401).json({ error: "❌ Invalid credentials." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "❌ Invalid credentials." });

    // Generate JWT that expires in 1 day
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1d" });

    return res.status(200).json({ message: "✅ Login successful", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "❌ Login failed" });
  }
};

module.exports = { registerUser, updateUser, loginUser };
