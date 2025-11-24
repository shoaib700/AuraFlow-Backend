import { autopilotEngine } from "../utils/ai.js";

export async function generateSEO(req, res) {
  const { keyword } = req.body;

  const seo = await autopilotEngine(
    `Generate SEO title, description and keywords for: ${keyword}`
  );

  res.json({ seo });
}
