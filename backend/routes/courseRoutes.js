// routes/courseRoutes.js

const express = require("express");
const { addCourse, removeCourse, getUserCourses, getAllCourses } = require("../controllers/courseController");

const router = express.Router();

router.get("/courses", getAllCourses);
router.post("/courses/add", addCourse);
router.post("/courses/remove", removeCourse);

router.get("/courses/:id", getUserCourses);

module.exports = router;
