'use client';

import { LogicNode } from '@/types';
import { motion } from 'framer-motion';

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
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border-2 border-black p-4 w-64 shadow-[4px_4px_0_0_#000] z-20 group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] transition-all"
            >
              <div className="flex justify-between items-center mb-2 border-b border-black pb-2">
                <span className="text-[10px] font-bold">NODE_{node.id}</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </div>
              <h4 className="font-bold uppercase text-sm mb-1">{node.label}</h4>
              <p className="text-[10px] opacity-70 leading-relaxed">
                {node.detail}
              </p>
            </motion.div>

            {/* The Connecting Line */}
            {i < logicNodes.length - 1 && (
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: 48 }}
                transition={{ delay: (i * 0.2) + 0.1, duration: 0.2 }}
                className="w-0.5 bg-black z-10 origin-top"
              ></motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
