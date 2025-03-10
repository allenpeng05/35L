const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    major: { type: String },
    bio: { type: String, maxlength: 500 },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    coursesInterested: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
