import { describe, expect, it } from 'vitest';
import { normalizeName, parseNumber, faDate } from './domain';
describe('Persian inputs', () => {
  it('accepts Persian, Arabic and English digits', () => {
    expect(parseNumber('۹۲٫۵')).toBe(92.5); expect(parseNumber('٩٢.٥')).toBe(92.5); expect(parseNumber('92.5')).toBe(92.5);
  });
  it('rejects missing, invalid and unsafe numeric input', () => {
    for (const n of ['', '0', '-1', '1e2', 'Infinity', '1001', '12x']) expect(parseNumber(n)).toBeNull();
  });
  it('normalizes Persian variants', () => expect(normalizeName('  كيان  ')).toBe('کیان'));
  it('displays a UTC date using the Persian calendar', () => expect(faDate('2024-03-20T12:00:00Z')).toContain('۱۴۰۳'));
});
