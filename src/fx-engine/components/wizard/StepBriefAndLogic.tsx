// @ts-nocheck
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

  // --- LAYER 2: Functional Templates (Mẫu Ứng Dụng Thực Tế - 7 Mẫu / 5 Nhóm) ---
  const layer2Groups = [
    {
      title: "1. Báo Cáo & Đánh Giá (Inform & Review)",
      icon: <ActivitySquare className="w-5 h-5 text-emerald-500" />,
      items: [
        { 
          id: 'STATUS_UPDATE', name: 'Báo Cáo Tiến Độ (Status Update)', desc: 'Dành cho họp giao ban Weekly/Monthly',
          fields: [
            { id: 'progress', label: '1. Tiến Độ Chung', desc: 'Tóm tắt dự án (On-track / Delayed).' },
            { id: 'kpis', label: '2. Chỉ Số (KPIs)', desc: 'Các con số đạt được.' },
            { id: 'blockers', label: '3. Rào Cản (Blockers)', desc: 'Những khó khăn đang gặp phải.' },
            { id: 'nextSteps', label: '4. Kế Hoạch Tiếp Theo', desc: 'Hành động để đi tiếp.' }
          ]
        },
        { 
          id: 'QBR', name: 'Đánh Giá Định Kỳ (QBR)', desc: 'Dành cho báo cáo tổng kết quý/tháng',
          fields: [
            { id: 'highlights', label: '1. Kết Quả Nổi Bật', desc: 'Những thành tựu lớn nhất.' },
            { id: 'variance', label: '2. Chỉ Số Chênh Lệch', desc: 'Thực tế so với Target (Tốt/Xấu).' },
            { id: 'learnings', label: '3. Bài Học Rút Ra', desc: 'Phân tích nguyên nhân đằng sau các con số.' },
            { id: 'nextFocus', label: '4. Trọng Tâm Kỳ Tới', desc: 'Mục tiêu của quý/tháng sau.' }
          ]
        }
      ]
    },
    {
      title: "2. Đề Xuất & Thuyết Phục (Persuade)",
      icon: <Target className="w-5 h-5 text-orange-500" />,
      items: [
        { 
          id: 'BUSINESS_CASE', name: 'Đề Xuất Ngân Sách / Dự Án', desc: 'Dành cho việc xin tiền, xin người',
          fields: [
            { id: 'problem', label: '1. Bài Toán & Cơ Hội', desc: 'Tại sao cần đề xuất này ngay lúc này?' },
            { id: 'roi', label: '2. Lợi Ích & ROI', desc: 'Tiền hoặc giá trị mang lại là bao nhiêu?' },
            { id: 'cost', label: '3. Chi Phí Yêu Cầu', desc: 'Cần bao nhiêu tiền, nhân sự, thời gian?' },
            { id: 'risks', label: '4. Rủi Ro', desc: 'Rủi ro lớn nhất và cách phòng ngừa.' }
          ]
        },
        { 
          id: 'SALES_PITCH', name: 'Đề Xuất Bán Hàng (Sales Pitch)', desc: 'Dành cho B2B Sales, đi gặp đối tác',
          fields: [
            { id: 'painPoints', label: '1. Nỗi Đau Khách Hàng', desc: 'Vấn đề mà khách hàng đang đau đầu.' },
            { id: 'solution', label: '2. Giải Pháp Của Chúng Tôi', desc: 'Sản phẩm/dịch vụ giải quyết vấn đề đó thế nào.' },
            { id: 'evidence', label: '3. Bằng Chứng', desc: 'Các Case Study đã thành công.' },
            { id: 'cta', label: '4. Kêu Gọi Hành Động', desc: 'Bước tiếp theo là gì (Ký hợp đồng, Demo...)?' }
          ]
        }
      ]
    },
    {
      title: "3. Đồng Thuận & Quyết Định (Decide)",
      icon: <Layers className="w-5 h-5 text-purple-500" />,
      items: [
        { 
          id: 'BOD_MEETING', name: 'Họp Ban Điều Hành (SteerCo/BOD)', desc: 'Dành cho C-Level, báo cáo cấp cao',
          fields: [
            { id: 'execSummary', label: '1. Tóm Tắt Tình Hình', desc: 'Executive Summary cực ngắn gọn.' },
            { id: 'redFlags', label: '2. Điểm Báo Động', desc: 'Các "Red Flags" cần BOD can thiệp.' },
            { id: 'options', label: '3. Các Lựa Chọn', desc: 'Trình bày 2-3 phương án giải quyết (Options).' },
            { id: 'recommendation', label: '4. Đề Xuất', desc: 'Lời khuyên cuối cùng từ góc độ người trình bày.' }
          ]
        }
      ]
    },
    {
      title: "4. Đào Tạo & Tiêu Chuẩn (Educate)",
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      items: [
        { 
          id: 'INTERNAL_TRAINING', name: 'Đào Tạo Nội Bộ (Training)', desc: 'Dành cho HR, Leader hướng dẫn quy trình',
          fields: [
            { id: 'concept', label: '1. Khái Niệm Lõi', desc: 'Hôm nay học/chia sẻ về cái gì?' },
            { id: 'whyMatters', label: '2. Tại Sao Quan Trọng', desc: 'Ý nghĩa của kiến thức này.' },
            { id: 'caseStudy', label: '3. Tình Huống Thực Tế', desc: 'Ví dụ áp dụng (Case Study).' },
            { id: 'takeaways', label: '4. Hành Động Yêu Cầu', desc: 'Học viên cần làm gì ngay ngày mai.' }
          ]
        }
      ]
    },
    {
      title: "5. Truyền Thông & Gắn Kết (Inspire)",
      icon: <Presentation className="w-5 h-5 text-pink-500" />,
      items: [
        { 
          id: 'TOWNHALL', name: 'Họp Toàn Công Ty (Townhall)', desc: 'Dành cho BOD truyền thông nội bộ',
          fields: [
            { id: 'bigPicture', label: '1. Bức Tranh Lớn', desc: 'Cập nhật tầm nhìn, chiến lược công ty.' },
            { id: 'recognition', label: '2. Vinh Danh', desc: 'Ghi nhận các cá nhân/tập thể xuất sắc.' },
            { id: 'announcements', label: '3. Thông Báo Mới', desc: 'Thay đổi về chính sách, nhân sự.' },
            { id: 'qa', label: '4. Tiêu Điểm Hỏi Đáp', desc: 'Những câu hỏi nóng đang được quan tâm nhất.' }
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
