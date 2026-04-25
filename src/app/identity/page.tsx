'use client';

import { useAuth } from '@/components/Auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getRoleCopy } from '@/lib/roleCopy';

export default function IdentityPage() {
  const { isRegistered, role, login, logout, setRole } = useAuth();
  const router = useRouter();
  const copy = getRoleCopy(role);

  if (!isRegistered) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black font-sans p-6">
        <div className="max-w-md w-full border-double border-4 border-white bg-black p-8 md:p-12">
          <div className="font-mono text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-white animate-pulse"></span>
            [SYSTEM ERROR] UNREGISTERED NODE
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">
            Access Denied
          </h1>
          <p className="text-white/60 mb-8 font-mono italic text-lg border-l-2 border-white/30 pl-4">
            &quot;The identity matrix is locked. You must initialize your digital presence to view this sector.&quot;
          </p>
          <button 
            onClick={login}
            className="font-mono w-full bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] py-4 hover:invert transition-colors"
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
    <div className="min-h-screen bg-white pt-20 font-sans">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/10 pb-8 md:pb-12 mb-8 md:mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-black text-white flex items-center justify-center font-bold text-4xl md:text-5xl flex-shrink-0">
              U
            </div>
            <div>
              <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-2">
                System.Identity // Orchestrator Profile
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                USER.NODE_001
              </h1>
            </div>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest opacity-30 mt-6 md:mt-0">
            Status: Active
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-black/10 p-6 md:p-8 bg-brandGray-50">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
              {copy.identityMetric1Label}
            </div>
            <div className="text-4xl md:text-5xl font-mono font-bold flex items-center gap-3">
              <span className="opacity-30">{copy.identityMetric1Icon}</span> {copy.identityMetric1Value}
            </div>
          </div>
          
          <div className="border border-black/10 p-6 md:p-8 bg-brandGray-50">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
              {copy.identityMetric2Label}
            </div>
            <div className="text-4xl md:text-5xl font-mono font-bold">
              {copy.identityMetric2Value}
            </div>
          </div>

          <div className="border border-black/10 p-6 md:p-8 bg-brandGray-50">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
              {copy.identityMetric3Label}
            </div>
            <div className="text-4xl md:text-5xl font-mono font-bold flex items-center gap-3">
              <span className="opacity-30">{copy.identityMetric3Icon}</span> {copy.identityMetric3Value}
            </div>
          </div>
        </div>

        {/* Role Selection */}
        <div className="mb-12 border border-black/10 p-8 bg-brandGray-50">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">
            Switch Operational Mode
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(['engineer', 'builder', 'guest'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] font-bold py-4 border transition-all ${role === r ? 'bg-black text-white border-black' : 'bg-transparent text-black border-black/10 hover:border-black'}`}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <Link 
            href="/init"
            className="group block border border-black/10 p-8 md:p-12 hover:bg-black transition-colors shadow-elegant"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase group-hover:text-white transition-colors">
                  + {copy.identityAction}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest opacity-50 group-hover:text-white/70 mt-2">
                  {copy.identityActionDesc}
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
            className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-black/10 dark:border-white/10 px-8 py-4 transition-all"
          >
            [TERMINATE CONNECTION]
          </button>
        </div>

      </div>
    </div>
  );
}
