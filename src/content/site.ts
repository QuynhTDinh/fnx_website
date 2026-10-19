/**
 * Thông tin chung toàn site FNX
 * Theo Spec 01 (Mục 1, 4, 5)
 */

export type ThemeKey = 'group' | 'rd' | 'sc' | 'm';

export interface SiteConfig {
  company: {
    fullName: string;
    shortName: string;
    address: string;
    addressMapUrl: string;
    addressEmbedUrl: string;
    email: string;
    hotlineDisplay: string;
    hotlineTel: string;
    website: string;
  };
  navigation: {
    ecosystemDropdown: Array<{
      title: string;
      href: string;
      unitKey?: ThemeKey;
    }>;
    mainMenu: Array<{
      title: string;
      href: string;
    }>;
    affiliateMenu?: Array<{
      title: string;
      href: string;
    }>;
  };
  navProducts: NavProductColumn[];
  footer: {
    quickLinks: Array<{
      title: string;
      href: string;
    }>;
    legalLinks: Array<{
      title: string;
      href: string;
    }>;
  };
  taglines: Record<ThemeKey, string>;
  themeLogos: Record<ThemeKey, {
    light: string;
    dark: string;
    alt: string;
  }>;
}

export interface NavProductItem {
  name: string;
  href: string;
}

export interface NavProductColumn {
  num: string;
  title: string;
  href: string;
  items: NavProductItem[];
}

export const siteConfig: SiteConfig = {
  company: {
    fullName: 'CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN FNX GROUP',
    shortName: 'FNX Group',
    address: '173B Trường Chinh, Thanh Xuân, Hà Nội',
    addressMapUrl: 'https://maps.app.goo.gl/R4UwoqB9h18WuRCS9?g_st=ic',
    addressEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.818816999015!2d105.82775797587027!3d21.000096688768057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad007262def9%3A0xc1747dc9424fd249!2zQ8O0bmcgdHkgQ1AgxJHhuqd1IHTGsCBwaMOhdCB0cmnhu4NuIEZOWCBHcm91cA!5e0!3m2!1svi!2s!4v1713200000000!5m2!1svi!2s',
    email: 'info@fnx.vn',
    hotlineDisplay: '0898 291 618',
    hotlineTel: '+84898291618',
    website: 'fnx.vn',
  },
  navigation: {
    ecosystemDropdown: [
      { title: 'Về FNX Group', href: '/about', unitKey: 'group' },
      { title: 'FNX-RD', href: '/hubs/rd', unitKey: 'rd' },
      { title: 'FNX-SC', href: '/hubs/sc', unitKey: 'sc' },
      { title: 'FNX-M', href: '/hubs/m', unitKey: 'm' },
    ],
    mainMenu: [
      { title: 'Tuyển dụng', href: '/careers' },
      { title: 'Tin tức', href: '/news' },
      { title: 'Liên hệ', href: '/engage' },
    ],
  },
  navProducts: [
    {
      num: '01',
      title: 'Nghiên cứu & Đổi mới sáng tạo (R&D)',
      href: '/hubs/rd#nghien-cuu-doi-moi',
      items: [
        { name: 'Nghiên cứu công nghệ lõi', href: '/hubs/rd#nghien-cuu-doi-moi' },
        { name: 'Dự án nghiên cứu & thực nghiệm', href: '/hubs/rd#nghien-cuu-doi-moi' },
        { name: 'Chuyển giao công nghệ', href: '/hubs/rd#nghien-cuu-doi-moi' },
      ],
    },
    {
      num: '02',
      title: 'Giải pháp cho dự án',
      href: '/hubs/rd#xay-dung-co-ban',
      items: [
        { name: 'Quản lý & Triển khai dự án', href: '/hubs/rd#xay-dung-co-ban' },
        { name: 'Tư vấn đầu tư & Quản lý dự án', href: '/hubs/rd#xay-dung-co-ban' },
        { name: 'Cung ứng dự án', href: '/hubs/sc#cung-ung-du-an' },
      ],
    },
    {
      num: '03',
      title: 'Sản phẩm & Giải pháp công nghiệp',
      href: '/hubs/sc#xu-ly-be-mat',
      items: [
        { name: 'Xử lý bề mặt', href: '/hubs/sc#xu-ly-be-mat' },
        { name: 'Hóa chất & Nguyên vật liệu', href: '/hubs/sc#hoa-chat-nguyen-vat-lieu' },
        { name: 'Đại diện thương mại', href: '/hubs/sc#dai-dien-thuong-mai' },
      ],
    },
    {
      num: '04',
      title: 'Giải pháp số',
      href: '/hubs/rd#san-pham-so',
      items: [
        { name: 'CO² Platform', href: '/hubs/rd#san-pham-so' },
        { name: 'CO² CSF', href: '/hubs/rd#san-pham-so' },
        { name: 'CO² CCS', href: '/hubs/rd#san-pham-so' },
        { name: 'CO² PIM', href: '/hubs/rd#san-pham-so' },
        { name: 'FNX OP', href: '/hubs/rd#san-pham-so' },
      ],
    },
  ],
  footer: {
    quickLinks: [
      { title: 'Về chúng tôi', href: '/about' },
      { title: 'Tuyển dụng', href: '/careers' },
      { title: 'Tin tức', href: '/news' },
      { title: 'Liên hệ', href: '/engage' },
    ],
    legalLinks: [
      { title: 'Chính sách bảo mật', href: '/privacy' },
      { title: 'Điều khoản dịch vụ', href: '/terms' },
    ],
  },
  taglines: {
    group: 'Shaping surface – Shaping future',
    rd: 'Research today – Solutions for tomorrow',
    sc: 'Green supply – Sustainable growth',
    m: 'Manufacturing Gold',
  },
  themeLogos: {
    group: {
      light: '/assets/logo-fnx-1.png',
      dark: '/assets/logo-fnx-1.png',
      alt: 'FNX Group',
    },
    rd: {
      light: '/assets/logo-fnx-1.png',
      dark: '/assets/logo-fnx-1.png',
      alt: 'FNX Group',
    },
    sc: {
      light: '/assets/logo-fnx-1.png',
      dark: '/assets/logo-fnx-1.png',
      alt: 'FNX Group',
    },
    m: {
      light: '/assets/logo-fnx-1.png',
      dark: '/assets/logo-fnx-1.png',
      alt: 'FNX Group',
    },
  },
};
