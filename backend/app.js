// 📂 app.js
const express = require('express');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const postRoutes = require("./routes/postRoutes");
const cors = require('cors');

const app = express();
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

(async () => {
  const db = await connectDB();

  app.use((req, res, next) => {
    req.db = db;
    next();
  });

  app.use("/api", userRoutes);
  app.use("/api", courseRoutes);
  app.use("/api", postRoutes);

  app.get("/api", (req, res) => res.send("✅ API is working!"));

  const PORT = process.env.PORT || 3001; 
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})();
