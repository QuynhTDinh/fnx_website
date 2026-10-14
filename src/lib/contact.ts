/**
 * Client-side contact handler for FNX Website
 * Giai đoạn 1: Mock submit & client validation
 * Giai đoạn 2: Sẵn sàng kết nối Google Apps Script Web App
 */

export interface ContactFormData {
  topic: string;
  unit: 'rd' | 'sc' | 'group';
  unitHint?: string;
  name: string;
  email: string;
  phone?: string;
  expert?: string;
  content: string;
  agreeConsent: boolean;
  sourcePage?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
  website?: string; // Honeypot chống spam
}

export interface ContactSubmitResponse {
  success: boolean;
  message?: string;
}

/**
 * Gửi dữ liệu form liên hệ
 */
export async function submitContact(data: ContactFormData): Promise<ContactSubmitResponse> {
  // 1. Kiểm tra honeypot: Nếu bot điền trường ẩn này, coi như thành công giả lập
  if (data.website && data.website.trim().length > 0) {
    console.warn('[Contact] Honeypot triggered, ignoring request.');
    return { success: true };
  }

  // 2. Giai đoạn 1: Giả lập độ trễ mạng 700ms
  await new Promise((resolve) => setTimeout(resolve, 700));

  // Ghi log để tiện theo dõi lúc phát triển
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Contact] Mock form submission received:', data);
  }

  // Giai đoạn 2: Tại đây sẽ gọi fetch(APPS_SCRIPT_WEBAPP_URL, { method: 'POST', body: JSON.stringify(data) })
  return {
    success: true,
  };
}
