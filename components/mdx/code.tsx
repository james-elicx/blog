import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLElement> & { isInline?: boolean };

export const Code = ({ isInline, className, ...props }: Props) => (
  <code
    className={twMerge(
      'rounded-md border-2 border-accent/30 bg-secondary/30 font-mono text-sm transition-colors hover:border-accent/50 dark:border-accent-dark/30 dark:bg-secondary-dark/30 dark:hover:border-accent-dark/50',
      isInline ? 'px-1 py-0.5' : 'w-full whitespace-pre-wrap px-4 py-3',
      className,
    )}
    {...props}
  />
);
