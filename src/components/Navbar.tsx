'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuth } from '@/components/Auth';
import { BroadcastModal } from '@/components/BroadcastModal';
import { useTheme } from '@/components/ThemeContext';
import { getRoleCopy } from '@/lib/roleCopy';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const pathname = usePathname();
  const { isRegistered, role, login } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const labels = getRoleCopy(role);

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
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-4 px-6 md:px-8 flex justify-between items-center h-20 transition-colors duration-300">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-brand w-12 py-2 sm:w-auto sm:px-6 sm:py-3 group-hover:bg-black/80 dark:group-hover:bg-white/80 transition-colors">
            <span className="hidden sm:inline text-2xl tracking-wide">Craftly</span>
            <span className="inline sm:hidden text-2xl">C</span>
          </div>
          <span className="font-brand text-2xl tracking-tight text-black dark:text-white group-hover:opacity-80 transition-opacity">
            Internet
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center text-black dark:text-white">
          <Link href="/" className={`font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-50 transition-opacity whitespace-nowrap ${isActive('/') ? 'border-b border-black dark:border-white pb-1' : 'border-b border-transparent pb-1'}`}>
            {labels.home}
          </Link>
          <Link href="/network" className={`font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-50 transition-opacity whitespace-nowrap ${isActive('/network') ? 'border-b border-black dark:border-white pb-1' : 'border-b border-transparent pb-1'}`}>
            {labels.networkTitle}
          </Link>
          <Link href="/workbench" className={`font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-50 transition-opacity whitespace-nowrap ${isActive('/workbench') ? 'border-b border-black dark:border-white pb-1' : 'border-b border-transparent pb-1'}`}>
            {labels.workbench}
          </Link>
          {isRegistered && (
            <Link href="/identity" className={`font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-50 transition-opacity whitespace-nowrap ${isActive('/identity') ? 'border-b border-black dark:border-white pb-1' : 'border-b border-transparent pb-1'}`}>
              Identity
            </Link>
          )}
          
          <div className="flex items-center space-x-4 border-l border-black/10 dark:border-white/10 pl-8">
            <button 
              onClick={toggleTheme}
              className="font-mono text-[11px] font-bold hover:opacity-50 transition-opacity whitespace-nowrap"
              title="Toggle Theme"
            >
              [ {isDark ? '☼' : '☾'} ]
            </button>
            
            {isRegistered ? (
              <>
                <button 
                  onClick={() => setIsBroadcastOpen(true)}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all border border-black dark:border-white px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="text-lg leading-none mt-[-2px]">+</span> {labels.initBroadcast || 'Broadcast'}
                </button>
              </>
            ) : (
              <button onClick={login} className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all border border-black dark:border-white px-6 py-3 whitespace-nowrap">
                {labels.identityAction}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="font-mono h-8 flex items-center justify-center text-xs font-bold text-black dark:text-white">
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
      <div className={`fixed inset-0 bg-white/95 dark:bg-black/95 z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-6 items-center text-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={`font-mono text-sm uppercase tracking-[0.3em] font-bold hover:opacity-50 ${isActive('/') ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>
            {labels.home}
          </Link>
          <Link href="/network" onClick={() => setIsMenuOpen(false)} className={`font-mono text-sm uppercase tracking-[0.3em] font-bold hover:opacity-50 ${isActive('/network') ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>
            {labels.networkTitle}
          </Link>
          <Link href="/workbench" onClick={() => setIsMenuOpen(false)} className={`font-mono text-sm uppercase tracking-[0.3em] font-bold hover:opacity-50 ${isActive('/workbench') ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>
            {labels.workbench}
          </Link>
          {isRegistered && (
            <Link href="/identity" onClick={() => setIsMenuOpen(false)} className={`font-mono text-sm uppercase tracking-[0.3em] font-bold hover:opacity-50 ${isActive('/identity') ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>
              Identity
            </Link>
          )}
          <div className="w-8 h-[1px] bg-black/10 dark:bg-white/10 my-2"></div>
          
          {isRegistered ? (
            <button onClick={() => { setIsBroadcastOpen(true); setIsMenuOpen(false); }} className="font-mono text-xs uppercase tracking-[0.2em] font-bold bg-black text-white dark:bg-white dark:text-black px-8 py-4">
              {labels.initBroadcast || 'Broadcast'} Node
            </button>
          ) : (
            <button onClick={() => { login(); setIsMenuOpen(false); }} className="font-mono text-xs uppercase tracking-[0.2em] font-bold bg-black text-white dark:bg-white dark:text-black px-8 py-4">
              {labels.identityAction}
            </button>
          )}
        </div>
      </div>

      <BroadcastModal isOpen={isBroadcastOpen} onClose={() => setIsBroadcastOpen(false)} />
    </>
  );
};

export default Navbar;
