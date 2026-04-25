'use client';

import React, { useState } from 'react';
import { useAuth } from '@/components/Auth';
import { useData } from '@/components/DataContext';
import { useToast } from '@/components/Toast';
import { ExperiencePost } from '@/types';

export function BroadcastModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const { isRegistered } = useAuth();
  const { broadcastPost } = useData();
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    if (!isRegistered) {
      toast('[ERROR] UNAUTHORIZED. CANNOT BROADCAST.', 'warning');
      return;
    }

    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

    const newPost: ExperiencePost = {
      id: `e-${Date.now()}`,
      type: 'experience',
      creator: 'Local Orchestrator', // Could tie to actual user profile if we had one
      signature: 'Local',
      timestamp: new Date().toISOString(),
      content: content.trim(),
      tags: tags.length > 0 ? tags : ['log'],
      metrics: { acknowledgements: 0, audits: 0, forks: 0 }
    };

    broadcastPost(newPost);
    toast('[SYSTEM] NODE BROADCASTED TO NETWORK', 'success');
    setContent('');
    setTagsInput('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-black w-full max-w-2xl border-2 border-black dark:border-white shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]">
        <div className="border-b-2 border-black dark:border-white p-4 flex justify-between items-center bg-brandGray-light dark:bg-brandGray-dark">
          <div className="font-mono text-[11px] uppercase font-bold tracking-widest">
            Broadcast Protocol // Active
          </div>
          <button onClick={onClose} className="hover:opacity-50">
            [X]
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6">
            <label className="font-mono text-[11px] uppercase opacity-50 block mb-2">Experience Log</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Document your architectural decisions or system reflections..."
              className="w-full h-40 border border-black dark:border-white p-4 font-mono italic text-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white resize-none"
              required
            />
          </div>

          <div className="mb-8">
            <label className="font-mono text-[11px] uppercase opacity-50 block mb-2">Tags (Comma Separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="architecture, philosophy, refactoring"
              className="font-mono w-full border border-black dark:border-white p-4 text-xs uppercase tracking-widest bg-transparent focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button 
              type="button" 
              onClick={onClose}
              className="font-mono px-6 py-3 text-xs uppercase font-bold tracking-widest hover:opacity-50 transition-opacity"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="font-mono px-8 py-3 bg-black text-white dark:bg-white dark:text-black text-xs uppercase font-bold tracking-widest hover:bg-black/80 dark:hover:bg-white/80 transition-colors shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Broadcast
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
