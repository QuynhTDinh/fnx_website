// Dữ liệu giả lập (Mock Data) chuẩn bị cho việc đấu nối Headless CMS (Strapi).
// Ngôn ngữ: Tiếng Việt, văn phong Clinical/Industrial, rõ ràng, dễ hiểu.

export const MOCK_PHILOSOPHY = {
  title: "TẦM NHÌN & SỨ MỆNH",
  manifestos: [
    {
      id: "m1",
      number: "01",
      icon: "compass",
      title: "TẦM NHÌN",
      header: "Sustainable – Intelligent – Succession",
      statement: "SUSTAINABLE – INTELLIGENT – SUCCESSION",
      description: "Trở thành một Holding xanh, thông minh, kế thừa giá trị để đổi mới và phát triển bền vững."
    },
    {
      id: "m2",
      number: "02",
      icon: "target",
      title: "SỨ MỆNH",
      header: "Made - Make Viet Nam",
      statement: "MADE - MAKE VIET NAM",
      description: "Phát triển nền công nghiệp phụ trợ Việt Nam vững mạnh bằng năng lực làm chủ công nghệ cốt lõi."
    },
    {
      id: "m3",
      number: "03",
      icon: "network",
      title: "TRIẾT LÝ",
      header: "Connect & Connect",
      statement: "CONNECT & CONNECT",
      description: "Kết sức mạnh - Nối thành công"
    }
  ]
};

export const MOCK_CAPABILITIES = [
  {
    id: "cap-research",
    title: "NGHIÊN CỨU & CHUYỂN GIAO",
    summary: "Phát triển công nghệ bề mặt tiên tiến, tối ưu hóa quy trình hóa chất và vật liệu mới.",
    detail: "Đội ngũ chuyên gia từ FNX-RD và các Viện Hàn lâm liên tục nghiên cứu, thử nghiệm và chuyển giao các công nghệ mạ, xử lý bề mặt thân thiện môi trường."
  },
  {
    id: "cap-consulting",
    title: "TƯ VẤN GIẢI PHÁP",
    summary: "Cung cấp giải pháp tổng thể về kỹ thuật, quy trình vận hành và hệ thống quản trị sản xuất.",
    detail: "Khảo sát chuyên sâu, đánh giá điểm nghẽn và thiết kế lộ trình chuyển đổi nhằm tối ưu hóa chi phí, năng suất và tiêu chuẩn môi trường."
  },
  {
    id: "cap-deployment",
    title: "TRIỂN KHAI DỰ ÁN",
    summary: "Quản lý và thực thi trọn gói các dự án công nghiệp, dây chuyền và hệ thống hạ tầng.",
    detail: "Kiểm soát nghiêm ngặt tiến độ, chất lượng và an toàn từ khâu cung ứng vật tư, thi công lắp đặt đến nghiệm thu bàn giao."
  },
  {
    id: "cap-supply",
    title: "CHUỖI CUNG ỨNG",
    summary: "Đảm bảo nguồn nguyên vật liệu hóa chất ổn định, chất lượng cao trên toàn cầu.",
    detail: "Mạng lưới kết nối toàn cầu giúp FNX tự chủ nguồn nguyên liệu, kiểm soát chặt chẽ đầu vào và đầu ra của quá trình sản xuất."
  },
  {
    id: "cap-hr",
    title: "PHÁT TRIỂN NHÂN LỰC CHẤT LƯỢNG CAO",
    summary: "Phát triển nguồn nhân lực chất lượng cao đáp ứng nhu cầu công nghiệp số.",
    detail: "Đào tạo, nâng cao năng lực vận hành và công nghệ cho hệ thống nhân sự cốt lõi của doanh nghiệp."
  }
];

export interface SolutionItem {
  id: string;
  name: string;
  challenge: string;
  solution: string;
}

export interface BUGroups {
  id: string;
  name: string;
  solutions: SolutionItem[];
}

