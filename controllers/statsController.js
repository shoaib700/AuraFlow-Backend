import Stats from "../models/Stats.js";

export async function getStats(req, res) {
  const stats = await Stats.findOne() || {};
  res.json(stats);
}
