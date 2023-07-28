import Link from 'next/link';
import { GithubLogo, TwitterLogo } from '../icons';
import { ThemeToggle } from '../providers';

export const TopNav = () => (
  <nav className="my-8 flex flex-row items-center justify-between max-xs:flex-col">
    <Link href="/" className="text-lg font-semibold">
      James
    </Link>

    <div className="flex flex-row items-center gap-2">
      <Link title="GitHub" target="_blank" href="https://github.com/james-elicx">
        <GithubLogo size={28} />
      </Link>

      <Link title="Twitter" target="_blank" href="https://twitter.com/james_elicx">
        <TwitterLogo size={28} />
      </Link>

      <ThemeToggle />
    </div>
  </nav>
);
