'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/Toast';
import { useAuth } from '@/components/Auth';
import { useTheme } from '@/components/ThemeContext';
import { getRoleCopy } from '@/lib/roleCopy';

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toast } = useToast();
  const { isRegistered, login, role } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  
  const copy = getRoleCopy(role);

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
    { id: 'nav-home', label: `Go to ${copy.home || 'Home'}`, action: () => router.push('/') },
    { id: 'nav-network', label: `Go to ${copy.networkTitle}`, action: () => router.push('/network') },
    { id: 'nav-workbench', label: `Go to ${copy.workbench || 'Workbench'}`, action: () => router.push('/workbench') },
    { id: 'auth-login', label: isRegistered ? copy.identityActive : copy.identityAction, action: () => { if(!isRegistered) { login(); toast(copy.toasts.identityInitialized, 'success'); } } },
    { id: 'theme-toggle', label: `Toggle Theme (${isDark ? 'Dark' : 'Light'})`, action: () => { toggleTheme(); toast(copy.toasts.themeInverted, 'info'); } },
  ];

  // Only engineers get the "Ping" command
  if (role === 'engineer') {
    commands.push({ id: 'action-ping', label: copy.networkAction + ' (All)', action: () => toast(copy.toasts.networkPingAll, 'info') });
  }

  const filteredCommands = commands.filter(cmd => cmd.label.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-[2px] flex items-start justify-center pt-[20vh]" onClick={() => setIsOpen(false)}>
      <div 
        className="w-full max-w-xl bg-white dark:bg-black border border-black/10 dark:border-white/10 flex flex-col mx-4 card-radius overflow-hidden"
        style={{ boxShadow: 'var(--shadow-card)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-black/10 dark:border-white/10 px-6 py-5">
          <span className="role-label text-black/30 dark:text-white/30 mr-3 text-lg">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.commandSearchPlaceholder}
            className={`flex-1 bg-transparent border-none outline-none text-black dark:text-white tracking-[0.1em] text-sm placeholder-black/20 dark:placeholder-white/20 ${
              role === 'engineer' ? 'font-mono uppercase' : 'font-sans'
            }`}
          />
          <div className="role-label text-[10px] text-black/40 dark:text-white/40 bg-black/5 dark:bg-white/10 px-2 py-1 rounded-sm uppercase tracking-tighter pill-radius">
            {copy.escToClose}
          </div>
        </div>
        <div className="max-h-[50vh] overflow-y-auto custom-scrollbar py-2">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                onClick={() => handleSelect(cmd.action)}
                className={`w-full text-left px-6 py-4 transition-colors flex items-center justify-between group ${
                  role === 'engineer' 
                    ? 'font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' 
                    : 'font-sans text-sm hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span>{cmd.label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↵</span>
              </button>
            ))
          ) : (
            <div className="role-label text-center py-12 text-black/40 dark:text-white/40 uppercase tracking-widest text-xs">
              {copy.commandNoResults}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
