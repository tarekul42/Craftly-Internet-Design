'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserRole } from '@/types';

interface AuthContextType {
  isRegistered: boolean;
  role: UserRole;
  login: () => void;
  logout: () => void;
  setRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [role, setRoleState] = useState<UserRole>('engineer');

  useEffect(() => {
    const stored = localStorage.getItem('craftly_auth');
    const storedRole = localStorage.getItem('craftly_role') as UserRole;
    if (stored === 'true') {
      setIsRegistered(true); // eslint-disable-line react-hooks/set-state-in-effect
    }
    if (storedRole) {
      setRoleState(storedRole);  
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

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    localStorage.setItem('craftly_role', newRole);
  };

  return (
    <AuthContext.Provider value={{ isRegistered, role, login, logout, setRole }}>
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
