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

// get single district
router.post("/single", async (req, res) => {
  try {
    const upazilaId = req.body.id;
    const upazilaDoc = await Upazila.findOne({ _id: upazilaId });
    if (!upazilaDoc) {
      res.status(404).json({
        message: `Cannot find brand with the id: ${upazilaId}.`,
      });
    }
    res.status(200).json({
      data: upazilaDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// update district
router.put("/:id", async (req, res) => {
  const disId = req.params.id;
  const query = { _id: disId };
  const update = { name: req.body.upazila };

  const updateData = await Upazila.findOneAndUpdate(query, update, {
    new: true,
  });
  res.status(200).json({
    success: true,
    message: "Upazila has been updated successfully!",
    data: updateData,
  });
  try {
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// delete district
router.delete("/:id", async (req, res) => {
  try {
    await Upazila.deleteOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: `Upazila has been deleted successfully!`,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
