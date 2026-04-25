'use client';

import { useState, useEffect } from 'react';
import { FeedPost } from '@/types';
import Image from 'next/image';
import LogicMap from '@/components/LogicMap';
import { useToast } from '@/components/Toast';
import { useAuth } from '@/components/Auth';
import { useData } from '@/components/DataContext';
import { getRoleCopy } from '@/lib/roleCopy';

export default function Home() {
  const { feedData, forkPost, workbenchData } = useData();
  const [selectedPost, setSelectedPost] = useState<FeedPost | null>(null);
  const [isMobileCanvasOpen, setIsMobileCanvasOpen] = useState(false);
  const [streamMode, setStreamMode] = useState<'LIVE' | 'SIGNAL'>('LIVE');
  const [query, setQuery] = useState('');
  
  const { toast } = useToast();
  const { isRegistered, role } = useAuth();

  const copy = getRoleCopy(role);

  useEffect(() => {
    if (!selectedPost && feedData.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedPost(feedData[0]);
    }
  }, [feedData, selectedPost]);

  let displayedFeed = feedData;
  
  if (query.trim()) {
    const lowerQuery = query.toLowerCase();
    displayedFeed = displayedFeed.filter(post => {
      const matchCreator = post.creator.toLowerCase().includes(lowerQuery);
      const matchType = post.type.toLowerCase().includes(lowerQuery);
      
      if (post.type === 'project') {
        return (
          matchCreator || 
          matchType ||
          post.name.toLowerCase().includes(lowerQuery) ||
          post.description.toLowerCase().includes(lowerQuery)
        );
      } else {
        return (
          matchCreator || 
          matchType ||
          post.content.toLowerCase().includes(lowerQuery) ||
          (post.tags && post.tags.some((tag: string) => tag.toLowerCase().includes(lowerQuery)))
        );
      }
    });
  }

  if (streamMode === 'SIGNAL') {
    displayedFeed = [...displayedFeed].sort((a, b) => b.metrics.forks - a.metrics.forks);
  }

  if (!selectedPost) return null;

  return (
    <div className="flex h-screen bg-white dark:bg-black pt-20 font-sans">
      {/* Left Sidebar (Stream) - 35% */}
      <div className={`w-full md:w-[35%] md:border-r border-black/10 dark:border-white/10 overflow-y-auto custom-scrollbar flex-col ${isMobileCanvasOpen ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-6 border-b border-black/10 dark:border-white/10 bg-brandGray-50/90 dark:bg-brandGray-950/90 backdrop-blur-sm sticky top-0 z-30 flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-1">
                {copy.consoleTitle}
              </h2>
              <div className="flex gap-4 items-center">
                <button 
                  onClick={() => setStreamMode('LIVE')}
                  className={`font-mono font-bold text-xl tracking-tight transition-opacity ${streamMode === 'LIVE' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                  {copy.streamLive}
                </button>
                <button 
                  onClick={() => setStreamMode('SIGNAL')}
                  className={`font-mono font-bold text-xl tracking-tight transition-opacity flex items-center gap-2 ${streamMode === 'SIGNAL' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                  <span className="text-lg opacity-50">⑂</span> {copy.streamSignal}
                </button>
              </div>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-widest opacity-30">
              {copy.nodeCount.replace('{n}', displayedFeed.length.toString())}
            </div>
          </div>
          
          <div className="relative">
            <span className="font-mono absolute left-3 top-1/2 -translate-y-1/2 text-xs opacity-50">{'>'}</span>
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={copy.consoleSearch}
              className="font-mono w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 p-2 pl-8 text-[11px] uppercase tracking-widest focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors placeholder:opacity-30"
            />
          </div>
        </div>
        
        <div className="divide-y divide-black/5 dark:divide-white/5">
          {displayedFeed.length > 0 ? (
            displayedFeed.map((post) => (
              <button
                key={post.id}
                onClick={() => {
                  setSelectedPost(post);
                  setIsMobileCanvasOpen(true);
                }}
                className={`w-full text-left p-6 transition-all relative overflow-hidden group flex flex-col gap-3 ${
                  selectedPost.id === post.id ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-50 dark:hover:bg-brandGray-900 text-black dark:text-white'
                }`}
              >
                <div className="flex justify-between items-start w-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 flex items-center justify-center font-bold text-xs flex-shrink-0 ${selectedPost.id === post.id ? 'bg-white text-black dark:bg-black dark:text-white' : 'bg-black text-white dark:bg-white dark:text-black'}`}>
                      {post.creator.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-bold text-sm leading-none">{post.creator}</div>
                        {post.isLead && (
                          <span className="font-mono text-[11px] bg-black text-white dark:bg-white dark:text-black px-1 py-0.5 rounded-sm font-black">LEAD</span>
                        )}
                      </div>
                      <div className="font-mono text-[11px] opacity-50 mt-1">
                        {post.type.charAt(0).toUpperCase() + post.type.slice(1)} {'//'} {post.id.padStart(3, '0')}
                      </div>
                    </div>
                  </div>
                  <div suppressHydrationWarning className="font-mono text-[11px] opacity-40 whitespace-nowrap ml-2">
                    {post.timestamp ? new Date(post.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'LIVE'}
                  </div>
                </div>

                <h3 className={`text-lg md:text-xl font-bold tracking-tight leading-snug ${selectedPost.id === post.id ? 'text-white dark:text-black' : 'text-black/90 dark:text-white/90'}`}>
                  {post.type === 'project' ? post.name : `"${post.content?.slice(0, 60)}..."`}
                </h3>

                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-1.5 opacity-60">
                    <span className="w-2 h-2 border border-current rounded-sm"></span>
                    <span className="font-mono text-[11px]">{post.metrics.acknowledgements}</span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <span className="text-[11px] font-mono">[A]</span>
                    <span className="font-mono text-[11px]">{post.metrics.audits}</span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <span className="text-[11px] font-mono">⑂</span>
                    <span className="font-mono text-[11px]">{post.metrics.forks}</span>
                  </div>
                </div>

                {/* Active Indicator */}
                {selectedPost.id === post.id && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white dark:bg-black hidden md:block" />
                )}
              </button>
            ))
          ) : (
            <div className="p-12 text-center text-black/40 dark:text-white/40">
              <div className="font-mono text-4xl mb-4">?</div>
              <div className="font-mono text-xs uppercase tracking-[0.2em]">{copy.noResults}</div>
            </div>
          )}
        </div>
      </div>

      {/* Right Detail Pane (Canvas) - 65% */}
      <div className={`w-full md:w-[65%] flex-col h-full bg-brandGray-100 dark:bg-brandGray-975 relative overflow-hidden ${isMobileCanvasOpen ? 'flex' : 'hidden md:flex'}`}>
        {/* Top Interaction Bar */}
        <div className="h-14 border-b border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-sm flex justify-between md:justify-end items-center px-4 md:px-6 sticky top-0 z-20">
          <button 
            className="md:hidden font-mono text-[11px] uppercase font-bold tracking-widest flex items-center gap-2"
            onClick={() => setIsMobileCanvasOpen(false)}
          >
            ← Back
          </button>
          <div className="flex gap-4 md:gap-6">
            <button 
              onClick={() => {
                if (!isRegistered) {
                  toast(copy.toasts.unauthorized, 'warning');
                  return;
                }
                toast(copy.toasts.identityInitialized, 'success');
              }}
              className="font-mono text-[11px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-1 md:gap-2"
            >
              <span className="w-3 h-3 border border-black dark:border-white inline-block rounded-sm hidden md:inline-block"></span>
              Ack
            </button>
            <button 
              onClick={() => {
                if (!isRegistered) {
                  toast(copy.toasts.unauthorized, 'warning');
                  return;
                }
                const displayName = selectedPost.type === 'project' ? selectedPost.name : selectedPost.creator;
                toast(copy.toasts.auditComplete.replace('{name}', displayName), 'info');
              }}
              className="font-mono text-[11px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-1 md:gap-2"
            >
              <span className="hidden md:inline-block">[+]</span> {copy.audit}
            </button>
            {(() => {
              const isAlreadyForked = isRegistered && workbenchData.some(item => item.originalPost.id === selectedPost.id);
              return (
                <button 
                  onClick={() => {
                    if (isAlreadyForked) return;
                    if (!isRegistered) {
                      toast(copy.toasts.unauthorized, 'warning');
                      return;
                    }
                    forkPost(selectedPost);
                    toast(copy.toasts.workbenchSave, 'success');
                  }}
                  disabled={isAlreadyForked}
                  className={`font-mono text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-1 md:gap-2 ${isAlreadyForked ? 'opacity-100 bg-black text-white dark:bg-white dark:text-black px-2 py-1' : 'opacity-40 hover:opacity-100'}`}
                >
                  <span className="hidden md:inline-block">{isAlreadyForked ? '✓' : '⑂'}</span> 
                  {isAlreadyForked ? copy.forked : copy.fork}
                </button>
              );
            })()}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          {selectedPost.type === 'experience' ? (
            <div className="max-w-3xl mx-auto py-12 md:pt-24 md:pb-32 px-6 md:px-12">
               <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-8 md:mb-12">
                 {copy.toasts.postDetail.replace('{id}', selectedPost.id)}
               </div>
               
               <div className="flex items-center gap-4 mb-8 md:mb-12 border-b border-black/5 dark:border-white/5 pb-6 md:pb-8">
                 <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                   {selectedPost.creator.charAt(0)}
                 </div>
                 <div>
                    <div className="flex items-center gap-3">
                      <div className="text-lg md:text-xl font-bold font-sans">{selectedPost.creator}</div>
                      {selectedPost.isLead && (
                        <span className="font-mono text-[11px] bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 rounded-sm font-black">{copy.leadLabel}</span>
                      )}
                    </div>
                   <div className="font-mono text-[11px] md:text-xs opacity-50 uppercase tracking-widest mt-1">
                     {selectedPost.signature}
                   </div>
                 </div>
               </div>

               <p className="text-xl md:text-2xl font-mono italic text-black/90 dark:text-white/90 leading-relaxed mb-8 md:mb-12 border-l-2 border-black dark:border-white pl-6 md:pl-8 py-2">
                 &quot;{selectedPost.content}&quot;
               </p>

               {selectedPost.attachment && (
                 <div className="relative aspect-video w-full mb-8 md:mb-12 border border-black/5 dark:border-white/5 bg-white dark:bg-black p-1 shadow-elegant dark:shadow-elegant-dark">
                   <Image 
                     src={selectedPost.attachment} 
                     alt="Attachment" 
                     fill 
                     unoptimized
                     className="object-cover"
                   />
                 </div>
               )}

               <div className="flex flex-wrap gap-2 md:gap-3">
                 {selectedPost.tags?.map(tag => (
                   <span key={tag} className="font-mono px-2 md:px-3 py-1 bg-black/5 dark:bg-white/10 text-black dark:text-white text-[11px] md:text-xs uppercase">#{tag}</span>
                 ))}
               </div>
            </div>
          ) : (
            <div className="flex flex-col h-full pb-32">
              {/* Fixed Hero Area */}
              <div className="relative h-[35vh] md:h-[45vh] border-b border-black/10 dark:border-white/10 flex-shrink-0">
                <Image
                  src={selectedPost.heroImage}
                  alt={selectedPost.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-black/10 dark:border-white/10 p-4 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
                    <div>
                      <div className="flex items-center gap-3 mb-1 md:mb-2">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                          {selectedPost.name}
                        </h1>
                        {selectedPost.isLead && (
                          <span className="font-mono text-[11px] bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-sm font-black">LEAD</span>
                        )}
                      </div>
                      <p className="font-mono text-[11px] md:text-xs uppercase tracking-widest opacity-60">
                        By {selectedPost.creator}
                      </p>
                    </div>
                    <div className="font-mono font-bold text-xl md:text-2xl opacity-60 uppercase tracking-tighter">
                      {selectedPost.signature}
                    </div>
                  </div>
                </div>
              </div>

              {/* Info & Logic */}
              <div className="flex-1 flex flex-col md:flex-row md:divide-x divide-y md:divide-y-0 divide-black/10 dark:divide-white/10 min-h-[500px]">
                {/* Case Study Column */}
                <div className="w-full md:w-1/2 p-6 md:p-12 pb-24 md:pb-32 bg-white dark:bg-black">
                  <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-8 md:mb-12 text-black/40 dark:text-white/40 border-b border-black/10 dark:border-white/10 pb-2 md:pb-4">
                    {copy.caseStudyHead}
                  </h4>
                  
                  <p className="text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-12">
                    {selectedPost.description}
                  </p>

                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <span className="font-mono text-[11px] font-bold block mb-2 opacity-50">PROBLEM</span>
                      <p className="text-sm leading-relaxed border-l border-black/10 dark:border-white/10 pl-4">{selectedPost.caseStudy.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-bold block mb-2 opacity-50">SOLUTION</span>
                      <p className="text-sm leading-relaxed border-l border-black dark:border-white pl-4 font-bold">{selectedPost.caseStudy.solution}</p>
                    </div>
                    <div className="bg-black text-white dark:bg-white dark:text-black p-4 md:p-6 mt-6 md:mt-8 shadow-elegant dark:shadow-elegant-dark">
                      <span className="font-mono text-[11px] font-bold block mb-2 opacity-50 text-white/50 dark:text-black/50">IMPACT METRIC</span>
                      <p className="text-lg md:text-xl font-bold font-sans">{selectedPost.caseStudy.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Visual Breakdown Column */}
                <div className="w-full md:w-1/2 p-6 md:p-12 pb-24 md:pb-32 bg-gray-50 dark:bg-brandGray-900 relative overflow-hidden min-h-[400px]">
                  <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-12 text-black/40 dark:text-white/40 border-b border-black/10 dark:border-white/10 pb-2 md:pb-4 relative z-10 bg-gray-50 dark:bg-brandGray-900">
                    {copy.logicHead}
                  </h4>
                  <div className="absolute inset-0 top-16 md:top-32 overflow-auto custom-scrollbar p-4 md:p-8">
                    <LogicMap logicNodes={selectedPost.implementation.logicNodes} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
