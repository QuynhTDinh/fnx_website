/**
 * Dữ liệu Trang chủ (Homepage /)
 * Theo Spec 02 & Mockup chính thức
 */

export interface ChallengeItem {
  id: string;
  number: string;
  label: string;
  question: string;
  solution?: string;
  unitHref?: string;
}

export interface AudienceCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  targetUnit: 'rd' | 'sc';
  image: string;
  alt: string;
}

export interface HomeContent {
  s1Hero: {
    vidyardId: string;
    titlePart1: string;
    titlePart2: string;
    ctaText: string;
    ctaHref: string;
  };
  s2Ecosystem: {
    title: string;
    subtitle: string;
    description: string;
  };
  s3VisionMission: {
    eyebrow: string;
    title: string;
    subtitle: string;
    manifestos: Array<{
      id: string;
      number: string;
      statement: string;
      description: string;
    }>;
  };
  s4Challenges: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    items: ChallengeItem[];
  };
  s5AudienceSolutions: {
    eyebrow: string;
    title: string;
    description: string;
    cards: AudienceCardItem[];
  };
  s6Partnership: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    image: string;
  };
  s7Partners: {
    title: string;
  };
}

export const homeContent: HomeContent = {
  s1Hero: {
    vidyardId: 'aCQhutxjmcNqJ1xFQrdcNZ',
    titlePart1: 'Shaping surface',
    titlePart2: 'Shaping future',
    ctaText: 'Kết nối chuỗi giá trị',
    ctaHref: '/engage',
  },
  s2Ecosystem: {
    title: 'HỆ SINH THÁI CÔNG NGHIỆP',
    subtitle: 'CONNECT & CONNECT ECOSYSTEM',
    description: 'Dành cho các doanh nghiệp trong ngành Hóa chất - Dầu khí và Công nghiệp hỗ trợ, FNX là hệ sinh thái kiến tạo giá trị công nghiệp, giúp chuyển hóa những bài toán thực tiễn thành năng lực cạnh tranh thông qua kết nối tri thức, công nghệ và năng lực thực thi.',
  },
  s3VisionMission: {
    eyebrow: 'TẦM NHÌN & SỨ MỆNH',
    title: 'Một bài toán – một đầu mối nhiều năng lực được kết nối.',
    subtitle: 'Kết nối chuỗi giá trị - Chuyển hóa các bài toán thành giải pháp thực tiễn',
    manifestos: [
      {
        id: 'm1',
        number: '01',
        statement: 'SỨ MỆNH',
        description: 'Phát triển nền công nghiệp phụ trợ Việt Nam vững mạnh bằng năng lực làm chủ công nghệ cốt lõi',
      },
      {
        id: 'm2',
        number: '02',
        statement: 'TẦM NHÌN',
        description: 'Định hướng một Holding xanh, thông minh, kế thừa giá trị để đổi mới và phát triển bền vững.',
      },
      {
        id: 'm3',
        number: '03',
        statement: 'TRIẾT LÝ: CONNECT & CONNECT',
        description: 'Kết sức mạnh - Nối thành công',
      },
    ],
  },
  s4Challenges: {
    eyebrow: 'NHỮNG BÀI TOÁN CHÚNG TÔI HƯỚNG TỚI',
    title: 'Cùng doanh nghiệp tìm lời giải\ncho những thách thức công nghiệp',
    description: 'FNX Group đồng hành cùng doanh nghiệp từ bài toán kỹ thuật, dự án, nguồn cung đến năng lực số và nhân lực.',
    image: '/images/banner/Hero.jpg',
    items: [
      {
        id: 'c1',
        number: '01',
        label: 'Năng lực sản xuất & Chất lượng',
        question: 'Làm sao nâng chất lượng và độ ổn định của sản phẩm?',
        solution: 'Tối ưu hóa quy trình kỹ thuật, chuẩn hóa công nghệ xử lý bề mặt và kiểm soát chất lượng nghiêm ngặt theo tiêu chuẩn công nghiệp.',
        unitHref: '/hubs/sc#xu-ly-be-mat',
      },
      {
        id: 'c2',
        number: '02',
        label: 'Dự án công nghiệp',
        question: 'Đầu tư, xây dựng và triển khai dự án đúng tiến độ?',
        solution: 'Tư vấn thiết kế, quản lý dự án toàn diện, cung ứng vật tư kỹ thuật và giám sát thi công đảm bảo tiến độ và an toàn.',
        unitHref: '/hubs/rd#xay-dung-co-ban',
      },
      {
        id: 'c3',
        number: '03',
        label: 'Nghiên cứu & Công nghệ',
        question: 'Cần nghiên cứu, thử nghiệm hay tiếp nhận công nghệ mới?',
        solution: 'Nghiên cứu làm chủ công nghệ lõi, thử nghiệm thực nghiệm chuyên sâu và tiếp nhận chuyển giao công nghệ cùng mạng lưới chuyên gia học thuật.',
        unitHref: '/hubs/rd#nghien-cuu-doi-moi',
      },
      {
        id: 'c4',
        number: '04',
        label: 'Nguồn cung',
        question: 'Tìm nguồn vật tư, hóa chất, sản phẩm ổn định?',
        solution: 'Kết nối chuỗi cung ứng vật liệu, hóa chất công nghiệp và giải pháp bề mặt chất lượng cao, tối ưu chi phí và giảm thiểu rủi ro.',
        unitHref: '/hubs/sc#chuoi-cung-ung',
      },
      {
        id: 'c5',
        number: '05',
        label: 'Năng lực số',
        question: 'Quản lý dự án và vận hành bằng công cụ số?',
        solution: 'Ứng dụng bộ giải pháp phần mềm chuyên biệt (CO² Platform, PIM, FNX OP) giúp số hóa quy trình, quản trị dữ liệu và vận hành thông minh.',
        unitHref: '/hubs/rd#san-pham-so',
      },
      {
        id: 'c6',
        number: '06',
        label: 'Nhân lực',
        question: 'Phát triển đội ngũ chất lượng cao?',
        solution: 'Định hướng, đào tạo thực chiến và chuyển giao phương pháp luận công nghiệp, phát triển nguồn nhân lực đáp ứng tiêu chuẩn quốc tế.',
        unitHref: '/engage?topic=nhan-luc',
      },
    ],
  },
  s5AudienceSolutions: {
    eyebrow: 'SẢN PHẨM & DỊCH VỤ',
    title: 'Giải pháp toàn diện theo nhu cầu của từng khách hàng',
    description: 'Kết hợp năng lực nghiên cứu, công nghệ, sản xuất và chuỗi cung ứng để tạo ra giải pháp phù hợp cho từng nhóm khách hàng.',
    cards: [
      {
        id: 'aud-01',
        number: '01',
        title: 'FDI/OEM & Nhà máy sản xuất',
        description: 'Xử lý bề mặt, hóa chất và vật tư công nghiệp, sản phẩm đại diện thương mại cho hoạt động sản xuất ổn định.',
        ctaText: 'Khám phá giải pháp',
        href: '/hubs/sc#xu-ly-be-mat',
        targetUnit: 'sc',
        image: '/images/ecosystem/vasi_plating_bento.png',
        alt: 'FDI/OEM & Nhà máy sản xuất',
      },
      {
        id: 'aud-02',
        number: '02',
        title: 'Chủ đầu tư & Doanh nghiệp triển khai dự án',
        description: 'Tư vấn đầu tư, quản lý và triển khai dự án, cung ứng dự án và phần mềm quản lý dự án CO2 PIM.',
        ctaText: 'Khám phá giải pháp',
        href: '/hubs/rd#xay-dung-co-ban',
        targetUnit: 'rd',
        image: '/images/banner/banner-section-2.png',
        alt: 'Chủ đầu tư & Doanh nghiệp triển khai dự án',
      },
      {
        id: 'aud-03',
        number: '03',
        title: 'Doanh nghiệp cần R&D & Đổi mới công nghệ',
        description: 'Nghiên cứu khoa học, nghiên cứu ứng dụng, tiếp nhận và chuyển giao công nghệ.',
        ctaText: 'Khám phá giải pháp',
        href: '/hubs/rd#nghien-cuu-doi-moi',
        targetUnit: 'rd',
        image: '/images/ecosystem/fnx_research_dev.jpg',
        alt: 'Doanh nghiệp cần R&D & Đổi mới công nghệ',
      },
      {
        id: 'aud-04',
        number: '04',
        title: 'Doanh nghiệp cần nguồn cung & Sản phẩm công nghiệp',
        description: 'Hóa chất xây dựng, gỗ công nghiệp, hóa chất cho ngành Hóa chất – Dầu khí và công nghiệp hỗ trợ.',
        ctaText: 'Khám phá giải pháp',
        href: '/hubs/sc#chuoi-cung-ung',
        targetUnit: 'sc',
        image: '/images/ecosystem/fnx_supply_chain.jpg',
        alt: 'Doanh nghiệp cần nguồn cung & Sản phẩm công nghiệp',
      },
      {
        id: 'aud-05',
        number: '05',
        title: 'Doanh nghiệp phát triển năng lực số & Nhân lực',
        description: 'Công cụ quản lý dự án và hệ thống phát triển nguồn nhân lực chất lượng cao.',
        ctaText: 'Khám phá giải pháp',
        href: '/hubs/rd#san-pham-so',
        targetUnit: 'rd',
        image: '/images/ecosystem/vasi_rd_sc_bento.png',
        alt: 'Doanh nghiệp phát triển năng lực số & Nhân lực',
      },
    ],
  },
  s6Partnership: {
    eyebrow: 'KẾT NỐI HỢP TÁC',
    title: 'Cùng mở rộng cơ hội hợp tác',
    description: 'FNX luôn mở rộng kết nối với doanh nghiệp, nhà cung cấp, chuyên gia và tổ chức chuyên môn để cùng phát triển cơ hội kinh doanh, công nghệ và công nghiệp.',
    ctaText: 'Trao đổi cơ hội hợp tác',
    ctaHref: '/engage?topic=hop-tac',
    image: '/images/banner/section-6.png',
  },
  s7Partners: {
    title: 'MẠNG LƯỚI ĐỐI TÁC',
  },
};
