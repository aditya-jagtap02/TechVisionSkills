require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-netlify-site.netlify.app"
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/students", studentRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
