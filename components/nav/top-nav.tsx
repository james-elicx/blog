export const Root = ({ children }: React.PropsWithChildren) => (
  <nav className="my-8 flex flex-row items-center justify-between max-xs:flex-col">{children}</nav>
);

export const Section = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-row items-center gap-2">{children}</div>
);
