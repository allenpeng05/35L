const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const hashPassword = (password) => bcrypt.hash(password, 10);

const insertDocument = async (Model, data) => {
  return Array.isArray(data)
    ? (await Model.insertMany(data)).map(doc => doc._id)
    : (await Model.create(data))._id;
};

const getTimestamp = () => new Date().toLocaleString('en-US', {
  timeZone: 'America/Los_Angeles',
  month: 'numeric',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});

const validateEmail = (email) => {
  return /^[a-zA-Z0-9._%+-]+@(g\.ucla\.edu|ucla\.edu)$/.test(email)
    ? null
    : "Invalid UCLA email.";
};

const validatePassword = (password) => {
  return /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password)
    ? null
    : "Password must be at least eight characters long and include at least one uppercase letter and special character.";
};

const validateUsername = (username) => {
  if (username.length < 4) return "Username must be at least 4 characters long.";
  if (/[^a-zA-Z0-9_-]/.test(username)) return "Username can only contain letters, numbers, underscores (_), and hyphens (-).";
  if (/(_-)|(-_)/.test(username)) return "Underscore (_) and hyphen (-) cannot be next to each other.";
  return null;
};

const validateCourse = (courseCode, courseName, instructor, schedule) => {
  if (!courseCode || courseCode.trim() === "") return "Course code is required";
  if (!courseName || courseName.trim() === "") return "Course name";
  if (!instructor || instructor.trim() === "") return "Instructor name";

  if (!schedule ||
    !Array.isArray(schedule.days) ||
    schedule.days.length === 0 ||
    schedule.days.some(day => !day || day.trim() === "") ||
    !schedule.time || schedule.time.trim() === ""
  ) {
    return "Course schedule must include valid days and time";
  }
  return null;
};

const validatePost = async (userId) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) return "Invalid User ID.";

  const userExists = await User.findById(userId);
  if (!userExists) return "User ID does not exist.";

  return null;
};

module.exports = {
  hashPassword,
  insertDocument,
  getTimestamp,
  validateEmail,
  validatePassword,
  validateUsername,
  validateCourse,
  validatePost
};
