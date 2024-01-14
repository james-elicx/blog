export const Root = ({ children }: React.PropsWithChildren) => (
  <nav className="my-8 flex flex-row items-center justify-between max-xs:flex-col">{children}</nav>
);

export const Section = ({ children, gap = 2 }: React.PropsWithChildren<{ gap?: 2 | 6 }>) => (
  <div className={`flex flex-row items-center ${gap === 2 ? 'gap-2' : 'gap-6'}`}>{children}</div>
);
