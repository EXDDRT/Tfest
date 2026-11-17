import 'fake-indexeddb/auto';
import { expect, it } from 'vitest';
import { listCustomers, saveCustomer } from './storage';
import { faNumber, type Customer } from './domain';

it('saves a fictional customer and reads the measurements for a summary', async () => {
  const customer: Customer = { id: 'test-1', name: 'مشتری نمونه', bust: 92, waist: 74, createdAt: '2024-03-20T12:00:00Z' };
  await saveCustomer(customer);
  const [saved] = await listCustomers();
  expect(saved).toEqual(customer);
  expect(faNumber(saved.bust)).toBe('۹۲');
  expect(faNumber(saved.waist)).toBe('۷۴');
});
