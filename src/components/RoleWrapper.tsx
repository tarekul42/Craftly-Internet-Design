'use client';

import { useAuth } from '@/components/Auth';
import { useEffect } from 'react';

export function RoleWrapper({ children }: { children: React.ReactNode }) {
  const { role } = useAuth();

  useEffect(() => {
    // Remove any existing role classes
    const classes = Array.from(document.body.classList);
    classes.forEach(cls => {
      if (cls.startsWith('role-')) {
        document.body.classList.remove(cls);
      }
    });

    // Add current role class
    document.body.classList.add(`role-${role}`);
  }, [role]);

  return <>{children}</>;
}
