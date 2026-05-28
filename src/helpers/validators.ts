export function hasMinLength(text: string, min: number): boolean {
  return text.trim().length >= min;
}

export function hasMaxLength(text: string, max: number): boolean {
  return text.trim().length <= max;
}

export function containsAnyKeyword(text: string, keywords: string[]): boolean {
  const lower = text.toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()));
}

export function doesNotContain(text: string, forbidden: string[]): boolean {
  const lower = text.toLowerCase();
  return !forbidden.some(f => lower.includes(f.toLowerCase()));
}

export function isWithinResponseTime(ms: number, maxMs: number): boolean {
  return ms <= maxMs;
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delayMs: number = 5000
): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      const isRateLimit = error?.response?.status === 429;
      const isLastAttempt = attempt === retries;

      if (isRateLimit && !isLastAttempt) {
        const wait = delayMs * attempt;
        console.log(`Rate limit atingido. Tentativa ${attempt}/${retries}. Aguardando ${wait}ms...`);
        await new Promise(resolve => setTimeout(resolve, wait));
      } else {
        throw error;
      }
    }
  }
  throw new Error('Número máximo de tentativas atingido');
}