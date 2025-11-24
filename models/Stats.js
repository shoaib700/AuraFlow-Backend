import mongoose from "mongoose";

const StatsSchema = new mongoose.Schema({
  visitors: { type: Number, default: 0 },
  pages: { type: Number, default: 0 },
  deals: { type: Number, default: 0 }
});

export default mongoose.model("Stat", StatsSchema);
