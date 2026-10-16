'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ChevronDown,
  Search,
  Lightbulb,
  ArrowLeftRight,
  PenTool,
  FileText,
  PackageCheck,
  ShieldAlert,
  LayoutDashboard,
  Users,
  BrainCircuit,
  Building2,
  Package,
  Box,
  Sliders,
  Settings,
  LucideIcon,
} from 'lucide-react';
import { CatalogGroup, CatalogItem, CatalogSubgroup } from '@/content/units/rd';
import { getExpertsByGroup } from '@/content/experts';

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Lightbulb,
  ArrowLeftRight,
  PenTool,
  FileText,
  PackageCheck,
  ShieldAlert,
  LayoutDashboard,
  Users,
  BrainCircuit,
  Building2,
  Package,
  Box,
  Sliders,
  Settings,
};

interface UnitAccordionProps {
  groups: CatalogGroup[];
  themeColor?: string; // hex or CSS variable
  variant?: 'icon' | 'thumbnail';
  defaultAllOpen?: boolean;
  headerBgColor?: string;
  itemWidthDesktop?: string;
  unit?: 'rd' | 'sc';
}

export function UnitAccordion({
  groups,
  themeColor = 'var(--theme-primary, #0284C7)',
  variant = 'icon',
  defaultAllOpen = false,
  headerBgColor,
  itemWidthDesktop,
  unit,
}: UnitAccordionProps) {
  // Mặc định: Nếu defaultAllOpen thì mở hết, ngược lại mở nhóm 01
  const [openGroupIds, setOpenGroupIds] = useState<string[]>(() => {
    if (defaultAllOpen) {
      return groups.map((g) => g.id);
    }
    return groups.length > 0 ? [groups[0].id] : [];
  });

  const isInitialMount = useRef(true);
  const nameWidth = itemWidthDesktop || (variant === 'thumbnail' ? 'md:w-[35%]' : 'md:w-[32%]');

  const handleExpertJump = (expertId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(`cg-${expertId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('flash-highlight');
      setTimeout(() => {
        el.classList.remove('flash-highlight');
      }, 1600);
    }
  };

  // Xử lý deep-linking qua URL hash (#xay-dung-co-ban, #nghien-cuu-doi-moi, v.v.)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      let targetGroup = groups.find((g) => g.id === hash);
      if (!targetGroup) {
        targetGroup = groups.find((g) =>
          g.items?.some((it) => it.id === hash) ||
          g.subgroups?.some((sub) => sub.id === hash || sub.items.some((it) => it.id === hash))
        );
      }

      if (targetGroup) {
        setOpenGroupIds((prev) => (prev.includes(targetGroup.id) ? prev : [...prev, targetGroup.id]));

        const scrollToTarget = () => {
          const el = document.getElementById(hash) || document.getElementById(targetGroup.id);
          if (el) {
            const yOffset = -90;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        };

        // Thử cuộn ở nhiều mốc thời gian để phòng ngừa Next.js client transition và layout reflow
        setTimeout(scrollToTarget, 50);
        setTimeout(scrollToTarget, 200);
        setTimeout(scrollToTarget, 500);
      }
    };

    // Kiểm tra ngay khi mount và sau đó phòng trường hợp router gán hash sau khi hydrate
    handleHashChange();
    const t1 = setTimeout(handleHashChange, 150);
    const t2 = setTimeout(handleHashChange, 400);

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [groups]);

  const toggleGroup = (groupId: string) => {
    setOpenGroupIds((prev) =>
      prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId]
    );
  };

  return (
    <div className="w-full space-y-4">
      {groups.map((group) => {
        const isOpen = openGroupIds.includes(group.id);
        const groupExperts = getExpertsByGroup(group.id, unit);

        return (
          <div
            key={group.id}
            id={group.id}
            className="w-full rounded-lg border border-[#DCE3EC] bg-white overflow-hidden transition-shadow duration-200 hover:shadow-sm"
          >
            {/* Header Nhóm */}
            <button
              type="button"
              onClick={() => toggleGroup(group.id)}
              aria-expanded={isOpen}
              aria-controls={`group-content-${group.id}`}
              className={`w-full h-16 px-6 flex items-center justify-between text-left select-none transition-colors duration-200 ${
                headerBgColor ? '' : 'bg-[#F8FAFC] hover:bg-[#F1F5F9]'
              }`}
              style={headerBgColor ? { backgroundColor: headerBgColor } : undefined}
            >
              <div className="flex items-center gap-3">
                <span
                  style={{ color: themeColor }}
                  className="font-mono font-bold text-lg md:text-xl"
                >
                  {group.number}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                  {group.title}
                </h3>
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="text-gray-500 flex items-center justify-center p-1"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            {/* Nội dung danh mục sản phẩm / dịch vụ */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`group-content-${group.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden border-t border-[#DCE3EC]"
                >
                  <div className="divide-y divide-gray-100">
                    {(() => {
                      const renderItem = (item: CatalogItem) => {
                        const IconComponent = item.iconName ? (ICON_MAP[item.iconName] || Search) : Search;

                        return (
                          <div
                            key={item.id}
                            id={item.id}
                            className="min-h-[58px] py-4.5 px-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 hover:bg-gray-50/70 transition-colors"
                          >
                            {/* Visual: Icon (variant === 'icon') hoặc Thumbnail (variant === 'thumbnail') */}
                            {variant === 'thumbnail' ? (
                              <div className="shrink-0 w-14 h-10 rounded overflow-hidden bg-[#E6F4F2] border border-[#00756F]/20 flex items-center justify-center">
                                {item.thumbnail ? (
                                  <Image
                                    src={item.thumbnail}
                                    alt={item.name}
                                    width={56}
                                    height={40}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <Package className="w-5 h-5 text-[#00756F]/70" />
                                )}
                              </div>
                            ) : (
                              /* Icon 24px */
                              <div
                                style={{ color: themeColor }}
                                className="shrink-0 w-9 h-9 rounded-full bg-blue-50/60 flex items-center justify-center"
                              >
                                <IconComponent className="w-4.5 h-4.5 md:w-5 md:h-5" />
                              </div>
                            )}

                            {/* Tên dịch vụ / sản phẩm */}
                            <div className={`${nameWidth} shrink-0`}>
                              <span className="text-base md:text-[17px] font-semibold text-gray-900 leading-snug break-words">
                                {item.name}
                              </span>
                            </div>

                            {/* Mô tả một dòng (phần còn lại) */}
                            <div className="flex-grow">
                              <p className="text-sm md:text-[15.5px] text-gray-600 leading-relaxed break-words">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        );
                      };

                      if (group.subgroups && group.subgroups.length > 0) {
                        return group.subgroups.map((subgroup, subIdx) => (
                          <div key={subgroup.id || `sub-${subIdx}`} id={subgroup.id} className="w-full">
                            <div className="bg-[#F8FAFC] px-6 py-2.5 border-b border-t first:border-t-0 border-[#E2E8F0] flex items-center gap-2.5">
                              <div
                                style={{ backgroundColor: themeColor }}
                                className="w-1.5 h-3.5 rounded-xs shrink-0"
                              />
                              <span className="text-xs uppercase tracking-wider font-bold text-gray-800 font-sans">
                                {subgroup.title}
                              </span>
                            </div>
                            <div className="divide-y divide-gray-100">
                              {subgroup.items.map(renderItem)}
                            </div>
                          </div>
                        ));
                      }

                      return group.items?.map(renderItem);
                    })()}
                  </div>

                  {/* Dòng chuyên gia liên kết theo nhóm */}
                  {groupExperts.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2.5 px-6 py-3.5 border-t border-[#DCE3EC] bg-[#FAFCFE] text-sm">
                      <span className="text-gray-500 font-medium">Chuyên gia:</span>
                      <div className="flex flex-wrap items-center gap-2">
                        {groupExperts.map((exp) => (
                          <a
                            key={exp.id}
                            href={`#cg-${exp.id}`}
                            onClick={(e) => handleExpertJump(exp.id, e)}
                            className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-[#DCE3EC] bg-white text-gray-800 text-sm font-medium hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)] transition-all group/chip shadow-xs"
                          >
                            <span className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 bg-blue-100 text-[#132949] group-hover/chip:bg-[var(--theme-primary)] group-hover/chip:text-white transition-colors">
                              {exp.ini}
                            </span>
                            <span>{exp.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
