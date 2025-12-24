import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_PROMPT = "Всегда используй Markdown для структурирования ответа: используй жирный шрифт для ключевых терминов, списки для перечислений и разделяй мысли абзацами. Отвечай на русском языке.";

// Initialize AI instance before usage with directly accessed API key
export const askInterviewer = async (topicTitle: string, userKnowledge: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Ты - опытный frontend-интервьюер. Тема: ${topicTitle}. 
      Пользователь говорит: "${userKnowledge}". 
      ${SYSTEM_PROMPT}
      Дай краткую обратную связь: правильно ли он ответил, что упустил и задай один коварный уточняющий вопрос по теме.`,
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
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompts = {
    explain: `На основе предыдущего разговора о "${topicTitle}" (предыдущий отзыв: "${currentFeedback}"), ${SYSTEM_PROMPT} Пожалуйста, объясни эту тему более подробно, приведи наглядный пример и разбери нюансы, которые часто спрашивают на интервью.`,
    tricky_question: `На основе темы "${topicTitle}" и предыдущего отзыва ("${currentFeedback}"), ${SYSTEM_PROMPT} Задай пользователю один очень глубокий и сложный вопрос, который проверит его понимание работы движка или пограничных случаев.`
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

export const generateSelfTestQuestions = async (topicTitle: string, keyPoints: string[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Тема: ${topicTitle}. Ключевые поинты: ${keyPoints.join('; ')}. 
      ${SYSTEM_PROMPT}
      Сгенерируй 3-5 вопросов для самопроверки, которые помогут пользователю убедиться, что он глубоко понял эту тему. 
      Вопросы должны быть конкретными и охватывать разные аспекты темы. Используй маркированный список.`,
      config: {
        temperature: 0.7,
      }
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
        contents: `Список пройденных тем JavaScript: ${completedTopics.join(', ')}. 
        Предложи следующие 3 логически вытекающие темы для изучения к фронтенд-собеседованию. 
        Формат: только список названий через запятую.`,
      });
      return response.text;
    } catch (error) {
      return "Прототипы, Event Loop, Promises";
    }
}