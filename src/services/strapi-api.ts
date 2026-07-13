import { HeroData, HubData, ProjectData, StrapiResponse } from '@/types';

// Trong tương lai, biến này sẽ được lấy từ process.env.NEXT_PUBLIC_STRAPI_URL
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

/**
 * Lấy dữ liệu Hero Section (Mock)
 */
export async function getHeroData(): Promise<StrapiResponse<HeroData>> {
  // TODO: Thay thế bằng fetch thực tế từ Strapi
  // const res = await fetch(`${STRAPI_URL}/api/hero?populate=*`);
  // return res.json();
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          id: 1,
          documentId: 'hero-123',
          title_part_1: 'Shaping surface',
          title_part_2: 'Shaping future',
          video_url: '/hero-video.mp4',
          cta_text: 'Kết nối chuỗi giá trị',
          cta_link: '/hubs/sc'
        },
        meta: {}
      });
    }, 100);
  });
}

/**
 * Lấy dữ liệu các Hubs (Mock)
 */
export async function getHubsData(): Promise<StrapiResponse<HubData[]>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            documentId: 'hub-sc',
            title: 'FNX-SC',
            description: 'Chuỗi Cung Ứng',
            slug: 'sc',
            features: ['Quản lý', 'Vận hành']
          }
        ],
        meta: {}
      });
    }, 100);
  });
}
