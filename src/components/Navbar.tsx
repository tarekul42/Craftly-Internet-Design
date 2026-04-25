'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JetBrains_Mono, Pacifico } from 'next/font/google';

import { useAuth } from '@/components/Auth';
import { BroadcastModal } from '@/components/BroadcastModal';
import { useTheme } from '@/components/ThemeContext';

const mono = JetBrains_Mono({ subsets: ['latin'] });
const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const pathname = usePathname();
  const { isRegistered, role, login } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const labels = {
    engineer: { home: 'Console', network: 'Network', workbench: 'Workbench', action: 'Broadcast' },
    builder: { home: 'Dashboard', network: 'Community', workbench: 'Studio', action: 'Publish' },
    guest: { home: 'Explore', network: 'People', workbench: 'Bookmarks', action: 'Join' },
  }[role];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-black dark:border-white py-4 px-6 md:px-8 flex justify-between items-center h-20 transition-colors duration-300">
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`bg-black dark:bg-white flex items-center justify-center text-white dark:text-black ${pacifico.className} w-12 py-2 sm:w-auto sm:px-6 sm:py-3 group-hover:bg-black/80 dark:group-hover:bg-white/80 transition-colors`}>
            <span className="hidden sm:inline text-2xl tracking-wide">Craftly</span>
            <span className="inline sm:hidden text-2xl">C</span>
          </div>
          <span className={`${pacifico.className} text-2xl tracking-tight text-black dark:text-white group-hover:opacity-80 transition-opacity`}>
            Internet
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center text-black dark:text-white">
          <Link href="/" className={`${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity whitespace-nowrap ${isActive('/') ? 'border-b-2 border-black dark:border-white pb-1' : 'border-b-2 border-transparent pb-1'}`}>
            {labels.home}
          </Link>
          <Link href="/network" className={`${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity whitespace-nowrap ${isActive('/network') ? 'border-b-2 border-black dark:border-white pb-1' : 'border-b-2 border-transparent pb-1'}`}>
            {labels.network}
          </Link>
          <Link href="/workbench" className={`${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity whitespace-nowrap ${isActive('/workbench') ? 'border-b-2 border-black dark:border-white pb-1' : 'border-b-2 border-transparent pb-1'}`}>
            {labels.workbench}
          </Link>
          {isRegistered && (
            <Link href="/identity" className={`${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity whitespace-nowrap ${isActive('/identity') ? 'border-b-2 border-black dark:border-white pb-1' : 'border-b-2 border-transparent pb-1'}`}>
              Identity
            </Link>
          )}
          
          <div className="flex items-center space-x-4 border-l border-black/20 dark:border-white/20 pl-8">
            <button 
              onClick={toggleTheme}
              className={`${mono.className} text-[10px] font-bold hover:opacity-50 transition-opacity whitespace-nowrap`}
              title="Toggle Theme"
            >
              [ {isDark ? '☼' : '☾'} ]
            </button>
            
            {isRegistered ? (
              <>
                <button 
                  onClick={() => setIsBroadcastOpen(true)}
                  className={`${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all border border-black dark:border-white px-4 py-2 flex items-center gap-2 whitespace-nowrap`}
                >
                  <span className="text-lg leading-none mt-[-2px]">+</span> {labels.action}
                </button>
              </>
            ) : (
              <button onClick={login} className={`${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all border border-black dark:border-white px-6 py-3 whitespace-nowrap`}>
                Initialize Identity
              </button>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className={`${mono.className} h-8 flex items-center justify-center text-xs font-bold text-black dark:text-white`}>
            [ {isDark ? '☼' : '☾'} ]
          </button>
          <button 
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-black z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-12 items-center text-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={`${mono.className} text-sm uppercase tracking-[0.4em] font-bold hover:opacity-50 ${isActive('/') ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>
            {labels.home}
          </Link>
          <Link href="/network" onClick={() => setIsMenuOpen(false)} className={`${mono.className} text-sm uppercase tracking-[0.4em] font-bold hover:opacity-50 ${isActive('/network') ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>
            {labels.network}
          </Link>
          <Link href="/workbench" onClick={() => setIsMenuOpen(false)} className={`${mono.className} text-sm uppercase tracking-[0.4em] font-bold hover:opacity-50 ${isActive('/workbench') ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>
            {labels.workbench}
          </Link>
          {isRegistered && (
            <Link href="/identity" onClick={() => setIsMenuOpen(false)} className={`${mono.className} text-sm uppercase tracking-[0.4em] font-bold hover:opacity-50 ${isActive('/identity') ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>
              Identity
            </Link>
          )}
          <div className="w-12 h-[1px] bg-black/20 dark:bg-white/20 my-4"></div>
          
          {isRegistered ? (
            <button onClick={() => { setIsBroadcastOpen(true); setIsMenuOpen(false); }} className={`${mono.className} text-xs uppercase tracking-[0.3em] font-bold bg-black text-white dark:bg-white dark:text-black px-8 py-4`}>
              {labels.action} Node
            </button>
          ) : (
            <button onClick={() => { login(); setIsMenuOpen(false); }} className={`${mono.className} text-xs uppercase tracking-[0.3em] font-bold bg-black text-white dark:bg-white dark:text-black px-8 py-4`}>
              Initialize Identity
            </button>
          )}
        </div>
        
        <div className="absolute bottom-12 text-center">
          <div className={`${mono.className} text-[10px] text-black/30 dark:text-white/30 tracking-widest uppercase`}>
            Orchestrator Access
          </div>
        </div>
      </div>

      <BroadcastModal isOpen={isBroadcastOpen} onClose={() => setIsBroadcastOpen(false)} />
    </>
  );
};

export default Navbar;
