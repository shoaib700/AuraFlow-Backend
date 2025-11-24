import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("Setting", SettingsSchema);
