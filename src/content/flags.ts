/**
 * Feature flags for FNX Website
 * Theo Spec 01 (Mục 7.1) & Spec 02
 */
export interface FeatureFlags {
  menu: {
    xlbm: boolean;      // Tạm ẩn Ban XLBM khỏi menu
    projects: boolean;  // Tạm ẩn Dự án khỏi menu
  };
  rd: {
    legacySections: boolean; // Tắt section cũ của RD
  };
  sc: {
    legacySections: boolean; // Tắt section cũ của SC
  };
  home: {
    expertNetwork: boolean;          // Section chuyên gia cũ (8 chuyên gia)
    capabilitiesOld: boolean;        // Section Năng lực cốt lõi 5 ô cũ
    journey: boolean;                // Section Hành trình bài toán cũ
    solutions: boolean;              // Section Dòng chảy giá trị cũ
    successLoop: boolean;            // Section Vòng lặp thành công cũ
    ecosystemArchitecture: boolean;  // Section Kiến trúc hệ sinh thái cũ
  };
  header: {
    search: boolean;         // Bật/tắt thanh tìm kiếm client-side
  };
}

export const flags: FeatureFlags = {
  menu: {
    xlbm: false,
    projects: false,
  },
  rd: {
    legacySections: false,
  },
  sc: {
    legacySections: false,
  },
  home: {
    expertNetwork: false,
    capabilitiesOld: false,
    journey: false,
    solutions: false,
    successLoop: false,
    ecosystemArchitecture: false,
  },
  header: {
    search: true,
  },
};
