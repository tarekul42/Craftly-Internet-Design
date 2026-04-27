interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="role-label font-bold text-black/40 dark:text-white/40 mb-4">
        {subtitle}
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none text-black dark:text-white" style={{ fontFamily: 'var(--font-ui)', textTransform: 'var(--label-transform)' }}>
        {title}
      </h1>
    </div>
  );
}
