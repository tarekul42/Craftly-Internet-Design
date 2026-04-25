import { feedData as initialFeedData, workbenchData as initialWorkbenchData, orchestrators } from '@/data/mockData';
import { FeedPost, WorkbenchItem, Orchestrator } from '@/types';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getFeed(): Promise<FeedPost[]> {
    await delay(800); // Fake latency
    const stored = localStorage.getItem('craftly_feed');
    if (stored) return JSON.parse(stored);
    return initialFeedData;
  },

  async getWorkbench(): Promise<WorkbenchItem[]> {
    await delay(500);
    const stored = localStorage.getItem('craftly_workbench');
    if (stored) return JSON.parse(stored);
    return initialWorkbenchData;
  },

  async getOrchestrators(): Promise<Orchestrator[]> {
    await delay(300);
    return orchestrators;
  }
};
