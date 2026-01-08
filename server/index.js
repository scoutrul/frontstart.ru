import Fastify from 'fastify'
import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: join(__dirname, '.env') })

const fastify = Fastify({ 
  logger: false,
  bodyLimit: 1048576, // 1MB
  disableRequestLogging: true
})

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY not found in .env')
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  model: 'gemini-flash-latest'
})

const chatHandler = async (request, reply) => {
  try {
    const {
      systemPrompt = '',
      articleContext = null,
      chatHistory = [],
      userMessage = ''
    } = request.body || {}

    // Format article object to text
    let articleText = ''
    if (articleContext) {
      const article = articleContext
      articleText = `
Title: ${article.title || ''}
Difficulty: ${article.difficulty || ''}
Description: ${article.description || ''}
${article.additionalDescription ? `Additional description: ${article.additionalDescription}` : ''}

Key points:
${(article.keyPoints || []).map((point, i) => `${i + 1}. ${point}`).join('\n')}

${article.funFact ? `Fun fact: ${Array.isArray(article.funFact) ? article.funFact.join(' ') : article.funFact}` : ''}

${article.examples && article.examples.length > 0 ? `Code examples:\n${article.examples.map((ex, i) => `${i + 1}. ${ex.title}\n${ex.code}`).join('\n\n')}` : ''}

${article.tags && article.tags.length > 0 ? `Tags: ${article.tags.join(', ')}` : ''}
`.trim()
    }

    const historyText = chatHistory
      .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n')

    const prompt = `
${systemPrompt}

Current article:
${articleText}

Chat history:
${historyText}

User: ${userMessage}
Assistant:
`

    const result = await model.generateContent(prompt)
    const response = result.response.text()

    return { answer: response }
  } catch (err) {
    request.log.error(err)
    reply.code(500).send({ error: 'Gemini request failed' })
  }
}

fastify.post('/api/chat', {
  schema: {
    body: {
      type: 'object',
      properties: {
        systemPrompt: { type: 'string' },
        articleContext: { type: ['object', 'null'] },
        chatHistory: { type: 'array' },
        userMessage: { type: 'string' }
      }
    }
  }
}, chatHandler)

fastify.listen({ port: 30024, host: '0.0.0.0' }, err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log('Server running on http://localhost:30024')
})
