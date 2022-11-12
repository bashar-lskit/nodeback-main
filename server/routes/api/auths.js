const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Bring in Models & Helpers
const User = require("../../models/users");

const keys = require("../../config/keys");

const { secret, tokenLife } = keys.jwt;

router.post("/register", async (req, res) => {
  try {
    const { email, password, role, firstName, lastName, phoneNumber, division, district, upazila, level } =
      req.body;
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !division ||
      !district ||
      !upazila ||
      !level
    ) {
      return res.status(400).json({
        message: "All fields are required!",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "That email address is already in use." });
    }

    const user = new User({
      email,
      password,
      role,
      firstName,
      lastName,
      phoneNumber,
      division,
      district,
      upazila,
      level,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    const registeredUser = await user.save();

    const payload = {
      id: registeredUser.id,
    };

    const token = jwt.sign(payload, secret, { expiresIn: tokenLife });

    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user: {
        id: registeredUser.id,
        firstName: registeredUser.firstName,
        lastName: registeredUser.lastName,
        email: registeredUser.email,
        role: registeredUser.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
