export const Root = ({ children }: React.PropsWithChildren) => (
  <section className="flex flex-col gap-2">{children}</section>
);

export const Title = ({ children }: React.PropsWithChildren) => (
  <h2 className="text-2xl">{children}</h2>
);

export const Body = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col gap-1">{children}</div>
);
