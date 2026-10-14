/**
 * Dữ liệu trang FNX-RD theo Spec 03
 */

export interface CatalogItem {
  id: string;
  name: string;
  desc: string;
  iconName?: string;
  thumbnail?: string;
}

export interface CatalogGroup {
  id: string;
  number: string;
  title: string;
  items: CatalogItem[];
}

export interface UnitContent {
  unitKey: 'rd';
  name: string;
  theme: 'rd';
  hero: {
    breadcrumbs: Array<{ label: string; href: string }>;
    titlePart1: string;
    titlePart2: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    image: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
  };
  catalog: {
    id: string;
    title: string;
    description: string;
    groups: CatalogGroup[];
  };
  profile: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  ctaBanner: {
    title: string;
    ctaText: string;
    ctaHref: string;
    image: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export const rdContent: UnitContent = {
  unitKey: 'rd',
  name: 'FNX-RD',
  theme: 'rd',
  hero: {
    breadcrumbs: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Hệ sinh thái', href: '/#ecosystem' },
      { label: 'FNX-RD', href: '/hubs/rd' },
    ],
    titlePart1: 'Từ ý tưởng',
    titlePart2: 'đến giải pháp công nghiệp',
    description:
      'Chúng tôi nghiên cứu và phát triển, dẫn dắt đổi mới sáng tạo và chuyển hóa ý tưởng thành các giải pháp có giá trị cho ngành công nghiệp.',
    ctaText: 'Liên hệ FNX-RD',
    ctaHref: '/engage?unit=rd',
    image: '/assets/bannerRD.png',
  },
  intro: {
    eyebrow: 'GIỚI THIỆU',
    title: 'Giới thiệu FNX-RD',
    description:
      'FNX-RD là đơn vị thành viên của hệ sinh thái FNX Group, cung cấp các giải pháp Tư vấn và Triển khai dự án, Nghiên cứu khoa học & Đổi mới sáng tạo và Nhân lực số cho ngành Hóa chất – Dầu khí, Công nghiệp hỗ trợ và Đầu tư xây dựng. Với đội ngũ chuyên gia giàu kinh nghiệm và mạng lưới đối tác, chúng tôi đồng hành cùng Chủ đầu tư kiểm soát tiến độ, chất lượng, chi phí và rủi ro của dự án.',
    ctaText: 'Xem sản phẩm & dịch vụ ↓',
    ctaHref: '#san-pham-dich-vu',
    image: '/images/ecosystem/vasi_rd_sc_bento.png',
    imageAlt: 'Phòng thí nghiệm và chuyên gia nghiên cứu FNX-RD',
  },
  catalog: {
    id: 'san-pham-dich-vu',
    title: 'Sản phẩm & Dịch vụ',
    description: 'Khám phá các nhóm giải pháp của FNX-RD',
    groups: [
      {
        id: 'nghien-cuu-doi-moi',
        number: '01.',
        title: 'Nghiên cứu & Đổi mới sáng tạo (R&D)',
        items: [
          {
            id: 'rd-01',
            name: 'Nghiên cứu công nghệ lõi',
            desc: 'Nghiên cứu, làm chủ công nghệ lõi phục vụ ngành hóa chất, dầu khí và công nghiệp hỗ trợ',
            iconName: 'Search',
          },
          {
            id: 'rd-02',
            name: 'Dự án nghiên cứu & thực nghiệm',
            desc: 'Thực hiện các dự án nghiên cứu, thử nghiệm và thực nghiệm cùng doanh nghiệp và đơn vị nghiên cứu',
            iconName: 'Lightbulb',
          },
          {
            id: 'rd-03',
            name: 'Tiếp nhận & Chuyển giao công nghệ',
            desc: 'Tiếp nhận, làm chủ công nghệ được chuyển giao và đưa kết quả nghiên cứu vào thực tiễn doanh nghiệp',
            iconName: 'ArrowLeftRight',
          },
        ],
      },
      {
        id: 'xay-dung-co-ban',
        number: '02.',
        title: 'Giải pháp cho dự án',
        items: [
          {
            id: 'rd-04',
            name: 'Quản lý & Triển khai dự án',
            desc: 'Quản lý và tổ chức triển khai dự án: tư vấn thiết kế, đấu thầu, tối ưu giải pháp và thi công hệ thống kỹ thuật',
            iconName: 'PenTool',
          },
          {
            id: 'rd-05',
            name: 'Tư vấn đầu tư & Quản lý dự án',
            desc: 'Tư vấn chuẩn bị đầu tư; quản lý tiến độ, chi phí, chất lượng, hợp đồng và rủi ro dự án',
            iconName: 'FileText',
          },
          {
            id: 'rd-06',
            name: 'Cung ứng dự án',
            desc: 'Cung ứng hóa chất xây dựng, gạch ốp lát – thiết bị vệ sinh và các vật tư khác đạt tiêu chuẩn kỹ thuật cho dự án',
            iconName: 'PackageCheck',
          },
          {
            id: 'rd-07',
            name: 'Kính điện thông minh & Sơn chống cháy',
            desc: 'Tư vấn và triển khai giải pháp kính điện thông minh, sơn chống cháy cho dự án xây dựng',
            iconName: 'ShieldAlert',
          },
        ],
      },
      {
        id: 'san-pham-so',
        number: '03.',
        title: 'Giải pháp số',
        items: [
          {
            id: 'rd-09',
            name: 'CO² Platform',
            desc: 'Nền tảng kết nối nhân sự chất lượng cao với doanh nghiệp và dự án phù hợp, gồm hai hệ thống CO² CSF và CO² CCS',
            iconName: 'Users',
          },
          {
            id: 'rd-10',
            name: 'CO² CSF',
            desc: 'Hệ thống đào tạo, phát triển năng lực cốt lõi cho cá nhân: tư duy, kỹ năng và phẩm chất nghề nghiệp',
            iconName: 'BrainCircuit',
          },
          {
            id: 'rd-11',
            name: 'CO² CCS',
            desc: 'Hệ thống giúp doanh nghiệp xây dựng bộ máy và bố trí đúng người, đúng vị trí để vận hành hiệu quả',
            iconName: 'Building2',
          },
          {
            id: 'rd-08',
            name: 'CO² PIM',
            desc: 'Phần mềm quản lý dự án giúp Chủ đầu tư và Nhà thầu theo dõi tiến độ, chất lượng, chi phí và hồ sơ dự án trên một nền tảng',
            iconName: 'LayoutDashboard',
          },
          {
            id: 'rd-12',
            name: 'FNX OP',
            desc: 'Phần mềm vận hành doanh nghiệp, giúp quản lý công việc, quy trình và dữ liệu vận hành trên một hệ thống',
            iconName: 'Sliders',
          },
        ],
      },
    ],
  },
  profile: {
    title: 'Hồ sơ năng lực FNX-RD',
    description:
      'Tìm hiểu chi tiết năng lực, mô hình tổ chức và các giải pháp của FNX-RD. Gửi yêu cầu, chúng tôi sẽ gửi hồ sơ qua email của bạn.',
    ctaText: 'Yêu cầu hồ sơ năng lực',
    ctaHref: '/engage?unit=rd&topic=ho-so-rd',
  },
  ctaBanner: {
    title: 'Bạn đang tìm kiếm giải pháp cho dự án\nhoặc bài toán công nghiệp?',
    ctaText: 'Liên hệ FNX-RD',
    ctaHref: '/engage?unit=rd',
    image: '/images/banner/Hero.jpg',
  },
  seo: {
    title: 'FNX-RD – Nghiên cứu, đổi mới sáng tạo và triển khai dự án | FNX Group',
    description:
      'FNX-RD cung cấp nghiên cứu khoa học, chuyển giao công nghệ, tư vấn và triển khai dự án công nghiệp, cùng các sản phẩm số CO² PIM và CO² Platform (CSF, CCS).',
  },
};
