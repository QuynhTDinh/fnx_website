import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-fnx-dark min-h-screen text-white flex flex-col">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
