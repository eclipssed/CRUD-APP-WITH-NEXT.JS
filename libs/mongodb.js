import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected successfully to mongodb server");
  } catch (error) {
    console.log("failed to connect", error);
  }
};

export default connectMongoDB;