export const MOCK_SOLUTIONS_BY_BU: BUGroups[] = [
  {
    id: "bu-rd",
    name: "Nghiên cứu & Phát triển (R&D)",
    solutions: [
      {
        id: "sol-rd-1",
        name: "NCKH - Đề tài",
        challenge: "Nhiều dự án, đề tài nghiên cứu đã nghiệm thu nhưng chưa thể đưa ra triển khai hàng loạt do thiếu sự phối hợp giữa viện, trường, doanh nghiệp và cơ quan quản lý nhà nước.",
        solution: "Thực hiện nghiên cứu các công nghệ mới có tính ứng dụng cao. Hỗ trợ chuyển giao công nghệ cho doanh nghiệp trong chuỗi cung ứng, giúp tiếp nhận công nghệ mới với chi phí hợp lý để tăng năng suất."
      },
      {
        id: "sol-rd-2",
        name: "Dự án thử nghiệm",
        challenge: "Khách hàng gặp các vấn đề trong quá trình vận hành, chưa thể ứng dụng được các kết quả nghiên cứu trong phòng lab vào thực tế sản xuất.",
        solution: "Kết nối các đơn vị nghiên cứu khoa học, đơn vị tài trợ và doanh nghiệp để triển khai các dự án thực nghiệm. Giúp cải thiện quy trình sản xuất và tiết kiệm chi phí vận hành."
      }
    ]
  },
  {
    id: "bu-project",
    name: "Dự án",
    solutions: [
      {
        id: "sol-proj-1",
        name: "Hóa chất xây dựng",
        challenge: "Tình trạng sử dụng sản phẩm kém chất lượng, thiếu hỗ trợ kỹ thuật trong thi công và khó khăn trong việc bảo hành sau khi bàn giao công trình.",
        solution: "Cung cấp hóa chất chuyên dụng (chống thấm, keo dán gạch, vữa xây dựng). Tư vấn giải pháp tổng thể, hướng dẫn thi công nhằm đảm bảo tuổi thọ công trình và giảm chi phí bảo trì."
      },
      {
        id: "sol-proj-2",
        name: "Gỗ công nghiệp & Nội thất",
        challenge: "Quản lý nhiều nhà thầu phụ gây chồng chéo tiến độ; nhà cung cấp vật liệu và nhà thầu thi công đùn đẩy trách nhiệm khi xảy ra lỗi; chất lượng cốt gỗ không đồng đều.",
        solution: "Cung cấp giải pháp tổng thể về Ván sàn và Nội thất gỗ công nghiệp. Đảm nhiệm vai trò đầu mối xuyên suốt từ vật liệu đến thi công hoàn thiện, đảm bảo tiến độ và tối ưu tổng chi phí đầu tư."
      },
      {
        id: "sol-proj-3",
        name: "Sản phẩm & Dịch vụ PCCC",
        challenge: "Yêu cầu khắt khe về an toàn PCCC, phải tuân thủ nghiêm ngặt theo quy định của Luật PCCC, thủ tục thẩm duyệt phức tạp.",
        solution: "Cung cấp hệ thống báo cháy thông minh, sơn chống cháy, cửa chống cháy. Đi kèm dịch vụ tư vấn, thẩm duyệt, thi công và bảo trì hệ thống PCCC an toàn, đúng tiêu chuẩn."
      },
      {
        id: "sol-proj-4",
        name: "Tư vấn & Triển khai DA",
        challenge: "Chủ đầu tư thiếu kinh nghiệm trong quá trình triển khai đầu tư dự án, không nắm được đầy đủ các quy định, thủ tục và tiêu chuẩn kỹ thuật.",
        solution: "Tư vấn quản lý dự án từ giai đoạn chuẩn bị, thực hiện đến khi kết thúc. Cung cấp vật tư và thi công lắp đặt hệ thống cơ điện (M&E), điều khiển tự động hóa và xử lý nước thải."
      }
    ]
  },
  {
    id: "bu-digital",
    name: "Sản phẩm số",
    solutions: [
      {
        id: "sol-dig-1",
        name: "CO2 Platform",
        challenge: "Khoảng cách lớn giữa năng lực thực tế của nhân lực và nhu cầu của doanh nghiệp; nhân lực nội tại chưa phát triển kịp xu hướng công nghệ (AI, chuyển đổi số).",
        solution: "Nền tảng phát triển nguồn nhân lực chất lượng cao. Đánh giá khoảng trống năng lực, tư vấn lộ trình phát triển và tổ chức đánh giá định kỳ để nâng cao chất lượng nhân sự."
      },
      {
        id: "sol-dig-2",
        name: "CO2 PIM",
        challenge: "Quản lý dự án vẫn theo kinh nghiệm cá nhân, thiếu chuẩn hóa. Khó kiểm soát dữ liệu realtime dẫn đến lãng phí nguồn lực và chậm tiến độ dự án.",
        solution: "Phần mềm chuyên sâu về quản lý dự án đầu tư và triển khai. Tích hợp AI để chuẩn hóa quy trình, tiết kiệm nguồn lực, kiểm soát realtime và liên kết các hệ thống doanh nghiệp."
      }
    ]
  },
  {
    id: "bu-product",
    name: "Sản phẩm",
    solutions: [
      {
        id: "sol-prod-1",
        name: "Kính điện thông minh",
        challenge: "Nhu cầu chuyển đổi không gian riêng tư tức thì nhưng vẫn muốn giữ ánh sáng tự nhiên. Mong muốn có công cụ truyền thông quảng bá thương hiệu khác biệt trên mặt kính.",
        solution: "Cung cấp hệ thống kính điện có khả năng chuyển đổi giữa trạng thái trong suốt và mờ đục chỉ bằng công tắc. Tích hợp chức năng trình chiếu video quảng cáo độc đáo."
      },
      {
        id: "sol-prod-2",
        name: "Xử lý bề mặt (Topcoat)",
        challenge: "Yêu cầu kỹ thuật khắt khe về độ bền chống ăn mòn, chịu nhiệt, mài mòn cao trong các môi trường công nghiệp khắc nghiệt.",
        solution: "Cung cấp các giải pháp xử lý bề mặt chuyên sâu (mạ, phủ Topcoat). Nâng cao tuổi thọ thiết bị, linh kiện đáp ứng các tiêu chuẩn OEM quốc tế."
      }
    ]
  }
];

