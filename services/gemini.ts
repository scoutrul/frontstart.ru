
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = "Всегда используй Markdown для структурирования ответа: используй жирный шрифт для ключевых терминов, списки для перечислений и разделяй мысли абзацами. Отвечай на русском языке.";

export const askInterviewer = async (topicTitle: string, userKnowledge: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Ты - опытный frontend-интервьюер. Тема: ${topicTitle}. 
      Пользователь говорит: "${userKnowledge}". 
      ${SYSTEM_PROMPT}
      Дай краткую обратную связь: правильно ли он ответил, что упустил и задай один уточняющий вопрос по теме.`,
      config: { temperature: 0.7 }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Извините, интервьюер временно недоступен.";
  }
};

export const generateSelfTestQuestions = async (topicTitle: string, keyPoints: string[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Тема: ${topicTitle}. Ключевые поинты: ${keyPoints.join('; ')}. 
      ${SYSTEM_PROMPT}
      Сгенерируй 3 конкретных вопроса для самопроверки.`,
      config: { temperature: 0.7 }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Self-Test Error:", error);
    return "Не удалось сгенерировать вопросы.";
  }
};

export const getNextTopicsRecommendation = async (completedTopics: string[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Список пройденных тем JS: ${completedTopics.join(', ')}. Предложи 3 следующие темы. Только названия через запятую.`,
    });
    return response.text;
  } catch (error) {
    return "Event Loop, Promises, Async/Await";
  }
};
