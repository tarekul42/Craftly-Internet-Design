import { JetBrains_Mono } from 'next/font/google';

const mono = JetBrains_Mono({ subsets: ['latin'] });

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-4`}>
        {subtitle}
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none text-black dark:text-white">
        {title}
      </h1>
    </div>
  );
}
