import { useAiChatData } from "@/store/signUpStore";
import { GoogleGenerativeAI } from "@google/generative-ai";

// @ts-ignore
const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
// @ts-ignore
const genAI = new GoogleGenerativeAI(apiKey);

// 수정된 handleClick
export const handleClick = async (
  value: string,
  updateAiChatData: (data: any) => void
) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(value);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    updateAiChatData({ AiResponse: text });
    return text;
  } catch (error) {
    console.error("Error generating content:", error);
  }
};

export const translate = async (topicValue: string | string[]) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `"${topicValue}"를 영어 단어로만 번역해줘. 다른 설명 없이 번역된 영어 단어만 출력해줘.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (e: any) {
    throw Error(e);
  }
};
