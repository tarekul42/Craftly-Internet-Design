'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { JetBrains_Mono } from 'next/font/google';
import { useToast } from '@/components/Toast';
import { useAuth } from '@/components/Auth';
import { useTheme } from '@/components/ThemeContext';

const mono = JetBrains_Mono({ subsets: ['latin'] });

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toast } = useToast();
  const { isRegistered, login, logout } = useAuth();
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(open => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const commands = [
    { id: 'nav-console', label: 'Go to Console', action: () => router.push('/') },
    { id: 'nav-network', label: 'Go to Network', action: () => router.push('/network') },
    { id: 'nav-workbench', label: 'Go to Workbench', action: () => router.push('/workbench') },
    { id: 'auth-login', label: isRegistered ? 'Identity: Active' : 'Initialize Identity', action: () => { if(!isRegistered) { login(); toast('[SYSTEM] IDENTITY INITIALIZED', 'success'); } } },
    { id: 'theme-toggle', label: `Toggle Theme (${isDark ? 'Dark' : 'Light'})`, action: () => { toggleTheme(); toast('[SYSTEM] THEME INVERTED', 'info'); } },
    { id: 'action-ping', label: 'Ping Global Nodes', action: () => toast('[NETWORK] PINGING ALL ACTIVE NODES...', 'info') },
  ];

  const filteredCommands = commands.filter(cmd => cmd.label.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[20vh]" onClick={() => setIsOpen(false)}>
      <div 
        className="w-full max-w-2xl bg-white dark:bg-black border border-black dark:border-white shadow-2xl flex flex-col mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-black dark:border-white px-4 py-4">
          <span className={`${mono.className} text-black dark:text-white mr-3`}>{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands..."
            className={`${mono.className} flex-1 bg-transparent border-none outline-none text-black dark:text-white uppercase tracking-widest text-sm placeholder-black/30 dark:placeholder-white/30`}
          />
          <div className={`${mono.className} text-[10px] text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/10 px-2 py-1`}>
            ESC to close
          </div>
        </div>
        <div className="max-h-[50vh] overflow-y-auto custom-scrollbar py-2">
          {query === '' && filteredCommands.length > 0 && (
            <div className={`${mono.className} px-6 py-2 text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-bold`}>
              [ Quick Actions ]
            </div>
          )}
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => (
              <button
                key={cmd.id}
                onClick={() => handleSelect(cmd.action)}
                className={`${mono.className} w-full text-left px-6 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-xs uppercase tracking-widest flex items-center justify-between group`}
              >
                <span>{cmd.label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↵</span>
              </button>
            ))
          ) : (
            <div className={`${mono.className} text-center py-12 text-black/40 dark:text-white/40 uppercase tracking-widest text-xs`}>
              No commands found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
