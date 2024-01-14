import { Comments } from './comments';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <main className="flex flex-col gap-6">{children}</main>

    <div className="mb-16 mt-8">
      <Comments />
    </div>
  </>
);

export default Layout;
