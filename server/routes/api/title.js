const express = require("express");
const router = express.Router();

// Bring in Models & Helpers
const Title = require("../../models/title");

router.post("/add", async (req, res) => {
  try {
    const title = new Title({
      title: req.body.title,
    });
    const titleDoc = await title.save();

    res.status(200).json({
      success: true,
      message: `Title has been added successfully!`,
      address: titleDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const latestTitle = await Title.findOne({}).sort("-created");

    res.status(200).json({
      latestTitle,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
