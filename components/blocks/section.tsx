import Link from 'next/link';
import { ArrowRight } from '../icons';

export const Root = ({ children }: React.PropsWithChildren) => (
  <section className="flex flex-col gap-2">{children}</section>
);

export const Title = ({
  children,
  link,
}: React.PropsWithChildren<{ link?: { text: string; href: string } }>) => (
  <div className="flex flex-row items-center justify-between">
    <h2 className="text-2xl">{children}</h2>

    {link && (
      <Link
        href={link.href}
        prefetch={false}
        className="flex flex-row items-center gap-1 text-sm text-secondary dark:text-secondary-dark"
      >
        {link.text}

        <ArrowRight />
      </Link>
    )}
  </div>
);

export const Body = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col gap-1">{children}</div>
);

export const Grid = ({ children }: React.PropsWithChildren) => (
  <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">{children}</div>
);
