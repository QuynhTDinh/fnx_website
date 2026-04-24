import { create } from 'zustand';

const usePresentationStore = create((set) => ({
  // Trạng thái của Wizard
  currentStep: 1,
  
  // Dữ liệu Form cơ bản
  objective: '',
  audience: '',
  
  // Tổ hợp Combinatorial
  logicModel: 'SCQA', // Layer 1 (Core Framework)
  template: 'STATUS_UPDATE', // Layer 2 (Functional Template)
  
  // Dynamic Brief lưu trữ dữ liệu linh hoạt theo từng Template (Layer 2)
  dynamicBrief: {}, 
  
  // Kết quả sau khi AI xử lý
  presentationData: null,
  
  // Actions
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: Math.max(1, state.currentStep - 1) })),
  
  updateField: (field, value) => set({ [field]: value }),
  
  // Cập nhật Template (Layer 2) và reset brief
  setTemplate: (templateId) => set({ 
    template: templateId,
    dynamicBrief: {} // Xóa trắng dữ liệu brief cũ khi đổi template
  }),

  // Cập nhật Logic Model (Layer 1)
  setLogicModel: (modelId) => set({ logicModel: modelId }),
  
  updateDynamicBrief: (field, value) => set((state) => ({ 
    dynamicBrief: { ...state.dynamicBrief, [field]: value } 
  })),
  
  setPresentationData: (data) => set({ presentationData: data }),
  
  resetWizard: () => set({
    currentStep: 1,
    objective: '',
    audience: '',
    logicModel: 'SCQA',
    template: 'STATUS_UPDATE',
    dynamicBrief: {},
    presentationData: null
  })
}));

export default usePresentationStore;
