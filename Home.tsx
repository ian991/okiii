import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const benefits = [
    { name: 'JAMINAN PRIVASI', icon: 'verified_user' },
    { name: 'KONSULTASI 24/7', icon: 'chat' },
    { name: 'BEBAS REVISI', icon: 'assignment_return' },
    { name: 'PENGERJAAN KILAT', icon: 'history_edu' },
    { name: 'ANTI PLAGIARISME', icon: 'workspace_premium' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-secondary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Partner Akademik Terpercaya
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy mb-8 tracking-tight leading-tight">
            Tugas Beres, <br />
            <span className="text-secondary italic">Hidup Lebih Bebas.</span>
          </h1>
          <p className="text-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed">
            Bantu ringankan beban kuliahmu dengan pengerjaan profesional dan cepat. Fokus pada masa depanmu, biar kami yang bantu urusan akademismu.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/konsultasi" 
              className="bg-secondary text-on-secondary px-10 py-5 rounded-2xl text-xl font-bold shadow-lg shadow-secondary/20 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
            >
              Mulai Konsultasi <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link 
              to="/layanan" 
              className="bg-surface-container-low border border-outline-variant text-on-surface px-10 py-5 rounded-2xl text-xl font-bold hover:bg-surface-container hover:border-outline hover:scale-105 transition-all duration-300 active:scale-95 text-center"
            >
              Lihat Layanan
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[120px] scale-90 opacity-60"></div>
          <div className="relative z-10 w-full max-w-lg p-6 bg-white/20 backdrop-blur-sm rounded-[3rem] border border-white/30 shadow-2xl overflow-hidden group">
            <img 
              alt="20Day Rabbit Mascot" 
              className="relative z-10 w-full transform group-hover:translate-y-[-12px] group-hover:scale-105 transition-all duration-700 ease-out" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uijVXaZD_jijUengqF7iolyVEnw0aTNmlNglrj9-OQfYz7Iemfu_q96F0YMF4pt6f9CK_xZQxLwT0kCUauth6RAdycv7qTq_ZHPadJTgY1boiR8UF3X08MbxCAisgtII0tk0efDsnS6NQC_ReYcm9UhY1QiL7qcP0-YW2SptfFTM2cIVhU2_cYDmSKJH0HtYyMmR1DeKvbMAoFpesq5hKEuG8UEiZDCPxwMrbOwC0eIZKVvkL9_YSRwNt_u7NlvqYmi2iE5yAC7Pp8" 
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-outline-variant/30 hidden lg:block z-20 animate-bounce [animation-duration:3s]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">verified</span>
              </div>
              <div>
                <p className="text-sm font-bold text-navy">A+ Guaranteed</p>
                <p className="text-[12px] text-on-surface-variant">Kualitas Tanpa Kompromi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Professional Marquee */}
      <div className="w-full overflow-hidden bg-black py-8 border-y border-outline-variant/10">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-24 px-12">
            {benefits.map((benefit, idx) => (
              <span key={idx} className="flex items-center gap-3 font-semibold text-white/80 uppercase tracking-widest text-[13px]">
                <span className="material-symbols-outlined text-secondary-container">{benefit.icon}</span> 
                {benefit.name}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-24 px-12">
            {benefits.map((benefit, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-3 font-semibold text-white/80 uppercase tracking-widest text-[13px]">
                <span className="material-symbols-outlined text-secondary-container">{benefit.icon}</span> 
                {benefit.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-surface-container-low py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-navy mb-6">Kenapa harus 20Day?</h2>
            <p className="text-sm text-on-surface-variant max-w-2xl mx-auto">Kami tidak sekadar mengerjakan tugas, kami memastikan setiap detail memenuhi standar akademik tertinggi untuk kesuksesan studimu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Pengerjaan Cepat', 
                desc: 'Punya deadline mendadak besok pagi? Tenang, sistem koordinasi kami siap menangani tugas kilat dengan akurasi tetap terjaga.',
                icon: 'bolt'
              },
              { 
                title: 'Our Task, Our Expertise', 
                desc: 'Bukan sekadar bantuan, tapi partner diskusi. Lewat Konsultasi Santai with Mentor, setiap kendala tugasmu kami carikan jalan keluarnya.',
                icon: 'psychology'
              },
              { 
                title: 'Kerahasiaan Mutlak', 
                desc: 'Kami sangat menjaga privasi identitasmu. Data dan detail tugas terenkripsi aman dan tidak akan pernah dibocorkan.',
                icon: 'lock_person'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-3xl border border-outline-variant/30 hover:border-secondary/50 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-all duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-24">
        <div className="bg-primary-container rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center shadow-2xl relative group min-h-[400px]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000 delay-150"></div>
          </div>
          <div className="p-10 md:p-16 z-10 w-full relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Siap Bebas dari Tugas Menumpuk?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-md">Kirimkan detail tugasmu sekarang dan dapatkan estimasi harga terbaik. Tim kami siap merespons kurang dari 5 menit.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/konsultasi" className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold hover:bg-secondary/90 transition-all flex items-center gap-3 shadow-xl hover:translate-y-[-4px] active:translate-y-0">
                <span className="material-symbols-outlined">chat</span> Chat Admin Sekarang
              </Link>
              <Link to="/layanan" className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-center">
                Tanya Price List
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
