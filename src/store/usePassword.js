import { create } from 'zustand';
import { generatePassword } from '../utils/generatePassword';

export const usePassword = create((set, get) => ({
  password: '',
  length: 8,
  options: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  },
  generate: (length) =>
    set(() => ({
      password: generatePassword(length, get().options),
    })),
  changeLength: (length) => set(() => ({ length })),
  changeOptions: (option, value) =>
    set(() => ({ options: { ...get().options, [option]: value } })),
}));