export interface Expert {
  expert_id: string;
  name: string;
  role: string;
  image_url?: string;
  meta_tags: {
    line_id?: string;
    topic?: string;
    solution_type?: string;
  };
  hover_content: {
    short_bio: string;
    top_impact: string;
  };
}

export const MOCK_EXPERTS: Expert[] = [
  {
    expert_id: "exp_001",
    name: "Nguyễn Đức Hạnh",
    role: "Tổng Giám đốc FNX Group",
    meta_tags: {
      line_id: "FNX Group",
      topic: "strategy",
      solution_type: "corporate-culture"
    },
    hover_content: {
      short_bio: "Hoạch định và dẫn dắt thực thi chiến lược phát triển nguồn nhân lực; Xây dựng văn hóa doanh nghiệp",
      top_impact: ""
    }
  },
  {
    expert_id: "exp_002",
    name: "Nguyễn Kiều Quyên",
    role: "Phó Tổng giám đốc FNX Group | Giám đốc FNX-SC",
    meta_tags: {
      line_id: "FNX-SC",
      topic: "supply-chain",
      solution_type: "operation-optimization"
    },
    hover_content: {
      short_bio: "Quản trị kế hoạch - mua sắm; Quản lý vận hành chuỗi cung ứng; Phát triển hệ thống nhà cung cấp; Kết nối doanh nghiệp công nghiệp hỗ trợ",
      top_impact: ""
    }
  },
  {
    expert_id: "exp_003",
    name: "Nguyễn Trí Kiên",
    role: "Chủ tịch Hội đồng Khoa học và Công nghệ FNX-RD",
    meta_tags: {
      line_id: "FNX-RD",
      topic: "construction-maintenance",
      solution_type: "safety-standards"
    },
    hover_content: {
      short_bio: "Chiến lược khoa học và công nghệ; Nghiên cứu và phát triển (R&D); Đổi mới sáng tạo; Chuyển giao và làm chủ công nghệ; Tư vấn công nghệ",
      top_impact: ""
    }
  },
  {
    expert_id: "exp_004",
    name: "Lã Thanh Toàn",
    role: "Phó Tổng giám đốc FNX Group | Tổng Giám đốc FNX-RD",
    meta_tags: {
      line_id: "FNX-RD",
      topic: "system-engineering",
      solution_type: "automation"
    },
    hover_content: {
      short_bio: "Tư vấn đầu tư; Quản lý nghiên cứu và phát triển; Quản trị đổi mới sáng tạo; Phát triển công nghệ công nghiệp; Quản lý dự án khoa học và công nghệ; Thương mại hóa kết quả nghiên cứu",
      top_impact: ""
    }
  },
  {
    expert_id: "exp_005",
    name: "Đỗ Thanh Minh",
    role: "Giám đốc Trung tâm Tư vấn & Triển khai FNX-RD",
    meta_tags: {
      line_id: "FNX-RD",
      topic: "consulting",
      solution_type: "project-management"
    },
    hover_content: {
      short_bio: "Quản lý dự án đầu tư xây dựng; Tư vấn thiết kế và triển khai công trình; Quản lý hợp đồng EPC; Giám sát và điều phối thực hiện dự án",
      top_impact: ""
    }
  },
  {
    expert_id: "exp_006",
    name: "Đinh Thị Thúy Quỳnh",
    role: "Giám đốc Trung tâm Nhân lực số FNX-RD",
    meta_tags: {
      line_id: "FNX-RD",
      topic: "digital-hr",
      solution_type: "operations-optimization"
    },
    hover_content: {
      short_bio: "Vận hành doanh nghiệp; Điều phối Kinh doanh; Số hóa & Kiến trúc Công nghệ Doanh nghiệp",
      top_impact: ""
    }
  },
  {
    expert_id: "exp_007",
    name: "TS. Nguyễn Đặng Bình Thành",
    role: "Chuyên gia Nghiên cứu & Tư vấn công nghệ FNX-RD",
    meta_tags: {
      line_id: "FNX-RD",
      topic: "machinery",
      solution_type: "industrial-optimization"
    },
    hover_content: {
      short_bio: "Máy và thiết bị công nghiệp hóa chất-dầu khí",
      top_impact: ""
    }
  },
  {
    expert_id: "exp_008",
    name: "PGS.TS. Tạ Hồng Đức",
    role: "Giám đốc Trung tâm R&D FNX-RD",
    meta_tags: {
      line_id: "FNX-RD",
      topic: "chemical-engineering",
      solution_type: "green-chemistry"
    },
    hover_content: {
      short_bio: "Máy và thiết bị công nghiệp hóa chất-dầu khí",
      top_impact: ""
    }
  }
];

