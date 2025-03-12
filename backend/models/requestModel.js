const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
    createdAt: { type: Date, default: Date.now, expires: "7d" }
});

const FriendRequest = mongoose.model("FriendRequest", FriendRequestSchema);
module.exports = FriendRequest;