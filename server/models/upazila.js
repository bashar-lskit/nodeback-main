const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Contact Schema
const UpazilaSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Upazila", UpazilaSchema);
