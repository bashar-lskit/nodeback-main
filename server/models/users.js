const Mongoose = require("mongoose");
const { ROLE_ADMIN, ROLE_MEMBER, ROLE_MERCHANT } = require("../constants");

const { Schema } = Mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        default: "Participant",
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
    details: {
      fullname: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
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
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Mongoose.model("Users", userSchema);
