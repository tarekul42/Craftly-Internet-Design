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
    <div className="flex h-[calc(100vh-5rem)] bg-white dark:bg-black font-sans">
      {/* Left Sidebar (Stream) - 35% */}
      <div className={`w-full md:w-[35%] md:border-r border-black/10 dark:border-white/10 overflow-y-auto custom-scrollbar flex-col ${isMobileCanvasOpen ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-6 border-b border-black/10 dark:border-white/10 bg-brandGray-50/90 dark:bg-brandGray-950/90 backdrop-blur-sm sticky top-0 z-30 flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="role-label text-black/40 dark:text-white/40 mb-1">
                {role === 'guest' ? (
                  <>
                    Explore <span className="font-brand normal-case tracking-tight">Craftly Internet</span>
                  </>
                ) : (
                  'consoleTitle' in copy ? copy.consoleTitle : ''
                )}
              </h2>
              <div className={`flex items-center ${role === 'guest' ? 'bg-black/5 dark:bg-white/10 pill-radius p-1 gap-1' : 'gap-4'}`}>
                <button 
                  onClick={() => setStreamMode('LIVE')}
                  className={`transition-all ${
                    role === 'engineer' 
                      ? `font-mono font-bold text-xl tracking-tight ${streamMode === 'LIVE' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`
                      : role === 'builder'
                      ? `font-sans font-semibold text-base px-3 py-1 ${streamMode === 'LIVE' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`
                      : `font-sans font-medium text-sm px-4 py-1.5 pill-radius ${streamMode === 'LIVE' ? 'bg-white dark:bg-black shadow-sm' : 'opacity-50 hover:opacity-100'}`
                  }`}
                >
                  {copy.streamLive}
                </button>
                <button 
                  onClick={() => setStreamMode('SIGNAL')}
                  className={`flex items-center gap-2 transition-all ${
                    role === 'engineer' 
                      ? `font-mono font-bold text-xl tracking-tight ${streamMode === 'SIGNAL' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`
                      : role === 'builder'
                      ? `font-sans font-semibold text-base px-3 py-1 ${streamMode === 'SIGNAL' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`
                      : `font-sans font-medium text-sm px-4 py-1.5 pill-radius ${streamMode === 'SIGNAL' ? 'bg-white dark:bg-black shadow-sm' : 'opacity-50 hover:opacity-100'}`
                  }`}
                >
                  {role === 'engineer' && <span className="text-lg opacity-50">⑂</span>}
                  {role === 'builder' && (
                    <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {role === 'guest' && <span>⚡</span>}
                  {copy.streamSignal}
                </button>
              </div>
            </div>
            <div className="role-label opacity-30">
              {copy.nodeCount.replace('{n}', displayedFeed.length.toString())}
            </div>
          </div>
          
          <div className="relative">
            {role === 'engineer' ? (
              <span className="font-mono absolute left-3 top-1/2 -translate-y-1/2 text-xs opacity-50">{'>'}</span>
            ) : (
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={copy.consoleSearch}
              className={`w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 p-2 pl-9 text-[11px] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-all placeholder:opacity-30 ${
                role === 'engineer' ? 'font-mono uppercase tracking-widest' : 'font-sans rounded-lg'
              } ${role === 'guest' ? 'rounded-full py-2.5' : ''}`}
            />
          </div>
        </div>
        
        <div className={`p-2 ${role !== 'engineer' ? 'space-y-2' : 'divide-y divide-black/5 dark:divide-white/5'}`}>
          {displayedFeed.length > 0 ? (
            displayedFeed.map((post) => (
              <button
                key={post.id}
                onClick={() => {
                  setSelectedPost(post);
                  setIsMobileCanvasOpen(true);
                }}
                className={`w-full text-left p-6 transition-all relative overflow-hidden group flex flex-col gap-3 card-radius ${
                  selectedPost.id === post.id 
                    ? role === 'engineer' 
                      ? 'bg-black text-white dark:bg-white dark:text-black' 
                      : 'border-2 border-black dark:border-white bg-white dark:bg-black shadow-md'
                    : 'hover:bg-gray-50 dark:hover:bg-brandGray-900 text-black dark:text-white'
                }`}
                style={{ boxShadow: selectedPost.id === post.id ? 'var(--shadow-card)' : 'none' }}
              >
                <div className="flex justify-between items-start w-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                      role === 'guest' ? 'rounded-full' : role === 'builder' ? 'rounded-md' : ''
                    } ${selectedPost.id === post.id && role === 'engineer' ? 'bg-white text-black dark:bg-black dark:text-white' : 'bg-black text-white dark:bg-white dark:text-black'}`}>
                      {post.creator.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-bold text-sm leading-none">{post.creator}</div>
                        {post.isLead && (
                          <span className={`font-mono text-[11px] px-1 py-0.5 font-black ${
                            role === 'guest' ? 'bg-gray-100 text-gray-600 rounded-full' : 'bg-black text-white dark:bg-white dark:text-black rounded-sm'
                          }`}>{copy.leadBadgeShort}</span>
                        )}
                      </div>
                      <div className="font-mono text-[11px] opacity-50 mt-1">
                        {post.type === 'project' ? copy.postTypeProject : copy.postTypeExperience} {'//'} {post.id.padStart(3, '0')}
                      </div>
                    </div>
                  </div>
                  <div suppressHydrationWarning className={`font-mono text-[11px] opacity-40 whitespace-nowrap ml-2 ${
                    role === 'guest' ? 'text-gray-400' : role === 'builder' ? 'text-gray-500' : ''
                  }`}>
                    {post.timestamp ? new Date(post.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : copy.timestampLive}
                  </div>
                </div>

                <h3 className={`text-lg md:text-xl font-bold tracking-tight leading-snug ${selectedPost.id === post.id && role === 'engineer' ? 'text-white dark:text-black' : 'text-black/90 dark:text-white/90'}`}>
                  {post.type === 'project' ? post.name : `"${post.content?.slice(0, 60)}..."`}
                </h3>

                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-1.5 opacity-60">
                    {role === 'engineer' ? (
                      <span className="w-2 h-2 border border-current rounded-sm"></span>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    <span className="font-mono text-[11px]">{post.metrics.acknowledgements}</span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <span className="text-[11px] font-mono">
                      {role === 'engineer' ? copy.auditIcon : (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </span>
                    <span className="font-mono text-[11px]">{post.metrics.audits}</span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <span className="text-[11px] font-mono">
                      {role === 'engineer' ? copy.forkIcon : (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      )}
                    </span>
                    <span className="font-mono text-[11px]">{post.metrics.forks}</span>
                  </div>
                </div>

                {/* Active Indicator (Engineer Only) */}
                {selectedPost.id === post.id && role === 'engineer' && (
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
        <div className={`h-14 border-b border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-sm flex justify-between md:justify-end items-center px-4 md:px-6 sticky top-0 z-20 ${
          role === 'guest' ? 'bg-white dark:bg-black' : ''
        }`}>
          <button 
            className="md:hidden role-label font-bold flex items-center gap-2"
            onClick={() => setIsMobileCanvasOpen(false)}
          >
            {copy.mobileBack}
          </button>
          <div className="flex gap-4 md:gap-6 items-center">
            <button 
              onClick={() => {
                if (!isRegistered) {
                  toast(copy.toasts.unauthorized, 'warning');
                  return;
                }
                toast(copy.toasts.identityInitialized, 'success');
              }}
              className="role-label font-bold opacity-40 hover:opacity-100 transition-opacity flex items-center gap-1 md:gap-2"
            >
              {role === 'engineer' ? (
                <span className="w-3 h-3 border border-black dark:border-white inline-block rounded-sm hidden md:inline-block"></span>
              ) : (
                <svg className="w-4 h-4 hidden md:inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
              {copy.ackLabel}
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
              className="role-label font-bold opacity-40 hover:opacity-100 transition-opacity flex items-center gap-1 md:gap-2"
            >
              {role === 'engineer' ? (
                <span className="hidden md:inline-block">[+]</span>
              ) : (
                <svg className="w-4 h-4 hidden md:inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {copy.audit}
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
                  className={`role-label font-bold transition-all flex items-center gap-1 md:gap-2 btn-radius ${
                    isAlreadyForked 
                      ? 'opacity-100 bg-black text-white dark:bg-white dark:text-black px-3 py-1' 
                      : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  <span className="hidden md:inline-block">
                    {isAlreadyForked ? '✓' : (
                      role === 'engineer' ? copy.forkIcon : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      )
                    )}
                  </span> 
                  {isAlreadyForked ? copy.forked : copy.fork}
                </button>
              );
            })()}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          {selectedPost.type === 'experience' ? (
            <div className={`max-w-3xl mx-auto py-12 md:pt-24 md:pb-32 px-6 md:px-12 ${role === 'guest' ? 'md:px-20' : ''}`}>
               <div className="role-label font-bold text-black/40 dark:text-white/40 mb-8 md:mb-12">
                 {copy.toasts.postDetail.replace('{id}', selectedPost.id)}
               </div>
               
               <div className="flex items-center gap-4 mb-8 md:mb-12 border-b border-black/5 dark:border-white/5 pb-6 md:pb-8">
                 <div className={`w-12 h-12 md:w-16 md:h-16 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0 ${
                   role === 'guest' ? 'rounded-full' : role === 'builder' ? 'rounded-xl' : ''
                 }`}>
                   {selectedPost.creator.charAt(0)}
                 </div>
                 <div>
                    <div className="flex items-center gap-3">
                      <div className="text-lg md:text-xl font-bold font-sans">{selectedPost.creator}</div>
                      {selectedPost.isLead && (
                        <span className={`role-label px-2 py-0.5 font-black ${
                          role === 'guest' ? 'bg-gray-100 text-gray-500 rounded-full' : 'bg-black text-white dark:bg-white dark:text-black rounded-sm'
                        }`}>{copy.leadLabel}</span>
                      )}
                    </div>
                   <div className="role-label opacity-50 mt-1">
                     {selectedPost.signature}
                   </div>
                 </div>
               </div>

               <p className={`text-xl md:text-2xl font-mono italic text-black/90 dark:text-white/90 leading-relaxed mb-8 md:mb-12 border-l-2 border-black dark:border-white pl-6 md:pl-8 py-2 ${
                 role !== 'engineer' ? 'font-sans italic' : ''
               }`}>
                 &quot;{selectedPost.content}&quot;
               </p>

               {selectedPost.attachment && (
                 <div className={`relative aspect-video w-full mb-8 md:mb-12 border border-black/5 dark:border-white/5 bg-white dark:bg-black p-1 card-radius overflow-hidden ${
                   role === 'engineer' ? 'shadow-elegant dark:shadow-elegant-dark' : 'shadow-md'
                 }`}>
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
                   <span key={tag} className={`role-label px-2 md:px-3 py-1 bg-black/5 dark:bg-white/10 text-black dark:text-white pill-radius`}>
                     #{tag}
                   </span>
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
                <div className={`absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-black/10 dark:border-white/10 p-4 md:p-8 ${
                  role === 'guest' ? 'rounded-t-3xl' : role === 'builder' ? 'rounded-t-xl' : ''
                }`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
                    <div>
                      <div className="flex items-center gap-3 mb-1 md:mb-2">
                        <h1 className={`text-3xl md:text-5xl font-bold leading-none ${
                          role === 'engineer' ? 'tracking-tighter uppercase' : 'tracking-tight'
                        }`}>
                          {selectedPost.name}
                        </h1>
                        {selectedPost.isLead && (
                          <span className={`role-label px-3 py-1 font-black ${
                            role === 'guest' ? 'bg-gray-100 text-gray-500 rounded-full' : 'bg-black text-white dark:bg-white dark:text-black rounded-sm'
                          }`}>{copy.leadBadgeShort}</span>
                        )}
                      </div>
                      <p className="role-label opacity-60">
                        By {selectedPost.creator}
                      </p>
                    </div>
                    <div className={`font-bold text-xl md:text-2xl opacity-60 tracking-tighter ${
                      role === 'engineer' ? 'font-mono uppercase' : 'font-sans'
                    }`}>
                      {selectedPost.signature}
                    </div>
                  </div>
                </div>
              </div>

              {/* Info & Logic */}
              <div className={`flex-1 flex flex-col md:flex-row md:divide-x divide-y md:divide-y-0 divide-black/10 dark:divide-white/10 min-h-[500px] ${
                role === 'guest' ? 'gap-4 md:gap-0' : ''
              }`}>
                {/* Case Study Column */}
                <div className={`w-full md:w-1/2 p-6 md:p-12 pb-24 md:pb-32 bg-white dark:bg-black ${role === 'guest' ? 'md:p-16' : ''}`}>
                  <h4 className="role-label font-bold mb-8 md:mb-12 text-black/40 dark:text-white/40 border-b border-black/10 dark:border-white/10 pb-2 md:pb-4">
                    {copy.caseStudyHead}
                  </h4>
                  
                  <p className={`text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-12 ${
                    role === 'guest' ? 'text-lg md:text-xl' : ''
                  }`}>
                    {selectedPost.description}
                  </p>

                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <span className="role-label font-bold block mb-2 opacity-50">{copy.problemLabel}</span>
                      <p className="text-sm leading-relaxed border-l border-black/10 dark:border-white/10 pl-4">{selectedPost.caseStudy.problem}</p>
                    </div>
                    <div>
                      <span className="role-label font-bold block mb-2 opacity-50">{copy.solutionLabel}</span>
                      <p className={`text-sm leading-relaxed border-l border-black dark:border-white pl-4 font-bold ${
                        role === 'guest' ? 'text-base' : ''
                      }`}>{selectedPost.caseStudy.solution}</p>
                    </div>
                    <div className={`p-4 md:p-6 mt-6 md:mt-8 card-radius ${
                      role === 'engineer' 
                        ? 'bg-black text-white dark:bg-white dark:text-black shadow-elegant dark:shadow-elegant-dark' 
                        : role === 'builder'
                        ? 'bg-gray-100 dark:bg-brandGray-900'
                        : 'bg-gray-50 dark:bg-brandGray-950 p-8'
                    }`}>
                      <span className={`role-label font-bold block mb-2 opacity-50 ${
                        role === 'engineer' ? 'text-white/50 dark:text-black/50' : ''
                      }`}>{copy.impactLabel}</span>
                      <p className={`text-lg md:text-xl font-bold font-sans ${
                        role === 'guest' ? 'text-2xl' : ''
                      }`}>{selectedPost.caseStudy.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Visual Breakdown Column */}
                <div className={`w-full md:w-1/2 p-6 md:p-12 pb-24 md:pb-32 bg-gray-50 dark:bg-brandGray-900 relative overflow-hidden min-h-[400px] ${
                  role === 'guest' ? 'bg-white dark:bg-black' : ''
                }`}>
                  <h4 className="role-label font-bold mb-6 md:mb-12 text-black/40 dark:text-white/40 border-b border-black/10 dark:border-white/10 pb-2 md:pb-4 relative z-10">
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
