import React from 'react';
import type { Metadata } from 'next';
import { scContent } from '@/content/units/sc';
import { ScPageContent } from '@/features/hubs/sc/components/ScPageContent';

export const metadata: Metadata = {
  title: scContent.seo.title,
  description: scContent.seo.description,
  openGraph: {
    title: scContent.seo.title,
    description: scContent.seo.description,
    images: ['/fnx-og-1200x630.png'],
  },
};

export default function FnxSCPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://fnx.vn/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Hệ sinh thái',
        item: 'https://fnx.vn/#ecosystem',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'FNX-SC',
        item: 'https://fnx.vn/hubs/sc',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScPageContent />
    </>
  );
}