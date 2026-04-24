import React from 'react';
import usePresentationStore from '../../store/usePresentationStore';
import { ArrowLeft, Sparkles, BookOpen, Layers, GitBranch, ArrowRight, Presentation, Target, ActivitySquare, LayoutTemplate, BoxSelect } from 'lucide-react';

export default function StepBriefAndLogic({ onGenerate }) {
  const { logicModel, template, dynamicBrief, setTemplate, setLogicModel, updateDynamicBrief, prevStep } = usePresentationStore();

  const handleGenerate = () => {
    // Validate
    const currentTemplate = getCurrentTemplate();
    if (!currentTemplate) return;
    
    const isValid = currentTemplate.fields.every(f => dynamicBrief[f.id]?.trim());
    if (isValid) {
      onGenerate();
    }
  };

  // --- LAYER 1: Core Frameworks (Lõi Tư Duy Thế Giới - 5 Mẫu) ---
  const logicModels = [
    { id: 'SCQA', name: 'Khung SCQA (McKinsey)', desc: 'Dẫn dắt qua: Bối cảnh, Nút thắt, Câu hỏi, Giải pháp' },
    { id: 'PYRAMID', name: 'Nguyên lý Kim Tự Tháp', desc: 'Đưa kết luận lên đầu, chứng minh bằng luận điểm' },
    { id: 'MECE', name: 'Phân tích MECE', desc: 'Chia nhỏ vấn đề đa chiều: Không trùng lặp, Không bỏ sót' },
    { id: 'A3_THINKING', name: 'A3 Thinking (Toyota)', desc: 'Tư duy tinh gọn: Hiện trạng, Nguyên nhân, Giải pháp' },
    { id: 'STAR', name: 'Khung STAR', desc: 'Kể chuyện thực tế: Tình huống, Nhiệm vụ, Hành động, Kết quả' }
  ];

  // --- LAYER 2: Functional Templates (Mẫu Ứng Dụng Thực Tế - 5 Mẫu) ---
  const layer2Groups = [
    {
      title: "Báo Cáo & Quản Trị (Operations)",
      icon: <ActivitySquare className="w-5 h-5 text-emerald-500" />,
      items: [
        { 
          id: 'STATUS_UPDATE', name: 'Báo Cáo Tiến Độ (Status Update)', desc: 'Họp giao ban Weekly/Monthly',
          fields: [
            { id: 'progress', label: '1. Tiến Độ Chung', desc: 'Tóm tắt tình hình dự án (On-track / Delayed).' },
            { id: 'kpis', label: '2. Chỉ Số (KPIs)', desc: 'Các con số đạt được trong tuần/tháng.' },
            { id: 'blockers', label: '3. Vấn đề (Blockers)', desc: 'Những khó khăn đang cản trở tiến độ.' },
            { id: 'nextSteps', label: '4. Kế Hoạch Tiếp Theo', desc: 'Hành động cụ thể để đi tiếp.' }
          ]
        },
        { 
          id: 'CRISIS_REPORT', name: 'Báo Cáo Khủng Hoảng (Post-mortem)', desc: 'Phân tích sự cố và khắc phục',
          fields: [
            { id: 'incident', label: '1. Sự Cố', desc: 'Mô tả ngắn gọn sự kiện không mong muốn.' },
            { id: 'impact', label: '2. Thiệt Hại / Tác Động', desc: 'Mức độ ảnh hưởng (Tiền, Uy tín...).' },
            { id: 'rootCause', label: '3. Nguyên Nhân', desc: 'Tại sao lại xảy ra lỗi này?' },
            { id: 'actionPlan', label: '4. Giải Pháp Phòng Ngừa', desc: 'Làm gì để ngăn chặn điều này lặp lại?' }
          ]
        }
      ]
    },
    {
      title: "Chiến Lược & Đề Xuất (Strategy)",
      icon: <Target className="w-5 h-5 text-orange-500" />,
      items: [
        { 
          id: 'PITCHING', name: 'Đề Xuất Phê Duyệt / Ngân Sách', desc: 'Thuyết phục cấp trên hoặc Đối tác',
          fields: [
            { id: 'context', label: '1. Bối Cảnh Nhu Cầu', desc: 'Tại sao cần đề xuất này?' },
            { id: 'benefits', label: '2. Lợi Ích & ROI', desc: 'Giá trị mang lại cho tổ chức là gì?' },
            { id: 'costs', label: '3. Chi Phí Dự Kiến', desc: 'Cần bao nhiêu tiền, nhân sự?' },
            { id: 'risks', label: '4. Rủi Ro', desc: 'Rủi ro lớn nhất và cách phòng ngừa?' }
          ]
        },
        { 
          id: 'PROJECT_KICKOFF', name: 'Khởi Động Dự Án (Kick-off)', desc: 'Đồng bộ mục tiêu với team',
          fields: [
            { id: 'goal', label: '1. Mục Tiêu', desc: 'Đích đến của dự án là gì?' },
            { id: 'scope', label: '2. Phạm Vi', desc: 'Dự án sẽ làm gì và KHÔNG làm gì?' },
            { id: 'timeline', label: '3. Tiến Độ (Timeline)', desc: 'Các cột mốc thời gian quan trọng.' },
            { id: 'roles', label: '4. Vai Trò (Roles)', desc: 'Ai chịu trách nhiệm việc gì?' }
          ]
        },
        { 
          id: 'INTERNAL_TRAINING', name: 'Đào Tạo & Chia Sẻ (Training)', desc: 'Lan tỏa kiến thức trong nội bộ',
          fields: [
            { id: 'concept', label: '1. Khái Niệm Lõi', desc: 'Hôm nay học về cái gì?' },
            { id: 'whyMatters', label: '2. Tại Sao Quan Trọng', desc: 'Kiến thức này giúp ích gì?' },
            { id: 'caseStudy', label: '3. Ví Dụ Thực Tế', desc: 'Một case study thành công/thất bại.' },
            { id: 'takeaways', label: '4. Hành Động Yêu Cầu', desc: 'Cần áp dụng điều gì ngay ngày mai?' }
          ]
        }
      ]
    }
  ];

  // Helper function
  const getCurrentTemplate = () => {
    for (const group of layer2Groups) {
      const found = group.items.find(i => i.id === template);
      if (found) return found;
    }
    return layer2Groups[0].items[0]; 
  };

  const currentTemplate = getCurrentTemplate();
  const isFormValid = currentTemplate?.fields.every(f => dynamicBrief[f.id]?.trim());

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        
        {/* Left Column: Combinatorial (Layer 1 Selector + Layer 2 Inputs) */}
        <div className="space-y-8">
          
          {/* Layer 1 Selector */}
          <div className="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-blue-400 flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Lõi Tư Duy Thế Giới (Layer 1)
                </h3>
                <p className="text-neutral-400 text-xs mt-1">Chọn khung logic để AI sắp xếp và dẫn dắt bài thuyết trình.</p>
              </div>
            </div>
            
            <div className="relative">
              <select 
                value={logicModel}
                onChange={(e) => setLogicModel(e.target.value)}
                className="w-full appearance-none bg-neutral-950 border border-neutral-800 text-white font-medium py-3 px-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
              >
                {logicModels.map(model => (
                  <option key={model.id} value={model.id}>
                    {model.name} - {model.desc}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Dynamic Brief (Layer 2 Inputs) */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-black mb-1">Nội Dung Chi Tiết</h2>
              <p className="text-neutral-400 text-sm">Điền thông tin thực tế theo Mẫu Ứng Dụng bạn đang chọn.</p>
            </div>

            <div className="space-y-4">
              {currentTemplate.fields.map((field, index) => (
                <div key={field.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 transition-all focus-within:border-neutral-600 focus-within:bg-neutral-800/50">
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">{field.label}</label>
                  <p className="text-xs text-neutral-500 mb-3">{field.desc}</p>
                  <textarea 
                    className="w-full h-24 bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all"
                    placeholder="Nhập nội dung vào đây..."
                    value={dynamicBrief[field.id] || ''}
                    onChange={(e) => updateDynamicBrief(field.id, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: Layer 2 Templates */}
        <div className="space-y-6">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sticky top-6">
            <div className="flex items-center gap-2 mb-2">
              <LayoutTemplate className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-black">Mẫu Ứng Dụng (Layer 2)</h2>
            </div>
            <p className="text-neutral-400 text-sm mb-6">Chọn mục đích của bài thuyết trình. Khung nhập liệu bên trái sẽ thay đổi tương ứng.</p>

            <div className="space-y-6">
              {layer2Groups.map((group, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-3">
                    {group.icon}
                    <h3 className="font-bold text-neutral-300">{group.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.items.map(item => (
                      <div 
                        key={item.id}
                        onClick={() => setTemplate(item.id)}
                        className={`cursor-pointer border rounded-xl p-4 transition-all relative overflow-hidden ${
                          template === item.id 
                            ? 'border-emerald-500 bg-emerald-500/10'
                            : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700'
                        }`}
                      >
                        {template === item.id && (
                          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                        )}
                        <div className={`font-bold text-sm mb-1 ${template === item.id ? 'text-emerald-400' : 'text-white'}`}>
                          {item.name}
                        </div>
                        <div className="text-xs text-neutral-500 leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-between items-center pt-8 border-t border-neutral-800">
        <button 
          onClick={prevStep}
          className="py-3 px-6 text-neutral-400 hover:text-white transition-all flex items-center gap-2 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại
        </button>
        
        <button 
          onClick={handleGenerate}
          disabled={!isFormValid}
          className="py-4 px-8 bg-white text-black font-black rounded-xl hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          <Sparkles className="w-5 h-5" />
          Tạo Khung Báo Cáo
        </button>
      </div>
    </div>
  );
}
