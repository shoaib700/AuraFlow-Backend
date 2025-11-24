import Settings from "../models/Settings.js";

export async function getSettings(req, res) {
  const settings = await Settings.findOne() || {};
  res.json(settings);
}
