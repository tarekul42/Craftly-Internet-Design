'use client';

import { Inter, JetBrains_Mono } from 'next/font/google';
import { useAuth } from '@/components/Auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });
const mono = JetBrains_Mono({ subsets: ['latin'] });

export default function IdentityPage() {
  const { isRegistered, role, login, logout, setRole } = useAuth();
  const router = useRouter();

  if (!isRegistered) {
    return (
      <div className={`flex items-center justify-center min-h-screen bg-black ${inter.className} p-6`}>
        <div className="max-w-md w-full border-double border-4 border-white bg-black p-8 md:p-12">
          <div className={`${mono.className} text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3`}>
            <span className="w-2 h-2 bg-white animate-pulse"></span>
            [SYSTEM ERROR] UNREGISTERED NODE
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">
            Access Denied
          </h1>
          <p className="text-white/60 mb-8 font-serif italic text-lg border-l-2 border-white/30 pl-4">
            &quot;The identity matrix is locked. You must initialize your digital presence to view this sector.&quot;
          </p>
          <button 
            onClick={login}
            className={`${mono.className} w-full bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] py-4 hover:invert transition-colors`}
          >
            Initialize Identity
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className={`min-h-screen bg-white pt-20 ${inter.className}`}>
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black pb-8 md:pb-12 mb-8 md:mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-black text-white flex items-center justify-center font-brand text-4xl md:text-5xl flex-shrink-0">
              U
            </div>
            <div>
              <h2 className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2`}>
                System.Identity // Orchestrator Profile
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                USER.NODE_001
              </h1>
            </div>
          </div>
          <div className={`${mono.className} text-[9px] uppercase tracking-widest opacity-30 mt-6 md:mt-0`}>
            Status: Active
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-black p-6 md:p-8 bg-gray-50">
            <div className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4`}>
              {role === 'engineer' ? 'Global Fork Rate' : role === 'builder' ? 'Total App Installs' : 'Discovery Points'}
            </div>
            <div className="text-4xl md:text-5xl font-mono font-bold flex items-center gap-3">
              <span className="opacity-30">{role === 'engineer' ? '⑂' : role === 'builder' ? '⤓' : '☼'}</span> {role === 'engineer' ? '842' : role === 'builder' ? '12.4k' : '450'}
            </div>
          </div>
          
          <div className="border border-black p-6 md:p-8 bg-gray-50">
            <div className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4`}>
              {role === 'engineer' ? 'Nodes Broadcasted' : role === 'builder' ? 'Apps Published' : 'Nodes Saved'}
            </div>
            <div className="text-4xl md:text-5xl font-mono font-bold">
              {role === 'engineer' ? '12' : role === 'builder' ? '4' : '28'}
            </div>
          </div>

          <div className="border border-black p-6 md:p-8 bg-gray-50">
            <div className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4`}>
              {role === 'engineer' ? 'Peer Audits' : role === 'builder' ? 'Revenue Share' : 'Contributions'}
            </div>
            <div className="text-4xl md:text-5xl font-mono font-bold flex items-center gap-3">
              <span className="opacity-30">{role === 'engineer' ? '[A]' : role === 'builder' ? '$' : '◈'}</span> {role === 'engineer' ? '56' : role === 'builder' ? '0.85' : '12'}
            </div>
          </div>
        </div>

        {/* Role Selection */}
        <div className="mb-12 border-2 border-black p-8">
          <h2 className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-6`}>
            Switch Operational Mode
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(['engineer', 'builder', 'guest'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold py-4 border transition-all ${role === r ? 'bg-black text-white border-black' : 'bg-transparent text-black border-black/20 hover:border-black'}`}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <Link 
            href="/init"
            className="group block border-2 border-black p-8 md:p-12 hover:bg-black transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase group-hover:text-white transition-colors">
                  + {role === 'engineer' ? 'Initialize New Node' : role === 'builder' ? 'Publish New App' : 'Join a Network'}
                </h3>
                <p className={`${mono.className} text-xs uppercase tracking-widest opacity-50 group-hover:text-white/70 mt-2`}>
                  {role === 'engineer' ? 'Broadcast architectural logic to the network' : role === 'builder' ? 'Launch your orchestrator to the global community' : 'Connect with other digital orchestrators'}
                </p>
              </div>
              <div className="text-4xl group-hover:text-white transition-colors hidden md:block">→</div>
            </div>
          </Link>
        </div>

        {/* Danger Zone */}
        <div className="border-t border-black/10 pt-12 flex justify-center">
          <button 
            onClick={handleLogout}
            className={`${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-black dark:border-white px-8 py-4 transition-all`}
          >
            [TERMINATE CONNECTION]
          </button>
        </div>

      </div>
    </div>
  );
}
