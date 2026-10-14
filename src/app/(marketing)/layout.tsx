import React from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import ThemeWrapper from '@/components/layout/ThemeWrapper';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      <div className="bg-[#0C1927] min-h-screen text-white flex flex-col font-sans selection:bg-[#1A396C] selection:text-white">
        <SiteHeader transparentOnTop={true} />
        <Breadcrumbs />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
      </div>
    </ThemeWrapper>
  );
}
