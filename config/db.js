import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "AuraFlowAI"
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
}
