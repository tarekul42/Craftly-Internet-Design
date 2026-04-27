'use client';


import React from 'react';
import { useBroadcastForm } from '@/hooks/useBroadcastForm';
import { useAuth } from '@/components/Auth';

export function BroadcastModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { content, setContent, tagsInput, setTagsInput, handleSubmit, copy } = useBroadcastForm(onClose);
  const { role } = useAuth();

  if (!isOpen) return null;

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit('experience', e);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white dark:bg-black w-full max-w-2xl border border-black/10 dark:border-white/10 card-radius overflow-hidden"
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        <div className="border-b border-black/10 dark:border-white/10 p-4 flex justify-between items-center bg-brandGray-50 dark:bg-brandGray-950">
          <div className="role-label font-bold text-black/40 dark:text-white/40">
            {copy.initHeading}
          </div>
          <button onClick={onClose} className="hover:opacity-50 role-label font-bold opacity-40">
            {copy.closeModal}
          </button>
        </div>
        
        <form onSubmit={onSubmit} className="p-8">
          <div className="mb-6">
            <label className="role-label block mb-2 opacity-50 font-bold">{copy.experienceLabel}</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={copy.experiencePlaceholder}
              className={`w-full h-40 border border-black/10 dark:border-white/10 p-4 text-lg bg-transparent focus:outline-none focus:border-black dark:focus:border-white resize-none btn-radius ${
                role === 'engineer' ? 'font-mono italic' : 'font-sans'
              } ${role === 'guest' ? 'p-6' : ''}`}
              required
            />
          </div>

          <div className="mb-8">
            <label className="role-label block mb-2 opacity-50 font-bold">{copy.tagsLabel}</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder={copy.tagExamples}
              className={`w-full border border-black/10 dark:border-white/10 p-4 tracking-widest bg-transparent focus:outline-none focus:border-black dark:focus:border-white btn-radius ${
                role === 'engineer' ? 'font-mono text-xs uppercase' : 'font-sans text-sm'
              } ${role === 'guest' ? 'p-6' : ''}`}
            />
          </div>

          <div className="flex justify-end gap-4">
            <button 
              type="button" 
              onClick={onClose}
              className="role-label px-6 py-3 font-bold hover:opacity-50 transition-opacity"
            >
              {copy.cancel}
            </button>
            <button 
              type="submit"
              className={`px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-bold transition-all shadow-elegant dark:shadow-elegant-dark btn-radius ${
                role === 'engineer' ? 'font-mono text-xs uppercase tracking-widest' : 'font-sans text-sm'
              }`}
            >
              {copy.initBroadcast}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
