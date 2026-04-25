'use client';

import { LogicNode } from '@/types';

export default function LogicMap({ logicNodes }: { logicNodes: LogicNode[] }) {
  return (
    <div className="relative font-mono">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10"
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
              className="logic-node-animate bg-white border-2 border-black p-4 w-64 shadow-[4px_4px_0_0_#000] z-20 group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] transition-all"
              style={{ '--node-index': i } as React.CSSProperties}
            >
              <div className="flex justify-between items-center mb-2 border-b border-black pb-2">
                <span className="text-[11px] font-bold">NODE_{node.id}</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </div>
              <h4 className="font-bold uppercase text-sm mb-1">{node.label}</h4>
              <p className="text-[11px] opacity-70 leading-relaxed">
                {node.detail}
              </p>
            </div>

            {/* The Connecting Line */}
            {i < logicNodes.length - 1 && (
              <div 
                className="logic-line-animate w-0.5 bg-black z-10 origin-top"
                style={{ '--node-index': i } as React.CSSProperties}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
