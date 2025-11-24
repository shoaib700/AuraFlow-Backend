import { autopilotEngine } from "../utils/ai.js";

export async function autopilot(req, res) {
  const { query } = req.body;
  const response = await autopilotEngine(query);
  res.json({ response });
}
