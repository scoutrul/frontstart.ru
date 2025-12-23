
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

export const handleFollowUp = async (topicTitle: string, type: 'explain' | 'tricky_question', currentFeedback: string) => {
  const prompts = {
    explain: `На основе предыдущего разговора о "${topicTitle}" (предыдущий отзыв: "${currentFeedback}"), пожалуйста, объясни эту тему более подробно, приведи наглядный пример и разбери нюансы, которые часто спрашивают на интервью.`,
    tricky_question: `На основе темы "${topicTitle}" и предыдущего отзыва ("${currentFeedback}"), задай пользователю один очень глубокий и сложный вопрос, который проверит его понимание работы движка или пограничных случаев.`
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompts[type],
      config: {
        temperature: 0.8,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Follow-up Error:", error);
    return "Не удалось получить дополнительную информацию.";
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
