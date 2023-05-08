import { screen, render } from '@testing-library/react';
import { click } from '@testing-library/user-event';
import PasswordField from './PasswordField';
import { expect, test, vi, beforeEach } from 'vitest';
import { act } from 'react-dom/test-utils';

beforeEach(() => {
  vi.useFakeTimers({
    shouldAdvanceTime: true,
  });
});

test('Should have a button to copy password', () => {
  render(<PasswordField />);

  const button = screen.getByRole('button', { name: /copy/i });

  expect(button).toBeInTheDocument();
});

test("Show text to indicate that we've copied the password", async () => {
  render(<PasswordField />);

  const button = screen.getByRole('button', { name: /copy/i });
  const text = screen.queryByText(/copied/i);
  expect(text).not.toBeInTheDocument();

  await click(button);
  const text2 = screen.getByText(/copied/i);
  expect(text2).toBeInTheDocument();

  act(() => {
    vi.advanceTimersByTime(1000);
  });

  const text3 = screen.queryByText(/copied/i);
  expect(text3).not.toBeInTheDocument();
});
