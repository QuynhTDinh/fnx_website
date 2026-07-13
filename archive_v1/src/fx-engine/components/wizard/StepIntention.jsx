import React from 'react';
import usePresentationStore from '../../store/usePresentationStore';
import { Target, Users, ArrowRight } from 'lucide-react';

export default function StepIntention() {
  const { objective, audience, updateField, nextStep } = usePresentationStore();

  const handleNext = () => {
    if (objective.trim() && audience.trim()) {
      nextStep();
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black mb-3">Xác định Mục Tiêu</h2>
        <p className="text-neutral-400">Hãy thiết lập bối cảnh chiến lược trước khi đi sâu vào dữ liệu.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Objective */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold">Mục tiêu cốt lõi</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">Bạn muốn đạt được điều gì sau bài thuyết trình này?</p>
          <textarea 
            className="w-full h-32 bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            placeholder="Ví dụ: Đề xuất ngân sách $2M cho dự án FX-Engine và thuyết phục BOD phê duyệt."
            value={objective}
            onChange={(e) => updateField('objective', e.target.value)}
          />
          <div className="flex gap-2 mt-3 flex-wrap">
            {['Xin phê duyệt ngân sách', 'Báo cáo tiến độ', 'Giải quyết khủng hoảng', 'Brainstorm ý tưởng'].map(tag => (
              <button 
                key={tag}
                onClick={() => updateField('objective', tag)}
                className="text-xs px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-full transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold">Khán giả (Audience)</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4">Ai là người sẽ nghe? (Để AI điều chỉnh giọng văn)</p>
          <textarea 
            className="w-full h-32 bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
            placeholder="Ví dụ: Ban Giám Đốc (BOD), những người rất quan tâm đến ROI và rủi ro tài chính."
            value={audience}
            onChange={(e) => updateField('audience', e.target.value)}
          />
          <div className="flex gap-2 mt-3 flex-wrap">
            {['Ban Giám Đốc (BOD)', 'Đội ngũ Nội bộ', 'Khách hàng', 'Nhà Đầu tư'].map(tag => (
              <button 
                key={tag}
                onClick={() => updateField('audience', tag)}
                className="text-xs px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-full transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-8">
        <button 
          onClick={handleNext}
          disabled={!objective.trim() || !audience.trim()}
          className="py-4 px-8 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          Tiếp theo: Dữ liệu & Khung Logic
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
