import React from 'react';
import type { Metadata } from 'next';
import { rdContent } from '@/content/units/rd';
import { RdPageContent } from '@/features/hubs/rd/components/RdPageContent';

export const metadata: Metadata = {
  title: rdContent.seo.title,
  description: rdContent.seo.description,
  openGraph: {
    title: rdContent.seo.title,
    description: rdContent.seo.description,
    images: ['/fnx-og-1200x630.png'],
  },
};

export default function FnxRDPage() {
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
        name: 'FNX-RD',
        item: 'https://fnx.vn/hubs/rd',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RdPageContent />
    </>
  );
}