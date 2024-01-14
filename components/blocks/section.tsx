export const Root = ({ children }: React.PropsWithChildren) => (
  <section className="flex flex-col gap-2">{children}</section>
);

export const Title = ({ children }: React.PropsWithChildren) => <h3>{children}</h3>;

export const Body = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col gap-2">{children}</div>
);
