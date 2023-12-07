import { create } from 'zustand'

export const useStore = create((set) => ({
  establishments: [],
  updateEstablishments: (establishments) => set({ establishments }),
}));
