'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { searchClient, type SearchItem } from '@/lib/search';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) {
      setResults(searchClient(val, 8));
    } else {
      setResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-100">
          <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Tìm sản phẩm, giải pháp, nhóm khách hàng..."
            className="w-full text-base text-gray-900 placeholder-gray-400 bg-transparent outline-none font-sans"
          />
          {query && (
            <button 
              onClick={() => { setQuery(''); setResults([]); }}
              className="p-1 text-gray-400 hover:text-gray-600 mr-1"
              aria-label="Xóa nội dung"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded text-xs font-medium ml-2"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-sm text-gray-500">
              Nhập từ khóa để tìm kiếm giải pháp R&D, danh mục hóa chất, dịch vụ mạ...
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1">
              {results.map((item) => {
                let badgeBg = "bg-gray-100 text-gray-700";
                if (item.unit === 'RD') badgeBg = "bg-sky-50 text-[#0196D0] border border-sky-200";
                if (item.unit === 'SC') badgeBg = "bg-teal-50 text-[#00928F] border border-teal-200";
                if (item.unit === 'Group') badgeBg = "bg-blue-50 text-[#1A396C] border border-blue-200";

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-start justify-between p-3 rounded-md hover:bg-gray-50 transition-colors group"
                  >
                    <div className="pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${badgeBg}`}>
                          {item.unit}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[var(--theme-primary)] transition-colors">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--theme-primary)] group-hover:translate-x-1 transition-all mt-2 flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-10 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Không tìm thấy kết quả phù hợp với &quot;<span className="font-semibold text-gray-800">{query}</span>&quot;
              </p>
              <Link
                href="/engage"
                onClick={onClose}
                className="inline-flex items-center text-sm font-semibold text-[var(--theme-primary)] hover:underline"
              >
                Liên hệ FNX để được tư vấn trực tiếp
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
          <span>Tìm kiếm tức thì B2B</span>
          <span className="flex items-center gap-1">
            Nhấn <CornerDownLeft className="w-3 h-3 inline" /> để điều hướng
          </span>
        </div>
      </div>
    </div>
  );
}
