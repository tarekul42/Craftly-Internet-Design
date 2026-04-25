'use client';

import { useState } from 'react';
import { useToast } from '@/components/Toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/Auth';
import { useData } from '@/components/DataContext';
import { getRoleCopy } from '@/lib/roleCopy';

export default function InitNodePage() {
  const [nodeType, setNodeType] = useState<'project' | 'experience'>('experience');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  
  const { toast } = useToast();
  const router = useRouter();
  const { isRegistered, login, role } = useAuth();
  const { broadcastPost } = useData();

  const copy = getRoleCopy(role);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsBroadcasting(true);
    
    const tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean);

    // Simulate network delay
    setTimeout(() => {
      const basePost = {
        id: `${nodeType.charAt(0)}-${Date.now()}`,
        creator: copy.broadcastCreator,
        signature: 'Local',
        timestamp: new Date().toISOString(),
        metrics: { acknowledgements: 0, audits: 0, forks: 0 }
      };

      if (nodeType === 'experience') {
        broadcastPost({
          ...basePost,
          type: 'experience',
          content: content.trim(),
          tags: tagsArray.length > 0 ? tagsArray : ['log']
        });
      } else {
        broadcastPost({
          ...basePost,
          type: 'project',
          name: copy.broadcastProjectName,
          tagline: copy.broadcastProjectTag,
          description: content.trim(),
          heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
          caseStudy: {
            problem: copy.broadcastProblem,
            solution: content.trim(),
            impact: copy.broadcastImpact
          },
          implementation: {
            logicNodes: [
              { id: '1', label: copy.initLogicLabel, detail: copy.broadcastLogic }
            ]
          }
        });
      }

      setIsBroadcasting(false);
      toast(copy.toasts.broadcastSuccess, 'success');
      router.push('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-32 px-6 md:px-12 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
          {copy.initSection}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
          {copy.initHeading}
        </h1>
        
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="font-mono block text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">
              {copy.nodeTypeLabel}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                onClick={() => setNodeType('project')}
                className={`border p-4 text-left transition-colors ${nodeType === 'project' ? 'border-white bg-white text-black' : 'border-white/20 bg-white/5 text-white hover:border-white'}`}
              >
                <div className="font-bold mb-1">{copy.projectTypeBtn}</div>
                <div className="font-mono text-[11px] opacity-50 uppercase">{copy.projectSubtitle}</div>
              </button>
              <button 
                type="button" 
                onClick={() => setNodeType('experience')}
                className={`border p-4 text-left transition-colors ${nodeType === 'experience' ? 'border-white bg-white text-black' : 'border-white/20 bg-white/5 text-white hover:border-white'}`}
              >
                <div className="font-bold mb-1">{copy.experienceTypeBtn}</div>
                <div className="font-mono text-[11px] opacity-50 uppercase">{copy.experienceSubtitle}</div>
              </button>
            </div>
          </div>

          <div>
            <label className="font-mono block text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">
              {copy.contentLabel}
            </label>
            <textarea 
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors resize-none font-mono italic text-lg placeholder:text-white/20"
              placeholder={nodeType === 'experience' ? copy.experiencePlaceholder : copy.projectPlaceholder}
            ></textarea>
          </div>

          <div>
            <label className="font-mono block text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">
              {copy.tagsLabel}
            </label>
            <input 
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
              placeholder={copy.tagsPlaceholder}
            />
          </div>

          <button 
            type="submit" 
            disabled={isBroadcasting || !content.trim()}
            className={`font-mono w-full text-xs uppercase tracking-[0.3em] font-bold py-6 transition-colors ${isBroadcasting ? 'bg-white/20 text-white cursor-not-allowed' : 'bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed'}`}
          >
            {isBroadcasting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                {copy.broadcasting}
              </span>
            ) : copy.initBroadcast}
          </button>
        </form>
      </div>
    </div>
  );
}
