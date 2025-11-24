import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function autopilotEngine(prompt) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are AuraFlow AI Autopilot Assistant." },
        { role: "user", content: prompt }
      ],
      max_tokens: 250,
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("AI Error:", err);
    return "AI Engine Error";
  }
}
