const Mongoose = require("mongoose");
const { ROLE_ADMIN, ROLE_MEMBER } = require("../constants");

const { Schema } = Mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  division: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  upazila: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: ROLE_MEMBER,
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Users", userSchema);
