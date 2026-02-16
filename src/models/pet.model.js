const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      required: true,
      enum: ["DOG", "CAT", "BIRD", "OTHER"]
    },

    breed: {
      type: String,
      trim: true
    },

    age: {
      type: Number,
      min: 0
    },

    weight: {
      type: Number,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Pet", petSchema);
