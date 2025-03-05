const mongoose = require("mongoose");

//maybe include expiry??
const FriendRequestSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" }, //default state of request is pending
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FriendRequest", FriendRequestSchema);
