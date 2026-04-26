'use client';

import { Orchestrator } from '@/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useToast } from '@/components/Toast';
import { useAuth } from '@/components/Auth';
import { getRoleCopy } from '@/lib/roleCopy';
import { orchestratorsByRole } from '@/data/mockData';

const OrchestratorCard = ({ orchestrator }: { orchestrator: Orchestrator }) => {
  const { toast } = useToast();
  const { isRegistered, role } = useAuth();
  const copy = getRoleCopy(role);
  
  return (
    <div className="border border-black/10 dark:border-white/10 bg-white dark:bg-black flex flex-col group hover:shadow-elegant dark:hover:shadow-elegant-dark transition-all duration-500">
      <div className="p-6 border-b border-black/10 dark:border-white/10 flex justify-between items-start bg-brandGray-50 dark:bg-brandGray-950">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg">
              {orchestrator.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-lg leading-none text-black dark:text-white">{orchestrator.name}</h3>
              <div className="font-mono text-[11px] tracking-widest opacity-50 mt-1 text-black dark:text-white">
                {copy.networkIdLabel.replace('{id}', orchestrator.id.toUpperCase())}
              </div>
            </div>
          </div>
        </div>
        <div className={`w-2 h-2 rounded-full mt-2 ${orchestrator.status === 'active' ? 'bg-black dark:bg-white animate-pulse' : 'border border-black/20 dark:border-white/20'}`}></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col text-black dark:text-white">
        <div className="mb-6">
          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-2">
            {copy.networkSpecLabel}
          </div>
          <p className="text-sm font-medium leading-relaxed">
            {orchestrator.specialty}
          </p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-black/10 dark:border-white/10 pt-6">
          <div>
            <div className="font-mono text-[11px] uppercase opacity-50 mb-1">{copy.networkMetric1}</div>
            <div className="font-bold text-xl font-mono">{orchestrator.metrics.nodesBroadcasted}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase opacity-50 mb-1">{copy.networkMetric2}</div>
            <div className="font-bold text-xl font-mono flex items-center gap-1">
              <span className="text-sm opacity-50">{copy.forkIcon}</span> {orchestrator.metrics.forkRate}
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => {
          if (!isRegistered) {
            toast(copy.toasts.unauthorized, 'warning');
            return;
          }
          toast(copy.toasts.networkPing.replace('{name}', orchestrator.name), 'success');
        }}
        className="font-mono w-full text-[11px] uppercase tracking-[0.3em] font-bold border-t border-black/10 dark:border-white/10 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-black dark:text-white"
      >
        {copy.networkAction}
      </button>
    </div>
  );
};

export default function NetworkPage() {
  const { role } = useAuth();
  const copy = getRoleCopy(role);
  const orchestrators = orchestratorsByRole[role];

  return (
    <div className="min-h-screen bg-brandGray-100 dark:bg-brandGray-975 pt-32 pb-32 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 md:gap-0">
          <SectionHeader subtitle={copy.networkSection} title={copy.networkTitle} />
          <div className="font-mono text-xs uppercase tracking-widest opacity-60 flex items-center gap-3 text-black dark:text-white">
            <span className="w-3 h-3 bg-black dark:bg-white rounded-full animate-pulse"></span>
            {orchestrators.filter(o => o.status === 'active').length} {copy.networkCount}
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
