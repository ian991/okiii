import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 overflow-hidden rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                alt="Logo Footer" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uijVXaZD_jijUengqF7iolyVEnw0aTNmlNglrj9-OQfYz7Iemfu_q96F0YMF4pt6f9CK_xZQxLwT0kCUauth6RAdycv7qTq_ZHPadJTgY1boiR8UF3X08MbxCAisgtII0tk0efDsnS6NQC_ReYcm9UhY1QiL7qcP0-YW2SptfFTM2cIVhU2_cYDmSKJH0HtYyMmR1DeKvbMAoFpesq5hKEuG8UEiZDCPxwMrbOwC0eIZKVvkL9_YSRwNt_u7NlvqYmi2iE5yAC7Pp8" 
              />
            </div>
            <span className="text-2xl font-extrabold text-black tracking-tight">20Day</span>
          </div>
          <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
            Platform asisten akademik. Komitmen kami adalah memberikan hasil yang presisi dan memuaskan.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-black hover:bg-secondary hover:text-on-secondary transition-all hover:rotate-6 shadow-sm">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-black hover:bg-secondary hover:text-on-secondary transition-all hover:rotate-6 shadow-sm">
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-black hover:bg-secondary hover:text-on-secondary transition-all hover:rotate-6 shadow-sm">
              <span className="material-symbols-outlined text-lg">chat_bubble</span>
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2 flex flex-col gap-6">
          <h4 className="text-xs text-black uppercase font-bold tracking-widest">Layanan</h4>
          <div className="flex flex-col gap-3">
            <Link to="/layanan" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Joki Tugas Umum</Link>
            <Link to="/layanan" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Olah Data Statistik</Link>
            <Link to="/layanan" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Skripsi</Link>
            <Link to="/layanan" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Proofreading</Link>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="text-xs text-black uppercase font-bold tracking-widest">Informasi</h4>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Tentang Kami</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Prosedur Pemesanan</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Ketentuan Layanan</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Hubungi CS</a>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="text-xs text-black uppercase font-bold tracking-widest">Dukungan</h4>
          <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/30 flex flex-col gap-4 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <span className="text-sm text-black font-semibold">twentyzobin@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">schedule</span>
              <span className="text-sm text-on-surface-variant">Layanan 24 Jam</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-outline-variant/20 max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-on-surface-variant">© 2024 20Day. Solusi Akademik No. 1 di Indonesia.</p>
        <div className="flex gap-6">
          <span className="text-xs text-on-surface-variant opacity-70 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">verified</span>
            Privasi & Keamanan Terjamin
          </span>
        </div>
      </div>
    </footer>
  );
}
