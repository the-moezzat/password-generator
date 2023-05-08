import { create } from 'zustand';

export const useCount = create((set) => {
  return {
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
  };
});
