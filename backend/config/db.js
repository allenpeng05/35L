const mongoose = require("mongoose");

const uri = "mongodb+srv://jkdu-o2:5q88kUo7VJ30dHY8@cluster0.ov6jm.mongodb.net/university_portal";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
