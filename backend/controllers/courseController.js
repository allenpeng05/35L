const mongoose = require("mongoose");
const Course = require("../models/courseModel");
const User = require("../models/userModel");

const addCourse = async (req, res) => {
    try {
        const { userId, courseId } = req.body;
        

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found." });

        // Check if course exists
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: "Course not found." });

        // Check if user already added this course
        if (user.coursesInterested.includes(courseId)) {
            return res.status(400).json({ message: "Course is already in user's interested list." });
        }

        // Add course to user's interested list
        user.coursesInterested.push(courseId);
        await user.save();

        console.log("enrolledStudents:", course.enrolledStudents);
        console.log("userId:", userId);
        course.enrolledStudents.push(userId);
        await course.save();

        return res.status(201).json({ message: "Course added successfully!", course });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

const removeCourse = async (req, res) => {
    try {
        const { userId, courseId } = req.body;
        console.log("req.body:", req.body);

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found." });

        // Check if course exists
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: "Course not found." });

        // Check if user has this course in their interested list
        if (!user.coursesInterested.includes(courseId)) {
            return res.status(400).json({ message: "Course is not in user's interested list." });
        }

        // Remove course from user's interested list
        user.coursesInterested = user.coursesInterested.filter(id => id.toString() !== courseId);
        await user.save();

        console.log("enrolledStudents:", course.enrolledStudents);
        console.log("userId:", userId);
        course.enrolledStudents = course.enrolledStudents.filter(id => id.toString() !== userId);
        await course.save();

        return res.status(200).json({ message: "Course removed successfully!", course });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

const getUserCourses = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("req.params:", req.params);
        console.log("User ID:", id);
        if (!id) {
            return res.status(400).json({ message: "UserId undefined" });
        }

        const user = await User.findById(id).populate("coursesInterested");
        console.log("user:", user);
        if (!user) return res.status(404).json({ message: "User not found" });

        return res.json(user.coursesInterested);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        return res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error." });
    }
};

module.exports = {
    addCourse,
    removeCourse,
    getUserCourses,
    getAllCourses,
};
