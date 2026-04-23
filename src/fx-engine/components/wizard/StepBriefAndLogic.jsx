import React, { useState } from 'react';
import usePresentationStore from '../../store/usePresentationStore';
import { ArrowLeft, Sparkles, BookOpen, Layers, GitBranch, ArrowRight, Presentation, Target, ActivitySquare } from 'lucide-react';

export default function StepBriefAndLogic({ onGenerate }) {
  const { logicLayer, framework, dynamicBrief, setLogicSelection, updateDynamicBrief, prevStep } = usePresentationStore();

  const handleGenerate = () => {
    // Basic validation: ensure all required fields for the current template have some text
    const currentTemplate = getCurrentTemplate();
    if (!currentTemplate) return;
    
    const isValid = currentTemplate.fields.every(f => dynamicBrief[f.id]?.trim());
    if (isValid) {
      onGenerate();
    }
  };

  // --- LOGIC LIBRARY DEFINITIONS ---

  // LAYER 1: Core Frameworks (Khung Tư Duy Phân Tích)
  const layer1Groups = [
    {
      title: "Giải Quyết Vấn Đề (Problem Solving)",
      icon: <GitBranch className="w-5 h-5 text-blue-500" />,
      items: [
        { 
          id: 'MECE', name: 'MECE', desc: 'Phân tích đa chiều: Không trùng lặp, Không bỏ sót',
          fields: [
            { id: 'issue', label: '1. Vấn đề cốt lõi', desc: 'Định nghĩa rõ ràng vấn đề cần phân tích.' },
            { id: 'dimensions', label: '2. Các khía cạnh (MECE)', desc: 'Liệt kê các nhánh phân tích không trùng lặp (ví dụ: Nội bộ / Bên ngoài).' },
            { id: 'data', label: '3. Dữ liệu chứng minh', desc: 'Số liệu thực tế cho từng nhánh.' }
          ]
        },
        { 
          id: 'A3_THINKING', name: 'A3 Thinking', desc: 'Quy trình 8 bước giải quyết vấn đề của Toyota',
          fields: [
            { id: 'background', label: '1. Bối cảnh (Background)', desc: 'Nguyên nhân sâu xa hoặc bối cảnh của vấn đề.' },
            { id: 'currentCondition', label: '2. Hiện trạng (Current Condition)', desc: 'Tình hình hiện tại đang diễn ra như thế nào?' },
            { id: 'target', label: '3. Mục tiêu (Target)', desc: 'Đích đến hoặc kết quả mong muốn.' },
            { id: 'rootCause', label: '4. Nguyên nhân gốc rễ (Root Cause)', desc: 'Tại sao lại xảy ra tình trạng này?' }
          ]
        }
      ]
    },
    {
      title: "Ra Quyết Định (Decision Making)",
      icon: <Layers className="w-5 h-5 text-purple-500" />,
      items: [
        { 
          id: 'PYRAMID', name: 'Nguyên lý Kim Tự Tháp', desc: 'Đưa kết luận lên đầu (McKinsey)',
          fields: [
            { id: 'governingThought', label: '1. Thông Điệp Cốt Lõi (Answer First)', desc: 'Câu duy nhất bạn muốn họ nhớ sau bài thuyết trình là gì?' },
            { id: 'keyArguments', label: '2. Các luận điểm chính (Key Arguments)', desc: '3 lý do chính hỗ trợ cho thông điệp trên.' },
            { id: 'data', label: '3. Bằng chứng (Data & Facts)', desc: 'Số liệu chứng minh cho các luận điểm.' }
          ]
        },
        { 
          id: 'SCQA', name: 'Khung SCQA', desc: 'Bối cảnh, Nút thắt, Câu hỏi, Giải pháp',
          fields: [
            { id: 'situation', label: '1. Bối Cảnh (Situation)', desc: 'Thực trạng hiện tại mà tất cả mọi người đều đồng ý là gì?' },
            { id: 'complication', label: '2. Nút Thắt (Complication)', desc: 'Sự kiện nào vừa xảy ra làm thay đổi bối cảnh và sinh ra vấn đề?' },
            { id: 'resolution', label: '3. Giải Pháp (Resolution)', desc: 'Giải pháp của bạn là gì? (Thông điệp chính)' },
            { id: 'data', label: '4. Dữ Liệu Hỗ Trợ (Evidence)', desc: 'Cung cấp các số liệu, bằng chứng để hỗ trợ giải pháp.' }
          ]
        }
      ]
    }
  ];

  // LAYER 2: Functional Templates (Mẫu Ứng Dụng Thực Tế - Less is More)
  const layer2Groups = [
    {
      title: "Quản Trị & Vận Hành",
      icon: <ActivitySquare className="w-5 h-5 text-emerald-500" />,
      items: [
        { 
          id: 'STATUS_UPDATE', name: 'Báo Cáo Tiến Độ (Status Update)', desc: 'Dùng cho các cuộc họp Weekly/Monthly',
          fields: [
            { id: 'progress', label: '1. Tiến Độ Chung', desc: 'Dự án đang On-track, At-risk hay Delayed? Tóm tắt tình hình.' },
            { id: 'kpis', label: '2. Chỉ Số Đo Lường (KPIs)', desc: 'Các con số đạt được trong kỳ (Doanh thu, leads, v.v.).' },
            { id: 'blockers', label: '3. Vấn đề tồn đọng (Blockers)', desc: 'Những khó khăn đang cản trở tiến độ.' },
            { id: 'nextSteps', label: '4. Kế Hoạch Tiếp Theo', desc: 'Hành động cụ thể để giải quyết vấn đề và đi tiếp.' }
          ]
        },
        { 
          id: 'PROJECT_KICKOFF', name: 'Khởi Động Dự Án (Kick-off)', desc: 'Đồng bộ mục tiêu và kế hoạch với team',
          fields: [
            { id: 'goal', label: '1. Mục Tiêu Dự Án', desc: 'Lý do dự án này tồn tại và đích đến là gì?' },
            { id: 'scope', label: '2. Phạm Vi & Ranh Giới', desc: 'Dự án sẽ làm những gì và KHÔNG làm những gì?' },
            { id: 'timeline', label: '3. Tiến Độ (Timeline)', desc: 'Các cột mốc thời gian quan trọng (Milestones).' },
            { id: 'roles', label: '4. Phân Công Vai Trò', desc: 'Ai chịu trách nhiệm phần việc nào?' }
          ]
        }
      ]
    },
    {
      title: "Đề Xuất & Thuyết Phục",
      icon: <Target className="w-5 h-5 text-orange-500" />,
      items: [
        { 
          id: 'PITCHING', name: 'Đề Xuất Phê Duyệt / Ngân Sách', desc: 'Thuyết phục Sếp hoặc Đối tác cấp ngân sách',
          fields: [
            { id: 'context', label: '1. Bối Cảnh Nhu Cầu', desc: 'Tại sao chúng ta cần đưa ra đề xuất này ngay lúc này?' },
            { id: 'benefits', label: '2. Lợi Ích & ROI', desc: 'Đề xuất này mang lại giá trị gì cho tổ chức?' },
            { id: 'costs', label: '3. Chi Phí & Nguồn Lực', desc: 'Chúng ta cần bao nhiêu tiền, bao nhiêu người, trong bao lâu?' },
            { id: 'risks', label: '4. Rủi Ro & Đề Phòng', desc: 'Rủi ro lớn nhất là gì và phương án phòng ngừa?' }
          ]
        },
        { 
          id: 'INTERNAL_TRAINING', name: 'Đào Tạo & Chia Sẻ', desc: 'Hướng dẫn quy trình hoặc chia sẻ kiến thức mới',
          fields: [
            { id: 'concept', label: '1. Khái Niệm Cốt Lõi', desc: 'Hôm nay chúng ta cần nắm vững điều gì?' },
            { id: 'whyMatters', label: '2. Tại Sao Quan Trọng', desc: 'Kiến thức này giúp ích gì cho công việc hàng ngày?' },
            { id: 'caseStudy', label: '3. Ví Dụ Thực Tế', desc: 'Đưa ra một ví dụ thành công (hoặc thất bại) để minh họa.' },
            { id: 'takeaways', label: '4. Hành Động Yêu Cầu', desc: 'Học viên cần áp dụng điều gì ngay ngày mai?' }
          ]
        }
      ]
    }
  ];

  // Helper function to get current selected template
  const getCurrentTemplate = () => {
    const groups = logicLayer === 'LAYER_1' ? layer1Groups : layer2Groups;
    for (const group of groups) {
      const found = group.items.find(i => i.id === framework);
      if (found) return found;
    }
    // Fallback default
    return layer1Groups[0].items[0]; 
  };

  const currentTemplate = getCurrentTemplate();
  const isFormValid = currentTemplate?.fields.every(f => dynamicBrief[f.id]?.trim());

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        
        {/* Left Column: Dynamic Brief */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-black mb-2">Nội Dung Chi Tiết</h2>
            <p className="text-neutral-400 text-sm">Khung điền thông tin sẽ tự động điều chỉnh theo mẫu bạn vừa chọn.</p>
          </div>

          <div className="space-y-4">
            {currentTemplate.fields.map((field, index) => (
              <div key={field.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <label className="block text-sm font-bold text-blue-400 mb-2 uppercase tracking-wider">{field.label}</label>
                <p className="text-xs text-neutral-500 mb-3">{field.desc}</p>
                <textarea 
                  className="w-full h-24 bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  placeholder="Nhập nội dung vào đây..."
                  value={dynamicBrief[field.id] || ''}
                  onChange={(e) => updateDynamicBrief(field.id, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3-Layer Logic Library */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-black mb-2">Định Dạng Thuyết Trình</h2>
            <p className="text-neutral-400 text-sm">Chọn một mẫu báo cáo phù hợp với nhu cầu của bạn.</p>
          </div>

          {/* Layer Tabs */}
          <div className="flex p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            <button 
              onClick={() => setLogicSelection('LAYER_1', 'PYRAMID')}
              className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all ${logicLayer === 'LAYER_1' ? 'bg-blue-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
            >
              Khung Tư Duy Lõi
            </button>
            <button 
              onClick={() => setLogicSelection('LAYER_2', 'STATUS_UPDATE')}
              className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all ${logicLayer === 'LAYER_2' ? 'bg-emerald-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
            >
              Mẫu Ứng Dụng Thực Tế
            </button>
          </div>

          {/* Render Framework Groups based on Layer */}
          <div className="space-y-6 pt-4">
            {(logicLayer === 'LAYER_1' ? layer1Groups : layer2Groups).map((group, idx) => (
              <div key={idx} className="bg-neutral-900/50 border border-neutral-800/50 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  {group.icon}
                  <h3 className="font-bold text-white">{group.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map(item => (
                    <div 
                      key={item.id}
                      onClick={() => setLogicSelection(logicLayer, item.id)}
                      className={`cursor-pointer border rounded-xl p-4 transition-all ${
                        framework === item.id 
                          ? (logicLayer === 'LAYER_1' ? 'border-blue-500 bg-blue-500/10' : 'border-emerald-500 bg-emerald-500/10')
                          : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                      }`}
                    >
                      <div className="font-bold text-sm mb-1">{item.name}</div>
                      <div className="text-xs text-neutral-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
          Khởi tạo Slide Deck
        </button>
      </div>
    </div>
  );
}
