import mongoose from "mongoose";

const connection = {};

const connectMongoDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Error while connecting to mongodb: ", error);
    throw error;
  }
};
export default connectMongoDB;
