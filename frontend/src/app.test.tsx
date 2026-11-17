// @vitest-environment jsdom
import 'fake-indexeddb/auto';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { expect, it } from 'vitest';
import { App } from './App';

it('registers a fictional customer and shows its measurements', async () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('نام مشتری'), { target: { value: 'مشتری نمونه' } });
  fireEvent.change(screen.getByLabelText('دور سینه'), { target: { value: '۹۲' } });
  fireEvent.change(screen.getByLabelText('دور کمر'), { target: { value: '۷۴' } });
  fireEvent.click(screen.getByRole('button', { name: /ذخیره و نمایش خلاصه/ }));
  await waitFor(() => expect(screen.getByText('۹۲')).toBeTruthy());
  expect(screen.getByText('۷۴')).toBeTruthy();
  expect(screen.getByText('اطلاعات نمونه در همین دستگاه ذخیره شد.')).toBeTruthy();
});
