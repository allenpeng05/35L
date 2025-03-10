const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    courseNumber: { type: Number, required: true },
    department: { type: String, required: true },
    professor: { type: String, required: true },
    name: { type: String, required: true },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now }
});
const Course = mongoose.model("Course", CourseSchema);