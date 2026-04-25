'use client';

import { JetBrains_Mono, Inter } from 'next/font/google';
import { orchestrators } from '@/data/mockData';
import { Orchestrator } from '@/types';
import { SectionHeader } from '@/components/ui/SectionHeader';

const mono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

import { useToast } from '@/components/Toast';
import { useAuth } from '@/components/Auth';

const OrchestratorCard = ({ orchestrator }: { orchestrator: Orchestrator }) => {
  const { toast } = useToast();
  const { isRegistered } = useAuth();
  
  return (
    <div className="border border-black dark:border-white bg-white dark:bg-black flex flex-col group hover:shadow-[8px_8px_0_0_#000] dark:hover:shadow-[8px_8px_0_0_#fff] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
      <div className="p-6 border-b border-black dark:border-white flex justify-between items-start bg-[#fcfcfc] dark:bg-[#0a0a0a]">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-brand text-xl">
              {orchestrator.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-lg leading-none text-black dark:text-white">{orchestrator.name}</h3>
              <div className={`${mono.className} text-[9px] uppercase tracking-[0.2em] opacity-50 mt-1 text-black dark:text-white`}>
                ID // {orchestrator.id.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
        <div className={`w-2 h-2 rounded-full mt-2 ${orchestrator.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-black/20 dark:bg-white/20'}`}></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col text-black dark:text-white">
        <div className="mb-6">
          <div className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-2`}>
            Aura // Specialty
          </div>
          <p className="text-sm font-medium leading-relaxed">
            {orchestrator.specialty}
          </p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-black/10 dark:border-white/10 pt-6">
          <div>
            <div className={`${mono.className} text-[10px] uppercase opacity-50 mb-1`}>Broadcasts</div>
            <div className="font-bold text-xl font-mono">{orchestrator.metrics.nodesBroadcasted}</div>
          </div>
          <div>
            <div className={`${mono.className} text-[10px] uppercase opacity-50 mb-1`}>Fork Rate</div>
            <div className="font-bold text-xl font-mono flex items-center gap-1">
              <span className="text-sm opacity-50">⑂</span> {orchestrator.metrics.forkRate}
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => {
          if (!isRegistered) {
            toast('[ERROR] UNAUTHORIZED. INITIALIZE IDENTITY.', 'warning');
            return;
          }
          toast(`[NETWORK] NODE PINGED: ${orchestrator.id.toUpperCase()}`, 'success');
        }}
        className={`${mono.className} w-full text-[10px] uppercase tracking-[0.3em] font-bold border-t border-black dark:border-white py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-black dark:text-white`}
      >
        Ping Node
      </button>
    </div>
  );
};

export default function NetworkPage() {
  return (
    <div className={`min-h-screen bg-[#F9F9F9] dark:bg-[#050505] pt-32 pb-32 px-6 md:px-12 ${inter.className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 md:gap-0">
          <SectionHeader subtitle="System.Network" title="Global Nodes" />
          <div className={`${mono.className} text-xs uppercase tracking-widest opacity-60 flex items-center gap-3 text-black dark:text-white`}>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            {orchestrators.filter(o => o.status === 'active').length} Active Orchestrators
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orchestrators.map(orchestrator => (
            <OrchestratorCard key={orchestrator.id} orchestrator={orchestrator} />
          ))}
        </div>
      </div>
    </div>
  );
}
