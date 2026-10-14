/**
 * Danh sách đối tác FNX
 * Theo Spec 01 (Mục 7.1): Chỉ render khi approved: true
 */

export interface Partner {
  id: string;
  name: string;
  logo: string;
  approved: boolean;
}

export const partners: Partner[] = [
  { id: "p-1", name: "Viettel", logo: "/images/partners/viettel-seeklogo.svg", approved: true },
  { id: "p-2", name: "Petrovietnam (PVCFC)", logo: "/images/partners/PVCFC.png", approved: true },
  { id: "p-3", name: "VAST (Viện Hàn lâm KH&CN VN)", logo: "/images/partners/logo-vast.jpg", approved: true },
  { id: "p-4", name: "GELEX", logo: "/images/partners/Logo_GELEX_Group.png", approved: true },
  { id: "p-6", name: "Hitachi Energy", logo: "/images/partners/Hitachi-Energy-Logo-Vector.svg-.png", approved: true },
  { id: "p-7", name: "Xe đạp Thống Nhất", logo: "/images/partners/Thống_Nhất.png", approved: true },
  { id: "p-8", name: "THACO Industries", logo: "/images/partners/LOGO_THACO.png", approved: true },
  { id: "p-9", name: "CECO", logo: "/images/partners/CECO.jpg.png", approved: true },
  { id: "p-12", name: "HUST (ĐH Bách Khoa Hà Nội)", logo: "/images/partners/logo-hust.png", approved: true },
  { id: "p-13", name: "GPS", logo: "/images/partners/GPS.png", approved: true },
  { id: "p-14", name: "Viglacera", logo: "/images/partners/logo-viglacera.jpg", approved: true },
  { id: "p-16", name: "Ferroli", logo: "/images/partners/ferroli.png", approved: true },
  { id: "p-17", name: "Nhựa Tiền Phong", logo: "/images/partners/logo-nhua-tien-phong.png", approved: true },
  { id: "p-21", name: "Sơn Hà", logo: "/images/partners/Logo-Cong-ty-Quoc-te-Son-Ha.png", approved: true },
  { id: "p-22", name: "CADIVI", logo: "/images/partners/Logo-Cong-Ty-Day-Cap-Dien-Viet-Nam.png", approved: true },
  { id: "p-23", name: "CADI-SUN", logo: "/images/partners/Logo-Cong-ty-Co-phan-Day-va-Cap-dien-Thuong-Dinh-CADI-SUN.png", approved: true },
  { id: "p-26", name: "Thanh Thành Đạt", logo: "/images/partners/thanh_thanh_dat.png", approved: true },
  { id: "p-27", name: "VinUni", logo: "/images/partners/logo-vinuni.png", approved: true },
  { id: "p-28", name: "VASI", logo: "/images/partners/logo_vasis.png", approved: true },
];
