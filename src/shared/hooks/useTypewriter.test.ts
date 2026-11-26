import { act, renderHook } from '@testing-library/react';
import { useTypewriter } from './useTypewriter';

describe('useTypewriter', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('affiche le premier mot, l’efface puis tape le suivant', () => {
    const words = ['ab', 'cd'];
    const { result } = renderHook(() =>
      useTypewriter(words, { startDelay: 10, deleteDelay: 10, typeDelay: 10, holdDelay: 10 }),
    );
    expect(result.current).toBe('ab');

    act(() => vi.advanceTimersByTime(10)); // efface une lettre
    expect(result.current).toBe('a');
    act(() => vi.advanceTimersByTime(10));
    expect(result.current).toBe('');
    act(() => vi.advanceTimersByTime(300)); // pause avant le mot suivant
    expect(result.current).toBe('c');
    act(() => vi.advanceTimersByTime(10));
    expect(result.current).toBe('cd');
  });
});
