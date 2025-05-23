import { GoogleGenerativeAI } from "@google/generative-ai";

export const getAiSwiperData = async () => {
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("API Key is not set");
  }
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(
    "스몰토크 주제를 10개만 선정해줘 제목은 제외해줘"
  );
  const response = await result.response;
  const text = await response.text();

  const topics = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => line.replace(/^\d+\.\s*/, ""));

  return topics;
};
