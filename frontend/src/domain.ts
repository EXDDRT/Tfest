export type Customer = { id: string; name: string; bust: number; waist: number; createdAt: string };

export function parseNumber(value: string): number | null {
  const normal = value.trim().replace(/[۰-۹]/g, c => String(c.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, c => String(c.charCodeAt(0) - 0x0660)).replace(/٫/g, '.');
  if (!/^\d+(?:\.\d+)?$/.test(normal)) return null;
  const result = Number(normal);
  return Number.isFinite(result) && result > 0 && result <= 1000 ? result : null;
}
export function normalizeName(value: string): string {
  return value.replace(/[يى]/g, 'ی').replace(/ك/g, 'ک').trim();
}
export function faNumber(value: number): string { return new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 2 }).format(value); }
export function faDate(value: string): string { return new Intl.DateTimeFormat('fa-IR-u-ca-persian', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(value)); }
