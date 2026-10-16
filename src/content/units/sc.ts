/**
 * Dữ liệu trang FNX-SC theo Spec 04
 */
import { CatalogGroup } from './rd';

export interface UnitContentSc {
  unitKey: 'sc';
  name: string;
  theme: 'sc';
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

export const scContent: UnitContentSc = {
  unitKey: 'sc',
  name: 'FNX-SC',
  theme: 'sc',
  hero: {
    breadcrumbs: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Hệ sinh thái', href: '/#ecosystem' },
      { label: 'FNX-SC', href: '/hubs/sc' },
    ],
    titlePart1: 'Kết nối đúng nguồn lực –',
    titlePart2: 'tối ưu chuỗi cung ứng',
    description:
      'Chúng tôi giúp tối ưu chuỗi cung ứng thông qua kết nối đúng nguồn lực, giảm chi phí, giảm rủi ro và nâng cao hiệu quả vận hành.',
    ctaText: 'Liên hệ FNX-SC',
    ctaHref: '/engage?unit=sc',
    image: '/images/ecosystem/fnx_supply_chain.jpg',
  },
  intro: {
    eyebrow: 'GIỚI THIỆU',
    title: 'Giới thiệu FNX-SC',
    description:
      'FNX-SC là đơn vị thương mại và cung ứng của FNX Group, kết nối doanh nghiệp với các giải pháp xử lý bề mặt, sản phẩm công nghiệp và nguồn cung hóa chất, vật liệu phù hợp. Thông qua mạng lưới nhà sản xuất, chuyên gia và đối tác, chúng tôi giúp khách hàng tiếp cận đúng nguồn lực, tối ưu chi phí và nâng cao hiệu quả vận hành.',
    ctaText: 'Xem sản phẩm & dịch vụ ↓',
    ctaHref: '#san-pham-dich-vu',
    image: '/images/ecosystem/vasi_plating_bento.png',
    imageAlt: 'Linh kiện kim loại đã xử lý bề mặt FNX-SC',
  },
  catalog: {
    id: 'san-pham-dich-vu',
    title: 'Sản phẩm & Dịch vụ',
    description: 'Khám phá các nhóm giải pháp của FNX-SC',
    groups: [
      {
        id: 'xu-ly-be-mat',
        number: '01.',
        title: 'Xử lý bề mặt',
        items: [
          {
            id: 'sc-01',
            name: 'Mạ chuyên sâu',
            desc: 'Chrome cứng, Chrome kỹ thuật, Nickel – Chrome, mạ hợp kim (Zn-Ni, Sn-Ni), mạ bạc kỹ thuật, mạ PCB, mạ trên nền nhựa, phủ PVD',
            thumbnail: '',
          },
          {
            id: 'sc-02',
            name: 'Mạ thông dụng',
            desc: 'Phosphate hóa, Black-oxide, mạ kẽm quay/treo, mạ kẽm khổ lớn, kẽm nhúng nóng, xử lý kim loại nền',
            thumbnail: '',
          },
          {
            id: 'sc-03',
            name: 'Sơn và tiền xử lý',
            desc: 'Sơn ED, sơn tĩnh điện, sơn công nghiệp gốc nước và gốc dung môi',
            thumbnail: '',
          },
          {
            id: 'sc-04',
            name: 'Các năng lực liên quan',
            desc: 'Anode hóa, xử lý nhiệt và tư vấn giải pháp hệ thống xử lý bề mặt',
            thumbnail: '',
          },
        ],
      },
      {
        id: 'dai-dien-thuong-mai',
        number: '02.',
        title: 'Đại diện thương mại',
        subgroups: [
          {
            id: 'fnx-san-xuat',
            title: 'Sản phẩm do FNX sản xuất',
            items: [
              {
                id: 'sc-05',
                name: 'Thanh ray trượt',
                desc: 'Sản phẩm cơ khí chính xác do các đơn vị trong FNX Group sản xuất',
                thumbnail: '',
              },
              {
                id: 'sc-06',
                name: 'Tay nâng khí nén',
                desc: 'Sản phẩm phụ kiện khí nén do các đơn vị trong FNX Group sản xuất',
                thumbnail: '',
              },
              {
                id: 'sc-07',
                name: 'Sản phẩm, chi tiết khác',
                desc: 'Các sản phẩm, chi tiết công nghiệp khác do FNX Group gia công & sản xuất theo yêu cầu',
                thumbnail: '',
              },
            ],
          },
          {
            id: 'dai-dien-cac-hang',
            title: 'Đại diện thương mại các hãng quốc tế',
            items: [
              {
                id: 'sc-08',
                name: 'Điện cực – Hanger',
                desc: 'Đại diện thương mại hãng SPF (Nhật Bản), phục vụ dây chuyền mạ và xử lý bề mặt',
                thumbnail: '',
              },
              {
                id: 'sc-callington',
                name: 'Hóa chất Callington',
                desc: 'Đại diện thương mại hãng Callington (Úc), cung cấp hóa chất kỹ thuật, tẩy rửa và bảo dưỡng cho ngành hàng không, công nghiệp',
                thumbnail: '',
              },
              {
                id: 'sc-09',
                name: 'Phụ gia động cơ',
                desc: 'Đại diện thương mại của hãng, phục vụ động cơ và thiết bị vận tải công nghiệp',
                thumbnail: '',
              },
              {
                id: 'sc-10',
                name: 'Nước làm mát pin',
                desc: 'Đại diện thương mại của hãng, giải pháp giải nhiệt chuyên sâu cho hệ thống pin xe điện và công nghiệp',
                thumbnail: '',
              },
            ],
          },
        ],
      },
      {
        id: 'chuoi-cung-ung',
        number: '03.',
        title: 'Cung ứng vật tư & Hóa chất công nghiệp',
        subgroups: [
          {
            id: 'hoa-chat-nguyen-vat-lieu',
            title: 'Hóa chất – Nguyên vật liệu',
            items: [
              {
                id: 'sc-16',
                name: 'Sơn phủ chống ăn mòn',
                desc: 'Sơn phủ bảo vệ chống ăn mòn cho kết cấu thép, bồn bể, thiết bị và công trình công nghiệp',
                thumbnail: '',
              },
              {
                id: 'sc-12',
                name: 'Hóa chất xây dựng ASIA STAR',
                desc: 'Chống thấm, vữa – keo chuyên dụng, tăng cứng sàn bê tông công nghiệp, vữa không co ngót',
                thumbnail: '',
              },
              {
                id: 'sc-13',
                name: 'Hóa chất ngành Hóa chất – Dầu khí',
                desc: 'Hóa chất nguyên liệu và cơ bản: Axit Sulfuric, Axit Hydrochloric, Caustic Soda…',
                thumbnail: '',
              },
              {
                id: 'sc-14',
                name: 'Hóa chất công nghệ',
                desc: 'Hóa chất phục vụ sản xuất và gia công trong ngành công nghiệp hỗ trợ',
                thumbnail: '',
              },
              {
                id: 'sc-15',
                name: 'Hóa chất xử lý nước',
                desc: 'Giải pháp hóa chất xử lý nước cấp và nước thải cho nhà máy, khu công nghiệp',
                thumbnail: '',
              },
              {
                id: 'sc-17',
                name: 'Hóa chất đặc biệt khác',
                desc: 'Hóa chất chuyên dụng theo yêu cầu kỹ thuật riêng của từng ngành sản xuất',
                thumbnail: '',
              },
            ],
          },
          {
            id: 'cung-ung-du-an',
            title: 'Cung ứng dự án',
            items: [
              {
                id: 'sc-11',
                name: 'Gỗ công nghiệp WOODBASE',
                desc: 'Ván sàn, ván nội thất cao cấp WOODBASE và dòng phổ thông (Core HDF, MDF) cho dự án xây dựng',
                thumbnail: '',
              },
              {
                id: 'sc-vat-tu-du-an',
                name: 'Gạch ốp lát, thiết bị vệ sinh & vật tư khác',
                desc: 'Cung ứng đồng bộ gạch ốp lát, thiết bị vệ sinh và các vật tư theo tiêu chuẩn kỹ thuật dự án',
                thumbnail: '',
              },
            ],
          },
        ],
      },
    ],
  },
  profile: {
    title: 'Hồ sơ năng lực FNX-SC',
    description:
      'Tìm hiểu chi tiết danh mục xử lý bề mặt, sản phẩm đại diện và nguồn cung của FNX-SC. Gửi yêu cầu, chúng tôi sẽ gửi hồ sơ qua email của bạn.',
    ctaText: 'Yêu cầu hồ sơ năng lực',
    ctaHref: '/engage?unit=sc&topic=ho-so-sc',
  },
  ctaBanner: {
    title: 'Bạn đang tìm kiếm sản phẩm\nhoặc nguồn cung cho doanh nghiệp?',
    ctaText: 'Liên hệ FNX-SC',
    ctaHref: '/engage?unit=sc',
    image: '/images/ecosystem/fnx_supply_chain.jpg',
  },
  seo: {
    title: 'FNX-SC – Xử lý bề mặt, đại diện thương mại và chuỗi cung ứng | FNX Group',
    description:
      'FNX-SC cung cấp giải pháp xử lý bề mặt, sản phẩm đại diện thương mại và hóa chất công nghiệp cho doanh nghiệp sản xuất.',
  },
};
