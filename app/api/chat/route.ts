import { type CoreMessage, streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const openai = createOpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
  });

  const result = await streamText({
    model: openai('Doubao-pro-128k'),
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toAIStreamResponse();
}
