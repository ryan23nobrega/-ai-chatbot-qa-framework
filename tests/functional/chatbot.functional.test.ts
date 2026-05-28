import { sendMessage, extractText } from '../../src/client/anthropicClient';
import { hasMinLength, sleep } from '../../src/helpers/validators';

describe('Functional Tests — Chatbot API', () => {

  test('deve retornar uma resposta para uma pergunta simples', async () => {
    await sleep(3000);
    const response = await sendMessage('What is 2 + 2?');
    const text = extractText(response);
    expect(text).toBeDefined();
    expect(text.length).toBeGreaterThan(0);
  });

  test('deve retornar um ID único na resposta', async () => {
    await sleep(3000);
    const response = await sendMessage('Say hello');
    expect(response.id).toBeDefined();
    expect(response.id.length).toBeGreaterThan(0);
  });

  test('deve retornar o modelo utilizado na resposta', async () => {
    await sleep(3000);
    const response = await sendMessage('Say hello');
    expect(response.model).toBeDefined();
    expect(response.model.length).toBeGreaterThan(0);
  });

  test('deve retornar informações de uso de tokens', async () => {
    await sleep(3000);
    const response = await sendMessage('Say hello');
    expect(response.usage).toBeDefined();
    expect(response.usage.prompt_tokens).toBeGreaterThan(0);
    expect(response.usage.completion_tokens).toBeGreaterThan(0);
  });

  test('deve responder perguntas em português', async () => {
    await sleep(3000);
    const response = await sendMessage('Olá, como vai você?');
    const text = extractText(response);
    expect(hasMinLength(text, 5)).toBe(true);
  });

});