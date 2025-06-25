import Image from 'next/image';

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-6 px-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Logo e nome */}
      <div className="flex items-center gap-3">
        <Image src="/App Icon.png" alt="Rotas4Me Logo" width={160} height={160} className="h-40 w-40" />
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-base text-gray-800 font-poppins tracking-widest">ROTAS</span>
          <span className="text-gray-500 text-xs font-poppins tracking-widest">FOR ME</span>
        </div>
      </div>
      {/* Redes sociais */}
      <div className="flex items-center gap-8">
        <a href="#" aria-label="Instagram" className="text-gray-800 hover:text-pink-500 transition">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
        </a>
        <a href="#" aria-label="Facebook" className="text-gray-800 hover:text-blue-600 transition font-bold text-lg" style={{fontFamily: 'Arial'}}>f</a>
        <a href="#" aria-label="LinkedIn" className="text-gray-800 hover:text-blue-700 transition font-bold text-lg" style={{fontFamily: 'Arial'}}>in</a>
      </div>
    </div>
  </footer>
);

export default Footer; 