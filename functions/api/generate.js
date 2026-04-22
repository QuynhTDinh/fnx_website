export async function onRequestPost(context) {
  try {
    // 1. Nhận request từ Client
    const { request, env } = context;
    const body = await request.json();
    const { rawInput, framework } = body;

    if (!rawInput || !framework) {
      return new Response(JSON.stringify({ error: "Thiếu dữ liệu rawInput hoặc framework" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. Lấy API Key từ biến môi trường của Cloudflare
    // Lưu ý: ENV variable phải được cài đặt trên Cloudflare Dashboard tên là GEMINI_API_KEY
    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Lỗi cấu hình server: Chưa có API Key" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 3. Chuẩn bị Prompt cho Gemini để ép cấu trúc JSON
    const systemPrompt = `
      Bạn là một chuyên gia tư vấn chiến lược cấp cao của FNX Group.
      Nhiệm vụ của bạn là phân tích dữ liệu thô (raw input) và trích xuất thành cấu trúc JSON chặt chẽ dựa trên Framework yêu cầu: ${framework}.
      
      YÊU CẦU TRẢ VỀ CHÍNH XÁC ĐỊNH DẠNG JSON SAU (không giải thích thêm):
      {
        "framework": "${framework}",
        "title": "Tiêu đề bài thuyết trình",
        "slides": [
          {
            "id": 1,
            "layout": "TITLE",
            "data": {
              "title": "Tiêu đề chính",
              "subtitle": "Phụ đề hoặc tóm tắt",
              "author": "Được tạo bởi AI"
            }
          },
          {
            "id": 2,
            "layout": "BULLET_POINTS",
            "data": {
              "title": "Tiêu đề slide",
              "items": ["Ý chính 1", "Ý chính 2", "Ý chính 3"]
            }
          }
        ]
      }
      Lưu ý: Bạn có thể tự thêm các slide layout BULLET_POINTS hoặc MECE_TREE tùy thuộc vào độ dài của raw input. MECE_TREE có cấu trúc: "data": { "title": "...", "nodes": [ {"title": "...", "details": ["..."]} ] }
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
          parts: [{ text: systemPrompt }]
        },
        contents: [
          {
            parts: [{ text: `Dữ liệu thô cần xử lý:\n${rawInput}` }]
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
