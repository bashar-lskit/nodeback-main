const express = require("express");
const router = express.Router();

// Bring in Models & Helpers
const Upazila = require("../../models/upazila");

router.post("/add", async (req, res) => {
  try {
    const upazila = new Upazila({
      name: req.body.uName,
    });
    const upazilaDoc = await upazila.save();

    res.status(200).json({
      success: true,
      message: `Upazila has been added successfully!`,
      upazila: upazilaDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const upazilas = await Upazila.find({}, { __v: 0 });
    res.status(200).json({
      data: upazilas,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
