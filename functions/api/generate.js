export async function onRequestPost(context) {
  try {
    // 1. Nhận request từ Client
    const { request, env } = context;
    const body = await request.json();
    const { objective, audience, brief, logicModel, template } = body;

    if (!brief || !template) {
      return new Response(JSON.stringify({ error: "Thiếu dữ liệu brief hoặc template" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Lỗi cấu hình server: Chưa có API Key" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Biến đổi JSON brief thành dạng chuỗi dễ đọc cho Prompt
    const formattedBrief = Object.entries(brief)
      .map(([key, value]) => `- ${key.toUpperCase()}: ${value}`)
      .join('\n      ');

    // 3. Chuẩn bị Prompt cho Gemini theo cấu trúc Combinatorial
    const systemPrompt = `
      Bạn là một Partner cấp cao của hãng tư vấn chiến lược McKinsey & Company.
      Nhiệm vụ của bạn là xây dựng cấu trúc một bài thuyết trình chuyên nghiệp. ĐẶC BIỆT LƯU Ý, bạn phải kết hợp giữa Nội dung thực tế và Khung Tư Duy học thuật:
      
      [THÔNG TIN NGỮ CẢNH]
      - Khán giả (Audience): ${audience || "Ban Giám Đốc (BOD)"}
      - Mục tiêu (Objective): ${objective || "Báo cáo chiến lược"}
      
      [LAYER 1: KHUNG TƯ DUY - CÁCH SẮP XẾP]
      - Hãy áp dụng khung logic này để dẫn dắt câu chuyện: ${logicModel}
      
      [LAYER 2: MỤC ĐÍCH & DỮ LIỆU THỰC TẾ]
      - Loại báo cáo (Template): ${template}
      - Dữ liệu thô từ người dùng:
      ${formattedBrief}

      YÊU CẦU: Dùng dữ liệu thô ở [Layer 2], nhào nặn và sắp xếp chúng thành các Slide chạy theo đúng mạch logic của [Layer 1] (${logicModel}).

      YÊU CẦU TRẢ VỀ CHÍNH XÁC ĐỊNH DẠNG JSON SAU (không giải thích thêm, không markdown \`\`\`json):
      {
        "framework": "${template}",
        "title": "VIẾT 1 TIÊU ĐỀ NGẮN GỌN DƯỚI 10 CHỮ",
        "slides": [
          {
            "id": 1,
            "layout": "TITLE",
            "data": {
              "title": "TIÊU ĐỀ SLIDE (dưới 10 chữ, không dùng câu dài)",
              "subtitle": "Phụ đề hoặc tóm tắt ý chính (tối đa 2 dòng)",
              "author": "Trình bày cho: ${audience}"
            }
          },
          {
            "id": 2,
            "layout": "BULLET_POINTS",
            "data": {
              "title": "Tiêu đề slide (dưới 8 chữ)",
              "items": ["Ý chính 1 (Ngắn gọn, đi thẳng vào vấn đề)", "Ý chính 2", "Ý chính 3"]
            }
          }
        ]
      }
      Lưu ý: Bạn có quyền tự động tạo ra từ 3 đến 6 slide tùy thuộc vào lượng data. 
      Bạn có thể sử dụng layout BULLET_POINTS hoặc MECE_TREE. 
      ĐẶC BIỆT LƯU Ý: Tuyệt đối không copy y nguyên 1 câu dài của người dùng làm tiêu đề chính. Tiêu đề phải được RÚT GỌN (Ví dụ: "Báo cáo tiến độ tháng 10" thay vì "Hôm nay tôi xin báo cáo tiến độ...").
    `;

    // 4. Gọi API của Gemini (Dùng REST API để tương thích tốt nhất với Cloudflare Workers)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: "Bạn là một AI chỉ trả về JSON thuần túy, không có ký tự thừa." }]
        },
        contents: [
          {
            parts: [{ text: systemPrompt }]
          }
        ],
        generationConfig: {
          response_mime_type: "application/json",
        }
      })
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error("Gemini API Error:", errorText);
      throw new Error("Lỗi từ Gemini API");
    }

    const aiData = await geminiResponse.json();
    const resultText = aiData.candidates[0].content.parts[0].text;
    
    // Parse JSON từ Gemini
    const resultJSON = JSON.parse(resultText);

    // 5. Trả kết quả về cho Client
    return new Response(JSON.stringify(resultJSON), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Function Error:", error);
    return new Response(JSON.stringify({ error: "Có lỗi xảy ra khi gọi AI", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
