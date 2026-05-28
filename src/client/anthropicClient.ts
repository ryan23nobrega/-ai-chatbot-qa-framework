import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GROQ_API_KEY;
const BASE_URL = process.env.BASE_URL;
const MODEL = process.env.MODEL;

export interface ChatResponse {
  id: string;
  choices: Array<{
    message: { role: string; content: string };
    finish_reason: string;
  }>;
  model: string;
  usage: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
}

export async function sendMessage(prompt: string): Promise<ChatResponse> {
  const response = await axios.post(
    `${BASE_URL}/chat/completions`,
    {
      model: MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1024
    },
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data;
}

export function extractText(response: ChatResponse): string {
  return response.choices[0]?.message?.content ?? '';
}