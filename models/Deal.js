import mongoose from "mongoose";

const DealSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});

export default mongoose.model("Deal", DealSchema);
