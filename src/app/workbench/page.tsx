'use client';

import { JetBrains_Mono, Inter } from 'next/font/google';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { WorkbenchItem } from '@/types';
import LogicMap from '@/components/LogicMap';
import { useData } from '@/components/DataContext';
import { useToast } from '@/components/Toast';
import { useAuth } from '@/components/Auth';

const mono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const WorkbenchCard = ({ item }: { item: WorkbenchItem }) => {
  const isProject = item.originalPost.type === 'project';
  const projectPost = item.originalPost.type === 'project' ? item.originalPost : null;
  const { toast } = useToast();
  
  return (
    <div className="border border-black dark:border-white bg-white dark:bg-black flex flex-col group hover:shadow-[4px_4px_0_0_#000] dark:hover:shadow-[4px_4px_0_0_#fff] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-500 overflow-hidden">
      <div className="p-4 border-b border-black dark:border-white flex justify-between items-center bg-black dark:bg-white text-white dark:text-black">
        <div className="flex items-center gap-2">
          <span className={`${mono.className} text-[9px] uppercase tracking-widest`}>
            {item.status}
          </span>
          {item.status === 'integrating' && <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>}
        </div>
        <div suppressHydrationWarning className={`${mono.className} text-[9px] opacity-70`}>
          Forked: {new Date(item.forkedAt).toLocaleDateString()}
        </div>
      </div>

      <div className="p-6 border-b border-black dark:border-white flex-1">
        <div className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-2`}>
          Origin // {item.originalPost.creator}
        </div>
        <h3 className="font-bold text-xl leading-tight mb-4 text-black dark:text-white">
          {isProject ? projectPost?.name : 'Developer Log'}
        </h3>
        
        {/* Miniature Logic Map Preview */}
        {isProject && projectPost && (
          <div className="border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] p-4 h-48 overflow-hidden relative pointer-events-none mb-6">
            <div className="absolute inset-0 scale-[0.6] origin-top-left p-4">
              <LogicMap logicNodes={projectPost.implementation.logicNodes} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#111] via-transparent to-transparent z-10" />
          </div>
        )}

        <div className="bg-black dark:bg-white text-white dark:text-black p-4 border border-white dark:border-black">
          <div className={`${mono.className} text-[9px] uppercase tracking-widest opacity-60 mb-1`}>Private Note</div>
          <p className="text-sm font-serif italic">{item.notes}</p>
        </div>
      </div>

      <button 
        onClick={() => toast(`[WORKBENCH] INITIATING INTEGRATION PROTOCOL`, 'info')}
        className={`${mono.className} w-full text-[10px] uppercase tracking-[0.3em] font-bold py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors bg-[#fcfcfc] dark:bg-[#0a0a0a]`}
      >
        Inspect / Integrate
      </button>
    </div>
  );
};

export default function WorkbenchPage() {
  const { isRegistered, login } = useAuth();
  const { workbenchData } = useData();

  if (!isRegistered) {
    return (
      <div className={`min-h-screen bg-black pt-32 pb-32 px-6 md:px-12 flex items-center justify-center ${inter.className}`}>
        <div className="border-double border-4 border-white bg-black/5 p-12 max-w-2xl w-full text-center flex flex-col items-center">
          <div className={`${mono.className} text-white text-6xl mb-6`}>!</div>
          <h2 className={`${mono.className} text-white font-bold tracking-widest uppercase mb-4`}>
            [SYSTEM ERROR] UNREGISTERED NODE
          </h2>
          <p className="text-white/60 font-serif italic mb-12">
            The private sector is restricted to registered Orchestrators. You must initialize an identity to establish a Workbench and fork logic from the network.
          </p>
          <Button variant="outline" onClick={login} className="text-white border-white hover:bg-white hover:text-black">
            Initialize Identity
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#F9F9F9] dark:bg-[#050505] pt-32 pb-32 px-6 md:px-12 ${inter.className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 md:gap-0">
          <SectionHeader subtitle="User.Workbench" title="Blueprint Archive" />
          <div className={`${mono.className} text-xs uppercase tracking-widest opacity-60 flex items-center gap-2 text-black dark:text-white`}>
            <span className="text-lg">⑂</span>
            {workbenchData.length} Forked Nodes
          </div>
        </div>
        
        {workbenchData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workbenchData.map((item) => (
              <WorkbenchCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-black/20 dark:border-white/20 p-12 md:p-24 bg-transparent flex flex-col items-center justify-center text-center min-h-[50vh] relative group">
            <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02] group-hover:bg-transparent transition-colors"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className={`${mono.className} text-6xl opacity-20 mb-8`}>⑂</div>
              <h2 className={`${mono.className} text-sm md:text-base uppercase tracking-[0.3em] font-bold text-black dark:text-white mb-6`}>
                [ SYSTEM ] NO NODES IN LOCAL MEMORY.
              </h2>
              <p className="font-serif italic text-black/60 dark:text-white/60 max-w-lg mb-10 text-lg leading-relaxed">
                The Workbench is empty. Return to the Console to browse the network and fork architectural logic maps or experience nodes into your private sector.
              </p>
              <Link href="/" className={`${mono.className} border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all bg-white dark:bg-black text-black dark:text-white`}>
                Return to Console
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
