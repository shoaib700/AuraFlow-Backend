import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  summary: String,
  url: String
});

export default mongoose.model("Blog", BlogSchema);
