import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
  className?: string;
};

const sizeStyles = {
  sm: {
    icon: 'h-10 w-10',
    name: 'text-sm',
    sub: 'text-[10px]',
    gap: 'gap-2.5',
  },
  md: {
    icon: 'h-12 w-12',
    name: 'text-base',
    sub: 'text-[11px]',
    gap: 'gap-3',
  },
  lg: {
    icon: 'h-14 w-14',
    name: 'text-lg',
    sub: 'text-xs',
    gap: 'gap-3',
  },
};

const variantStyles = {
  light: {
    text: 'text-slate-900',
    sub: 'text-slate-500',
    shell: 'bg-white ring-1 ring-slate-200 shadow-sm',
  },
  dark: {
    text: 'text-white',
    sub: 'text-white/70',
    shell: 'bg-white/10 ring-1 ring-white/25 shadow-sm',
  },
};

export default function Logo({
  variant = 'light',
  size = 'md',
  iconOnly = false,
  className,
}: LogoProps) {
  const sizeClass = sizeStyles[size];
  const colorClass = variantStyles[variant];
  const label = 'AzkaTravel Trip Studio';
  const logoSrc = '/_.png';

  return (
    <div className={cn('inline-flex items-center', sizeClass.gap, className)}>
      <span
        className={cn(
          'flex items-center justify-center overflow-hidden rounded-full',
          sizeClass.icon,
          colorClass.shell,
        )}
        aria-hidden="true"
      >
        <img
          src={logoSrc}
          alt="AzkaTravel logo"
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </span>
      {iconOnly ? (
        <span className="sr-only">{label}</span>
      ) : (
        <span className="leading-tight">
          <span
            className={cn(
              'block font-[var(--font-display)] tracking-wide',
              sizeClass.name,
              colorClass.text,
            )}
          >
            AzkaTravel
          </span>
          <span
            className={cn(
              'block uppercase tracking-[0.35em]',
              sizeClass.sub,
              colorClass.sub,
            )}
          >
            Trip Studio
          </span>
        </span>
      )}
    </div>
  );
}
