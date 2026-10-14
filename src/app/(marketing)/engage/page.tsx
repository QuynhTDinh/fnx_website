import React from 'react';
import type { Metadata } from 'next';
import { EngageContent } from '@/features/engage/components/EngageContent';

export const metadata: Metadata = {
  title: 'Liên hệ & Hợp tác | FNX Group',
  description:
    'Kết nối với FNX Group, FNX-RD và FNX-SC để nhận tư vấn giải pháp, cung ứng vật liệu hoặc yêu cầu hồ sơ năng lực doanh nghiệp.',
  openGraph: {
    title: 'Liên hệ & Hợp tác | FNX Group',
    description:
      'Kết nối với FNX Group, FNX-RD và FNX-SC để nhận tư vấn giải pháp, cung ứng vật liệu hoặc yêu cầu hồ sơ năng lực doanh nghiệp.',
    images: ['/fnx-og-1200x630.png'],
  },
};

export default function EngagePage() {
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
        name: 'Liên hệ',
        item: 'https://fnx.vn/engage',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EngageContent />
    </>
  );
}
