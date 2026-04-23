import { create } from 'zustand';

const usePresentationStore = create((set) => ({
  // Trạng thái của Wizard
  currentStep: 1,
  
  // Dữ liệu Form
  objective: '',
  audience: '',
  
  logicLayer: 'LAYER_1', // 'LAYER_1' (Core Frameworks) | 'LAYER_2' (Functional Templates)
  framework: 'PYRAMID', // Mã ID của framework/template đang chọn
  
  // Dynamic Brief lưu trữ dữ liệu linh hoạt theo từng Template
  dynamicBrief: {}, 
  
  // Kết quả sau khi AI xử lý
  presentationData: null,
  
  // Actions
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: Math.max(1, state.currentStep - 1) })),
  
  updateField: (field, value) => set({ [field]: value }),
  
  // Reset dynamic brief khi đổi template hoặc layer
  setLogicSelection: (layer, frameworkId) => set({ 
    logicLayer: layer, 
    framework: frameworkId,
    dynamicBrief: {} // Xóa trắng dữ liệu brief cũ để tránh nhầm lẫn field
  }),
  
  updateDynamicBrief: (field, value) => set((state) => ({ 
    dynamicBrief: { ...state.dynamicBrief, [field]: value } 
  })),
  
  setPresentationData: (data) => set({ presentationData: data }),
  
  resetWizard: () => set({
    currentStep: 1,
    objective: '',
    audience: '',
    logicLayer: 'LAYER_1',
    framework: 'PYRAMID',
    dynamicBrief: {},
    presentationData: null
  })
}));

export default usePresentationStore;
