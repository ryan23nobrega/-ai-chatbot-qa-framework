import { sendMessage, extractText } from '../../src/client/anthropicClient';
import { hasMinLength, hasMaxLength, containsAnyKeyword, sleep } from '../../src/helpers/validators';

describe('Quality Tests — Response Quality', () => {

  test('resposta deve ter tamanho mínimo relevante', async () => {
    await sleep(3000);
    const response = await sendMessage('Explain what artificial intelligence is in 2 sentences.');
    const text = extractText(response);
    expect(hasMinLength(text, 50)).toBe(true);
  });

  test('resposta não deve ser excessivamente longa', async () => {
    await sleep(3000);
    const response = await sendMessage('Say just the word: Hello');
    const text = extractText(response);
    expect(hasMaxLength(text, 500)).toBe(true);
  });

  test('deve conter palavras-chave relevantes para pergunta sobre IA', async () => {
    await sleep(3000);
    const response = await sendMessage('What is machine learning?');
    const text = extractText(response);
    const keywords = ['learning', 'data', 'model', 'algorithm', 'intelligence'];
    expect(containsAnyKeyword(text, keywords)).toBe(true);
  });

  test('deve responder de forma coerente sobre clima', async () => {
    await sleep(3000);
    const response = await sendMessage('What is the weather like in general in tropical countries?');
    const text = extractText(response);
    const keywords = ['warm', 'hot', 'tropical', 'humid', 'temperature', 'climate'];
    expect(containsAnyKeyword(text, keywords)).toBe(true);
  });

  test('finish_reason deve ser stop em resposta normal', async () => {
    await sleep(3000);
    const response = await sendMessage('Say hello in one word');
    expect(response.choices[0].finish_reason).toBe('stop');
  });

});