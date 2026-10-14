/**
 * Dữ liệu đội ngũ chuyên gia FNX-RD & FNX-SC theo Spec 07
 */

export interface Expert {
  id: string;          // slug, dùng cho anchor #cg-<id> và tham số URL ?expert=
  unit: 'rd' | 'sc';
  groups: string[];    // anchor nhóm sản phẩm: 'nghien-cuu-doi-moi', 'xay-dung-co-ban', 'san-pham-so', 'xu-ly-be-mat', 'dai-dien-thuong-mai', 'chuoi-cung-ung'
  name: string;        // kèm học hàm nếu có, ví dụ 'PGS.TS Tạ Hồng Đức'
  ini: string;         // chữ cái đầu viết tắt avatar
  title: string;       // chức danh tại FNX
  field: string;       // lĩnh vực chuyên môn (1 dòng)
  bio: string;         // giới thiệu ngắn (1–2 câu)
  highlights: string[];// dự án / đề tài tiêu biểu
  quote?: string;      // thông điệp 1 câu (nếu có)
  photo?: string;      // ảnh chân dung (tùy chọn)
  order: number;       // thứ tự sắp xếp
  visible: boolean;    // cờ bật/tắt hiển thị
  pending?: boolean;   // nội dung tạm
}

export const EXPERT_GROUPS: Record<string, string> = {
  'nghien-cuu-doi-moi': 'Nghiên cứu & Đổi mới sáng tạo',
  'xay-dung-co-ban': 'Giải pháp cho dự án',
  'san-pham-so': 'Giải pháp số',
  'xu-ly-be-mat': 'Xử lý bề mặt',
  'dai-dien-thuong-mai': 'Đại diện thương mại',
  'chuoi-cung-ung': 'Chuỗi cung ứng',
};

export const GROUP_ORDER = [
  'nghien-cuu-doi-moi',
  'xay-dung-co-ban',
  'san-pham-so',
  'xu-ly-be-mat',
  'dai-dien-thuong-mai',
  'chuoi-cung-ung',
];

