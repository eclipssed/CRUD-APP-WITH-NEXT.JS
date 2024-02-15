import mongoose, { Schema } from "mongoose";

const imageSchema = new Schema(
  {
    logoImage: {
      previewUrl: { type: String },
      public_id: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);

export default Image;
