import { sendMessage } from '../../src/client/anthropicClient';
import { isWithinResponseTime, sleep } from '../../src/helpers/validators';

describe('Performance Tests — Response Time', () => {

  test('deve responder em menos de 10 segundos para pergunta simples', async () => {
    await sleep(3000);
    const start = Date.now();
    await sendMessage('Say hello');
    const elapsed = Date.now() - start;
    expect(isWithinResponseTime(elapsed, 10000)).toBe(true);
  });

  test('deve responder em menos de 15 segundos para pergunta complexa', async () => {
    await sleep(3000);
    const start = Date.now();
    await sendMessage('Explain the history of artificial intelligence in detail.');
    const elapsed = Date.now() - start;
    expect(isWithinResponseTime(elapsed, 15000)).toBe(true);
  });

  test('deve completar 3 requisições em menos de 30 segundos', async () => {
    await sleep(3000);
    const start = Date.now();
    await sendMessage('What is 1 + 1?');
    await sleep(2000);
    await sendMessage('What is the capital of France?');
    await sleep(2000);
    await sendMessage('Say goodbye');
    const elapsed = Date.now() - start;
    expect(isWithinResponseTime(elapsed, 30000)).toBe(true);
  });

});