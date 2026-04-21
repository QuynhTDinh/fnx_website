import { motion } from 'framer-motion';

const protocols = [
  { title: "Tầm nhìn & Sứ mệnh", desc: "Năng lực làm chủ công nghệ cốt lõi, phát triển nền công nghiệp phụ trợ Việt Nam vững mạnh." },
  { title: "Văn hóa Tổ chức", desc: "Luôn kết nối để làm chủ. Định hình nhân sự theo chuẩn mực công nghiệp." },
  { title: "Quy trình I-TT-O", desc: "Tinh gọn đầu vào, chuẩn hóa đầu ra bằng thuật toán sản xuất cốt lõi." },
  { title: "Ứng dụng Công nghệ", desc: "Sử dụng CRM, nguyên tắc Kanban và AI làm hạ tầng kiểm soát." },
  { title: "Con người Chủ chốt", desc: "Không có người 'ngoài cuộc'. Mỗi cá nhân đóng vai trò nền tảng." },
  { title: "Leadership Mindset", desc: "Nhất quán định hướng từ mảng điều hành đến sản xuất." },
];

export default function Pillars() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <motion.div 
          className="col-span-1 md:col-span-2 lg:col-span-3 pb-8 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Core Architecture</h2>
          <p className="text-xl text-white/50 font-medium">Standardized operating pillars of the Industrial OS.</p>
        </motion.div>

        {protocols.map((protocol, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="bg-surface-900 border border-white/5 p-8 md:p-10 rounded-3xl"
          >
            <div className="text-white/30 text-sm font-semibold mb-6 flex items-center justify-between">
              <span>0{idx + 1}</span>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4">{protocol.title}</h4>
            <p className="text-lg text-white/60 font-medium leading-relaxed">
              {protocol.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
