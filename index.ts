import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

console.log("Starting...");
async function main(prompt: string) {
  const GEMINI_API_KEY = process.env.API_KEY;
  if (!GEMINI_API_KEY) {
    throw Error("API_KEY is not set");
  }
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

const prompt =
  "Come up with 3 sarcastic roast comeback on 'What are you doing?', make sure it has no more than 15 words";

// main(prompt);
