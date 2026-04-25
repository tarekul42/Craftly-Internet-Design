'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-sans p-6">
      <div className="max-w-md w-full border-double border-4 border-white bg-black p-8 md:p-12 text-center">
        <div className="font-mono text-white text-6xl mb-6">!</div>
        <div className="font-mono text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center justify-center gap-3">
          <span className="w-2 h-2 bg-white animate-pulse"></span>
          [SYSTEM ERROR] RUNTIME FAULT
        </div>
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">
          Something Went Wrong
        </h1>
        <p className="text-white/60 mb-8 font-mono italic text-sm border-l-2 border-white/30 pl-4 text-left">
          {error.message || 'An unexpected error occurred in the system. The engineering team has been alerted.'}
        </p>
        <button 
          onClick={reset}
          className="font-mono w-full bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] py-4 hover:invert transition-colors"
        >
          Retry Connection
        </button>
      </div>
    </div>
  );
}
