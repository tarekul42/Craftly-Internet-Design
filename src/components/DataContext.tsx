'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { api } from '@/services/api';
import { FeedPost, WorkbenchItem } from '@/types';

interface DataContextType {
  feedData: FeedPost[];
  workbenchData: WorkbenchItem[];
  forkPost: (post: FeedPost) => void;
  broadcastPost: (post: FeedPost) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [feedData, setFeedData] = useState<FeedPost[]>([]);
  const [workbenchData, setWorkbenchData] = useState<WorkbenchItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let mounted = true;
    
    async function loadData() {
      try {
        const [feed, workbench] = await Promise.all([
          api.getFeed(),
          api.getWorkbench()
        ]);
        
        if (mounted) {
          setFeedData(feed);
          setWorkbenchData(workbench);
          setIsInitialized(true);
        }
      } catch (error) {
        console.error("Failed to load initial data:", error);
        setIsInitialized(true); // Still initialize to not block app
      }
    }
    
    loadData();
    
    return () => { mounted = false; };
  }, []);

  const forkPost = (post: FeedPost) => {
    const isAlreadyForked = workbenchData.some(item => item.originalPost.id === post.id);
    if (isAlreadyForked) return;

    const newItem: WorkbenchItem = {
      id: `w-${Date.now()}`,
      originalPost: post,
      forkedAt: new Date().toISOString(),
      status: 'review',
      notes: "Auto-forked from network."
    };
    
    const updated = [newItem, ...workbenchData];
    setWorkbenchData(updated);
    localStorage.setItem('craftly_workbench', JSON.stringify(updated));
  };

  const broadcastPost = (post: FeedPost) => {
    const updated = [post, ...feedData];
    setFeedData(updated);
    localStorage.setItem('craftly_feed', JSON.stringify(updated));
  };

  if (!isInitialized) {
    return null; // or a loading spinner
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
