'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/Auth';
import { useBroadcastForm } from '@/hooks/useBroadcastForm';

export default function InitNodePage() {
  const [nodeType, setNodeType] = useState<'project' | 'experience'>('experience');
  
  const router = useRouter();
  const { isRegistered, login } = useAuth();
  
  const { content, setContent, tagsInput, setTagsInput, isBroadcasting, handleSubmit, copy } = useBroadcastForm(() => router.push('/'));

  if (!isRegistered) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black font-sans p-6">
        <div className="max-w-md w-full border-double border-4 border-white bg-black p-8 md:p-12">
          <div className="font-mono text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-white animate-pulse"></span>
            {copy.workbenchUnauthorizedHeading}
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">
            {copy.accessDenied}
          </h1>
          <p className="text-white/60 mb-8 font-mono italic text-lg border-l-2 border-white/30 pl-4">
            &quot;{copy.workbenchUnauthorized}&quot;
          </p>
          <button 
            onClick={login}
            className="font-mono w-full bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] py-4 hover:invert transition-colors"
          >
            {copy.identityAction}
          </button>
        </div>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit(nodeType, e);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-32 px-6 md:px-12 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-4">
          {copy.initSection}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
          {copy.initHeading}
        </h1>
        
        <form className="space-y-8" onSubmit={onSubmit}>
          <div>
            <label className="font-mono block text-[11px] font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60 mb-2">
              {copy.nodeTypeLabel}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                onClick={() => setNodeType('project')}
                className={`border p-4 text-left transition-colors ${nodeType === 'project' ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black' : 'border-black/20 bg-black/5 text-black hover:border-black dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white'}`}
              >
                <div className="font-bold mb-1">{copy.projectTypeBtn}</div>
                <div className="font-mono text-[11px] opacity-50 uppercase">{copy.projectSubtitle}</div>
              </button>
              <button 
                type="button" 
                onClick={() => setNodeType('experience')}
                className={`border p-4 text-left transition-colors ${nodeType === 'experience' ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black' : 'border-black/20 bg-black/5 text-black hover:border-black dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white'}`}
              >
                <div className="font-bold mb-1">{copy.experienceTypeBtn}</div>
                <div className="font-mono text-[11px] opacity-50 uppercase">{copy.experienceSubtitle}</div>
              </button>
            </div>
          </div>

          <div>
            <label className="font-mono block text-[11px] font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60 mb-2">
              {copy.contentLabel}
            </label>
            <textarea 
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full bg-transparent border border-black/20 dark:border-white/20 p-4 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none font-mono italic text-lg placeholder:text-black/20 dark:placeholder:text-white/20"
              placeholder={nodeType === 'experience' ? copy.experiencePlaceholder : copy.projectPlaceholder}
            ></textarea>
          </div>

          <div>
            <label className="font-mono block text-[11px] font-bold uppercase tracking-[0.3em] text-black/60 dark:text-white/60 mb-2">
              {copy.tagsLabel}
            </label>
            <input 
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full bg-transparent border border-black/20 dark:border-white/20 p-4 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-black/20 dark:placeholder:text-white/20"
              placeholder={copy.tagsPlaceholder}
            />
          </div>

          <button 
            type="submit" 
            disabled={isBroadcasting || !content.trim()}
            className={`font-mono w-full text-xs uppercase tracking-[0.3em] font-bold py-6 transition-colors shadow-elegant dark:shadow-elegant-dark ${isBroadcasting ? 'bg-black/20 text-black dark:bg-white/20 dark:text-white cursor-not-allowed' : 'bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed'}`}
          >
            {isBroadcasting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-black dark:bg-white rounded-full animate-ping"></span>
                {copy.broadcasting}
              </span>
            ) : copy.initBroadcast}
          </button>
        </form>
      </div>
    </div>
  );
}
