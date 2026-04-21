import { motion } from 'framer-motion';

const modules = [
  {
    id: "MOD_01",
    title: "FNX Surface",
    desc: "Xử lý bề mặt kim loại kỹ thuật cao. Nền tảng cốt lõi định hình độ chính xác của sản phẩm cuối.",
    bg: "bg-surface-800", // In real project, use real image background here
  },
  {
    id: "MOD_02",
    title: "FNX Parts",
    desc: "Sản xuất phụ kiện công nghiệp phụ trợ. Đáp ứng tiêu chuẩn kỹ thuật khắt khe của chuỗi cung ứng toàn cầu.",
    bg: "bg-surface-900 border border-white/5",
  },
  {
    id: "MOD_03",
    title: "FNX Lab",
    desc: "Trung tâm nghiên cứu vật liệu và đổi mới sáng tạo, xử lý và nâng cấp giới hạn vật lý.",
    bg: "bg-[#0a0f18]", // A very dark cool tone
  }
];

export default function Ecosystem() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {modules.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`media-card min-h-[450px] md:min-h-[600px] flex flex-col justify-end p-8 md:p-10 ${item.bg}`}
          >
            {/* The gradient makes sure text is legible if an image is used */}
            <div className="media-gradient opacity-60"></div>
            
            <div className="relative z-10 w-full flex justify-between items-end">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 text-lg font-medium leading-snug max-w-[90%]">
                  {item.desc}
                </p>
              </div>
              <svg className="w-6 h-6 text-white mb-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
