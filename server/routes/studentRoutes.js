const express = require("express");
const router = express.Router();
const Student = require("../models/Student");


// POST Student Enrollment
router.post("/enroll", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    res.status(201).json({
      success: true,
      message: "Enrollment Successful",
      student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// GET All Students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;