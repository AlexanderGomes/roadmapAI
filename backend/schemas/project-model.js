const mongoose = require("mongoose");

const Project = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  description: {
    type: String,
    required: true,
  },
  generatedCode: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("projects", Project);
