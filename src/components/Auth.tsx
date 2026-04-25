'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isRegistered: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem('craftly_auth');
    if (stored === 'true') {
      setIsRegistered(true);
    }
  }, []);

  const login = () => {
    setIsRegistered(true);
    localStorage.setItem('craftly_auth', 'true');
  };
  
  const logout = () => {
    setIsRegistered(false);
    localStorage.setItem('craftly_auth', 'false');
  };

  return (
    <AuthContext.Provider value={{ isRegistered, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
