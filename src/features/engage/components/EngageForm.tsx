'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import {
  contactTopics,
  getTopicBySlug,
  getOrderedTopicGroups,
  UNIT_NAMES,
  ContactTopic,
} from '@/content/contact-topics';
import { getExpertsByUnit, getExpertById } from '@/content/experts';
import { submitContact, ContactFormData } from '@/lib/contact';

export function EngageForm() {
  const searchParams = useSearchParams();
  const unitParam = searchParams.get('unit'); // 'rd' | 'sc' | null
  const topicParam = searchParams.get('topic');
  const expertParam = searchParams.get('expert');

  // Form State
  const [topic, setTopic] = useState<string>('');
  const [expert, setExpert] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [agreeConsent, setAgreeConsent] = useState<boolean>(false);
  const [websiteHoneypot, setWebsiteHoneypot] = useState<string>('');

  // UI / Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedIsProfile, setSubmittedIsProfile] = useState<boolean>(false);
  const [submittedIsExpert, setSubmittedIsExpert] = useState<boolean>(false);
  const [submittedExpertName, setSubmittedExpertName] = useState<string>('');

  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>(null);

  // Khởi tạo topic và expert từ query URL
  useEffect(() => {
    if (topicParam) {
      const matched = getTopicBySlug(topicParam);
      if (matched) {
        setTopic(matched.slug);
      }
    } else {
      setTopic('');
    }

    if (expertParam) {
      const matchedExpert = getExpertById(expertParam);
      if (matchedExpert) {
        setExpert(matchedExpert.id);
      }
    }
  }, [topicParam, expertParam]);

  // Topic hiện tại đang chọn
  const selectedTopic: ContactTopic | undefined = getTopicBySlug(topic);

  // Đơn vị hiệu lực
  const effectiveUnit: 'rd' | 'sc' | 'group' = selectedTopic
    ? selectedTopic.unit
    : unitParam === 'rd'
    ? 'rd'
    : unitParam === 'sc'
    ? 'sc'
    : 'group';

  // Nhu cầu trao đổi chuyên gia theo Spec 07
  const isExpertTopic = topic === 'chuyen-gia-rd' || topic === 'chuyen-gia-sc';
  const expertUnit: 'rd' | 'sc' | null = topic === 'chuyen-gia-rd' ? 'rd' : topic === 'chuyen-gia-sc' ? 'sc' : null;
  const availableExperts = expertUnit ? getExpertsByUnit(expertUnit) : [];

  // Reset expert nếu topic chuyển sang topic không phù hợp
  useEffect(() => {
    if (!isExpertTopic) {
      setExpert('');
    } else if (expert && !availableExperts.some((e) => e.id === expert)) {
      setExpert('');
    }
  }, [topic, isExpertTopic, expert, availableExperts]);

  // Nhóm dropdown được sắp xếp ưu tiên theo unitParam
  const orderedGroups = getOrderedTopicGroups(unitParam);

  // Tiêu đề Form linh hoạt theo Spec 07
  const formTitle = isExpertTopic && expertUnit
    ? `Đặt lịch trao đổi với chuyên gia ${UNIT_NAMES[expertUnit]}`
    : selectedTopic
    ? `Gửi yêu cầu tới ${UNIT_NAMES[selectedTopic.unit]}`
    : unitParam === 'rd'
    ? 'Gửi yêu cầu tới FNX-RD'
    : unitParam === 'sc'
    ? 'Gửi yêu cầu tới FNX-SC'
    : 'Gửi yêu cầu';

  // Màu nút submit theo theme của đơn vị
  const buttonBgColor =
    effectiveUnit === 'rd'
      ? 'bg-[#0284C7] hover:bg-[#0369A1]'
      : effectiveUnit === 'sc'
      ? 'bg-[#00756F] hover:bg-[#008f88]'
      : 'bg-[#132949] hover:bg-[#1f3f6e]';

  // Placeholder động cho nội dung
  const contentPlaceholder = selectedTopic?.isProfile
    ? 'Cho chúng tôi biết bạn quan tâm tới lĩnh vực nào'
    : 'Mô tả ngắn bài toán hoặc sản phẩm bạn quan tâm';

  // Kiểm tra tính hợp lệ của từng trường
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!topic) {
      newErrors.topic = 'Vui lòng chọn nhu cầu bạn cần hỗ trợ';
    }

    if (!name.trim()) {
      newErrors.name = 'Vui lòng nhập tên tổ chức hoặc cá nhân';
    } else if (name.trim().length < 2 || name.trim().length > 120) {
      newErrors.name = 'Tên phải từ 2 đến 120 ký tự';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Vui lòng nhập email liên hệ';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Vui lòng nhập địa chỉ email hợp lệ';
    }

    if (phone.trim()) {
      const phoneRegex = /^\+?[0-9\s.-]{9,15}$/;
      if (!phoneRegex.test(phone.trim())) {
        newErrors.phone = 'Số điện thoại không hợp lệ (9–15 chữ số)';
      }
    }

    if (!content.trim()) {
      newErrors.content = 'Vui lòng nhập nội dung cần hỗ trợ';
    } else if (content.trim().length < 10) {
      newErrors.content = 'Nội dung cần tối thiểu 10 ký tự';
    } else if (content.trim().length > 2000) {
      newErrors.content = 'Nội dung tối đa 2.000 ký tự';
    }

    if (!agreeConsent) {
      newErrors.agreeConsent = 'Bạn cần đồng ý để tiếp tục';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setSubmittedIsProfile(!!selectedTopic?.isProfile);

    if (isExpertTopic) {
      setSubmittedIsExpert(true);
      const exp = getExpertById(expert);
      setSubmittedExpertName(exp ? exp.name : '');
    } else {
      setSubmittedIsExpert(false);
      setSubmittedExpertName('');
    }

    const formData: ContactFormData = {
      topic,
      unit: effectiveUnit,
      unitHint: unitParam || undefined,
      expert: expert || undefined,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      content: content.trim(),
      agreeConsent,
      sourcePage: typeof window !== 'undefined' ? document.referrer || window.location.href : undefined,
      website: websiteHoneypot,
    };

    try {
      const res = await submitContact(formData);
      if (res.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleResetForm = () => {
    setTopic('');
    setExpert('');
    setName('');
    setEmail('');
    setPhone('');
    setContent('');
    setAgreeConsent(false);
    setErrors({});
    setStatus('idle');
  };

  // Trạng thái GỬI THÀNH CÔNG
  if (status === 'success') {
    return (
      <div className="w-full bg-white rounded-xl border border-[#DCE3EC] p-8 sm:p-12 shadow-sm text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Yêu cầu đã được gửi thành công!
        </h3>

        <p className="text-gray-600 max-w-lg mx-auto text-base leading-relaxed mb-8">
          {submittedIsExpert
            ? `FNX đã nhận yêu cầu trao đổi ${
                submittedExpertName ? `với ${submittedExpertName}` : 'với chuyên gia'
              }. Chúng tôi sẽ liên hệ lại qua email để sắp xếp lịch trao đổi.`
            : submittedIsProfile
            ? 'FNX đã nhận yêu cầu hồ sơ năng lực và sẽ gửi qua email của bạn sau khi xem xét.'
            : 'Cảm ơn bạn! FNX đã nhận yêu cầu và sẽ phản hồi qua email trong thời gian sớm nhất.'}
        </p>

        <button
          type="button"
          onClick={handleResetForm}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl border border-[#DCE3EC] p-6 sm:p-10 shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#132949] mb-8 tracking-tight">
        {formTitle}
      </h2>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm animate-in fade-in duration-150">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
          <div>
            <p className="font-semibold mb-0.5">Chưa gửi được yêu cầu</p>
            <p>
              Vui lòng thử lại hoặc liên hệ trực tiếp hotline{' '}
              <a href="tel:+84898291618" className="font-bold underline">
                0898 291 618
              </a>{' '}
              / email{' '}
              <a href="mailto:info@fnx.vn" className="font-bold underline">
                info@fnx.vn
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Honeypot field chống bot tự động */}
        <input
          type="text"
          name="website"
          value={websiteHoneypot}
          onChange={(e) => setWebsiteHoneypot(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* TRƯỜNG 1: BẠN CẦN HỖ TRỢ VỀ (Đặt đầu tiên) */}
        <div>
          <label htmlFor="field-topic" className="block text-sm font-semibold text-gray-900 mb-2">
            Bạn cần hỗ trợ về <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="field-topic"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                if (errors.topic) {
                  setErrors((prev) => ({ ...prev, topic: '' }));
                }
              }}
              aria-required="true"
              aria-invalid={!!errors.topic}
              aria-describedby={errors.topic ? 'error-topic' : undefined}
              className={`w-full rounded-lg border px-4 py-3 text-sm text-gray-900 bg-white transition-colors appearance-none focus:outline-none focus:ring-2 focus:ring-[#132949]/20 focus:border-[#132949] ${
                errors.topic ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
              }`}
            >
              <option value="">Chọn nhu cầu</option>
              {orderedGroups.map((group) => (
                <optgroup key={group.key} label={group.label} className="font-bold text-gray-900">
                  {group.topics.map((item) => (
                    <option key={item.slug} value={item.slug} className="font-normal text-gray-800">
                      {item.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {/* Custom chevron indicator */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Dòng ghi chú động dưới ô Select */}
          {selectedTopic && (
            <div className="mt-2 text-xs">
              <span
                className={`font-semibold ${
                  selectedTopic.unit === 'rd'
                    ? 'text-[#0284C7]'
                    : selectedTopic.unit === 'sc'
                    ? 'text-[#00756F]'
                    : 'text-[#132949]'
                }`}
              >
                ✓ Yêu cầu sẽ được chuyển tới {UNIT_NAMES[selectedTopic.unit]}
              </span>
              {selectedTopic.isProfile && (
                <p className="text-gray-500 italic mt-0.5">
                  FNX sẽ xem xét yêu cầu và gửi hồ sơ năng lực qua email của bạn.
                </p>
              )}
            </div>
          )}

          {errors.topic && (
            <p id="error-topic" className="mt-1.5 text-xs text-red-600 font-medium">
              {errors.topic}
            </p>
          )}
        </div>

        {/* TRƯỜNG MỚI: CHUYÊN GIA BẠN MUỐN TRAO ĐỔI (Spec 07) */}
        {isExpertTopic && expertUnit && (
          <div
            className="p-4 rounded-md border border-[#DCE3EC] bg-[#FAFCFE] flex flex-col gap-2 animate-in fade-in duration-200"
            style={{
              borderLeftWidth: '3px',
              borderLeftColor: expertUnit === 'rd' ? '#0478B3' : '#00756F',
            }}
          >
            <label htmlFor="field-expert" className="block text-sm font-semibold text-gray-900">
              Chuyên gia bạn muốn trao đổi{' '}
              <span className="inline-block text-[11px] font-semibold text-[#A36426] bg-[#FDF4E7] rounded px-1.5 py-0.5 ml-1.5 align-middle">
                MỚI
              </span>
            </label>
            <div className="relative">
              <select
                id="field-expert"
                value={expert}
                onChange={(e) => setExpert(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 bg-white transition-colors appearance-none focus:outline-none focus:ring-2 focus:ring-[#132949]/20 focus:border-[#132949]"
              >
                <option value="">Để FNX gợi ý chuyên gia phù hợp</option>
                {availableExperts.map((exp) => (
                  <option key={exp.id} value={exp.id}>
                    {exp.name} — {exp.field}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              FNX sẽ liên hệ lại qua email để sắp xếp lịch trao đổi với chuyên gia.
            </p>
          </div>
        )}

        {/* HÀNG 3 CỘT TRÊN DESKTOP: TÊN, EMAIL, SỐ ĐIỆN THOẠI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* TRƯỜNG 2: TÊN TỔ CHỨC / CÁ NHÂN */}
          <div>
            <label htmlFor="field-name" className="block text-sm font-semibold text-gray-900 mb-2">
              Tên tổ chức / cá nhân <span className="text-red-500">*</span>
            </label>
            <input
              id="field-name"
              type="text"
              value={name}
              placeholder="Công ty ABC"
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
              }}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'error-name' : undefined}
              className={`w-full rounded-lg border px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#132949]/20 focus:border-[#132949] ${
                errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p id="error-name" className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* TRƯỜNG 3: EMAIL LIÊN HỆ */}
          <div>
            <label htmlFor="field-email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email liên hệ <span className="text-red-500">*</span>
            </label>
            <input
              id="field-email"
              type="email"
              value={email}
              placeholder="ten@congty.vn"
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
              }}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
              className={`w-full rounded-lg border px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#132949]/20 focus:border-[#132949] ${
                errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p id="error-email" className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* TRƯỜNG 4: SỐ ĐIỆN THOẠI */}
          <div>
            <label htmlFor="field-phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Số điện thoại <span className="text-gray-400 font-normal">(tùy chọn)</span>
            </label>
            <input
              id="field-phone"
              type="tel"
              value={phone}
              placeholder="09xx xxx xxx"
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
              }}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'error-phone' : undefined}
              className={`w-full rounded-lg border px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#132949]/20 focus:border-[#132949] ${
                errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
              }`}
            />
            {errors.phone && (
              <p id="error-phone" className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* TRƯỜNG 5: NỘI DUNG CẦN HỖ TRỢ */}
        <div>
          <label htmlFor="field-content" className="block text-sm font-semibold text-gray-900 mb-2">
            Nội dung cần hỗ trợ <span className="text-red-500">*</span>
          </label>
          <textarea
            id="field-content"
            rows={5}
            value={content}
            maxLength={2000}
            placeholder={contentPlaceholder}
            onChange={(e) => {
              setContent(e.target.value);
              if (errors.content) setErrors((prev) => ({ ...prev, content: '' }));
            }}
            aria-required="true"
            aria-invalid={!!errors.content}
            aria-describedby={errors.content ? 'error-content' : undefined}
            className={`w-full rounded-lg border p-4 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#132949]/20 focus:border-[#132949] resize-none ${
              errors.content ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
            }`}
          />
          <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
            {errors.content ? (
              <p id="error-content" className="text-red-600 font-medium">
                {errors.content}
              </p>
            ) : (
              <span />
            )}
            <span className="font-mono ml-auto">
              {content.length.toLocaleString('vi-VN')} / 2.000
            </span>
          </div>
        </div>

        {/* TRƯỜNG 6: CHECKBOX ĐỒNG Ý XỬ LÝ DỮ LIỆU CÁ NHÂN */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreeConsent}
              onChange={(e) => {
                setAgreeConsent(e.target.checked);
                if (errors.agreeConsent) {
                  setErrors((prev) => ({ ...prev, agreeConsent: '' }));
                }
              }}
              aria-required="true"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#132949] focus:ring-[#132949]"
            />
            <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Tôi đồng ý để FNX xử lý thông tin trên nhằm phản hồi yêu cầu của tôi, theo{' '}
              <Link
                href="/privacy"
                target="_blank"
                className="underline font-semibold text-gray-900 hover:text-black"
              >
                Chính sách bảo mật
              </Link>
              . <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.agreeConsent && (
            <p className="mt-1.5 text-xs text-red-600 font-medium pl-7">
              {errors.agreeConsent}
            </p>
          )}
        </div>

        {/* NÚT SUBMIT */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2.5 ${buttonBgColor} disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Đang gửi thông điệp...</span>
              </>
            ) : (
              <>
                <span>Gửi thông điệp</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
