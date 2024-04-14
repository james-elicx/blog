import { twMerge } from 'tailwind-merge';

type Props = { isInline?: boolean } & (
  | { children: React.ReactNode; dangerouslySetInnerHTML?: never }
  | { children?: never; dangerouslySetInnerHTML: { __html: string } }
);

export const CodeBasic = ({ isInline, ...rest }: Props) => {
  const finalClassName = twMerge(
    'rounded-md border-2 border-accent/30 bg-secondary/30 font-mono text-sm transition-colors hover:border-accent/50 dark:border-accent-dark/30 dark:bg-secondary-dark/30 dark:hover:border-accent-dark/50',
    isInline ? 'px-1 py-0.5' : 'w-full whitespace-pre-wrap px-4 py-3',
  );

  return rest.children ? (
    <code className={finalClassName}>{rest.children}</code>
  ) : (
    // eslint-disable-next-line react/no-danger
    <code className={finalClassName} dangerouslySetInnerHTML={rest.dangerouslySetInnerHTML} />
  );
};
