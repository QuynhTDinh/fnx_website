export const generatePresentation = async (rawInput, framework) => {
  try {
    // Gọi API Backend (Cloudflare Pages Function)
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rawInput, framework }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.warn("API gọi thất bại, sử dụng Mock Data làm fallback...");
      throw new Error("Sử dụng Mock Data");
    }
  } catch (error) {
    // MOCK DATA FALLBACK (Dành cho việc dev local khi chưa có API Key)
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (framework === 'MECE') {
      return {
        framework: 'MECE',
        title: 'Hệ Thống Báo Cáo Chiến Lược',
        slides: [
          {
            id: 1,
            layout: 'TITLE',
            data: {
              title: 'Chiến Lược Tăng Trưởng',
              subtitle: 'Phân tích đa chiều dựa trên mô hình MECE (Mock)',
              author: 'FNX Group'
            }
          },
          {
            id: 2,
            layout: 'MECE_TREE',
            data: {
              title: 'Các Trụ Cột Chính',
              nodes: [
                { title: 'Tài Chính', details: ['Cắt giảm 20% chi phí', 'Tăng dòng tiền'] },
                { title: 'Sản Phẩm', details: ['Ra mắt FX-Engine', 'Nâng cấp UI/UX'] },
                { title: 'Vận Hành', details: ['Tự động hóa 80%', 'Đào tạo nhân sự'] }
              ]
            }
          }
        ]
      };
    }

    return {
      framework: framework,
      title: 'Báo Cáo Mặc Định',
      slides: [
        {
          id: 1,
          layout: 'TITLE',
          data: {
            title: `Báo Cáo ${framework} (Mock)`,
            subtitle: 'Được tạo tự động từ Raw Brief',
            author: 'AI Parser'
          }
        },
        {
          id: 2,
          layout: 'BULLET_POINTS',
          data: {
            title: 'Các Ý Chính',
            items: rawInput.split('\n').filter(line => line.trim().length > 0).slice(0, 4)
          }
        }
      ]
    };
  }
};
