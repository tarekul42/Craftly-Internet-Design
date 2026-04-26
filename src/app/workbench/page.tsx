'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { WorkbenchItem } from '@/types';
import LogicMap from '@/components/LogicMap';
import { useData } from '@/components/DataContext';
import { useToast } from '@/components/Toast';
import { useAuth } from '@/components/Auth';
import { getRoleCopy } from '@/lib/roleCopy';

const WorkbenchCard = ({ item }: { item: WorkbenchItem }) => {
  const isProject = item.originalPost.type === 'project';
  const projectPost = item.originalPost.type === 'project' ? item.originalPost : null;
  const { role } = useAuth();
  const copy = getRoleCopy(role);
  const { toast } = useToast();
  
  return (
    <div className="border border-black/10 dark:border-white/10 bg-white dark:bg-black flex flex-col group hover:shadow-elegant transition-all duration-500 overflow-hidden">
      <div className="p-4 border-b border-black/10 dark:border-white/10 flex justify-between items-center bg-black dark:bg-white text-white dark:text-black">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest">
            {item.status === 'review' ? copy.statusReview : item.status === 'integrating' ? copy.statusIntegrating : copy.statusArchived}
          </span>
          {item.status === 'integrating' && <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>}
        </div>
        <div suppressHydrationWarning className="font-mono text-[11px] opacity-70">
          {copy.forkedDateLabel} {new Date(item.forkedAt).toLocaleDateString()}
        </div>
      </div>

      <div className="p-6 border-b border-black/10 dark:border-white/10 flex-1">
        <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-2">
          {copy.originLabel} {item.originalPost.creator}
        </div>
        <h3 className="font-bold text-xl leading-tight mb-4 text-black dark:text-white">
          {isProject ? projectPost?.name : copy.developerLog}
        </h3>
        
        {/* Miniature Logic Map Preview */}
        {isProject && projectPost && (
          <div className="border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-brandGray-900 p-4 h-48 overflow-hidden relative pointer-events-none mb-6">
            <div className="absolute inset-0 scale-[0.6] origin-top-left p-4">
              <LogicMap logicNodes={projectPost.implementation.logicNodes} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-brandGray-900 via-transparent to-transparent z-10" />
          </div>
        )}

        <div className="bg-black dark:bg-white text-white dark:text-black p-4 border border-black/10 shadow-elegant dark:shadow-elegant-dark">
          <div className="font-mono text-[11px] uppercase tracking-widest opacity-60 mb-1">{copy.privateNoteLabel}</div>
          <p className="text-sm font-mono italic">{item.notes}</p>
        </div>
      </div>

      <button 
        onClick={() => toast(copy.toasts.workbenchIntegrate, 'info')}
        className="font-mono w-full text-[11px] uppercase tracking-[0.3em] font-bold py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors bg-brandGray-50 dark:bg-brandGray-950"
      >
        {copy.inspectAction}
      </button>
    </div>
  );
};

export default function WorkbenchPage() {
  const { isRegistered, login, role } = useAuth();
  const { workbenchData } = useData();
  const copy = getRoleCopy(role);

  if (!isRegistered) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-32 px-6 md:px-12 flex items-center justify-center font-sans">
        <div className="border border-white/20 bg-white/5 p-12 max-w-2xl w-full text-center flex flex-col items-center shadow-elegant dark:shadow-elegant-dark backdrop-blur-sm">
          <h2 className="font-mono text-white font-bold tracking-widest uppercase mb-4 text-lg">
            {copy.workbenchUnauthorizedHeading}
          </h2>
          <p className="text-white/60 font-mono italic mb-12 text-base leading-relaxed">
            {copy.workbenchUnauthorized}
          </p>
          <Button variant="outline" onClick={login} className="text-white border-white hover:bg-white hover:text-black">
            {copy.identityAction}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brandGray-100 dark:bg-brandGray-975 pt-32 pb-32 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 md:gap-0">
          <SectionHeader subtitle={copy.workbench} title={copy.blueprintTitle} />
          <div className="font-mono text-xs uppercase tracking-widest opacity-60 flex items-center gap-2 text-black dark:text-white">
            <span className="text-lg">{copy.forkIcon}</span>
            {copy.forkedCount.replace('{n}', workbenchData.length.toString())}
          </div>
        </div>
        
        {workbenchData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workbenchData.map((item) => (
              <WorkbenchCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-black/10 dark:border-white/10 p-12 md:p-24 bg-transparent flex flex-col items-center justify-center text-center min-h-[50vh] relative group">
            <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02] group-hover:bg-transparent transition-colors"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="font-mono text-6xl opacity-10 mb-8">{copy.forkIcon}</div>
              <h2 className="font-mono text-sm md:text-base uppercase tracking-[0.3em] font-bold text-black dark:text-white mb-6">
                {copy.emptyWorkbench}
              </h2>
              <p className="font-mono italic text-black/60 dark:text-white/60 max-w-lg mb-10 text-lg leading-relaxed">
                {copy.emptyWorkbenchDesc}
              </p>
              <Link href="/" className="font-mono border border-black/20 dark:border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all bg-white dark:bg-black text-black dark:text-white shadow-elegant dark:shadow-elegant-dark">
                {copy.returnLink}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
