import { create } from 'zustand';

const usePresentationStore = create((set) => ({
  presentationData: null,
  
  setPresentationData: (data) => set({ presentationData: data }),
  clearPresentationData: () => set({ presentationData: null })
}));

export default usePresentationStore;
