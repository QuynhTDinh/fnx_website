import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePresentationStore from '../store/usePresentationStore';
import { generatePresentation } from '../services/aiParser';
import { Sparkles, FileText, LayoutTemplate, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [framework, setFramework] = useState('MECE');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const setPresentationData = usePresentationStore(state => state.setPresentationData);

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    
    setIsGenerating(true);
    try {
      // Gọi API Backend thực tế (có fallback)
      const resultJSON = await generatePresentation(inputText, framework);
      setPresentationData(resultJSON);
      navigate('/fx-engine/view');
    } catch (error) {
      console.error("Failed to generate", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-500" />
            FX-Engine
          </h1>
          <p className="text-neutral-400 mt-2 font-medium">Smart Presentation Generator</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-neutral-400" />
                <h2 className="text-lg font-bold">Raw Data Brief</h2>
              </div>
              <textarea 
                className="w-full h-64 bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                placeholder="Paste your raw content, meeting notes, or ideas here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <LayoutTemplate className="w-5 h-5 text-neutral-400" />
                <h2 className="text-lg font-bold">Logic Framework</h2>
              </div>
              
              <div className="space-y-3">
                {['MECE', 'A3_THINKING', 'SCQA'].map((fw) => (
                  <label 
                    key={fw} 
                    className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                      framework === fw 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="framework" 
                        value={fw} 
                        checked={framework === fw}
                        onChange={() => setFramework(fw)}
                        className="hidden"
                      />
                      <div className="font-semibold">{fw.replace('_', ' ')}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !inputText.trim()}
              className="w-full py-4 px-6 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? 'Generating...' : 'Generate Slides'}
              {!isGenerating && <ArrowRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
