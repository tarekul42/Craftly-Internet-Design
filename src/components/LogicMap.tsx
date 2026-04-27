'use client';

import { LogicNode } from '@/types';

import { useAuth } from '@/components/Auth';

export default function LogicMap({ logicNodes }: { logicNodes: LogicNode[] }) {
  const { role } = useAuth();
  
  return (
    <div className={`relative ${role === 'engineer' ? 'font-mono' : 'font-sans'}`}>
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center py-8">
        {logicNodes.map((node, i) => (
          <div key={node.id} className="relative flex flex-col items-center">
            {/* The Node Block */}
            <div 
              className={`logic-node-animate bg-white dark:bg-black border border-black/20 dark:border-white/20 p-5 w-64 z-20 transition-all duration-500 hover:border-black dark:hover:border-white card-radius ${
                role === 'guest' ? 'p-7' : ''
              }`}
              style={{ 
                '--node-index': i,
                boxShadow: 'var(--shadow-card)'
              } as React.CSSProperties}
            >
              <div className="flex justify-between items-center mb-3 border-b border-black/5 dark:border-white/5 pb-2">
                <span className="role-label text-[10px] font-bold opacity-30 tracking-tighter">{node.id}</span>
                <span className={`w-1.5 h-1.5 rounded-full bg-black dark:bg-white opacity-20 ${role === 'guest' ? 'opacity-40 animate-pulse' : ''}`}></span>
              </div>
              <h4 className={`font-bold text-[13px] mb-1 leading-tight ${role === 'engineer' ? 'uppercase' : ''}`}>{node.label}</h4>
              <p className="text-[11px] opacity-60 leading-relaxed font-medium">
                {node.detail}
              </p>
            </div>

            {/* The Connecting Line */}
            {i < logicNodes.length - 1 && (
              <div 
                className="logic-line-animate w-[1px] bg-black/10 dark:bg-white/10 z-10 origin-top"
                style={{ '--node-index': i } as React.CSSProperties}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
