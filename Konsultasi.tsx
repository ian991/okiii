import { motion } from 'motion/react';
import { useState } from 'react';

export default function Konsultasi() {
  const [nama, setNama] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sumber, setSumber] = useState('');

  const handleKirim = () => {
    if (!nama || !whatsapp || !sumber) {
      alert('Harap lengkapi semua data formulir.');
      return;
    }

    const text = `Halo Admin 20Day, saya ingin melakukan konsultasi.
    
Nama: ${nama}
WhatsApp: +62${whatsapp}
Mengenal 20Day dari: ${sumber}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6285180972466?text=${encodedText}`, '_blank');
  };

  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <img 
            alt="Mascot Illustration" 
            className="w-full max-w-md mx-auto drop-shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uijVXaZD_jijUengqF7iolyVEnw0aTNmlNglrj9-OQfYz7Iemfu_q96F0YMF4pt6f9CK_xZQxLwT0kCUauth6RAdycv7qTq_ZHPadJTgY1boiR8UF3X08MbxCAisgtII0tk0efDsnS6NQC_ReYcm9UhY1QiL7qcP0-YW2SptfFTM2cIVhU2_cYDmSKJH0HtYyMmR1DeKvbMAoFpesq5hKEuG8UEiZDCPxwMrbOwC0eIZKVvkL9_YSRwNt_u7NlvqYmi2iE5yAC7Pp8" 
          />
          <div className="mt-12 space-y-6">
            <h1 className="text-5xl font-extrabold text-navy leading-tight">Mulai Konsultasi Strategismu</h1>
            <p className="text-lg text-on-surface-variant max-w-md">Siap untuk menaklukkan tugas akademik dengan bimbingan ahli? Isi data singkat di samping dan hubungi admin kami.</p>
            
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container p-6 rounded-2xl flex items-center gap-4 border border-outline-variant/30">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy">Proses Cepat</h4>
                  <p className="text-sm text-on-surface-variant">Respon kilat di jam operasional.</p>
                </div>
              </div>
              <div className="bg-surface-container p-6 rounded-2xl flex items-center gap-4 border border-outline-variant/30">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy">Privasi Terjaga</h4>
                  <p className="text-sm text-on-surface-variant">Data dan tugas Anda aman bersama kami.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white p-10 rounded-[3rem] border border-outline-variant/30 shadow-2xl relative"
        >
          <h2 className="text-3xl font-bold text-navy mb-2">Formulir Konsultasi</h2>
          <p className="text-on-surface-variant mb-8">Pastikan data yang diisi sudah benar.</p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-navy mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama lengkap Anda" 
                className="w-full bg-surface-container-lowest border-2 border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-navy mb-2">Nomor WhatsApp</label>
              <div className="flex">
                <span className="bg-surface-container inline-flex items-center px-4 rounded-l-xl border-2 border-r-0 border-gray-300 text-navy font-semibold">+62</span>
                <input 
                  type="text" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="851xxxxxxx" 
                  className="w-full bg-surface-container-lowest border-2 border-gray-300 rounded-r-xl px-4 py-3 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy mb-2">Mengenal 20Day dari mana?</label>
              <div className="grid grid-cols-2 gap-4">
                {['TikTok', 'Instagram', 'Teman', 'Lainnya'].map((opt) => (
                  <button 
                    key={opt}
                    type="button"
                    onClick={() => setSumber(opt)}
                    className={`p-3 border rounded-xl text-sm font-semibold transition-all ${
                      sumber === opt 
                      ? 'bg-secondary text-white border-secondary' 
                      : 'border-outline-variant text-navy hover:border-secondary hover:bg-secondary/5'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button 
              type="button"
              onClick={handleKirim}
              className="w-full bg-brand-green-success bg-[#25d366] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-lg"
            >
              <span className="material-symbols-outlined">chat</span> Kirim Konsultasi ke WhatsApp
            </button>
            <p className="text-center text-[12px] text-on-surface-variant">Dengan menekan tombol, Anda menyetujui Ketentuan Layanan kami.</p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
