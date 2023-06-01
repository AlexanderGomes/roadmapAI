const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
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
  modules: [
    {
      title: String,
      items: [
        {
          title: String,
          link: String,
          isDone: {
            type: Boolean,
            default: false,
          },
          quiz: {
            title: String,
            questions: [
              {
                question: String,
                options: [String],
                correctAnswerIndex: {
                  type: Number,
                  required: true,
                  min: 0,
                },
              },
            ],
          },
        },
      ],
      project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
      },
    },
  ],
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("courses", courseSchema);
