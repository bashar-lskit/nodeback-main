const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Contact Schema
const TitleSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Title", TitleSchema);
