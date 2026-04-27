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
  const { role } = useAuth();

  if (!isRegistered) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black font-sans p-6">
        <div className="max-w-md w-full border-double border-4 border-white bg-black p-8 md:p-12 card-radius">
          <div className="role-label font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-white animate-pulse"></span>
            {copy.workbenchUnauthorizedHeading}
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">
            {copy.accessDenied}
          </h1>
          <p className="text-white/60 mb-8 italic text-lg border-l-2 border-white/30 pl-4">
            &quot;{copy.workbenchUnauthorized}&quot;
          </p>
          <button 
            onClick={login}
            className="role-label w-full bg-white text-black font-bold py-4 hover:invert transition-colors btn-radius"
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
    <div className="min-h-[calc(100vh-5rem)] bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 font-sans transition-all duration-500" style={{ paddingBlock: 'var(--spacing-section)' }}>
      <div className="max-w-2xl mx-auto">
        <div className="role-label font-bold text-black/40 dark:text-white/40 mb-4">
          {copy.initSection}
        </div>
        <h1 className={`text-4xl md:text-6xl font-bold leading-none mb-12 ${role === 'engineer' ? 'tracking-tighter uppercase' : 'tracking-tight'}`}>
          {copy.initHeading}
        </h1>
        
        <form className="space-y-8" onSubmit={onSubmit}>
          <div>
            <label className="role-label block font-bold text-black/60 dark:text-white/60 mb-2">
              {copy.nodeTypeLabel}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                onClick={() => setNodeType('project')}
                className={`border p-4 text-left transition-all btn-radius ${nodeType === 'project' ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-md' : 'border-black/20 bg-black/5 text-black hover:border-black dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white'}`}
              >
                <div className="font-bold mb-1">{copy.projectTypeBtn}</div>
                <div className="role-label opacity-50">{copy.projectSubtitle}</div>
              </button>
              <button 
                type="button" 
                onClick={() => setNodeType('experience')}
                className={`border p-4 text-left transition-all btn-radius ${nodeType === 'experience' ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-md' : 'border-black/20 bg-black/5 text-black hover:border-black dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white'}`}
              >
                <div className="font-bold mb-1">{copy.experienceTypeBtn}</div>
                <div className="role-label opacity-50">{copy.experienceSubtitle}</div>
              </button>
            </div>
          </div>

          <div>
            <label className="role-label block font-bold text-black/60 dark:text-white/60 mb-2">
              {copy.contentLabel}
            </label>
            <textarea 
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className={`w-full bg-transparent border border-black/20 dark:border-white/20 p-4 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-all resize-none text-lg placeholder:text-black/20 dark:placeholder:text-white/20 btn-radius ${
                role === 'engineer' ? 'font-mono italic' : 'font-sans'
              } ${role === 'guest' ? 'p-6' : ''}`}
              placeholder={nodeType === 'experience' ? copy.experiencePlaceholder : copy.projectPlaceholder}
            ></textarea>
          </div>

          <div>
            <label className="role-label block font-bold text-black/60 dark:text-white/60 mb-2">
              {copy.tagsLabel}
            </label>
            <input 
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className={`w-full bg-transparent border border-black/20 dark:border-white/20 p-4 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-all placeholder:text-black/20 dark:placeholder:text-white/20 btn-radius ${
                role === 'engineer' ? 'font-mono' : 'font-sans'
              } ${role === 'guest' ? 'p-6' : ''}`}
              placeholder={copy.tagsPlaceholder}
            />
          </div>

          <button 
            type="submit" 
            disabled={isBroadcasting || !content.trim()}
            className={`w-full font-bold py-6 transition-all shadow-elegant dark:shadow-elegant-dark btn-radius ${
              isBroadcasting 
                ? 'bg-black/20 text-black dark:bg-white/20 dark:text-white cursor-not-allowed' 
                : 'bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed'
            } ${role === 'engineer' ? 'font-mono text-xs uppercase tracking-[0.3em]' : 'font-sans text-base'}`}
          >
            {isBroadcasting ? (
              <span className="flex items-center justify-center gap-2">
                <span className={`w-2 h-2 rounded-full animate-ping ${role === 'engineer' ? 'bg-black dark:bg-white' : 'bg-white dark:bg-black'}`}></span>
                {copy.broadcasting}
              </span>
            ) : copy.initBroadcast}
          </button>
        </form>
      </div>
    </div>
  );
}
