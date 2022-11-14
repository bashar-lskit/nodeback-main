const express = require("express");
const router = express.Router();

// Bring in Models & Helpers
const District = require("../../models/district");

router.post("/add", async (req, res) => {
  try {
    const district = new District({
      name: req.body.dName,
    });
    const districtDoc = await district.save();

    res.status(200).json({
      success: true,
      message: `District has been added successfully!`,
      district: districtDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const districts = await District.find({}, { __v: 0 });
    res.status(200).json({
      data: districts,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
