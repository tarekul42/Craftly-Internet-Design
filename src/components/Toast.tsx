'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type ToastType = 'success' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

import { useAuth } from '@/components/Auth';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const { role } = useAuth();

  const toast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
        {toasts.map((t) => (
          <div 
            key={t.id}
            className={`animate-slide-up-fade px-6 py-4 border border-black/10 dark:border-white/10 card-radius ${t.type === 'success' ? 'bg-white text-black' : 'bg-black text-white'} shadow-elegant dark:shadow-elegant-dark`}
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="role-label font-bold flex items-center gap-3">
              <span className={`w-1.5 h-1.5 rounded-full ${t.type === 'success' ? (role === 'engineer' ? 'bg-black' : 'bg-green-500') : 'bg-white animate-pulse'}`}></span>
              {t.message}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
