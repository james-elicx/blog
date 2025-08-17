import { CommentsWidget } from '@/components/comments';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <main className="flex flex-col gap-6">{children}</main>

    <div className="mb-16 mt-8">
      <CommentsWidget category="Blog Posts" categoryId="DIC_kwDOKA2v8s4CcatM" />
    </div>
  </>
);

export default Layout;
