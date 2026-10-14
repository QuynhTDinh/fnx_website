import { siteConfig, type SiteConfig, type ThemeKey } from '@/content/site';
import { flags, type FeatureFlags } from '@/content/flags';
import { contactTopics, type ContactTopic } from '@/content/contact-topics';
import { partners, type Partner } from '@/content/partners';
import { pagesSeo, defaultSeo, type PageSeo } from '@/content/seo';
import { homeContent, type HomeContent } from '@/content/home';

/**
 * Hàm lấy nội dung Trang chủ
 */
export function getHome(): HomeContent {
  return homeContent;
}

/**
 * Hàm lấy cấu hình toàn site
 */
export function getSite(): SiteConfig {
  return siteConfig;
}

/**
 * Hàm lấy cờ tính năng
 */
export function getFlags(): FeatureFlags {
  return flags;
}

/**
 * Hàm lấy danh sách chủ đề liên hệ
 */
export function getContactTopics(unit?: 'rd' | 'sc' | 'group'): ContactTopic[] {
  if (!unit) return contactTopics;
  return contactTopics.filter(t => t.unit === unit);
}

/**
 * Hàm lấy danh sách đối tác đã duyệt
 */
export function getPartners(): Partner[] {
  return partners.filter(p => p.approved);
}

/**
 * Hàm lấy SEO theo trang
 */
export function getSeo(pageKey: string): PageSeo {
  return pagesSeo[pageKey] || defaultSeo;
}

/**
 * Hàm lấy logo và tagline theo theme
 */
export function getThemeMeta(theme: ThemeKey = 'group') {
  return {
    tagline: siteConfig.taglines[theme] || siteConfig.taglines.group,
    logo: siteConfig.themeLogos[theme] || siteConfig.themeLogos.group,
  };
}
