'use client';

import { useState } from 'react';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { useToast } from '@/components/Toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/Auth';
import { useData } from '@/components/DataContext';

const mono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function InitNodePage() {
  const [nodeType, setNodeType] = useState<'project' | 'experience'>('experience');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  
  const { toast } = useToast();
  const router = useRouter();
  const { isRegistered, login } = useAuth();
  const { broadcastPost } = useData();

  if (!isRegistered) {
    return (
      <div className={`flex items-center justify-center min-h-screen bg-black ${inter.className} p-6`}>
        <div className="max-w-md w-full border border-red-500 bg-black p-8 md:p-12">
          <div className={`${mono.className} text-red-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3`}>
            <span className="w-2 h-2 bg-red-500 animate-pulse"></span>
            [SYSTEM ERROR] UNREGISTERED NODE
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">
            Access Denied
          </h1>
          <p className="text-white/60 mb-8 font-serif italic text-lg border-l-2 border-red-500/50 pl-4">
            &quot;The initialization sector is locked. You must establish your digital identity to broadcast logic to the network.&quot;
          </p>
          <button 
            onClick={login}
            className={`${mono.className} w-full bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] py-4 hover:bg-red-500 hover:text-white transition-colors`}
          >
            Initialize Identity
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
        creator: 'USER.NODE_001',
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
          name: 'Architectural Broadcast',
          tagline: 'System Node Init',
          description: content.trim(),
          heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
          caseStudy: {
            problem: 'Initialization of new node architecture.',
            solution: content.trim(),
            impact: 'System expanded.'
          },
          implementation: {
            logicNodes: [
              { id: '1', label: 'Init', detail: 'Node initialized via Console' }
            ]
          }
        });
      }

      setIsBroadcasting(false);
      toast('[CONSOLE] NODE SUCCESSFULLY BROADCASTED', 'success');
      router.push('/');
    }, 1500);
  };

  return (
    <div className={`min-h-screen bg-black text-white pt-32 pb-32 px-6 md:px-12 ${inter.className}`}>
      <div className="max-w-2xl mx-auto">
        <div className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4`}>
          System.Execute
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
          Initialize Node
        </h1>
        
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className={`${mono.className} block text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2`}>
              Node Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                onClick={() => setNodeType('project')}
                className={`border p-4 text-left transition-colors ${nodeType === 'project' ? 'border-white bg-white text-black' : 'border-white/20 bg-white/5 text-white hover:border-white'}`}
              >
                <div className="font-bold mb-1">Project</div>
                <div className={`${mono.className} text-[9px] opacity-50 uppercase`}>Architectural Case Study</div>
              </button>
              <button 
                type="button" 
                onClick={() => setNodeType('experience')}
                className={`border p-4 text-left transition-colors ${nodeType === 'experience' ? 'border-white bg-white text-black' : 'border-white/20 bg-white/5 text-white hover:border-white'}`}
              >
                <div className="font-bold mb-1">Experience</div>
                <div className={`${mono.className} text-[9px] opacity-50 uppercase`}>Developer Log / Reflection</div>
              </button>
            </div>
          </div>

          <div>
            <label className={`${mono.className} block text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2`}>
              Data Stream (Content)
            </label>
            <textarea 
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors resize-none font-serif text-lg italic placeholder:text-white/20"
              placeholder={nodeType === 'experience' ? "Enter your thought process or reflection here..." : "Describe the problem, solution, and architecture..."}
            ></textarea>
          </div>

          <div>
            <label className={`${mono.className} block text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2`}>
              Tags (Optional)
            </label>
            <input 
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
              placeholder="e.g. performance, architecture, design-systems"
            />
          </div>

          <button 
            type="submit" 
            disabled={isBroadcasting || !content.trim()}
            className={`${mono.className} w-full text-xs uppercase tracking-[0.3em] font-bold py-6 transition-colors ${isBroadcasting ? 'bg-white/20 text-white cursor-not-allowed' : 'bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed'}`}
          >
            {isBroadcasting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                Broadcasting...
              </span>
            ) : 'Broadcast to Console'}
          </button>
        </form>
      </div>
    </div>
  );
}
