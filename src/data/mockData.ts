// Dữ liệu giả lập (Mock Data) chuẩn bị cho việc đấu nối Headless CMS (Strapi).
// Ngôn ngữ: Tiếng Việt, văn phong Clinical/Industrial, rõ ràng, dễ hiểu.

export const MOCK_PHILOSOPHY = {
  title: "TẦM NHÌN & TIÊU CHUẨN",
  manifestos: [
    {
      id: "m1",
      statement: "Không chỉ gia công bề mặt, chúng tôi kiến tạo tương lai của ngành công nghiệp.",
      description: "FNX tập trung giải quyết bài toán cốt lõi của ngành: sản lượng, chi phí, và tiêu chuẩn môi trường khắt khe."
    },
    {
      id: "m2",
      statement: "Triết lý Connect & Connect",
      description: "Chúng tôi không hoạt động đơn độc. FNX là trung tâm kết nối nguồn lực nghiên cứu, chuỗi cung ứng và sản xuất toàn cầu."
    }
  ]
};

export const MOCK_CAPABILITIES = [
  {
    id: "cap-research",
    title: "Nghiên cứu & Chuyển giao (R&D)",
    summary: "Phát triển công nghệ bề mặt tiên tiến, tối ưu hóa quy trình hóa chất và vật liệu mới.",
    detail: "Đội ngũ chuyên gia từ FNX-RD và các Viện Hàn lâm liên tục nghiên cứu, thử nghiệm và chuyển giao các công nghệ mạ, xử lý bề mặt thân thiện môi trường."
  },
  {
    id: "cap-engineering",
    title: "Tối ưu Kỹ thuật",
    summary: "Thiết kế, chế tạo và vận hành dây chuyền sản xuất tự động hóa cao.",
    detail: "Áp dụng kỹ thuật số hóa vào sản xuất, tối ưu hiệu năng thiết bị và giảm thiểu lãng phí trong vận hành nhà máy."
  },
  {
    id: "cap-supply",
    title: "Chuỗi cung ứng",
    summary: "Đảm bảo nguồn nguyên vật liệu hóa chất ổn định, chất lượng cao trên toàn cầu.",
    detail: "Mạng lưới kết nối toàn cầu giúp FNX tự chủ nguồn nguyên liệu, kiểm soát chặt chẽ đầu vào và đầu ra của quá trình sản xuất."
  },
  {
    id: "cap-surface",
    title: "Công nghệ Bề mặt",
    summary: "Giải pháp mạ bọc, anode, sơn tĩnh điện và xử lý chống ăn mòn.",
    detail: "Năng lực lõi cốt lõi tại Ban XLBM, đáp ứng các tiêu chuẩn khắt khe nhất của ngành ô tô, hàng không và điện tử."
  }
];

export const MOCK_INDUSTRIES = [
  {
    id: "ind-auto",
    title: "Công nghiệp Ô tô & Phụ trợ",
    challenge: "Yêu cầu độ bền chống ăn mòn cao, tính thẩm mỹ tuyệt đối và sản lượng cực lớn.",
    solution: "Cung cấp giải pháp mạ hợp kim, sơn tĩnh điện đạt tiêu chuẩn OEM toàn cầu."
  },
  {
    id: "ind-electronics",
    title: "Điện tử & Viễn thông",
    challenge: "Độ chính xác cao, tính dẫn điện tốt và khả năng chống nhiễu.",
    solution: "Công nghệ xử lý vi mạch, mạ vàng, bạc và các kim loại màu chuyên dụng."
  },
  {
    id: "ind-heavy",
    title: "Công nghiệp Nặng & Dầu khí",
    challenge: "Môi trường vận hành khắc nghiệt, chịu mài mòn và ăn mòn hóa học mạnh.",
    solution: "Công nghệ mạ chrome cứng siêu bền, lớp phủ ceramic chịu nhiệt độ cao."
  }
];

export const MOCK_EXPERTS = [
  {
    id: "exp-1",
    name: "Dr. Trần Văn A",
    position: "Viện trưởng Viện R&D",
    expertise: "Khoa học Vật liệu & Chống ăn mòn",
    company: "FNX-RD"
  },
  {
    id: "exp-2",
    name: "KS. Nguyễn Văn B",
    position: "Giám đốc Kỹ thuật",
    expertise: "Tối ưu hóa dây chuyền mạ tự động",
    company: "Ban XLBM"
  }
];

export const MOCK_CUSTOMERS = [
  {
    id: "cus-1",
    name: "VinFast",
    industry: "Công nghiệp Ô tô",
    logo: "/images/ecosystem/vasi.png", // Tạm dùng ảnh cũ làm logo mockup
    quote: "FNX cung cấp giải pháp xử lý bề mặt hoàn hảo, đáp ứng được tiến độ và chất lượng khắt khe nhất của chúng tôi."
  },
  {
    id: "cus-2",
    name: "Samsung",
    industry: "Điện tử",
    logo: "/images/ecosystem/vasi.png",
    quote: "Sự đồng hành của FNX trong việc chuẩn hóa chuỗi cung ứng hóa chất đã giúp chúng tôi tối ưu chi phí rất lớn."
  }
];
