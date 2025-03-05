const mongoose = require("mongoose");


const CourseSchema = new mongoose.Schema({
    courseName: { type: String, required: true }, 
    department: { type: String }, 
    description: { type: String },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] 
});

module.exports = mongoose.model("Course", CourseSchema);