const express = require("express");
const router = express.Router();

// Bring in Models & Helpers
const District = require("../../models/district");

// add district
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

// get all district
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

// get single district
router.post("/single", async (req, res) => {
  try {
    const districtId = req.body.id;
    const districtDoc = await District.findOne({ _id: districtId });
    if (!districtDoc) {
      res.status(404).json({
        message: `Cannot find brand with the id: ${districtId}.`,
      });
    }
    res.status(200).json({
      data: districtDoc,
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
  const update = { name: req.body.district };

  const updateData = await District.findOneAndUpdate(query, update, {
    new: true,
  });
  res.status(200).json({
    success: true,
    message: "District has been updated successfully!",
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
    const dId = req.params.id;
    await District.deleteOne({ _id: dId });
    res.status(200).json({
      success: true,
      message: `District has been deleted successfully!`,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
