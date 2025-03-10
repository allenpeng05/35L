const express = require("express");
const { addCourse, removeCourse } = require("../controllers/courseController");

const router = express.Router();

router.post("/courses", addCourse);
router.delete("/courses/:courseId", removeCourse);

module.exports = router;