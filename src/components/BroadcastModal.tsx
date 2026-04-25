'use client';

import React, { useState } from 'react';
import { useAuth } from '@/components/Auth';
import { useData } from '@/components/DataContext';
import { useToast } from '@/components/Toast';
import { ExperiencePost } from '@/types';
import { getRoleCopy } from '@/lib/roleCopy';

export function BroadcastModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const { isRegistered, role } = useAuth();
  const { broadcastPost } = useData();
  const { toast } = useToast();
  const copy = getRoleCopy(role);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    if (!isRegistered) {
      toast(copy.toasts.broadcastError, 'warning');
      return;
    }

    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

    const newPost: ExperiencePost = {
      id: `e-${Date.now()}`,
      type: 'experience',
      creator: copy.broadcastCreator, // Could tie to actual user profile if we had one
      signature: 'Local',
      timestamp: new Date().toISOString(),
      content: content.trim(),
      tags: tags.length > 0 ? tags : ['log'],
      metrics: { acknowledgements: 0, audits: 0, forks: 0 }
    };

    broadcastPost(newPost);
    toast(copy.toasts.broadcastSuccess, 'success');
    setContent('');
    setTagsInput('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-black w-full max-w-2xl border border-black/10 dark:border-white/10 shadow-2xl">
        <div className="border-b border-black/10 dark:border-white/10 p-4 flex justify-between items-center bg-brandGray-50 dark:bg-brandGray-950">
          <div className="font-mono text-[11px] uppercase font-bold tracking-[0.2em] text-black/40 dark:text-white/40">
            {copy.initHeading} {/* Active */}
          </div>
          <button onClick={onClose} className="hover:opacity-50 font-mono text-[11px] uppercase tracking-widest opacity-40">
            Close [X]
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6">
            <label className="font-mono text-[11px] uppercase opacity-50 block mb-2 tracking-[0.1em]">{copy.experienceLabel}</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={copy.experiencePlaceholder}
              className="w-full h-40 border border-black/10 dark:border-white/10 p-4 font-mono italic text-lg bg-transparent focus:outline-none focus:border-black dark:focus:border-white resize-none"
              required
            />
          </div>

          <div className="mb-8">
            <label className="font-mono text-[11px] uppercase opacity-50 block mb-2 tracking-[0.1em]">{copy.tagsLabel}</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder={copy.tagExamples}
              className="font-mono w-full border border-black/10 dark:border-white/10 p-4 text-xs uppercase tracking-widest bg-transparent focus:outline-none focus:border-black dark:focus:border-white"
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
              className="font-mono px-8 py-3 bg-black text-white dark:bg-white dark:text-black text-xs uppercase font-bold tracking-widest hover:opacity-80 transition-all shadow-elegant dark:shadow-elegant-dark"
            >
              {copy.initBroadcast}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
