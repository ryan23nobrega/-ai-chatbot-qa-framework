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

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}