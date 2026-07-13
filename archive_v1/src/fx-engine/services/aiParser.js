export const generatePresentation = async (payload) => {
  const { objective, audience, brief, template, logicModel } = payload;
  
  try {
    // Gọi API Backend (Cloudflare Pages Function)
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
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

    // Tìm một text tiêu biểu từ brief để làm mock title
    const mockTitle = brief.governingThought || brief.progress || brief.concept || brief.issue || Object.values(brief)[0] || 'Chưa có tiêu đề';
    
    if (logicModel === 'MECE') {
      return {
        framework: 'MECE',
        title: 'Báo Cáo Phân Tích Đa Chiều',
        slides: [
          {
            id: 1,
            layout: 'TITLE',
            data: {
              title: mockTitle,
              subtitle: `Dành cho: ${audience} | Mục tiêu: ${objective}`,
              author: 'FNX Group'
            }
          },
          {
            id: 2,
            layout: 'MECE_TREE',
            data: {
              title: 'Phân tích (MECE)',
              nodes: [
                { title: 'Khía cạnh 1', details: [Object.values(brief)[0] || 'Dữ liệu 1'] },
                { title: 'Khía cạnh 2', details: [Object.values(brief)[1] || 'Dữ liệu 2'] }
              ]
            }
          }
        ]
      };
    }

    return {
      framework: template,
      title: 'Báo Cáo Mặc Định',
      slides: [
        {
          id: 1,
          layout: 'TITLE',
          data: {
            title: mockTitle.substring(0, 50) + (mockTitle.length > 50 ? '...' : ''),
            subtitle: `Dành cho: ${audience}`,
            author: 'AI Parser'
          }
        },
        {
          id: 2,
          layout: 'BULLET_POINTS',
          data: {
            title: 'Chi tiết Báo Cáo',
            items: Object.values(brief).filter(text => typeof text === 'string').map(text => text.substring(0, 60))
          }
        }
      ]
    };
  }
};
