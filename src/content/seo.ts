/**
 * Cấu hình SEO và Metadata cho FNX Website
 * Theo Spec 01 (Mục 7.2)
 */

export interface PageSeo {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const defaultSeo: PageSeo = {
  title: "FNX Group — Hệ sinh thái Kiến tạo Giá trị Bề mặt & Công nghiệp Phụ trợ",
  description: "FNX Group định vị là đơn vị tiên phong trong lĩnh vực xử lý bề mặt công nghiệp, chuỗi cung ứng hóa chất xanh và R&D chuyển đổi số công nghiệp.",
  canonical: "https://fnx.vn",
  ogTitle: "FNX Group — Shaping surface, Shaping future",
  ogDescription: "Hệ sinh thái kiến tạo bề mặt và giải pháp công nghiệp phụ trợ B2B chất lượng cao Made in Vietnam.",
  ogImage: "/fnx-og-1200x630.png",
};

export const pagesSeo: Record<string, PageSeo> = {
  home: {
    title: "FNX Group — Shaping surface, Shaping future",
    description: "Hệ sinh thái kết nối chuỗi giá trị công nghiệp phụ trợ: FNX-RD (Nghiên cứu & Chuyển giao), FNX-SC (Chuỗi cung ứng thông minh), FNX-M (Sản xuất).",
    canonical: "https://fnx.vn",
  },
  rd: {
    title: "FNX-RD — Nghiên cứu & Phát triển Công nghệ Bề mặt & Số hóa",
    description: "Trung tâm R&D chuyên sâu: chuyển giao công nghệ xử lý bề mặt xanh, hệ sinh thái phần mềm số CO² PIM / Platform / CSF / CCS và tối ưu vận hành công nghiệp.",
    canonical: "https://fnx.vn/hubs/rd",
  },
  sc: {
    title: "FNX-SC — Chuỗi Cung ứng Hóa chất & Công nghệ Xanh Bền vững",
    description: "Cung ứng toàn diện hóa chất xi mạ, vật tư phụ trợ, giải pháp hóa học xanh và logistics công nghiệp cho các nhà máy sản xuất.",
    canonical: "https://fnx.vn/hubs/sc",
  },
  m: {
    title: "FNX-M — Trung tâm Gia công & Sản xuất Bề mặt Công nghiệp",
    description: "Năng lực gia công mạ, sơn kỹ thuật cao, phụ kiện công nghiệp phụ trợ tiêu chuẩn quốc tế.",
    canonical: "https://fnx.vn/hubs/m",
  },
  engage: {
    title: "Liên hệ Hợp tác — FNX Group",
    description: "Kết nối trực tiếp với đội ngũ chuyên gia FNX-RD, FNX-SC và Tập đoàn FNX để tư vấn giải pháp kỹ thuật, cung ứng vật tư và hợp tác chiến lược.",
    canonical: "https://fnx.vn/engage",
  },
  about: {
    title: "Về chúng tôi — FNX Group",
    description: "Hành trình phát triển, tầm nhìn, sứ mệnh và giá trị cốt lõi của Tập đoàn FNX trong ngành công nghiệp phụ trợ Việt Nam.",
    canonical: "https://fnx.vn/about",
  },
  careers: {
    title: "Tuyển dụng — FNX Group",
    description: "Cơ hội nghề nghiệp và phát triển cùng hệ sinh thái công nghiệp công nghệ cao tại FNX Group.",
    canonical: "https://fnx.vn/careers",
  },
  news: {
    title: "Tin tức & Sự kiện — FNX Group",
    description: "Cập nhật tin tức hoạt động, dự án mới và các nghiên cứu chuyên ngành từ FNX Group.",
    canonical: "https://fnx.vn/news",
  },
  privacy: {
    title: "Chính sách Bảo mật — FNX Group",
    description: "Chính sách bảo mật thông tin và quyền riêng tư tại FNX Group.",
    canonical: "https://fnx.vn/privacy",
  },
  terms: {
    title: "Điều khoản Dịch vụ — FNX Group",
    description: "Các điều khoản và quy định sử dụng dịch vụ tại website FNX Group.",
    canonical: "https://fnx.vn/terms",
  },
};