export const MOCK_PARTNERS = [
  { id: "p-1", name: "Viettel", logo: "/images/partners/viettel-seeklogo.svg" },
  { id: "p-2", name: "Petrovietnam", logo: "/images/partners/PVCFC.png" },
  { id: "p-3", name: "VAST", logo: "/images/partners/logo-vast.jpg" },
  { id: "p-4", name: "GELEX", logo: "/images/partners/Logo_GELEX_Group.png" },
  { id: "p-5", name: "DFC", logo: "" },
  { id: "p-6", name: "Hitachi Energy", logo: "/images/partners/Hitachi-Energy-Logo-Vector.svg-.png" },
  { id: "p-7", name: "Thống Nhất", logo: "/images/partners/Thống_Nhất.png" },
  { id: "p-8", name: "THACO Industries", logo: "/images/partners/LOGO_THACO.png" },
  { id: "p-9", name: "CECO", logo: "/images/partners/CECO.jpg.png" },
  { id: "p-10", name: "Vietstar Meiden", logo: "" },
  { id: "p-11", name: "VS Group", logo: "" },
  { id: "p-12", name: "HUST", logo: "/images/partners/logo-hust.png" },
  { id: "p-13", name: "GPS", logo: "/images/partners/GPS.png" },
  { id: "p-14", name: "Viglacera", logo: "/images/partners/logo-viglacera.jpg" },
  { id: "p-15", name: "LS Electric", logo: "" },
  { id: "p-16", name: "Ferroli", logo: "/images/partners/ferroli.png" },
  { id: "p-17", name: "Tiền Phong Plastic", logo: "/images/partners/logo-nhua-tien-phong.png" },
  { id: "p-18", name: "Asia Star", logo: "" },
  { id: "p-19", name: "Nano Lam Sơn", logo: "" },
  { id: "p-20", name: "Sino Vanlock", logo: "" },
  { id: "p-21", name: "Sơn Hà", logo: "/images/partners/Logo-Cong-ty-Quoc-te-Son-Ha.png" },
  { id: "p-22", name: "CADIVI", logo: "/images/partners/Logo-Cong-Ty-Day-Cap-Dien-Viet-Nam.png" },
  { id: "p-23", name: "CADI-SUN", logo: "/images/partners/Logo-Cong-ty-Co-phan-Day-va-Cap-dien-Thuong-Dinh-CADI-SUN.png" },
  { id: "p-24", name: "Seoul Metal", logo: "" },
  { id: "p-25", name: "KD Group", logo: "" },
  { id: "p-26", name: "Thanh Thành Đạt", logo: "/images/partners/thanh_thanh_dat.png" },
];
