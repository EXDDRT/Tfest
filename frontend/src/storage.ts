import type { Customer } from './domain';
const DB = 'tailorcore-demo';
function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB, 1);
    request.onupgradeneeded = () => request.result.createObjectStore('customers', { keyPath: 'id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
export async function listCustomers(): Promise<Customer[]> {
  const db = await open();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('customers', 'readonly');
      const req = tx.objectStore('customers').getAll();
      req.onsuccess = () => resolve(req.result as Customer[]);
      req.onerror = () => reject(req.error);
    });
  } finally { db.close(); }
}
export async function saveCustomer(customer: Customer): Promise<void> {
  const db = await open();
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction('customers', 'readwrite');
      tx.objectStore('customers').add(customer);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } finally { db.close(); }
}
