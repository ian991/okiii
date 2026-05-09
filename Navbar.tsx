import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Testimoni', path: '/testimoni' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-outline-variant/30">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 overflow-hidden rounded-xl bg-primary flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
            <img 
              alt="20Day Logo" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uijVXaZD_jijUengqF7iolyVEnw0aTNmlNglrj9-OQfYz7Iemfu_q96F0YMF4pt6f9CK_xZQxLwT0kCUauth6RAdycv7qTq_ZHPadJTgY1boiR8UF3X08MbxCAisgtII0tk0efDsnS6NQC_ReYcm9UhY1QiL7qcP0-YW2SptfFTM2cIVhU2_cYDmSKJH0HtYyMmR1DeKvbMAoFpesq5hKEuG8UEiZDCPxwMrbOwC0eIZKVvkL9_YSRwNt_u7NlvqYmi2iE5yAC7Pp8" 
            />
          </div>
          <span className="text-2xl font-extrabold text-black tracking-tight group-hover:text-secondary transition-colors duration-300">20Day</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:text-secondary ${
                location.pathname === link.path ? 'text-secondary after:w-full' : 'text-on-surface-variant after:w-0 hover:after:w-full'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to={location.pathname === '/konsultasi' ? '/' : '/konsultasi'} 
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-xl hover:bg-black/90 active:scale-95 duration-200 transition-all"
          >
            {location.pathname === '/konsultasi' ? 'Kembali' : 'Mulai'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
