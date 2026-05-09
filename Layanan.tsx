import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Layanan() {
  const mainPackages = [
    { 
      title: 'Paket Per Halaman', 
      price: 'Rp20.000', 
      suffix: '/hlm', 
      desc: 'Cocok untuk revisi minor atau tambahan konten spesifik.' 
    },
    { 
      title: 'Paket Per Bab', 
      price: 'Rp250k - 500k', 
      suffix: '', 
      desc: 'Harga menyesuaikan tingkat kesulitan dan kedalaman riset.' 
    },
    { 
      title: 'FULL SKRIPSI', 
      price: 'Rp1.25 - 2.25 Juta', 
      suffix: '', 
      desc: 'Pendampingan penuh dari judul hingga dinyatakan lurus sidang.',
      featured: true 
    }
  ];

  const serviceCategories = [
    {
      title: 'EDIT DAN LAYOUTING',
      icon: 'format_paint',
      items: [
        { name: 'Format EYD', price: 'Rp500', unit: '/hlm' },
        { name: 'Format EYD + Typo', price: 'Rp1.500', unit: '/hlm' },
        { name: 'Daftar Pustaka Mendeley', price: 'Rp2.500', unit: '/hlm' },
        { name: 'Tabel / Gambar / Lampiran', price: 'Rp5k - 10k', unit: '/hlm' },
        { name: 'Penomoran', price: 'Rp1.000', unit: '/10 hlm' },
      ]
    },
    {
      title: 'TUGAS',
      icon: 'assignment',
      items: [
        { name: 'Makalah (Materi dari admin)', price: 'Rp5.000', unit: '/hlm' },
        { name: 'Essay (Materi customer + kami)', price: 'Rp7.500', unit: '/hlm' },
        { name: 'Essay (Materi customer)', price: 'Rp3.000', unit: '/hlm' },
        { name: 'Jurnal', price: 'Rp10.000', unit: '/hlm' },
        { name: 'PowerPoint', price: 'Rp2.000', unit: '/slide' },
      ]
    },
    {
      title: 'TULIS & KETIK',
      icon: 'keyboard',
      items: [
        { name: 'TULIS TANGAN', isHeader: true },
        { name: 'Binder A5 / Bigboss', price: 'Rp2k - 3k', unit: '/hlm' },
        { name: 'JASA KETIK', isHeader: true },
        { name: 'MS Word', price: 'Rp2.500', unit: '/hlm' },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <span className="material-symbols-outlined text-sm">sell</span> Pricelist Terupdate 2024
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-8">Investasi Untuk Masa Depan Akademikmu</h1>
          <p className="text-lg text-on-surface-variant max-w-xl">Transparansi harga untuk kualitas terbaik. Selesaikan perjalanan akademikmu dengan bantuan tenaga profesional yang kompeten di bidangnya.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
             <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all">Lihat Pricelist <span className="material-symbols-outlined">south</span></button>
             <Link to="/konsultasi" className="border border-outline-variant text-navy px-8 py-4 rounded-xl font-bold hover:bg-surface-container transition-all flex items-center">Konsultasi Gratis</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
           <img alt="Mascot Laptop" className="w-full max-w-md drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida/ADBb0uijVXaZD_jijUengqF7iolyVEnw0aTNmlNglrj9-OQfYz7Iemfu_q96F0YMF4pt6f9CK_xZQxLwT0kCUauth6RAdycv7qTq_ZHPadJTgY1boiR8UF3X08MbxCAisgtII0tk0efDsnS6NQC_ReYcm9UhY1QiL7qcP0-YW2SptfFTM2cIVhU2_cYDmSKJH0HtYyMmR1DeKvbMAoFpesq5hKEuG8UEiZDCPxwMrbOwC0eIZKVvkL9_YSRwNt_u7NlvqYmi2iE5yAC7Pp8" />
        </div>
      </div>

      {/* Skripsi Packages */}
      <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-outline-variant/30 shadow-xl mb-12">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">star</span>
            <span className="text-xs uppercase font-bold tracking-widest text-navy">Akademik Pro</span>
          </div>
          <div className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">verified</span> Free Konsultasi & Revisi
          </div>
        </div>
        
        <h2 className="text-3xl font-extrabold text-navy mb-12 uppercase tracking-wide">Jasa Skripsi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {mainPackages.map((pkg, i) => (
            <div key={i} className={`p-8 rounded-3xl border transition-all ${pkg.featured ? 'bg-navy text-white border-transparent' : 'bg-surface-container-low border-outline-variant/30 hover:border-secondary/30'}`}>
              <p className="text-xs uppercase font-bold opacity-60 mb-2">{pkg.title}</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-extrabold">{pkg.price}</span>
                <span className="text-sm opacity-60">{pkg.suffix}</span>
              </div>
              <p className={`text-sm ${pkg.featured ? 'text-white/70' : 'text-on-surface-variant'}`}>{pkg.desc}</p>
            </div>
          ))}
        </div>
        
        <Link to="/konsultasi" className="w-full bg-black text-white py-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black/90 transition-all text-xl">
          Pesan Jasa Skripsi Sekarang <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>

      {/* Other Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {serviceCategories.map((cat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary-container rounded-2xl flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-navy uppercase tracking-widest">{cat.title}</h3>
            </div>
            
            <div className="flex-1 space-y-4 mb-8">
              {cat.items.map((item, j) => (
                <div key={j} className={`flex justify-between items-center ${item.isHeader ? 'pt-4 pb-1 border-b border-outline-variant/20 mb-2' : ''}`}>
                  {item.isHeader ? (
                    <span className="text-[12px] font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                       {cat.icon === 'keyboard' && <span className="material-symbols-outlined text-[14px]">edit_note</span>}
                       {item.name}
                    </span>
                  ) : (
                    <>
                      <span className="text-sm text-on-surface-variant">{item.name}</span>
                      <div className="text-right">
                        <span className="text-sm font-bold text-navy">{item.price}</span>
                        <span className="text-[10px] text-on-surface-variant opacity-60">{item.unit}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <Link to="/konsultasi" className="w-full py-4 border border-outline-variant rounded-xl font-bold text-navy hover:bg-surface-container transition-all text-center">Pesan Sekarang</Link>
          </div>
        ))}
      </div>

      {/* Methods & Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container p-10 rounded-[3rem] border border-outline-variant/30">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">info</span>
            </div>
            <h3 className="text-2xl font-bold text-navy">Ketentuan Layanan</h3>
          </div>
          <div className="space-y-6">
             <div className="bg-white p-6 rounded-2xl border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-secondary">payments</span>
                  <span className="font-bold text-navy">Pembayaran Awal (DP)</span>
                </div>
                <p className="text-sm text-on-surface-variant">Wajib melakukan pembayaran DP sebesar <span className="font-bold">50%</span> di awal sebelum pengerjaan dimulai.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-bold text-navy">Pelunasan</span>
                </div>
                <p className="text-sm text-on-surface-variant">Pelunasan dilakukan <span className="font-bold">sebelum file final dikirimkan</span> kepada customer.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                  <span className="font-bold text-navy">Harga & Waktu</span>
                </div>
                <p className="text-sm text-on-surface-variant">Harga bersifat fleksibel, menyesuaikan dengan tingkat kesulitan dan deadline yang diminta.</p>
             </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-outline-variant/30 shadow-xl flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-extrabold text-navy mb-4">Metode Pembayaran</h3>
          <p className="text-on-surface-variant mb-12 max-w-sm">Kami menyediakan berbagai opsi pembayaran yang aman dan praktis untuk kenyamanan Anda.</p>
          
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {['BCA', 'DANA', 'ShopeePay', 'SeaBank'].map((p) => (
              <div key={p} className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 flex flex-col items-center gap-1 group hover:border-secondary/30 transition-all cursor-pointer">
                <span className={`text-xl font-black ${p === 'DANA' ? 'text-blue-500' : p === 'ShopeePay' ? 'text-orange-500' : 'text-navy'}`}>{p}</span>
                <span className="text-[10px] uppercase font-bold opacity-40">E-Wallet / Bank</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-secondary-container/30 px-6 py-4 rounded-xl border border-secondary/20 flex items-center gap-3 text-sm text-on-secondary-container">
            <span className="material-symbols-outlined text-secondary">verified</span>
            Seluruh transaksi diproses dengan standar keamanan tinggi.
          </div>
        </div>
      </div>
    </div>
  );
}
