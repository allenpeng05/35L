const Course = require("../models/Course");
const User = require("../models/User");

const addCourse = async (req, res) => {
    try {
        const { userId, courseNumber, department, professor, name } = req.body;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found." });
        
        if (!user.coursesInterested.includes(name))
        {
          const newCourse = new Course({creator: userId, courseNumber, department, professor, name });
          await newCourse.save();

          user.coursesInterested.push(name);
          await user.save();
          
          return res.status(201).json({ message: "Course added successfully!", course: newCourse });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

const removeCourse = async (req, res) => {
  try {
      const { userId, courseId } = req.body;
      const user = await User.findById(userId);

      const course = await Course.findById(courseId);

      const courseName = course.name;
      await Course.findByIdAndDelete(courseId);

      if (user && user.coursesInterested.includes(courseName)) {
        user.coursesInterested = user.coursesInterested.filter(name => name !== courseName);
        await user.save();
      } 
      
      return res.status(200).json({ message: "Course removed successfully." });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {addCourse, removeCourse};