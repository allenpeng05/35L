const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String }, 
    major: { type: String },
    grade: {type: String}, 
    bio: { type: String, maxlength: 500 },
    contactInfo: { type: String },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    coursesInterested: [{ type: String }], 
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
