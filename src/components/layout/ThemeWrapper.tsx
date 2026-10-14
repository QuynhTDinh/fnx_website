'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ThemeKey } from '@/content/site';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const currentTheme: ThemeKey = 
    pathname.startsWith('/hubs/rd') ? 'rd' :
    pathname.startsWith('/hubs/sc') ? 'sc' :
    pathname.startsWith('/hubs/m') ? 'm' :
    'group';

  return (
    <div data-theme={currentTheme} className="contents">
      {children}
    </div>
  );
}
