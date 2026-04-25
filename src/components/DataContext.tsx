'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { FeedPost, WorkbenchItem } from '@/types';
import { useAuth } from '@/components/Auth';
import { getRoleCopy } from '@/lib/roleCopy';
import { feedDataByRole, workbenchDataByRole } from '@/data/mockData';

interface DataContextType {
  feedData: FeedPost[];
  workbenchData: WorkbenchItem[];
  forkPost: (post: FeedPost) => void;
  broadcastPost: (post: FeedPost) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const { role } = useAuth();
  const copy = getRoleCopy(role);
  
  const [feedData, setFeedData] = useState<FeedPost[]>([]);
  const [workbenchData, setWorkbenchData] = useState<WorkbenchItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [prevRole, setPrevRole] = useState(role);

  if (role !== prevRole) {
    setPrevRole(role);
    setIsInitialized(false);
  }

  useEffect(() => {
    let mounted = true;
    
    // Simulate loading role-specific data
    const loadData = () => {
      if (mounted) {
        setFeedData(feedDataByRole[role]);
        setWorkbenchData(workbenchDataByRole[role]);
        setIsInitialized(true);
      }
    };
    
    const timer = setTimeout(loadData, 800);
    
    return () => { 
      mounted = false;
      clearTimeout(timer);
    };
  }, [role]);

  const forkPost = (post: FeedPost) => {
    const isAlreadyForked = workbenchData.some(item => item.originalPost.id === post.id);
    if (isAlreadyForked) return;

    const newItem: WorkbenchItem = {
      id: `w-${Date.now()}`,
      originalPost: post,
      forkedAt: new Date().toISOString(),
      status: 'review',
      notes: copy.forkNotes
    };
    
    const updated = [newItem, ...workbenchData];
    setWorkbenchData(updated);
  };

  const broadcastPost = (post: FeedPost) => {
    const updated = [post, ...feedData];
    setFeedData(updated);
  };

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center">
            <div className="w-3 h-3 bg-black dark:bg-white animate-pulse"></div>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40 animate-pulse">
            {copy.toasts.loadingState}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DataContext.Provider value={{ feedData, workbenchData, forkPost, broadcastPost }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
