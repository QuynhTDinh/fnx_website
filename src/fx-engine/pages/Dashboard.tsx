// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePresentationStore from '../store/usePresentationStore';
import { generatePresentation } from '../services/aiParser';
import { Sparkles, Activity } from 'lucide-react';

import StepIntention from '../components/wizard/StepIntention';
import StepBriefAndLogic from '../components/wizard/StepBriefAndLogic';
import StepProcessing from '../components/wizard/StepProcessing';

export default function Dashboard() {
  const navigate = useNavigate();
  const { currentStep, objective, audience, dynamicBrief, logicModel, template, setPresentationData } = usePresentationStore();
  const [statusText, setStatusText] = useState("");

  const handleGenerate = async () => {
    setStatusText(`Đang phân tích cấu trúc ${logicModel}...`);
    
    try {
      const payload = {
        objective,
        audience,
        brief: dynamicBrief, // Object chứa dữ liệu của Layer 2 (ví dụ: Tiến độ, KPI)
        logicModel, // Lõi tư duy thế giới (ví dụ: SCQA)
        template // Mẫu ứng dụng (ví dụ: STATUS_UPDATE)
      };
      
      const resultJSON = await generatePresentation(payload);
      setPresentationData(resultJSON);
      navigate('/fx-engine/view');
    } catch (error) {
      console.error("Failed to generate", error);
      setStatusText("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 font-sans pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-neutral-900 pb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-blue-500" />
              FX-Engine <span className="text-neutral-600 font-light ml-2">Copilot Wizard</span>
            </h1>
          </div>
          
          {/* Progress Indicators */}
          {statusText === "" && (
            <div className="flex gap-2">
              {[1, 2].map(step => (
                <div 
                  key={step} 
                  className={`w-16 h-2 rounded-full transition-all duration-500 ${currentStep >= step ? 'bg-blue-500' : 'bg-neutral-800'}`}
                />
              ))}
            </div>
          )}
        </header>

        {statusText !== "" ? (
          <StepProcessing statusText={statusText} />
        ) : (
          <>
            {currentStep === 1 && <StepIntention />}
            {currentStep === 2 && <StepBriefAndLogic onGenerate={() => {
              // Bật loading
              setStatusText("Đang tổng hợp dữ liệu SCQA...");
              handleGenerate();
            }} />}
          </>
        )}
      </div>
    </div>
  );
}