export const expertsData: Expert[] = [
  // --- FNX-RD ---
  {
    id: 'ta-hong-duc',
    unit: 'rd',
    groups: ['nghien-cuu-doi-moi'],
    name: 'PGS.TS Tạ Hồng Đức',
    ini: 'HĐ',
    title: 'Giám đốc Trung tâm R&D, Thành viên HĐQT FNX-RD',
    field: 'Thiết bị và quá trình công nghệ hóa chất – dầu khí',
    bio: 'Chuyên tính toán, thiết kế quá trình, thiết bị và hệ thống công nghệ cho công nghiệp hóa chất, dầu khí và môi trường; thiết kế nhà máy hóa chất và chế biến sâu khoáng sản.',
    highlights: [
      'Đề tài cấp Nhà nước ứng dụng hóa học xanh chế tạo micro polymer alginate từ rong nâu Việt Nam',
      'Hoàn thiện công nghệ tháp đĩa chiết tách và dây chuyền tinh chế liên tục axít phosphoric kỹ thuật',
    ],
    quote: 'Làm chủ công nghệ lõi, kiến tạo giá trị Việt, đưa trí tuệ Việt vươn ra thế giới.',
    order: 1,
    visible: true,
  },
  {
    id: 'nguyen-dang-binh-thanh',
    unit: 'rd',
    groups: ['nghien-cuu-doi-moi'],
    name: 'Nguyễn Đặng Bình Thành',
    ini: 'BT',
    title: 'Chuyên gia tư vấn, Thành viên HĐQT FNX-RD',
    field: 'Máy và thiết bị công nghiệp hóa chất – dầu khí',
    bio: 'Cải tiến, nâng cấp và giải quyết nút thắt về thiết bị, hệ thống thiết bị trong sản xuất xi măng, gạch ốp lát, thép, nhiệt điện, xử lý môi trường và hóa chất.',
    highlights: [
      'Thiết kế, chế tạo và thương mại hóa hệ thống phun sương dập bụi trong không gian mở',
      'Hệ thống thu hồi và tận dụng nhiệt thải cho nhà máy sản xuất gạch ốp lát',
    ],
    quote: 'Hiểu sâu công nghệ – Làm chủ thiết bị – Kiến tạo nền tảng vững chắc cho phát triển bền vững.',
    order: 2,
    visible: true,
  },
  {
    id: 'do-thanh-minh',
    unit: 'rd',
    groups: ['xay-dung-co-ban'],
    name: 'Đỗ Thanh Minh',
    ini: 'TM',
    title: 'Giám đốc Trung tâm Tư vấn, Thành viên HĐQT FNX-RD',
    field: 'Tư vấn đầu tư và xây dựng công trình',
    bio: 'Tư vấn và quản lý các dịch vụ liên quan đến đầu tư, xây dựng công trình; đồng hành cùng Chủ đầu tư từ giai đoạn chuẩn bị đầu tư đến triển khai dự án.',
    highlights: [],
    order: 3,
    visible: true,
    pending: true,
  },
  {
    id: 'la-thanh-toan',
    unit: 'rd',
    groups: ['xay-dung-co-ban'],
    name: 'Lã Thanh Toàn',
    ini: 'TT',
    title: 'Chuyên gia tư vấn kỹ thuật',
    field: 'Kỹ thuật hệ thống, cơ điện tử và tự động hóa',
    bio: 'Tư vấn kỹ thuật hệ thống cơ điện tử công nghiệp và tự động hóa dây chuyền sản xuất cho các dự án.',
    highlights: ['Hiện đại hóa dây chuyền sản xuất, nâng công suất và kéo dài tuổi thọ thiết bị'],
    order: 4,
    visible: true,
    pending: true,
  },
  {
    id: 'nguyen-duc-hanh',
    unit: 'rd',
    groups: ['san-pham-so'],
    name: 'Nguyễn Đức Hạnh',
    ini: 'ĐH',
    title: 'Thành viên HĐQT, Tổng Giám đốc FNX Group',
    field: 'Chiến lược nhân sự và văn hóa doanh nghiệp',
    bio: 'Hoạch định và dẫn dắt thực thi chiến lược phát triển nguồn nhân lực, xây dựng văn hóa doanh nghiệp cho các tổ chức đa ngành.',
    highlights: [
      'Hoạch định chiến lược nhân sự theo chiến lược và mục tiêu của tập đoàn đa ngành',
      'Quản trị vận hành việc thực thi chiến lược nhân sự',
    ],
    quote: 'Attitude is more important than intelligence.',
    order: 5,
    visible: true,
  },
  {
    id: 'ho-thuy-linh',
    unit: 'rd',
    groups: ['san-pham-so'],
    name: 'Hồ Thủy Linh',
    ini: 'TL',
    title: 'Chuyên gia tư vấn, Thành viên HĐQT FNX-RD',
    field: 'Phát triển nguồn lực, đào tạo nhân tài và văn hóa doanh nghiệp',
    bio: 'Xây dựng hệ thống tuyển dụng, đào tạo, đánh giá và phát triển tổ chức; đồng hành cùng lãnh đạo trong kế hoạch nguồn lực và giữ chân nhân tài.',
    highlights: [
      'Xây dựng thương hiệu tuyển dụng, thu hút và phát triển nhân tài công nghệ cao',
      'Thiết kế chương trình phát triển năng lực lãnh đạo và đội ngũ quản lý',
    ],
    order: 6,
    visible: true,
    pending: true,
  },
  {
    id: 'dinh-thi-thuy-quynh',
    unit: 'rd',
    groups: ['san-pham-so'],
    name: 'Đinh Thị Thúy Quỳnh',
    ini: 'TQ',
    title: 'Giám đốc Trung tâm Nhân lực số',
    field: 'Vận hành doanh nghiệp, chuẩn hóa quy trình và ứng dụng AI',
    bio: 'Chuyển hóa quy trình phức tạp thành tiêu chuẩn có thể nhân bản, tối ưu onboarding và tích hợp công nghệ, AI vào vận hành doanh nghiệp.',
    highlights: [
      'Rà soát, chuẩn hóa quy trình onboarding và hệ thống học liệu đào tạo nội bộ',
      'Tư vấn tích hợp công cụ số và AI vào tác vụ hằng ngày của đội ngũ',
    ],
    quote: 'Make it work → Make it right → Make it fast.',
    order: 7,
    visible: true,
  },

  // --- FNX-SC ---
  {
    id: 'nguyen-tri-kien',
    unit: 'sc',
    groups: ['xu-ly-be-mat'],
    name: 'Nguyễn Trí Kiên',
    ini: 'TK',
    title: 'Thành viên HĐQT, Chuyên gia Xử lý bề mặt',
    field: 'Công nghệ và giải pháp hệ thống xử lý bề mặt',
    bio: 'Tư vấn công nghệ mạ, sơn và xử lý bề mặt kim loại; xây dựng giải pháp hệ thống xử lý bề mặt cho doanh nghiệp sản xuất.',
    highlights: [],
    order: 8,
    visible: true,
    pending: true,
  },
  {
    id: 'nguyen-thi-kieu-quyen',
    unit: 'sc',
    groups: ['dai-dien-thuong-mai', 'chuoi-cung-ung'],
    name: 'Nguyễn Thị Kiều Quyên',
    ini: 'KQ',
    title: 'Phó Tổng Giám đốc FNX Group, Giám đốc FNX-SC',
    field: 'Quản trị chuỗi cung ứng và vận hành',
    bio: 'Quản trị vận hành chuỗi cung ứng và tối ưu quy trình dịch vụ, giúp doanh nghiệp tối ưu dòng chảy hàng hóa và giảm chi phí ẩn.',
    highlights: [],
    order: 9,
    visible: true,
    pending: true,
  },
];

/**
 * Lấy danh sách chuyên gia của đơn vị (đã lọc visible = true và sắp xếp theo nhóm + order)
 */
export function getExpertsByUnit(unit: 'rd' | 'sc'): Expert[] {
  return expertsData
    .filter((e) => e.unit === unit && e.visible)
    .sort((a, b) => {
      const gIndexA = GROUP_ORDER.indexOf(a.groups[0] || '');
      const gIndexB = GROUP_ORDER.indexOf(b.groups[0] || '');
      if (gIndexA !== gIndexB) return gIndexA - gIndexB;
      return a.order - b.order;
    });
}

/**
 * Lấy danh sách chuyên gia liên kết với một nhóm sản phẩm (anchor ID)
 */
export function getExpertsByGroup(groupId: string, unit?: 'rd' | 'sc'): Expert[] {
  return expertsData.filter(
    (e) => e.visible && e.groups.includes(groupId) && (!unit || e.unit === unit)
  );
}

/**
 * Lấy thông tin một chuyên gia theo ID slug
 */
export function getExpertById(id: string): Expert | undefined {
  return expertsData.find((e) => e.id === id && e.visible);
}
