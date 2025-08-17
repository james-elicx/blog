import Link from 'next/link';

import { CommentsWidget } from '@/components/comments';
import { ArrowLeft } from '@/components/icons';

const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <Link
      href="/snippets"
      prefetch={false}
      className="mb-2 flex flex-row items-center gap-1 text-sm text-secondary dark:text-secondary-dark"
    >
      <ArrowLeft />
      View all snippets
    </Link>

    <main className="flex flex-col gap-6">{children}</main>

    <div className="mb-16 mt-8">
      <CommentsWidget category="Snippets" categoryId="DIC_kwDOKA2v8s4CuRLM" />
    </div>
  </>
);

export default Layout;
