/**
 * Tiện ích tìm kiếm phía client không phân biệt dấu và chữ hoa thường
 * Theo Spec 01 (Mục 4.5)
 */

export interface SearchItem {
  id: string;
  title: string;
  category: string;
  unit: 'RD' | 'SC' | 'Group' | 'M';
  href: string;
  description?: string;
  keywords?: string[];
}

export function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

export const searchableItems: SearchItem[] = [
  // 5 Nhóm khách hàng Trang chủ
  {
    id: 's5-1',
    title: 'Gia công & Xử lý bề mặt công nghiệp',
    category: 'Nhóm khách hàng',
    unit: 'SC',
    href: '/hubs/sc#xu-ly-be-mat',
    description: 'Dành cho doanh nghiệp cần mạ kẽm, mạ niken, anodizing và sơn kỹ thuật cao.',
    keywords: ['ma kem', 'ma niken', 'anodizing', 'xi ma', 'gia cong be mat', 'son'],
  },
  {
    id: 's5-2',
    title: 'Nghiên cứu & Chuyển đổi số R&D (CO² Software)',
    category: 'Nhóm khách hàng',
    unit: 'RD',
    href: '/hubs/rd#giai-phap-so',
    description: 'Bộ giải pháp CO² PIM, Platform, CSF, CCS và chuyển giao công nghệ phòng Lab.',
    keywords: ['co2 pim', 'co2 platform', 'co2 csf', 'co2 ccs', 'chuyen doi so', 'rd', 'lab', 'phan mem'],
  },
  {
    id: 's5-3',
    title: 'Chuỗi cung ứng hóa chất xanh & Thiết bị phụ trợ',
    category: 'Nhóm khách hàng',
    unit: 'SC',
    href: '/hubs/sc#hoa-chat-xanh',
    description: 'Cung cấp hóa chất xi mạ, dung dịch sinh thái, phụ gia và vật tư tiêu hao.',
    keywords: ['hoa chat xanh', 'sinh thai', 'phu gia', 'vat tu', 'cung ung', 'kho van'],
  },
  {
    id: 's5-4',
    title: 'Linh kiện & Phụ kiện công nghiệp Made in Vietnam',
    category: 'Nhóm khách hàng',
    unit: 'Group',
    href: '/hubs/m#phu-kien-cong-nghiep',
    description: 'Sản xuất linh kiện cơ khí, phụ kiện ngành phụ trợ đạt chuẩn FDI.',
    keywords: ['linh kien', 'phu kien', 'made in vietnam', 'fdi', 'san xuat'],
  },
  {
    id: 's5-5',
    title: 'Dự án đặc thù & Đối tác FDI chiến lược',
    category: 'Nhóm khách hàng',
    unit: 'Group',
    href: '/engage?topic=hop-tac-chien-luoc',
    description: 'Tư vấn và thực thi các dự án dây chuyền mạ, nhà xưởng và hợp tác quy mô lớn.',
    keywords: ['fdi', 'du an', 'day chuyen', 'hop tac chien luoc'],
  },

  // Danh mục FNX-RD
  {
    id: 'rd-1',
    title: 'CO² PIM — Hệ thống Quản trị Dữ liệu Sản phẩm',
    category: 'Sản phẩm số R&D',
    unit: 'RD',
    href: '/hubs/rd#co2-pim',
    description: 'Quản lý thông số kỹ thuật, quy trình công nghệ và mã vật tư tiêu chuẩn.',
    keywords: ['co2 pim', 'quan tri san pham', 'du lieu', 'phan mem'],
  },
  {
    id: 'rd-2',
    title: 'CO² Platform — Nền tảng Kết nối & Điều phối Công nghiệp',
    category: 'Sản phẩm số R&D',
    unit: 'RD',
    href: '/hubs/rd#co2-platform',
    description: 'Nền tảng tích hợp điều phối sản xuất, R&D và chuỗi giá trị.',
    keywords: ['co2 platform', 'nen tang', 'dieu phoi', 'he thong'],
  },
  {
    id: 'rd-3',
    title: 'CO² CSF & CO² CCS',
    category: 'Sản phẩm số R&D',
    unit: 'RD',
    href: '/hubs/rd#co2-platform',
    description: 'Phần mềm chuyên dụng kiểm soát chất lượng bề mặt và tính toán hóa chất.',
    keywords: ['co2 csf', 'co2 ccs', 'kiem soat chat luong', 'tinh toan'],
  },
  {
    id: 'rd-4',
    title: 'Chuyển giao công nghệ xử lý bề mặt xanh',
    category: 'Giải pháp R&D',
    unit: 'RD',
    href: '/hubs/rd#chuyen-giao-cong-nghe',
    description: 'Nghiên cứu công thức mạ không xyanua, thụ động crôm 3+, thân thiện môi trường.',
    keywords: ['khong xyanua', 'crom 3', 'than thien moi truong', 'chuyen giao'],
  },

  // Danh mục FNX-SC
  {
    id: 'sc-1',
    title: 'Hóa chất xi mạ kỹ thuật cao (Niken, Kẽm, Crôm)',
    category: 'Chuỗi cung ứng',
    unit: 'SC',
    href: '/hubs/sc#hoa-chat-xi-ma',
    description: 'Cung cấp hóa chất tinh khiết cao cho các dây chuyền mạ tự động.',
    keywords: ['hoa chat', 'niken', 'kem', 'crom', 'xi ma'],
  },
  {
    id: 'sc-2',
    title: 'Dung dịch tẩy rửa sinh thái & Hóa chất xử lý nước',
    category: 'Chuỗi cung ứng',
    unit: 'SC',
    href: '/hubs/sc#tay-rua-sinh-thai',
    description: 'Dung dịch làm sạch bề mặt gốc nước, phân hủy sinh học, an toàn công nhân.',
    keywords: ['tay rua', 'sinh thai', 'xu ly nuoc', 'an toan'],
  },
  {
    id: 'sc-3',
    title: 'Thiết bị phụ trợ, bể mạ & vật tư tiêu hao',
    category: 'Chuỗi cung ứng',
    unit: 'SC',
    href: '/hubs/sc#thiet-bi-vat-tu',
    description: 'Cực dương anot, túi lọc, hạt mài, que đốt gia nhiệt và phụ tùng ngành mạ.',
    keywords: ['be ma', 'anot', 'tui loc', 'hat mai', 'vat tu tieu hao'],
  },
];

export function searchClient(query: string, maxResults = 8): SearchItem[] {
  if (!query || query.trim().length === 0) return [];

  const normalizedQuery = removeVietnameseTones(query);
  const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

  const matched = searchableItems.filter(item => {
    const normTitle = removeVietnameseTones(item.title);
    const normCat = removeVietnameseTones(item.category);
    const normDesc = item.description ? removeVietnameseTones(item.description) : '';
    const normKeywords = item.keywords ? item.keywords.map(removeVietnameseTones).join(' ') : '';
    const fullText = `${normTitle} ${normCat} ${normDesc} ${normKeywords}`;

    return queryTerms.every(term => fullText.includes(term));
  });

  return matched.slice(0, maxResults);
}
