/**
 * 10 Lựa chọn nhu cầu liên hệ & phân luồng đơn vị / hộp thư
 * Theo Spec 05 (Mục 2 & 3)
 */

export interface ContactTopic {
  slug: string;
  label: string;
  unit: 'rd' | 'sc' | 'group';
  groupKey: 'rd' | 'sc' | 'expert' | 'profile' | 'other';
  groupLabel: string;
  recipientEmail: string;
  isProfile?: boolean;
}

export interface TopicGroup {
  key: 'rd' | 'sc' | 'expert' | 'profile' | 'other';
  label: string;
  topics: ContactTopic[];
}

export const contactTopics: ContactTopic[] = [
  // Nhóm 1: Nghiên cứu & Dự án (FNX-RD)
  {
    slug: 'nghien-cuu',
    label: 'Nghiên cứu, R&D, chuyển giao công nghệ',
    unit: 'rd',
    groupKey: 'rd',
    groupLabel: 'Nghiên cứu & Dự án',
    recipientEmail: 'fnxrd.fnxgroup@gmail.com',
  },
  {
    slug: 'du-an',
    label: 'Tư vấn đầu tư, triển khai & cung ứng dự án',
    unit: 'rd',
    groupKey: 'rd',
    groupLabel: 'Nghiên cứu & Dự án',
    recipientEmail: 'fnxrd.fnxgroup@gmail.com',
  },
  {
    slug: 'san-pham-so',
    label: 'Sản phẩm số (CO² PIM, CO² Platform)',
    unit: 'rd',
    groupKey: 'rd',
    groupLabel: 'Nghiên cứu & Dự án',
    recipientEmail: 'fnxrd.fnxgroup@gmail.com',
  },

  // Nhóm 2: Sản phẩm & Nguồn cung (FNX-SC)
  {
    slug: 'xu-ly-be-mat',
    label: 'Xử lý bề mặt (mạ, sơn, tiền xử lý)',
    unit: 'sc',
    groupKey: 'sc',
    groupLabel: 'Sản phẩm & Nguồn cung',
    recipientEmail: 'chain.fnxgroup@gmail.com',
  },
  {
    slug: 'dai-dien-thuong-mai',
    label: 'Sản phẩm đại diện thương mại',
    unit: 'sc',
    groupKey: 'sc',
    groupLabel: 'Sản phẩm & Nguồn cung',
    recipientEmail: 'chain.fnxgroup@gmail.com',
  },
  {
    slug: 'nguon-cung',
    label: 'Hóa chất, vật liệu & báo giá nguồn cung',
    unit: 'sc',
    groupKey: 'sc',
    groupLabel: 'Sản phẩm & Nguồn cung',
    recipientEmail: 'chain.fnxgroup@gmail.com',
  },

  // Nhóm 3: Trao đổi với chuyên gia (Spec 07)
  {
    slug: 'chuyen-gia-rd',
    label: 'Trao đổi với chuyên gia FNX-RD',
    unit: 'rd',
    groupKey: 'expert',
    groupLabel: 'Trao đổi với chuyên gia',
    recipientEmail: 'fnxrd.fnxgroup@gmail.com',
  },
  {
    slug: 'chuyen-gia-sc',
    label: 'Trao đổi với chuyên gia FNX-SC',
    unit: 'sc',
    groupKey: 'expert',
    groupLabel: 'Trao đổi với chuyên gia',
    recipientEmail: 'chain.fnxgroup@gmail.com',
  },

  // Nhóm 4: Hồ sơ năng lực
  {
    slug: 'ho-so-rd',
    label: 'Yêu cầu hồ sơ năng lực FNX-RD',
    unit: 'rd',
    groupKey: 'profile',
    groupLabel: 'Hồ sơ năng lực',
    recipientEmail: 'fnxrd.fnxgroup@gmail.com',
    isProfile: true,
  },
  {
    slug: 'ho-so-sc',
    label: 'Yêu cầu hồ sơ năng lực FNX-SC',
    unit: 'sc',
    groupKey: 'profile',
    groupLabel: 'Hồ sơ năng lực',
    recipientEmail: 'chain.fnxgroup@gmail.com',
    isProfile: true,
  },

  // Nhóm 5: Khác (FNX Group)
  {
    slug: 'hop-tac',
    label: 'Hợp tác, trở thành đối tác',
    unit: 'group',
    groupKey: 'other',
    groupLabel: 'Khác',
    recipientEmail: 'info@fnx.vn',
  },
  {
    slug: 'khac',
    label: 'Khác / chưa rõ',
    unit: 'group',
    groupKey: 'other',
    groupLabel: 'Khác',
    recipientEmail: 'info@fnx.vn',
  },
];

/**
 * Lấy topic theo slug
 */
export function getTopicBySlug(slug?: string | null): ContactTopic | undefined {
  if (!slug) return undefined;
  return contactTopics.find((t) => t.slug === slug);
}

/**
 * Lấy danh sách nhóm topics có sắp xếp ưu tiên theo unitHint
 */
export function getOrderedTopicGroups(unitHint?: string | null): TopicGroup[] {
  const groupsMap: Record<'rd' | 'sc' | 'expert' | 'profile' | 'other', TopicGroup> = {
    rd: {
      key: 'rd',
      label: 'Nghiên cứu & Dự án',
      topics: contactTopics.filter((t) => t.groupKey === 'rd'),
    },
    sc: {
      key: 'sc',
      label: 'Sản phẩm & Nguồn cung',
      topics: contactTopics.filter((t) => t.groupKey === 'sc'),
    },
    expert: {
      key: 'expert',
      label: 'Trao đổi với chuyên gia',
      topics: contactTopics.filter((t) => t.groupKey === 'expert'),
    },
    profile: {
      key: 'profile',
      label: 'Hồ sơ năng lực',
      topics: contactTopics.filter((t) => t.groupKey === 'profile'),
    },
    other: {
      key: 'other',
      label: 'Khác',
      topics: contactTopics.filter((t) => t.groupKey === 'other'),
    },
  };

  // Nếu unitHint = rd: nhóm RD lên đầu, nhóm expert đặt sau RD & SC và trước profile
  if (unitHint === 'rd') {
    return [groupsMap.rd, groupsMap.sc, groupsMap.expert, groupsMap.profile, groupsMap.other];
  }
  // Nếu unitHint = sc: nhóm SC lên đầu
  if (unitHint === 'sc') {
    return [groupsMap.sc, groupsMap.rd, groupsMap.expert, groupsMap.profile, groupsMap.other];
  }
  // Mặc định: rd, sc, expert, profile, other
  return [groupsMap.rd, groupsMap.sc, groupsMap.expert, groupsMap.profile, groupsMap.other];
}

/**
 * Tên hiển thị đơn vị tiếp nhận
 */
export const UNIT_NAMES: Record<'rd' | 'sc' | 'group', string> = {
  rd: 'FNX-RD',
  sc: 'FNX-SC',
  group: 'FNX Group',
};
