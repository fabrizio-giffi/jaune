const { Schema, model } = require("mongoose");

const artSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      trim: true,
    },
    year: Number,
    description: {
      type: String,
      required: false,
    },
    technique: {
      type: String,
      enum: ["acryl-leinwand", "bleistift", "federzeichnung-mit-tinte", "acryl-holz", "buntstift"],
      required: true,
    },
    size: {
      height: { type: Number, required: true },
      width: { type: Number, required: true },
    },
    sale: {
      type: [
        {
          _id: false,
          format: { type: String, enum: ["original", "poster", "postcard"], required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Art = model("Art", artSchema);

module.exports = Art;
