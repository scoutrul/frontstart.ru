
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askInterviewer = async (topicTitle: string, userKnowledge: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Ты - опытный frontend-интервьюер. Тема: ${topicTitle}. 
      Пользователь говорит: "${userKnowledge}". 
      Дай краткую обратную связь: правильно ли он ответил, что упустил и задай один коварный уточняющий вопрос по теме. 
      Отвечай кратко и профессионально на русском языке.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Извините, интервьюер временно недоступен. Попробуйте позже.";
  }
};

export const getNextTopicsRecommendation = async (completedTopics: string[]) => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Список пройденных тем JavaScript: ${completedTopics.join(', ')}. 
        Предложи следующие 3 логически вытекающие темы для изучения к фронтенд-собеседованию. 
        Формат: только список названий через запятую.`,
      });
      return response.text;
    } catch (error) {
      return "Прототипы, Event Loop, Promises";
    }
}
